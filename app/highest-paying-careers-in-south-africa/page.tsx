import type { Metadata } from 'next';
import Link from 'next/link';
import { Award, Clock, CheckCircle2, Building, DollarSign, Target, Sparkles, ShieldCheck, Briefcase, TrendingUp, Globe, MapPin, Zap } from 'lucide-react';
import GuideTemplate from '@/components/course/GuideTemplate';
import type { BenefitItem, CourseCategory, CareerPathItem, RelatedGuide, FaqItem } from '@/components/course/GuideTemplate';
import { courses as allCourses } from '@/data/courses';
import { SITE_URL, SITE_NAME } from '@/lib/seo';

const CANONICAL = `${SITE_URL}/highest-paying-careers-in-south-africa`;

export const metadata: Metadata = {
  title: 'Highest Paying Careers in South Africa (2026 Salary Guide)',
  description:
    'Explore the highest paying careers in South Africa. Comprehensive breakdown of salary bands from entry-level to senior executive roles across tech, finance, engineering, and remote global jobs.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    siteName: SITE_NAME,
    title: 'Highest Paying Careers in South Africa (2026 Salary Guide) | Graduates Hub',
    description:
      'Detailed breakdown of top-earning fields in South Africa. Explore 4-tier compensation tables, top graduate employers, foreign currency remote jobs, and salary-boosting certifications.',
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
    icon: Globe,
    title: 'Global Remote USD & EUR Earnings',
    body: 'Software engineering, cloud architecture, and data science enable SA professionals to earn international remote salaries in USD or Euros.',
  },
];

const salaryTableData = [
  {
    profession: 'Cloud Architecture & Lead Software Engineering',
    junior: 'R350,000 - R550,000',
    mid: 'R650,000 - R950,000',
    senior: 'R1,100,000 - R1,700,000',
    executive: 'R1,800,000 - R3,200,000+',
  },
  {
    profession: 'Actuarial Science & Financial Risk',
    junior: 'R380,000 - R600,000',
    mid: 'R750,000 - R1,100,000',
    senior: 'R1,300,000 - R2,000,000',
    executive: 'R2,200,000 - R4,000,000+',
  },
  {
    profession: 'Chartered Accounting (CA SA) & Financial Control',
    junior: 'R320,000 - R480,000',
    mid: 'R600,000 - R850,000',
    senior: 'R950,000 - R1,500,000',
    executive: 'R1,600,000 - R3,000,000+',
  },
  {
    profession: 'Data Science & Machine Learning Engineering',
    junior: 'R300,000 - R500,000',
    mid: 'R600,000 - R900,000',
    senior: 'R1,000,000 - R1,600,000',
    executive: 'R1,700,000 - R2,800,000+',
  },
  {
    profession: 'Specialized Medicine & Surgical Healthcare',
    junior: 'R450,000 - R650,000',
    mid: 'R800,000 - R1,200,000',
    senior: 'R1,500,000 - R2,500,000',
    executive: 'R2,500,000 - R5,000,000+',
  },
  {
    profession: 'Mining & Metallurgical Engineering',
    junior: 'R350,000 - R520,000',
    mid: 'R650,000 - R950,000',
    senior: 'R1,100,000 - R1,800,000',
    executive: 'R1,900,000 - R3,500,000+',
  },
  {
    profession: 'Corporate Law & Commercial Partners',
    junior: 'R280,000 - R450,000',
    mid: 'R550,000 - R850,000',
    senior: 'R950,000 - R1,600,000',
    executive: 'R1,800,000 - R4,500,000+',
  },
  {
    profession: 'Investment Banking & Private Equity',
    junior: 'R400,000 - R650,000',
    mid: 'R800,000 - R1,300,000',
    senior: 'R1,500,000 - R2,800,000',
    executive: 'R3,000,000 - R6,000,000+',
  },
];

