import { Suspense } from 'react';
import type { Metadata } from 'next';
import SearchResultsView from './SearchResultsView';
import { SITE_URL, SITE_NAME } from '@/lib/seo';
import { Loader2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Search Career Roadmaps, Guides, Tasks & Articles | Graduates Hub',
  description:
    'Search through verified career roadmaps, online course guides, proof-of-work portfolio tasks, and career advice articles.',
  alternates: { canonical: `${SITE_URL}/search` },
  openGraph: {
    siteName: SITE_NAME,
    title: 'Search Career Roadmaps, Guides, Tasks & Articles | Graduates Hub',
    description:
      'Search through verified career roadmaps, online course guides, proof-of-work portfolio tasks, and career advice articles.',
    url: `${SITE_URL}/search`,
  },
};

function SearchLoadingFallback() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 flex flex-col items-center justify-center text-gray-500">
      <Loader2 size={36} className="text-primary animate-spin mb-3" />
      <p className="text-sm font-semibold">Loading search...</p>
    </div>
  );
}

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-[#FFF8F1]">
      <Suspense fallback={<SearchLoadingFallback />}>
        <SearchResultsView />
      </Suspense>
    </div>
  );
}
