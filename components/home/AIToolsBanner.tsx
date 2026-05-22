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
    // Citrus: warm amber card
    iconColor: 'text-[#FFDF9C]',
    bgColor: 'bg-[#7A5900]/15 hover:bg-[#7A5900]/25',
    borderColor: 'border-[#FFDF9C]/25',
    label: 'Career Quiz',
    description: 'Not sure where to start? Answer 6 quick questions and we will match you to the right career path and courses.',
    cta: 'Find My Path',
  },
  {
    key: 'skills',
    icon: TrendingUp,
    // Citrus: tertiary green card
    iconColor: 'text-[#CCECC8]',
    bgColor: 'bg-[#4B6649]/15 hover:bg-[#4B6649]/25',
    borderColor: 'border-[#CCECC8]/25',
    label: 'Skills Gap Analyser',
    description: 'Enter your target job title and discover exactly which skills you need to get there.',
    cta: 'Analyse My Skills',
  },
  {
    key: 'recommend',
    icon: Sparkles,
    // Citrus: secondary warm card
    iconColor: 'text-[#F5E0BB]',
    bgColor: 'bg-[#6C5D3F]/15 hover:bg-[#6C5D3F]/25',
    borderColor: 'border-[#F5E0BB]/25',
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
      <section className="rounded-2xl p-8 md:p-12 overflow-hidden relative" style={{ background: '#1F1B13' }}>
        {/* Citrus glow orbs */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 50%, #7A5900 0%, transparent 50%), radial-gradient(circle at 80% 20%, #4B6649 0%, transparent 40%)',
          }}
        />

        <div className="relative z-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#7A5900]/20 border border-[#FFDF9C]/25 text-[#FFDF9C] font-bold text-xs uppercase tracking-wider mb-4">
              <Sparkles size={13} className="text-[#FFDF9C]" />
              AI-Powered Tools
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Let AI guide your learning
            </h2>
            <p className="text-[#D1C5B4] mt-3 max-w-xl mx-auto text-lg">
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
                <p className="text-[#D1C5B4] text-sm leading-relaxed mb-5">{description}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-white/70 group-hover:text-white transition-colors">
                  {cta} <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </span>
              </button>
            ))}
          </div>

          <div className="text-center mt-6">
            <Link
              href="/tools"
              className="inline-flex items-center gap-1.5 text-sm text-[#D1C5B4] hover:text-white transition-colors font-medium"
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
