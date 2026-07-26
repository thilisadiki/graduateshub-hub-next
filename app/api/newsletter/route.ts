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

    const { email } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email address is required.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn('[Newsletter] RESEND_API_KEY not configured - subscription recorded locally.');
      return NextResponse.json({ success: true, message: 'Thanks for subscribing! Check your inbox soon.' });
    }

    const resend = new Resend(apiKey);
    const safeEmail = escapeHtml(email);

    const { error } = await resend.emails.send({
      from: 'Graduates Hub <noreply@graduateshub.org>',
      to: ['info@graduateshub.org'],
      subject: `[Newsletter Subscriber] New Signup: ${safeEmail}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1d4ed8;">New Newsletter Subscription</h2>
          <p style="color: #374151;">A new user subscribed to the Graduates Hub newsletter:</p>
          <p style="font-size: 16px; font-weight: bold; color: #111827;">${safeEmail}</p>
          <p style="margin-top: 24px; color: #9ca3af; font-size: 12px;">
            Sent via NewsletterBanner at graduateshub.org.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('[Newsletter] Resend error:', error);
      return NextResponse.json({ error: 'Failed to record subscription. Please try again.' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Thanks for subscribing! Check your inbox soon.' });
  } catch (err) {
    console.error('[Newsletter] Unexpected error:', err);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
