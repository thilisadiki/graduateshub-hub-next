'use client';
import { useState } from 'react';
import Link from 'next/link';
import CourseCard from '@/components/CourseCard';
import CourseCarousel from '@/components/CourseCarousel';
import NewsletterBanner from '@/components/NewsletterBanner';
import { categoryContent } from '@/data/categoryContent';
import type { Course } from '@/types';

export default function CategoryContent({
  categoryId,
  categoryName,
  categoryCourses,
}: {
  categoryId: string;
  categoryName: string;
  categoryCourses: Course[];
}) {
  const [visibleCount, setVisibleCount] = useState(9);
  const [selectedGroup, setSelectedGroup] = useState('All');

  const hasSubCategories = categoryCourses.some(c => c.subCategory);
  const groups = hasSubCategories
    ? ['All', ...Array.from(new Set(categoryCourses.map(c => c.subCategory || 'General'))).sort()]
    : [];

  const displayCourses = selectedGroup === 'All'
    ? categoryCourses
    : categoryCourses.filter(c => (c.subCategory || 'General') === selectedGroup);

  const diplomaCourses = categoryCourses.filter(c => c.tag === 'Diploma').sort((a, b) => b.rating - a.rating).slice(0, 10);
  const certificateCourses = categoryCourses.filter(c => c.tag === 'Certificate').sort((a, b) => b.rating - a.rating).slice(0, 10);

  const groupedCourses = displayCourses.reduce<Record<string, Course[]>>((acc, course) => {
    const group = course.subCategory || 'General';
    if (!acc[group]) acc[group] = [];
    acc[group].push(course);
    return acc;
  }, {});
  const currentGroups = Object.keys(groupedCourses);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto w-full px-6 py-4 text-sm text-gray-500 flex items-center flex-wrap gap-2">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="text-gray-300">›</span>
          <Link href="/categories" className="hover:text-primary transition-colors">Categories</Link>
          <span className="text-gray-300">›</span>
          <span className="text-gray-900 font-medium capitalize">{categoryName}</span>
        </div>
      </div>

      <div className="bg-blue-50 border-b border-blue-100 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold capitalize text-gray-900 mb-4 tracking-tight">{categoryName} Courses</h1>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
            {(categoryContent as any)[categoryId]?.heroIntro || `Browse our selection of free courses in ${categoryName}. Start learning today and boost your career.`}
          </p>
        </div>
      </div>

      <main className="flex-grow max-w-6xl mx-auto px-6 py-16 w-full">
        {categoryCourses.length > 0 ? (
          <>
            {hasSubCategories && (
              <div className="flex flex-wrap gap-3 mb-12 justify-center border-b border-gray-200 pb-8">
                {groups.map(group => (
                  <button
                    key={group}
                    onClick={() => setSelectedGroup(group)}
                    className={`px-6 py-2.5 rounded-full font-bold transition-all text-sm md:text-base ${selectedGroup === group
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary'}`}
                  >
                    {group}
                  </button>
                ))}
              </div>
            )}

            {selectedGroup !== 'All' ? (
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">{selectedGroup} Courses</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {displayCourses.map(course => <CourseCard key={course.id} course={course} />)}
                </div>
              </div>
            ) : currentGroups.length === 1 && currentGroups[0] === 'General' ? (
              <>
                <h2 className="sr-only">Available Courses</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                  {categoryCourses.slice(0, visibleCount).map(course => <CourseCard key={course.id} course={course} />)}
                </div>
                {visibleCount < categoryCourses.length && (
                  <div className="text-center">
                    <button onClick={() => setVisibleCount(v => v + 9)} className="bg-white border-2 border-gray-200 text-gray-700 font-bold py-3 px-8 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-colors shadow-sm">
                      Load More Courses
                    </button>
                    <p className="text-gray-500 text-sm mt-3">Showing {visibleCount} of {categoryCourses.length} courses</p>
                  </div>
                )}
              </>
            ) : (
              <div className="flex flex-col gap-16 mb-12">
                {currentGroups.sort().map(group => (
                  <div key={group}>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">{group} Courses</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {groupedCourses[group].map(course => <CourseCard key={course.id} course={course} />)}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {diplomaCourses.length > 0 && (
              <div className="mt-20 border-t border-gray-100 pt-16">
                <CourseCarousel courses={diplomaCourses} title={`Top ${categoryName} Diplomas`} subtitle="Master a subject comprehensively and boost your career prospects" />
              </div>
            )}
            {certificateCourses.length > 0 && (
              <div className="mt-12">
                <CourseCarousel courses={certificateCourses} title={`Top ${categoryName} Certificates`} subtitle="Gain focused, practical skills in a short amount of time" />
              </div>
            )}

            {(categoryContent as any)[categoryId] && (
              <div className="mt-20 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 overflow-hidden">
                <div className="max-w-4xl mx-auto">
                  <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Study {categoryName}?</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">{(categoryContent as any)[categoryId].aboutSection}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"><span className="text-primary">💼</span> Career Opportunities</h3>
                      <p className="text-gray-600 leading-relaxed">{(categoryContent as any)[categoryId].careerOpportunities}</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"><span className="text-green-600">🎯</span> Skills You Will Learn</h3>
                      <ul className="space-y-3">
                        {(categoryContent as any)[categoryId].skillsFocus.map((skill: string, i: number) => (
                          <li key={i} className="flex items-start text-gray-600"><span className="text-green-500 mr-3 mt-1">✓</span><span>{skill}</span></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">More courses coming soon!</h2>
            <p className="text-gray-500 mb-8">We are actively adding new courses to the {categoryName} category.</p>
            <Link href="/" className="bg-primary hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-bold transition-colors">Browse All Courses</Link>
          </div>
        )}
      </main>
      <NewsletterBanner />
    </div>
  );
}
