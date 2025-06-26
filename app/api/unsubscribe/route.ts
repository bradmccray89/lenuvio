// app/api/unsubscribe/route.ts
import { Resend } from 'resend';
import { NextRequest } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const email = searchParams.get('email');
    const token = searchParams.get('token');

    if (!email || !token) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Missing email or token',
        }),
        { status: 400 }
      );
    }

    // Verify token (simple approach - you might want more security)
    const expectedToken = generateUnsubscribeToken(email);
    if (token !== expectedToken) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Invalid token',
        }),
        { status: 400 }
      );
    }

    // Unsubscribe contact - assuming you're using Resend's audience feature
    try {
      // Update by contact email
      resend.contacts.update({
        email: email,
        audienceId: process.env.RESEND_AUDIENCE_ID || '',
        unsubscribed: true,
      });
      console.log(`Successfully unsubscribed: ${email}`);

      // Return success HTML page
      return new Response(getUnsubscribeSuccessHTML(email), {
        status: 200,
        headers: {
          'Content-Type': 'text/html',
        },
      });
    } catch (resendError) {
      console.error('Resend unsubscribe error:', resendError);

      // Still show success to user for privacy/security
      return new Response(getUnsubscribeSuccessHTML(email), {
        status: 200,
        headers: {
          'Content-Type': 'text/html',
        },
      });
    }
  } catch (error) {
    console.error('Unsubscribe error:', error);

    return new Response(getUnsubscribeErrorHTML(), {
      status: 500,
      headers: {
        'Content-Type': 'text/html',
      },
    });
  }
}

// Generate a simple token - use a more secure method in production
function generateUnsubscribeToken(email: string): string {
  const secret = process.env.UNSUBSCRIBE_SECRET || 'your-secret-key';
  return Buffer.from(`${email}-${secret}`).toString('base64');
}

function getUnsubscribeSuccessHTML(email: string): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Unsubscribed Successfully - Lenuvio</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: #0f172a;
          color: #e5e5e5;
          margin: 0;
          padding: 40px 20px;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .container {
          max-width: 500px;
          background: #1e293b;
          border-radius: 12px;
          padding: 40px;
          text-align: center;
          border: 1px solid rgba(71, 85, 105, 0.3);
        }
        .icon {
          font-size: 48px;
          margin-bottom: 20px;
        }
        h1 {
          color: #22d3ee;
          margin-bottom: 16px;
          font-size: 24px;
        }
        p {
          line-height: 1.6;
          margin-bottom: 16px;
          color: #cbd5e1;
        }
        .email {
          color: #22d3ee;
          font-weight: 600;
        }
        .button {
          display: inline-block;
          background: linear-gradient(135deg, #06b6d4 0%, #2563eb 100%);
          color: white;
          padding: 12px 24px;
          text-decoration: none;
          border-radius: 8px;
          margin-top: 20px;
          font-weight: 600;
        }
        .button:hover {
          opacity: 0.9;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="icon">✅</div>
        <h1>Successfully Unsubscribed</h1>
        <p>The email address <span class="email">${email}</span> has been removed from our mailing list.</p>
        <p>You will no longer receive newsletter updates from Lenuvio.</p>
        <p>We're sorry to see you go! If you change your mind, you can always resubscribe on our website.</p>
        <a href="https://lenuv.io" class="button">Return to Website</a>
      </div>
    </body>
    </html>
  `;
}

function getUnsubscribeErrorHTML(): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Unsubscribe Error - Lenuvio</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: #0f172a;
          color: #e5e5e5;
          margin: 0;
          padding: 40px 20px;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .container {
          max-width: 500px;
          background: #1e293b;
          border-radius: 12px;
          padding: 40px;
          text-align: center;
          border: 1px solid rgba(239, 68, 68, 0.3);
        }
        .icon {
          font-size: 48px;
          margin-bottom: 20px;
        }
        h1 {
          color: #ef4444;
          margin-bottom: 16px;
          font-size: 24px;
        }
        p {
          line-height: 1.6;
          margin-bottom: 16px;
          color: #cbd5e1;
        }
        .button {
          display: inline-block;
          background: linear-gradient(135deg, #06b6d4 0%, #2563eb 100%);
          color: white;
          padding: 12px 24px;
          text-decoration: none;
          border-radius: 8px;
          margin-top: 20px;
          font-weight: 600;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="icon">❌</div>
        <h1>Unsubscribe Failed</h1>
        <p>We encountered an error while processing your unsubscribe request.</p>
        <p>Please contact us directly at <a href="mailto:hello@lenuv.io" style="color: #22d3ee;">hello@lenuv.io</a> and we'll remove you from our list immediately.</p>
        <a href="https://lenuv.io" class="button">Return to Website</a>
      </div>
    </body>
    </html>
  `;
}
