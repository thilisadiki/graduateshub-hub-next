'use client';
import { useState } from 'react';
import { X, ScanText, Loader2, CheckCircle, Star, AlertTriangle, Briefcase, GraduationCap, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import CourseCard from '@/components/course/CourseCard';
import type { Course } from '@/types';

interface CourseWithSkill extends Course {
  targetSkill?: string;
}

interface DecodeResult {
  jobTitle: string;
  company: string | null;
  summary: string;
  requiredSkills: string[];
  niceToHaveSkills: string[];
  responsibilities: string[];
  experienceRequired: string | null;
  qualifications: string[];
  redFlags: string[];
  courses: CourseWithSkill[];
}

function Section({ title, icon, children, defaultOpen = true }: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-5 py-4 text-left"
        onClick={() => setOpen(o => !o)}
      >
        <span className="font-bold text-gray-900 flex items-center gap-2">{icon}{title}</span>
        {open ? <ChevronUp size={16} className="text-gray-400" /> : <ChevronDown size={16} className="text-gray-400" />}
      </button>
      {open && <div className="px-5 pb-5 border-t border-gray-50">{children}</div>}
    </div>
  );
}

const SAMPLE_JD = `Paste a full job description here - copy it directly from LinkedIn, Indeed, or any job board.

Example:
We are looking for a Junior Data Analyst to join our team. You will work with large datasets, build dashboards, and support business decisions with data-driven insights.

Requirements:
- 1-2 years experience with Excel or Google Sheets
- Familiarity with SQL or Python (advantageous)
- Strong communication skills
- Bachelor's degree in a related field`;

