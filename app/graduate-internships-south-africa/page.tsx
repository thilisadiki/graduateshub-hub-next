import type { Metadata } from 'next';
import { Award, Clock, CheckCircle2, Building, DollarSign, Target, Sparkles, GraduationCap, ShieldCheck } from 'lucide-react';
import GuideTemplate from '@/components/course/GuideTemplate';
import type { BenefitItem, CourseCategory, CareerPathItem, RelatedGuide, FaqItem } from '@/components/course/GuideTemplate';
import { courses as allCourses } from '@/data/courses';
import { SITE_URL, SITE_NAME } from '@/lib/seo';

const CANONICAL = `${SITE_URL}/graduate-internships-south-africa`;

export const metadata: Metadata = {
  title: 'Graduate Internships in South Africa (2026 Guide)',
  description:
    'Complete guide to finding graduate internships in South Africa. Explore SETA funded internships, YES Youth placements, monthly stipend benchmarks, and tips to secure permanent employment.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    siteName: SITE_NAME,
    title: 'Graduate Internships in South Africa (2026 Guide) | Graduates Hub',
    description:
      'Find 12-month graduate internships in South Africa. Discover stipend expectations, SETA funding programs, YES Youth initiatives, and how to convert an internship into a full-time job.',
    url: CANONICAL,
  },
};

const courseCategories: CourseCategory[] = [
  {
    label: 'SETA & State Sponsored Internship Pathways',
    slug: 'business',
    description: 'Learn how SETA sector skills programs funding supports 12-month graduate internships across South African industries.',
    ids: ['diploma-project-management', 'agile-project-management'],
  },
  {
    label: 'Digital & Technology Internship Prep',
    slug: 'it',
    description: 'Gain practical IT, networking, and software development skills required for high-paying corporate tech internships.',
    ids: ['computer-networking', 'diploma-in-it-management'],
  },
  {
    label: 'Business Administration & Finance Internships',
    slug: 'accounting',
    description: 'Master practical office software, bookkeeping, and accounting workflows before starting your 12-month placement.',
    ids: ['diploma-effective-bookkeeping-payroll', 'accounts-management-xero'],
  },
];

const relatedCourses = allCourses.slice(0, 6);

const benefits: BenefitItem[] = [
  {
    icon: DollarSign,
    title: 'Monthly Stipend Expectations',
    body: 'Graduate internship stipends in South Africa typically range from R6,000 to R15,000 per month depending on degree level and sector.',
  },
  {
    icon: GraduationCap,
    title: 'YES Youth 12-Month Placements',
    body: 'The Youth Employment Service (YES) provides quality 12-month work experiences across top South African corporate sponsors.',
  },
  {
    icon: ShieldCheck,
    title: 'SETA Sector Funding',
    body: 'Sector Education and Training Authorities (MICT SETA, FASSET, INSETA, BANKSETA) fund workplace training stipends for graduates.',
  },
  {
    icon: Target,
    title: 'Pathways to Permanent Hiring',
    body: 'Learn how to demonstrate proactive value during your placement so your employer offers a permanent contract upon completion.',
  },
];

const careerPaths: CareerPathItem[] = [
  {
    role: 'IT Support & Systems Graduate Intern',
    detail: 'Provide corporate technical support, user administration, and network troubleshooting. Average SA Stipend: R7,500 to R14,000 / month.',
  },
  {
    role: 'Financial Services & Banking Intern',
    detail: 'Assist with credit risk analysis, client onboarding, and ledger reconciliation. Average SA Stipend: R8,000 to R15,000 / month.',
  },
  {
    role: 'Digital Marketing & Content Intern',
    detail: 'Manage social media channels, email campaigns, and web content publishing. Average SA Stipend: R6,000 to R12,000 / month.',
  },
  {
    role: 'Human Resources & Talent Intern',
    detail: 'Support employee onboarding, interview scheduling, and workplace training compliance. Average SA Stipend: R6,500 to R11,500 / month.',
  },
];

