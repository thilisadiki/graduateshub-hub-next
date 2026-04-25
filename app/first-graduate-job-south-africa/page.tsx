import type { Metadata } from 'next';
import {
  Briefcase,
  FileText,
  Users,
  Target,
  CheckCircle2,
  Award,
  TrendingUp,
  BookOpen,
  ArrowRight,
  Lightbulb,
  Zap,
} from 'lucide-react';
import Link from 'next/link';
import GuideTemplate from '@/components/course/GuideTemplate';
import type { BenefitItem, CourseCategory, CareerPathItem, RelatedGuide, FaqItem } from '@/components/course/GuideTemplate';
import { courses } from '@/data/courses';
import { courses as allCourses } from '@/data/courses';
import { SITE_URL } from '@/lib/seo';

const CANONICAL = `${SITE_URL}/first-graduate-job-south-africa`;

export const metadata: Metadata = {
  title: 'How to Get Your First Graduate Job in South Africa (2026)',
  description:
    'A step-by-step guide for SA graduates on landing their first job. Learn how to write a standout CV, build in-demand skills, prepare for interviews, and navigate the South African job market.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'How to Get Your First Graduate Job in South Africa (2026) | Graduates Hub',
    description:
      'A step-by-step guide for SA graduates on landing their first job. Learn how to write a standout CV, build in-demand skills, prepare for interviews, and navigate the South African job market.',
    url: CANONICAL,
  },
};

const jobSearchSteps = [
  {
    step: '1',
    title: 'Fix Your CV',
    body: 'Most graduate CVs fail at the screening stage. Build a clean, targeted CV before sending a single application.',
    href: '/cv-builder',
    cta: 'Use CV Builder →',
    color: 'bg-blue-50 border-blue-100',
    accent: 'text-primary',
  },
  {
    step: '2',
    title: 'Identify the Right Roles',
    body: 'Apply to roles that match your qualification and skills, not every job posting you find.',
    href: '/career-roadmaps',
    cta: 'Browse Career Roadmaps →',
    color: 'bg-indigo-50 border-indigo-100',
    accent: 'text-indigo-700',
  },
  {
    step: '3',
    title: 'Close Your Skills Gaps',
    body: 'Employers test for specific skills at interview. Free courses below show you exactly what to learn.',
    href: '#courses',
    cta: 'See courses below ↓',
    color: 'bg-green-50 border-green-100',
    accent: 'text-green-700',
  },
  {
    step: '4',
    title: 'Prepare for Interviews',
    body: 'Practice role-specific questions with model answers before you walk into any interview room.',
    href: '/interview-prep',
    cta: 'Open Interview Prep →',
    color: 'bg-amber-50 border-amber-100',
    accent: 'text-amber-700',
  },
  {
    step: '5',
    title: 'Apply Strategically',
    body: 'Tailor each application, follow up professionally, and tap the hidden job market through networking.',
    href: '#job-search-skills',
    cta: 'Learn the strategy ↓',
    color: 'bg-purple-50 border-purple-100',
    accent: 'text-purple-700',
  },
];

const employerExpectations = [
  {
    want: 'Strong communication skills',
    reality: 'Can you write a clear email? Can you present your ideas to a manager without reading off a slide?',
  },
  {
    want: 'Microsoft Office proficiency',
    reality: 'Most entry-level roles require Word and Excel daily. Employers assume you already know them.',
  },
  {
    want: 'Initiative and self-direction',
    reality: 'Completing free courses and earning certificates is direct, visible evidence of self-motivation.',
  },
  {
    want: 'Problem-solving ability',
    reality: 'Employers use competency-based interview questions to test this. Preparation is everything.',
  },
  {
    want: 'Adaptability',
    reality: 'Graduate roles often involve learning on the job. Show you can absorb new information quickly.',
  },
  {
    want: 'Digital literacy',
    reality: 'Basic data skills like Excel, digital marketing, and AI awareness now appear in almost every job spec.',
  },
];

const courseCategories: CourseCategory[] = [
  {
    label: 'Build Your CV and Application',
    description: 'Your CV and cover letter are screened before any human reads them. These courses teach you how to build an application that gets through.',
    ids: ['job-search-resume-cover-letter', 'microsoft-word-2021', 'effective-job-search-strategies'],
    categoryHref: '/category/business',
    categoryLabel: 'Business & Professional Skills',
  },
  {
    label: 'Skills SA Employers Test For',
    description: 'These are the three skills that come up repeatedly in entry-level SA job specs, including in the technical parts of interviews.',
    ids: ['microsoft-excel-data-analysis', 'diploma-project-management', 'intro-ai-business'],
    categoryHref: '/category/business',
    categoryLabel: 'Business Courses',
  },
  {
    label: 'Stand Out in the Interview Room',
    description: 'Employers consistently rank communication as the skill graduates lack most. These courses fix that before your first interview.',
    ids: ['workplace-communication', 'basic-concepts-of-digital-marketing', 'lean-six-sigma-white-belt'],
    categoryHref: '/category/business',
    categoryLabel: 'Business Courses',
  },
];

