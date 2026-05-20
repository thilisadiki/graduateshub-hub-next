import type { Metadata } from 'next';
import { Table, BarChart2, TrendingUp, Cpu, Award, Clock, Users, Star, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import GuideTemplate from '@/components/course/GuideTemplate';
import type { BenefitItem, CourseCategory, CareerPathItem, RelatedGuide, FaqItem } from '@/components/course/GuideTemplate';
import { courses as allCourses } from '@/data/courses';
import { SITE_URL, SITE_NAME } from '@/lib/seo';

const CANONICAL = `${SITE_URL}/free-excel-courses-with-certificates`;

export const metadata: Metadata = {
  title: 'Best Free Excel Courses with Certificates (2026)',
  description:
    'Boost your productivity. Free certified Microsoft Excel training covering formulas, VLOOKUP, pivot tables, macros, dashboard design, and business data analysis.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    siteName: SITE_NAME,
    title: 'Best Free Excel Courses with Certificates (2026) | Graduates Hub',
    description:
      'Boost your productivity. Free certified Microsoft Excel training covering formulas, VLOOKUP, pivot tables, macros, dashboard design, and business data analysis.',
    url: CANONICAL,
  },
};

const courseCategories: CourseCategory[] = [
  {
    label: 'Core Excel Skills & Data Analysis',
    slug: 'data-analytics',
    description: 'Master spreadsheet basics, formulas, and advanced visualization tools.',
    items: [
      {
        id: 'microsoft-excel-data-analysis',
        customContent: 'Excel is the foundational tool for business reporting and modeling across the corporate world. This course takes you from cell navigation to advanced functionalities, including nested IF functions, VLOOKUP, Pivot Tables, and charts. You will also learn to write and record macros to automate reporting workflows, saving hours of manual data cleaning.'
      },
      {
        id: 'intro-power-bi',
        customContent: 'When datasets grow too complex for spreadsheets, Power BI is the industry standard for reporting. This course teaches you how to import data from Excel tables, build interactive visualizations, and design dashboards for executive reviews. You will learn to transform raw transactional data into clear business insights.'
      }
    ]
  },
  {
    label: 'Financial Applications & Data Foundations',
    slug: 'accounting',
    description: 'Understand how numbers are organized in corporate systems and database records.',
    items: [
      {
        id: 'fundamentals-of-accounting',
        customContent: 'Financial models and budgets in Excel must follow standard corporate finance rules. This course teaches double-entry bookkeeping, general ledger postings, and the structure of balance sheets and income statements. Knowing these principles helps you build structured Excel sheets that corporate finance teams can trust.'
      },
      {
        id: 'intro-database-concepts',
        customContent: 'Before you can analyze data in spreadsheets, you must retrieve it from database systems. This course covers relational database designs, tables, keys, and data normalization. Understanding how databases store data allows you to clean up data exports, write better lookups, and import data into Excel cleanly.'
      }
    ]
  },
  {
    label: 'Business Productivity & Workflow Optimization',
    slug: 'business',
    description: 'Boost your personal output and learn standard operational efficiency frameworks.',
    items: [
      {
        id: 'time-management-for-professionals',
        customContent: 'Excel analysis requires blocks of focused time to avoid modeling mistakes. This course teaches calendar blocking, email management routines, task prioritization, and boundaries. You will learn how to eliminate distractions, prioritize analytical tasks, and meet tight business reporting deadlines.'
      },
      {
        id: 'lean-six-sigma-white-belt',
        customContent: 'Spreadsheet models are built to identify business bottlenecks and process waste. This course covers the DMAIC framework for process optimization and efficiency testing. You will learn to use Excel data to trace operational issues back to their root causes and present actionable solutions to management.'
      }
    ]
  }
];

const benefits: BenefitItem[] = [
  { icon: Table, title: 'Universal Business Skill', body: 'Virtually every white-collar job requires Excel. It is the single most valuable skill for administrative and analyst roles.' },
  { icon: Award, title: 'Employer-Ready Certs', body: 'Earn accredited certificates showing you have mastered advanced features like pivot tables and macros.' },
  { icon: Clock, title: '100% Self-Paced', body: 'Complete modules on your own schedule. Build confidence with spreadsheet software at your own pace.' },
  { icon: BarChart2, title: 'Data Visualization', body: 'Learn to build professional charts, graphs, and executive dashboards that tell a story.' },
  { icon: TrendingUp, title: 'Financial Modeling', body: 'Build structured budgets, forecast models, and financial statements with absolute precision.' },
  { icon: Star, title: 'Practical Exercises', body: 'Every course includes real datasets and spreadsheets to ensure you build hands-on competency.' }
];

