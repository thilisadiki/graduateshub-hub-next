import { NextResponse } from 'next/server';
import { getSupabase } from '@/utils/supabase';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret) {
    const auth = request.headers.get('authorization');
    if (auth !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
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
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }
}