const benefits: BenefitItem[] = [
  {
    icon: FileText,
    title: 'Your CV Is Not Getting Past Screening',
    body: 'Most graduate CVs are rejected before a human reads them. A poorly structured layout, wrong language, or missing keywords ends your application in seconds.',
  },
  {
    icon: Target,
    title: 'You Are Applying to the Wrong Roles',
    body: 'Applying broadly to everything wastes time and damages your confidence. Targeting the right roles for your background dramatically improves your response rate.',
  },
  {
    icon: Zap,
    title: 'You Have Skills Gaps You Don\'t Know About',
    body: 'Employers test for Excel, communication, and basic project skills at interview. Most graduates are caught off guard because no one told them what to prepare.',
  },
  {
    icon: Users,
    title: 'You Are Ignoring the Hidden Job Market',
    body: 'Estimates suggest up to 70% of roles are filled through networks and referrals before being advertised. Applying only to public postings means competing for the remaining 30%.',
  },
  {
    icon: Briefcase,
    title: 'Interview Preparation Is an Afterthought',
    body: 'Competency-based interviews require structured, practised answers. Showing up unprepared, especially for your first interview, is the most avoidable reason graduates fail.',
  },
  {
    icon: Lightbulb,
    title: 'Free Tools and Resources Are Available',
    body: 'Most graduates do not know that free CV builders, interview prep generators, and skills gap analysers exist. This guide covers all of them.',
  },
];

const careerPaths: CareerPathItem[] = [
  { role: 'Administrative Coordinator', href: '/category/business', category: 'Business & Management' },
  { role: 'Junior Accountant / Accounts Assistant', href: '/category/accounting', category: 'Accounting & Finance' },
  { role: 'Marketing Assistant', href: '/category/marketing', category: 'Digital Marketing' },
  { role: 'IT Support Technician', href: '/category/it', category: 'IT & Technology' },
  { role: 'HR Administrator', href: '/category/business', category: 'Business & Management' },
  { role: 'Graduate Trainee (Corporate Programme)', detail: 'Structured 12–24 month programmes run by large SA corporates. Competitive but highly valuable as a first role.' },
];

const relatedGuides: RelatedGuide[] = [
  { title: 'Career Roadmaps', desc: 'Visual step-by-step paths from where you are now to where you want to be, by role and industry.', href: '/career-roadmaps' },
  { title: 'Interview Prep', desc: 'Role-specific interview questions with model answers and common mistakes to avoid.', href: '/interview-prep' },
  { title: 'Best Free Courses for Beginners (2026)', desc: 'Zero experience needed. Start building job-ready skills from scratch across any field.', href: '/free-courses-for-beginners' },
  { title: 'Best Free Online Courses with Certificates (2026)', desc: 'The full catalogue of free certified courses across IT, Business, Marketing, and Finance.', href: '/free-courses-with-certificates' },
];

