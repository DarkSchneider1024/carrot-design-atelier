import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!resend || !process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 're_123456789') {
      console.warn('RESEND_API_KEY is not set or is a placeholder. Mocking success response.');
      return NextResponse.json({ message: 'Email sent successfully (MOCK)' }, { status: 200 });
    }

    const data = await resend.emails.send({
      from: 'Carrot Atelier <onboarding@resend.dev>',
      to: ['carrot771024@gmail.com'],
      subject: `[Contact Form] ${subject}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #ff6b35;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error('Resend Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
