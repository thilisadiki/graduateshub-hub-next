import type { Metadata } from 'next';
import Link from 'next/link';
import { courses } from '@/data/courses';
import { categories } from '@/data/categories';
import CourseCarousel from '@/components/CourseCarousel';
import NewsletterBanner from '@/components/NewsletterBanner';

const SITE_URL = 'https://graduateshub.co.za';

export const metadata: Metadata = {
  title: 'All Course Categories | Free Online Learning',
  description: 'Explore our wide range of free online courses. Choose a category to find the perfect course for your career goals.',
  alternates: { canonical: `${SITE_URL}/categories` },
  openGraph: {
    title: 'All Course Categories | Free Online Learning | Graduates Hub',
    description: 'Explore our wide range of free online courses. Choose a category to find the perfect course for your career goals.',
    url: `${SITE_URL}/categories`,
  },
};

export default function CategoriesPage() {
  const diplomaCourses = courses.filter(c => c.tag === 'Diploma').sort((a, b) => b.rating - a.rating).slice(0, 10);
  const certificateCourses = courses.filter(c => c.tag === 'Certificate').sort((a, b) => b.rating - a.rating).slice(0, 10);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="bg-blue-50 border-b border-blue-100 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Explore All Subjects</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Discover our comprehensive range of 100% free online courses. Choose a category below to find the perfect program to advance your career goals.
          </p>
        </div>
      </div>

      <main className="flex-grow max-w-6xl mx-auto px-6 py-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(item => {
            const Icon = item.icon;
            const searchTerm = item.name.replace(' Courses', '');
            const courseCount = courses.filter(c => c.category.includes(item.name) || c.category.includes(searchTerm)).length;
            return (
              <Link href={`/category/${item.id}`} key={item.id} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 group text-center flex flex-col items-center relative">
                <div className="bg-blue-50 text-primary p-4 rounded-full mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon size={32} />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h2>
                <p className="text-sm text-gray-500 mb-4">{item.description}</p>
                <div className="mt-auto">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-800 transition-colors">
                    {courseCount > 0 ? `${courseCount} Courses Available` : 'New Courses Coming Soon'}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-20">
          <CourseCarousel courses={diplomaCourses} title="Top Diplomas" subtitle="Master a subject comprehensively and boost your career prospects" />
        </div>
        <div className="mt-12">
          <CourseCarousel courses={certificateCourses} title="Top Certificates" subtitle="Gain focused, practical skills in a short amount of time" />
        </div>
      </main>
      <NewsletterBanner />
    </div>
  );
}
