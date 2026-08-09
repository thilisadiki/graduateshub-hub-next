import type { Metadata } from 'next';
import { Award, Clock, CheckCircle2, Building, DollarSign, Target, Sparkles, ShieldCheck, Briefcase } from 'lucide-react';
import GuideTemplate from '@/components/course/GuideTemplate';
import type { BenefitItem, CourseCategory, CareerPathItem, RelatedGuide, FaqItem } from '@/components/course/GuideTemplate';
import { courses as allCourses } from '@/data/courses';
import { SITE_URL, SITE_NAME } from '@/lib/seo';

const CANONICAL = `${SITE_URL}/graduate-trainee-programmes-south-africa`;

export const metadata: Metadata = {
  title: 'Graduate Trainee Programmes in South Africa (2026 Guide)',
  description:
    'Complete guide to top corporate Graduate Trainee Programmes in South Africa. Explore Graduate Development Programmes (GDPs) at banks, tech hubs, retailers, and state enterprises.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    siteName: SITE_NAME,
    title: 'Graduate Trainee Programmes in South Africa (2026 Guide) | Graduates Hub',
    description:
      'Master corporate Graduate Trainee Programmes in South Africa. Discover rotational program structures, application deadlines, assessment centers, and salary expectations.',
    url: CANONICAL,
  },
};

const courseCategories: CourseCategory[] = [
  {
    label: 'Corporate Leadership & Project Rotations',
    slug: 'business',
    description: 'Master formal project management and business analytics tools tested during corporate GDP rotational assignments.',
    ids: ['diploma-project-management', 'agile-project-management', 'lean-six-sigma-yellow-belt'],
  },
  {
    label: 'Banking & Financial Services Trainee Skills',
    slug: 'accounting',
    description: 'Build robust financial analysis, Excel modeling, and management accounting capabilities for SA banking graduate programs.',
    ids: ['diploma-financial-management-managers', 'accounts-management-xero'],
  },
  {
    label: 'Enterprise Technology & Systems Engineering Trainees',
    slug: 'it',
    description: 'Learn corporate network architecture, IT service management, and systems administration for telecoms and tech hubs.',
    ids: ['computer-networking', 'diploma-in-it-management'],
  },
];

const relatedCourses = allCourses.slice(0, 6);

const benefits: BenefitItem[] = [
  {
    icon: Building,
    title: 'Top Corporate Employers in SA',
    body: 'Programs hosted by major financial institutions, telecommunications giants, FMCG leaders, and state enterprises (Standard Bank, Absa, Nedbank, FirstRand, Vodacom, MTN, Sasol, Discovery).',
  },
  {
    icon: Target,
    title: 'Rotational Work Structure',
    body: 'Rotate through key business departments (e.g., Risk, Operations, Product Development, Technology) over 18 to 24 months to discover your specialization.',
  },
  {
    icon: Sparkles,
    title: 'Executive Mentorship & Fast-Track Growth',
    body: 'Direct exposure to senior executives, mentorship programs, and structured career acceleration toward management roles.',
  },
  {
    icon: DollarSign,
    title: 'Premium Salary & Corporate Benefits',
    body: 'Competitive market salaries (R250,000 to R550,000 per year) with medical aid, performance bonuses, and study leave allowances.',
  },
];

const careerPaths: CareerPathItem[] = [
  {
    role: 'Corporate Banking Graduate Trainee',
    detail: 'Rotate through investment banking, credit risk, and asset management. Average SA Starting Salary: R320,000 to R550,000 / year.',
  },
  {
    role: 'FMCG Supply Chain Trainee',
    detail: 'Manage warehouse logistics, demand forecasting, and procurement. Average SA Starting Salary: R260,000 to R420,000 / year.',
  },
  {
    role: 'Telecommunications & Tech Trainee',
    detail: 'Work across cloud architecture, network planning, and digital product management. Average SA Starting Salary: R300,000 to R480,000 / year.',
  },
  {
    role: 'Public Sector & Revenue Trainee (SARS / Treasury)',
    detail: 'Specialize in public sector financial compliance, tax auditing, and policy implementation. Average SA Starting Salary: R240,000 to R380,000 / year.',
  },
];

