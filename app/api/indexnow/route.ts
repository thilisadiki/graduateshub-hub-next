import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { createRateLimiter, getClientIp } from '@/utils/rateLimit';
import {
  submitToIndexNow,
  getIndexNowKey,
  getIndexNowHost,
  getKeyLocation,
} from '@/utils/indexnow';
import sitemap from '@/app/sitemap';

const limiter = createRateLimiter({ max: 10, windowSeconds: 60 });

function verifySecret(provided: string | null, expected: string): boolean {
  if (!provided) return false;
  const bufProvided = Buffer.from(provided);
  const bufExpected = Buffer.from(expected);
  if (bufProvided.length !== bufExpected.length) return false;
  return crypto.timingSafeEqual(bufProvided, bufExpected);
}

function extractSecret(request: NextRequest): string | null {
  const customHeader =
    request.headers.get('x-indexnow-secret') ||
    request.headers.get('x-revalidate-secret');
  if (customHeader) return customHeader.trim();

  const authHeader = request.headers.get('authorization');
  if (authHeader && authHeader.toLowerCase().startsWith('bearer ')) {
    return authHeader.slice(7).trim();
  }

  const { searchParams } = new URL(request.url);
  const querySecret = searchParams.get('secret');
  if (querySecret) return querySecret.trim();

  return null;
}

export async function GET() {
  const key = getIndexNowKey();
  const host = getIndexNowHost();
  const keyLocation = getKeyLocation(key);

  return NextResponse.json({
    status: 'ready',
    host,
    key,
    keyLocation,
    info: 'IndexNow instantly notifies Bing, Yandex, and other search engines of updated content.',
    usage: {
      submitUrls: 'POST /api/indexnow with JSON body { urls: ["https://..."] }',
      submitPath: 'POST /api/indexnow with JSON body { path: "/blog/post-slug" }',
      submitAll: 'POST /api/indexnow with JSON body { submitAll: true }',
      auth: 'Include header Authorization: Bearer <REVALIDATION_SECRET> or ?secret=<token>',
    },
  });
}

export async function POST(request: NextRequest) {
  const limited = limiter.check(getClientIp(request));
  if (limited) return limited;

  const expectedSecret =
    process.env.REVALIDATION_SECRET || process.env.CRON_SECRET;
  if (!expectedSecret) {
    return NextResponse.json(
      { error: 'Server misconfiguration: REVALIDATION_SECRET or CRON_SECRET is not set.' },
      { status: 500 }
    );
  }

  const providedSecret = extractSecret(request);
  if (!verifySecret(providedSecret, expectedSecret)) {
    return NextResponse.json(
      { error: 'Unauthorized: Invalid or missing authorization secret.' },
      { status: 401 }
    );
  }

  let body: any = {};
  try {
    body = await request.json();
  } catch {
    // If empty or non-JSON body, proceed with query params
  }

  const { searchParams } = new URL(request.url);
  const submitAll =
    body.submitAll === true || searchParams.get('all') === 'true';

  let targets: string[] = [];

  if (submitAll) {
    try {
      const sitemapEntries = await sitemap();
      targets = sitemapEntries.map((entry) => entry.url);
    } catch (sitemapErr: any) {
      console.error('Failed to generate sitemap for IndexNow:', sitemapErr);
      return NextResponse.json(
        { error: 'Failed to read sitemap entries', detail: sitemapErr?.message },
        { status: 500 }
      );
    }
  } else {
    if (Array.isArray(body.urls)) {
      targets.push(...body.urls);
    }
    if (typeof body.url === 'string') {
      targets.push(body.url);
    }
    if (typeof body.path === 'string') {
      targets.push(body.path);
    }
    if (typeof body.slug === 'string') {
      targets.push(`/blog/${body.slug.replace(/^\/blog\//, '').trim()}`);
    }

    const queryUrl = searchParams.get('url');
    if (queryUrl) targets.push(queryUrl);

    const queryPath = searchParams.get('path');
    if (queryPath) targets.push(queryPath);
  }

  if (targets.length === 0) {
    return NextResponse.json(
      {
        error: 'No URLs or paths provided. Use { urls: [...] }, { path: "/..." }, or { submitAll: true }.',
      },
      { status: 400 }
    );
  }

  const result = await submitToIndexNow(targets);

  return NextResponse.json({
    success: result.success,
    status: result.status,
    submittedCount: result.submittedCount,
    message: result.message,
    host: getIndexNowHost(),
    keyLocation: getKeyLocation(),
    sampleUrls: result.urls.slice(0, 10),
  });
}
