import { NextResponse } from 'next/server';

const MIN_SUBMIT_MS = 3000; // reject submissions faster than 3 seconds

/** Escape HTML special characters to prevent injection in email templates. */
export function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function verifyTurnstile(token: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // not configured - skip verification

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

/**
 * Shared bot protection for API routes.
 * Returns a NextResponse if a check fails, or null if all checks pass.
 */
export async function checkBotProtection(body: any): Promise<NextResponse | null> {
  const { _hp, _t, _ts } = body;

  // Honeypot check - bots fill hidden fields, humans don't
  if (_hp) {
    // Return 200 so bots think they succeeded
    return NextResponse.json({ success: true });
  }

  // Timing check - reject submissions under 3 seconds (bot speed)
  if (_t && Date.now() - Number(_t) < MIN_SUBMIT_MS) {
    return NextResponse.json({ success: true });
  }

  // Turnstile verification
  const turnstileValid = await verifyTurnstile(_ts ?? '');
  if (!turnstileValid) {
    return NextResponse.json({ error: 'Security check failed. Please try again.' }, { status: 400 });
  }

  return null; // All checks passed
}
