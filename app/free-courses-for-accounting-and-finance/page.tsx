import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Clock, TrendingUp, Award, Calculator, BarChart2, ChevronRight } from 'lucide-react';
import GuideTemplate from '@/components/GuideTemplate';
import type { BenefitItem, CourseCategory, CareerPathItem, RelatedGuide, FaqItem } from '@/components/GuideTemplate';
import { courses } from '@/data/courses';
import { courses as allCourses } from '@/data/courses';

const SITE_URL = 'https://www.graduateshub.co.za';
const CANONICAL = `${SITE_URL}/free-courses-for-accounting-and-finance`;

export const metadata: Metadata = {
  title: 'Best Free Courses for Accounting & Finance Careers (2026)',
  description:
    'Discover the best free online courses for accounting and finance careers in 2026. Learn bookkeeping, financial accounting, payroll, and more. All free with certificates.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Best Free Courses for Accounting & Finance Careers (2026) | Graduates Hub',
    description:
      'Discover the best free online courses for accounting and finance careers in 2026. Learn bookkeeping, financial accounting, payroll, and more. All free with certificates.',
    url: CANONICAL,
  },
};

const courseCategories: CourseCategory[] = [
  { label: 'Accounting Foundations', description: 'The core principles every accounting professional needs before moving into specialised roles.', ids: ['fundamentals-of-accounting', 'diploma-financial-accounting', 'introduction-bookkeeping-accounting'], categoryHref: '/category/accounting', categoryLabel: 'Accounting & Finance' },
  { label: 'Bookkeeping & Payroll', description: 'Two of the most in-demand entry-level skills across small businesses and corporate finance teams.', ids: ['diploma-effective-bookkeeping-payroll', 'payroll-computation-bookkeeping', 'introduction-payroll-accounting'], categoryHref: '/category/accounting', categoryLabel: 'Accounting & Finance' },
  { label: 'Financial Management & Analysis', description: 'Go beyond the basics. Understand how businesses manage, report, and evaluate financial performance.', ids: ['mastering-financial-statement-analysis', 'diploma-financial-management-managers', 'internal-auditing'], categoryHref: '/category/accounting', categoryLabel: 'Accounting & Finance' },
];

const benefits: BenefitItem[] = [
  { icon: TrendingUp, title: 'High Demand Across All Industries', body: 'Every organisation, public, private, or nonprofit, needs accounting and finance professionals.' },
  { icon: Calculator, title: 'Strong Job Stability', body: 'Accounting roles consistently rank among the most recession-resistant careers globally.' },
  { icon: BarChart2, title: 'Clear Career Progression', body: 'From Accounts Assistant to Financial Manager. The path is well-defined and achievable.' },
  { icon: Award, title: 'Earn Certificates', body: 'Every course includes a downloadable certificate to add to your CV and LinkedIn profile.' },
  { icon: Clock, title: 'Self-Paced Learning', body: 'Study around your schedule. Most foundational courses take just a few hours to complete.' },
  { icon: CheckCircle2, title: '100% Free to Start', body: 'No upfront cost. Every course on Graduates Hub is free to begin today.' },
];

const learningPath = [
  { step: '1', title: 'Learn Accounting Basics', detail: 'Start with fundamentals of accounting and bookkeeping to understand how financial records work.', href: '/course/fundamentals-of-accounting', courseName: 'Fundamentals of Accounting' },
  { step: '2', title: 'Understand Financial Concepts', detail: 'Move into financial management, statement analysis, and how businesses evaluate performance.', href: '/course/mastering-financial-statement-analysis', courseName: 'Mastering Financial Statement Analysis' },
  { step: '3', title: 'Learn Payroll & Compliance', detail: 'Payroll and accounts management skills are among the most hired-for in entry-level finance roles.', href: '/course/diploma-effective-bookkeeping-payroll', courseName: 'Diploma in Effective Bookkeeping and Payroll' },
  { step: '4', title: 'Apply with Real Scenarios', detail: 'Practice building financial reports, reconciling accounts, and interpreting balance sheets using industry-standard software.', href: '/course/accounts-management-xero', courseName: 'Accounts Management Using Xero' },
];

const careerPaths: CareerPathItem[] = [
  { role: 'Accounts Assistant', detail: 'Entry-level role supporting day-to-day financial recording and reconciliation.' },
  { role: 'Bookkeeper', detail: 'Manages financial records, ledgers, and cash flow for businesses of all sizes.' },
  { role: 'Payroll Administrator', detail: 'Processes employee salaries, deductions, and statutory submissions.' },
  { role: 'Finance Assistant', detail: 'Supports the finance team with reporting, invoicing, and data management.' },
  { role: 'Junior Accountant', detail: 'Prepares financial statements and supports month-end close processes.' },
  { role: 'Financial Analyst', detail: 'Analyses financial data to guide business decisions. Requires further learning.' },
];

const relatedGuides: RelatedGuide[] = [
  { title: 'Best Free Courses for Beginners (2026)', desc: 'New to learning online? Start here with zero prior experience required.', href: '/free-courses-for-beginners' },
  { title: 'Best Free Courses for Data Analysts (2026)', desc: 'Excel and financial analysis skills that complement an accounting career.', href: '/free-courses-for-data-analysts' },
  { title: 'Best Free Courses with Certificates (2026)', desc: 'The complete guide to free certified courses across all fields.', href: '/free-courses-with-certificates' },
  { title: 'Best Free Business Courses Online (2026)', desc: 'Project management, Lean Six Sigma, and business strategy skills that complement accounting.', href: '/free-business-courses' },
];

