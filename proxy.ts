import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Only the canonical production host may be indexed. Every other host that
// reaches the app - staging.graduateshub.org, the *.vercel.app preview/alias
// URLs, localhost - gets a noindex header so it can never surface in search.
//
// Vercel's automatic noindex only covers the generated *.vercel.app deploy
// URLs, NOT custom domains attached to the Preview environment (e.g.
// staging.graduateshub.org), so we enforce it here at the edge.
const CANONICAL_HOST = 'www.graduateshub.org';
const ALLOWED_HOSTS = ['www.graduateshub.org', 'graduateshub.org'];

export function proxy(request: NextRequest) {
  const host = request.headers.get('host') ?? '';
  const url = request.nextUrl.clone();

  // 1. Permanently 301 redirect any graduateshub.co.za requests to www.graduateshub.org
  if (host.includes('graduateshub.co.za')) {
    url.host = CANONICAL_HOST;
    url.protocol = 'https';
    url.port = '';
    return NextResponse.redirect(url, { status: 301 });
  }

  // 2. Permanently 301 redirect non-www graduateshub.org to www.graduateshub.org
  if (host === 'graduateshub.org') {
    url.host = CANONICAL_HOST;
    url.protocol = 'https';
    url.port = '';
    return NextResponse.redirect(url, { status: 301 });
  }

  const response = NextResponse.next();

  if (!ALLOWED_HOSTS.includes(host)) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  }

  return response;
}

export const config = {
  // Run on every route except Next.js internals and static assets.
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