const topEmployers = [
  {
    category: 'Banking & Investment Management',
    companies: ['Rand Merchant Bank (RMB)', 'Investec', 'Standard Bank CIB', 'Coronation Fund Managers', 'Allan Gray'],
    highlight: 'Top graduate starting packages (R450k-R650k/yr) with annual performance bonuses.',
  },
  {
    category: 'Technology & Cloud Development',
    companies: ['AWS Cape Town', 'Microsoft SA', 'Takealot Group', 'Derivco', 'Entelect', 'Yoco'],
    highlight: 'Competitive developer salaries, tech equipment allowances, and rapid merit promotions.',
  },
  {
    category: 'Management Consulting & Strategy',
    companies: ['McKinsey & Company', 'Boston Consulting Group (BCG)', 'Bain & Company', 'Deloitte', 'PwC'],
    highlight: 'Global mentorship, direct client exposure, and structured MBA/leadership sponsorship.',
  },
  {
    category: 'Engineering & Industrial Resources',
    companies: ['Sasol', 'Anglo American', 'De Beers Group', 'SAB / AB InBev', 'Eskom Transmission'],
    highlight: 'Field allowances, specialized technical training, and corporate housing benefits.',
  },
];

const highRoiCerts = [
  { title: 'AWS Certified Solutions Architect', field: 'Cloud Infrastructure', boost: '+25% to +40% Salary Boost', href: '/free-cloud-computing-courses' },
  { title: 'CFA (Chartered Financial Analyst)', field: 'Investment Management', boost: '+30% Salary Premium', href: '/free-courses-for-accounting-and-finance' },
  { title: 'CA (SA) Board Certification', field: 'Chartered Accounting', boost: '+35% Industry Benchmark', href: '/free-courses-for-accounting-and-finance' },
  { title: 'Google Professional Data Engineer', field: 'Big Data & AI', boost: '+25% Market Premium', href: '/free-courses-for-data-analysts' },
  { title: 'CISSP / CISM Security Certs', field: 'Cybersecurity Operations', boost: '+30% Security Premium', href: '/free-cybersecurity-courses' },
  { title: 'PMP Project Management', field: 'Enterprise Project Delivery', boost: '+20% Leadership Boost', href: '/free-agile-project-management-courses' },
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
    a: 'Specialized Surgeons, Actuarial Leads, Chief Technology Officers, Executive Mining Engineers, and Investment Banking Directors represent the highest paying careers in South Africa, with annual compensation exceeding R1.5 Million to R5 Million+.',
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
    a: 'Yes. South African tech and data professionals working remotely for European or US companies often earn $50,000 to $120,000+ USD per year (equivalent to R900,000 to R2.2 Million+ per year), significantly higher than local SA base averages.',
  },
];

