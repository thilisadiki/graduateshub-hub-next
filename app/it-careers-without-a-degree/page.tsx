import type { Metadata } from 'next';
import { Award, Clock, CheckCircle2, Building, DollarSign, Target, Sparkles, ShieldCheck, Laptop, Cpu, Terminal } from 'lucide-react';
import GuideTemplate from '@/components/course/GuideTemplate';
import type { BenefitItem, CourseCategory, CareerPathItem, RelatedGuide, FaqItem } from '@/components/course/GuideTemplate';
import { courses as allCourses } from '@/data/courses';
import { SITE_URL, SITE_NAME } from '@/lib/seo';

const CANONICAL = `${SITE_URL}/it-careers-without-a-degree`;

export const metadata: Metadata = {
  title: 'IT Careers Without a Degree (2026 Step-by-Step Guide)',
  description:
    'Learn how to launch high-paying IT careers without a university degree. Discover non-degree IT paths, industry certifications, portfolio tasks, and self-taught entry routes.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    siteName: SITE_NAME,
    title: 'IT Careers Without a Degree (2026 Step-by-Step Guide) | Graduates Hub',
    description:
      'Break into IT without a computer science degree. Step-by-step roadmap for IT Support, Web Development, Cybersecurity, Cloud Infrastructure, and Data Analytics.',
    url: CANONICAL,
  },
};

const courseCategories: CourseCategory[] = [
  {
    label: 'IT Support & Systems Administration (No Degree Path)',
    slug: 'it',
    description: 'The fastest entry-level route into corporate IT infrastructure without requiring a university degree.',
    ids: ['computer-networking', 'diploma-in-it-management', 'google-it-support-certificate'],
  },
  {
    label: 'Web & Software Development (Portfolio Driven)',
    slug: 'software-engineering',
    description: 'Employers hire developers based on visible code repositories, GitHub projects, and technical assessment performance.',
    ids: ['diploma-in-c-sharp-programming', 'python-programming-for-beginners'],
  },
  {
    label: 'Cloud & Cybersecurity Fundamentals',
    slug: 'it',
    description: 'Build entry-level SOC analyst and Cloud support capabilities with vendor certifications (AWS, Google, Microsoft).',
    ids: ['google-cybersecurity-certificate', 'microsoft-azure-fundamentals'],
  },
];

const relatedCourses = allCourses.slice(0, 6);

const benefits: BenefitItem[] = [
  {
    icon: Laptop,
    title: 'Skills Over Credentials',
    body: 'The tech sector prioritizes practical ability, problem-solving, and verified certifications over traditional 3-year university degrees.',
  },
  {
    icon: ShieldCheck,
    title: 'Vendor Certifications Gold Standard',
    body: 'Certifications from Google, Microsoft, AWS, and CompTIA serve as direct proof of competency for hiring managers.',
  },
  {
    icon: Terminal,
    title: 'Proof-of-Work Portfolios',
    body: 'Completing hands-on projects (code repos, network labs, BI dashboards) gives candidates tangible evidence during technical interviews.',
  },
  {
    icon: DollarSign,
    title: 'Strong Entry-Level Salaries',
    body: 'Non-degree IT support specialists start at R15,000 to R25,000 per month, advancing to R45,000+ per month within 3 to 4 years.',
  },
];

const careerPaths: CareerPathItem[] = [
  {
    role: 'IT Support & Helpdesk Technician',
    detail: 'Maintain workplace hardware, diagnose software faults, and administer user accounts. Average SA Salary: R180,000 to R320,000 / year.',
  },
  {
    role: 'Frontend & Web Developer',
    detail: 'Build responsive websites and web application interfaces using HTML, CSS, JavaScript, and React. Average SA Salary: R220,000 to R420,000 / year.',
  },
  {
    role: 'Cybersecurity SOC Analyst (Tier 1)',
    detail: 'Monitor security event logs, analyze network traffic, and respond to security alerts. Average SA Salary: R250,000 to R480,000 / year.',
  },
  {
    role: 'Cloud Support Engineer',
    detail: 'Assist with cloud tenant provisioning, virtual machine configuration, and cloud security policies. Average SA Salary: R280,000 to R520,000 / year.',
  },
];

const relatedGuides: RelatedGuide[] = [
  {
    href: '/best-careers-in-south-africa',
    title: 'Best Careers in South Africa (2026 Guide)',
    desc: 'Explore top in-demand growth sectors, starting salary benchmarks, and free online diplomas.',
  },
  {
    href: '/highest-paying-careers-in-south-africa',
    title: 'Highest Paying Careers in South Africa',
    desc: 'Explore salary compensation bands from entry-level to senior executive roles across SA.',
  },
  {
    href: '/portfolio-tasks',
    title: 'Proof-of-Work Portfolio Tasks Hub',
    desc: 'Build real-world developer, marketing, and data projects to present to IT recruiters.',
  },
  {
    href: '/free-it-courses-with-certificates',
    title: 'Free IT Support Courses with Certificates',
    desc: 'Catalogue of free IT training courses with downloadable digital certificates of completion.',
  },
];

