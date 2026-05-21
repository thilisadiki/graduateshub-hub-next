import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Only the canonical production host may be indexed. Every other host that
// reaches the app — staging.graduateshub.org, the *.vercel.app preview/alias
// URLs, localhost — gets a noindex header so it can never surface in search.
//
// Vercel's automatic noindex only covers the generated *.vercel.app deploy
// URLs, NOT custom domains attached to the Preview environment (e.g.
// staging.graduateshub.org), so we enforce it here at the edge.
const PRODUCTION_HOST = 'www.graduateshub.org';

export function proxy(request: NextRequest) {
  const host = request.headers.get('host') ?? '';
  const response = NextResponse.next();

  if (host !== PRODUCTION_HOST) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  }

  return response;
}

export const config = {
  // Run on every route except Next.js internals and static assets.
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
