import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { checkBotProtection, escapeHtml } from '@/utils/security';
import { createRateLimiter, getClientIp } from '@/utils/rateLimit';


const limiter = createRateLimiter({ max: 3, windowSeconds: 60 });

export async function POST(request: NextRequest) {
  const limited = limiter.check(getClientIp(request));
  if (limited) return limited;

  try {
    const body = await request.json();
    const botCheck = await checkBotProtection(body);
    if (botCheck) return botCheck;

    const { name, email, subject, message } = body;

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

    // Send email via Resend
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.log('[Contact Form] RESEND_API_KEY not set. Submission received:', { name, email, subject });
      return NextResponse.json({ success: true });
    }

    const resend = new Resend(apiKey);

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message);

    const { error } = await resend.emails.send({
      from: 'Graduates Hub <noreply@graduateshub.org>',
      replyTo: `${name} <${email}>`,
      to: ['info@graduateshub.org'],
      subject: `[Contact] ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1d4ed8;">New contact form submission</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr><td style="padding: 8px 0; color: #6b7280; width: 100px;"><strong>Name</strong></td><td style="padding: 8px 0; color: #111827;">${safeName}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;"><strong>Email</strong></td><td style="padding: 8px 0;"><a href="mailto:${safeEmail}" style="color: #1d4ed8;">${safeEmail}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;"><strong>Subject</strong></td><td style="padding: 8px 0; color: #111827;">${safeSubject}</td></tr>
          </table>
          <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px;">
            <p style="margin: 0; color: #374151; white-space: pre-wrap;">${safeMessage}</p>
          </div>
          <p style="margin-top: 24px; color: #9ca3af; font-size: 12px;">
            Sent via the contact form at graduateshub.org. Reply directly to this email to respond to ${safeName}.
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
