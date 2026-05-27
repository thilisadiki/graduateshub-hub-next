'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Search, X } from 'lucide-react';
import CourseCard from '@/components/course/CourseCard';
import CourseFilters from '@/components/course/CourseFilters';
import AIToolsBanner from '@/components/home/AIToolsBanner';
import { courses } from '@/data/courses';
import {
  EMPTY_FILTER_STATE,
  applyFilters,
  type FilterState,
  type FormatFilter,
  type LengthBand,
  type SortKey,
} from '@/utils/courseFilters';

const PAGE_SIZE = 12;

const TIPS = [
  {
    icon: '🎯',
    title: 'Define your goal first',
    body: 'A short certificate is great for a single skill; a diploma suits a career change or specialisation.',
  },
  {
    icon: '⏱️',
    title: 'Check the time commitment',
    body: 'Every course shows an estimated length so you can fit it around your schedule before you enrol.',
  },
  {
    icon: '📜',
    title: 'Look for recognised certificates',
    body: 'Each course on the hub comes with a verifiable certificate you can share on LinkedIn or attach to your CV.',
  },
];

const FAQS = [
  {
    q: 'Are all the courses on Graduates Hub really free?',
    a: 'Yes. Every course listed on Graduates Hub is 100% free of charge. There are no hidden fees, subscription charges, or paywalls. Simply create an account on the provider site and start learning.',
  },
  {
    q: 'Will I receive a certificate after completing a course?',
    a: 'Most courses include a free certificate of completion that you can download, share on LinkedIn, or attach to your CV to showcase your new skills to employers.',
  },
  {
    q: 'How long do the courses take to complete?',
    a: 'Course duration varies. Short certificate courses can be completed in a few hours, while diploma programmes may take several weeks. All courses are self-paced.',
  },
  {
    q: 'What subjects are available on Graduates Hub?',
    a: 'We focus on five fields where we have named specialist curators: IT, Software Engineering, Business, Accounting, and Marketing. See our curation policy for why we deliberately keep the scope narrow.',
  },
  {
    q: 'Do I need any prior experience to start a course?',
    a: 'Most courses are beginner-friendly and require no prior knowledge. Each course page lists any prerequisites so you can choose the right starting point.',
  },
];

function stateFromParams(params: URLSearchParams): FilterState {
  const allowedFormats: FormatFilter[] = ['any', 'certificate', 'diploma'];
  const allowedLengths: LengthBand[] = ['any', 'short', 'medium', 'long'];
  const allowedSorts: SortKey[] = ['relevance', 'rating', 'shortest', 'az'];
  const format = (params.get('format') as FormatFilter) || 'any';
  const length = (params.get('length') as LengthBand) || 'any';
  const sort = (params.get('sort') as SortKey) || 'relevance';
  return {
    q: params.get('q') ?? '',
    category: params.get('category') ?? '',
    format: allowedFormats.includes(format) ? format : 'any',
    length: allowedLengths.includes(length) ? length : 'any',
    sort: allowedSorts.includes(sort) ? sort : 'relevance',
  };
}

