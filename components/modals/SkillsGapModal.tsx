'use client';
import { useState } from 'react';
import { X, TrendingUp, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import CourseCard from '@/components/course/CourseCard';
import type { Course } from '@/types';

interface CourseWithSkill extends Course {
  targetSkill?: string;
}

interface GapResult {
  jobTitle: string;
  summary: string;
  matchedSkills: string[];
  missingSkills: string[];
  courses: CourseWithSkill[];
}

const QUICK_PROMPTS = ['Data Analyst', 'Digital Marketing Manager', 'Software Developer', 'HR Manager'];

export default function SkillsGapModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [jobTarget, setJobTarget] = useState('');
  const [currentSkills, setCurrentSkills] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<GapResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!jobTarget.trim()) return;

    setIsLoading(true);
    setError(null);
    setHasSearched(true);
    setResult(null);

    try {
      const res = await fetch('/api/skills-gap', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ jobTarget, currentSkills }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to analyze skills gap.');
      setResult(data);
    } catch (err: any) {
      setError(err.message || 'Failed to analyze skills gap.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden" onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 flex justify-between items-start text-white relative overflow-hidden shrink-0">
          <div className="absolute top-0 right-0 p-4 opacity-10"><TrendingUp size={100} /></div>
          <div className="relative z-10 w-full">
            <h2 className="text-2xl font-black mb-2 flex items-center gap-2">
              <TrendingUp size={24} className="text-yellow-300" /> Skills Gap Analyzer
            </h2>
            <p className="text-emerald-100 font-medium">Enter your target role and current skills, we'll show you exactly what's missing and how to fill the gap.</p>
            <button onClick={onClose} className="absolute top-0 right-0 mt-1 mr-1 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-gray-50 flex flex-col gap-8">

          {/* Input */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm shrink-0">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="job-target" className="font-bold text-gray-700 text-sm tracking-wide uppercase block mb-1.5">Target Job / Role</label>
                <input
                  id="job-target"
                  type="text"
                  value={jobTarget}
                  onChange={e => setJobTarget(e.target.value)}
                  placeholder="e.g., Data Analyst, Marketing Manager, Software Developer"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-shadow text-gray-800"
                />
              </div>
              <div>
                <label htmlFor="current-skills" className="font-bold text-gray-700 text-sm tracking-wide uppercase block mb-1.5">Your Current Skills <span className="text-gray-400 font-normal normal-case">(optional)</span></label>
                <textarea
                  id="current-skills"
                  value={currentSkills}
                  onChange={e => setCurrentSkills(e.target.value)}
                  placeholder="e.g., Excel, basic accounting, customer service, some SQL..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-shadow resize-none h-24 text-gray-800"
                />
              </div>
              <button
                type="submit"
                disabled={isLoading || !jobTarget.trim()}
                className="self-end bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-300 text-white px-6 py-2.5 rounded-lg font-bold transition-colors flex items-center gap-2 shadow-md"
              >
                {isLoading ? <><Loader2 size={18} className="animate-spin" /> Analyzing...</> : <><TrendingUp size={18} /> Analyze My Gap</>}
              </button>
            </form>

            {!hasSearched && (
              <div className="mt-5">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">Try one of these:</span>
                <div className="flex flex-wrap gap-2">
                  {QUICK_PROMPTS.map(p => (
                    <button key={p} onClick={() => setJobTarget(p)} className="text-sm bg-emerald-50 hover:bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-full transition-colors border border-emerald-100">
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Results */}
          {hasSearched && (
            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-bold text-gray-800 border-b border-gray-200 pb-2">Your Gap Analysis</h3>

              {isLoading && (
                <div className="flex flex-col items-center justify-center py-16 text-gray-400">
                  <Loader2 size={40} className="animate-spin text-emerald-600 mb-4" />
                  <p className="font-medium animate-pulse">Analyzing your skills against the role...</p>
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
                  <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5">
                    <p className="font-bold text-emerald-900 text-lg mb-1">
                      Role: <span className="text-emerald-700">{result.jobTitle}</span>
                    </p>
                    <p className="text-emerald-800 text-sm leading-relaxed">{result.summary}</p>
                  </div>

                  {/* Skills comparison */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Matched */}
                    <div className="bg-white rounded-xl border border-green-100 p-5">
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <CheckCircle size={18} className="text-green-500" /> Skills You Have
                      </h4>
                      {result.matchedSkills.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                          {result.matchedSkills.map(skill => (
                            <span key={skill} className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full text-sm font-medium">
                              <CheckCircle size={12} /> {skill}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-400 text-sm">No matching skills detected.</p>
                      )}
                    </div>

                    {/* Missing */}
                    <div className="bg-white rounded-xl border border-amber-100 p-5">
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <AlertCircle size={18} className="text-amber-500" /> Skills You Need
                      </h4>
                      {result.missingSkills.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                          {result.missingSkills.map(skill => (
                            <span key={skill} className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1 rounded-full text-sm font-medium">
                              <AlertCircle size={12} /> {skill}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-400 text-sm">No skill gaps detected.</p>
                      )}
                    </div>
                  </div>

                  {/* Recommended courses */}
                  {result.courses.length > 0 && (
                    <div>
                      <h4 className="font-bold text-gray-900 mb-4">Courses to Close Your Gap</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {result.courses.map(course => (
                          <div key={course.id} className="flex flex-col gap-1">
                            {course.targetSkill && (
                              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full self-start">
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

              {!isLoading && !error && !result && (
                <div className="text-center py-12 bg-white rounded-xl border border-gray-100">
                  <p className="text-gray-500 font-medium">No results. Try a different job title.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