const careerPaths: CareerPathItem[] = [
  { role: 'Business Reporting Coordinator', category: 'Operations', href: '/category/business' },
  { role: 'Financial Assistant', category: 'Finance', href: '/category/accounting' },
  { role: 'Data Analytics Assistant', category: 'Data Analysis', href: '/category/data-analytics' },
  { role: 'Administrative Assistant', category: 'Office Admin', href: '/category/business' }
];

const relatedGuides: RelatedGuide[] = [
  { title: 'Free Courses for Data Analysts (2026)', desc: 'Combine Excel with SQL, Python, and Power BI to build a full data analytics toolkit.', href: '/free-courses-for-data-analysts' },
  { title: 'Free Courses for Accounting & Finance (2026)', desc: 'Learn bookkeeping, payroll, and auditing to apply your spreadsheet skills in finance.', href: '/free-courses-for-accounting-and-finance' },
  { title: 'Free Business Courses Online (2026)', desc: 'Develop project management, Agile workflows, and operational efficiency credentials.', href: '/free-business-courses' }
];

const faqs: FaqItem[] = [
  { q: 'What is the most important Excel skill for landing a job?', a: 'When hiring managers ask for "strong Excel skills," they typically look for three things: writing nested formulas (using functions like VLOOKUP, INDEX/MATCH, and IF), building Pivot Tables to summarize large datasets, and basic data cleaning. This guide covers all of these.' },
  { q: 'Are these free Excel certificates recognized by employers?', a: 'Yes. The certificates are CPD-accredited and serve as verifiable proof on your CV that you have invested time in mastering spreadsheet software. South African employers highly value practical competency, which you can show in interviews by explaining the models you have built.' },
  { q: 'Can I learn advanced Excel if I am a complete beginner?', a: 'Yes. The Microsoft Excel for Data Analysis course starts with basic navigation, entering data, and column management before gradually introducing formulas and pivot tables. No prior spreadsheet experience is required.' }
];

const exploreCategories = [
  { label: 'Data Analytics', href: '/category/data-analytics' },
  { label: 'Accounting & Finance', href: '/category/accounting' },
  { label: 'Business & Management', href: '/category/business' }
];

export default function FreeExcelCoursesPage() {
  const featuredIds = courseCategories.flatMap((cat) => {
    if (cat.ids) return cat.ids;
    if (cat.items) return cat.items.map((i) => i.id);
    return [];
  });
  
  const relatedCourses = allCourses
    .filter((c) => (c.category.includes('Data Analytics') || c.category.includes('Accounting')) && !featuredIds.includes(c.id))
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 12);

  return (
    <GuideTemplate
      canonicalUrl={CANONICAL}
      breadcrumb={[{ label: 'Free Excel Courses' }]}
      heading="Best Free Excel Courses with Certificates (2026)"
      heroDescription="Master formulas, Pivot Tables, VLOOKUP, macros, and business reports. Acquire the core data productivity credential required for finance, marketing, administrative, and analyst roles."
      heroBadges={[
        { icon: Table, label: '100% Free Spreadsheets', iconClassName: 'text-primary' },
        { icon: Award, label: 'CPD Certificates Included', iconClassName: 'text-emerald-500' },
        { icon: Clock, label: 'Learn at Your Own Pace' }
      ]}
      authors={['ndulamiso']}
      lastUpdated="May 2026"
      benefitsSectionTitle="Unlock Career Opportunities with Excel"
      benefitsSectionSubtitle="Almost every business department runs on spreadsheets. Mastering Excel is the fastest way to add immediate value to any corporate team."
      benefits={benefits}
      courseCategories={courseCategories}
      relatedCourses={relatedCourses}
      carouselTitle="Complementary Analyst & Finance Courses"
      carouselSubtitle="Broaden your skill set with these top free learning paths"
      careerPathsTitle="Where This Training Can Lead You"
      careerPathsSubtitle="These courses align directly with roles in high demand across the South African corporate market."
      careerPaths={careerPaths}
      relatedGuides={relatedGuides}
      exploreCategories={exploreCategories}
      faqs={faqs}
      ctaHeading="Upgrade Your Data Productivity Today"
      ctaBody="Start with Microsoft Excel for Data Analysis. Gain the practical skills that make you immediately productive in any business environment."
      ctaPrimaryLabel="View Analytics Courses"
      ctaPrimaryHref="/category/data-analytics"
      ctaSecondaryLabel="Build Your Portfolio"
      ctaSecondaryHref="/portfolio"
    />
  );
}
