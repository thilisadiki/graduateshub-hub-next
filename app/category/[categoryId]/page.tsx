import type { Metadata } from 'next';
import { courses } from '@/data/courses';
import { formatCategoryName } from '@/utils/formatters';
import { categoryContent } from '@/data/categoryContent';
import CategoryContent from './CategoryContent';

const SITE_URL = 'https://graduateshub.co.za';

const availableCategories = [
  'it', 'software-engineering', 'business', 'accounting', 'marketing', 'management',
];

export async function generateStaticParams() {
  return availableCategories.map(id => ({ categoryId: id }));
}

const CATEGORY_META: Record<string, { title: string; description: string }> = {
  it: {
    title: 'Free IT Courses Online (2026): Software, Networking & Cybersecurity | Graduates Hub',
    description: 'Browse 59 free IT courses across Software Engineering, Networking, Cybersecurity, AI, and Database tracks. Earn CPD-accredited certificates and diplomas with no prior experience required.',
  },
};

export async function generateMetadata({ params }: { params: Promise<{ categoryId: string }> }): Promise<Metadata> {
  const { categoryId } = await params;
  const categoryName = formatCategoryName(categoryId);
  const custom = CATEGORY_META[categoryId];
  return {
    title: custom?.title ?? `Free Online ${categoryName} Courses (2026) | Graduates Hub`,
    description: custom?.description ?? `Browse completely free, high-quality online ${categoryName} courses leading to CPD-accredited certificates and diplomas.`,
    alternates: { canonical: `${SITE_URL}/category/${categoryId}` },
    openGraph: {
      title: custom?.title ?? `Free Online ${categoryName} Courses | Graduates Hub`,
      description: custom?.description ?? `Browse completely free, high-quality online ${categoryName} courses leading to CPD-accredited certificates and diplomas.`,
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

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'All Categories', item: `${SITE_URL}/categories` },
      { '@type': 'ListItem', position: 3, name: `${categoryName} Courses`, item: `${SITE_URL}/category/${categoryId}` },
    ],
  };

  const content = (categoryContent as any)[categoryId];
  const faqSchema = content?.faq ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faq.map((item: { q: string; a: string }) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      <CategoryContent categoryId={categoryId} categoryName={categoryName} categoryCourses={categoryCourses} />
    </>
  );
}
