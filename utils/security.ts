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

export interface VerifyTurnstileOptions {
  action?: string;
  remoteip?: string;
}

export async function verifyTurnstile(
  token: string,
  options?: VerifyTurnstileOptions
): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET ?? process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.error('Turnstile secret (TURNSTILE_SECRET or TURNSTILE_SECRET_KEY) is not configured.');
    return false;
  }

  if (typeof token !== 'string' || token.length === 0 || token.length > 2048) {
    return false;
  }

  try {
    const params = new URLSearchParams({
      secret,
      response: token,
      ...(options?.remoteip ? { remoteip: options.remoteip } : {}),
    });

    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      signal: AbortSignal.timeout(10_000),
      body: params,
    });

    if (!res.ok) {
      console.error(`Turnstile siteverify responded with status ${res.status}`);
      return false;
    }

    const data = await res.json();
    if (!data.success) {
      return false;
    }

    if (options?.action && data.action && data.action !== options.action) {
      return false;
    }

    return true;
  } catch (err) {
    console.error('Turnstile verification error:', err);
    return false;
  }
}

/**
 * Shared bot protection for API routes.
 * Returns a NextResponse if a check fails, or null if all checks pass.
 */
export async function checkBotProtection(
  body: any,
  options?: VerifyTurnstileOptions
): Promise<NextResponse | null> {
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
  const turnstileValid = await verifyTurnstile(_ts ?? '', options);
  if (!turnstileValid) {
    return NextResponse.json({ error: 'Security check failed. Please try again.' }, { status: 400 });
  }

  return null; // All checks passed
}
