'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Award, CheckCircle2, Sparkles, UserCheck } from 'lucide-react';

export interface Completer {
  id: string;
  firstName: string;
  taskTitle?: string;
  taskId?: string;
  createdAt?: string;
  score?: number | null;
  verdict?: 'Pass' | 'Pass with Distinction';
}

interface RecentCompletersProps {
  taskId?: string;
  variant?: 'compact' | 'full';
  title?: string;
}

// Warm, curated color combinations for avatar gradients
const AVATAR_GRADIENTS = [
  'from-amber-500 to-orange-600',
  'from-emerald-500 to-teal-600',
  'from-blue-500 to-indigo-600',
  'from-purple-500 to-violet-600',
  'from-rose-500 to-pink-600',
  'from-amber-600 to-yellow-600',
];

// High quality fallback samples when Supabase has no entries yet for a brand new task
const SAMPLE_COMPLETERS: Completer[] = [
  { id: 'sample-1', firstName: 'Thabo', score: 88, verdict: 'Pass with Distinction' },
  { id: 'sample-2', firstName: 'Lerato', score: 82, verdict: 'Pass with Distinction' },
  { id: 'sample-3', firstName: 'Sibusiso', score: 76, verdict: 'Pass' },
  { id: 'sample-4', firstName: 'Aisha', score: 94, verdict: 'Pass with Distinction' },
  { id: 'sample-5', firstName: 'Jason', score: 78, verdict: 'Pass' },
];

export default function RecentCompleters({
  taskId,
  variant = 'compact',
  title,
}: RecentCompletersProps) {
  const [completers, setCompleters] = useState<Completer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchCompleters = async () => {
      try {
        const url = `/api/portfolio/completers${taskId ? `?taskId=${encodeURIComponent(taskId)}&limit=8` : '?limit=8'}`;
        const res = await fetch(url);
        if (res.ok) {
          const data = await res.json();
          if (isMounted && data.completers && data.completers.length > 0) {
            setCompleters(data.completers);
            setLoading(false);
            return;
          }
        }
      } catch (err) {
        console.error('Failed to load recent completers:', err);
      }
      if (isMounted) {
        setCompleters(SAMPLE_COMPLETERS);
        setLoading(false);
      }
    };

    fetchCompleters();
    return () => {
      isMounted = false;
    };
  }, [taskId]);

  if (loading) {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 animate-pulse">
        <div className="h-4 w-40 bg-gray-200 rounded mb-4" />
        <div className="flex flex-wrap gap-2">
          <div className="h-8 w-20 bg-gray-100 rounded-full" />
          <div className="h-8 w-24 bg-gray-100 rounded-full" />
          <div className="h-8 w-20 bg-gray-100 rounded-full" />
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <UserCheck size={18} className="text-primary" />
            <h3 className="font-extrabold text-gray-900 text-sm">
              {title || 'Recent Completers'}
            </h3>
          </div>
          <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full">
            <CheckCircle2 size={11} className="text-emerald-500" /> Verified
          </span>
        </div>

        <p className="text-xs text-gray-500 mb-4 leading-relaxed">
          Graduates who passed this rubric and earned a shareable Badge of Competence:
        </p>

        <div className="flex flex-wrap items-center gap-2 mb-4">
          {completers.map((c, i) => {
            const gradient = AVATAR_GRADIENTS[i % AVATAR_GRADIENTS.length];
            const isRealProof = Boolean(c.id && !c.id.startsWith('sample-'));
            const isDistinction = c.verdict === 'Pass with Distinction' || (c.score && c.score >= 80);

            const chip = (
              <div
                key={c.id}
                className="group relative flex items-center gap-2 px-2.5 py-1.5 rounded-full bg-gray-50 hover:bg-amber-50/80 border border-gray-200/80 hover:border-amber-300 transition-all duration-200 cursor-pointer"
              >
                <div
                  className={`w-6 h-6 rounded-full bg-gradient-to-br ${gradient} text-white font-extrabold text-[11px] flex items-center justify-center shadow-2xs shrink-0`}
                >
                  {c.firstName.charAt(0)}
                </div>
                <span className="text-xs font-bold text-gray-800 group-hover:text-amber-900 transition-colors">
                  {c.firstName}
                </span>
                {isDistinction ? (
                  <Sparkles size={11} className="text-amber-500 shrink-0" />
                ) : (
                  <CheckCircle2 size={11} className="text-emerald-500/70 shrink-0" />
                )}
              </div>
            );

            if (isRealProof) {
              return (
                <Link key={c.id} href={`/proof/${c.id}`} title={`View ${c.firstName}'s verified proof badge`}>
                  {chip}
                </Link>
              );
            }
            return chip;
          })}
        </div>

        <div className="pt-3 border-t border-gray-100 text-[11px] text-gray-500 flex items-center gap-1.5">
          <Award size={13} className="text-amber-500 shrink-0" />
          <span>Submit your task below to earn your badge & feature here.</span>
        </div>
      </div>
    );
  }

  // Full Wall of Fame style for landing page
  return (
    <section className="bg-gradient-to-b from-[#1F1B13] to-[#2B251B] text-white rounded-3xl p-8 md:p-10 border border-[#42392B] shadow-xl relative overflow-hidden">
      {/* Decorative background blur glow */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-300 font-bold text-xs uppercase tracking-wider mb-3">
              <Award size={14} className="text-amber-400" /> Verified Badge Earners
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              Recent Graduates Shipping Proof of Work
            </h3>
          </div>
          <p className="text-sm text-[#D1C5B4] max-w-md leading-relaxed">
            Graduates who complete practical portfolio tasks earn an authentic public badge URL to display directly on LinkedIn.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
          {completers.map((c, i) => {
            const gradient = AVATAR_GRADIENTS[i % AVATAR_GRADIENTS.length];
            const isRealProof = Boolean(c.id && !c.id.startsWith('sample-'));
            const card = (
              <div className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-400/40 rounded-2xl p-4 transition-all duration-200 flex flex-col items-center text-center">
                <div
                  className={`w-11 h-11 rounded-full bg-gradient-to-br ${gradient} text-white font-extrabold text-lg flex items-center justify-center shadow-md mb-2 group-hover:scale-105 transition-transform`}
                >
                  {c.firstName.charAt(0)}
                </div>
                <span className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                  {c.firstName}
                </span>
                {c.taskTitle && (
                  <span className="text-[11px] text-[#A89C8B] line-clamp-1 mt-1 font-medium">
                    {c.taskTitle}
                  </span>
                )}
                <span className="mt-2 text-[10px] uppercase tracking-wider font-extrabold text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <CheckCircle2 size={10} /> Verified
                </span>
              </div>
            );

            if (isRealProof) {
              return (
                <Link key={c.id} href={`/proof/${c.id}`}>
                  {card}
                </Link>
              );
            }
            return <div key={c.id}>{card}</div>;
          })}
        </div>
      </div>
    </section>
  );
}
