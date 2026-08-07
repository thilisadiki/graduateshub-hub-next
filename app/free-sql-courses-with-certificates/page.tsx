import type { Metadata } from 'next';
import { Database, Table, Layers, Cpu, Award, Clock, Star, Terminal, CheckCircle2 } from 'lucide-react';
import GuideTemplate from '@/components/course/GuideTemplate';
import type { BenefitItem, CourseCategory, CareerPathItem, RelatedGuide, FaqItem } from '@/components/course/GuideTemplate';
import { courses as allCourses } from '@/data/courses';
import { SITE_URL, SITE_NAME } from '@/lib/seo';

const CANONICAL = `${SITE_URL}/free-sql-courses-with-certificates`;

export const metadata: Metadata = {
  title: 'Best Free SQL & Database Courses with Certificates (2026)',
  description:
    'Master SQL database querying. Free certified courses covering relational databases (PostgreSQL, MySQL, SQL Server), multi-table JOINs, Window Functions, CTEs, and schema design.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    siteName: SITE_NAME,
    title: 'Best Free SQL & Database Courses with Certificates (2026) | Graduates Hub',
    description:
      'Learn SQL database querying, complex JOINs, aggregation functions, subqueries, and database optimization with free certified courses.',
    url: CANONICAL,
  },
};

const courseCategories: CourseCategory[] = [
  {
    label: 'SQL Querying Fundamentals & Data Extraction',
    slug: 'data-analytics',
    description: 'Master SELECT statements, WHERE filtering, GROUP BY aggregations, and HAVING clauses.',
    items: [
      {
        id: 'intro-database-concepts',
        customContent: 'SQL (Structured Query Language) is the universal language for pulling data from databases. This course introduces relational database concepts, primary/foreign keys, SELECT queries, WHERE filters, ORDER BY sorting, and aggregate functions (COUNT, SUM, AVG). You will learn how to extract structured dataset views to answer business questions.',
      },
    ],
  },
  {
    label: 'Advanced SQL: JOINs, Window Functions & CTEs',
    slug: 'data-analytics',
    description: 'Learn multi-table INNER/LEFT/RIGHT JOINs, Common Table Expressions (CTEs), and analytical Window Functions.',
    items: [
      {
        id: 'intro-database-concepts',
        customContent: 'Real-world enterprise data is normalized across dozens of related tables. This module covers multi-table JOIN logic, handling NULL values with COALESCE, writing nested subqueries, and leveraging Window Functions (ROW_NUMBER, RANK, LAG/LEAD) for advanced time-series and cohort analysis.',
      },
    ],
  },
  {
    label: 'Database Administration & Schema Design',
    slug: 'information-technology',
    description: 'Understand Database Definition Language (DDL), index optimization, and database security audits.',
    items: [
      {
        id: 'management-information-systems',
        customContent: 'Databases require careful schema design and index maintenance to handle high-traffic workloads. This course covers DDL commands (CREATE, ALTER, DROP), ER diagrams, normalization (1NF to 3NF), and index tuning to speed up slow queries.',
      },
    ],
  },
];

const benefits: BenefitItem[] = [
  { icon: Database, title: 'Universal Querying Skills', body: 'Master ANSI SQL syntax applicable across PostgreSQL, MySQL, SQL Server, BigQuery, and Snowflake.' },
  { icon: Award, title: 'CPD Accredited Certificates', body: 'Earn verifiable digital certificates to attach to your CV and showcase on LinkedIn.' },
  { icon: Clock, title: '100% Free & Self-Paced', body: 'Study on your own schedule. Build your database foundation without expensive bootcamp fees.' },
  { icon: Table, title: 'Complex JOINs & Aggregations', body: 'Learn multi-table INNER, LEFT, RIGHT, and FULL OUTER JOINs with GROUP BY logic.' },
  { icon: Layers, title: 'Window Functions & CTEs', body: 'Master analytical functions: ROW_NUMBER, RANK, DENSE_RANK, LAG/LEAD, and WITH clause CTEs.' },
  { icon: Terminal, title: 'Query Optimization', body: 'Understand EXPLAIN ANALYZE execution plans, indexing strategies, and database performance.' },
];

