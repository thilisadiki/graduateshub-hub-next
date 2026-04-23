'use client';
import { useState } from 'react';
import { X, FileText, Loader2, CheckCircle, AlertTriangle, LightbulbIcon, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import CourseCard from '@/components/course/CourseCard';
import type { Course } from '@/types';

interface Improvement {
  section: string;
  issue: string;
  suggestion: string;
}

interface CourseWithSkill extends Course {
  targetSkill?: string;
}

interface CVReviewResult {
  overallScore: number;
  scoreLabel: string;
  summary: string;
  strengths: string[];
  improvements: Improvement[];
  missingSections: string[];
  courses: CourseWithSkill[];
}

function ScoreRing({ score }: { score: number }) {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  const color = score >= 75 ? '#10b981' : score >= 50 ? '#f59e0b' : '#ef4444';

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width="96" height="96" className="-rotate-90">
        <circle cx="48" cy="48" r={radius} stroke="#e5e7eb" strokeWidth="8" fill="none" />
        <circle
          cx="48" cy="48" r={radius}
          stroke={color} strokeWidth="8" fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 0.8s ease' }}
        />
      </svg>
      <span className="absolute text-xl font-black text-gray-900">{score}</span>
    </div>
  );
}

function ImprovementCard({ item, index }: { item: Improvement; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-xl border border-amber-100 overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-4 text-left gap-3"
        onClick={() => setOpen(o => !o)}
      >
        <div className="flex items-center gap-3 min-w-0">
          <span className="shrink-0 w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-xs font-black flex items-center justify-center">
            {index + 1}
          </span>
          <span className="font-bold text-gray-800 text-sm truncate">{item.section}</span>
        </div>
        {open ? <ChevronUp size={16} className="text-gray-400 shrink-0" /> : <ChevronDown size={16} className="text-gray-400 shrink-0" />}
      </button>
      {open && (
        <div className="px-4 pb-4 flex flex-col gap-2 border-t border-amber-50">
          <p className="text-sm text-gray-600 mt-3"><span className="font-semibold text-gray-700">Issue:</span> {item.issue}</p>
          <div className="flex items-start gap-2 bg-amber-50 rounded-lg p-3">
            <LightbulbIcon size={14} className="text-amber-600 mt-0.5 shrink-0" />
            <p className="text-sm text-amber-900"><span className="font-semibold">Fix:</span> {item.suggestion}</p>
          </div>
        </div>
      )}
    </div>
  );
}

const QUICK_ROLES = ['Software Developer', 'Data Analyst', 'Marketing Manager', 'Accountant'];

