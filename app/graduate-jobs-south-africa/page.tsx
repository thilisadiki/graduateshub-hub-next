import type { Metadata } from 'next';
import { Briefcase, TrendingUp, Award, Clock, CheckCircle2, Building, DollarSign, Target, Sparkles } from 'lucide-react';
import GuideTemplate from '@/components/course/GuideTemplate';
import type { BenefitItem, CourseCategory, CareerPathItem, RelatedGuide, FaqItem } from '@/components/course/GuideTemplate';
import { courses as allCourses } from '@/data/courses';
import { SITE_URL, SITE_NAME } from '@/lib/seo';

const CANONICAL = `${SITE_URL}/graduate-jobs-south-africa`;

export const metadata: Metadata = {
  title: 'Graduate Jobs & Opportunities in South Africa (2026 Guide)',
  description:
    'Complete guide to finding graduate jobs in South Africa. Explore entry-level graduate opportunities across finance, tech, engineering, and marketing with salary benchmarks and application intake dates.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    siteName: SITE_NAME,
    title: 'Graduate Jobs & Opportunities in South Africa (2026 Guide) | Graduates Hub',
    description:
      'Land your first graduate job in South Africa. Discover top corporate graduate hiring calendars, entry-level salary ranges, ATS CV tips, and skill pathways.',
    url: CANONICAL,
  },
};

const courseCategories: CourseCategory[] = [
  {
    label: 'High-Demand Graduate Sectors in South Africa',
    slug: 'business',
    description: 'Explore the key industries hiring university and TVET graduates across Johannesburg, Cape Town, Durban, and Pretoria.',
    ids: ['diploma-project-management', 'agile-project-management', 'diploma-financial-management-managers'],
  },
  {
    label: 'Technical & Software Engineering Graduate Roles',
    slug: 'it',
    description: 'Essential software development, data analytics, and cloud computing courses to make your CV stand out to SA tech recruiters.',
    ids: ['computer-networking', 'diploma-in-it-management'],
  },
  {
    label: 'Accounting, Banking & Financial Services',
    slug: 'accounting',
    description: 'Prepare for graduate finance programs at SA financial institutions with practical bookkeeping, Xero, and management accounting skills.',
    ids: ['diploma-effective-bookkeeping-payroll', 'accounts-management-xero'],
  },
];

const relatedCourses = allCourses.slice(0, 6);

const benefits: BenefitItem[] = [
  {
    icon: Target,
    title: 'Structured Application Intake Calendars',
    body: 'Understand South Africa major graduate recruitment cycles (March to May for main intakes, July to September for mid-year windows).',
  },
  {
    icon: DollarSign,
    title: 'Transparent SA Salary Benchmarks',
    body: 'Benchmark entry-level graduate salaries across commercial banking, IT development, retail, management consulting, and engineering.',
  },
  {
    icon: Briefcase,
    title: 'ATS-Optimised CV Formats',
    body: 'Learn how South African corporate talent acquisition teams screen graduate resumes and how to highlight academic projects and certs.',
  },
  {
    icon: Sparkles,
    title: 'Proof-of-Work Portfolio Advantage',
    body: 'Stand out from thousands of applicant degrees by showcasing real-world practical portfolio tasks alongside your qualifications.',
  },
];

const careerPaths: CareerPathItem[] = [
  {
    role: 'Graduate Data Analyst',
    detail: 'Transform raw business data into actionable commercial insights. Average SA Starting Salary: R240,000 to R420,000 per year. Recommended Skills: SQL, Excel, Power BI.',
  },
  {
    role: 'Graduate Software Developer',
    detail: 'Build web applications, back-end APIs, and mobile platforms. Average SA Starting Salary: R280,000 to R480,000 per year. Recommended Skills: JavaScript, Python, Git.',
  },
  {
    role: 'Junior Financial Accountant',
    detail: 'Manage corporate ledgers, tax compliance, and financial reporting. Average SA Starting Salary: R220,000 to R380,000 per year. Recommended Skills: Financial Modeling, Xero, IFRS.',
  },
  {
    role: 'Graduate Operations Specialist',
    detail: 'Optimize supply chains, project workflows, and business processes. Average SA Starting Salary: R200,000 to R350,000 per year. Recommended Skills: Agile/Scrum, Process Mapping.',
  },
];

