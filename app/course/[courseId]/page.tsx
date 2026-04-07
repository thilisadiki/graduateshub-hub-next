import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { courses } from '@/data/courses';
import { formatCategoryName } from '@/utils/formatters';
import CourseDetailsContent from './CourseDetailsContent';

const SITE_URL = 'https://graduateshub.co.za';

export async function generateStaticParams() {
  return courses.map(course => ({ courseId: course.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ courseId: string }> }): Promise<Metadata> {
  const { courseId } = await params;
  const course = courses.find(c => c.id === courseId);
  if (!course) return {};
  return {
    title: `${course.title} - Free Online Course`,
    description: course.description,
    alternates: { canonical: `${SITE_URL}/course/${course.id}` },
    openGraph: {
      title: `${course.title} - Free Online Course | Graduates Hub`,
      description: course.description,
      url: `${SITE_URL}/course/${course.id}`,
      images: [{ url: course.image }],
    },
  };
}

export default async function CoursePage({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = await params;
  const course = courses.find(c => c.id === courseId);
  if (!course) notFound();

  const relatedCourses = courses
    .filter(c => c.category === course.category && c.id !== courseId)
    .slice(0, 10);

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.description,
    image: course.image,
    provider: { '@type': 'Organization', name: 'Graduates Hub', sameAs: SITE_URL },
    hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'Online', courseWorkload: course.duration },
    offers: [{ '@type': 'Offer', category: 'Free', price: '0', priceCurrency: 'ZAR' }],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Categories', item: `${SITE_URL}/categories` },
      { '@type': 'ListItem', position: 3, name: formatCategoryName(course.category), item: `${SITE_URL}/category/${course.category.toLowerCase().replace(/ /g, '-')}` },
      { '@type': 'ListItem', position: 4, name: course.title },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <CourseDetailsContent course={course} relatedCourses={relatedCourses} />
    </>
  );
}
