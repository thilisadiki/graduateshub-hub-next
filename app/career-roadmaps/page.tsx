import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, TrendingUp, ChevronRight, Map } from 'lucide-react';
import { roadmaps } from '@/data/roadmaps';
import type { CareerRoadmap } from '@/types';

const SITE_URL = 'https://graduateshub.co.za';

export const metadata: Metadata = {
  title: 'Career Roadmaps — How to Break Into Any Field | Graduates Hub',
  description:
    'Step-by-step career roadmaps for data analysis, IT support, web development, digital marketing, accounting, and business analysis. Curated by working professionals. Free to follow.',
  alternates: { canonical: `${SITE_URL}/career-roadmaps` },
  openGraph: {
    title: 'Career Roadmaps — How to Break Into Any Field | Graduates Hub',
    description:
      'Step-by-step career roadmaps for data analysis, IT support, web development, digital marketing, accounting, and business analysis. Curated by working professionals. Free to follow.',
    url: `${SITE_URL}/career-roadmaps`,
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Career Roadmaps', item: `${SITE_URL}/career-roadmaps` },
  ],
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Career Roadmaps',
  description: 'Step-by-step career roadmaps curated by working professionals.',
  numberOfItems: roadmaps.length,
  itemListElement: roadmaps.map((r, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: r.title,
    url: `${SITE_URL}/career-roadmaps/${r.id}`,
    description: r.description,
  })),
};

const CURATORS = {
  jason: { name: 'Jason Sadiki', photo: '/jason-sadiki.jpg' },
  ndulamiso: { name: 'Ndulamiso Mamburu', photo: '/ndulamiso-mamburu.jpg' },
};

const DEMAND_COLOURS: Record<CareerRoadmap['demandLevel'], string> = {
  'Very High': 'bg-emerald-50 text-emerald-700 border-emerald-100',
  'High': 'bg-blue-50 text-blue-700 border-blue-100',
  'Moderate': 'bg-amber-50 text-amber-700 border-amber-100',
};

const CATEGORY_BADGES: Record<string, string> = {
  it: 'IT & Technology',
  'software-engineering': 'Software Engineering',
  marketing: 'Marketing',
  accounting: 'Accounting',
  business: 'Business',
};

export default function CareerRoadmapsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-400 mb-10">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="text-gray-600 font-medium">Career Roadmaps</span>
        </nav>

        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
            <Map size={24} className="text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">Career Roadmaps</h1>
            <p className="text-gray-500 mt-2 text-lg max-w-2xl">
              Step-by-step paths from zero experience to job-ready. Each roadmap is built around the exact skills employers test for, with free courses at every stage.
            </p>
          </div>
        </div>

        {/* Trust note */}
        <div className="mt-6 mb-12 bg-blue-50 border border-blue-100 rounded-xl px-5 py-4 text-sm text-blue-700 max-w-2xl">
          Every roadmap is curated by a named specialist with real-world experience in that field — not generated from a generic list.
          <Link href="/curation-policy" className="font-bold ml-1 underline underline-offset-2 hover:text-blue-900 transition-colors">
            How we curate →
          </Link>
        </div>

        {/* Roadmap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roadmaps.map((roadmap) => {
            const curators = Array.isArray(roadmap.curator) ? roadmap.curator : [roadmap.curator];
            return (
              <Link
                key={roadmap.id}
                href={`/career-roadmaps/${roadmap.id}`}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:border-primary hover:shadow-md transition-all flex flex-col gap-4"
              >
                {/* Category + Demand */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold text-primary bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full">
                    {CATEGORY_BADGES[roadmap.category] ?? roadmap.category}
                  </span>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${DEMAND_COLOURS[roadmap.demandLevel]}`}>
                    {roadmap.demandLevel} Demand
                  </span>
                </div>

                {/* Title & tagline */}
                <div>
                  <h2 className="font-extrabold text-gray-900 text-lg group-hover:text-primary transition-colors leading-snug">
                    {roadmap.title}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">{roadmap.tagline}</p>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock size={12} className="text-gray-400" />
                    {roadmap.timeToJobReady}
                  </span>
                  <span className="flex items-center gap-1">
                    <TrendingUp size={12} className="text-gray-400" />
                    {roadmap.stages.length} stages
                  </span>
                  {roadmap.entryLevel && (
                    <span className="text-emerald-600 font-semibold">No degree required</span>
                  )}
                </div>

                {/* Curator avatars + CTA */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {curators.map((key) => (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img
                          key={key}
                          src={CURATORS[key].photo}
                          alt={CURATORS[key].name}
                          className="w-7 h-7 rounded-full object-cover ring-2 ring-white"
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">
                      {curators.map(k => CURATORS[k].name.split(' ')[0]).join(' & ')}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-primary group-hover:underline">
                    View Roadmap →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center">
          <h2 className="text-xl font-extrabold text-gray-900 mb-2">Not sure which path to take?</h2>
          <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
            Browse all free courses by subject area, or use our AI Course Recommender to get a personalised suggestion.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/categories"
              className="bg-primary hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              Browse All Courses
            </Link>
            <Link
              href="/guides"
              className="bg-white border-2 border-primary text-primary hover:bg-blue-50 font-bold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              View All Guides
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
