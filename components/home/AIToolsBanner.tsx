'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Sparkles, TrendingUp, Brain, ArrowRight } from 'lucide-react';
import AIRecommendationModal from '@/components/modals/AIRecommendationModal';
import SkillsGapModal from '@/components/modals/SkillsGapModal';
import CareerQuizModal from '@/components/modals/CareerQuizModal';

const tools = [
  {
    key: 'quiz',
    icon: Brain,
    iconColor: 'text-rose-300',
    bgColor: 'bg-rose-500/20 hover:bg-rose-500/30',
    borderColor: 'border-rose-400/30',
    label: 'Career Quiz',
    description: 'Not sure where to start? Answer 6 quick questions and we will match you to the right career path and courses.',
    cta: 'Find My Path',
  },
  {
    key: 'skills',
    icon: TrendingUp,
    iconColor: 'text-emerald-300',
    bgColor: 'bg-emerald-500/20 hover:bg-emerald-500/30',
    borderColor: 'border-emerald-400/30',
    label: 'Skills Gap Analyser',
    description: 'Enter your target job title and discover exactly which skills you need to get there.',
    cta: 'Analyse My Skills',
  },
  {
    key: 'recommend',
    icon: Sparkles,
    iconColor: 'text-yellow-400',
    bgColor: 'bg-indigo-500/20 hover:bg-indigo-500/30',
    borderColor: 'border-indigo-400/30',
    label: 'Course Recommender',
    description: 'Tell us your goals and we will match you to the perfect free course in seconds.',
    cta: 'Get Recommendations',
  },
];

export default function AIToolsBanner() {
  const [isRecommendOpen, setIsRecommendOpen] = useState(false);
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const handlers: Record<string, () => void> = {
    recommend: () => setIsRecommendOpen(true),
    skills: () => setIsSkillsOpen(true),
    quiz: () => setIsQuizOpen(true),
  };

  return (
    <>
      <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-2xl p-8 md:p-12 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #6366f1 0%, transparent 50%), radial-gradient(circle at 80% 20%, #3b82f6 0%, transparent 40%)' }} />

        <div className="relative z-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 font-bold text-xs uppercase tracking-wider mb-4">
              <Sparkles size={13} className="text-yellow-400" />
              AI-Powered Tools
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Let AI guide your learning
            </h2>
            <p className="text-slate-400 mt-3 max-w-xl mx-auto text-lg">
              Not sure where to start? Our free AI tools help you find the right course, build a career roadmap, and identify your skill gaps in seconds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tools.map(({ key, icon: Icon, iconColor, bgColor, borderColor, label, description, cta }) => (
              <button
                key={key}
                onClick={handlers[key]}
                className={`${bgColor} border ${borderColor} rounded-xl p-6 text-left transition-all duration-200 hover:-translate-y-1 hover:shadow-xl group`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-white/10 p-2.5 rounded-xl">
                    <Icon size={22} className={iconColor} />
                  </div>
                  <ArrowRight size={16} className="text-white/40 group-hover:text-white/80 group-hover:translate-x-1 transition-all mt-1" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{label}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{description}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-white/70 group-hover:text-white transition-colors">
                  {cta} <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </span>
              </button>
            ))}
          </div>

          <div className="text-center mt-6">
            <Link
              href="/tools"
              className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors font-medium"
            >
              View all 7 free AI career tools <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      <AIRecommendationModal isOpen={isRecommendOpen} onClose={() => setIsRecommendOpen(false)} />
      <SkillsGapModal        isOpen={isSkillsOpen}    onClose={() => setIsSkillsOpen(false)} />
      <CareerQuizModal       isOpen={isQuizOpen}      onClose={() => setIsQuizOpen(false)} />
    </>
  );
}
