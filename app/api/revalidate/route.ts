import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';
import crypto from 'crypto';
import { createRateLimiter, getClientIp } from '@/utils/rateLimit';

// Allow up to 30 revalidation requests per minute per IP
const limiter = createRateLimiter({ max: 30, windowSeconds: 60 });

function verifySecret(provided: string | null, expected: string): boolean {
  if (!provided) return false;
  const bufProvided = Buffer.from(provided);
  const bufExpected = Buffer.from(expected);
  if (bufProvided.length !== bufExpected.length) return false;
  return crypto.timingSafeEqual(bufProvided, bufExpected);
}

function extractSecret(request: NextRequest): string | null {
  // 1. Check custom header x-revalidate-secret
  const customHeader = request.headers.get('x-revalidate-secret');
  if (customHeader) return customHeader.trim();

  // 2. Check Authorization: Bearer <secret>
  const authHeader = request.headers.get('authorization');
  if (authHeader && authHeader.toLowerCase().startsWith('bearer ')) {
    return authHeader.slice(7).trim();
  }

  // 3. Check query param ?secret=<secret>
  const { searchParams } = new URL(request.url);
  const querySecret = searchParams.get('secret');
  if (querySecret) return querySecret.trim();

  return null;
}

interface RevalidateTarget {
  slug?: string;
  path?: string;
}

async function handleRevalidation(request: NextRequest, target: RevalidateTarget) {
  const limited = limiter.check(getClientIp(request));
  if (limited) return limited;

  const expectedSecret = process.env.REVALIDATION_SECRET;
  if (!expectedSecret) {
    console.error('REVALIDATION_SECRET is not configured on this server.');
    return NextResponse.json(
      { error: 'Server misconfiguration: REVALIDATION_SECRET is not set.' },
      { status: 500 }
    );
  }

  const providedSecret = extractSecret(request);
  if (!verifySecret(providedSecret, expectedSecret)) {
    return NextResponse.json(
      { error: 'Unauthorized: Invalid or missing revalidation secret token.' },
      { status: 401 }
    );
  }

  const revalidatedPaths: string[] = [];

  try {
    // 1. Invalidate Next.js Data Cache tags
    try {
      revalidateTag('articles', 'max');
    } catch (tagErr) {
      console.warn('Could not revalidate tag articles:', tagErr);
    }

    // 2. Always revalidate the blog index and homepage
    revalidatePath('/blog');
    revalidatedPaths.push('/blog');

    revalidatePath('/');
    revalidatedPaths.push('/');

    revalidatePath('/sitemap.xml');
    revalidatedPaths.push('/sitemap.xml');

    // 3. If a specific post slug is provided, revalidate that specific post page and tag
    if (target.slug) {
      const cleanSlug = target.slug
        .replace(/^\/blog\//, '')
        .replace(/^\//, '')
        .trim();

      if (cleanSlug) {
        try {
          revalidateTag(`article-${cleanSlug}`, 'max');
        } catch {}
        revalidatePath(`/blog/${cleanSlug}`);
        revalidatedPaths.push(`/blog/${cleanSlug}`);
      }
    }

    // 3. If an explicit custom path was provided, revalidate it as well
    if (target.path && !revalidatedPaths.includes(target.path)) {
      revalidatePath(target.path);
      revalidatedPaths.push(target.path);
    }

    return NextResponse.json({
      revalidated: true,
      timestamp: new Date().toISOString(),
      paths: revalidatedPaths,
    });
  } catch (error: any) {
    console.error('Revalidation error:', error);
    return NextResponse.json(
      { error: 'Failed to revalidate paths', detail: error?.message || 'Unknown error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  let target: RevalidateTarget = {};

  try {
    const contentType = request.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      const body = await request.json();
      target.slug = body.slug || body.post_name || body.post?.post_name || undefined;
      target.path = body.path || undefined;
    } else if (contentType.includes('application/x-www-form-urlencoded')) {
      const formData = await request.formData();
      target.slug = (formData.get('slug') || formData.get('post_name'))?.toString();
      target.path = formData.get('path')?.toString();
    }
  } catch {
    // JSON parsing error or empty body - proceed with empty target (revalidates listing pages)
  }

  // Also allow query parameters to override or supplement body values
  const { searchParams } = new URL(request.url);
  if (!target.slug && searchParams.get('slug')) {
    target.slug = searchParams.get('slug')!;
  }
  if (!target.path && searchParams.get('path')) {
    target.path = searchParams.get('path')!;
  }

  return handleRevalidation(request, target);
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const target: RevalidateTarget = {
    slug: searchParams.get('slug') || undefined,
    path: searchParams.get('path') || undefined,
  };

  return handleRevalidation(request, target);
}
