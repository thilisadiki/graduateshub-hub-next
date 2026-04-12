import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Clock, TrendingUp, CheckCircle2, ChevronRight, Briefcase,
  Award, Lightbulb, Users, BookOpen, ArrowRight,
} from 'lucide-react';
import AuthorByline from '@/components/AuthorByline';
import CourseCard from '@/components/CourseCard';
import NewsletterBanner from '@/components/NewsletterBanner';
import { roadmaps } from '@/data/roadmaps';
import { interviewPreps } from '@/data/interviewPrep';
import { courses } from '@/data/courses';
import type { AuthorKey, CareerRoadmap } from '@/types';

const SITE_URL = 'https://www.graduateshub.co.za';

export async function generateStaticParams() {
  return roadmaps.map((r) => ({ slug: r.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const roadmap = roadmaps.find((r) => r.id === slug);
  if (!roadmap) return {};
  return {
    title: `${roadmap.title} (2026) | Graduates Hub`,
    description: roadmap.description,
    alternates: { canonical: `${SITE_URL}/career-roadmaps/${roadmap.id}` },
    openGraph: {
      title: `${roadmap.title} (2026) | Graduates Hub`,
      description: roadmap.description,
      url: `${SITE_URL}/career-roadmaps/${roadmap.id}`,
    },
  };
}

const DEMAND_COLOURS: Record<CareerRoadmap['demandLevel'], string> = {
  'Very High': 'bg-emerald-50 text-emerald-700 border-emerald-100',
  'High': 'bg-blue-50 text-blue-700 border-blue-100',
  'Moderate': 'bg-amber-50 text-amber-700 border-amber-100',
};

export default async function CareerRoadmapPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const roadmap = roadmaps.find((r) => r.id === slug);
  if (!roadmap) notFound();

  const curators = (Array.isArray(roadmap.curator) ? roadmap.curator : [roadmap.curator]) as AuthorKey[];

  const relatedRoadmaps = roadmaps.filter((r) => roadmap.relatedRoadmapIds.includes(r.id));
  const linkedPrep = interviewPreps.find((p) => p.relatedRoadmapId === roadmap.id);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Career Roadmaps', item: `${SITE_URL}/career-roadmaps` },
      { '@type': 'ListItem', position: 3, name: roadmap.title, item: `${SITE_URL}/career-roadmaps/${roadmap.id}` },
    ],
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: roadmap.title,
    description: roadmap.description,
    totalTime: `P${roadmap.timeToJobReady.split('–')[1]?.replace(/\D/g, '') ?? '12'}M`,
    step: roadmap.stages.map((stage) => ({
      '@type': 'HowToStep',
      position: stage.number,
      name: stage.title,
      text: stage.description,
    })),
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-400 mb-10 flex-wrap">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link href="/career-roadmaps" className="hover:text-primary transition-colors">Career Roadmaps</Link>
          <ChevronRight size={14} />
          <span className="text-gray-600 font-medium">{roadmap.title}</span>
        </nav>

        {/* Hero */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${DEMAND_COLOURS[roadmap.demandLevel]}`}>
              {roadmap.demandLevel} Demand
            </span>
            {roadmap.entryLevel && (
              <span className="text-xs font-bold bg-purple-50 text-purple-700 border border-purple-100 px-2.5 py-1 rounded-full">
                No Degree Required
              </span>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-3">
            {roadmap.title}
          </h1>
          <p className="text-lg text-gray-500 mb-6">{roadmap.tagline}</p>

          {/* Stat pills */}
          <div className="flex flex-wrap gap-4 mb-6 text-sm">
            <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-4 py-2.5 border border-gray-100">
              <Clock size={16} className="text-primary shrink-0" />
              <span className="text-gray-600">Time to job-ready: <strong className="text-gray-900">{roadmap.timeToJobReady}</strong></span>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-4 py-2.5 border border-gray-100">
              <TrendingUp size={16} className="text-primary shrink-0" />
              <span className="text-gray-600">Demand: <strong className="text-gray-900">{roadmap.demandLevel}</strong></span>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-4 py-2.5 border border-gray-100">
              <BookOpen size={16} className="text-primary shrink-0" />
              <span className="text-gray-600"><strong className="text-gray-900">{roadmap.stages.length} stages</strong> with free courses</span>
            </div>
          </div>

          <AuthorByline authors={curators} lastUpdated={roadmap.lastUpdated} />
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Overview</h2>
          {roadmap.overview.split('\n\n').map((para, i) => (
            <p key={i} className="text-gray-600 leading-relaxed mb-4">{para}</p>
          ))}
        </section>

        {/* Job Titles */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Users size={20} className="text-primary" />
            <h2 className="text-2xl font-extrabold text-gray-900">Roles You Can Get</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {roadmap.jobTitles.map((title) => (
              <span
                key={title}
                className="bg-white border border-gray-200 text-gray-700 text-sm font-medium px-4 py-2 rounded-full shadow-sm"
              >
                {title}
              </span>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 size={20} className="text-primary" />
            <h2 className="text-2xl font-extrabold text-gray-900">Skills You Will Build</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-gray-700 text-xs uppercase tracking-wider mb-3">Technical Skills</h3>
              <ul className="space-y-2">
                {roadmap.technicalSkills.map((skill) => (
                  <li key={skill} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 size={15} className="text-emerald-500 mt-0.5 shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-gray-700 text-xs uppercase tracking-wider mb-3">Soft Skills</h3>
              <ul className="space-y-2">
                {roadmap.softSkills.map((skill) => (
                  <li key={skill} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 size={15} className="text-blue-400 mt-0.5 shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* The Roadmap Stages */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-8">
            <Briefcase size={20} className="text-primary" />
            <h2 className="text-2xl font-extrabold text-gray-900">The Roadmap</h2>
          </div>

          <div className="flex flex-col gap-10">
            {roadmap.stages.map((stage) => {
              const stageCourses = stage.courseIds
                .map((id) => courses.find((c) => c.id === id))
                .filter(Boolean);

              return (
                <div key={stage.number} className="relative">
                  {/* Stage connector line */}
                  {stage.number < roadmap.stages.length && (
                    <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-gray-200 -mb-10 hidden sm:block" />
                  )}

                  <div className="flex items-start gap-4">
                    {/* Stage number bubble */}
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-extrabold text-sm shrink-0 relative z-10">
                      {stage.number}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-xl font-extrabold text-gray-900">{stage.title}</h3>
                        <span className="flex items-center gap-1 text-xs text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full">
                          <Clock size={11} />
                          {stage.duration}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-6">{stage.description}</p>

                      {/* Courses for this stage */}
                      {stageCourses.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                          {stageCourses.map((course) => (
                            course && <CourseCard key={course.id} course={course} />
                          ))}
                        </div>
                      )}

                      {/* Milestone */}
                      <div className="flex items-start gap-2 bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-3">
                        <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 shrink-0" />
                        <p className="text-sm text-emerald-800">
                          <strong>Stage milestone: </strong>{stage.milestone}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Award size={20} className="text-primary" />
            <h2 className="text-2xl font-extrabold text-gray-900">Certifications Worth Getting</h2>
          </div>
          <div className="flex flex-col gap-3">
            {roadmap.certifications.map((cert) => (
              <div
                key={cert.name}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex flex-col sm:flex-row sm:items-start gap-4"
              >
                <div className="shrink-0">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${cert.free ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 'bg-gray-50 text-gray-500 border-gray-200'}`}>
                    {cert.free ? 'Free' : 'Paid'}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{cert.name}</p>
                  <p className="text-xs text-gray-500 mb-1">{cert.provider}</p>
                  <p className="text-sm text-gray-600">{cert.why}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio Projects */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb size={20} className="text-primary" />
            <h2 className="text-2xl font-extrabold text-gray-900">Portfolio Project Ideas</h2>
          </div>
          <p className="text-gray-500 text-sm mb-5">
            Employers want proof, not promises. Build at least two of these before applying for jobs, and document each one publicly on GitHub or a personal portfolio.
          </p>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <ol className="space-y-4">
              {roadmap.portfolioProjects.map((project, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-sm text-gray-700 leading-relaxed">{project}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Newsletter */}
        <div className="mb-12">
          <NewsletterBanner />
        </div>

        {/* Interview Prep cross-link */}
        {linkedPrep && (
          <div className="mb-12 bg-emerald-50 border border-emerald-100 rounded-xl px-5 py-5 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <p className="text-sm font-bold text-emerald-800">Ready to start applying?</p>
              <p className="text-sm text-emerald-700 mt-1">
                The <strong>{linkedPrep.role}</strong> interview prep guide covers the exact CV tips and interview questions SA employers use to screen candidates for this role.
              </p>
            </div>
            <Link
              href={`/interview-prep/${linkedPrep.id}`}
              className="shrink-0 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-lg transition-colors text-sm whitespace-nowrap"
            >
              CV & Interview Prep →
            </Link>
          </div>
        )}

        {/* Related Roadmaps */}
        {relatedRoadmaps.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Related Career Paths</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedRoadmaps.map((related) => (
                <Link
                  key={related.id}
                  href={`/career-roadmaps/${related.id}`}
                  className="group bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:border-primary hover:shadow-md transition-all flex flex-col gap-2"
                >
                  <p className="font-bold text-gray-900 group-hover:text-primary transition-colors text-sm leading-snug">
                    {related.title}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-400 mt-auto">
                    <Clock size={11} />
                    {related.timeToJobReady}
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
            href="/career-roadmaps"
            className="flex-1 text-center bg-white border-2 border-primary text-primary hover:bg-blue-50 font-bold px-6 py-3 rounded-lg transition-colors text-sm"
          >
            ← All Career Roadmaps
          </Link>
          <Link
            href="/search"
            className="flex-1 text-center bg-primary hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-lg transition-colors text-sm"
          >
            Find a Course →
          </Link>
        </div>
      </main>
    </div>
  );
}
