// app/api/send/route.ts - Enhanced with templates and tracking
import { Resend } from 'resend';
import {
  contactNotificationTemplate,
  contactAutoReplyTemplate,
  validateFormData,
  sanitizeData,
  type ContactFormData,
} from '@/app/lib/email';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    console.log('Contact form submission received');

    const body = await req.json();
    console.log('Form data:', {
      name: body.name,
      email: body.email,
      service: body.service,
      hasMessage: !!body.message,
    });

    // Validate required fields
    const validation = validateFormData(body, ['name', 'email', 'message']);
    if (!validation.isValid) {
      console.error('Validation failed:', validation.errors);
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Validation failed',
          details: validation.errors,
        }),
        { status: 400 }
      );
    }

    // Sanitize and type the form data
    const formData: ContactFormData = sanitizeData(body);

    // Generate notification email using template
    console.log('Creating notification email template...');
    const notificationEmail = contactNotificationTemplate(formData);

    // Send notification email to you
    console.log('Sending notification email to hello@lenuv.io');
    const notificationResult = await resend.emails.send({
      ...notificationEmail,
      to: 'hello@lenuv.io', // Override the template's default
    });

    if (notificationResult.error) {
      console.error('Notification email failed:', notificationResult.error);
      throw new Error(
        `Notification email failed: ${notificationResult.error.message}`
      );
    }

    console.log(
      'Notification email sent successfully:',
      notificationResult.data?.id
    );

    // Generate auto-reply email using template
    console.log('Creating auto-reply email template...');
    const autoReplyEmail = contactAutoReplyTemplate(formData);

    // Send auto-reply email to the user
    console.log('Sending auto-reply email to:', formData.email);
    const autoReplyResult = await resend.emails.send(autoReplyEmail);

    if (autoReplyResult.error) {
      console.error('Auto-reply email failed:', autoReplyResult.error);
      // Don't throw error - notification was successful
    } else {
      console.log(
        'Auto-reply email sent successfully:',
        autoReplyResult.data?.id
      );
    }

    // Return success response with tracking IDs
    const response = {
      success: true,
      message: 'Contact form submitted successfully',
      tracking: {
        notificationId: notificationResult.data?.id,
        autoReplyId: autoReplyResult.data?.id || null,
        timestamp: new Date().toISOString(),
        formData: {
          name: formData.name,
          email: formData.email,
          service: formData.service,
        },
      },
    };

    console.log('Contact form processed successfully:', response.tracking);

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Contact form API error:', error);

    const errorResponse = {
      success: false,
      error: 'Failed to process contact form',
      details: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString(),
    };

    return new Response(JSON.stringify(errorResponse), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

// Health check endpoint
export async function GET() {
  try {
    // Test Resend connection
    const testResult = await resend.emails.send({
      from: 'Lenuvio <info@lenuv.io>',
      to: 'hello@lenuv.io',
      subject: 'API Health Check',
      text: 'This is a health check email from your contact form API.',
    });

    return new Response(
      JSON.stringify({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        resend: {
          connected: !testResult.error,
          testEmailId: testResult.data?.id || null,
          error: testResult.error?.message || null,
        },
        environment: {
          hasResendKey: !!process.env.RESEND_API_KEY,
          nodeEnv: process.env.NODE_ENV,
        },
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        status: 'unhealthy',
        error: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString(),
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