const faqs: FaqItem[] = [
  { q: 'Do I need a degree to work in accounting or finance?', a: 'Not for entry-level roles. Many bookkeeping, payroll, and accounts assistant positions are accessible with certificates and demonstrated practical skills. For advanced roles like Chartered Accountant or Auditor, formal qualifications are typically required. Free courses are an excellent starting point to build foundational knowledge and explore the field before committing to a full degree.' },
  { q: 'How long does it take to complete these accounting courses?', a: 'Short certificate courses typically take 2 to 6 hours. Most can be completed in a weekend. Diploma-level programs range from 10 to 30 hours. Because everything is self-paced, you study at whatever speed suits your schedule.' },
  { q: 'Are free accounting certificates recognised by employers?', a: 'CPD-accredited certificates from providers like Alison are recognised by thousands of employers globally. While they carry more weight when combined with practical experience, they demonstrate commitment, cover specific competencies, and give interviewers a clear talking point during the hiring process.' },
  { q: 'What is the difference between bookkeeping and accounting?', a: 'Bookkeeping involves recording financial transactions accurately. It is the foundation. Accounting involves interpreting, analysing, and reporting on those records to support business decision-making. Many professionals start with bookkeeping and progress into broader accounting roles over time.' },
  { q: 'Do I need to know maths to study accounting?', a: 'You need basic arithmetic and the ability to work carefully with numbers, not advanced mathematics. Accounting is far more about attention to detail, logical thinking, and understanding financial systems than complex calculations. Most modern accounting uses software to handle the computation.' },
];

export default function FreeCoursesAccountingFinancePage() {
  const featured = courseCategories.flatMap((cat) =>
    cat.ids.map((id) => allCourses.find((c) => c.id === id)).filter(Boolean)
  );
  const relatedCourses = courses
    .filter(
      (c) =>
        c.category.toLowerCase().includes('accounting') &&
        c.rating >= 4.6 &&
        !featured.find((f) => f?.id === c.id)
    )
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 12);

  return (
    <GuideTemplate
      canonicalUrl={CANONICAL}
      datePublished="2026-01-01"
      breadcrumb={[{ label: 'Accounting & Finance', href: '/category/accounting' }, { label: 'Free Courses for Accounting & Finance' }]}
      heading="Best Free Courses for Accounting & Finance Careers (2026)"
      heroDescription="Accounting and finance are among the most stable and in-demand career paths globally, offering strong job security, clear progression, and opportunities across every industry. This guide covers the best free courses to help you build practical, job-ready skills without needing a degree."
      heroBadges={[
        { icon: CheckCircle2, label: 'No Degree Required', iconClassName: 'text-green-500' },
        { icon: Award, label: 'Free Certificates Included', iconClassName: 'text-primary' },
        { icon: Clock, label: 'Self-Paced' },
      ]}
      authors={['ndulamiso']}
      lastUpdated="January 2026"
      benefitsSectionTitle="Why Choose a Career in Accounting & Finance?"
      benefitsSectionSubtitle="Every business relies on financial management, which means skilled professionals are always needed, regardless of economic conditions."
      benefits={benefits}
      courseCategories={courseCategories}
      relatedCourses={relatedCourses}
      carouselTitle="More Accounting & Finance Courses"
      carouselSubtitle="Additional free courses to deepen your accounting and financial knowledge"
      postCarouselSection={
        <>
          <section className="mb-20 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">Best Learning Path for Accounting & Finance</h2>
            <p className="text-gray-500 mb-10 text-lg">If you are starting from scratch, follow this structured roadmap to build both theoretical and practical knowledge step by step.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {learningPath.map(({ step, title, detail, href, courseName }) => (
                <div key={step} className="flex gap-4">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-extrabold text-lg shrink-0">{step}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">{title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-2">{detail}</p>
                    <Link href={href} className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-blue-800 transition-colors">
                      <ChevronRight size={12} /> {courseName}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-2">Do You Need a Degree to Work in Accounting or Finance?</h2>
            <p className="text-blue-100 mb-10">Not always. The answer depends on the role you are targeting.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold text-white text-lg mb-4">You can start without a degree:</h3>
                <ul className="space-y-3">
                  {['Entry-level bookkeeping and payroll roles', 'Accounts assistant and finance support positions', 'Practical certifications recognised by employers'].map((point) => (
                    <li key={point} className="flex items-start gap-2 text-blue-100 text-sm">
                      <CheckCircle2 size={16} className="text-green-300 mt-0.5 shrink-0" />{point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold text-white text-lg mb-4">For advanced roles, consider further study:</h3>
                <ul className="space-y-3">
                  {['Chartered Accountant (CA) requires formal qualifications', 'Auditor roles typically require a recognised accounting degree', 'Financial management positions benefit from advanced credentials'].map((point) => (
                    <li key={point} className="flex items-start gap-2 text-blue-100 text-sm">
                      <CheckCircle2 size={16} className="text-green-300 mt-0.5 shrink-0" />{point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </>
      }
      careerPathsTitle="Career Paths in Accounting & Finance"
      careerPathsSubtitle="These free courses lead directly to entry-level roles and lay the foundation for more senior positions with further learning and experience."
      careerPaths={careerPaths}
      careerPathsBrowseHref="/category/accounting"
      careerPathsBrowseLabel="Browse all Accounting & Finance courses"
      relatedGuides={relatedGuides}
      faqs={faqs}
      ctaHeading="Ready to Start Your Accounting & Finance Career?"
      ctaBody="Accounting and finance are skills that remain relevant in every economy. Start with the basics, build practical skills, and progress consistently. You do not need to learn everything at once. Just take the first step."
      ctaPrimaryLabel="Browse Accounting & Finance Courses"
      ctaPrimaryHref="/category/accounting"
      ctaSecondaryLabel="All Free Courses with Certificates"
      ctaSecondaryHref="/free-courses-with-certificates"
    />
  );
}
