import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, message } = body;

  try {
    await resend.emails.send({
      from: 'Lenuvio <info@lenuv.io>',
      to: 'brandon@lenuv.io',
      subject: `Message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Email failed to send:', error);
    return new Response(JSON.stringify({ error: 'Email failed to send' }), {
      status: 500,
    });
  }
}
