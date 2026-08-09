import type { Metadata } from 'next';
import { Award, Clock, CheckCircle2, Building, DollarSign, Target, Sparkles, ShieldCheck, Briefcase, TrendingUp } from 'lucide-react';
import GuideTemplate from '@/components/course/GuideTemplate';
import type { BenefitItem, CourseCategory, CareerPathItem, RelatedGuide, FaqItem } from '@/components/course/GuideTemplate';
import { courses as allCourses } from '@/data/courses';
import { SITE_URL, SITE_NAME } from '@/lib/seo';

const CANONICAL = `${SITE_URL}/highest-paying-careers-in-south-africa`;

export const metadata: Metadata = {
  title: 'Highest Paying Careers in South Africa (2026 Salary Guide)',
  description:
    'Explore the highest paying careers in South Africa. Comprehensive breakdown of salary bands from entry-level to senior executive roles across tech, finance, and engineering.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    siteName: SITE_NAME,
    title: 'Highest Paying Careers in South Africa (2026 Salary Guide) | Graduates Hub',
    description:
      'Detailed breakdown of top-earning fields in South Africa. Explore compensation tables, entry routes, and certifications for high-paying careers.',
    url: CANONICAL,
  },
};

const courseCategories: CourseCategory[] = [
  {
    label: 'High-Earning Tech & Cloud Certifications',
    slug: 'software-engineering',
    description: 'Cloud architects and senior software developers command some of the highest salaries in South Africa corporate sector.',
    ids: ['diploma-in-c-sharp-programming', 'python-programming-for-beginners'],
  },
  {
    label: 'Financial Services & Investment Analysis',
    slug: 'accounting',
    description: 'Master quantitative finance, ledger auditing, and financial risk modeling for banking and corporate treasury roles.',
    ids: ['diploma-financial-management-managers', 'accounts-management-xero'],
  },
  {
    label: 'Enterprise Project & Agile Management',
    slug: 'business',
    description: 'Project Directors and Scrum Masters lead large-scale digital transformations with premium earning potential.',
    ids: ['diploma-project-management', 'agile-project-management', 'lean-six-sigma-yellow-belt'],
  },
];

const relatedCourses = allCourses.slice(0, 6);

const benefits: BenefitItem[] = [
  {
    icon: DollarSign,
    title: 'Top Earning Potential',
    body: 'Senior specialists in South Africa earn between R650,000 and R2.5 Million+ per year across tech, actuarial science, and corporate finance.',
  },
  {
    icon: TrendingUp,
    title: 'Rapid Salary Progression',
    body: 'Fast-track graduate development programmes offer annual salary increases of 15% to 25% upon completing rotation milestones.',
  },
  {
    icon: ShieldCheck,
    title: 'High Barrier to Entry',
    body: 'High-paying careers reward specialized technical knowledge, professional board registrations (CA SA, ECSA), and certified skills.',
  },
  {
    icon: Briefcase,
    title: 'Global Mobility & Remote Options',
    body: 'Software engineering, cloud architecture, and data science enable SA professionals to earn international remote salaries in USD or Euros.',
  },
];

const careerPaths: CareerPathItem[] = [
  {
    role: 'Cloud Architect & Lead Software Engineer',
    detail: 'Design enterprise cloud infrastructure and scalable software systems. Average SA Salary: R600,000 to R1,600,000+ / year.',
  },
  {
    role: 'Actuary & Financial Risk Lead',
    detail: 'Model statistical risk, insurance pricing, and capital reserves for major financial institutions. Average SA Salary: R700,000 to R1,800,000+ / year.',
  },
  {
    role: 'Chartered Accountant (CA SA) & Corporate Controller',
    detail: 'Manage corporate financial reporting, taxation compliance, and audits. Average SA Salary: R550,000 to R1,400,000+ / year.',
  },
  {
    role: 'Data Scientist & Machine Learning Lead',
    detail: 'Build predictive AI models and enterprise data analytics pipelines. Average SA Salary: R500,000 to R1,350,000+ / year.',
  },
];

