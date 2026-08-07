import type { Metadata } from 'next';
import Link from 'next/link';
import { ShoppingBag, Award, CheckCircle2, Clock, ShieldCheck, ArrowRight, BarChart2 } from 'lucide-react';
import { SITE_URL, SITE_NAME } from '@/lib/seo';

const CANONICAL = `${SITE_URL}/google-digital-marketing-ecommerce-guide`;

export const metadata: Metadata = {
  title: 'Google Digital Marketing & E-Commerce Certificate Guide (2026)',
  description:
    'Complete guide to the Google Digital Marketing & E-Commerce Professional Certificate on Grow with Google. Covers Shopify, Google Ads, SEO, email marketing, and GA4 analytics.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    siteName: SITE_NAME,
    title: 'Google Digital Marketing & E-Commerce Certificate Guide (2026) | Graduates Hub',
    description:
      'Master digital store management, SEO, Google Search Ads, and email marketing with Google credentials.',
    url: CANONICAL,
  },
};

const coursesInCert = [
  { n: 1, title: 'Foundations of Digital Marketing and E-commerce', desc: 'Customer journeys, digital funnels, and marketing strategy fundamentals.' },
  { n: 2, title: 'Attract and Engage Customers with Digital Channels', desc: 'Search Engine Optimization (SEO), content marketing, and organic reach tactics.' },
  { n: 3, title: 'From Like to Lead: Interact with Customers Online', desc: 'Social media marketing, audience engagement, and community management.' },
  { n: 4, title: 'Think Outside the Box: Email Marketing', desc: 'Automated email flows, list segmentation, and email campaign analytics in Mailchimp/Klaviyo.' },
  { n: 5, title: 'Assess and Optimize: Marketing Analytics and Measurement', desc: 'Google Analytics 4 (GA4) setup, event tracking, and conversion attribution modeling.' },
  { n: 6, title: 'Make the Sale: Build, Launch, and Manage E-commerce Stores', desc: 'Shopify storefront setup, product catalog optimization, inventory flows, and checkout conversion optimization.' },
  { n: 7, title: 'Satisfaction Guaranteed: Develop Customer Loyalty Online', desc: 'Customer retention strategies, loyalty programs, and post-purchase customer support workflows.' },
];

export default function GoogleDigitalMarketingGuidePage() {
  return (
    <div className="min-h-screen bg-[#FFF8F1]">
      <div className="bg-[#1F1B13] text-white py-16 md:py-20 border-b border-[#D1C5B4]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7A5900]/30 border border-[#FFDF9C]/30 text-[#FFDF9C] font-bold text-xs uppercase tracking-wider mb-6">
            <ShoppingBag size={14} className="text-yellow-400" /> Grow with Google Series
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-5 leading-tight">
            Google Digital Marketing &amp; E-Commerce Certificate Guide (2026)
          </h1>
          <p className="text-[#D1C5B4] text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
            Master Shopify storefronts, Google Search Ads, SEO, and analytics with Google&apos;s industry-recognized professional credential.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-[#D1C5B4]">
            <span className="flex items-center gap-2"><Clock size={16} className="text-[#FFDF9C]" /> 3–6 Months (Under 10 hrs/week)</span>
            <span className="flex items-center gap-2"><Award size={16} className="text-[#FFDF9C]" /> Issued by Google</span>
            <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-emerald-400" /> Job-Ready Skills</span>
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-12 flex flex-col gap-16">
        <section className="bg-white rounded-2xl border border-[#D1C5B4] p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#1F1B13] mb-4">What You Will Learn</h2>
          <p className="text-[#4F4639] leading-relaxed mb-4">
            The Google Digital Marketing &amp; E-Commerce Certificate is designed to take complete beginners and turn them into job-ready e-commerce specialists and performance marketers.
          </p>
          <p className="text-[#4F4639] leading-relaxed">
            Throughout the 7 courses, learners gain practical experience building online stores on Shopify, creating targeted search ads in Google Ads, conducting keyword research, and setting up automated email flows.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold text-[#1F1B13] mb-6">The 7 Certificate Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {coursesInCert.map((c) => (
              <div key={c.n} className="bg-white rounded-2xl border border-[#D1C5B4] p-6 shadow-sm flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary text-white font-bold flex items-center justify-center text-xs shrink-0">
                    {c.n}
                  </div>
                  <h3 className="font-bold text-[#1F1B13] text-sm">{c.title}</h3>
                </div>
                <p className="text-[#4F4639] text-xs leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-primary text-white rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div>
            <h2 className="text-2xl font-extrabold mb-2">Explore the E-Commerce Roadmap</h2>
            <p className="text-[#FFDF9C] text-sm max-w-xl">
              Check out our step-by-step roadmap for becoming a Digital Marketing &amp; E-Commerce Specialist, featuring salary benchmarks and interview questions.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/career-roadmaps/google-digital-marketing-ecommerce"
              className="bg-white text-primary font-bold text-sm px-6 py-3 rounded-xl hover:bg-[#FFDF9C]/20 transition-colors whitespace-nowrap"
            >
              Explore Roadmap →
            </Link>
            <Link
              href="/interview-prep/google-digital-marketing-ecommerce"
              className="bg-[#5a4000] text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-[#261A00] transition-colors whitespace-nowrap border border-[#FFDF9C]/30"
            >
              Interview Prep
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
