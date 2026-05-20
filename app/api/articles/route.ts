import { NextRequest, NextResponse } from 'next/server';
import { createRateLimiter, getClientIp } from '@/utils/rateLimit';

const WP_API = 'https://articles.graduateshub.co.za/wp-json';
const MAX_PER_PAGE = 12;

const limiter = createRateLimiter({ max: 30, windowSeconds: 60 });

export async function GET(request: NextRequest) {
  const limited = limiter.check(getClientIp(request));
  if (limited) return limited;

  const { searchParams } = new URL(request.url);
  const search = searchParams.get('search');

  // Clamp per_page to a safe range (1–12)
  const rawPerPage = parseInt(searchParams.get('per_page') ?? '3', 10);
  const perPage = Math.min(Math.max(isNaN(rawPerPage) ? 3 : rawPerPage, 1), MAX_PER_PAGE);

  let url = `${WP_API}/wp/v2/posts?per_page=${perPage}&_embed`;
  if (search) {
    url += `&search=${encodeURIComponent(search)}`;
  }

  const response = await fetch(url, {
    headers: { Host: 'articles.graduateshub.co.za' },
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: 'Failed to fetch articles from WordPress' },
      { status: response.status }
    );
  }

  const data = await response.json();

  // Return only the fields the frontend needs
  const posts = (Array.isArray(data) ? data : []).map((post: any) => ({
    id: post.id,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    date: post.date,
    _embedded: {
      'wp:featuredmedia': post._embedded?.['wp:featuredmedia']?.map((m: any) => ({
        source_url: m.source_url,
      })),
    },
  }));

  return NextResponse.json(posts);
}