const faqs: FaqItem[] = [
  {
    q: 'Do I need work experience to get my first job in South Africa?',
    a: 'Not necessarily, but you need to demonstrate initiative. Employers hiring graduates understand you have limited work experience. What they are looking for instead is evidence of self-motivation: completed courses with certificates, a clean CV, a LinkedIn profile, and the ability to articulate what you have learned and how it applies to the role. Volunteer work, part-time jobs, and personal projects all count.',
  },
  {
    q: 'Is a free online certificate worth adding to my CV?',
    a: 'Yes, especially at graduate level. A free certificate does two things: it proves you have covered a specific topic, and it signals to employers that you take your own development seriously without being told to. Pair a certificate with a small practical project (a spreadsheet, a marketing plan, a written analysis) and you have a talking point in any interview. The certificate alone is not enough, but combined with application it is genuinely valuable.',
  },
  {
    q: 'Should I apply for graduate programmes or open roles?',
    a: 'Both, but with different strategies. Graduate programmes (ABSA, Deloitte, Shoprite, etc.) are competitive and have fixed intake windows: apply early and prepare thoroughly. Open roles are available year-round and often have less competition if you target smaller to mid-size companies rather than only large corporates. Many graduates make the mistake of only chasing the big graduate programmes and ignoring the hundreds of entry-level roles at companies that do not run formal programmes.',
  },
  {
    q: 'How long does it realistically take to find a first job in South Africa?',
    a: 'For a well-prepared graduate with a targeted strategy, three to six months is a realistic expectation in the current market. For graduates applying broadly without tailoring their CVs or preparing for interviews, it can take much longer, sometimes over a year. The biggest variable is not the job market, it is the quality of your applications and your interview preparation. Improve those and you shorten the timeline significantly.',
  },
  {
    q: 'What should I do if I have been applying for months with no response?',
    a: 'Stop sending the same CV and expecting different results. Audit your application: is your CV clean and tailored? Are you applying to roles that genuinely match your background? Are you writing a cover letter or just attaching a generic CV? Have someone experienced review your application materials. Then use the Skills Gap Analyser tool on this site to check whether you are missing skills the roles you want actually require. Often the problem is fixable in two to four weeks.',
  },
  {
    q: 'How important is my degree compared to my skills in the SA job market?',
    a: 'Your degree opens doors to certain roles, particularly in regulated fields like law, medicine, and engineering. But for most graduate roles in business, IT, marketing, and administration, skills matter as much as or more than the specific degree. Employers care whether you can do the job. A BCom graduate who cannot use Excel will lose an interview to a BA graduate who can. Focus on building demonstrable, testable skills alongside your qualification.',
  },
];

