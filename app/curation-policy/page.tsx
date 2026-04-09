import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink, CheckCircle2, XCircle, RefreshCw, Users } from 'lucide-react';

const SITE_URL = 'https://graduateshub.co.za';

export const metadata: Metadata = {
  title: 'How We Curate Courses | Curation Policy – Graduates Hub',
  description: 'Every course on Graduates Hub is hand-picked by a specialist. Learn about our editorial standards, selection criteria, and review process.',
  alternates: { canonical: `${SITE_URL}/curation-policy` },
};

const criteria = [
  {
    pass: true,
    label: 'Accreditation',
    detail: 'CPD-certified, internationally recognised, or issued by a credible institution (e.g. Google, IBM, Alison).',
  },
  {
    pass: true,
    label: 'Relevance to job market',
    detail: 'We check actual job listings to confirm the skill is actively sought by employers in South Africa and globally.',
  },
  {
    pass: true,
    label: 'Genuinely free to study',
    detail: 'The full course content must be accessible at no cost. A paid physical certificate option is acceptable; a paywall on the content is not.',
  },
  {
    pass: true,
    label: 'Practical outcome',
    detail: 'Courses must teach an applicable skill — not just theory. Learners should finish with something demonstrable.',
  },
  {
    pass: true,
    label: 'Curator expertise match',
    detail: 'Each course is reviewed by a curator with direct professional experience in that field.',
  },
  {
    pass: false,
    label: 'Paid-first providers',
    detail: 'We do not list courses where the free tier is a teaser and the real content requires payment.',
  },
  {
    pass: false,
    label: 'Outdated content',
    detail: 'Courses covering deprecated tools or practices that are no longer used in industry are removed.',
  },
  {
    pass: false,
    label: 'Unverifiable credentials',
    detail: 'Certificates from providers with no verifiable accreditation body or employer recognition are excluded.',
  },
];

export default function CurationPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      <div className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-blue-400 font-bold text-sm uppercase tracking-widest mb-3">Editorial Standards</p>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">How We Curate Courses</h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Every course on Graduates Hub is selected by someone with direct, professional experience in that field. Here is exactly how we decide what makes the cut — and what doesn&apos;t.
          </p>
        </div>
      </div>

      <main className="flex-grow max-w-3xl mx-auto px-6 py-16 w-full space-y-14">

        {/* Who curates */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Who Does the Curating</h2>
          <div className="flex flex-col gap-4">

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex gap-4 items-start">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/jason-sadiki.jpg" alt="Jason Sadiki" className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-100 shrink-0" />
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <p className="font-extrabold text-gray-900">Jason Sadiki</p>
                  <span className="text-xs bg-blue-50 text-blue-700 border border-blue-100 px-2 py-0.5 rounded-full font-bold">Founder</span>
                </div>
                <p className="text-primary text-sm font-semibold mb-2">Technical SEO Specialist &amp; Web Developer · 7+ years</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Curates all IT, software engineering, digital marketing, and AI courses. Jason&apos;s 7+ years in Technical SEO means every resource is also assessed for discoverability — whether the right learners can actually find it.
                </p>
                <a href="https://www.linkedin.com/in/jasonsadiki/" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 mt-2 transition-colors">
                  <ExternalLink size={12} /> LinkedIn
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex gap-4 items-start">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/ndulamiso-mamburu.jpg" alt="Ndulamiso Mamburu" className="w-12 h-12 rounded-full object-cover ring-2 ring-teal-100 shrink-0" />
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <p className="font-extrabold text-gray-900">Ndulamiso Mamburu</p>
                  <span className="text-xs bg-teal-50 text-teal-700 border border-teal-100 px-2 py-0.5 rounded-full font-bold">Curator</span>
                </div>
                <p className="text-teal-600 text-sm font-semibold mb-2">Accounting Science Graduate · Pursuing Taxation Degree · Works at SARS</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Curates all accounting, finance, and business courses. Her practitioner-level experience at the South African Revenue Service (SARS) ensures that recommended courses reflect real compliance, tax, and financial management requirements — not just textbook theory.
                </p>
                <a href="https://www.linkedin.com/in/ndulamiso-mamburu/" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 mt-2 transition-colors">
                  <ExternalLink size={12} /> LinkedIn
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* Selection criteria */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Our Selection Criteria</h2>
          <p className="text-gray-500 mb-6">A course must pass every &ldquo;include&rdquo; criterion to be listed. Any &ldquo;exclude&rdquo; criterion is an automatic disqualifier.</p>
          <div className="flex flex-col gap-3">
            {criteria.map(({ pass, label, detail }) => (
              <div key={label} className={`bg-white rounded-xl border shadow-sm p-5 flex gap-4 items-start ${pass ? 'border-gray-100' : 'border-red-50'}`}>
                {pass
                  ? <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-0.5" />
                  : <XCircle size={20} className="text-red-400 shrink-0 mt-0.5" />
                }
                <div>
                  <p className="font-bold text-gray-800 text-sm">{pass ? 'Include: ' : 'Exclude: '}{label}</p>
                  <p className="text-gray-500 text-sm mt-0.5">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Review cadence */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">How Often We Review</h2>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex gap-4 items-start">
            <RefreshCw size={22} className="text-primary shrink-0 mt-0.5" />
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <p>
                All guide pages display a <strong>Last updated</strong> date. When a course is removed from a provider, changes significantly, or becomes paywalled, we remove or replace it within 30 days of being notified.
              </p>
              <p>
                New courses are added on a rolling basis as curators identify resources that meet all criteria. We do not add courses in bulk to inflate numbers — each addition is a deliberate decision.
              </p>
            </div>
          </div>
        </section>

        {/* Affiliate disclosure */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Affiliate Links & Independence</h2>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex gap-4 items-start">
            <Users size={22} className="text-primary shrink-0 mt-0.5" />
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <p>
                Some links on Graduates Hub are affiliate links. If you purchase a paid upgrade (such as a physical certificate), we may earn a small commission at no cost to you.
              </p>
              <p>
                Affiliate relationships <strong>never influence curation decisions</strong>. A course is not listed because it pays a commission — it is listed because it meets our criteria. We turn down affiliate relationships with providers whose free content we would not recommend independently.
              </p>
              <Link href="/disclosure" className="inline-block font-bold text-primary hover:underline text-sm mt-1">
                Read our full Affiliate Disclosure →
              </Link>
            </div>
          </div>
        </section>

        {/* Questions */}
        <section className="bg-blue-50 rounded-2xl border border-blue-100 p-8 text-center">
          <h2 className="text-xl font-extrabold text-gray-900 mb-2">Questions about a specific course?</h2>
          <p className="text-gray-500 text-sm mb-5">If you believe a listed course no longer meets our criteria, let us know and we will review it.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-lg transition-colors text-sm">
            Contact Us
          </Link>
        </section>

      </main>
    </div>
  );
}
