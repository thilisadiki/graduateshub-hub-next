import type { Metadata } from 'next';
import { courses } from '@/data/courses';
import { formatCategoryName } from '@/utils/formatters';
import { categoryContent } from '@/data/categoryContent';
import CategoryContent from './CategoryContent';

const SITE_URL = 'https://www.graduateshub.co.za';

const availableCategories = [
  'it', 'software-engineering', 'business', 'accounting', 'marketing',
];

export async function generateStaticParams() {
  return availableCategories.map(id => ({ categoryId: id }));
}

const CATEGORY_META: Record<string, { title: string; description: string }> = {
  it: {
    title: 'Free IT Courses Online (2026): Networking, Cybersecurity & AI | Graduates Hub',
    description: 'Browse 15 free IT courses across Networking, Cybersecurity, Database, AI, and Engineering tracks. CPD-accredited certificates and diplomas. No prior experience required.',
  },
  'software-engineering': {
    title: 'Free Software Engineering Courses Online (2026): Web Dev, AI & More | Graduates Hub',
    description: 'Browse 48 free software engineering courses across web development, AI and machine learning, agile and DevOps, testing and QA, programming languages, and systems architecture. CPD-accredited. Beginner-friendly.',
  },
  marketing: {
    title: 'Free Marketing Courses Online (2026): Digital, Social Media & SEO | Graduates Hub',
    description: 'Browse 11 free marketing courses covering Digital Marketing, Social Media Strategy, and Content & SEO. Earn CPD-accredited certificates and diplomas. No experience required.',
  },
  accounting: {
    title: 'Free Accounting Courses Online (2026): Bookkeeping, Payroll & Finance | Graduates Hub',
    description: 'Browse 17 free accounting courses across Bookkeeping, Financial Accounting, Financial Management, and Compliance. CPD-accredited certificates and diplomas. Curated by a SARS tax professional.',
  },
  business: {
    title: 'Free Business Courses Online (2026): Project Management, Lean Six Sigma & More | Graduates Hub',
    description: 'Browse 12 free business courses covering Project Management, Lean Six Sigma, GDPR, and Economic Strategy. CPD-accredited certificates and diplomas. No experience required.',
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
