import type { Metadata } from 'next';
import { CheckCircle2, Clock, TrendingUp, Award, Briefcase, Globe, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import GuideTemplate from '@/components/GuideTemplate';
import type { BenefitItem, CourseCategory, CareerPathItem, RelatedGuide, FaqItem } from '@/components/GuideTemplate';
import { courses } from '@/data/courses';
import { courses as allCourses } from '@/data/courses';

const SITE_URL = 'https://www.graduateshub.co.za';
const CANONICAL = `${SITE_URL}/free-business-courses`;

export const metadata: Metadata = {
  title: 'Best Free Business Courses Online (2026) | Graduates Hub',
  description:
    'Discover the best free business courses in 2026. Project management, Lean Six Sigma, GDPR compliance, and economic strategy. All CPD-accredited with free certificates.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Best Free Business Courses Online (2026) | Graduates Hub',
    description:
      'Discover the best free business courses in 2026. Project management, Lean Six Sigma, GDPR compliance, and economic strategy. All CPD-accredited with free certificates.',
    url: CANONICAL,
  },
};

const courseCategories: CourseCategory[] = [
  {
    label: 'Project Management',
    description: 'The skills behind planning, executing, and delivering projects on time and within scope.',
    ids: ['diploma-project-management', 'agile-project-management'],
    categoryHref: '/category/business',
    categoryLabel: 'Business',
  },
  {
    label: 'Process & Quality',
    description: 'Lean, Six Sigma, and ISO auditing frameworks used across manufacturing, logistics, and corporate services.',
    ids: ['lean-six-sigma-white-belt', 'lean-six-sigma-yellow-belt', 'iso-19011-lead-auditor'],
    categoryHref: '/category/business',
    categoryLabel: 'Business',
  },
  {
    label: 'Compliance & Regulation',
    description: 'The regulatory knowledge required in any organisation that handles personal data or financial transactions.',
    ids: ['gdpr-general-data-protection', 'anti-money-laundering'],
    categoryHref: '/category/business',
    categoryLabel: 'Business',
  },
  {
    label: 'Economics & Strategy',
    description: 'Macroeconomic theory, sustainable development, and AI in business for those thinking at a strategic level.',
    ids: ['intro-economic-growth-development', 'diploma-economic-growth-development', 'intro-ai-business'],
    categoryHref: '/category/business',
    categoryLabel: 'Business',
  },
];

const benefits: BenefitItem[] = [
  { icon: TrendingUp, title: 'Works in Every Industry', body: 'Business skills transfer across sectors. Project managers, compliance officers, and operations specialists are hired in every field.' },
  { icon: Briefcase, title: 'No Prior Experience Required', body: 'All four tracks start from beginner level. No business degree or corporate background is needed to begin.' },
  { icon: Award, title: 'CPD-Accredited Certificates', body: 'Every course issues a CPD-accredited certificate on completion. Accepted by employers in South Africa and internationally.' },
  { icon: Globe, title: 'Globally Recognised Frameworks', body: 'Lean Six Sigma, GDPR, ISO 9001, and Agile are used by organisations worldwide. These are not local qualifications.' },
  { icon: Clock, title: 'Self-Paced Learning', body: 'Certificate courses complete in 2 to 8 hours. Diplomas range from 10 to 15 hours. Study around your existing commitments.' },
  { icon: CheckCircle2, title: '100% Free to Start', body: 'Every course on Graduates Hub is free to begin. A paid physical certificate is optional but the full course content costs nothing.' },
];