const careerPaths: CareerPathItem[] = [
  { role: 'Data Analyst', category: 'Data & Analytics', href: '/portfolio-tasks/data-analytics' },
  { role: 'Database Administrator', category: 'Database Systems', href: '/portfolio-tasks/information-technology' },
  { role: 'Backend Software Developer', category: 'Software Development', href: '/portfolio-tasks/software-development' },
  { role: 'Business Intelligence Analyst', category: 'BI & Reporting', href: '/portfolio-tasks/data-analytics' },
];

const relatedGuides: RelatedGuide[] = [
  { title: 'Free Courses for Data Analysts (2026)', desc: 'Learn SQL, Excel, Python, and Power BI in one structured learning path.', href: '/free-courses-for-data-analysts' },
  { title: 'Microsoft Power BI Data Analyst Guide (2026)', desc: 'Master PL-300 Power Query ETL, STAR schema modeling, DAX measures, and dashboards.', href: '/microsoft-power-bi-data-analyst-guide' },
  { title: 'Free Python Courses with Certificates (2026)', desc: 'Python programming syntax, pandas data manipulation, and database connectors.', href: '/free-python-courses-with-certificates' },
];

const faqs: FaqItem[] = [
  { q: 'Is SQL difficult to learn for complete beginners?', a: 'No! SQL is one of the most accessible computer languages because its syntax closely mirrors plain English (e.g., SELECT column FROM table WHERE condition). Most beginners write functional queries within their first 2 hours.' },
  { q: 'Which SQL dialect should I learn first?', a: 'Standard ANSI SQL syntax is virtually identical across PostgreSQL, MySQL, SQL Server, SQLite, and Google BigQuery. We recommend starting with PostgreSQL or MySQL as they are widely used in modern tech companies.' },
  { q: 'Are these SQL courses completely free with certificates?', a: 'Yes! Learning and completing the assessments on Graduates Hub is 100% free. You can download a digital certificate upon passing to prove your database skills to recruiters.' },
];

const exploreCategories = [
  { label: 'Data Analytics', href: '/portfolio-tasks/data-analytics' },
  { label: 'Software Development', href: '/portfolio-tasks/software-development' },
  { label: 'IT & Infrastructure', href: '/portfolio-tasks/information-technology' },
];

export default function FreeSQLCoursesPage() {
  const featuredIds = courseCategories.flatMap((cat) => {
    if (cat.ids) return cat.ids;
    if (cat.items) return cat.items.map((i) => i.id);
    return [];
  });

  const relatedCourses = allCourses
    .filter((c) => c.category.includes('Data') && !featuredIds.includes(c.id))
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 12);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GuideTemplate
        canonicalUrl={CANONICAL}
        breadcrumb={[{ label: 'Free SQL Courses' }]}
        heading="Best Free SQL & Database Courses with Certificates (2026)"
        heroDescription="Master database querying. Learn SQL DDL/DML syntax, multi-table JOINs, Window Functions, CTEs, aggregation queries, and query performance optimization."
        heroBadges={[
          { icon: Database, label: '100% Free to Study', iconClassName: 'text-primary' },
          { icon: Award, label: 'CPD Accredited Certificates', iconClassName: 'text-emerald-500' },
          { icon: Clock, label: 'Self-Paced Learning' },
        ]}
        authors={['jason']}
        benefitsSectionTitle="Why Master SQL & Database Management?"
        benefitsSectionSubtitle="SQL is the single most requested technical skill across Data Analytics, Software Development, and IT Operations job postings worldwide."
        benefits={benefits}
        courseCategories={courseCategories}
        relatedCourses={relatedCourses}
        carouselTitle="Related Data & Analytics Courses"
        carouselSubtitle="Broaden your data engineering and analysis capabilities with free learning paths"
        careerPathsTitle="Where This SQL Training Can Lead You"
        careerPathsSubtitle="These courses align directly with technical roles in high demand."
        careerPaths={careerPaths}
        relatedGuides={relatedGuides}
        exploreCategories={exploreCategories}
        faqs={faqs}
        ctaHeading="Accelerate Your Data Career with SQL"
        ctaBody="Start querying databases today. Build the query library and database credentials that recruiters look for on graduate resumes."
        ctaPrimaryLabel="Explore Data Portfolio Briefs"
        ctaPrimaryHref="/portfolio-tasks/data-analytics"
        ctaSecondaryLabel="View Data Analyst Roadmap"
        ctaSecondaryHref="/career-roadmaps/data-analyst"
      />
    </div>
  );
}
