import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ChevronRight, CheckCircle2, AlertCircle, MessageSquare,
  FileText, DollarSign, BookOpen, ArrowRight, Lightbulb,
} from 'lucide-react';
import AuthorByline from '@/components/shared/AuthorByline';
import NewsletterBanner from '@/components/shared/NewsletterBanner';
import { interviewPreps } from '@/data/interviewPrep';
import { roadmaps } from '@/data/roadmaps';
import type { AuthorKey } from '@/types';

const SITE_URL = 'https://www.graduateshub.co.za';

export async function generateStaticParams() {
  return interviewPreps.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const prep = interviewPreps.find((p) => p.id === slug);
  if (!prep) return {};
  return {
    title: `${prep.role} CV & Interview Prep (2026) | Graduates Hub`,
    description: prep.description,
    alternates: { canonical: `${SITE_URL}/interview-prep/${prep.id}` },
    openGraph: {
      title: `${prep.role} CV & Interview Prep (2026) | Graduates Hub`,
      description: prep.description,
      url: `${SITE_URL}/interview-prep/${prep.id}`,
    },
  };
}

export default async function InterviewPrepPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const prep = interviewPreps.find((p) => p.id === slug);
  if (!prep) notFound();

  const curators = (Array.isArray(prep.curator) ? prep.curator : [prep.curator]) as AuthorKey[];
  const relatedPreps = interviewPreps.filter((p) => prep.relatedPrepIds.includes(p.id));
  const linkedRoadmap = roadmaps.find((r) => r.id === prep.relatedRoadmapId);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'CV & Interview Prep', item: `${SITE_URL}/interview-prep` },
      { '@type': 'ListItem', position: 3, name: prep.role, item: `${SITE_URL}/interview-prep/${prep.id}` },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: prep.questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.sampleAnswer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-400 mb-10 flex-wrap">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link href="/interview-prep" className="hover:text-primary transition-colors">CV & Interview Prep</Link>
          <ChevronRight size={14} />
          <span className="text-gray-600 font-medium">{prep.role}</span>
        </nav>

        {/* Hero */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 mb-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
              <FileText size={20} className="text-primary" />
            </div>
            <div>
              <p className="text-xs font-bold text-primary uppercase tracking-wider">CV & Interview Prep</p>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-3">
            {prep.role}
          </h1>
          <p className="text-lg text-gray-500 mb-4">{prep.description}</p>
          <div className="flex items-center gap-1.5 text-sm text-gray-500 mb-6">
            <DollarSign size={15} className="text-gray-400 shrink-0" />
            <span>{prep.salaryRange}</span>
          </div>
          <AuthorByline authors={curators} lastUpdated={prep.lastUpdated} />
        </div>

        {/* Linked Roadmap CTA */}
        {linkedRoadmap && (
          <div className="mb-10 bg-blue-50 border border-blue-100 rounded-xl px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex-1">
              <p className="text-sm font-bold text-blue-800">Want the full study plan?</p>
              <p className="text-sm text-blue-700 mt-0.5">
                The <strong>{linkedRoadmap.title}</strong> roadmap covers every skill you need to build before the interview.
              </p>
            </div>
            <Link
              href={`/career-roadmaps/${linkedRoadmap.id}`}
              className="shrink-0 bg-primary hover:bg-blue-800 text-white font-bold px-5 py-2.5 rounded-lg transition-colors text-sm whitespace-nowrap"
            >
              View Roadmap →
            </Link>
          </div>
        )}

        {/* Key Skills */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 size={20} className="text-primary" />
            <h2 className="text-2xl font-extrabold text-gray-900">Key Skills Employers Test</h2>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {prep.keySkills.map((skill) => (
                <li key={skill} className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 size={15} className="text-emerald-500 mt-0.5 shrink-0" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CV Tips */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen size={20} className="text-primary" />
            <h2 className="text-2xl font-extrabold text-gray-900">How to Write Your CV</h2>
          </div>

          {/* Must-include + Avoid grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-gray-800 text-sm mb-3 flex items-center gap-2">
                <CheckCircle2 size={15} className="text-emerald-500" />
                Must Include
              </h3>
              <ul className="space-y-2">
                {prep.cvMustInclude.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-emerald-500 mt-1 shrink-0">+</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-gray-800 text-sm mb-3 flex items-center gap-2">
                <AlertCircle size={15} className="text-red-400" />
                Avoid
              </h3>
              <ul className="space-y-2">
                {prep.cvAvoid.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-red-400 mt-0.5 shrink-0 font-bold">x</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Detailed CV tips */}
          <div className="flex flex-col gap-4">
            {prep.cvTips.map((tip) => (
              <div key={tip.heading} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <Lightbulb size={15} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{tip.heading}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{tip.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CV Builder CTA */}
        <div className="mb-12 bg-violet-50 border border-violet-100 rounded-xl px-5 py-5 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-sm font-bold text-violet-800">Ready to put these tips into your CV?</p>
            <p className="text-sm text-violet-700 mt-1">
              Use our free CV builder to apply every tip above — choose from 3 professional templates and download as PDF in minutes.
            </p>
          </div>
          <Link
            href="/cv-builder"
            className="shrink-0 bg-violet-600 hover:bg-violet-700 text-white font-bold px-5 py-2.5 rounded-lg transition-colors text-sm whitespace-nowrap"
          >
            Build My CV Free →
          </Link>
        </div>

        {/* Interview Questions */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <MessageSquare size={20} className="text-primary" />
            <h2 className="text-2xl font-extrabold text-gray-900">Common Interview Questions</h2>
          </div>

          <div className="flex flex-col gap-6">
            {prep.questions.map((q, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                {/* Question */}
                <div className="flex items-start gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-primary text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <h3 className="font-bold text-gray-900 text-base leading-snug">{q.question}</h3>
                </div>

                {/* Why asked */}
                <div className="bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 mb-4">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Why they ask this</p>
                  <p className="text-sm text-gray-600">{q.why}</p>
                </div>

                {/* Sample answer */}
                <div className="mb-4">
                  <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">Sample Answer</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{q.sampleAnswer}</p>
                </div>

                {/* Red flag */}
                {q.redFlag && (
                  <div className="flex items-start gap-2 bg-red-50 border border-red-100 rounded-lg px-4 py-3">
                    <AlertCircle size={15} className="text-red-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-red-600 mb-0.5">Red flag answer</p>
                      <p className="text-sm text-red-700">{q.redFlag}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <div className="mb-12">
          <NewsletterBanner />
        </div>

        {/* Related Prep Guides */}
        {relatedPreps.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Related Interview Prep Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedPreps.map((related) => (
                <Link
                  key={related.id}
                  href={`/interview-prep/${related.id}`}
                  className="group bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:border-primary hover:shadow-md transition-all flex flex-col gap-2"
                >
                  <p className="font-bold text-gray-900 group-hover:text-primary transition-colors text-sm leading-snug">
                    {related.role}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-400 mt-auto">
                    <span>{related.questions.length} questions</span>
                    <ArrowRight size={12} className="ml-auto text-gray-300 group-hover:text-primary transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Bottom nav */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/interview-prep"
            className="flex-1 text-center bg-white border-2 border-primary text-primary hover:bg-blue-50 font-bold px-6 py-3 rounded-lg transition-colors text-sm"
          >
            All Interview Prep Guides
          </Link>
          {linkedRoadmap && (
            <Link
              href={`/career-roadmaps/${linkedRoadmap.id}`}
              className="flex-1 text-center bg-primary hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              {linkedRoadmap.title} Roadmap →
            </Link>
          )}
        </div>
      </main>
    </div>
  );
}