const learningPath = [
  { step: '1', title: 'Learn How Projects Work', detail: 'The Diploma in Project Management covers the full lifecycle: initiation, planning, execution, monitoring, and closure. The foundation for most business roles.', href: '/course/diploma-project-management', courseName: 'Diploma in Project Management' },
  { step: '2', title: 'Improve Processes with Data', detail: 'Lean Six Sigma Yellow Belt introduces the DMAIC framework for identifying waste, measuring performance, and driving measurable process improvements.', href: '/course/lean-six-sigma-yellow-belt', courseName: 'Lean Six Sigma: Yellow Belt' },
  { step: '3', title: 'Meet Regulatory Requirements', detail: 'GDPR is now the baseline for any role involving personal data. Understanding data protection obligations is expected in compliance, HR, marketing, and IT roles alike.', href: '/course/gdpr-general-data-protection', courseName: 'General Data Protection Regulation (GDPR)' },
  { step: '4', title: 'Understand Economic Strategy', detail: 'Introduction to Economic Growth and Development gives you the macroeconomic context behind business decisions, growth models, and sustainable development policy.', href: '/course/intro-economic-growth-development', courseName: 'Introduction to Economic Growth and Development' },
];

const careerPaths: CareerPathItem[] = [
  { role: 'Project Coordinator', detail: 'Entry-level project role. Supports planning, scheduling, and stakeholder communication under a senior PM.' },
  { role: 'Scrum Master', detail: 'Agile team facilitator. Removes blockers, runs ceremonies, and protects the team from scope creep.' },
  { role: 'Quality Assurance Specialist', detail: 'Process improvement and ISO compliance role. Present wherever manufacturing, logistics, or corporate quality standards apply.' },
  { role: 'Compliance Officer', detail: 'Data protection, AML, and regulatory adherence. Fast-growing role in banking, insurance, fintech, and any regulated industry.' },
  { role: 'Operations Manager', detail: 'Senior role overseeing process efficiency and output quality. Lean Six Sigma is frequently listed as a preferred qualification.' },
  { role: 'Business Analyst', detail: 'Cross-functional role bridging data, operations, and strategy. In demand at corporates, consultancies, and public sector organisations.' },
];

const relatedGuides: RelatedGuide[] = [
  { title: 'Free AI Courses for Beginners (2026)', desc: 'Includes Introduction to AI in Business. No coding background required.', href: '/free-ai-courses-for-beginners' },
  { title: 'Free Courses for Accounting & Finance (2026)', desc: 'Bookkeeping, payroll, financial management, and auditing. A natural complement to business skills.', href: '/free-courses-for-accounting-and-finance' },
  { title: 'Free Courses with Certificates (2026)', desc: 'The complete guide to free certified courses across all fields.', href: '/free-courses-with-certificates' },
  { title: 'Browse All Business Courses', desc: 'Project management, Lean Six Sigma, GDPR, and economic strategy in one place.', href: '/category/business' },
];

const faqs: FaqItem[] = [
  { q: 'Do I need business experience to start these courses?', a: 'No. The Lean Six Sigma White Belt and Introduction to Economic Growth and Development are both designed for complete beginners. The Project Management diploma and Agile certificate assume no prior project management knowledge. Start with whichever track matches your immediate career goal.' },
  { q: 'What is the difference between the Lean Six Sigma White Belt and Yellow Belt?', a: 'The White Belt is a short introduction to Lean Six Sigma vocabulary and philosophy, designed so that any employee can participate intelligently in company-wide improvement initiatives. The Yellow Belt goes deeper: it covers the DMAIC framework in detail, process mapping, and data collection methods. If you want to actively lead or contribute to improvement projects, the Yellow Belt is the one employers look for.' },
  { q: 'Is GDPR relevant if I am based in South Africa?', a: "Yes. Any organisation that processes data belonging to EU citizens must comply with GDPR regardless of where it is based. Beyond the EU, GDPR has directly influenced South Africa's own POPIA legislation. Understanding GDPR gives you a working knowledge of both frameworks and makes you more valuable in any compliance or data-handling role." },
  { q: 'Which business course gives the best return for career progression?', a: 'The Diploma in Project Management has the broadest applicability. Project management is a recognised profession across almost every industry, and a formal diploma signals that you can take ownership of deliverables and manage stakeholders. If you are already in a tech environment, the Agile Project Management certificate is the faster, more targeted option.' },
  { q: 'Can these courses help me run my own business?', a: 'Yes, particularly the Project Management, Economics, and Compliance tracks. Understanding how to plan and execute projects, read macroeconomic signals, and stay compliant with data and financial regulations are practical skills for any business owner. The Diploma in Sustainable Development is also increasingly relevant as clients and investors ask for ESG evidence.' },
];

