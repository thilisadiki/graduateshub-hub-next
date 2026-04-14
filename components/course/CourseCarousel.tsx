'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp } from 'lucide-react';
import CourseCard from './CourseCard';
import type { Course } from '@/types';

export default function CourseCarousel({
  courses,
  title = 'Trending Courses',
  subtitle = 'See what others are learning right now',
}: {
  courses: Course[];
  title?: string;
  subtitle?: string;
}) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  if (!courses || courses.length === 0) return null;

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="text-primary" size={24} />
              <h2 className="text-3xl font-extrabold text-gray-900">{title}</h2>
            </div>
            <p className="text-gray-500">{subtitle}</p>
            <div className="flex items-center gap-1.5 mt-3 text-primary text-sm font-semibold md:hidden bg-blue-50 w-max px-3 py-1 rounded-full">
              <ChevronRight size={16} className="animate-pulse" />
              <span>Swipe to see more</span>
            </div>
          </div>
          <div className="hidden md:flex gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-primary hover:border-blue-200 transition-colors bg-white shadow-sm"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-primary hover:border-blue-200 transition-colors bg-white shadow-sm"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="relative max-w-[1400px] mx-auto group">
        <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 hidden md:block pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 hidden md:block pointer-events-none"></div>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 px-6 pb-8 pt-4 snap-x snap-mandatory hide-scrollbars cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' } as React.CSSProperties}
        >
          <style>{`.hide-scrollbars::-webkit-scrollbar { display: none; }`}</style>

          {courses.map((course) => (
            <div key={course.id} className="w-[85vw] md:w-[340px] shrink-0 snap-start">
              <CourseCard course={course} />
            </div>
          ))}

          <div className="w-4 shrink-0 pointer-events-none"></div>
        </div>
      </div>

      <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-gray-100/50 -z-10 pointer-events-none"></div>
    </section>
  );
}
