import type { Metadata } from 'next';
import { CheckCircle2, Clock, TrendingUp, Award, BookOpen, Users, Star } from 'lucide-react';
import Link from 'next/link';
import GuideTemplate from '@/components/course/GuideTemplate';
import type { BenefitItem, CourseCategory, CareerPathItem, RelatedGuide, FaqItem } from '@/components/course/GuideTemplate';
import { courses } from '@/data/courses';
import { courses as allCourses } from '@/data/courses';

const SITE_URL = 'https://www.graduateshub.co.za';
const CANONICAL = `${SITE_URL}/free-courses-with-certificates`;

export const metadata: Metadata = {
  title: 'Best Free Online Courses with Certificates (2026)',
  description:
    'The best free certified courses across multiple platforms in 2026. Hand-picked courses in IT, Business, Marketing, Finance, and Software Development from providers like Google, IBM, Microsoft, and Alison.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Best Free Online Courses with Certificates (2026) | Graduates Hub',
    description:
      'The best free certified courses across multiple platforms in 2026. Hand-picked courses in IT, Business, Marketing, Finance, and Software Development from providers like Google, IBM, Microsoft, and Alison.',
    url: CANONICAL,
  },
};

const courseCategories: CourseCategory[] = [
  { label: 'IT & Technology', slug: 'it', description: 'From networking fundamentals to cybersecurity and IT management.', ids: ['diploma-in-it-management', 'computer-networking', 'html-css-web-dev'] },
  { label: 'Business & Project Management', slug: 'business', description: 'Learn the skills that keep organisations running efficiently.', ids: ['diploma-project-management', 'agile-project-management', 'lean-six-sigma-yellow-belt'] },
  { label: 'Accounting & Finance', slug: 'accounting', description: 'Read financial statements, manage books, and understand money.', ids: ['diploma-financial-management-managers', 'diploma-effective-bookkeeping-payroll', 'accounts-management-xero'] },
  { label: 'Digital Marketing', slug: 'marketing', description: 'SEO, content strategy, social media, and conversion skills.', ids: ['growth-hacking-techniques-for-digital-marketing', 'digital-marketing', 'using-digital-marketing-to-convert-customers'] },
  { label: 'Software Development', slug: 'software-engineering', description: 'Web development, databases, and agile engineering practices.', ids: ['agile-essentials', 'it-management-software-databases', 'diploma-ecommerce-web-dev'] },
];

const benefits: BenefitItem[] = [
  { icon: Clock, title: 'Learn at Your Own Pace', body: 'No fixed schedule. Study in the morning, evening, or whenever suits your life.' },
  { icon: Award, title: 'Earn a Recognised Certificate', body: 'Downloadable certificates you can add to your CV and LinkedIn profile immediately.' },
  { icon: TrendingUp, title: 'Boost Your Career', body: 'Gain skills that employers are actively looking for across every industry.' },
  { icon: BookOpen, title: 'No Upfront Cost', body: 'Every course on Graduates Hub is free to start. No credit card required.' },
  { icon: Users, title: 'Ideal for Career Switchers', body: 'Practical, beginner-friendly courses designed to get you job-ready faster.' },
  { icon: Star, title: 'Top-Rated Content', body: 'Only highly rated courses make our list, quality you can trust.' },
];

const careerPaths: CareerPathItem[] = [
  { role: 'Data Analyst', category: 'IT & Accounting', href: '/category/it' },
  { role: 'Digital Marketer', category: 'Marketing', href: '/category/marketing' },
  { role: 'Junior Developer', category: 'Software Development', href: '/category/software-engineering' },
  { role: 'Project Coordinator', category: 'Business & Management', href: '/category/business' },
  { role: 'Bookkeeper', category: 'Accounting & Finance', href: '/category/accounting' },
  { role: 'IT Support Technician', category: 'IT Courses', href: '/category/it' },
];

const relatedGuides: RelatedGuide[] = [
  { title: 'How to Get Your First Graduate Job in SA (2026)', desc: 'A step-by-step guide to landing your first job — CV writing, skills gaps, interview prep, and the hidden job market.', href: '/first-graduate-job-south-africa' },
  { title: 'Best Free AI Courses for Beginners (2026)', desc: 'No coding required. Start learning Artificial Intelligence, Machine Learning, and Generative AI for free.', href: '/free-ai-courses-for-beginners' },
  { title: 'Best Free Courses for Data Analysts (2026)', desc: 'SQL, Python, databases, and financial analysis, the full data analyst learning path.', href: '/free-courses-for-data-analysts' },
  { title: 'Best Free Business Courses Online (2026)', desc: 'Project management, Lean Six Sigma, GDPR, and economic strategy. All free with certificates.', href: '/free-business-courses' },
];

const faqs: FaqItem[] = [
  { q: 'Are free online courses with certificates worth it?', a: 'Yes, especially for entry-level roles and career changers. Free certificates demonstrate initiative and practical skills to employers. While they do not replace a formal degree, they are a credible way to show you have learned and applied a specific skill set.' },
  { q: 'How long do free online courses take to complete?', a: 'It depends on the course. Short certificates typically take 2 to 6 hours, while comprehensive diplomas can range from 10 to 20+ hours. Most learners complete a certificate in one to two weeks studying part-time.' },
  { q: 'Are the certificates on Graduates Hub recognised by employers?', a: 'Certificate recognition depends on the provider and the role you are targeting. Courses from established platforms carry more weight when combined with practical experience or a portfolio of work. Most hiring managers treat a free certificate as a positive signal of initiative and self-direction rather than a formal qualification. For roles that specify CPD-accredited credentials, look for diplomas from accredited providers.' },
  { q: 'Do I need any prior experience to start?', a: 'Most courses are designed for beginners and require no prior experience. Each course page includes a Target Audience section so you can confirm the right fit before you begin.' },
  { q: 'Can I do more than one course at a time?', a: 'Absolutely. Many learners combine a technical course (like IT or Development) with a soft-skills course (like Project Management) to build a well-rounded profile. Start with whichever aligns most closely with your career goal.' },
];

