'use client';
import { useState } from 'react';
import { X, MessageSquare, Loader2, ChevronDown, ChevronUp, Lightbulb, Star, AlertTriangle, BookOpen, ArrowRight } from 'lucide-react';
import CourseCard from '@/components/course/CourseCard';
import type { Course } from '@/types';

interface InterviewQuestion {
  category: 'Behavioural' | 'Technical' | 'Situational';
  question: string;
  why: string;
  sampleAnswer: string;
  redFlag?: string;
}

interface CourseWithSkill extends Course {
  targetSkill?: string;
}

interface PrepResult {
  jobTitle: string;
  experienceLevel: string;
  summary: string;
  keySkills: string[];
  prepTips: string[];
  questions: InterviewQuestion[];
  courses: CourseWithSkill[];
}

const CATEGORY_STYLES: Record<string, { bg: string; text: string; border: string }> = {
  Behavioural: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
  Technical:   { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200' },
  Situational: { bg: 'bg-violet-50', text: 'text-violet-700', border: 'border-violet-200' },
};

function QuestionCard({ q, index }: { q: InterviewQuestion; index: number }) {
  const [open, setOpen] = useState(false);
  const style = CATEGORY_STYLES[q.category] ?? CATEGORY_STYLES['Behavioural'];

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      <button
        className="w-full flex items-start justify-between p-5 text-left gap-4"
        onClick={() => setOpen(o => !o)}
      >
        <div className="flex items-start gap-3 min-w-0">
          <span className="shrink-0 w-7 h-7 rounded-full bg-orange-100 text-orange-700 text-sm font-black flex items-center justify-center mt-0.5">
            {index + 1}
          </span>
          <div className="min-w-0">
            <span className={`inline-block text-xs font-bold px-2 py-0.5 rounded-full mb-2 ${style.bg} ${style.text} border ${style.border}`}>
              {q.category}
            </span>
            <p className="font-semibold text-gray-800 text-sm leading-snug">{q.question}</p>
          </div>
        </div>
        <span className="shrink-0 mt-1 text-gray-400">
          {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </span>
      </button>

      {open && (
        <div className="px-5 pb-5 flex flex-col gap-3 border-t border-gray-50">
          {/* Why they ask */}
          <div className="flex items-start gap-2 bg-blue-50 rounded-lg p-3 mt-3">
            <Lightbulb size={14} className="text-blue-500 shrink-0 mt-0.5" />
            <p className="text-sm text-blue-900"><span className="font-semibold">Why they ask:</span> {q.why}</p>
          </div>

          {/* Sample answer */}
          <div className="bg-green-50 rounded-lg p-3">
            <p className="text-xs font-bold text-green-700 uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
              <Star size={12} /> Strong Answer
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">{q.sampleAnswer}</p>
          </div>

          {/* Red flag */}
          {q.redFlag && (
            <div className="flex items-start gap-2 bg-red-50 rounded-lg p-3">
              <AlertTriangle size={14} className="text-red-500 shrink-0 mt-0.5" />
              <p className="text-sm text-red-800"><span className="font-semibold">Avoid:</span> {q.redFlag}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

const QUICK_ROLES = ['Software Developer', 'Data Analyst', 'Marketing Manager', 'Accountant', 'HR Officer'];
const EXPERIENCE_LEVELS = ['Entry Level', 'Mid Level', 'Senior'];

export default function InterviewPrepModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [jobTitle, setJobTitle] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('Mid Level');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<PrepResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!jobTitle.trim()) return;

    setIsLoading(true);
    setError(null);
    setHasSearched(true);
    setResult(null);

    try {
      const res = await fetch('/api/interview-prep', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ jobTitle, experienceLevel }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to generate interview prep.');
      setResult(data);
    } catch (err: any) {
      setError(err.message || 'Failed to generate interview prep. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden" onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-6 flex justify-between items-start text-white relative overflow-hidden shrink-0">
          <div className="absolute top-0 right-0 p-4 opacity-10"><MessageSquare size={100} /></div>
          <div className="relative z-10 w-full">
            <h2 className="text-2xl font-black mb-2 flex items-center gap-2">
              <MessageSquare size={24} className="text-white" /> Interview Prep
            </h2>
            <p className="text-orange-100 font-medium">Enter a job title and we'll generate real interview questions with model answers — so you walk in confident.</p>
            <button onClick={onClose} className="absolute top-0 right-0 mt-1 mr-1 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-gray-50 flex flex-col gap-8">

          {/* Input */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm shrink-0">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label htmlFor="interview-job-title" className="font-bold text-gray-700 text-sm tracking-wide uppercase block mb-1.5">Job Title</label>
                  <input
                    id="interview-job-title"
                    type="text"
                    value={jobTitle}
                    onChange={e => setJobTitle(e.target.value)}
                    placeholder="e.g., Data Analyst, Software Developer"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-shadow text-gray-800"
                  />
                </div>
                <div>
                  <label htmlFor="experience-level" className="font-bold text-gray-700 text-sm tracking-wide uppercase block mb-1.5">Level</label>
                  <select
                    id="experience-level"
                    value={experienceLevel}
                    onChange={e => setExperienceLevel(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-shadow text-gray-800"
                  >
                    {EXPERIENCE_LEVELS.map(l => <option key={l}>{l}</option>)}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading || !jobTitle.trim()}
                className="self-end bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white px-6 py-2.5 rounded-lg font-bold transition-colors flex items-center gap-2 shadow-md"
              >
                {isLoading
                  ? <><Loader2 size={18} className="animate-spin" /> Generating...</>
                  : <><MessageSquare size={18} /> Generate Questions</>
                }
              </button>
            </form>

            {!hasSearched && (
              <div className="mt-5">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">Popular roles:</span>
                <div className="flex flex-wrap gap-2">
                  {QUICK_ROLES.map(r => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setJobTitle(r)}
                      className="text-sm bg-orange-50 hover:bg-orange-100 text-orange-700 px-3 py-1.5 rounded-full transition-colors border border-orange-100"
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Results */}
          {hasSearched && (
            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-bold text-gray-800 border-b border-gray-200 pb-2">Your Interview Guide</h3>

              {isLoading && (
                <div className="flex flex-col items-center justify-center py-16 text-gray-400">
                  <Loader2 size={40} className="animate-spin text-orange-500 mb-4" />
                  <p className="font-medium animate-pulse">Generating questions for {jobTitle}...</p>
                </div>
              )}

              {error && (
                <div className="bg-red-50 text-red-700 p-6 rounded-xl border border-red-100 flex flex-col items-center text-center">
                  <X size={28} className="text-red-500 mb-2" />
                  <p className="font-bold">{error}</p>
                </div>
              )}

              {!isLoading && !error && result && (
                <div className="flex flex-col gap-6 pb-8">

                  {/* Summary */}
                  <div className="bg-orange-50 border border-orange-100 rounded-xl p-5">
                    <p className="font-bold text-orange-900 text-lg mb-1">
                      {result.jobTitle}
                      <span className="ml-2 text-sm font-semibold text-orange-600 bg-orange-100 px-2 py-0.5 rounded-full">{result.experienceLevel}</span>
                    </p>
                    <p className="text-orange-800 text-sm leading-relaxed">{result.summary}</p>
                  </div>

                  {/* Key skills */}
                  {result.keySkills.length > 0 && (
                    <div className="bg-white rounded-xl border border-gray-100 p-5">
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <Star size={16} className="text-amber-400" /> Key Skills to Highlight
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {result.keySkills.map((skill, i) => (
                          <span key={i} className="text-sm bg-amber-50 text-amber-800 border border-amber-200 px-3 py-1 rounded-full font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Prep tips */}
                  {result.prepTips.length > 0 && (
                    <div className="bg-white rounded-xl border border-gray-100 p-5">
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <Lightbulb size={16} className="text-blue-500" /> Preparation Tips
                      </h4>
                      <ul className="flex flex-col gap-2">
                        {result.prepTips.map((tip, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                            <ArrowRight size={14} className="text-orange-400 mt-0.5 shrink-0" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Questions */}
                  {result.questions.length > 0 && (
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <MessageSquare size={16} className="text-orange-500" /> Interview Questions
                        <span className="text-xs font-normal text-gray-400 ml-1">— tap each to reveal the answer</span>
                      </h4>
                      <div className="flex flex-col gap-3">
                        {result.questions.map((q, i) => (
                          <QuestionCard key={i} q={q} index={i} />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Courses */}
                  {result.courses.length > 0 && (
                    <div>
                      <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <BookOpen size={16} className="text-orange-500" /> Courses to Prepare You
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {result.courses.map(course => (
                          <div key={course.id} className="flex flex-col gap-1">
                            {course.targetSkill && (
                              <span className="text-xs font-bold text-orange-700 bg-orange-50 border border-orange-100 px-2.5 py-1 rounded-full self-start">
                                Builds: {course.targetSkill}
                              </span>
                            )}
                            <div onClick={onClose}>
                              <CourseCard course={course} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
