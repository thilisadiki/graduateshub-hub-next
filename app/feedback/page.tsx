import type { Metadata } from 'next';
import Link from 'next/link';
import FeedbackForm from './FeedbackForm';

const SITE_URL = 'https://www.graduateshub.co.za';

export const metadata: Metadata = {
  title: 'Share Your Feedback | Graduates Hub',
  description: 'Help us improve the free course directory for South African graduates. Tell us what you think — takes about 60 seconds.',
  alternates: { canonical: `${SITE_URL}/feedback` },
  openGraph: {
    title: 'Share Your Feedback — Graduates Hub',
    description: 'Help us improve the free course directory for South African graduates. Tell us what you think — takes about 60 seconds.',
    url: `${SITE_URL}/feedback`,
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Feedback', item: `${SITE_URL}/feedback` },
  ],
};

export default function FeedbackPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-2xl mx-auto px-6 py-3 text-sm text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="text-gray-300">›</span>
          <span className="text-gray-900 font-medium">Feedback</span>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-blue-400 font-bold text-sm uppercase tracking-widest mb-3">We read every response</p>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Share Your Feedback</h1>
          <p className="text-gray-300 max-w-lg mx-auto">
            What would make Graduates Hub better for you? Your input shapes what we build next — takes about 60 seconds.
          </p>
        </div>
      </div>

      <main className="flex-grow max-w-2xl mx-auto px-6 py-12 w-full">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <FeedbackForm />
        </div>

        {/* Trust note */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-400 text-center">
          <span>Anonymous submissions welcome</span>
          <span className="hidden sm:inline text-gray-200">·</span>
          <span>Responses go directly to our team</span>
          <span className="hidden sm:inline text-gray-200">·</span>
          <span>No spam, ever</span>
        </div>
      </main>
    </div>
  );
}
