import type { Metadata } from 'next';
import Link from 'next/link';
import { Unlock, Clock, Globe } from 'lucide-react';
import Hero from '@/components/Hero';
import CourseCard from '@/components/CourseCard';
import HowItWorks from '@/components/HowItWorks';
import CourseCarousel from '@/components/CourseCarousel';
import NewsletterBanner from '@/components/NewsletterBanner';
import Testimonials from '@/components/Testimonials';
import LatestArticles from '@/components/LatestArticles';
import FAQ from '@/components/FAQ';
import { courses } from '@/data/courses';

const SITE_URL = 'https://graduateshub.co.za';

export const metadata: Metadata = {
  title: 'Free Online Courses with Certificates & Diplomas | Graduates Hub',
  description: 'Empowering learners worldwide to achieve their goals with completely free, high-quality online education across IT, Business, Languages, and more.',
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    title: 'Free Online Courses with Certificates & Diplomas | Graduates Hub',
    description: 'Empowering learners worldwide to achieve their goals with completely free, high-quality online education across IT, Business, Languages, and more.',
    url: `${SITE_URL}/`,
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Graduates Hub',
  url: SITE_URL,
  logo: `${SITE_URL}/graduates-hub-logo.png`,
  description: 'Empowering learners worldwide with 100% free, high-quality online education.',
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Graduates Hub',
  url: SITE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export default function Home() {
  const featuredCourses = courses.filter(c => c.featured).slice(0, 6);
  const carouselCourses = courses.filter(c => !c.featured).slice(0, 10);

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: featuredCourses.map((course, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Course',
        name: course.title,
        description: course.description,
        provider: { '@type': 'Organization', name: 'Alison', sameAs: 'https://alison.com' },
        hasCourseInstance: {
          '@type': 'CourseInstance',
          courseMode: 'online',
          duration: `PT${parseInt(course.duration.split('-')[0])}H`,
        },
      },
    })),
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <Hero />
      <main className="flex-grow max-w-6xl mx-auto px-6 py-16 w-full">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">Featured Courses</h2>
            <p className="text-gray-500 mt-2">Start learning today with these top-rated selections.</p>
          </div>
          <Link href="/categories" className="text-primary font-bold hover:text-blue-800 transition-colors hidden sm:block">
            View All Categories →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link href="/categories" className="inline-block bg-white border-2 border-primary text-primary font-bold px-8 py-3 rounded-lg w-full hover:bg-blue-50 transition-colors">
            View All Categories
          </Link>
        </div>

        <div className="mt-16"><LatestArticles /></div>
        <div className="mt-24"><HowItWorks /></div>
        <div className="mt-16"><Testimonials /></div>
        <div className="mt-16"><CourseCarousel courses={carouselCourses} /></div>
        <div className="mt-12"><NewsletterBanner /></div>

        <div className="mt-20 border-t border-gray-100 pt-12 pb-4 text-center">
          <h3 className="text-lg md:text-xl font-bold text-slate-600 mb-10">Access Curriculum from Top Global Institutions</h3>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-8 md:h-10 object-contain" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://upload.wikimedia.org/wikipedia/en/2/2b/University_of_Cambridge_logo.svg" alt="University of Cambridge" className="h-10 md:h-12 object-contain" />
            <span className="text-3xl md:text-4xl tracking-tighter" style={{ fontFamily: 'Georgia, serif', color: '#8C1515', fontWeight: 'bold' }}>Stanford</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM" className="h-8 md:h-10 object-contain" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" alt="Microsoft" className="h-8 md:h-9 object-contain" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5d/MIT_logo_2003-2023.svg" alt="MIT" className="h-8 md:h-10 object-contain" />
          </div>
        </div>

        <div className="mt-24 bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100 flex flex-col lg:flex-row gap-12 items-start lg:items-center justify-between">
          <div className="lg:w-1/4 shrink-0">
            <h2 className="text-2xl font-extrabold text-gray-900">Why Choose These Courses?</h2>
          </div>
          <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="flex flex-col items-center text-center">
              <Unlock className="text-slate-400 mb-4" size={36} strokeWidth={1.5} />
              <h3 className="font-bold text-gray-800 mb-2">100% Free to Learn</h3>
              <p className="text-gray-500 text-sm">Top tier courses with unlimited access at no cost.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Clock className="text-slate-400 mb-4" size={36} strokeWidth={1.5} />
              <h3 className="font-bold text-gray-800 mb-2">Self-Paced</h3>
              <p className="text-gray-500 text-sm">Learn on your own schedule. Study anytime, anywhere.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Globe className="text-slate-400 mb-4" size={36} strokeWidth={1.5} />
              <h3 className="font-bold text-gray-800 mb-2">Global Recognition</h3>
              <p className="text-gray-500 text-sm">Earn certificates & diplomas recognized worldwide.</p>
            </div>
          </div>
        </div>

        <div className="mt-24"><FAQ /></div>
      </main>
    </div>
  );
}
