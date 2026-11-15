'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
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
  CornerDownLeft,
} from 'lucide-react';
import type { SearchResultItem, SearchCategory, SearchResponse } from '@/lib/search';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const POPULAR_SUGGESTIONS = [
  'Cybersecurity',
  'Data Analyst',
  'Python',
  'Digital Marketing',
  'CV Builder',
  'SQL',
  'Project Management',
];

const CATEGORY_TABS: { key: SearchCategory; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'guide', label: 'Guides' },
  { key: 'blog', label: 'Articles' },
  { key: 'task', label: 'Portfolio Tasks' },
  { key: 'roadmap', label: 'Roadmaps' },
  { key: 'interview_prep', label: 'Interview Prep' },
];

function getTypeIcon(type: SearchCategory) {
  switch (type) {
    case 'guide':
      return <BookOpen size={16} className="text-amber-600 shrink-0" />;
    case 'blog':
      return <FileText size={16} className="text-blue-600 shrink-0" />;
    case 'task':
      return <Briefcase size={16} className="text-purple-600 shrink-0" />;
    case 'roadmap':
      return <Compass size={16} className="text-emerald-600 shrink-0" />;
    case 'interview_prep':
      return <Sparkles size={16} className="text-teal-600 shrink-0" />;
    case 'tool':
    default:
      return <Wrench size={16} className="text-orange-600 shrink-0" />;
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

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState<SearchCategory>('all');
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
  const [selectedIndex, setSelectedIndex] = useState(0);

  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
      setResults([]);
      setActiveTab('all');
      setSelectedIndex(0);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Fetch search results
  const fetchSearchResults = useCallback(async (searchQuery: string, type: SearchCategory) => {
    if (!searchQuery.trim()) {
      setResults([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch(
        `/api/search?q=${encodeURIComponent(searchQuery.trim())}&type=${type}`
      );
      if (!res.ok) throw new Error('Search failed');
      const data: SearchResponse = await res.json();
      setResults(data.results || []);
      setCounts(data.counts || {
        all: 0,
        guide: 0,
        blog: 0,
        task: 0,
        roadmap: 0,
        interview_prep: 0,
        tool: 0,
      });
      setSelectedIndex(0);
    } catch (err) {
      console.error('Search error:', err);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Debounced input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);

    if (debounceTimer.current) clearTimeout(debounceTimer.current);

    if (!val.trim()) {
      setResults([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    debounceTimer.current = setTimeout(() => {
      fetchSearchResults(val, activeTab);
    }, 200);
  };

  // Change category filter tab
  const handleTabChange = (newTab: SearchCategory) => {
    setActiveTab(newTab);
    if (query.trim()) {
      fetchSearchResults(query, newTab);
    }
  };

  // Select suggestion
  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    fetchSearchResults(suggestion, activeTab);
    inputRef.current?.focus();
  };

  // Navigate to result
  const handleSelectResult = (item: SearchResultItem) => {
    onClose();
    router.push(item.href);
  };

  // View all on full search page
  const handleViewAll = () => {
    if (!query.trim()) return;
    onClose();
    router.push(`/search?q=${encodeURIComponent(query.trim())}&type=${activeTab}`);
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (results.length > 0 ? (prev + 1) % results.length : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (results.length > 0 ? (prev - 1 + results.length) % results.length : 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (results.length > 0 && results[selectedIndex]) {
        handleSelectResult(results[selectedIndex]);
      } else if (query.trim()) {
        handleViewAll();
      }
    }
  };

  // Scroll active item into view
  useEffect(() => {
    if (listRef.current) {
      const activeElement = listRef.current.children[selectedIndex] as HTMLElement;
      if (activeElement) {
        activeElement.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-12 sm:pt-20 px-4 bg-black/60 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white border border-[#D1C5B4] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center px-4 py-3.5 border-b border-[#D1C5B4] bg-[#FFF8F1]">
          <Search size={20} className="text-gray-400 shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search guides, articles, portfolio tasks, roadmaps..."
            className="w-full bg-transparent text-gray-900 placeholder:text-gray-400 focus:outline-none text-base"
          />
          {isLoading && (
            <Loader2 size={18} className="text-primary animate-spin shrink-0 mr-2" />
          )}
          {query && !isLoading && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setResults([]);
                inputRef.current?.focus();
              }}
              className="p-1 text-gray-400 hover:text-gray-600 rounded-md transition-colors mr-1"
              aria-label="Clear search input"
            >
              <X size={16} />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-gray-400 hover:text-gray-700 rounded-md text-xs font-semibold bg-white border border-gray-200 px-2 py-0.5 ml-1 transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Filter Categories Tabs */}
        {query.trim().length > 0 && (
          <div className="flex items-center gap-1.5 px-4 py-2 border-b border-gray-100 bg-white overflow-x-auto text-xs scrollbar-none">
            {CATEGORY_TABS.map((tab) => {
              const count = tab.key === 'all' ? counts.all : counts[tab.key] || 0;
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => handleTabChange(tab.key)}
                  className={`px-3 py-1.5 rounded-full font-semibold transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-primary text-white shadow-sm'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <span>{tab.label}</span>
                  {count > 0 && (
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        isActive ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* Search Results / Suggestions Area */}
        <div className="overflow-y-auto flex-1 p-3">
          {/* Empty Query State: Show Popular Suggestions */}
          {!query.trim() && (
            <div className="p-4">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                Popular Searches
              </p>
              <div className="flex flex-wrap gap-2">
                {POPULAR_SUGGESTIONS.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FFF8F1] border border-[#D1C5B4] text-xs font-semibold text-gray-800 hover:border-primary hover:text-primary transition-colors"
                  >
                    <Search size={12} className="text-gray-400" />
                    <span>{suggestion}</span>
                  </button>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                  Quick Navigation
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      router.push('/career-roadmaps');
                    }}
                    className="flex items-center gap-2 p-2.5 rounded-lg border border-gray-100 hover:bg-[#FBF3EB] text-left transition-colors"
                  >
                    <Compass size={16} className="text-primary" />
                    <div>
                      <strong className="block text-gray-900">Career Roadmaps</strong>
                      <span className="text-gray-500">17 step-by-step pathways</span>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      router.push('/portfolio-tasks');
                    }}
                    className="flex items-center gap-2 p-2.5 rounded-lg border border-gray-100 hover:bg-[#FBF3EB] text-left transition-colors"
                  >
                    <Briefcase size={16} className="text-primary" />
                    <div>
                      <strong className="block text-gray-900">Portfolio Tasks</strong>
                      <span className="text-gray-500">Proof-of-work project briefs</span>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      router.push('/cv-builder');
                    }}
                    className="flex items-center gap-2 p-2.5 rounded-lg border border-gray-100 hover:bg-[#FBF3EB] text-left transition-colors"
                  >
                    <Wrench size={16} className="text-primary" />
                    <div>
                      <strong className="block text-gray-900">Free CV Builder</strong>
                      <span className="text-gray-500">ATS-optimized resumes</span>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      router.push('/free-ai-career-tools');
                    }}
                    className="flex items-center gap-2 p-2.5 rounded-lg border border-gray-100 hover:bg-[#FBF3EB] text-left transition-colors"
                  >
                    <Sparkles size={16} className="text-primary" />
                    <div>
                      <strong className="block text-gray-900">AI Career Tools</strong>
                      <span className="text-gray-500">CV audit, skill gaps &amp; JD decode</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Results List */}
          {query.trim() && results.length > 0 && (
            <div ref={listRef} className="space-y-1">
              {results.map((item, index) => {
                const isSelected = index === selectedIndex;
                return (
                  <div
                    key={item.id}
                    onClick={() => handleSelectResult(item)}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-colors ${
                      isSelected
                        ? 'bg-[#FFDF9C]/40 border border-[#D1C5B4]'
                        : 'hover:bg-gray-50 border border-transparent'
                    }`}
                  >
                    <div className="mt-1 p-2 rounded-lg bg-white border border-gray-100 shadow-sm shrink-0">
                      {getTypeIcon(item.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span
                          className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${getTypeBadgeClass(
                            item.type
                          )}`}
                        >
                          {item.typeLabel}
                        </span>
                        {item.badge && (
                          <span className="text-[10px] text-gray-500 bg-gray-100 px-1.5 py-0.2 rounded font-medium">
                            {item.badge}
                          </span>
                        )}
                        {item.date && (
                          <span className="text-[10px] text-gray-400">{item.date}</span>
                        )}
                      </div>
                      <h4 className="text-sm font-bold text-gray-900 truncate">{item.title}</h4>
                      <p className="text-xs text-gray-500 line-clamp-1 mt-0.5 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <ArrowRight
                      size={14}
                      className={`mt-2 shrink-0 transition-transform ${
                        isSelected ? 'text-primary translate-x-0.5' : 'text-gray-300'
                      }`}
                    />
                  </div>
                );
              })}
            </div>
          )}

          {/* No Results State */}
          {query.trim() && !isLoading && results.length === 0 && (
            <div className="text-center py-10 px-4">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-3 text-gray-400">
                <Search size={22} />
              </div>
              <p className="text-sm font-bold text-gray-900 mb-1">
                No results found for &quot;{query}&quot;
              </p>
              <p className="text-xs text-gray-500 max-w-sm mx-auto mb-4">
                Try searching for related keywords like &quot;cybersecurity&quot;, &quot;data analytics&quot;, &quot;python&quot;, or &quot;cv&quot;.
              </p>
              <button
                type="button"
                onClick={() => handleSuggestionClick('Career Roadmaps')}
                className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1"
              >
                Browse Career Roadmaps <ArrowRight size={12} />
              </button>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-4 py-3 bg-[#FFF8F1] border-t border-[#D1C5B4] flex items-center justify-between text-xs text-gray-500">
          <div className="hidden sm:flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="bg-white border border-[#D1C5B4] rounded px-1.5 py-0.5 font-mono text-[10px]">
                &uarr;
              </kbd>
              <kbd className="bg-white border border-[#D1C5B4] rounded px-1.5 py-0.5 font-mono text-[10px]">
                &darr;
              </kbd>
              <span>navigate</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="bg-white border border-[#D1C5B4] rounded px-1.5 py-0.5 font-mono text-[10px] flex items-center gap-0.5">
                <CornerDownLeft size={10} /> Enter
              </kbd>
              <span>select</span>
            </span>
          </div>

          {query.trim() && (
            <button
              type="button"
              onClick={handleViewAll}
              className="font-bold text-primary hover:underline ml-auto flex items-center gap-1 text-xs"
            >
              View all results on search page <ArrowRight size={13} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
