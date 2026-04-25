import type { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles, Award, CheckCircle, Briefcase, ArrowRight, ShieldCheck, Share2, FileText } from 'lucide-react';
import { portfolioTasks } from '@/data/portfolioTasks';
import { portfolioCategories } from '@/data/portfolioCategories';
import { portfolioTopics } from '@/data/portfolioTopics';
import { BreadcrumbList, ItemList, WebPage, WithContext } from 'schema-dts';
import { SITE_URL, OG_IMAGE } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Proof of Work Portfolio for SA Graduates — Graded Micro-Internship Tasks',
  description:
    'Complete short, practical micro-internship tasks graded against a public rubric and earn a shareable Badge of Competence for your LinkedIn. Built for South African graduates and career changers. No account required.',
  alternates: { canonical: `${SITE_URL}/portfolio` },
  openGraph: {
    title: 'Proof of Work Portfolio | Graduates Hub',
    description:
      'Most graduates have a CV. Very few have a portfolio. Complete practical tasks, get them graded, and earn a shareable Badge of Competence.',
    url: `${SITE_URL}/portfolio`,
    type: 'website',
    images: [OG_IMAGE],
  },
};

const steps = [
  { step: '1', icon: Briefcase, title: 'Pick a category and topic', body: 'Browse categories like Web Development, Data, or Digital Marketing. Each topic has up to three difficulty levels.' },
  { step: '2', icon: FileText, title: 'Choose your level', body: 'Beginner, Intermediate, or Advanced. Start where you are, revisit to level up.' },
  { step: '3', icon: Award, title: 'Earn a Badge of Competence', body: 'Your submission is graded against a public rubric. Pass and you get a shareable Badge URL for LinkedIn.' },
];

export default function PortfolioLandingPage() {
  const totalTasks = portfolioTasks.length;
  const totalCategories = portfolioCategories.length;

  const schema: WithContext<WebPage> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Proof of Work Portfolio',
    description:
      'Complete practical micro-internship tasks and earn a public Badge of Competence you can share on LinkedIn.',
    url: `${SITE_URL}/portfolio`,
  };

  const breadcrumbSchema: WithContext<BreadcrumbList> = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Portfolio', item: `${SITE_URL}/portfolio` },
    ],
  };

  const itemListSchema: WithContext<ItemList> = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Portfolio Categories',
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    numberOfItems: portfolioCategories.length,
    itemListElement: portfolioCategories.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${SITE_URL}/portfolio/${c.id}`,
      name: c.name,
    })),
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 font-bold text-xs uppercase tracking-wider mb-6">
            <Sparkles size={12} className="text-yellow-400" />
            New: Proof of Work Portfolio
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-5 leading-tight">
            Most graduates have a CV.
            <br className="hidden sm:block" /> Very few have a portfolio.
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Pick a category. Pick a difficulty. Submit a practical task graded against a public rubric. Earn a Badge of Competence you can link straight from your LinkedIn.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 text-sm text-slate-400">
            {[
              `${totalTasks} tasks across ${totalCategories} categories`,
              '3 difficulty levels per topic',
              'Free. No account required.',
            ].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <CheckCircle size={14} className="text-emerald-400 shrink-0" />
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-10">
            <Link
              href="#categories"
              className="bg-indigo-500 hover:bg-indigo-400 text-white px-6 py-3 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 shadow-lg shadow-indigo-900/40"
            >
              Browse Categories <ArrowRight size={16} />
            </Link>
            <Link
              href="#how-it-works"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-xl font-bold transition-colors"
            >
              How it works
            </Link>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-14 flex flex-col gap-20">
        {/* Categories */}
        <section id="categories">
          <div className="mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Choose a Category</h2>
            <p className="text-gray-500">Each category has topics, and each topic has up to three levels to choose from.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {portfolioCategories.map((cat) => {
              const topicsInCat = portfolioTopics.filter((t) => t.categoryId === cat.id);
              const tasksInCat = portfolioTasks.filter((t) => t.categoryId === cat.id);
              const available = tasksInCat.length;
              return (
                <Link
                  key={cat.id}
                  href={`/portfolio/${cat.id}`}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all flex flex-col overflow-hidden"
                >
                  <div className={`h-1.5 bg-gradient-to-r ${cat.accentFrom} ${cat.accentTo}`} />
                  <div className="p-6 flex flex-col flex-1 gap-3">
                    <h3 className="text-lg font-black text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{cat.tagline}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500 mt-auto pt-3 border-t border-gray-100">
                      <span>{topicsInCat.length} {topicsInCat.length === 1 ? 'topic' : 'topics'}</span>
                      <span>{available} {available === 1 ? 'task' : 'tasks'} available</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-bold text-indigo-600">
                      Explore category <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works">
          <div className="mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">How It Works</h2>
            <p className="text-gray-500">Three steps from brief to Badge.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map(({ step, icon: Icon, title, body }) => (
              <div key={step} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white font-black text-lg flex items-center justify-center shrink-0">
                    {step}
                  </div>
                  <Icon size={22} className="text-indigo-500" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The Badge */}
        <section className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl border border-indigo-100 p-8 md:p-10">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <Share2 size={18} className="text-blue-700" />
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700">LinkedIn-ready</span>
              </div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-3">What the Badge looks like</h2>
              <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                Every Badge lives at a unique public URL. It shows your name, the task, your submission, your rubric scores, and a short evaluation summary. Share it directly from your LinkedIn profile or a job application, and any hiring manager can verify it with one click.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Badges show they are reviewed by Google Gemini. We believe in being honest about that, because trust matters more than the illusion of human review.
              </p>
            </div>
            <div className="flex-1 w-full">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Award size={18} className="text-indigo-600" />
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Badge of Competence</span>
                </div>
                <div className="text-lg font-black text-gray-900 mb-1">Social Media Audit for a Local Coffee Shop</div>
                <div className="text-sm text-gray-500 mb-4">Awarded to Jane Mokoena, April 2026</div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl font-black text-emerald-600">82<span className="text-lg text-gray-400">/100</span></div>
                  <div className="text-xs font-bold px-2 py-1 rounded-full bg-emerald-100 text-emerald-700">Pass with Distinction</div>
                </div>
                <div className="text-xs text-gray-500 border-t border-gray-100 pt-3">
                  Graded by rubric. Full evaluation, submission text, and scores are public at the Badge URL.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why it matters */}
        <section>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Why a Proof of Work Portfolio?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Proof beats claims', body: 'Saying "I know digital marketing" on a CV is forgettable. Linking a graded social media audit is not.' },
              { title: 'Employers can verify it', body: 'Your Badge lives at a public URL. Any hiring manager can click it to see the actual work, the rubric, and the evaluation.' },
              { title: 'Built for entry-level', body: 'Tasks are scoped for graduates and career changers. No prior work history required.' },
              { title: 'Fair, transparent grading', body: 'Every task publishes its rubric before you submit. Your score breaks down criterion-by-criterion so you know exactly where you stood out.' },
            ].map(({ title, body }) => (
              <div key={title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                  <ShieldCheck size={20} className="text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
