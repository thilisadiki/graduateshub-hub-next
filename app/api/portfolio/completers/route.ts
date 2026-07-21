import { NextRequest, NextResponse } from 'next/server';
import { getSupabase } from '@/utils/supabase';
import { createRateLimiter, getClientIp } from '@/utils/rateLimit';

const limiter = createRateLimiter({ max: 30, windowSeconds: 60 });

function parseFirstName(fullName: string): string {
  if (!fullName) return 'Graduate';
  const firstWord = fullName.trim().split(/\s+/)[0];
  if (!firstWord) return 'Graduate';
  // Strip special characters/numbers if necessary, keep letters and hyphens
  const cleaned = firstWord.replace(/[^a-zA-Z\u00C0-\u024F\-']/g, '');
  if (!cleaned) return 'Graduate';
  // Standardize capitalization (e.g., "THABO" or "thabo" -> "Thabo")
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1).toLowerCase().slice(0, 20);
}

export async function GET(request: NextRequest) {
  const limited = limiter.check(getClientIp(request));
  if (limited) return limited;

  const { searchParams } = new URL(request.url);
  const taskId = searchParams.get('taskId')?.trim() || '';
  const limitParam = parseInt(searchParams.get('limit') || '10', 10);
  const limit = Math.min(Math.max(limitParam, 1), 20);

  try {
    const supabase = getSupabase();
    let query = supabase
      .from('portfolio_proofs')
      .select('id, task_id, task_title, graduate_name, created_at, evaluation')
      .order('created_at', { ascending: false })
      .limit(limit);

    if (taskId) {
      query = query.eq('task_id', taskId);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Supabase query error in portfolio completers route:', error);
      return NextResponse.json({ completers: [] }, { status: 200 });
    }

    if (!data) {
      return NextResponse.json({ completers: [] }, { status: 200 });
    }

    // Filter for passing evaluation verdicts and format output
    const completers = data
      .filter((row) => {
        const verdict = row.evaluation?.verdict;
        return verdict === 'Pass' || verdict === 'Pass with Distinction';
      })
      .map((row) => ({
        id: row.id,
        firstName: parseFirstName(row.graduate_name),
        taskTitle: row.task_title,
        taskId: row.task_id,
        createdAt: row.created_at,
      }));

    return NextResponse.json(
      { completers },
      {
        status: 200,
        headers: {
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
        },
      }
    );
  } catch (error) {
    console.error('Error fetching portfolio completers:', error);
    return NextResponse.json({ completers: [] }, { status: 200 });
  }
}
