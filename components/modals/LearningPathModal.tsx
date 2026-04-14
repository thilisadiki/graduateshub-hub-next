'use client';
import { useState } from 'react';
import { X, Map, Loader2, CheckCircle } from 'lucide-react';
import CourseCard from '@/components/course/CourseCard';
import type { Course } from '@/types';

interface Phase {
  phase: number;
  title: string;
  goal: string;
  courses: Course[];
}

const QUICK_PROMPTS = [
  'Become a Data Scientist',
  'Start a career in Digital Marketing',
  'Get into Cybersecurity',
  'Build a career in Project Management',
];

const PHASE_COLORS = [
  { bg: 'bg-blue-600', light: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
  { bg: 'bg-indigo-600', light: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200' },
  { bg: 'bg-purple-600', light: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
  { bg: 'bg-violet-600', light: 'bg-violet-50', text: 'text-violet-700', border: 'border-violet-200' },
];

export default function LearningPathModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [goal, setGoal] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [phases, setPhases] = useState<Phase[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!goal.trim()) return;

    setIsLoading(true);
    setError(null);
    setHasSearched(true);
    setPhases([]);

    try {
      const res = await fetch('/api/learning-path', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ goal }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to generate learning path.');
      setPhases(data.phases);
    } catch (err: any) {
      setError(err.message || 'Failed to generate learning path.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden" onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 to-purple-600 p-6 flex justify-between items-start text-white relative overflow-hidden shrink-0">
          <div className="absolute top-0 right-0 p-4 opacity-10"><Map size={100} /></div>
          <div className="relative z-10 w-full">
            <h2 className="text-2xl font-black mb-2 flex items-center gap-2">
              <Map size={24} className="text-yellow-300" /> Learning Path Generator
            </h2>
            <p className="text-blue-100 font-medium">Tell us your career goal and we'll build you a step-by-step course roadmap.</p>
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
              <label htmlFor="lp-goal" className="font-bold text-gray-700 text-sm tracking-wide uppercase">What career goal do you want to achieve?</label>
              <div className="relative">
                <textarea
                  id="lp-goal"
                  value={goal}
                  onChange={e => setGoal(e.target.value)}
                  placeholder="e.g., 'I want to become a Data Analyst. I know basic Excel but have no coding experience.'"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-shadow resize-none h-28 text-gray-800"
                />
                <button
                  type="submit"
                  disabled={isLoading || !goal.trim()}
                  className="absolute bottom-3 right-3 bg-blue-700 hover:bg-blue-800 disabled:bg-blue-300 text-white px-5 py-2 rounded-lg font-bold transition-colors flex items-center gap-2 shadow-md"
                >
                  {isLoading ? <><Loader2 size={18} className="animate-spin" /> Building...</> : <><Map size={18} /> Build My Path</>}
                </button>
              </div>
            </form>

            {!hasSearched && (
              <div className="mt-5">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">Try one of these:</span>
                <div className="flex flex-wrap gap-2">
                  {QUICK_PROMPTS.map(p => (
                    <button key={p} onClick={() => setGoal(p)} className="text-sm bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full transition-colors border border-blue-100">
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Results */}
          {hasSearched && (
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold text-gray-800 border-b border-gray-200 pb-2">Your Learning Roadmap</h3>

              {isLoading && (
                <div className="flex flex-col items-center justify-center py-16 text-gray-400">
                  <Loader2 size={40} className="animate-spin text-blue-600 mb-4" />
                  <p className="font-medium animate-pulse">Building your personalised roadmap...</p>
                </div>
              )}

              {error && (
                <div className="bg-red-50 text-red-700 p-6 rounded-xl border border-red-100 flex flex-col items-center text-center">
                  <X size={28} className="text-red-500 mb-2" />
                  <p className="font-bold">{error}</p>
                </div>
              )}

              {!isLoading && !error && phases.length > 0 && (
                <div className="flex flex-col gap-6 pb-8">
                  {phases.map((phase, i) => {
                    const color = PHASE_COLORS[i % PHASE_COLORS.length];
                    return (
                      <div key={phase.phase} className="relative">
                        {/* Connector line */}
                        {i < phases.length - 1 && (
                          <div className="absolute left-5 top-full w-0.5 h-6 bg-gray-200 z-10" />
                        )}
                        <div className={`rounded-xl border ${color.border} overflow-hidden`}>
                          {/* Phase header */}
                          <div className={`${color.light} px-6 py-4 flex items-start gap-4`}>
                            <div className={`${color.bg} text-white w-10 h-10 rounded-full flex items-center justify-center font-black text-lg shrink-0`}>
                              {phase.phase}
                            </div>
                            <div>
                              <h4 className={`font-black text-lg ${color.text}`}>{phase.title}</h4>
                              <p className="text-gray-600 text-sm mt-0.5 flex items-center gap-1.5">
                                <CheckCircle size={14} className="text-green-500 shrink-0" />
                                {phase.goal}
                              </p>
                            </div>
                          </div>
                          {/* Courses */}
                          {phase.courses.length > 0 && (
                            <div className="p-4 bg-white grid grid-cols-1 md:grid-cols-2 gap-4">
                              {phase.courses.map(course => (
                                <div key={course.id} onClick={onClose}>
                                  <CourseCard course={course} />
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {!isLoading && !error && phases.length === 0 && (
                <div className="text-center py-12 bg-white rounded-xl border border-gray-100">
                  <p className="text-gray-500 font-medium">Couldn't generate a path. Try rephrasing your goal.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
