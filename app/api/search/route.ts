import { NextRequest, NextResponse } from 'next/server';
import { createRateLimiter, getClientIp } from '@/utils/rateLimit';
import { performUnifiedSearch, SearchCategory } from '@/lib/search';

const limiter = createRateLimiter({ max: 60, windowSeconds: 60 });

const VALID_TYPES: Set<SearchCategory> = new Set([
  'all',
  'guide',
  'blog',
  'task',
  'roadmap',
  'interview_prep',
  'tool',
]);

export async function GET(request: NextRequest) {
  const limited = limiter.check(getClientIp(request));
  if (limited) return limited;

  const { searchParams } = new URL(request.url);
  const rawQuery = searchParams.get('q') ?? '';
  const rawType = (searchParams.get('type') ?? 'all').toLowerCase() as SearchCategory;
  const filterType = VALID_TYPES.has(rawType) ? rawType : 'all';

  const query = rawQuery.trim().slice(0, 100); // clamp query to 100 characters

  if (!query) {
    return NextResponse.json({
      query: '',
      total: 0,
      results: [],
      counts: {
        all: 0,
        guide: 0,
        blog: 0,
        task: 0,
        roadmap: 0,
        interview_prep: 0,
        tool: 0,
      },
    });
  }

  try {
    const searchResponse = await performUnifiedSearch(query, filterType);
    return NextResponse.json(searchResponse);
  } catch (err) {
    console.error('Unified search error:', err);
    return NextResponse.json(
      { error: 'An unexpected error occurred while searching' },
      { status: 500 }
    );
  }
}