export default function CVReviewModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [cvText, setCvText] = useState('');
  const [targetRole, setTargetRole] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<CVReviewResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cvText.trim() || cvText.trim().length < 50) return;

    setIsLoading(true);
    setError(null);
    setHasSearched(true);
    setResult(null);

    try {
      const res = await fetch('/api/cv-review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cvText, targetRole }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to review CV.');
      setResult(data);
    } catch (err: any) {
      setError(err.message || 'Failed to review CV. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const scoreColor = result
    ? result.overallScore >= 75
      ? 'text-emerald-700'
      : result.overallScore >= 50
      ? 'text-amber-700'
      : 'text-red-700'
    : '';

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden" onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div className="bg-gradient-to-r from-violet-600 to-purple-600 p-6 flex justify-between items-start text-white relative overflow-hidden shrink-0">
          <div className="absolute top-0 right-0 p-4 opacity-10"><FileText size={100} /></div>
          <div className="relative z-10 w-full">
            <h2 className="text-2xl font-black mb-2 flex items-center gap-2">
              <FileText size={24} className="text-yellow-300" /> CV Reviewer
            </h2>
            <p className="text-violet-100 font-medium">Paste your CV below and get instant AI feedback - strengths, gaps, and how to fix them.</p>
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
              <div>
                <label htmlFor="cv-target-role" className="font-bold text-gray-700 text-sm tracking-wide uppercase block mb-1.5">
                  Target Role <span className="text-gray-400 font-normal normal-case">(optional - improves accuracy)</span>
                </label>
                <input
                  id="cv-target-role"
                  type="text"
                  value={targetRole}
                  onChange={e => setTargetRole(e.target.value)}
                  placeholder="e.g., Data Analyst, Software Developer, Marketing Manager"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-shadow text-gray-800"
                />
                {!hasSearched && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {QUICK_ROLES.map(r => (
                      <button
                        type="button"
                        key={r}
                        onClick={() => setTargetRole(r)}
                        className="text-xs bg-violet-50 hover:bg-violet-100 text-violet-700 px-3 py-1 rounded-full transition-colors border border-violet-100"
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="cv-text" className="font-bold text-gray-700 text-sm tracking-wide uppercase block mb-1.5">
                  Your CV / Resume Text
                </label>
                <textarea
                  id="cv-text"
                  value={cvText}
                  onChange={e => setCvText(e.target.value)}
                  placeholder="Paste the full text of your CV here. Include your work experience, education, skills, and any other sections..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-shadow resize-none h-44 text-gray-800 text-sm"
                />
                <p className="text-xs text-gray-400 mt-1">{cvText.length} characters - minimum 50 required</p>
              </div>

              <button
                type="submit"
                disabled={isLoading || cvText.trim().length < 50}
                className="self-end bg-violet-600 hover:bg-violet-700 disabled:bg-violet-300 text-white px-6 py-2.5 rounded-lg font-bold transition-colors flex items-center gap-2 shadow-md"
              >
                {isLoading
                  ? <><Loader2 size={18} className="animate-spin" /> Reviewing...</>
                  : <><FileText size={18} /> Review My CV</>
                }
              </button>
            </form>
          </div>

          {/* Results */}
          {hasSearched && (
            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-bold text-gray-800 border-b border-gray-200 pb-2">Your CV Review</h3>

              {isLoading && (
                <div className="flex flex-col items-center justify-center py-16 text-gray-400">
                  <Loader2 size={40} className="animate-spin text-violet-600 mb-4" />
                  <p className="font-medium animate-pulse">Reading your CV and generating feedback...</p>
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

                  {/* Score + summary */}
                  <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col sm:flex-row items-center gap-6">
                    <div className="flex flex-col items-center shrink-0">
                      <ScoreRing score={result.overallScore} />
                      <span className={`text-xs font-bold mt-1 ${scoreColor}`}>{result.scoreLabel}</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg mb-1">Overall Assessment</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{result.summary}</p>
                    </div>
                  </div>

                  {/* Strengths */}
                  {result.strengths.length > 0 && (
                    <div className="bg-white rounded-xl border border-green-100 p-5">
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <CheckCircle size={18} className="text-green-500" /> What's Working
                      </h4>
                      <ul className="flex flex-col gap-2">
                        {result.strengths.map((s, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle size={14} className="text-green-500 mt-0.5 shrink-0" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Improvements */}
                  {result.improvements.length > 0 && (
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <AlertTriangle size={18} className="text-amber-500" /> What to Improve
                      </h4>
                      <div className="flex flex-col gap-2">
                        {result.improvements.map((item, i) => (
                          <ImprovementCard key={i} item={item} index={i} />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Missing sections */}
                  {result.missingSections.length > 0 && (
                    <div className="bg-white rounded-xl border border-red-100 p-5">
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <BookOpen size={18} className="text-red-400" /> Missing Sections
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {result.missingSections.map((s, i) => (
                          <span key={i} className="text-sm bg-red-50 text-red-700 border border-red-200 px-3 py-1 rounded-full font-medium">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Recommended courses */}
                  {result.courses.length > 0 && (
                    <div>
                      <h4 className="font-bold text-gray-900 mb-4">Courses to Strengthen Your CV</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {result.courses.map(course => (
                          <div key={course.id} className="flex flex-col gap-1">
                            {course.targetSkill && (
                              <span className="text-xs font-bold text-violet-700 bg-violet-50 border border-violet-100 px-2.5 py-1 rounded-full self-start">
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
