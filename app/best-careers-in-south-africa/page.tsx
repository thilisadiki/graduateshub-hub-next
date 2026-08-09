import type { Metadata } from 'next';
import { Award, Clock, CheckCircle2, Building, DollarSign, Target, Sparkles, GraduationCap, TrendingUp, ShieldCheck } from 'lucide-react';
import GuideTemplate from '@/components/course/GuideTemplate';
import type { BenefitItem, CourseCategory, CareerPathItem, RelatedGuide, FaqItem } from '@/components/course/GuideTemplate';
import { courses as allCourses } from '@/data/courses';
import { SITE_URL, SITE_NAME } from '@/lib/seo';

const CANONICAL = `${SITE_URL}/best-careers-in-south-africa`;

export const metadata: Metadata = {
  title: 'Best Careers in South Africa (2026 In-Demand Jobs Guide)',
  description:
    'Discover the best careers in South Africa for 2026. Explore high-growth industries, starting salary benchmarks, required qualifications, and free certified learning paths.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    siteName: SITE_NAME,
    title: 'Best Careers in South Africa (2026 In-Demand Jobs Guide) | Graduates Hub',
    description:
      'Comprehensive guide to the top in-demand careers in South Africa. Explore salary ranges, sector demand metrics, and free online certification courses.',
    url: CANONICAL,
  },
};

const courseCategories: CourseCategory[] = [
  {
    label: 'Software Engineering & Cloud Architecture',
    slug: 'software-engineering',
    description: 'High-demand tech careers across South Africa main commercial hubs in Cape Town, Johannesburg, and Durban.',
    ids: ['diploma-in-c-sharp-programming', 'python-programming-for-beginners'],
  },
  {
    label: 'Data Analytics & Business Intelligence',
    slug: 'it',
    description: 'Master data analysis, SQL, and Power BI tools sought after by top SA banks, retailers, and telecommunications companies.',
    ids: ['microsoft-excel-data-analysis', 'google-data-analytics-certificate'],
  },
  {
    label: 'Business Management & Project Leadership',
    slug: 'business',
    description: 'Prepare for management trainee roles and enterprise project execution with accredited free diplomas.',
    ids: ['diploma-project-management', 'agile-project-management'],
  },
];

const relatedCourses = allCourses.slice(0, 6);

const benefits: BenefitItem[] = [
  {
    icon: TrendingUp,
    title: 'High-Growth Sectors in SA',
    body: 'Technology, financial services, digital marketing, renewable energy, and data analytics represent the fastest-growing job sectors in SA.',
  },
  {
    icon: DollarSign,
    title: 'Competitive Starting Salaries',
    body: 'Entry-level graduate salaries in top SA fields range from R180,000 to R450,000 per year, rising quickly with specialized skills.',
  },
  {
    icon: ShieldCheck,
    title: 'Future-Proof Skill Demand',
    body: 'Focusing on digital literacy, problem-solving, and cloud tools protects your career against automation and economic shifts.',
  },
  {
    icon: GraduationCap,
    title: 'Accessible Learning Pathways',
    body: 'Combine your academic qualifications with free, industry-recognized certificates to stand out in graduate screening.',
  },
];

const careerPaths: CareerPathItem[] = [
  {
    role: 'Software Engineer & Fullstack Developer',
    detail: 'Build web applications, enterprise systems, and mobile platforms. Average SA Starting Salary: R280,000 to R520,000 / year.',
  },
  {
    role: 'Data Analyst & Business Intelligence Specialist',
    detail: 'Transform raw corporate data into actionable strategic insights using SQL, Python, and Power BI. Average SA Starting Salary: R240,000 to R420,000 / year.',
  },
  {
    role: 'Financial Analyst & Accountant',
    detail: 'Manage corporate financial planning, ledger audits, and risk assessment. Average SA Starting Salary: R250,000 to R460,000 / year.',
  },
  {
    role: 'Digital Marketing & E-Commerce Manager',
    detail: 'Drive online customer acquisition, search marketing, and social advertising campaigns. Average SA Starting Salary: R200,000 to R380,000 / year.',
  },
];

