import { SITE_URL } from '@/lib/seo';

export const DEFAULT_INDEXNOW_KEY = '3a0d782192dbc45588d6099ffb9fb689';

export function getIndexNowKey(): string {
  return (process.env.INDEXNOW_KEY || DEFAULT_INDEXNOW_KEY).trim();
}

export function getIndexNowHost(): string {
  try {
    const url = new URL(SITE_URL);
    return url.hostname;
  } catch {
    return 'www.graduateshub.org';
  }
}

export function getKeyLocation(key = getIndexNowKey()): string {
  return `${SITE_URL}/${key}.txt`;
}

export interface IndexNowResult {
  success: boolean;
  submittedCount: number;
  status: number;
  message: string;
  urls: string[];
}

/**
 * Submits a list of canonical URLs to the IndexNow API (Bing, Yandex, Seznam).
 * Handles batching (max 10,000 URLs per request) and normalizes paths to absolute URLs.
 */
export async function submitToIndexNow(
  urlsOrPaths: string[]
): Promise<IndexNowResult> {
  const key = getIndexNowKey();
  const host = getIndexNowHost();
  const keyLocation = getKeyLocation(key);

  if (!key) {
    return {
      success: false,
      submittedCount: 0,
      status: 400,
      message: 'IndexNow key is missing.',
      urls: [],
    };
  }

  // Normalize all paths to absolute URLs on the canonical host
  const normalizedUrls = Array.from(
    new Set(
      urlsOrPaths
        .map((item) => {
          const trimmed = item.trim();
          if (!trimmed) return null;
          if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
            try {
              const parsed = new URL(trimmed);
              parsed.host = host;
              return parsed.toString();
            } catch {
              return null;
            }
          }
          const cleanPath = trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
          return `${SITE_URL}${cleanPath}`;
        })
        .filter((u): u is string => Boolean(u))
    )
  );

  if (normalizedUrls.length === 0) {
    return {
      success: true,
      submittedCount: 0,
      status: 200,
      message: 'No valid URLs provided for IndexNow submission.',
      urls: [],
    };
  }

  const endpoint = 'https://api.indexnow.org/indexnow';
  const batch = normalizedUrls.slice(0, 10000);

  const payload = {
    host,
    key,
    keyLocation,
    urlList: batch,
  };

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    const status = response.status;
    const success = status === 200 || status === 202;

    let message = '';
    if (status === 200) {
      message = `Successfully submitted ${batch.length} URLs to IndexNow.`;
    } else if (status === 202) {
      message = `Accepted ${batch.length} URLs. IndexNow key verification is in progress.`;
    } else if (status === 400) {
      message = 'Bad Request: Invalid format or parameters in IndexNow payload.';
    } else if (status === 403) {
      message = 'Forbidden: IndexNow key is invalid or not found at keyLocation.';
    } else if (status === 422) {
      message = 'Unprocessable Entity: URLs do not belong to the host.';
    } else if (status === 429) {
      message = 'Too Many Requests: Submissions are being throttled.';
    } else {
      message = `IndexNow returned HTTP ${status}.`;
    }

    return {
      success,
      submittedCount: success ? batch.length : 0,
      status,
      message,
      urls: batch,
    };
  } catch (error: any) {
    console.error('IndexNow submission failed:', error);
    return {
      success: false,
      submittedCount: 0,
      status: 500,
      message: error?.message || 'Network error while contacting IndexNow API.',
      urls: batch,
    };
  }
}
