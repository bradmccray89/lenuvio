/* eslint-disable @typescript-eslint/no-explicit-any */
// app/api/audience/route.ts - Updated with resubscribe logic
import { newsletterWelcomeTemplate } from '@/app/lib/email/templates/newsletter/welcome';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID || '';

export async function POST(request: Request) {
  try {
    console.log('Processing newsletter signup request');

    const body = await request.json();
    const { email, firstName, lastName } = body;

    // Validate required fields
    if (!email) {
      console.error('Email is required');
      return NextResponse.json(
        {
          success: false,
          error: 'Email is required',
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error('Invalid email format:', email);
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid email format',
        },
        { status: 400 }
      );
    }

    console.log('Contact data:', { email, firstName, lastName });

    try {
      // First, try to get the existing contact
      console.log('Checking for existing contact:', email);
      const existingContact = await resend.contacts.get({
        audienceId: AUDIENCE_ID,
        email: email,
      });

      if (existingContact.data) {
        console.log('Found existing contact:', existingContact.data);

        // Check if they're unsubscribed
        if (existingContact.data.unsubscribed) {
          console.log('Contact is unsubscribed, resubscribing...');

          // Resubscribe them
          const updateResult = await resend.contacts.update({
            audienceId: AUDIENCE_ID,
            email: email,
            firstName: firstName || existingContact.data.first_name || '',
            lastName: lastName || existingContact.data.last_name || '',
            unsubscribed: false,
          });

          if (updateResult.error) {
            console.error('Failed to resubscribe contact:', updateResult.error);
            throw new Error(
              `Failed to resubscribe: ${updateResult.error.message}`
            );
          }

          console.log('Successfully resubscribed:', email);

          // Send welcome back email
          const welcomeEmail = newsletterWelcomeTemplate({
            email,
            name: firstName || existingContact.data.first_name || undefined,
          });

          // Customize subject for returning subscribers
          welcomeEmail.subject = `Welcome back to Lenuvio Updates, ${firstName || existingContact.data.first_name || 'there'}! 🎉`;

          const emailResult = await resend.emails.send(welcomeEmail);

          if (emailResult.error) {
            console.error('Welcome back email failed:', emailResult.error);
          } else {
            console.log('Welcome back email sent:', emailResult.data?.id);
          }

          return NextResponse.json({
            success: true,
            resubscribed: true,
            message: 'Successfully resubscribed to newsletter',
            contactId: existingContact.data.id,
            welcomeEmailId: emailResult.data?.id || null,
            audienceId: AUDIENCE_ID,
            timestamp: new Date().toISOString(),
          });
        } else {
          // They're already subscribed and active
          console.log('Contact already active:', email);
          return NextResponse.json({
            success: true,
            alreadyExists: true,
            message: 'Email is already subscribed to our newsletter',
            contactId: existingContact.data.id,
            audienceId: AUDIENCE_ID,
            timestamp: new Date().toISOString(),
          });
        }
      } else {
        // Contact doesn't exist, create new one
        console.log('Contact not found, creating new contact:', email);
        return await createNewContact(email, firstName, lastName);
      }
    } catch (resendError: any) {
      console.error('Resend API error:', resendError);

      // Handle case where contact doesn't exist (some Resend versions throw error instead of returning null)
      if (
        resendError.message &&
        (resendError.message.includes('not found') ||
          resendError.message.includes('does not exist') ||
          resendError.message.includes('Contact not found'))
      ) {
        console.log(
          'Contact not found via error, creating new contact:',
          email
        );
        return await createNewContact(email, firstName, lastName);
      }

      // If it's a different error, throw it
      throw resendError;
    }
  } catch (error) {
    console.error('Audience API error:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to process newsletter subscription',
        details: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}

// Helper function to create new contact
async function createNewContact(
  email: string,
  firstName?: string,
  lastName?: string
) {
  console.log('Creating new contact in audience:', AUDIENCE_ID);

  const contactResult = await resend.contacts.create({
    audienceId: AUDIENCE_ID,
    email: email,
    firstName: firstName || '',
    lastName: lastName || '',
    unsubscribed: false,
  });

  if (contactResult.error) {
    console.error('Failed to create new contact:', contactResult.error);

    // Handle case where contact was created between our check and now
    if (contactResult.error.message?.includes('already exists')) {
      return NextResponse.json({
        success: true,
        alreadyExists: true,
        message: 'Contact already exists in audience',
        contactId: null,
        audienceId: AUDIENCE_ID,
        timestamp: new Date().toISOString(),
      });
    }

    throw new Error(`Failed to create contact: ${contactResult.error.message}`);
  }

  console.log('New contact created successfully:', contactResult.data?.id);

  // Send welcome email
  console.log('Sending welcome email to new subscriber:', email);
  const welcomeEmail = newsletterWelcomeTemplate({
    email,
    name: firstName,
  });

  const welcomeResult = await resend.emails.send(welcomeEmail);

  if (welcomeResult.error) {
    console.error('Welcome email failed:', welcomeResult.error);
  } else {
    console.log('Welcome email sent successfully:', welcomeResult.data?.id);
  }

  return NextResponse.json({
    success: true,
    newSubscriber: true,
    message: 'Successfully subscribed to newsletter',
    contactId: contactResult.data?.id,
    welcomeEmailId: welcomeResult.data?.id || null,
    audienceId: AUDIENCE_ID,
    timestamp: new Date().toISOString(),
  });
}

// Health check endpoint
export async function GET() {
  try {
    return NextResponse.json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      environment: {
        hasResendKey: !!process.env.RESEND_API_KEY,
        hasAudienceId: !!AUDIENCE_ID,
        hasUnsubscribeSecret: !!process.env.UNSUBSCRIBE_SECRET,
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: 'unhealthy',
        error: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
