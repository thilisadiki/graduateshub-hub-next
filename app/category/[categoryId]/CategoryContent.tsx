'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, CheckCircle2 } from 'lucide-react';
import CourseCard from '@/components/CourseCard';
import CourseCarousel from '@/components/CourseCarousel';
import NewsletterBanner from '@/components/NewsletterBanner';
import { categoryContent } from '@/data/categoryContent';
import type { Course } from '@/types';

const articleLinks: Record<string, { text: string; href: string }> = {
  it: { text: 'our free IT career guides', href: '/blog/10-in-demand-it-skills-you-can-learn-online-for-free' },
  'software-engineering': { text: 'our software engineering study guides', href: '/blog/how-to-become-a-self-taught-web-developer-for-free-in-2026' },
  business: { text: 'our business and management articles', href: '/blog' },
  accounting: { text: 'our accounting and finance guides', href: '/blog' },
  marketing: { text: 'our digital marketing resources', href: '/blog' },
};

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

  const content = (categoryContent as any)[categoryId];

  const hasSubCategories = categoryCourses.some(c => c.subCategory);
  const groups = hasSubCategories
    ? ['All', ...Array.from(new Set(categoryCourses.map(c => c.subCategory || 'General'))).sort()]
    : [];

  const topRating = categoryCourses.length > 0
    ? Math.max(...categoryCourses.map(c => c.rating))
    : null;
  const trackCount = groups.length > 1 ? groups.length - 1 : null;

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
            {content?.heroIntro || `Browse our selection of free courses in ${categoryName}. Start learning today and boost your career.`}
          </p>
          {content?.showStats && (
            <div className="flex flex-wrap gap-4 mt-6">
              {[
                { value: `${categoryCourses.length}`, label: 'Free Courses' },
                ...(trackCount ? [{ value: `${trackCount}`, label: 'Specialist Tracks' }] : []),
                ...(topRating ? [{ value: `${topRating}`, label: 'Top Rating' }] : []),
                { value: 'CPD', label: 'Accredited' },
              ].map(({ value, label }) => (
                <div key={label} className="bg-white/80 border border-blue-200 rounded-xl px-5 py-3 text-center min-w-[90px]">
                  <p className="text-2xl font-extrabold text-primary">{value}</p>
                  <p className="text-xs text-gray-500 font-medium">{label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <main className="flex-grow max-w-6xl mx-auto px-6 py-16 w-full">
        {categoryCourses.length > 0 ? (
          <>
            {/* Tracks decision block */}
            {content?.tracks && (
              <section className="mb-14">
                <h2 className="text-xl font-extrabold text-gray-900 mb-1">Choose Your Track</h2>
                <p className="text-sm text-gray-500 mb-6">Select a track to filter the courses below, or browse everything with the filter bar.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {content.tracks.map((track: any) => (
                    <button
                      key={track.subCategory}
                      onClick={() => setSelectedGroup(track.subCategory)}
                      className={`text-left rounded-xl p-5 border transition-all group ${selectedGroup === track.subCategory ? 'bg-primary border-primary text-white shadow-md' : 'bg-white border-gray-100 hover:border-primary hover:shadow-md'}`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${selectedGroup === track.subCategory ? 'bg-white/20 border-white/30 text-white' : 'bg-blue-50 border-blue-100 text-primary'}`}>
                          {track.count} courses
                        </span>
                        <ChevronRight size={14} className={`transition-colors ${selectedGroup === track.subCategory ? 'text-white' : 'text-gray-300 group-hover:text-primary'}`} />
                      </div>
                      <p className={`font-bold mb-1 text-sm ${selectedGroup === track.subCategory ? 'text-white' : 'text-gray-900 group-hover:text-primary'}`}>{track.label}</p>
                      <p className={`text-xs leading-relaxed ${selectedGroup === track.subCategory ? 'text-blue-100' : 'text-gray-500'}`}>{track.goal}</p>
                    </button>
                  ))}
                  {/* Reset to All */}
                  {selectedGroup !== 'All' && (
                    <button
                      onClick={() => setSelectedGroup('All')}
                      className="text-left bg-gray-50 border border-dashed border-gray-200 rounded-xl p-5 hover:border-gray-400 transition-all text-sm text-gray-400 font-medium flex items-center gap-2"
                    >
                      View all tracks
                    </button>
                  )}
                </div>
              </section>
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

            {/* Related guides strip */}
            {content?.guideLinks && (
              <section className="mt-16">
                <h2 className="text-lg font-extrabold text-gray-900 mb-4">Related Learning Guides</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {content.guideLinks.map((guide: any) => (
                    <Link
                      key={guide.href}
                      href={guide.href}
                      className="group bg-white border border-gray-100 rounded-xl p-5 hover:border-primary hover:shadow-md transition-all flex flex-col gap-2"
                    >
                      <span className="self-start text-xs font-bold text-primary bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full">
                        {guide.badge}
                      </span>
                      <p className="font-bold text-gray-900 group-hover:text-primary transition-colors text-sm">{guide.title}</p>
                      <p className="text-xs text-gray-500 leading-relaxed flex-grow">{guide.desc}</p>
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-primary mt-1">
                        View Guide <ChevronRight size={12} />
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {content && (
              <div className="mt-16 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 overflow-hidden">
                <div className="max-w-4xl mx-auto">
                  <div className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">What These Courses Cover</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">{content.aboutSection}</p>
                    {articleLinks[categoryId] && (
                      <p className="text-gray-600 mt-4">
                        For career tips and study advice, explore{' '}
                        <a href={articleLinks[categoryId].href} className="text-primary font-semibold hover:underline" target="_blank" rel="noopener noreferrer">
                          {articleLinks[categoryId].text}
                        </a>{' '}
                        on Graduates Hub Articles.
                      </p>
                    )}
                  </div>

                  {/* Roles grid (when available) or career text */}
                  {content.roles ? (
                    <div className="mb-10">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Where These Courses Lead</h3>
                      <p className="text-sm text-gray-500 mb-5">{content.careerOpportunities}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {content.roles.map((role: any) => (
                          <div key={role.title} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                            <p className="font-bold text-gray-900 mb-0.5">{role.title}</p>
                            <p className="text-xs font-semibold text-primary mb-2">{role.track}</p>
                            <p className="text-xs text-gray-500 leading-relaxed">{role.signal}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="mb-10">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Career Opportunities</h3>
                      <p className="text-gray-600 leading-relaxed">{content.careerOpportunities}</p>
                    </div>
                  )}

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Skills You Will Learn</h3>
                    <ul className="space-y-3">
                      {content.skillsFocus.map((skill: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600">
                          <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* FAQ section */}
            {content?.faq && (
              <section className="mt-10 bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-12">
                <h2 className="text-xl font-extrabold text-gray-900 mb-6">Common Questions</h2>
                <div className="divide-y divide-gray-100">
                  {content.faq.map((item: any) => (
                    <div key={item.q} className="py-5 first:pt-0 last:pb-0">
                      <p className="font-bold text-gray-900 mb-2">{item.q}</p>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </section>
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