const relatedGuides: RelatedGuide[] = [
  {
    href: '/highest-paying-careers-in-south-africa',
    title: 'Highest Paying Careers in South Africa (2026)',
    desc: 'Detailed breakdown of top-earning salary bands from entry-level to executive roles across SA.',
  },
  {
    href: '/it-careers-without-a-degree',
    title: 'IT Careers Without a Degree (2026 Guide)',
    desc: 'How to launch high-paying tech careers using online certifications, portfolios, and practical tasks.',
  },
  {
    href: '/graduate-jobs-south-africa',
    title: 'Graduate Jobs in South Africa (2026)',
    desc: 'Complete guide to finding entry-level graduate jobs, sector recruitment cycles, and ATS CV tips.',
  },
  {
    href: '/graduate-trainee-programmes-south-africa',
    title: 'Graduate Trainee Programmes in SA (2026)',
    desc: 'Crack corporate Graduate Development Programmes (GDPs) at top SA banks and corporates.',
  },
];

const faqs: FaqItem[] = [
  {
    q: 'What are the best careers to pursue in South Africa right now?',
    a: 'The most in-demand and fastest-growing careers in South Africa include Software Engineering, Data Analytics, Cybersecurity, Financial Management, Digital Marketing, Cloud Infrastructure, and Project Management.',
  },
  {
    q: 'Which matric subjects are best for high-demand SA careers?',
    a: 'Pure Mathematics, Physical Sciences, Information Technology, and Accounting open the widest doors to STEM, finance, and technology degrees in South Africa. However, self-taught tech certifications allow non-STEM matriculants to transition successfully into digital careers.',
  },
  {
    q: 'Can I build a successful career in South Africa without a university degree?',
    a: 'Yes. In fields such as Web Development, IT Support, Digital Marketing, and Network Administration, demonstrated practical skills, portfolio projects, and industry certifications (Google, Microsoft, AWS, CompTIA) are widely accepted by employers.',
  },
  {
    q: 'How much do entry-level graduates earn in the best SA careers?',
    a: 'Entry-level salaries vary by field: IT and Software Engineering graduates average R25,000 to R40,000 per month; Finance and Accounting graduates average R20,000 to R35,000 per month; General Business and Marketing graduates average R15,000 to R28,000 per month.',
  },
];

export default function BestCareersSAPage() {
  return (
    <GuideTemplate
      canonicalUrl={CANONICAL}
      breadcrumb={[{ label: 'Best Careers in South Africa' }]}
      heading="Best Careers in South Africa (2026 In-Demand Jobs Guide)"
      heroDescription="Looking for the best careers in South Africa? Explore top in-demand industries, starting salary expectations, required qualifications, and free certified learning paths to build a successful career."
      heroBadges={[
        { icon: TrendingUp, label: 'High-Growth Sectors', iconClassName: 'text-amber-600' },
        { icon: DollarSign, label: 'Verified Salary Bands', iconClassName: 'text-primary' },
        { icon: CheckCircle2, label: 'Free Certified Courses', iconClassName: 'text-green-600' },
      ]}
      authors={['jason', 'ndulamiso']}
      benefitsSectionTitle="What Makes These the Best Careers in South Africa?"
      benefitsSectionSubtitle="These career paths offer the strongest combination of hiring demand, salary growth potential, and long-term economic resilience."
      benefits={benefits}
      courseCategories={courseCategories}
      relatedCourses={relatedCourses}
      carouselTitle="Free Courses to Prepare for Top SA Careers"
      carouselSubtitle="Build job-ready practical skills with recognized online diplomas and certificates"
      careerPathsTitle="Top In-Demand Career Tracks in SA"
      careerPathsSubtitle="Explore key metrics and starting salary expectations across South Africa leading growth sectors."
      careerPaths={careerPaths}
      relatedGuides={relatedGuides}
      faqs={faqs}
      ctaHeading="Ready to Launch One of SA's Best Careers?"
      ctaBody="Prepare your job application with an ATS-compliant resume and industry-relevant online certificates."
      ctaPrimaryLabel="Build a Free Professional CV"
      ctaPrimaryHref="/cv-builder"
      ctaSecondaryLabel="Explore Highest Paying Careers"
      ctaSecondaryHref="/highest-paying-careers-in-south-africa"
    />
  );
}
