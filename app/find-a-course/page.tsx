import type { Metadata } from 'next';
import { Suspense } from 'react';
import FindCourseContent from './FindCourseContent';
import { SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Find a Free Online Course',
  description:
    'Browse and filter hundreds of free online courses across IT, Software Engineering, Business, Accounting, and Marketing. Filter by subject, format, and length to find the right course for your goal.',
  alternates: { canonical: `${SITE_URL}/find-a-course` },
  robots: { index: false, follow: true },
};

export default function FindCoursePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-gray-500 text-lg">Loading courses…</div>
        </div>
      }
    >
      <FindCourseContent />
    </Suspense>
  );
}