const relatedGuides: RelatedGuide[] = [
  {
    href: '/graduate-jobs-south-africa',
    title: 'Graduate Jobs & Opportunities in South Africa (2026)',
    desc: 'Explore permanent entry-level graduate jobs, salary ranges, and corporate recruitment cycles.',
  },
  {
    href: '/graduate-trainee-programmes-south-africa',
    title: 'Graduate Trainee Programmes in South Africa (2026)',
    desc: 'Breakdown of rotational corporate GDP programs at major banks, retailers, and tech hubs.',
  },
  {
    href: '/blog/yes-youth-program-guide-south-africa',
    title: 'YES Youth Program Guide for South Africans',
    desc: 'Everything you need to know about registering on SAYouth.mobi and securing YES placements.',
  },
  {
    href: '/sa-government-free-online-courses-certificates',
    title: 'Free SA Government & SETA Online Courses',
    desc: 'Earn recognized digital certificates from NSG, NYDA, NEMISA, and SETA training portals.',
  },
];

const faqs: FaqItem[] = [
  {
    q: 'How much do graduate interns earn in South Africa?',
    a: 'Stipends vary by industry and qualification: Diploma graduates typically earn R6,000 to R9,500 per month; Bachelor Degree graduates earn R8,000 to R12,500 per month; Honours/Master degree graduates earn R10,000 to R16,000 per month.',
  },
  {
    q: 'What is the duration of a graduate internship in SA?',
    a: 'The vast majority of structured graduate internships in South Africa run for 12 months, which aligns with SETA funding agreements and financial year cycles.',
  },
  {
    q: 'How can I convert a graduate internship into a permanent job?',
    a: 'Consistently meet project deadlines, show eagerness to learn new tools, build relationships across departments, ask for feedback during performance reviews, and document your key achievements.',
  },
  {
    q: 'Where can I apply for official SETA and YES Youth internships?',
    a: 'Create a free profile on SA Youth (sayouth.mobi), register on company career portals, and check SETA sector websites (e.g., mict.org.za, fasset.org.za) for public intake calls.',
  },
];

export default function SAGraduateInternshipsPage() {
  return (
    <GuideTemplate
      canonicalUrl={CANONICAL}
      breadcrumb={[{ label: 'Graduate Internships South Africa' }]}
      heading="Graduate Internships in South Africa (2026)"
      heroDescription="Looking for graduate internships in South Africa? Discover 12-month SETA-funded placements, YES Youth initiatives, monthly stipend benchmarks, and practical tips to convert your internship into permanent corporate employment."
      heroBadges={[
        { icon: GraduationCap, label: '12-Month Placements', iconClassName: 'text-amber-600' },
        { icon: ShieldCheck, label: 'SETA & YES Funded', iconClassName: 'text-primary' },
        { icon: CheckCircle2, label: 'Verified Stipends', iconClassName: 'text-green-600' },
      ]}
      authors={['jason', 'ndulamiso']}
      benefitsSectionTitle="Why Graduate Internships Matter"
      benefitsSectionSubtitle="Internships bridge the gap between academic theory and workplace execution, giving SA graduates the practical experience recruiters test for."
      benefits={benefits}
      courseCategories={courseCategories}
      relatedCourses={relatedCourses}
      carouselTitle="Courses to Prepare You for Your Internship"
      carouselSubtitle="Build practical workplace software skills before your first day on the job"
      careerPathsTitle="Popular Graduate Internship Paths"
      careerPathsSubtitle="Explore high-demand internship roles across key sectors of the South African economy."
      careerPaths={careerPaths}
      relatedGuides={relatedGuides}
      faqs={faqs}
      ctaHeading="Ready to Apply for SA Graduate Internships?"
      ctaBody="Prepare your application with an ATS-compliant resume and industry-relevant online certificates."
      ctaPrimaryLabel="Build a Free Professional CV"
      ctaPrimaryHref="/cv-builder"
      ctaSecondaryLabel="View SA Graduate Jobs Guide"
      ctaSecondaryHref="/graduate-jobs-south-africa"
    />
  );
}