export default function FindCourseContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [state, setState] = useState<FilterState>(() => stateFromParams(new URLSearchParams(searchParams.toString())));
  const [inputValue, setInputValue] = useState(state.q);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Debounce input -> state.q
  useEffect(() => {
    const handle = setTimeout(() => {
      if (inputValue !== state.q) {
        setState((prev) => ({ ...prev, q: inputValue, sort: inputValue.trim() ? prev.sort : prev.sort === 'relevance' ? 'rating' : prev.sort }));
      }
    }, 200);
    return () => clearTimeout(handle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  // Push state -> URL
  useEffect(() => {
    const params = new URLSearchParams();
    if (state.q) params.set('q', state.q);
    if (state.category) params.set('category', state.category);
    if (state.format !== 'any') params.set('format', state.format);
    if (state.length !== 'any') params.set('length', state.length);
    if (state.sort !== 'relevance' && !(state.sort === 'rating' && !state.q)) params.set('sort', state.sort);
    const qs = params.toString();
    router.replace(qs ? `/find-a-course?${qs}` : '/find-a-course', { scroll: false });
  }, [state, router]);

  // Reset pagination on filter/search change
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [state]);

  const updateState = useCallback((next: Partial<FilterState>) => {
    setState((prev) => ({ ...prev, ...next }));
  }, []);

  const clearAll = useCallback(() => {
    setState({ ...EMPTY_FILTER_STATE, q: state.q });
  }, [state.q]);

  const filtered = useMemo(() => applyFilters(courses, state), [state]);
  const visible = filtered.slice(0, visibleCount);
  const fallbackPicks = useMemo(
    () => [...courses].sort((a, b) => b.rating - a.rating).slice(0, 3),
    [],
  );

  const totalCourses = courses.length;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero with on-page search */}
      <div className="bg-[#1F1B13] text-white py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold">
            Find a <span className="text-primary">Course</span>
          </h1>
          <p className="text-[#D1C5B4] mt-3 max-w-2xl mx-auto text-sm md:text-base">
            Browse {totalCourses}+ free online courses across IT, Software, Business, Accounting, and Marketing.
            Filter by subject, format, and length to find the right one for your goal.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-7 max-w-2xl mx-auto relative"
            role="search"
          >
            <label htmlFor="course-search" className="sr-only">
              Search courses
            </label>
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
            <input
              id="course-search"
              type="search"
              autoComplete="off"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Search by topic, skill, or career…"
              className="w-full pl-11 pr-11 py-3.5 rounded-full text-sm text-gray-900 bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {inputValue && (
              <button
                type="button"
                onClick={() => setInputValue('')}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 p-1"
              >
                <X size={16} />
              </button>
            )}
          </form>
        </div>
      </div>

      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 py-10 w-full">
        {/* Filters */}
        <div className="mb-8">
          <CourseFilters
            state={state}
            onChange={updateState}
            onClear={clearAll}
            totalCount={totalCourses}
            resultCount={filtered.length}
          />
        </div>

        {/* Results grid or empty state */}
        {filtered.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {visible.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
            {visibleCount < filtered.length && (
              <div className="text-center mt-10">
                <button
                  onClick={() => setVisibleCount((v) => v + PAGE_SIZE)}
                  className="bg-white border-2 border-gray-200 text-gray-700 font-bold py-3 px-8 rounded-lg hover:border-primary hover:text-primary transition-colors shadow-sm"
                >
                  Load more courses
                </button>
                <p className="text-gray-400 text-sm mt-3">
                  Showing {visibleCount} of {filtered.length}
                </p>
              </div>
            )}
          </>
        ) : (
          <div className="flex flex-col gap-10">
            <div className="text-center py-12 bg-white rounded-2xl shadow-sm border border-gray-100 px-6">
              <div className="text-5xl mb-4">🔍</div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                No courses match your filters
              </h2>
              <p className="text-gray-500 max-w-md mx-auto mb-6 text-sm">
                Try clearing a filter or broadening your search. Below are a few top-rated courses to get you started.
              </p>
              <button
                onClick={clearAll}
                className="bg-primary hover:bg-[#5a4000] text-white px-6 py-3 rounded-lg font-bold text-sm transition-colors"
              >
                Clear all filters
              </button>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Top-rated picks</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {fallbackPicks.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* How to choose */}
        <section className="mt-20">
          <h2 className="text-xl font-bold text-gray-900 mb-2">How to choose the right course</h2>
          <p className="text-gray-500 mb-6 text-sm">
            Three things worth checking before you enrol in any free online course.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {TIPS.map((tip) => (
              <div
                key={tip.title}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-5"
              >
                <div className="text-2xl mb-2">{tip.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1.5 text-sm">{tip.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{tip.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-[#FFDF9C]/20 border border-[#D1C5B4] rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-gray-700 font-medium text-sm">
              Want guidance from a specialist? Browse our subject-area guides instead.
            </p>
            <Link
              href="/guides"
              className="shrink-0 text-primary font-bold hover:text-[#261A00] transition-colors whitespace-nowrap text-sm"
            >
              Read our guides →
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-16">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Frequently asked questions</h2>
          <p className="text-gray-500 mb-6 text-sm">
            Quick answers about learning for free on Graduates Hub.
          </p>
          <div className="divide-y divide-gray-100 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            {FAQS.map((faq, i) => (
              <div key={faq.q}>
                <button
                  className="w-full text-left px-5 py-4 flex justify-between items-center gap-4 hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span className="font-semibold text-gray-900 text-sm">{faq.q}</span>
                  <span className="text-gray-400 text-xl flex-shrink-0">
                    {openFaq === i ? '−' : '+'}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-gray-600 leading-relaxed text-sm">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        <div className="mt-16">
          <AIToolsBanner />
        </div>
      </main>
    </div>
  );
}
