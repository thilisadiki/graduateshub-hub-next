import type { Metadata } from 'next';
import { CheckCircle2, Clock, TrendingUp, Award, BookOpen, Lightbulb, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import GuideTemplate from '@/components/GuideTemplate';
import type { BenefitItem, CourseCategory, CareerPathItem, RelatedGuide, FaqItem } from '@/components/GuideTemplate';
import { courses } from '@/data/courses';
import { courses as allCourses } from '@/data/courses';

const SITE_URL = 'https://www.graduateshub.co.za';
const CANONICAL = `${SITE_URL}/free-courses-for-beginners`;

export const metadata: Metadata = {
  title: 'Best Free Courses for Beginners: No Experience Needed (2026)',
  description:
    'Discover the best free online courses for complete beginners in 2026. No experience needed. Start learning Excel, Python, Business, Accounting, or Software Development from scratch today.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Best Free Courses for Beginners: No Experience Needed (2026) | Graduates Hub',
    description:
      'Discover the best free online courses for complete beginners in 2026. No experience needed. Start learning Excel, Python, Business, Accounting, or Software Development from scratch today.',
    url: CANONICAL,
  },
};

const courseCategories: CourseCategory[] = [
  { label: 'Technology for Beginners', slug: 'it', description: 'Understand computers, the internet, and foundational tech concepts. No technical knowledge required.', ids: ['diploma-fundamentals-ai', 'intro-computer-hardware-software', 'html-css-web-dev'] },
  { label: 'Data & Productivity Tools', slug: 'data-analytics', description: 'Excel, Python, and digital marketing, the tools that appear in almost every job description.', ids: ['microsoft-excel-data-analysis', 'python-for-beginners-data', 'basic-concepts-of-digital-marketing'] },
  { label: 'Business Fundamentals', slug: 'business', description: 'Learn how organisations work, planning, processes, and productivity from the ground up.', ids: ['diploma-project-management', 'lean-six-sigma-white-belt', 'time-management-for-professionals'] },
  { label: 'Accounting & Finance', slug: 'accounting', description: 'Understand how money moves in a business, no maths degree required.', ids: ['fundamentals-of-accounting', 'introduction-bookkeeping-accounting', 'introduction-payroll-accounting'] },
];

const benefits: BenefitItem[] = [
  { icon: CheckCircle2, title: 'Zero Prior Knowledge Needed', body: 'Every course here is designed for complete beginners. You start from scratch: no degree, no experience, no technical background required.' },
  { icon: Clock, title: 'Self-Paced, No Deadlines', body: 'Study whenever it fits your life. Pause, restart, or slow down, there are no fixed schedules or pressure.' },
  { icon: Award, title: 'Earn a Certificate', body: 'Each course includes a downloadable certificate you can add to your CV or LinkedIn profile immediately after completing.' },
  { icon: BookOpen, title: '100% Free to Start', body: 'No cost, no subscription, no credit card. Every course on Graduates Hub is free to start today.' },
  { icon: Lightbulb, title: 'Build Real, Usable Skills', body: 'Courses focus on practical, hands-on skills, not academic theory. You finish with something you can actually apply.' },
  { icon: TrendingUp, title: 'Progress at Your Own Pace', body: 'Start with a 2-hour certificate and build up to a full diploma. There is no rush, consistent progress beats a sprint.' },
];

const learningPaths = [
  {
    label: 'Tech Path',
    color: 'bg-blue-50 border-blue-100',
    accent: 'text-primary',
    steps: [
      { title: 'AI Fundamentals', href: '/course/diploma-fundamentals-ai' },
      { title: 'Python for Beginners', href: '/course/python-for-beginners-data' },
      { title: 'Data Analysis with Excel', href: '/course/microsoft-excel-data-analysis' },
    ],
    outcome: 'Junior Data Analyst / IT Support',
  },
  {
    label: 'Business Path',
    color: 'bg-green-50 border-green-100',
    accent: 'text-green-700',
    steps: [
      { title: 'Fundamentals of Accounting', href: '/course/fundamentals-of-accounting' },
      { title: 'Diploma in Project Management', href: '/course/diploma-project-management' },
      { title: 'Digital Marketing Basics', href: '/course/basic-concepts-of-digital-marketing' },
    ],
    outcome: 'Project Coordinator / Operations',
  },
  {
    label: 'Digital Path',
    color: 'bg-purple-50 border-purple-100',
    accent: 'text-purple-700',
    steps: [
      { title: 'Digital Marketing Basics', href: '/course/basic-concepts-of-digital-marketing' },
      { title: 'Excel for Analysis', href: '/course/microsoft-excel-data-analysis' },
      { title: 'Python for Beginners', href: '/course/python-for-beginners-data' },
    ],
    outcome: 'Digital Marketer / Content Analyst',
  },
];