const relatedGuides: RelatedGuide[] = [
  {
    href: '/graduate-jobs-south-africa',
    title: 'Graduate Jobs & Opportunities in South Africa (2026)',
    desc: 'Explore permanent entry-level graduate jobs, salary ranges, and corporate recruitment cycles.',
  },
  {
    href: '/graduate-internships-south-africa',
    title: 'Graduate Internships in South Africa (2026)',
    desc: 'Explore 12-month SETA-funded internships, YES Youth placements, and stipend expectations.',
  },
  {
    href: '/free-agile-project-management-courses',
    title: 'Free Agile & Project Management Courses',
    desc: 'Master Scrum, Kanban, Jira, and CAPM concepts tested during corporate assessment centers.',
  },
  {
    href: '/free-business-courses',
    title: 'Free Online Business & Management Courses',
    desc: 'Develop corporate management skills with accredited free online business diplomas.',
  },
];

const faqs: FaqItem[] = [
  {
    q: 'What is a Graduate Trainee Programme?',
    a: 'A Graduate Trainee Programme (also known as a Graduate Development Programme or GDP) is a structured corporate training initiative spanning 12 to 24 months. Trainees rotate through different business units, receive executive mentorship, and are groomed for future leadership roles.',
  },
  {
    q: 'How do I pass corporate Assessment Centers in South Africa?',
    a: 'Corporate assessment centers evaluate candidate teamwork, problem-solving, commercial awareness, and communication. Prepare by practicing case studies, reviewing industry news, taking timed numerical tests, and actively collaborating during group exercises.',
  },
  {
    q: 'When do top SA banks and corporates open graduate program applications?',
    a: 'Most top corporate Graduate Development Programmes in South Africa open applications between February and April each year for the following year intake (e.g. applications open Feb 2026 for Jan 2027 start).',
  },
  {
    q: 'Do graduate trainees get paid a full salary?',
    a: 'Yes. Unlike unpaid internships, corporate Graduate Trainee Programmes in South Africa offer competitive permanent employee salaries ranging from R250,000 to R550,000 per year, along with medical aid and retirement benefits.',
  },
];

export default function SAGraduateTraineeProgrammesPage() {
  return (
    <GuideTemplate
      canonicalUrl={CANONICAL}
      breadcrumb={[{ label: 'Graduate Trainee Programmes South Africa' }]}
      heading="Graduate Trainee Programmes in South Africa (2026)"
      heroDescription="Looking for corporate Graduate Trainee Programmes in South Africa? Explore Graduate Development Programmes (GDPs) at top banks, telecommunications giants, FMCG leaders, and state enterprises, complete with application deadlines, assessment tips, and salary expectations."
      heroBadges={[
        { icon: Building, label: 'Corporate GDP Programs', iconClassName: 'text-amber-600' },
        { icon: Briefcase, label: 'Rotational Fast-Track', iconClassName: 'text-primary' },
        { icon: CheckCircle2, label: 'Competitive Salaries', iconClassName: 'text-green-600' },
      ]}
      authors={['jason', 'ndulamiso']}
      benefitsSectionTitle="Why Choose a Graduate Trainee Programme?"
      benefitsSectionSubtitle="Graduate Development Programmes provide the fastest route to corporate management roles through structured rotations and executive mentorship."
      benefits={benefits}
      courseCategories={courseCategories}
      relatedCourses={relatedCourses}
      carouselTitle="Skills Tested in Corporate Assessment Centers"
      carouselSubtitle="Hand-picked practical courses to prepare you for case studies and group tasks"
      careerPathsTitle="Top Corporate Trainee Pathways in SA"
      careerPathsSubtitle="Discover high-growth career tracks within South Africa leading corporate sectors."
      careerPaths={careerPaths}
      relatedGuides={relatedGuides}
      faqs={faqs}
      ctaHeading="Prepare Your Application for SA Trainee Programmes"
      ctaBody="Combine your academic degree with industry-relevant online certificates and a professional CV."
      ctaPrimaryLabel="Build a Free Professional CV"
      ctaPrimaryHref="/cv-builder"
      ctaSecondaryLabel="View SA Graduate Jobs Guide"
      ctaSecondaryHref="/graduate-jobs-south-africa"
    />
  );
}
