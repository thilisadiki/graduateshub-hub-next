import { NextResponse } from 'next/server';
import { getSupabase } from '@/utils/supabase';

export const dynamic = 'force-dynamic';

// Fire-and-forget alert so we learn the DB is down before users do.
// Set KEEPALIVE_ALERT_WEBHOOK_URL to a Discord/Slack-compatible webhook.
async function alertKeepaliveFailure(detail: string): Promise<void> {
  const webhook = process.env.KEEPALIVE_ALERT_WEBHOOK_URL;
  if (!webhook) return;
  try {
    await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: `🚨 Graduates Hub keepalive failed — Supabase may be paused or down.\nTime: ${new Date().toISOString()}\nDetail: ${detail}`,
      }),
    });
  } catch (err) {
    console.error('Failed to send keepalive alert:', err);
  }
}

export async function GET(request: Request) {
  const cronSecret = process.env.CRON_SECRET;
  if (!cronSecret) {
    console.error('CRON_SECRET is not configured.');
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const auth = request.headers.get('authorization');
  if (auth !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const supabase = getSupabase();
    const { error } = await supabase
      .from('portfolio_proofs')
      .select('id', { count: 'exact', head: true });
    if (error) throw error;
    return NextResponse.json({ ok: true, pingedAt: new Date().toISOString() });
  } catch (error: any) {
    console.error('Keepalive failed:', error);
    await alertKeepaliveFailure(error?.message || 'Unknown error');
    return NextResponse.json({ ok: false, error: 'Keepalive check failed.' }, { status: 500 });
  }
}
