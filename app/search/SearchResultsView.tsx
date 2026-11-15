'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
  Search,
  X,
  BookOpen,
  Briefcase,
  Compass,
  FileText,
  Wrench,
  ArrowRight,
  Sparkles,
  Loader2,
  ChevronRight,
  Filter,
} from 'lucide-react';
import type { SearchResultItem, SearchCategory, SearchResponse } from '@/lib/search';

const CATEGORY_TABS: { key: SearchCategory; label: string }[] = [
  { key: 'all', label: 'All Results' },
  { key: 'guide', label: 'Guides' },
  { key: 'blog', label: 'Articles & Advice' },
  { key: 'task', label: 'Portfolio Tasks' },
  { key: 'roadmap', label: 'Career Roadmaps' },
  { key: 'interview_prep', label: 'Interview Prep' },
];

const POPULAR_SEARCHES = [
  'Cybersecurity',
  'Data Analyst',
  'Python',
  'Digital Marketing',
  'CV Builder',
  'SQL',
  'Software Developer',
  'Accounting',
];

function getTypeIcon(type: SearchCategory) {
  switch (type) {
    case 'guide':
      return <BookOpen size={18} className="text-amber-600 shrink-0" />;
    case 'blog':
      return <FileText size={18} className="text-blue-600 shrink-0" />;
    case 'task':
      return <Briefcase size={18} className="text-purple-600 shrink-0" />;
    case 'roadmap':
      return <Compass size={18} className="text-emerald-600 shrink-0" />;
    case 'interview_prep':
      return <Sparkles size={18} className="text-teal-600 shrink-0" />;
    case 'tool':
    default:
      return <Wrench size={18} className="text-orange-600 shrink-0" />;
  }
}

function getTypeBadgeClass(type: SearchCategory) {
  switch (type) {
    case 'guide':
      return 'bg-amber-100 text-amber-800 border-amber-200';
    case 'blog':
      return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'task':
      return 'bg-purple-100 text-purple-800 border-purple-200';
    case 'roadmap':
      return 'bg-emerald-100 text-emerald-800 border-emerald-200';
    case 'interview_prep':
      return 'bg-teal-100 text-teal-800 border-teal-200';
    case 'tool':
    default:
      return 'bg-orange-100 text-orange-800 border-orange-200';
  }
}

