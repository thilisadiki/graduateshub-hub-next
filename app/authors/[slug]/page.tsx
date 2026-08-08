import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  ChevronRight, ExternalLink, ShieldCheck, Map, FileText,
  Award, CheckCircle2, ArrowRight
} from 'lucide-react';
import { authors, getAuthorBySlug } from '@/data/authors';
import { roadmaps } from '@/data/roadmaps';
import { interviewPreps } from '@/data/interviewPrep';
import { formatLastUpdated } from '@/utils/dateUtils';
import { SITE_URL, SITE_NAME } from '@/lib/seo';

export async function generateStaticParams() {
  return authors.map((author) => ({ slug: author.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) return {};

  return {
    title: author.metaTitle,
    description: author.metaDescription,
    alternates: { canonical: `${SITE_URL}/authors/${author.slug}` },
    openGraph: {
      siteName: SITE_NAME,
      title: `${author.metaTitle} | ${SITE_NAME}`,
      description: author.metaDescription,
      type: 'profile',
      url: `${SITE_URL}/authors/${author.slug}`,
      images: [{ url: `${SITE_URL}${author.photo}`, width: 400, height: 400, alt: author.name }],
    },
  };
}

export default async function AuthorProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) notFound();

  // Filter roadmaps curated by this author
  const authorRoadmaps = roadmaps.filter((r) => {
    if (Array.isArray(r.curator)) return r.curator.includes(author.key);
    return r.curator === author.key;
  });

  // Filter interview preps curated by this author
  const authorInterviewPreps = interviewPreps.filter((p) => {
    if (Array.isArray(p.curator)) return p.curator.includes(author.key);
    return p.curator === author.key;
  });

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: author.name,
    jobTitle: author.role,
    description: author.bio.join(' '),
    url: `${SITE_URL}/authors/${author.slug}`,
    image: `${SITE_URL}${author.photo}`,
    sameAs: [author.linkedinUrl, author.websiteUrl].filter(Boolean),
    worksFor: author.worksFor.map((w) => ({
      '@type': 'Organization',
      name: w.name,
      url: w.url,
    })),
    hasCredential: author.credentials.map((c) => ({
      '@type': 'EducationalOccupationalCredential',
      name: c.label,
      credentialCategory: 'Certificate',
      url: c.url,
      recognizedBy: { '@type': 'Organization', name: c.issuer },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'About', item: `${SITE_URL}/about` },
      { '@type': 'ListItem', position: 3, name: author.name, item: `${SITE_URL}/authors/${author.slug}` },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

      <main className="max-w-5xl mx-auto px-6 py-12 w-full">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight size={14} />
          <Link href="/about" className="hover:text-primary transition-colors">
            About
          </Link>
          <ChevronRight size={14} />
          <span className="text-gray-600 font-medium">{author.name}</span>
        </nav>

        {/* Author Profile Header Card */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-12 mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden shrink-0 shadow-md ring-4 ring-[#FFDF9C]/50">
              <Image
                src={author.photo}
                alt={`${author.name} profile photo`}
                fill
                sizes="(max-width: 768px) 144px, 176px"
                className="object-cover"
              />
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">{author.name}</h1>
                <span className="inline-flex items-center gap-1 text-xs font-bold bg-[#FFDF9C]/20 text-[#5a4000] border border-[#D1C5B4] px-3 py-1 rounded-full">
                  <ShieldCheck size={14} /> Verified Curator
                </span>
              </div>

              <p className="text-primary font-bold text-lg mb-4">{author.role}</p>

              {/* Expertise Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {author.expertise.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-slate-100 text-slate-700 font-semibold px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-3 text-gray-600 leading-relaxed text-sm md:text-base mb-8">
                {author.bio.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {/* Verified Credentials */}
              <div className="pt-6 border-t border-gray-100">
                <p className="text-xs font-extrabold text-gray-400 uppercase tracking-wider mb-3">
                  Verified Industry Credentials
                </p>
                <div className="flex flex-wrap gap-2">
                  {author.credentials.map(({ label, issuer, url }) => (
                    <a
                      key={label}
                      href={url || '#'}
                      target={url ? '_blank' : undefined}
                      rel={url ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1.5 rounded-full hover:bg-emerald-100 transition-colors"
                    >
                      <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                      <span>{label}</span>
                      <span className="text-emerald-600 font-normal">· {issuer}</span>
                      {url && <ExternalLink size={11} className="text-emerald-500 shrink-0" />}
                    </a>
                  ))}
                </div>
              </div>

              {/* Social / External Links */}
              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-gray-100 text-sm">
                <a
                  href={author.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-primary hover:text-[#261A00] transition-colors"
                >
                  <ExternalLink size={15} /> LinkedIn Profile
                </a>
                {author.websiteUrl && (
                  <>
                    <span className="text-gray-300">|</span>
                    <a
                      href={author.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-bold text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <ExternalLink size={15} /> Portfolio Website
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Section 1: Curated Career Roadmaps */}
        {authorRoadmaps.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                <Map size={20} />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900">
                  Career Roadmaps Curated by {author.name.split(' ')[0]}
                </h2>
                <p className="text-sm text-gray-500">
                  Step-by-step career tracks built around high-demand industry skills.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {authorRoadmaps.map((roadmap) => (
                <Link
                  key={roadmap.id}
                  href={`/career-roadmaps/${roadmap.id}`}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:border-primary hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-bold text-primary bg-[#FFDF9C]/20 border border-[#D1C5B4] px-2.5 py-1 rounded-full inline-block mb-3">
                      {roadmap.demandLevel} Demand
                    </span>
                    <h3 className="font-extrabold text-gray-900 text-lg group-hover:text-primary transition-colors mb-1">
                      {roadmap.title}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-2 mb-4 leading-relaxed">{roadmap.tagline}</p>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-xs font-bold text-primary">
                    <span>{roadmap.stages.length} Stages · {roadmap.timeToJobReady}</span>
                    <span className="group-hover:underline">View Roadmap →</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Section 2: Curated Interview Prep Guides */}
        {authorInterviewPreps.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                <FileText size={20} />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900">
                  Interview Prep Guides Authored by {author.name.split(' ')[0]}
                </h2>
                <p className="text-sm text-gray-500">
                  Technical screening questions, CV formatting guidelines, and salary benchmarks.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {authorInterviewPreps.map((prep) => (
                <Link
                  key={prep.id}
                  href={`/interview-prep/${prep.id}`}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:border-primary hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full inline-block mb-3">
                      Updated {formatLastUpdated(prep.lastUpdated)}
                    </span>
                    <h3 className="font-extrabold text-gray-900 text-lg group-hover:text-primary transition-colors mb-1">
                      {prep.role}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-2 mb-4 leading-relaxed">{prep.description}</p>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-xs font-bold text-primary">
                    <span>{prep.questions.length} Q&amp;As · {prep.cvTips.length} CV Tips</span>
                    <span className="group-hover:underline">View Guide →</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Bottom Navigation CTA */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10 text-center">
          <h2 className="text-xl font-extrabold text-gray-900 mb-2">Want to learn more about our curation process?</h2>
          <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto leading-relaxed">
            Read our full curation policy to see how we evaluate courses, maintain independence, and verify credentials.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/curation-policy"
              className="bg-primary hover:bg-[#5a4000] text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              Read Curation Policy
            </Link>
            <Link
              href="/about"
              className="bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 font-bold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              Meet the Full Team
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
