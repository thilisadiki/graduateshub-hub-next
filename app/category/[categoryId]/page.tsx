import type { Metadata } from 'next';
import { courses } from '@/data/courses';
import { formatCategoryName } from '@/utils/formatters';
import CategoryContent from './CategoryContent';

const SITE_URL = 'https://graduateshub.co.za';

const availableCategories = [
  'it', 'software-engineering', 'language', 'business',
  'accounting', 'marketing', 'management', 'health', 'personal-development',
];

export async function generateStaticParams() {
  return availableCategories.map(id => ({ categoryId: id }));
}

export async function generateMetadata({ params }: { params: Promise<{ categoryId: string }> }): Promise<Metadata> {
  const { categoryId } = await params;
  const categoryName = formatCategoryName(categoryId);
  return {
    title: `Free Online ${categoryName} Courses`,
    description: `Browse our completely free, high-quality online ${categoryName} courses leading to certificates and diplomas.`,
    alternates: { canonical: `${SITE_URL}/category/${categoryId}` },
    openGraph: {
      title: `Free Online ${categoryName} Courses | Graduates Hub`,
      description: `Browse our completely free, high-quality online ${categoryName} courses leading to certificates and diplomas.`,
      url: `${SITE_URL}/category/${categoryId}`,
    },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ categoryId: string }> }) {
  const { categoryId } = await params;
  const categoryName = formatCategoryName(categoryId);

  const categoryCourses = courses.filter(course =>
    course.category.toLowerCase().includes(categoryName.toLowerCase()) ||
    categoryName.toLowerCase().includes(course.category.toLowerCase())
  );

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: categoryCourses.slice(0, 9).map((course, index) => ({
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
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <CategoryContent categoryId={categoryId} categoryName={categoryName} categoryCourses={categoryCourses} />
    </>
  );
}
