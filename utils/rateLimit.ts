import { NextRequest, NextResponse } from 'next/server';

/**
 * In-memory sliding-window rate limiter.
 *
 * Tracks request timestamps per IP in a Map. Each call to `check()` evicts
 * expired entries and returns a 429 NextResponse if the limit is exceeded,
 * or null if the request is allowed.
 *
 * Trade-off: state is per serverless instance — it resets when Vercel spins
 * up a new instance. This catches rapid-fire abuse (the 90% case) without
 * needing Redis or any external service.
 */

interface RateLimiterOptions {
  /** Maximum number of requests allowed within the window. */
  max: number;
  /** Window duration in seconds. */
  windowSeconds: number;
}

interface RateLimiter {
  /** Returns a 429 NextResponse if rate-limited, or null if allowed. */
  check: (ip: string) => NextResponse | null;
}

const CLEANUP_INTERVAL_MS = 60_000; // prune stale IPs every 60 seconds

/**
 * Create a rate limiter instance. Each API route should create its own
 * instance at module scope so the Map persists across invocations within
 * the same serverless instance.
 *
 * @example
 * const limiter = createRateLimiter({ max: 5, windowSeconds: 60 });
 *
 * export async function POST(request: NextRequest) {
 *   const limited = limiter.check(getClientIp(request));
 *   if (limited) return limited;
 *   // ... handle request
 * }
 */
export function createRateLimiter({ max, windowSeconds }: RateLimiterOptions): RateLimiter {
  const windowMs = windowSeconds * 1000;
  const hits = new Map<string, number[]>();
  let lastCleanup = Date.now();

  function cleanup() {
    const now = Date.now();
    if (now - lastCleanup < CLEANUP_INTERVAL_MS) return;
    lastCleanup = now;

    for (const [ip, timestamps] of hits) {
      const valid = timestamps.filter((t) => now - t < windowMs);
      if (valid.length === 0) {
        hits.delete(ip);
      } else {
        hits.set(ip, valid);
      }
    }
  }

  return {
    check(ip: string): NextResponse | null {
      const now = Date.now();
      cleanup();

      const timestamps = (hits.get(ip) ?? []).filter((t) => now - t < windowMs);

      if (timestamps.length >= max) {
        return NextResponse.json(
          { error: 'Too many requests. Please wait a moment and try again.' },
          {
            status: 429,
            headers: {
              'Retry-After': String(windowSeconds),
            },
          }
        );
      }

      timestamps.push(now);
      hits.set(ip, timestamps);
      return null;
    },
  };
}

/**
 * Extract the client IP from a Next.js request.
 * Reads x-forwarded-for (set by Vercel/Cloudflare edge), falls back to
 * x-real-ip, then "unknown".
 */
export function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    // x-forwarded-for can be a comma-separated list; take the first (client) IP
    return forwarded.split(',')[0].trim();
  }
  return request.headers.get('x-real-ip') ?? 'unknown';
}
