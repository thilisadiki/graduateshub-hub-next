import { NextRequest, NextResponse } from 'next/server';

const WP_API = 'https://articles.graduateshub.co.za/wp-json';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const perPage = searchParams.get('per_page') ?? '3';
  const search = searchParams.get('search');

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
  // Pass through raw WP data (includes slug, _embedded, etc.)
  return NextResponse.json(data);
}