export default function FreeBusinessCoursesPage() {
  const featured = courseCategories.flatMap((cat) =>
    cat.ids.map((id) => allCourses.find((c) => c.id === id)).filter(Boolean)
  );
  const relatedCourses = courses
    .filter((c) => c.category.toLowerCase().includes('business') && c.rating >= 4.5 && !featured.find((f) => f?.id === c.id))
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 10);

  return (
    <GuideTemplate
      canonicalUrl={CANONICAL}
      datePublished="2026-01-01"
      breadcrumb={[{ label: 'Free Business Courses' }]}
      heading="Best Free Business Courses Online (2026)"
      heroDescription="Business skills transfer across every industry and every organisation size. This guide covers the best free courses across project management, process improvement, regulatory compliance, and economic strategy, all CPD-accredited and beginner-accessible."
      heroBadges={[
        { icon: CheckCircle2, label: 'No Experience Required', iconClassName: 'text-green-500' },
        { icon: Award, label: 'CPD-Accredited Certificates', iconClassName: 'text-primary' },
        { icon: Clock, label: 'Self-Paced' },
      ]}
      authors={['ndulamiso']}
      lastUpdated="January 2026"
      benefitsSectionTitle="Why Study Business?"
      benefitsSectionSubtitle="Every organisation runs on business fundamentals. The skills in this guide appear in job listings across tech, finance, government, healthcare, and retail."
      benefits={benefits}
      courseCategories={courseCategories}
      relatedCourses={relatedCourses}
      carouselTitle="More Business Courses"
      carouselSubtitle="Additional free courses to round out your business and management knowledge"
      postCarouselSection={
        <>
          <section className="mb-20 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">Best Learning Path for Business</h2>
            <p className="text-gray-500 mb-10 text-lg">If you are starting from scratch, follow this path to build a complete, employer-ready business skill set step by step.</p>
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
            <h2 className="text-2xl md:text-3xl font-extrabold mb-2">Do You Need a Degree to Work in Business?</h2>
            <p className="text-blue-100 mb-10">Not for most entry-level and mid-level roles. Here is how to think about it.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold text-white text-lg mb-4">You can start without a degree:</h3>
                <ul className="space-y-3">
                  {['Project coordinator and administrator roles', 'Process improvement and quality support positions', 'Compliance and data protection assistant roles', 'Operations support and business analyst entry points'].map((point) => (
                    <li key={point} className="flex items-start gap-2 text-blue-100 text-sm">
                      <CheckCircle2 size={16} className="text-green-300 mt-0.5 shrink-0" />{point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold text-white text-lg mb-4">For senior roles, further study helps:</h3>
                <ul className="space-y-3">
                  {['Senior project manager roles often require a PMP or Prince2 certification', 'Chartered compliance and risk roles typically require postgraduate qualifications', 'Executive leadership benefits from an MBA or equivalent credential'].map((point) => (
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
      careerPathsTitle="Career Paths in Business"
      careerPathsSubtitle="These courses map directly to entry-level and mid-level roles available across every industry."
      careerPaths={careerPaths}
      careerPathsBrowseHref="/category/business"
      careerPathsBrowseLabel="Browse all Business courses"
      relatedGuides={relatedGuides}
      faqs={faqs}
      ctaHeading="Ready to Build Your Business Skills?"
      ctaBody="Pick one track, complete it, and apply it. Business knowledge compounds when you practice it in real situations. The courses here give you the frameworks. You provide the context."
      ctaPrimaryLabel="Browse All Business Courses"
      ctaPrimaryHref="/category/business"
      ctaSecondaryLabel="All Free Courses with Certificates"
      ctaSecondaryHref="/free-courses-with-certificates"
    />
  );
}
