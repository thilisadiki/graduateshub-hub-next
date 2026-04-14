'use client';
import { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import CourseCard from '@/components/course/CourseCard';
import AIToolsBanner from '@/components/home/AIToolsBanner';
import { courses } from '@/data/courses';

const POPULAR_TOPICS = [
  'Python', 'Excel', 'Marketing', 'Leadership', 'English',
  'Accounting', 'Web Development', 'Project Management', 'Health', 'Data Science',
  'Artificial Intelligence',
];

const TIPS = [
  {
    icon: '🎯',
    title: 'Define your goal first',
    body: 'Knowing whether you want a career change, a promotion, or a new hobby helps you pick the right course format: a short certificate or a comprehensive diploma.',
  },
  {
    icon: '⏱️',
    title: 'Check the time commitment',
    body: 'Most free courses are self-paced, so you can fit learning around your schedule. Look at the estimated hours before you enrol to set realistic expectations.',
  },
  {
    icon: '📜',
    title: 'Look for recognised certificates',
    body: 'A recognised certificate adds credibility to your CV. Our courses come with verifiable certificates you can share on LinkedIn or attach to job applications.',
  },
];

const FAQS = [
  {
    q: 'Are all the courses on Graduates Hub really free?',
    a: 'Yes. Every course listed on Graduates Hub is 100% free of charge. There are no hidden fees, subscription charges, or paywalls. Simply create an account and start learning immediately.',
  },
  {
    q: 'Will I receive a certificate after completing a course?',
    a: 'Most courses include a free certificate of completion that you can download, share on LinkedIn, or attach to your CV to showcase your new skills to employers.',
  },
  {
    q: 'How long do the courses take to complete?',
    a: 'Course duration varies. Short certificate courses can be completed in a few hours, while diploma programmes may take several weeks. All courses are self-paced, so you can learn at your own speed without any deadlines.',
  },
  {
    q: 'What subjects are available on Graduates Hub?',
    a: 'We cover a wide range of subjects including IT & Coding, Business & Management, Accounting & Finance, Digital Marketing & SEO, Health & Wellness, Languages, and Personal Development, with new courses added regularly.',
  },
  {
    q: 'Do I need any prior experience to start a course?',
    a: 'Most of our courses are beginner-friendly and require no prior knowledge. Each course page clearly describes any prerequisites so you can choose the right starting point for your level.',
  },
];

export default function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get('q') || '';
  const [visibleCount, setVisibleCount] = useState(9);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const words = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  const phrase = query.toLowerCase().trim();

  const scoreAndFilter = (course: typeof courses[number]) => {
    const title = course.title.toLowerCase();
    const subCat = (course.subCategory ?? '').toLowerCase();
    const desc = course.description.toLowerCase();
    const longDesc = (course.longDescription ?? '').toLowerCase();
    const careerPath = (course.careerPath ?? '').toLowerCase();
    const targetAudience = (course.targetAudience ?? '').toLowerCase();
    const category = course.category.toLowerCase();

    const searchableText = [title, subCat, desc, longDesc, careerPath, targetAudience, category].join(' ');

    // Must match all words somewhere across all fields
    if (!words.every(word => searchableText.includes(word))) return null;

    let score = 0;
    if (title.includes(phrase)) score += 100;
    if (words.every(w => title.includes(w))) score += 60;
    if (subCat.includes(phrase)) score += 40;
    if (words.every(w => subCat.includes(w))) score += 25;
    if (desc.includes(phrase)) score += 20;
    if (words.every(w => desc.includes(w))) score += 12;
    if (longDesc.includes(phrase)) score += 8;
    if (careerPath.includes(phrase)) score += 6;
    if (targetAudience.includes(phrase)) score += 4;
    // Bonus: each individual word match in title
    words.forEach(w => { if (title.includes(w)) score += 10; });

    return score;
  };

  const filteredCourses = courses
    .map(course => ({ course, score: scoreAndFilter(course) }))
    .filter(({ score }) => score !== null)
    .sort((a, b) => (b.score ?? 0) - (a.score ?? 0))
    .map(({ course }) => course);

  const relatedCourses = filteredCourses.length === 0
    ? [...courses].sort(() => 0.5 - Math.random()).slice(0, 3)
    : [];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero */}
      <div className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold">
            Search <span className="text-primary">Results</span>
          </h1>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            {query
              ? <>Showing results for: <span className="font-semibold text-white">"{query}"</span></>
              : 'Browse our full library of free online courses'}
          </p>
        </div>
      </div>

      {/* Popular Topics */}
      <div className="bg-white border-b border-gray-100 py-5 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-gray-500 font-medium mb-3">Popular topics:</p>
          <div className="flex flex-wrap gap-2">
            {POPULAR_TOPICS.map(topic => (
              <button
                key={topic}
                onClick={() => router.push(`/search?q=${encodeURIComponent(topic)}`)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                  query.toLowerCase() === topic.toLowerCase()
                    ? 'bg-primary text-white border-primary'
                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-primary hover:text-primary'
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="flex-grow max-w-6xl mx-auto px-6 py-16 w-full">

        {/* ── WITH QUERY: results first ── */}
        {query && (
          <div className="mb-20">
            {filteredCourses.length > 0 ? (
              <>
                <p className="text-gray-600 font-medium mb-8">Found {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''} for <span className="font-bold text-gray-900">"{query}"</span></p>
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
                    Browse our full catalog of free courses across all subject areas.
                  </p>
                  <Link href="/categories" className="bg-primary hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-md">
                    Browse All Categories
                  </Link>
                </div>
              </>
            ) : (
              <div className="flex flex-col gap-16">
                <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-100 p-8 max-w-3xl mx-auto w-full">
                  <div className="text-6xl mb-6">🔍</div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">We didn't find "{query}" in our curated hub</h2>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto text-lg">
                    Let our AI tools help you find something great, or browse our subject areas below.
                  </p>
                  <Link href="/categories" className="bg-primary hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-bold transition-colors shadow-md">
                    Browse All Categories
                  </Link>
                </div>
                {relatedCourses.length > 0 && (
                  <div>
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
          </div>
        )}

        {/* How to Choose a Course */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">How to Choose the Right Course</h2>
          <p className="text-gray-500 mb-8">Three simple things to check before you enrol in any free online course.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TIPS.map(tip => (
              <div key={tip.title} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <div className="text-3xl mb-3">{tip.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{tip.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-blue-50 border border-blue-100 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-700 font-medium">Looking for more guidance? Visit our free learning resource blog for career tips and study advice.</p>
            <Link href="/blog" className="shrink-0 text-primary font-bold hover:text-blue-800 transition-colors whitespace-nowrap">
              Read our articles →
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h2>
          <p className="text-gray-500 mb-8">Everything you need to know about learning for free on Graduates Hub.</p>
          <div className="divide-y divide-gray-100 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            {FAQS.map((faq, i) => (
              <div key={i}>
                <button
                  className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-gray-900">{faq.q}</span>
                  <span className="text-gray-400 text-xl flex-shrink-0">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed text-sm">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* AI Tools Banner */}
        <div className="mt-20"><AIToolsBanner /></div>

      </main>
    </div>
  );
}
