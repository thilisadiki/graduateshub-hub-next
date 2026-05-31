import { cache } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Award, CheckCircle2, AlertCircle, ExternalLink, Calendar, Sparkles } from 'lucide-react';
import { getSupabase } from '@/utils/supabase';
import { getTaskById } from '@/data/portfolioTasks';
import type { PortfolioProof } from '@/types';
import ShareButtons from './ShareButtons';
import { SITE_URL, SITE_NAME } from '@/lib/seo';
import TempProofViewer from './TempProofViewer';

const getProof = cache(async (id: string): Promise<PortfolioProof | null> => {
  try {
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from('portfolio_proofs')
      .select('*')
      .eq('id', id)
      .maybeSingle();
    if (error) {
      console.error('Supabase fetch error:', error);
      return null;
    }
    return (data as PortfolioProof) || null;
  } catch (error) {
    console.error('getProof error:', error);
    return null;
  }
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  if (id.startsWith('temp-')) {
    return {
      title: 'Local Badge Preview | Graduates Hub',
      description: 'Review and synchronize your graded portfolio badge.',
      robots: 'noindex, nofollow',
    };
  }
  const proof = await getProof(id);
  if (!proof) return { title: 'Badge not found' };

  const title = `${proof.graduate_name}: ${proof.task_title}`;
  const description = `Badge of Competence. Scored ${proof.evaluation.overallScore}/100 (${proof.evaluation.verdict}) on "${proof.task_title}". Verified by Graduates Hub.`;
  const ogImageUrl = `${SITE_URL}/proof/${proof.id}/opengraph-image`;

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/proof/${proof.id}` },
    openGraph: {
      siteName: SITE_NAME,
      title,
      description,
      url: `${SITE_URL}/proof/${proof.id}`,
      type: 'profile',
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImageUrl],
    },
  };
}

function verdictClass(verdict: string): string {
  if (verdict === 'Pass with Distinction') return 'bg-emerald-100 text-emerald-700 border-emerald-200';
  if (verdict === 'Pass') return 'bg-[#FFDF9C] text-[#7A5900] border-[#D1C5B4]';
  return 'bg-amber-100 text-amber-800 border-amber-200';
}

function scoreColour(score: number): string {
  if (score >= 80) return 'text-emerald-600';
  if (score >= 60) return 'text-[#7A5900]';
  return 'text-amber-600';
}

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  } catch {
    return iso;
  }
}

export default async function ProofPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  if (id.startsWith('temp-')) {
    return <TempProofViewer id={id} />;
  }
  const proof = await getProof(id);
  if (!proof) notFound();

  const task = getTaskById(proof.task_id);
  const ev = proof.evaluation;
  const shareUrl = `${SITE_URL}/proof/${proof.id}`;

  const credentialSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOccupationalCredential',
    name: `${proof.task_title} (Badge of Competence)`,
    description: ev.summary,
    credentialCategory: 'Portfolio Badge',
    recognizedBy: { '@type': 'Organization', name: 'Graduates Hub', url: SITE_URL },
    dateCreated: proof.created_at,
    url: shareUrl,
  };

  return (
    <div className="min-h-screen bg-[#FFF8F1]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(credentialSchema).replace(/</g, '\\u003c') }}
      />

      {/* Hero */}
      <div className="bg-[#1F1B13] text-white">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-14">
          <div className="flex items-center gap-2 mb-5 text-sm text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
            <span>›</span>
            <span className="text-slate-300 font-medium">Badge</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <Award size={18} className="text-yellow-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-yellow-400">Badge of Competence</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-3 leading-tight">
            {proof.task_title}
          </h1>
          <p className="text-slate-300 text-lg">Awarded to <span className="text-white font-bold">{proof.graduate_name}</span></p>
          <div className="flex items-center gap-4 mt-4 text-sm text-slate-400">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} /> {formatDate(proof.created_at)}
            </span>
            <span className="px-2.5 py-1 rounded-full bg-[#7A5900]/20 border border-[#FFDF9C]/30 text-[#FFDF9C] text-xs font-bold uppercase tracking-wider">
              {proof.task_field}
            </span>
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-10 flex flex-col gap-8">
        {/* Score card */}
        <section className="bg-white rounded-2xl border border-[#D1C5B4] shadow-sm p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-6">
              <div>
                <div className={`text-5xl md:text-6xl font-black ${scoreColour(ev.overallScore)}`}>
                  {ev.overallScore}
                  <span className="text-2xl text-gray-400 font-bold">/100</span>
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mt-1">Overall Score</div>
              </div>
              <div>
                <span className={`text-sm font-bold px-3 py-1.5 rounded-full border ${verdictClass(ev.verdict)}`}>
                  {ev.verdict}
                </span>
              </div>
            </div>
            <ShareButtons shareUrl={shareUrl} graduateName={proof.graduate_name} taskTitle={proof.task_title} />
          </div>
          <p className="text-gray-600 leading-relaxed text-[15px] mt-6 pt-6 border-t border-gray-100">
            {ev.summary}
          </p>
        </section>

        {/* Rubric breakdown */}
        <section className="bg-white rounded-2xl border border-[#D1C5B4] shadow-sm p-6 md:p-8">
          <h2 className="text-xl font-extrabold text-[#1F1B13] mb-1">Rubric Breakdown</h2>
          <p className="text-sm text-[#7C7061] mb-6">Each criterion scored 1 to 5 against the published task rubric.</p>
          <ul className="flex flex-col gap-4">
            {ev.rubricScores.map((r) => (
              <li key={r.key} className="border-l-2 border-[#FFDF9C] pl-4">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <div className="font-bold text-[#1F1B13]">{r.label}</div>
                  <div className="text-sm font-bold text-[#7A5900] shrink-0">
                    {r.score}/{r.maxScore}
                  </div>
                </div>
                <div className="w-full h-1.5 rounded-full bg-[#EFE7DF] overflow-hidden mb-2">
                  <div
                    className="h-full bg-gradient-to-r from-[#7A5900] to-[#FFDF9C] rounded-full"
                    style={{ width: `${(r.score / r.maxScore) * 100}%` }}
                  />
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{r.feedback}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Strengths and improvements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="bg-white rounded-2xl border border-[#D1C5B4] shadow-sm p-6">
            <h2 className="font-extrabold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle2 size={18} className="text-emerald-600" /> Strengths
            </h2>
            <ul className="flex flex-col gap-2.5">
              {ev.strengths.map((s, i) => (
                <li key={i} className="flex gap-2 text-sm text-gray-700 leading-relaxed">
                  <span className="text-emerald-600 shrink-0">•</span>
                  {s}
                </li>
              ))}
            </ul>
          </section>
          <section className="bg-white rounded-2xl border border-[#D1C5B4] shadow-sm p-6">
            <h2 className="font-extrabold text-gray-900 mb-4 flex items-center gap-2">
              <AlertCircle size={18} className="text-amber-600" /> Room to Improve
            </h2>
            <ul className="flex flex-col gap-2.5">
              {ev.improvements.map((s, i) => (
                <li key={i} className="flex gap-2 text-sm text-gray-700 leading-relaxed">
                  <span className="text-amber-600 shrink-0">•</span>
                  {s}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Submission text */}
        <section className="bg-white rounded-2xl border border-[#D1C5B4] shadow-sm p-6 md:p-8">
          <h2 className="text-xl font-extrabold text-gray-900 mb-1">Submission</h2>
          <p className="text-sm text-gray-500 mb-4">The full response as submitted by {proof.graduate_name}.</p>
          <div className="bg-gray-50 border border-gray-100 rounded-lg p-4 md:p-5">
            <pre className="whitespace-pre-wrap text-sm text-gray-800 leading-relaxed font-mono">
              {proof.submission}
            </pre>
          </div>
          {proof.submission_links && proof.submission_links.length > 0 && (
            <div className="mt-5">
              <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Reference Links</div>
              <ul className="flex flex-col gap-1.5">
                {proof.submission_links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-sm text-primary hover:text-[#5a4000] break-all flex items-center gap-1.5"
                    >
                      <ExternalLink size={13} className="shrink-0" /> {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* Trust footer */}
        <section className="bg-[#FFDF9C]/20 rounded-2xl border border-[#D1C5B4] p-6 md:p-8">
          <div className="flex items-start gap-3">
            <Sparkles size={18} className="text-[#7A5900] shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-[#1F1B13] mb-1">About this Badge</h3>
              <p className="text-sm text-[#4F4639] leading-relaxed">
                This Badge was issued by Graduates Hub after {proof.graduate_name} completed the "{proof.task_title}" task. The submission was evaluated by AI against the published rubric on the task page. We disclose AI grading openly because honest verification matters more than the appearance of human review.
              </p>
              {task && (
                <Link
                  href={`/portfolio/${task.categoryId}/${task.topicId}/${task.level}`}
                  className="text-sm font-bold text-primary hover:text-[#5a4000] mt-3 inline-flex items-center gap-1"
                >
                  See the task rubric <ExternalLink size={13} />
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-white rounded-2xl border border-[#D1C5B4] shadow-sm p-6 md:p-8 text-center">
          <h3 className="text-lg font-extrabold text-gray-900 mb-2">Want your own Badge?</h3>
          <p className="text-sm text-gray-500 mb-4">
            Browse tasks across Web Development, Software Development, Data, Marketing, Finance, and Design.
          </p>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-primary hover:bg-[#5a4000] text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-colors"
          >
            Browse Categories
          </Link>
        </section>
      </main>
    </div>
  );
}