const relatedGuides: RelatedGuide[] = [
  {
    href: '/best-careers-in-south-africa',
    title: 'Best Careers in South Africa (2026 Guide)',
    desc: 'Explore high-growth sectors, entry requirements, and starting salary benchmarks.',
  },
  {
    href: '/it-careers-without-a-degree',
    title: 'IT Careers Without a Degree (2026)',
    desc: 'How to launch high-paying tech careers using online certifications and proof-of-work portfolios.',
  },
  {
    href: '/graduate-trainee-programmes-south-africa',
    title: 'Graduate Trainee Programmes in SA',
    desc: 'Fast-track rotational corporate GDP programs at major banks and corporate hubs.',
  },
  {
    href: '/graduate-jobs-south-africa',
    title: 'Graduate Jobs in South Africa (2026)',
    desc: 'Explore entry-level graduate jobs, salary expectations, and ATS CV formatting.',
  },
];

const faqs: FaqItem[] = [
  {
    q: 'What is the highest paying career in South Africa?',
    a: 'Specialized Surgeons, Actuarial Leads, Chief Technology Officers, Executive Mining Engineers, and Investment Banking Directors represent the highest paying careers in South Africa, with annual compensation exceeding R1.5 Million to R4 Million+.',
  },
  {
    q: 'Which IT roles pay the highest salaries in South Africa?',
    a: 'Cloud Solutions Architects (AWS/Azure), Lead Software Engineers, Cybersecurity Directors, Data Science Leads, and DevOps Managers are the top-earning IT roles in SA.',
  },
  {
    q: 'How can a graduate increase their starting salary in SA?',
    a: 'Graduates can command higher starting offers by acquiring specialized certifications (AWS, Microsoft, Google), demonstrating hands-on project work, applying for structured corporate Graduate Trainee Programmes, and negotiating effectively during final offer rounds.',
  },
  {
    q: 'Do remote international jobs pay more than local SA jobs?',
    a: 'Yes. South African tech and data professionals working remotely for European or US companies often earn 2x to 3x local SA market rates due to foreign currency exchange rates.',
  },
];

export default function HighestPayingCareersSAPage() {
  return (
    <GuideTemplate
      canonicalUrl={CANONICAL}
      breadcrumb={[{ label: 'Highest Paying Careers South Africa' }]}
      heading="Highest Paying Careers in South Africa (2026 Salary Guide)"
      heroDescription="Discover the highest paying careers in South Africa. Explore detailed salary compensation bands from entry-level to senior executive roles across tech, finance, engineering, and specialized corporate management."
      heroBadges={[
        { icon: DollarSign, label: 'High Earning Potential', iconClassName: 'text-amber-600' },
        { icon: TrendingUp, label: 'Fast-Track Growth', iconClassName: 'text-primary' },
        { icon: CheckCircle2, label: 'Verified Compensation Bands', iconClassName: 'text-green-600' },
      ]}
      authors={['jason', 'ndulamiso']}
      benefitsSectionTitle="Why Pursue a High-Paying Career in SA?"
      benefitsSectionSubtitle="High-paying fields offer financial security, rapid career progression, and global mobility for skilled professionals."
      benefits={benefits}
      courseCategories={courseCategories}
      relatedCourses={relatedCourses}
      carouselTitle="Certifications That Boost Your Earning Potential"
      carouselSubtitle="Hand-picked certified online courses to prepare you for high-paying roles"
      careerPathsTitle="Top High-Paying Career Tracks in SA"
      careerPathsSubtitle="Explore salary benchmarks and growth trajectories for top-earning professions."
      careerPaths={careerPaths}
      relatedGuides={relatedGuides}
      faqs={faqs}
      ctaHeading="Ready to Target High-Paying SA Careers?"
      ctaBody="Combine your qualification with in-demand certified skills and an ATS-optimized professional CV."
      ctaPrimaryLabel="Build a Free Professional CV"
      ctaPrimaryHref="/cv-builder"
      ctaSecondaryLabel="View Best Careers in SA Guide"
      ctaSecondaryHref="/best-careers-in-south-africa"
    />
  );
}