const faqs: FaqItem[] = [
  {
    q: 'Can I get an IT job in South Africa without a computer science degree?',
    a: 'Yes. Thousands of IT professionals in South Africa started their careers without a university degree. IT Support, Web Development, Cloud Support, and Cybersecurity Tier 1 roles regularly hire candidates with industry certifications (CompTIA A+, Google IT Support, AWS Cloud Practitioner) and strong practical skills.',
  },
  {
    q: 'What are the best IT certifications to take without a degree?',
    a: 'Top entry-level certifications include: Google IT Support Professional Certificate, CompTIA A+ / Network+, AWS Certified Cloud Practitioner, Microsoft Certified Azure Fundamentals (AZ-900), and Google Cybersecurity Professional Certificate.',
  },
  {
    q: 'How do I prove my IT skills to employers without formal qualifications?',
    a: 'Build a Proof-of-Work portfolio: publish code repositories on GitHub, build a personal website, document home network/lab configurations, earn verifiable digital certificates, and complete real-world portfolio challenges.',
  },
  {
    q: 'Where can I find entry-level IT jobs that do not require a degree?',
    a: 'Search on LinkedIn Jobs, Pnet, Careers24, and OfferZen (for developers) using keywords such as "Junior IT Support", "Helpdesk Analyst", "Junior Web Developer", "Tier 1 SOC Analyst", and "Graduate / Trainee IT Technician".',
  },
];

export default function ITCareersWithoutDegreePage() {
  return (
    <GuideTemplate
      canonicalUrl={CANONICAL}
      breadcrumb={[{ label: 'IT Careers Without a Degree' }]}
      heading="IT Careers Without a Degree (2026 Step-by-Step Guide)"
      heroDescription="Want to break into technology without a computer science degree? Learn how to launch high-paying IT careers using free online certification courses, proof-of-work portfolio tasks, and self-taught entry routes."
      heroBadges={[
        { icon: Laptop, label: 'Zero Degree Required', iconClassName: 'text-amber-600' },
        { icon: ShieldCheck, label: 'Vendor Certifications', iconClassName: 'text-primary' },
        { icon: CheckCircle2, label: 'Practical Portfolio Paths', iconClassName: 'text-green-600' },
      ]}
      authors={['jason', 'ndulamiso']}
      benefitsSectionTitle="Why Tech Is the Best Field for Non-Degree Holders"
      benefitsSectionSubtitle="In technology, demonstrated practical ability and problem-solving skills matter far more to hiring managers than paper qualifications."
      benefits={benefits}
      preCoursesSection={
        <section className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm mb-16">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
              <ShieldCheck size={20} />
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
              Official Certification &amp; Testing Authorities
            </h2>
          </div>
          <p className="text-gray-600 mb-6 text-sm md:text-base">
            Industry certification roadmaps and vendor training credentials featured in this guide link directly to official global testing authorities:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a
              href="https://grow.google/certificates/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border border-gray-200 rounded-xl hover:border-primary transition-colors bg-gray-50/50 block group"
            >
              <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">Google Official</span>
              <h3 className="font-bold text-gray-900 text-sm group-hover:text-primary transition-colors mb-1">Google Career Certs</h3>
              <p className="text-xs text-gray-500">IT Support, Cybersecurity, Data Analytics, and UX Design professional certificates.</p>
            </a>

            <a
              href="https://learn.microsoft.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border border-gray-200 rounded-xl hover:border-primary transition-colors bg-gray-50/50 block group"
            >
              <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">Microsoft Official</span>
              <h3 className="font-bold text-gray-900 text-sm group-hover:text-primary transition-colors mb-1">Microsoft Learn Portal</h3>
              <p className="text-xs text-gray-500">Azure Cloud Fundamentals (AZ-900), Power BI, and Microsoft 365 role paths.</p>
            </a>

            <a
              href="https://aws.amazon.com/certification/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border border-gray-200 rounded-xl hover:border-primary transition-colors bg-gray-50/50 block group"
            >
              <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">AWS Official</span>
              <h3 className="font-bold text-gray-900 text-sm group-hover:text-primary transition-colors mb-1">AWS Cloud Certification</h3>
              <p className="text-xs text-gray-500">AWS Certified Cloud Practitioner and Solutions Architect testing routes.</p>
            </a>

            <a
              href="https://www.comptia.org"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border border-gray-200 rounded-xl hover:border-primary transition-colors bg-gray-50/50 block group"
            >
              <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">CompTIA Official</span>
              <h3 className="font-bold text-gray-900 text-sm group-hover:text-primary transition-colors mb-1">CompTIA Infrastructure</h3>
              <p className="text-xs text-gray-500">Industry standard CompTIA A+, Network+, and Security+ certification standards.</p>
            </a>
          </div>
        </section>
      }
      courseCategories={courseCategories}
      relatedCourses={relatedCourses}
      carouselTitle="Free Certification Courses for Non-Degree IT Roles"
      carouselSubtitle="Start building job-ready IT skills today with free online courses and certificates"
      careerPathsTitle="Entry-Level Non-Degree IT Career Tracks"
      careerPathsSubtitle="Explore accessible tech roles, certification requirements, and starting salary ranges."
      careerPaths={careerPaths}
      relatedGuides={relatedGuides}
      faqs={faqs}
      ctaHeading="Ready to Launch Your IT Career Without a Degree?"
      ctaBody="Combine your certified IT skills with hands-on portfolio projects and an ATS-optimized CV."
      ctaPrimaryLabel="Explore Portfolio Tasks"
      ctaPrimaryHref="/portfolio-tasks"
      ctaSecondaryLabel="Build a Free Professional CV"
      ctaSecondaryHref="/cv-builder"
    />
  );
}