const relatedGuides: RelatedGuide[] = [
  {
    href: '/graduate-internships-south-africa',
    title: 'Graduate Internships in South Africa (2026)',
    desc: 'Explore SETA-funded internships, YES Youth placements, and stipend expectations across SA.',
  },
  {
    href: '/graduate-trainee-programmes-south-africa',
    title: 'Graduate Trainee Programmes in South Africa (2026)',
    desc: 'Breakdown of corporate GDP rotational programs at top banks, tech hubs, and state enterprises.',
  },
  {
    href: '/first-graduate-job-south-africa',
    title: 'How to Get Your First Graduate Job in SA',
    desc: 'Step-by-step framework for SA graduates: fixing CVs, closing skills gaps, and interview prep.',
  },
  {
    href: '/free-courses-with-certificates',
    title: 'Free Online Courses with Free Certificates',
    desc: 'Top-rated courses to add verifiable credentials to your CV before applying for graduate jobs.',
  },
];

const faqs: FaqItem[] = [
  {
    q: 'When do graduate job applications open in South Africa?',
    a: 'Most corporate graduate development programs in South Africa open applications between March and May for the following year intake. Mid-year internship and graduate opportunity windows frequently open between July and September.',
  },
  {
    q: 'What is the average starting salary for a graduate job in South Africa?',
    a: 'Entry-level graduate salaries in South Africa vary by industry: Information Technology and Software Engineering range from R280,000 to R480,000/year; Finance and Accounting range from R220,000 to R380,000/year; Business and Marketing range from R180,000 to R320,000/year.',
  },
  {
    q: 'How can I make my CV stand out if I have no work experience?',
    a: 'Highlight practical portfolio projects, short certified online courses (from Google, Microsoft, or accredited providers), academic distinctions, leadership roles, and volunteer work. Recruiters look for proof of initiative beyond classroom theory.',
  },
  {
    q: 'What is the difference between a graduate job and a graduate internship?',
    a: 'A graduate job is a permanent or long-term employment role with standard employee benefits. A graduate internship is a fixed-term contract (typically 12 months) focused on practical workplace training and skills development.',
  },
];

export default function SAGraduateJobsPage() {
  return (
    <GuideTemplate
      canonicalUrl={CANONICAL}
      breadcrumb={[{ label: 'Graduate Jobs South Africa' }]}
      heading="Graduate Jobs & Opportunities in South Africa (2026)"
      heroDescription="Looking for graduate jobs and entry-level career opportunities in South Africa? Explore hiring calendars at top SA employers, entry-level salary benchmarks, ATS CV strategies, and short courses that give you an immediate edge."
      heroBadges={[
        { icon: Briefcase, label: 'Entry-Level Jobs', iconClassName: 'text-primary' },
        { icon: Building, label: 'Top SA Employers', iconClassName: 'text-amber-600' },
        { icon: CheckCircle2, label: '100% Free Resources', iconClassName: 'text-green-600' },
      ]}
      authors={['jason', 'ndulamiso']}
      benefitsSectionTitle="How to Land Your First Graduate Job in SA"
      benefitsSectionSubtitle="Navigating the South African entry-level job market requires strategic timing, targeted CV formatting, and verifiable practical skills."
      benefits={benefits}
      courseCategories={courseCategories}
      relatedCourses={relatedCourses}
      carouselTitle="Skills That Accelerate Graduate Hires"
      carouselSubtitle="Hand-picked practical courses recommended by South African corporate recruiters"
      careerPathsTitle="Top Graduate Career Paths in South Africa"
      careerPathsSubtitle="Popular entry-level roles offering strong growth potential and competitive starting salaries across SA."
      careerPaths={careerPaths}
      relatedGuides={relatedGuides}
      faqs={faqs}
      ctaHeading="Accelerate Your South African Job Search"
      ctaBody="Combine your academic qualifications with industry-relevant certificates and practical portfolio projects."
      ctaPrimaryLabel="View Graduate Internships Guide"
      ctaPrimaryHref="/graduate-internships-south-africa"
      ctaSecondaryLabel="Build a Free Professional CV"
      ctaSecondaryHref="/cv-builder"
    />
  );
}
