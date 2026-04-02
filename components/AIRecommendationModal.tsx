'use client';
import { useState } from 'react';
import { X, Sparkles, Loader2 } from 'lucide-react';
import CourseCard from './CourseCard';
import type { Course } from '@/types';

export default function AIRecommendationModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<Course[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  if (!isOpen) return null;

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setError(null);
    setHasSearched(true);
    setRecommendations([]);

    try {
      const res = await fetch('/api/recommendations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to fetch recommendations.');
      setRecommendations(data.courses);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch recommendations.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickPrompt = (prompt: string) => setQuery(prompt);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 flex justify-between items-start text-white relative overflow-hidden shrink-0">
          <div className="absolute top-0 right-0 p-4 opacity-10"><Sparkles size={100} /></div>
          <div className="relative z-10 w-full">
            <h2 className="text-2xl font-black mb-2 flex items-center gap-2">
              <Sparkles size={24} className="text-yellow-300" /> AI Course Matcher
            </h2>
            <p className="text-blue-100 font-medium">Tell us your goals, interests, or current skills, and our AI will find the perfect courses for you.</p>
            <button onClick={onClose} className="absolute top-0 right-0 mt-1 mr-1 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-gray-50 flex flex-col gap-8">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm shrink-0">
            <form onSubmit={handleSearch} className="flex flex-col gap-4">
              <label htmlFor="ai-prompt" className="font-bold text-gray-700 text-sm tracking-wide uppercase">Describe what you want to learn:</label>
              <div className="relative">
                <textarea
                  id="ai-prompt"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="e.g., 'I want to transition into tech but I only know basic Excel. I am interested in solving problems and analyzing data.'"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-shadow resize-none h-32 text-gray-800"
                />
                <button
                  type="submit"
                  disabled={isLoading || !query.trim()}
                  className="absolute bottom-3 right-3 bg-primary hover:bg-blue-700 disabled:bg-blue-300 text-white px-6 py-2 rounded-lg font-bold transition-colors flex items-center gap-2 shadow-md"
                >
                  {isLoading ? <><Loader2 size={18} className="animate-spin" /> Analyzing...</> : <><Sparkles size={18} /> Match Courses</>}
                </button>
              </div>
            </form>

            {!hasSearched && !query && (
              <div className="mt-6">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">Or try these examples:</span>
                <div className="flex flex-wrap gap-2">
                  <button onClick={() => handleQuickPrompt("I want a career in Artificial Intelligence but I'm a beginner.")} className="text-left text-sm bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full transition-colors border border-blue-100">"Career in Artificial Intelligence..."</button>
                  <button onClick={() => handleQuickPrompt("How do I start a small business online?")} className="text-left text-sm bg-green-50 hover:bg-green-100 text-green-700 px-3 py-1.5 rounded-full transition-colors border border-green-100">"Start a small business..."</button>
                  <button onClick={() => handleQuickPrompt("I work in a hospital and want to move into healthcare administration.")} className="text-left text-sm bg-purple-50 hover:bg-purple-100 text-purple-700 px-3 py-1.5 rounded-full transition-colors border border-purple-100">"Healthcare administration..."</button>
                </div>
              </div>
            )}
          </div>

          {hasSearched && (
            <div className="flex flex-col gap-6 w-full">
              <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                <h3 className="text-xl font-bold text-gray-800">Your Personalized Matches</h3>
              </div>
              {isLoading && (
                <div className="flex flex-col items-center justify-center py-12 text-gray-400">
                  <Loader2 size={40} className="animate-spin text-primary mb-4" />
                  <p className="font-medium animate-pulse">Our AI is finding the best courses for you...</p>
                </div>
              )}
              {error && (
                <div className="bg-red-50 text-red-700 p-4 rounded-xl border border-red-100 flex flex-col items-center text-center py-8">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-3"><X size={24} className="text-red-600" /></div>
                  <p className="font-bold">{error}</p>
                </div>
              )}
              {!isLoading && !error && recommendations.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8">
                  {recommendations.map(course => (
                    <div key={course.id} onClick={onClose} className="h-full"><CourseCard course={course} /></div>
                  ))}
                </div>
              )}
              {!isLoading && !error && recommendations.length === 0 && hasSearched && (
                <div className="text-center py-12 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <p className="text-gray-500 font-medium">We couldn't find a perfect match right now.</p>
                  <p className="text-gray-400 text-sm mt-1">Try rewording your goals or making them broader.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
