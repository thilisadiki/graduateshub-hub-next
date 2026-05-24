'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Award, CheckCircle2, AlertCircle, ExternalLink, Calendar, Sparkles, Loader2, RefreshCw } from 'lucide-react';
import type { PortfolioEvaluation } from '@/types';

interface StashedProof {
  rawProofId: string;
  taskId: string;
  taskTitle: string;
  taskField: string;
  graduateName: string;
  submission: string;
  submissionLinks: string[];
  evaluation: PortfolioEvaluation;
  signature: string;
}

export default function TempProofViewer({ id }: { id: string }) {
  const router = useRouter();
  const [data, setData] = useState<StashedProof | null>(null);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [syncError, setSyncError] = useState<string | null>(null);
  const [syncSuccess, setSyncSuccess] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(`portfolio-proof-${id}`);
      if (stored) {
        setData(JSON.parse(stored) as StashedProof);
      }
    } catch (err) {
      console.error('Failed to load local proof:', err);
    } finally {
      setLoading(false);
    }
  }, [id]);

  async function handleSync() {
    if (!data || syncing) return;
    setSyncError(null);
    setSyncing(true);

    try {
      const res = await fetch('/api/portfolio/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          proofId: data.rawProofId,
          taskId: data.taskId,
          taskTitle: data.taskTitle,
          taskField: data.taskField,
          graduateName: data.graduateName,
          submission: data.submission,
          submissionLinks: data.submissionLinks,
          evaluation: data.evaluation,
          signature: data.signature,
        }),
      });

      const result = await res.json();
      if (!res.ok) {
        setSyncError(result.error || 'Database is still down. Please try again later.');
        setSyncing(false);
        return;
      }

      setSyncSuccess(true);
      // Delete stashed offline backup
      try {
        localStorage.removeItem(`portfolio-proof-${id}`);
      } catch (e) {
        console.error(e);
      }

      // Redirect to the now live public page
      setTimeout(() => {
        router.push(result.proofUrl || `/proof/${data.rawProofId}`);
      }, 1500);
    } catch {
      setSyncError('Network error. Check your connection and try again.');
      setSyncing(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFF8F1]">
        <Loader2 className="animate-spin text-primary" size={32} />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFF8F1] px-6 text-center">
        <AlertCircle className="text-amber-600 mb-4" size={48} />
        <h1 className="text-2xl font-black text-gray-900 mb-2">Submission Not Found</h1>
        <p className="text-gray-600 max-w-md mb-6">
          This local preview session doesn&apos;t exist or was already synchronized to the database.
        </p>
        <Link href="/portfolio" className="bg-primary text-white px-5 py-2.5 rounded-lg font-bold text-sm">
          Browse Portfolio Tasks
        </Link>
      </div>
    );
  }

  const ev = data.evaluation;

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

  return (
    <div className="min-h-screen bg-[#FFF8F1]">
      {/* Offline Status & Sync Alert Bar */}
      <div className="bg-amber-600 text-white border-b border-amber-700 sticky top-0 z-50 shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <AlertCircle className="shrink-0 animate-pulse text-amber-100" size={20} />
            <div className="text-sm font-semibold">
              Offline Mode — Graded submission stashed in your browser.
              <p className="text-xs text-amber-100 font-medium">This temporary preview link cannot be shared with recruiters.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
            {syncSuccess ? (
              <span className="text-sm font-bold text-emerald-200 flex items-center gap-1.5 bg-emerald-900/30 px-3 py-1.5 rounded-lg border border-emerald-500/30">
                <CheckCircle2 size={16} /> Saved! Redirecting...
              </span>
            ) : (
              <button
                onClick={handleSync}
                disabled={syncing}
                className="w-full sm:w-auto bg-white text-amber-900 hover:bg-amber-50 disabled:bg-amber-100 disabled:text-amber-700 font-bold px-4 py-2 rounded-lg text-sm flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                {syncing ? (
                  <>
                    <Loader2 size={14} className="animate-spin" /> Syncing...
                  </>
                ) : (
                  <>
                    <RefreshCw size={14} /> Sync to Cloud
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      {syncError && (
        <div className="max-w-4xl mx-auto px-6 mt-4">
          <div className="bg-rose-50 border border-rose-100 text-rose-800 p-4 rounded-xl text-sm flex items-center gap-2">
            <AlertCircle className="shrink-0 text-rose-600" size={16} />
            <span>{syncError}</span>
          </div>
        </div>
      )}

      {/* Hero */}
      <div className="bg-[#1F1B13] text-white">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-14">
          <div className="flex items-center gap-2 mb-5 text-sm text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
            <span>›</span>
            <span className="text-slate-300 font-medium">Local Badge Preview</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <Award size={18} className="text-yellow-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-yellow-400">Badge of Competence (Local Only)</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-3 leading-tight">
            {data.taskTitle}
          </h1>
          <p className="text-slate-300 text-lg">Awarded to <span className="text-white font-bold">{data.graduateName}</span></p>
          <div className="flex items-center gap-4 mt-4 text-sm text-slate-400">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} /> Locally Evaluated
            </span>
            <span className="px-2.5 py-1 rounded-full bg-[#7A5900]/20 border border-[#FFDF9C]/30 text-[#FFDF9C] text-xs font-bold uppercase tracking-wider">
              {data.taskField}
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
            <div className="text-sm font-bold text-gray-400 italic">
              Sharing is disabled in Local Mode. Please sync.
            </div>
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
          <p className="text-sm text-gray-500 mb-4">The full response as submitted by {data.graduateName}.</p>
          <div className="bg-gray-50 border border-gray-100 rounded-lg p-4 md:p-5">
            <pre className="whitespace-pre-wrap text-sm text-gray-800 leading-relaxed font-mono">
              {data.submission}
            </pre>
          </div>
          {data.submissionLinks && data.submissionLinks.length > 0 && (
            <div className="mt-5">
              <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Reference Links</div>
              <ul className="flex flex-col gap-1.5">
                {data.submissionLinks.map((link, i) => (
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
              <h3 className="font-bold text-[#1F1B13] mb-1">About Offline Mode</h3>
              <p className="text-sm text-[#4F4639] leading-relaxed">
                This grade was generated using Google Gemini against the task rubric. However, because our database failed during submission, it is cached locally in your browser. Use the **Sync to Cloud** button at the top to save it permanently when the system is online so that recruiters can access it.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
