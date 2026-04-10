import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const MIN_SUBMIT_MS = 3000; // reject submissions faster than 3 seconds

async function verifyTurnstile(token: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // not configured — skip verification

  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secret, response: token }),
    });
    const data = await res.json();
    return data.success === true;
  } catch {
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message, _hp, _t, _ts } = body;

    // Honeypot check — bots fill hidden fields, humans don't
    if (_hp) {
      // Return 200 so bots think they succeeded
      return NextResponse.json({ success: true });
    }

    // Timing check — reject submissions under 3 seconds (bot speed)
    if (_t && Date.now() - Number(_t) < MIN_SUBMIT_MS) {
      return NextResponse.json({ success: true });
    }

    // Field validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    if (message.length > 2000) {
      return NextResponse.json({ error: 'Message must be under 2000 characters.' }, { status: 400 });
    }

    // Turnstile verification
    const turnstileValid = await verifyTurnstile(_ts ?? '');
    if (!turnstileValid) {
      return NextResponse.json({ error: 'Security check failed. Please try again.' }, { status: 400 });
    }

    // Send email via Resend
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.log('[Contact Form] RESEND_API_KEY not set. Submission received:', { name, email, subject });
      return NextResponse.json({ success: true });
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: 'Graduates Hub <noreply@graduateshub.co.za>',
      replyTo: `${name} <${email}>`,
      to: ['info@graduateshub.co.za'],
      subject: `[Contact] ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1d4ed8;">New contact form submission</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr><td style="padding: 8px 0; color: #6b7280; width: 100px;"><strong>Name</strong></td><td style="padding: 8px 0; color: #111827;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;"><strong>Email</strong></td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #1d4ed8;">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;"><strong>Subject</strong></td><td style="padding: 8px 0; color: #111827;">${subject}</td></tr>
          </table>
          <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px;">
            <p style="margin: 0; color: #374151; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="margin-top: 24px; color: #9ca3af; font-size: 12px;">
            Sent via the contact form at graduateshub.co.za. Reply directly to this email to respond to ${name}.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('[Contact Form] Resend error:', error);
      return NextResponse.json({ error: 'Failed to send message. Please try again.' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[Contact Form] Unexpected error:', err);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