export default function SearchResultsView() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialQuery = searchParams.get('q') || '';
  const initialType = (searchParams.get('type') || 'all') as SearchCategory;

  const [query, setQuery] = useState(initialQuery);
  const [activeTab, setActiveTab] = useState<SearchCategory>(initialType);
  const [results, setResults] = useState<SearchResultItem[]>([]);
  const [counts, setCounts] = useState<Record<SearchCategory, number>>({
    all: 0,
    guide: 0,
    blog: 0,
    task: 0,
    roadmap: 0,
    interview_prep: 0,
    tool: 0,
  });
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const executeSearch = useCallback(
    async (searchQuery: string, type: SearchCategory) => {
      const trimmed = searchQuery.trim();
      if (!trimmed) {
        setResults([]);
        setCounts({
          all: 0,
          guide: 0,
          blog: 0,
          task: 0,
          roadmap: 0,
          interview_prep: 0,
          tool: 0,
        });
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      try {
        const res = await fetch(
          `/api/search?q=${encodeURIComponent(trimmed)}&type=${type}`
        );
        if (!res.ok) throw new Error('Search failed');
        const data: SearchResponse = await res.json();
        setResults(data.results || []);
        setCounts(
          data.counts || {
            all: 0,
            guide: 0,
            blog: 0,
            task: 0,
            roadmap: 0,
            interview_prep: 0,
            tool: 0,
          }
        );
      } catch (err) {
        console.error('Search request failed:', err);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  // Sync state with URL params
  useEffect(() => {
    const q = searchParams.get('q') || '';
    const t = (searchParams.get('type') || 'all') as SearchCategory;
    setQuery(q);
    setActiveTab(t);
    if (q) {
      executeSearch(q, t);
    }
  }, [searchParams, executeSearch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/search?q=${encodeURIComponent(query.trim())}&type=${activeTab}`);
  };

  const handleTabSelect = (tab: SearchCategory) => {
    setActiveTab(tab);
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}&type=${tab}`);
    }
  };

  const handleSuggestionClick = (keyword: string) => {
    setQuery(keyword);
    router.push(`/search?q=${encodeURIComponent(keyword)}&type=${activeTab}`);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        <ChevronRight size={12} className="text-gray-400" />
        <span className="text-gray-900 font-semibold">Search</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1F1B13] tracking-tight mb-3">
          Search Graduates Hub
        </h1>
        <p className="text-[#4F4639] text-base max-w-2xl font-medium leading-relaxed">
          Find career roadmaps, certification guides, proof-of-work portfolio tasks, and career advice articles.
        </p>
      </div>

      {/* Search Input Bar */}
      <form onSubmit={handleSubmit} className="relative mb-8">
        <div className="relative flex items-center bg-white border-2 border-[#D1C5B4] focus-within:border-primary rounded-2xl shadow-sm transition-all overflow-hidden p-1.5 sm:p-2">
          <Search size={22} className="text-gray-400 ml-3 mr-2 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search guides, roadmaps, articles, tasks..."
            className="w-full py-2.5 px-2 bg-transparent text-gray-900 placeholder:text-gray-400 focus:outline-none text-base sm:text-lg"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setResults([]);
                router.push('/search');
                inputRef.current?.focus();
              }}
              className="p-1.5 text-gray-400 hover:text-gray-600 rounded-lg transition-colors mr-2"
              aria-label="Clear search input"
            >
              <X size={18} />
            </button>
          )}
          <button
            type="submit"
            className="bg-primary hover:bg-[#5a4000] text-white px-5 sm:px-7 py-3 rounded-xl font-bold text-sm sm:text-base transition-colors shrink-0 shadow-sm"
          >
            Search
          </button>
        </div>
      </form>

      {/* Popular Search Suggestions when query is empty */}
      {!query.trim() && (
        <div className="mb-12">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <Filter size={13} className="text-primary" /> Popular Searches
          </p>
          <div className="flex flex-wrap gap-2 mb-10">
            {POPULAR_SEARCHES.map((keyword) => (
              <button
                key={keyword}
                type="button"
                onClick={() => handleSuggestionClick(keyword)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-[#D1C5B4] text-xs sm:text-sm font-semibold text-gray-800 hover:border-primary hover:text-primary transition-colors shadow-sm"
              >
                <Search size={13} className="text-gray-400" />
                <span>{keyword}</span>
              </button>
            ))}
          </div>

          {/* Quick Categories Overview */}
          <h2 className="text-lg font-bold text-gray-900 mb-4">Browse by Resource Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/career-roadmaps"
              className="bg-white border border-[#D1C5B4] rounded-2xl p-5 hover:border-primary hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Compass size={20} />
              </div>
              <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors mb-1">
                Career Roadmaps
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                17 step-by-step paths from zero experience to job-ready competence.
              </p>
            </Link>

            <Link
              href="/portfolio-tasks"
              className="bg-white border border-[#D1C5B4] rounded-2xl p-5 hover:border-primary hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Briefcase size={20} />
              </div>
              <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors mb-1">
                Portfolio Tasks
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Practical, AI-graded project briefs to demonstrate proof of work to employers.
              </p>
            </Link>

            <Link
              href="/guides"
              className="bg-white border border-[#D1C5B4] rounded-2xl p-5 hover:border-primary hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <BookOpen size={20} />
              </div>
              <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors mb-1">
                Course Guides
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Curated guides to top verified credentials from Google, Cisco, and Microsoft.
              </p>
            </Link>

            <Link
              href="/blog"
              className="bg-white border border-[#D1C5B4] rounded-2xl p-5 hover:border-primary hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <FileText size={20} />
              </div>
              <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors mb-1">
                Articles &amp; Advice
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Practical career advice, hiring insights, and internship application guides.
              </p>
            </Link>
          </div>
        </div>
      )}

      {/* Filter Tabs when query is present */}
      {query.trim() && (
        <div className="mb-6 border-b border-[#D1C5B4] flex items-center gap-2 overflow-x-auto scrollbar-none pb-px">
          {CATEGORY_TABS.map((tab) => {
            const count = tab.key === 'all' ? counts.all : counts[tab.key] || 0;
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => handleTabSelect(tab.key)}
                className={`px-4 py-3 border-b-2 font-bold text-sm whitespace-nowrap transition-all flex items-center gap-2 ${
                  isActive
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-[#FFDF9C] text-[#261A00]' : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* Loading State */}
      {isLoading && (
        <div className="flex flex-col items-center justify-center py-20 text-gray-500">
          <Loader2 size={36} className="text-primary animate-spin mb-3" />
          <p className="text-sm font-semibold">Searching across all platform resources...</p>
        </div>
      )}

      {/* Results List */}
      {!isLoading && query.trim() && results.length > 0 && (
        <div className="space-y-4">
          <p className="text-xs text-gray-500 font-semibold mb-2">
            Showing {results.length} {results.length === 1 ? 'result' : 'results'} for &quot;{query}&quot;
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {results.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="bg-white border border-[#D1C5B4] rounded-2xl p-5 hover:border-primary hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-0.5 rounded-full border ${getTypeBadgeClass(
                        item.type
                      )}`}
                    >
                      {getTypeIcon(item.type)}
                      <span>{item.typeLabel}</span>
                    </span>
                    {item.badge && (
                      <span className="text-[11px] text-gray-500 bg-gray-100 border border-gray-200 px-2 py-0.5 rounded-md font-semibold">
                        {item.badge}
                      </span>
                    )}
                    {item.date && (
                      <span className="text-[11px] text-gray-400 ml-auto font-medium">
                        {item.date}
                      </span>
                    )}
                  </div>

                  <h2 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-primary transition-colors mb-2 leading-snug">
                    {item.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-bold text-primary pt-2 border-t border-gray-100 mt-auto">
                  <span>View Resource</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {!isLoading && query.trim() && results.length === 0 && (
        <div className="bg-white border border-[#D1C5B4] rounded-2xl p-8 sm:p-12 text-center max-w-xl mx-auto my-8">
          <div className="w-14 h-14 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center mx-auto mb-4">
            <Search size={26} />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            No matching resources found
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            We couldn&apos;t find any results for &quot;<strong className="text-gray-900">{query}</strong>&quot;.
            Try adjusting your search terms, removing filters, or browsing by category.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {POPULAR_SEARCHES.slice(0, 4).map((kw) => (
              <button
                key={kw}
                type="button"
                onClick={() => handleSuggestionClick(kw)}
                className="text-xs font-bold text-primary bg-[#FFDF9C]/40 border border-[#D1C5B4] px-3.5 py-1.5 rounded-lg hover:bg-[#FFDF9C] transition-colors"
              >
                {kw}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
