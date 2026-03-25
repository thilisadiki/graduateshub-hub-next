import type { Metadata } from 'next';
import { Suspense } from 'react';
import SearchContent from './SearchContent';

export const metadata: Metadata = {
  title: 'Search Courses',
  description: 'Find the perfect free online course to advance your career.',
};

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-500 text-lg">Loading results...</div>
      </div>
    }>
      <SearchContent />
    </Suspense>
  );
}