const exploreCategories = [
  { label: 'IT & Technology', href: '/category/it' },
  { label: 'Software Development', href: '/category/software-engineering' },
  { label: 'Business & Management', href: '/category/business' },
  { label: 'Accounting & Finance', href: '/category/accounting' },
  { label: 'Digital Marketing', href: '/category/marketing' },
];

export default function FreeCoursesWithCertificatesPage() {
  const featured = courseCategories.flatMap((cat) =>
    cat.ids.map((id) => allCourses.find((c) => c.id === id)).filter(Boolean)
  );
  const relatedCourses = courses
    .filter((c) => c.rating >= 4.8 && !featured.find((f) => f?.id === c.id))
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 12);

  return (
    <GuideTemplate
      canonicalUrl={CANONICAL}
      breadcrumb={[{ label: 'Free Online Courses with Certificates' }]}
      heading="Best Free Online Courses with Certificates (2026)"
      heroDescription="Looking to upgrade your skills without spending money? We have curated the best free online courses with certificates across IT, Business, Marketing, Finance, and Software Development, all free to start, all career-focused."
      heroBadges={[
        { icon: CheckCircle2, label: '100% Free to Start', iconClassName: 'text-green-500' },
        { icon: Award, label: 'Recognised Certificates', iconClassName: 'text-primary' },
        { icon: Clock, label: 'Self-Paced Learning' },
      ]}
      authors={['jason', 'ndulamiso']}
      lastUpdated="January 2026"
      benefitsSectionTitle="Why Choose Free Online Courses?"
      benefitsSectionSubtitle="Free online courses have become one of the fastest ways to gain job-ready skills. Here is why they are worth considering."
      benefits={benefits}
      courseCategories={courseCategories}
      relatedCourses={relatedCourses}
      carouselTitle="More Top-Rated Free Courses"
      carouselSubtitle="Highly rated courses across all categories, free to start"
      postCarouselSection={
        <>
          <div className="mb-20 bg-blue-50 border border-blue-100 rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-bold text-gray-900 mb-1">Looking specifically for Alison courses?</p>
              <p className="text-sm text-gray-500">We have a dedicated guide covering the top CPD-accredited diplomas and certificates on the Alison platform.</p>
            </div>
            <Link href="/best-alison-courses-with-certificates" className="shrink-0 bg-primary hover:bg-blue-800 text-white font-bold text-sm px-5 py-2.5 rounded-lg transition-colors whitespace-nowrap">
              View Alison Guide →
            </Link>
          </div>

          <section className="mb-20 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">How to Choose the Right Course</h2>
            <p className="text-gray-500 mb-10">Not all courses suit every goal. Here is how to pick the right one.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { n: '1', title: 'Define Your Goal', items: ['Career change? Choose career-focused courses with a clear job outcome.', 'Skill upgrade? Pick a niche topic in your existing field.', 'Exploration? Start with a beginner-level certificate to test your interest.'] },
                { n: '2', title: 'Check Course Duration', body: 'Short courses (2 to 6 hours) are great for quick wins and adding specific tools to your CV. Diplomas (10 to 20 hours) provide deeper, more comprehensive knowledge that stands out to employers.' },
                { n: '3', title: 'Look for Certificates', body: 'Courses with certificates can improve your CV, strengthen your LinkedIn profile, and demonstrate initiative to potential employers. Every course on Graduates Hub includes a downloadable certificate on completion.' },
              ].map((s) => (
                <div key={s.n} className="flex flex-col">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-extrabold text-lg mb-4 shrink-0">{s.n}</div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{s.title}</h3>
                  {'items' in s ? (
                    <ul className="text-gray-600 text-sm space-y-2">
                      {s.items!.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2 size={15} className="text-green-500 mt-0.5 shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-600 text-sm leading-relaxed">{s.body}</p>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Are Free Certificates Worth It?</h2>
              <p className="text-blue-100 text-lg mb-6 max-w-2xl leading-relaxed">Yes, especially if you are starting out. While they may not replace a university degree, free certificates show employers that you are proactive, self-directed, and genuinely interested in developing your skills.</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { stat: 'Show initiative', body: 'Demonstrates that you learn independently and take career development seriously.' },
                  { stat: 'Prove practical skills', body: 'Employers value demonstrated ability. A certificate is tangible proof you completed structured training.' },
                  { stat: 'Stand out in entry-level roles', body: 'In competitive entry-level markets, every credential helps you move ahead of the queue.' },
                ].map(({ stat, body }) => (
                  <div key={stat} className="bg-white/10 rounded-xl p-5 backdrop-blur-sm">
                    <p className="font-bold text-white mb-2">{stat}</p>
                    <p className="text-blue-100 text-sm leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      }
      careerPathsTitle="Career Paths You Can Start with Free Courses"
      careerPathsSubtitle="These free courses lead directly to entry-level roles that are in demand right now."
      careerPaths={careerPaths}
      relatedGuides={relatedGuides}
      exploreCategories={exploreCategories}
      faqs={faqs}
      ctaHeading="Ready to Begin?"
      ctaBody="Pick one course, complete it, and apply what you learn. The key is consistency: small steps taken regularly lead to real results."
      ctaPrimaryLabel="Browse All Courses"
      ctaPrimaryHref="/categories"
      ctaSecondaryLabel="Search a Specific Topic"
      ctaSecondaryHref="/search"
    />
  );
}
