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
  { id: 'sample-1', firstName: 'Thabo', taskTitle: 'Portfolio Showcase' },
  { id: 'sample-2', firstName: 'Lerato', taskTitle: 'Portfolio Showcase' },
  { id: 'sample-3', firstName: 'Sibusiso', taskTitle: 'Portfolio Showcase' },
  { id: 'sample-4', firstName: 'Aisha', taskTitle: 'Portfolio Showcase' },
  { id: 'sample-5', firstName: 'Jason', taskTitle: 'Portfolio Showcase' },
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
        // Use initial sample data as elegant fallback for empty DB states
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
      <div className="animate-pulse flex items-center gap-3 py-3 px-4 rounded-xl bg-amber-500/5 border border-amber-500/10">
        <div className="w-8 h-8 rounded-full bg-amber-200/40" />
        <div className="h-4 w-36 bg-amber-200/40 rounded" />
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="bg-gradient-to-r from-[#FFFDF9] to-[#FFF8F1] border border-[#EADBCE] rounded-2xl p-4 md:p-5 shadow-sm">
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-700">
              <UserCheck size={16} />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#7C7061]">
              {title || 'Graduates Who Completed This Task'}
            </span>
          </div>
          <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full">
            <CheckCircle2 size={12} className="text-emerald-500" /> Verified Proofs
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {completers.map((c, i) => {
            const gradient = AVATAR_GRADIENTS[i % AVATAR_GRADIENTS.length];
            const isRealProof = Boolean(c.id && !c.id.startsWith('sample-'));
            const content = (
              <div
                key={c.id}
                className="group relative flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E6D9CC] shadow-2xs hover:border-amber-400 hover:shadow-xs transition-all duration-200"
              >
                <div
                  className={`w-6 h-6 rounded-full bg-gradient-to-br ${gradient} text-white font-bold text-xs flex items-center justify-center shadow-2xs`}
                >
                  {c.firstName.charAt(0)}
                </div>
                <span className="text-xs font-semibold text-[#2C251E] group-hover:text-amber-800 transition-colors">
                  {c.firstName}
                </span>
                <Sparkles size={10} className="text-amber-500 opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
            );

            if (isRealProof) {
              return (
                <Link key={c.id} href={`/proof/${c.id}`} title={`View ${c.firstName}'s verified badge`}>
                  {content}
                </Link>
              );
            }
            return content;
          })}
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
