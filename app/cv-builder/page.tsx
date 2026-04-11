import type { Metadata } from 'next';
import CVBuilderClient from './CVBuilderClient';

export const metadata: Metadata = {
  title: 'Free CV Builder — Create & Download a Professional CV',
  description: 'Build a professional CV for free. Fill in your details, choose from 3 templates, and download as PDF in seconds. No sign-up required.',
  openGraph: {
    title: 'Free CV Builder | Graduates Hub',
    description: 'Create a professional CV in minutes. Choose from Modern, Professional or Minimalist templates and download as PDF — completely free.',
    type: 'website',
  },
};

export default function CVBuilderPage() {
  return (
    <main>
      {/* Page header */}
      <div className="bg-white border-b border-gray-100 px-6 py-4">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between gap-4">
          <div>
            <h1 className="text-lg font-bold text-gray-900">Free CV Builder</h1>
            <p className="text-xs text-gray-500 mt-0.5">Fill in your details on the left · see a live preview on the right · download as PDF</p>
          </div>
          <a
            href="/free-courses-with-certificates"
            className="text-xs text-blue-600 hover:text-blue-700 font-medium transition hidden sm:block"
          >
            Browse free courses to add to your CV →
          </a>
        </div>
      </div>

      <CVBuilderClient />
    </main>
  );
}