const careerPaths: CareerPathItem[] = [
  { role: 'Administrative Assistant', category: 'Business & Management', href: '/category/business' },
  { role: 'Junior Digital Marketer', category: 'Digital Marketing', href: '/category/marketing' },
  { role: 'Data Entry Clerk', category: 'Data & Tools', href: '/free-courses-for-data-analysts' },
  { role: 'IT Support Assistant', category: 'IT & Technology', href: '/category/it' },
  { role: 'Accounts Assistant', category: 'Accounting & Finance', href: '/category/accounting' },
  { role: 'Sales or Marketing Coordinator', category: 'Business & Marketing', href: '/category/marketing' },
];

const relatedGuides: RelatedGuide[] = [
  { title: 'Best Free Online Courses with Certificates (2026)', desc: 'A curated list of the best free certified courses across IT, Business, Marketing, and Finance.', href: '/free-courses-with-certificates' },
  { title: 'Best Free AI Courses for Beginners (2026)', desc: 'No coding required. Start learning AI, Machine Learning, and Generative AI for free.', href: '/free-ai-courses-for-beginners' },
  { title: 'Best Free Courses for Data Analysts (2026)', desc: 'SQL, Python, Excel, and Power BI, the full data analyst learning path, all free.', href: '/free-courses-for-data-analysts' },
  { title: 'Best Alison Courses with Certificates (2026)', desc: 'The top-rated Alison courses across every category, CPD-accredited and free to start.', href: '/best-alison-courses-with-certificates' },
  { title: 'Best Free Business Courses Online (2026)', desc: 'Project management, Lean Six Sigma, GDPR, and business strategy. All free with certificates.', href: '/free-business-courses' },
];

const faqs: FaqItem[] = [
  { q: 'Do I need any experience to start these courses?', a: 'No. Every course listed here is designed for complete beginners with zero prior knowledge. Course pages include a Target Audience section so you can confirm the right fit before you begin, but none of them assume any background in the subject.' },
  { q: 'What is the easiest course for an absolute beginner?', a: 'It depends on your goal. For the quickest start, the Fundamentals of Accounting and Digital Marketing Basics are short, practical, and very accessible. If you are interested in tech, Introduction to Computer Hardware and Software is an ideal starting point before progressing to Python or AI courses.' },
  { q: 'How long does it take to complete a beginner course?', a: 'Short certificate courses typically take 2 to 6 hours, most people finish in a few evenings. Diploma-level courses range from 8 to 15 hours. There are no deadlines, so you go at whatever pace suits your schedule.' },
  { q: 'Can I switch between different beginner courses?', a: 'Absolutely. Many learners explore multiple fields before committing to one direction. Starting two or three short beginner courses in different topics is a great way to discover what genuinely interests you before investing in a longer diploma.' },
  { q: 'Will these certificates help me find a job?', a: 'Free certificates are most effective when combined with practical application. Completing a course and then practicing the skill, building an Excel spreadsheet, running a small social media campaign, or writing a Python script, gives you something concrete to talk about in an interview. The certificates show initiative; your portfolio or practice projects demonstrate ability.' },
  { q: 'What should I do after completing a beginner course?', a: 'Progress to the next level in the same field. After a beginner certificate, look for an intermediate or diploma-level course on the same topic to build depth. You can also start combining skills, for example, pairing Excel with accounting, or Python with data analysis, to make yourself more competitive in the job market.' },
];

const exploreCategories = [
  { label: 'IT & Technology', href: '/category/it' },
  { label: 'Software Development', href: '/category/software-engineering' },
  { label: 'Business & Management', href: '/category/business' },
  { label: 'Accounting & Finance', href: '/category/accounting' },
  { label: 'Digital Marketing', href: '/category/marketing' },
];

