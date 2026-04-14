'use client';
import { useState } from 'react';
import { Sparkles, Map, TrendingUp, FileText, MessageSquare, ScanText, Brain, ArrowRight } from 'lucide-react';
import AIRecommendationModal from '@/components/modals/AIRecommendationModal';
import LearningPathModal from '@/components/modals/LearningPathModal';
import SkillsGapModal from '@/components/modals/SkillsGapModal';
import CVReviewModal from '@/components/modals/CVReviewModal';
import InterviewPrepModal from '@/components/modals/InterviewPrepModal';
import JDDecoderModal from '@/components/modals/JDDecoderModal';
import CareerQuizModal from '@/components/modals/CareerQuizModal';

const tools = [
  {
    key: 'recommend',
    icon: Sparkles,
    gradient: 'from-indigo-500 to-blue-500',
    iconBg: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
    badgeBg: 'bg-indigo-100 text-indigo-700',
    btnClass: 'bg-indigo-600 hover:bg-indigo-700',
    label: 'Course Recommender',
    badge: 'AI-Powered',
    description: 'Not sure which course to take? Describe your goals in plain English and get a personalised shortlist of free courses matched to you in seconds.',
    bullets: ['Matched to your specific goals', 'Pulls from 128+ free courses', 'Includes external Alison courses'],
    cta: 'Get Recommendations',
  },
  {
    key: 'path',
    icon: Map,
    gradient: 'from-blue-500 to-cyan-500',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    badgeBg: 'bg-blue-100 text-blue-700',
    btnClass: 'bg-blue-600 hover:bg-blue-700',
    label: 'Learning Path Generator',
    badge: 'AI-Powered',
    description: 'Enter your career goal and get a structured, phase-by-phase learning roadmap — Foundation through to Specialisation — with course recommendations for each step.',
    bullets: ['3–4 structured phases', 'One goal, a complete roadmap', 'Local + Alison course mix'],
    cta: 'Build My Roadmap',
  },
  {
    key: 'skills',
    icon: TrendingUp,
    gradient: 'from-emerald-500 to-teal-500',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    badgeBg: 'bg-emerald-100 text-emerald-700',
    btnClass: 'bg-emerald-600 hover:bg-emerald-700',
    label: 'Skills Gap Analyser',
    badge: 'AI-Powered',
    description: 'Enter your target job title and current skills. We identify exactly which skills you already have, which are missing, and recommend courses to close the gap.',
    bullets: ['Skills you have vs. skills you need', 'Targeted course recommendations', 'Role-specific analysis'],
    cta: 'Analyse My Skills',
  },
  {
    key: 'cv',
    icon: FileText,
    gradient: 'from-violet-500 to-purple-600',
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-600',
    badgeBg: 'bg-violet-100 text-violet-700',
    btnClass: 'bg-violet-600 hover:bg-violet-700',
    label: 'CV Reviewer',
    badge: 'AI-Powered',
    description: 'Paste your CV and get an instant, honest review. We score it out of 100, highlight what\'s working, flag missing sections, and give you specific fixes.',
    bullets: ['Score out of 100 with label', 'Per-section improvement suggestions', 'Courses to strengthen your CV'],
    cta: 'Review My CV',
  },
  {
    key: 'interview',
    icon: MessageSquare,
    gradient: 'from-orange-500 to-amber-500',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-600',
    badgeBg: 'bg-orange-100 text-orange-700',
    btnClass: 'bg-orange-500 hover:bg-orange-600',
    label: 'Interview Prep',
    badge: 'AI-Powered',
    description: 'Enter a job title and experience level. Get 6–8 real interview questions — behavioural, technical, and situational — each with a model answer and red flags to avoid.',
    bullets: ['Questions by type and difficulty', 'Model STAR-method answers', 'Red flags for each question'],
    cta: 'Prep for Interview',
  },
  {
    key: 'jd',
    icon: ScanText,
    gradient: 'from-cyan-500 to-teal-500',
    iconBg: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
    badgeBg: 'bg-cyan-100 text-cyan-700',
    btnClass: 'bg-cyan-600 hover:bg-cyan-700',
    label: 'JD Decoder',
    badge: 'AI-Powered',
    description: 'Paste any job posting and we decode it for you — required vs. nice-to-have skills, plain-English responsibilities, red flags, and courses to meet the requirements.',
    bullets: ['Required vs. bonus skills', 'Red flag detection', 'Plain-English responsibility summary'],
    cta: 'Decode a Job Post',
  },
  {
    key: 'quiz',
    icon: Brain,
    gradient: 'from-rose-500 to-pink-500',
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-600',
    badgeBg: 'bg-rose-100 text-rose-700',
    btnClass: 'bg-rose-600 hover:bg-rose-700',
    label: 'Career Quiz',
    badge: 'No AI — Instant',
    description: 'Answer 6 quick questions about your interests and strengths. We match you to one of 6 career paths and show you exactly which free courses to start with.',
    bullets: ['6 questions, under 2 minutes', 'Matches to a career category', 'Starter courses included'],
    cta: 'Find My Career Path',
  },
];

export default function ToolsGrid() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {tools.map(({ key, icon: Icon, gradient, iconBg, iconColor, badgeBg, btnClass, label, badge, description, bullets, cta }) => (
          <div
            key={key}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-200 flex flex-col overflow-hidden group"
          >
            {/* Card top accent */}
            <div className={`h-1.5 bg-gradient-to-r ${gradient}`} />

            <div className="p-6 flex flex-col flex-1 gap-4">
              {/* Icon + badge */}
              <div className="flex items-start justify-between">
                <div className={`${iconBg} p-3 rounded-xl`}>
                  <Icon size={24} className={iconColor} />
                </div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${badgeBg}`}>{badge}</span>
              </div>

              {/* Label + description */}
              <div>
                <h2 className="text-lg font-black text-gray-900 mb-2">{label}</h2>
                <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
              </div>

              {/* Bullets */}
              <ul className="flex flex-col gap-1.5 flex-1">
                {bullets.map(b => (
                  <li key={b} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className={`w-4 h-4 rounded-full ${iconBg} ${iconColor} flex items-center justify-center text-[10px] font-black shrink-0`}>✓</span>
                    {b}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => setOpen(key)}
                className={`mt-2 w-full ${btnClass} text-white py-2.5 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 text-sm shadow-sm`}
              >
                {cta} <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <AIRecommendationModal isOpen={open === 'recommend'} onClose={() => setOpen(null)} />
      <LearningPathModal     isOpen={open === 'path'}      onClose={() => setOpen(null)} />
      <SkillsGapModal        isOpen={open === 'skills'}    onClose={() => setOpen(null)} />
      <CVReviewModal         isOpen={open === 'cv'}        onClose={() => setOpen(null)} />
      <InterviewPrepModal    isOpen={open === 'interview'} onClose={() => setOpen(null)} />
      <JDDecoderModal        isOpen={open === 'jd'}        onClose={() => setOpen(null)} />
      <CareerQuizModal       isOpen={open === 'quiz'}      onClose={() => setOpen(null)} />
    </>
  );
}
