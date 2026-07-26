import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Sparkles, BookOpen } from 'lucide-react';
import CVBuilderClient from '../CVBuilderClient';
import { SITE_URL, OG_IMAGE, SITE_NAME } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Create Your Free CV - Interactive Workspace | Graduates Hub',
  description:
    'Distraction-free CV builder workspace. Fill in your details, crop profile photo, preview in real-time, and download your print-ready PDF for free.',
  alternates: { canonical: `${SITE_URL}/cv-builder/create` },
  openGraph: {
    siteName: SITE_NAME,
    title: 'Create Your Free CV - Interactive Workspace | Graduates Hub',
    description:
      'Distraction-free CV builder workspace. Fill in your details, crop profile photo, preview in real-time, and download your print-ready PDF for free.',
    type: 'website',
    url: `${SITE_URL}/cv-builder/create`,
    images: [OG_IMAGE],
  },
};

export default function CVBuilderCreatePage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* Workspace Header Bar */}
      <header className="bg-gray-900 text-white border-b border-gray-800 px-6 py-3.5 sticky top-0 z-30 shadow-md">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link
              href="/cv-builder"
              className="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 font-medium bg-gray-800 hover:bg-gray-700 px-3 py-1.5 rounded-lg"
            >
              <ArrowLeft size={14} /> Back to Overview
            </Link>
            <div className="h-4 w-px bg-gray-800 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <h1 className="text-sm font-extrabold tracking-tight text-white">CV Builder Workspace</h1>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="text-[#FFDF9C] font-medium hidden md:flex items-center gap-1.5">
              <Sparkles size={14} /> 100% Free · No Registration · Instant PDF
            </span>
            <Link
              href="/free-courses-with-certificates"
              className="text-gray-300 hover:text-white transition-colors font-medium hidden lg:flex items-center gap-1 bg-gray-800 px-3 py-1.5 rounded-lg"
            >
              <BookOpen size={13} /> Add Free Certificates →
            </Link>
          </div>
        </div>
      </header>

      {/* Main Workspace App */}
      <div className="flex-1">
        <CVBuilderClient />
      </div>
    </main>
  );
}
