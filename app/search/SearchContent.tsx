'use client';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import CourseCard from '@/components/CourseCard';
import { courses } from '@/data/courses';

export default function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [visibleCount, setVisibleCount] = useState(9);

  const filteredCourses = courses.filter(course => {
    const q = query.toLowerCase();
    return (
      course.title.toLowerCase().includes(q) ||
      course.category.toLowerCase().includes(q) ||
      course.description.toLowerCase().includes(q)
    );
  });

  const relatedCourses = filteredCourses.length === 0
    ? [...courses].sort(() => 0.5 - Math.random()).slice(0, 3)
    : [];

  const externalSearchLink = `https://alison.com/courses?query=${encodeURIComponent(query)}&utm_source=alison_user&utm_medium=affiliates&utm_campaign=43098205`;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold">
            Search <span className="text-primary">Results</span>
          </h1>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Showing results for: <span className="font-semibold text-white">"{query}"</span>
          </p>
        </div>
      </div>

      <main className="flex-grow max-w-6xl mx-auto px-6 py-16 w-full">
        {filteredCourses.length > 0 ? (
          <>
            <p className="text-gray-600 font-medium mb-8">Found {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {filteredCourses.slice(0, visibleCount).map(course => <CourseCard key={course.id} course={course} />)}
            </div>
            {visibleCount < filteredCourses.length && (
              <div className="text-center">
                <button onClick={() => setVisibleCount(v => v + 9)} className="bg-white border-2 border-gray-200 text-gray-700 font-bold py-3 px-8 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-colors shadow-sm">
                  Load More Courses
                </button>
                <p className="text-gray-400 text-sm mt-3">Showing {visibleCount} of {filteredCourses.length} courses</p>
              </div>
            )}
            <div className="mt-16 bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center max-w-4xl mx-auto w-full">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Didn't find what you were looking for?</h2>
              <p className="text-gray-600 mb-8 max-w-xl mx-auto text-lg">
                Explore thousands of other free courses matching <span className="font-bold text-gray-800">"{query}"</span> on the main Alison platform.
              </p>
              <a href={externalSearchLink} target="_blank" rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-md">
                Search "{query}" on Alison.com ↗
              </a>
            </div>
          </>
        ) : (
          <div className="flex flex-col gap-16">
            <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-100 p-8 max-w-3xl mx-auto w-full">
              <div className="text-6xl mb-6">🔍</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">We didn't find "{query}" in our curated hub</h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto text-lg">
                But don't worry! You can easily explore Alison's entire global catalog for free courses related to <span className="font-bold text-gray-800">"{query}"</span>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
                <a href={externalSearchLink} target="_blank" rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold transition-all w-full sm:w-auto shadow-md">
                  Search "{query}" on Alison.com ↗
                </a>
                <Link href="/categories" className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-4 rounded-lg font-bold transition-colors w-full sm:w-auto">
                  Browse Local Categories
                </Link>
              </div>
            </div>
            {relatedCourses.length > 0 && (
              <div className="mt-8">
                <div className="flex justify-between items-end mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">You Might Also Like</h3>
                    <p className="text-gray-500 mt-2">Popular top-rated courses from our Hub.</p>
                  </div>
                  <Link href="/categories" className="text-primary font-bold hover:text-blue-800 transition-colors hidden sm:block">View All →</Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {relatedCourses.map(course => <CourseCard key={course.id} course={course} />)}
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