export default function JDDecoderModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [jobDescription, setJobDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<DecodeResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (jobDescription.trim().length < 100) return;

    setIsLoading(true);
    setError(null);
    setHasSearched(true);
    setResult(null);

    try {
      const res = await fetch('/api/jd-decoder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ jobDescription }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to decode job description.');
      setResult(data);
    } catch (err: any) {
      setError(err.message || 'Failed to decode job description. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden" onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div className="bg-gradient-to-r from-cyan-600 to-teal-500 p-6 flex justify-between items-start text-white relative overflow-hidden shrink-0">
          <div className="absolute top-0 right-0 p-4 opacity-10"><ScanText size={100} /></div>
          <div className="relative z-10 w-full">
            <h2 className="text-2xl font-black mb-2 flex items-center gap-2">
              <ScanText size={24} className="text-white" /> Job Description Decoder
            </h2>
            <p className="text-cyan-100 font-medium">Paste any job posting - we'll extract what actually matters: required skills, responsibilities, red flags, and courses to get you ready.</p>
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
                <label htmlFor="jd-text" className="font-bold text-gray-700 text-sm tracking-wide uppercase block mb-1.5">
                  Job Description
                </label>
                <textarea
                  id="jd-text"
                  value={jobDescription}
                  onChange={e => setJobDescription(e.target.value)}
                  placeholder={SAMPLE_JD}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-shadow resize-none h-52 text-gray-800 text-sm"
                />
                <p className="text-xs text-gray-400 mt-1">{jobDescription.length} characters - minimum 100 required</p>
              </div>

              <button
                type="submit"
                disabled={isLoading || jobDescription.trim().length < 100}
                className="self-end bg-cyan-600 hover:bg-cyan-700 disabled:bg-cyan-300 text-white px-6 py-2.5 rounded-lg font-bold transition-colors flex items-center gap-2 shadow-md"
              >
                {isLoading
                  ? <><Loader2 size={18} className="animate-spin" /> Decoding...</>
                  : <><ScanText size={18} /> Decode This Job</>
                }
              </button>
            </form>
          </div>

          {/* Results */}
          {hasSearched && (
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold text-gray-800 border-b border-gray-200 pb-2">Decoded Results</h3>

              {isLoading && (
                <div className="flex flex-col items-center justify-center py-16 text-gray-400">
                  <Loader2 size={40} className="animate-spin text-cyan-600 mb-4" />
                  <p className="font-medium animate-pulse">Reading the job description...</p>
                </div>
              )}

              {error && (
                <div className="bg-red-50 text-red-700 p-6 rounded-xl border border-red-100 flex flex-col items-center text-center">
                  <X size={28} className="text-red-500 mb-2" />
                  <p className="font-bold">{error}</p>
                </div>
              )}

              {!isLoading && !error && result && (
                <div className="flex flex-col gap-4 pb-8">

                  {/* Role header */}
                  <div className="bg-cyan-50 border border-cyan-100 rounded-xl p-5">
                    <p className="font-black text-cyan-900 text-xl">
                      {result.jobTitle}
                      {result.company && (
                        <span className="ml-2 text-sm font-semibold text-cyan-600 bg-cyan-100 px-2 py-0.5 rounded-full">
                          @ {result.company}
                        </span>
                      )}
                    </p>
                    <p className="text-cyan-800 text-sm leading-relaxed mt-2">{result.summary}</p>
                  </div>

                  {/* Required skills */}
                  <Section
                    title="Required Skills"
                    icon={<CheckCircle size={16} className="text-green-500" />}
                  >
                    <div className="flex flex-wrap gap-2 mt-3">
                      {result.requiredSkills.length > 0
                        ? result.requiredSkills.map((s, i) => (
                          <span key={i} className="text-sm bg-green-50 text-green-800 border border-green-200 px-3 py-1 rounded-full font-medium">
                            {s}
                          </span>
                        ))
                        : <p className="text-sm text-gray-400">None explicitly listed.</p>
                      }
                    </div>
                  </Section>

                  {/* Nice to haves */}
                  {result.niceToHaveSkills.length > 0 && (
                    <Section
                      title="Nice to Have"
                      icon={<Star size={16} className="text-amber-400" />}
                      defaultOpen={false}
                    >
                      <div className="flex flex-wrap gap-2 mt-3">
                        {result.niceToHaveSkills.map((s, i) => (
                          <span key={i} className="text-sm bg-amber-50 text-amber-800 border border-amber-200 px-3 py-1 rounded-full font-medium">
                            {s}
                          </span>
                        ))}
                      </div>
                    </Section>
                  )}

                  {/* Responsibilities */}
                  {result.responsibilities.length > 0 && (
                    <Section
                      title="What You'll Actually Do"
                      icon={<Briefcase size={16} className="text-cyan-600" />}
                    >
                      <ul className="mt-3 flex flex-col gap-2">
                        {result.responsibilities.map((r, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="shrink-0 w-5 h-5 rounded-full bg-cyan-100 text-cyan-700 text-xs font-black flex items-center justify-center mt-0.5">{i + 1}</span>
                            {r}
                          </li>
                        ))}
                      </ul>
                    </Section>
                  )}

                  {/* Experience + qualifications */}
                  {(result.experienceRequired || result.qualifications.length > 0) && (
                    <Section
                      title="Experience & Qualifications"
                      icon={<GraduationCap size={16} className="text-indigo-500" />}
                      defaultOpen={false}
                    >
                      <div className="mt-3 flex flex-col gap-3">
                        {result.experienceRequired && (
                          <div className="bg-indigo-50 rounded-lg px-4 py-3">
                            <p className="text-xs font-bold text-indigo-600 uppercase tracking-wide mb-1">Experience</p>
                            <p className="text-sm text-gray-700">{result.experienceRequired}</p>
                          </div>
                        )}
                        {result.qualifications.length > 0 && (
                          <ul className="flex flex-col gap-1.5">
                            {result.qualifications.map((q, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                <CheckCircle size={14} className="text-indigo-400 mt-0.5 shrink-0" />
                                {q}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </Section>
                  )}

                  {/* Red flags */}
                  {result.redFlags.length > 0 && (
                    <Section
                      title={`Red Flags (${result.redFlags.length})`}
                      icon={<AlertTriangle size={16} className="text-red-500" />}
                      defaultOpen={false}
                    >
                      <ul className="mt-3 flex flex-col gap-2">
                        {result.redFlags.map((flag, i) => (
                          <li key={i} className="flex items-start gap-2 bg-red-50 rounded-lg px-4 py-3">
                            <AlertTriangle size={14} className="text-red-500 shrink-0 mt-0.5" />
                            <p className="text-sm text-red-800">{flag}</p>
                          </li>
                        ))}
                      </ul>
                    </Section>
                  )}

                  {/* Courses */}
                  {result.courses.length > 0 && (
                    <div>
                      <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <BookOpen size={16} className="text-cyan-600" /> Courses to Meet These Requirements
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {result.courses.map(course => (
                          <div key={course.id} className="flex flex-col gap-1">
                            {course.targetSkill && (
                              <span className="text-xs font-bold text-cyan-700 bg-cyan-50 border border-cyan-100 px-2.5 py-1 rounded-full self-start">
                                Covers: {course.targetSkill}
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
