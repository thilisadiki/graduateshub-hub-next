import type { Metadata } from 'next';
import { Suspense } from 'react';
import SearchContent from './SearchContent';

export const metadata: Metadata = {
  title: 'Search Free Online Courses | Graduates Hub',
  description: 'Search thousands of free online courses in IT, Business, Marketing, Health, Languages, and more. Find the perfect course to advance your career — no fees, no paywalls.',
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