export default function HighestPayingCareersSAPage() {
  return (
    <GuideTemplate
      canonicalUrl={CANONICAL}
      breadcrumb={[{ label: 'Highest Paying Careers South Africa' }]}
      heading="Highest Paying Careers in South Africa (2026 Salary Guide)"
      heroDescription="Discover the highest paying careers in South Africa. Explore detailed salary compensation bands from entry-level to senior executive roles across tech, finance, engineering, and foreign currency remote jobs."
      heroBadges={[
        { icon: DollarSign, label: 'High Earning Potential', iconClassName: 'text-amber-600' },
        { icon: TrendingUp, label: 'Fast-Track Growth', iconClassName: 'text-primary' },
        { icon: CheckCircle2, label: 'Verified Compensation Bands', iconClassName: 'text-green-600' },
      ]}
      authors={['jason', 'ndulamiso']}
      benefitsSectionTitle="Why Pursue a High-Paying Career in SA?"
      benefitsSectionSubtitle="High-paying fields offer financial security, rapid career progression, and global mobility for skilled professionals."
      benefits={benefits}
      preCoursesSection={
        <div className="space-y-16 mb-16">
          {/* Section 1: Detailed Salary Table */}
          <section className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <DollarSign size={20} />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                South Africa Salary Compensation Matrix (2026)
              </h2>
            </div>
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              Annual compensation benchmarks across key career stages in South Africa, from entry-level graduates to executive directors.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-[#FFF8F1] border-b border-[#D1C5B4] text-xs uppercase tracking-wider text-[#1F1B13]">
                    <th className="py-3.5 px-4 font-bold">Profession / Sector</th>
                    <th className="py-3.5 px-4 font-bold text-amber-900">Junior / Grad (0-2 Yrs)</th>
                    <th className="py-3.5 px-4 font-bold text-blue-900">Mid-Level (3-5 Yrs)</th>
                    <th className="py-3.5 px-4 font-bold text-emerald-900">Senior / Lead (6-10 Yrs)</th>
                    <th className="py-3.5 px-4 font-bold text-purple-900">Executive (10+ Yrs)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                  {salaryTableData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-gray-900">{row.profession}</td>
                      <td className="py-3.5 px-4 font-semibold text-amber-700">{row.junior}</td>
                      <td className="py-3.5 px-4 font-semibold text-blue-700">{row.mid}</td>
                      <td className="py-3.5 px-4 font-semibold text-emerald-700">{row.senior}</td>
                      <td className="py-3.5 px-4 font-extrabold text-purple-800">{row.executive}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: Top Employers */}
          <section className="bg-[#FFF8F1] rounded-2xl border border-[#D1C5B4] p-6 md:p-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                <Building size={20} />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                Top High-Paying Employers in South Africa
              </h2>
            </div>
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              These leading corporate intake programs consistently offer top-tier graduate starting packages and competitive salary progression.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {topEmployers.map((emp, i) => (
                <div key={i} className="bg-white rounded-xl border border-[#D1C5B4] p-5 shadow-sm">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{emp.category}</h3>
                  <ul className="flex flex-wrap gap-2 mb-3">
                    {emp.companies.map((c, j) => (
                      <span key={j} className="text-xs bg-[#FBF3EB] text-[#1F1B13] font-semibold px-2.5 py-1 rounded-md border border-[#D1C5B4]">
                        {c}
                      </span>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-500 italic">{emp.highlight}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Salary-Boosting Certifications */}
          <section className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-green-700">
                <Zap size={20} />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                Certifications That Instantly Boost Salaries
              </h2>
            </div>
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              Acquiring specialized industry certifications alongside your degree signals high technical value and commands higher starting pay.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {highRoiCerts.map((cert, k) => (
                <div key={k} className="border border-gray-200 rounded-xl p-4 flex flex-col justify-between hover:border-primary transition-colors bg-gray-50/50">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary">{cert.field}</span>
                    <h3 className="font-bold text-gray-900 text-base mt-1 mb-2">{cert.title}</h3>
                    <div className="text-xs font-bold text-green-700 bg-green-50 px-2 py-1 rounded inline-block mb-4">
                      {cert.boost}
                    </div>
                  </div>
                  <Link href={cert.href} className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1">
                    View Related Courses →
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: Remote Foreign Currency Advantage & Regional Differences */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Global Remote Earnings */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="text-amber-400" size={24} />
                <h3 className="text-xl font-bold">Earn Remote USD or Euros from SA</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                South African software developers, cloud engineers, data analysts, and UI/UX designers are increasingly hired remotely by European and US companies.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-amber-400 shrink-0" />
                  <span>Average Remote Developer Salary: <strong>$45,000 - $110,000 USD / year</strong></span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-amber-400 shrink-0" />
                  <span>Timezone Advantage: SA aligns perfectly with European (CET) business hours</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-amber-400 shrink-0" />
                  <span>Tax Benefits: Leverage SARS foreign employment structures and contracting exemptions</span>
                </li>
              </ul>
              <Link href="/it-careers-without-a-degree" className="text-xs font-bold bg-amber-400 text-slate-900 px-4 py-2 rounded-lg hover:bg-amber-300 transition-colors inline-block">
                Read IT &amp; Remote Tech Guide →
              </Link>
            </div>

            {/* Regional Differentials */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-primary" size={24} />
                <h3 className="text-xl font-bold text-gray-900">Joburg vs Cape Town Salary Differentials</h3>
              </div>
              <div className="space-y-4 text-sm text-gray-600">
                <div>
                  <h4 className="font-bold text-gray-900 text-base mb-1">Johannesburg &amp; Gauteng Hubs</h4>
                  <p className="text-xs leading-relaxed">
                    Johannesburg corporate headquarters (banks, mining houses, telecommunications) offer approximately <strong>10% to 15% higher local base salaries</strong> than Cape Town, driven by intense competition for executive talent.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base mb-1">Cape Town &amp; Western Cape Hubs</h4>
                  <p className="text-xs leading-relaxed">
                    Cape Town leads in technology startups, e-commerce, and international remote engineering hubs. While local base salaries can be slightly lower, Cape Town offers high lifestyle appeal and foreign contract opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
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