export default function FirstGraduateJobSAPage() {
  const featured = courseCategories.flatMap((cat) =>
    cat.ids.map((id) => allCourses.find((c) => c.id === id)).filter(Boolean)
  );
  const relatedCourses = courses
    .filter(
      (c) =>
        (c.category.toLowerCase().includes('business') ||
          c.category.toLowerCase().includes('marketing') ||
          c.subCategory === 'Professional Development' ||
          c.subCategory === 'Project Management') &&
        c.rating >= 4.6 &&
        !featured.find((f) => f?.id === c.id)
    )
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 12);

  return (
    <GuideTemplate
      canonicalUrl={CANONICAL}
      breadcrumb={[{ label: 'How to Get Your First Graduate Job in SA' }]}
      heading="How to Get Your First Graduate Job in South Africa (2026)"
      heroDescription="South Africa has one of the highest graduate unemployment rates in the world. But the graduates who land jobs quickly are not necessarily the most qualified: they are the most prepared. This guide gives you a practical, step-by-step framework for getting your first job: fixing your CV, identifying the right roles, closing your skills gaps, and walking into interviews with confidence."
      heroBadges={[
        { icon: CheckCircle2, label: 'SA-Focused Advice', iconClassName: 'text-green-500' },
        { icon: Award, label: 'Free Courses Included', iconClassName: 'text-primary' },
        { icon: Briefcase, label: 'Step-by-Step Framework' },
      ]}
      authors={['jason']}
      lastUpdated="January 2026"
      benefitsSectionTitle="Why Most SA Graduates Struggle to Land Their First Job"
      benefitsSectionSubtitle="The problem is rarely a lack of qualifications. These are the six specific, fixable reasons graduates stay unemployed longer than they should."
      benefits={benefits}
      preCoursesSection={
        <section id="framework" className="mb-20">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">Your 5-Step Job Search Framework</h2>
          <p className="text-gray-500 mb-10 text-lg">Follow these steps in order. Skipping step one and going straight to applications is the most common mistake graduates make.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {jobSearchSteps.map((s) => (
              <div key={s.step} className={`rounded-xl border-2 p-5 flex flex-col ${s.color}`}>
                <div className={`text-xs font-bold uppercase tracking-widest mb-3 ${s.accent}`}>
                  Step {s.step}
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2 leading-snug">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">{s.body}</p>
                <Link
                  href={s.href}
                  className={`mt-4 text-xs font-bold ${s.accent} hover:underline`}
                >
                  {s.cta}
                </Link>
              </div>
            ))}
          </div>
        </section>
      }
      courseCategories={courseCategories}
      relatedCourses={relatedCourses}
      carouselTitle="More Courses to Strengthen Your Application"
      carouselSubtitle="Business, marketing, and professional skills courses that regularly appear in SA graduate job descriptions"
      postCarouselSection={
        <>
          {/* What employers actually want */}
          <section className="mb-20 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">What SA Employers Actually Want From Graduates</h2>
            <p className="text-gray-500 mb-10 text-lg">What they say in job adverts versus what they actually test for in the interview room.</p>
            <div className="flex flex-col gap-4">
              {employerExpectations.map(({ want, reality }) => (
                <div key={want} className="grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-6 p-5 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="md:col-span-2 flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                    <p className="font-bold text-gray-900 text-sm">{want}</p>
                  </div>
                  <div className="md:col-span-3">
                    <p className="text-gray-600 text-sm leading-relaxed">{reality}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Internal tools CTA */}
          <section className="mb-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-2">Use Our Free Job Search Tools</h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl leading-relaxed">
              Everything you need to prepare your application and walk into interviews confidently. All free, no account required.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
              {[
                {
                  icon: FileText,
                  title: 'CV Builder',
                  body: 'Build a clean, professional CV from scratch with guided prompts. Download it instantly.',
                  href: '/cv-builder',
                  cta: 'Build My CV',
                },
                {
                  icon: Users,
                  title: 'Interview Prep Generator',
                  body: 'Get role-specific interview questions with model answers and common mistakes to avoid.',
                  href: '/interview-prep',
                  cta: 'Prep for Interviews',
                },
                {
                  icon: TrendingUp,
                  title: 'Skills Gap Analyser',
                  body: 'Enter your target role and your current skills. See exactly what you still need to learn.',
                  href: '/tools',
                  cta: 'Analyse My Skills',
                },
              ].map(({ icon: Icon, title, body, href, cta }) => (
                <div key={title} className="bg-white/10 rounded-xl p-6 backdrop-blur-sm flex flex-col">
                  <Icon size={24} className="text-blue-200 mb-3" strokeWidth={1.5} />
                  <h3 className="font-bold text-white mb-2">{title}</h3>
                  <p className="text-blue-100 text-sm leading-relaxed flex-grow">{body}</p>
                  <Link
                    href={href}
                    className="mt-5 inline-flex items-center gap-2 bg-white text-primary font-bold text-sm px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors w-fit"
                  >
                    {cta} <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
            <div className="bg-white/10 rounded-xl p-5 backdrop-blur-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-bold text-white mb-1">See all 7 free career tools</p>
                <p className="text-blue-100 text-sm">CV reviewer, job description decoder, career quiz, and more.</p>
              </div>
              <Link
                href="/tools"
                className="shrink-0 bg-white text-primary font-bold text-sm px-5 py-2.5 rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap flex items-center gap-2"
              >
                Browse All Tools <ArrowRight size={14} />
              </Link>
            </div>
          </section>

          {/* How to choose section */}
          <section className="mb-20 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">How to Prioritise Your Job Search</h2>
            <p className="text-gray-500 mb-10">Three principles that separate graduates who land jobs quickly from those who apply for a year with no results.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  n: '1',
                  title: 'Quality Over Volume',
                  body: 'Ten tailored applications will always outperform a hundred generic ones. For each role, customise your CV summary and cover letter to match the specific job description. It takes more time, and it works.',
                },
                {
                  n: '2',
                  title: 'Fix Your Application Before You Fix Your Skills',
                  body: 'Most graduates who are not getting responses have an application problem, not a skills problem. Audit your CV and cover letter first. Improve those before investing weeks in new courses.',
                },
                {
                  n: '3',
                  title: 'Tell People You Are Looking',
                  body: 'Let every contact (family, lecturers, former classmates, LinkedIn connections) know you are actively job-seeking. Referrals fill most roles before they are advertised. Being visible costs you nothing.',
                },
              ].map(({ n, title, body }) => (
                <div key={n} className="flex flex-col">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-extrabold text-lg mb-4 shrink-0">
                    {n}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </section>
        </>
      }
      careerPathsTitle="Entry-Level Roles SA Graduates Realistically Target"
      careerPathsSubtitle="These are the most common first jobs for SA graduates across different fields. Each links to relevant free courses."
      careerPaths={careerPaths}
      careerPathsBrowseHref="/career-roadmaps"
      careerPathsBrowseLabel="Browse all career roadmaps"
      relatedGuides={relatedGuides}
      exploreCategories={[
        { label: 'IT & Technology', href: '/category/it' },
        { label: 'Business & Management', href: '/category/business' },
        { label: 'Accounting & Finance', href: '/category/accounting' },
        { label: 'Digital Marketing', href: '/category/marketing' },
        { label: 'Software Development', href: '/category/software-engineering' },
      ]}
      faqs={faqs}
      ctaHeading="Your First Job Starts With One Step"
      ctaBody="You do not need to have everything figured out. Pick one thing from this guide: fix your CV, complete one course, or spend 30 minutes on interview prep. Small, consistent actions compound into results."
      ctaPrimaryLabel="Build My CV for Free"
      ctaPrimaryHref="/cv-builder"
      ctaSecondaryLabel="Browse Career Roadmaps"
      ctaSecondaryHref="/career-roadmaps"
    />
  );
}