export default function FreeCoursesForBeginnersPage() {
  const featured = courseCategories.flatMap((cat) =>
    cat.ids.map((id) => allCourses.find((c) => c.id === id)).filter(Boolean)
  );
  const relatedCourses = courses
    .filter((c) => c.rating >= 4.6 && !featured.find((f) => f?.id === c.id))
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 12);

  return (
    <GuideTemplate
      canonicalUrl={CANONICAL}
      breadcrumb={[{ label: 'Free Courses for Beginners' }]}
      heading="Best Free Courses for Beginners: No Experience Needed (2026)"
      heroDescription="Starting something new can feel overwhelming. These beginner-friendly courses are designed to meet you exactly where you are, no degree, no technical background, no prior experience required. Just pick a topic, start learning, and earn a certificate at your own pace."
      heroBadges={[
        { icon: CheckCircle2, label: 'Zero Experience Required', iconClassName: 'text-green-500' },
        { icon: Award, label: 'Free Certificates', iconClassName: 'text-primary' },
        { icon: Clock, label: 'Self-Paced' },
      ]}
      authors={['jason', 'ndulamiso']}
      lastUpdated="January 2026"
      benefitsSectionTitle="Why Start with Beginner-Friendly Courses?"
      benefitsSectionSubtitle="Beginner courses exist for a reason. They remove the assumption that you already know something, and give you a clear, step-by-step path into a new skill."
      benefits={benefits}
      courseCategories={courseCategories}
      preCarouselSection={
        <div className="mb-20 bg-indigo-50 border border-indigo-100 rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-bold text-gray-900 mb-1">Interested in AI specifically?</p>
            <p className="text-sm text-gray-500">We have a dedicated guide covering the best free AI courses for people with no prior AI or coding experience.</p>
          </div>
          <Link href="/free-ai-courses-for-beginners" className="shrink-0 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm px-5 py-2.5 rounded-lg transition-colors whitespace-nowrap">
            View AI Courses Guide →
          </Link>
        </div>
      }
      relatedCourses={relatedCourses}
      carouselTitle="More Beginner-Friendly Courses"
      carouselSubtitle="Highly rated free courses across all fields, all designed to be accessible from day one"
      postCarouselSection={
        <>
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">Beginner Learning Paths</h2>
            <p className="text-gray-500 mb-10 text-lg">Not sure where to start? Follow one of these simple paths, each takes you from beginner to job-ready in a clear sequence.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {learningPaths.map((path) => (
                <div key={path.label} className={`rounded-xl border-2 p-6 ${path.color}`}>
                  <p className={`text-sm font-bold uppercase tracking-widest mb-5 ${path.accent}`}>{path.label}</p>
                  <div className="flex flex-col gap-3">
                    {path.steps.map((step, i) => (
                      <div key={step.title} className="flex items-start gap-3">
                        <div className="shrink-0 flex flex-col items-center">
                          <div className="w-6 h-6 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center text-xs font-bold text-gray-600">{i + 1}</div>
                          {i < path.steps.length - 1 && <div className="w-px h-5 bg-gray-300 mt-1" />}
                        </div>
                        <Link href={step.href} className="text-sm font-semibold text-gray-800 hover:text-primary transition-colors leading-snug pt-0.5">{step.title}</Link>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">Leads to</p>
                    <p className="text-sm font-bold text-gray-800 flex items-center gap-1">
                      <ArrowRight size={14} className="shrink-0" /> {path.outcome}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Do You Need Any Experience to Start?</h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl leading-relaxed">No. Every course on this page is built for people who are starting from zero. You do not need a degree, technical skills, or any prior knowledge in the subject.</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { stat: 'No degree needed', body: 'These courses are designed to stand on their own. A school certificate or matric is more than enough to begin.' },
                  { stat: 'No technical background', body: 'Even coding and AI courses on this list start from the very basics, assuming you have never written a line of code.' },
                  { stat: 'No prior experience', body: 'Whether you are 18 or 50, switching careers or starting fresh, these courses meet you exactly where you are.' },
                ].map(({ stat, body }) => (
                  <div key={stat} className="bg-white/10 rounded-xl p-5 backdrop-blur-sm">
                    <p className="font-bold text-white mb-2">{stat}</p>
                    <p className="text-blue-100 text-sm leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-20 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">How to Choose the Right Beginner Course</h2>
            <p className="text-gray-500 mb-10">Three simple principles to avoid overwhelm and pick the course that will actually move you forward.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-extrabold text-lg mb-4 shrink-0">1</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Start with Your Interests</h3>
                <p className="text-gray-600 text-sm leading-relaxed">You are far more likely to finish a course in a topic you are curious about. Do not choose based solely on what seems "useful", choose something you actually want to understand. Interest drives completion.</p>
              </div>
              <div className="flex flex-col">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-extrabold text-lg mb-4 shrink-0">2</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Keep It Simple at First</h3>
                <ul className="text-gray-600 text-sm space-y-2">
                  {['Start with a certificate (2 to 6 hours), not a diploma.', 'Focus on one topic at a time, resist the urge to do five courses at once.', 'Build confidence with a quick win before tackling longer courses.'].map((point) => (
                    <li key={point} className="flex items-start gap-2"><CheckCircle2 size={15} className="text-green-500 mt-0.5 shrink-0" /> {point}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-extrabold text-lg mb-4 shrink-0">3</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Set a Small, Achievable Goal</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Commit to completing one course before starting another. A single completed certificate is worth more than five half-finished ones, both for your confidence and for how it looks to an employer. Progress beats perfection every time.</p>
              </div>
            </div>
          </section>
        </>
      }
      careerPathsTitle="Entry-Level Roles You Can Start Working Towards"
      careerPathsSubtitle="Beginner courses are the first step toward these realistic, in-demand entry-level roles."
      careerPaths={careerPaths}
      relatedGuides={relatedGuides}
      exploreCategories={exploreCategories}
      faqs={faqs}
      ctaHeading="Ready to Take Your First Step?"
      ctaBody="Everyone starts somewhere. Pick one course above, complete it, and apply what you learn. Consistent small steps, taken regularly, lead to real results."
      ctaPrimaryLabel="Browse All Courses"
      ctaPrimaryHref="/categories"
      ctaSecondaryLabel="Search a Specific Topic"
      ctaSecondaryHref="/search"
    />
  );
}
