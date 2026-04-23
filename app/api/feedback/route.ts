import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const MIN_SUBMIT_MS = 3000;

const ALLOWED_AREAS: Record<string, string> = {
  'course-content': 'Course quality and content',
  'missing-courses': "A topic or course that's missing",
  'site-usability': 'Site navigation or usability',
  'search': "Search - couldn't find what they needed",
  'guides-articles': 'Career guides or articles',
  'ai-tools': 'AI tools',
  'other': 'Something else',
};

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

async function verifyTurnstile(token: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;

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
    const { respondent_name, respondent_email, rating, area, message, can_follow_up, _hp, _t, _ts } = body;

    // Honeypot
    if (_hp) return NextResponse.json({ success: true });

    // Timing
    if (_t && Date.now() - Number(_t) < MIN_SUBMIT_MS) {
      return NextResponse.json({ success: true });
    }

    // Rating validation
    const numRating = parseInt(rating, 10);
    if (isNaN(numRating) || numRating < 1 || numRating > 5) {
      return NextResponse.json({ error: 'Please select a rating.' }, { status: 400 });
    }

    // Area validation
    if (!area || !ALLOWED_AREAS[area]) {
      return NextResponse.json({ error: 'Please select an area.' }, { status: 400 });
    }

    // Message validation
    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json({ error: 'Please enter a message.' }, { status: 400 });
    }
    if (message.length > 500) {
      return NextResponse.json({ error: 'Message must be under 500 characters.' }, { status: 400 });
    }

    // Email validation (only if provided)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (respondent_email && !emailRegex.test(respondent_email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    // Turnstile
    const turnstileValid = await verifyTurnstile(_ts ?? '');
    if (!turnstileValid) {
      return NextResponse.json({ error: 'Security check failed. Please try again.' }, { status: 400 });
    }

    // Normalise optional fields
    const name = respondent_name?.trim() || 'Anonymous';
    const email = respondent_email?.trim() || '';
    // Only honour follow-up flag if an email was actually provided
    const followUp = !!(can_follow_up && email);

    const stars = '★'.repeat(numRating) + '☆'.repeat(5 - numRating);
    const areaLabel = ALLOWED_AREAS[area];

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.log('[Feedback] RESEND_API_KEY not set. Submission:', { name, email, rating, area, message });
      return NextResponse.json({ success: true });
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: 'Graduates Hub <noreply@graduateshub.co.za>',
      ...(email ? { replyTo: `${name} <${email}>` } : {}),
      to: ['info@graduateshub.co.za'],
      subject: `[Feedback] ${stars} - ${areaLabel}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1d4ed8;">New feedback submission</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr><td style="padding: 8px 0; color: #6b7280; width: 120px;"><strong>Rating</strong></td><td style="padding: 8px 0; color: #111827; font-size: 18px;">${stars} (${numRating}/5)</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;"><strong>Area</strong></td><td style="padding: 8px 0; color: #111827;">${esc(areaLabel)}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;"><strong>Name</strong></td><td style="padding: 8px 0; color: #111827;">${esc(name)}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;"><strong>Email</strong></td><td style="padding: 8px 0;">${email ? `<a href="mailto:${esc(email)}" style="color: #1d4ed8;">${esc(email)}</a>` : '<span style="color: #9ca3af;">Not provided</span>'}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;"><strong>Follow-up OK</strong></td><td style="padding: 8px 0; color: #111827;">${followUp ? 'Yes' : 'No'}</td></tr>
          </table>
          <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px;">
            <p style="margin: 0; color: #374151; white-space: pre-wrap;">${esc(message.trim())}</p>
          </div>
          <p style="margin-top: 24px; color: #9ca3af; font-size: 12px;">
            Sent via the feedback form at graduateshub.co.za/feedback.${email ? ` Reply directly to respond to ${esc(name)}.` : ''}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('[Feedback] Resend error:', error);
      return NextResponse.json({ error: 'Failed to send feedback. Please try again.' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[Feedback] Unexpected error:', err);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
