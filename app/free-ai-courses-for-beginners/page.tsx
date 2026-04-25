import type { Metadata } from 'next';
import { CheckCircle2, Clock, TrendingUp, Award, Zap, Brain, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import GuideTemplate from '@/components/course/GuideTemplate';
import type { BenefitItem, CourseCategory, CareerPathItem, RelatedGuide, FaqItem } from '@/components/course/GuideTemplate';
import { courses } from '@/data/courses';
import { courses as allCourses } from '@/data/courses';
import { SITE_URL } from '@/lib/seo';

const CANONICAL = `${SITE_URL}/free-ai-courses-for-beginners`;

export const metadata: Metadata = {
  title: 'Best Free AI Courses for Beginners (2026)',
  description:
    'The best free AI courses for people with no AI or coding background in 2026. Start learning Artificial Intelligence, Machine Learning, and Generative AI from scratch. All free with certificates.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Best Free AI Courses for Beginners (2026) | Graduates Hub',
    description:
      'The best free AI courses for people with no AI or coding background in 2026. Start learning Artificial Intelligence, Machine Learning, and Generative AI from scratch. All free with certificates.',
    url: CANONICAL,
  },
};

const courseCategories: CourseCategory[] = [
  {
    label: 'AI Fundamentals',
    description: 'Start with the core concepts, what AI is, how it works, and where it is headed.',
    ids: ['diploma-fundamentals-ai', 'diploma-applied-generative-ai', 'machine-learning-with-ai'],
    categoryHref: '/category/software-engineering',
    categoryLabel: 'AI & ML',
  },
  {
    label: 'Tech Skills for AI',
    description: 'Build the foundational data and programming skills that underpin every AI system.',
    ids: ['python-flask-docker', 'databases-dml-sql-server', 'diploma-foundations-cognitive-robotics'],
    categoryHref: '/category/software-engineering',
    categoryLabel: 'AI & ML',
  },
];

const benefits: BenefitItem[] = [
  { icon: TrendingUp, title: 'Future-Proof Skill', body: 'AI is reshaping every industry. Learning it now puts you ahead of the curve.' },
  { icon: Brain, title: 'No Technical Background Needed', body: 'Beginner courses start from zero. You do not need a degree or coding experience to start.' },
  { icon: Zap, title: 'Opportunities Across Industries', body: 'From healthcare to finance to marketing, AI skills are in demand everywhere.' },
  { icon: Award, title: 'Earn a Certificate', body: 'Complete your course and download a certificate to add to your CV or LinkedIn.' },
  { icon: Clock, title: 'Self-Paced Learning', body: 'Study at your own pace. Most beginner AI courses take just a few hours to complete.' },
  { icon: CheckCircle2, title: '100% Free to Start', body: 'Every AI course on Graduates Hub is free to begin. No payment required.' },
];

const careerPaths: CareerPathItem[] = [
  { role: 'Data Analyst', detail: 'Interpret data using AI-assisted tools and dashboards.' },
  { role: 'AI Specialist', detail: 'Deploy and manage AI systems within an organisation.' },
  { role: 'Business Intelligence Analyst', detail: 'Use AI to surface insights from business data.' },
  { role: 'Automation Specialist', detail: 'Design workflows that use AI to reduce manual effort.' },
  { role: 'Machine Learning Engineer', detail: 'Build and train models, requires further technical study.' },
  { role: 'Prompt Engineer', detail: 'Design effective prompts for generative AI tools and platforms.' },
];

const relatedGuides: RelatedGuide[] = [
  { title: 'Best Free Online Courses with Certificates (2026)', desc: 'The complete guide to free certified courses across all fields.', href: '/free-courses-with-certificates' },
  { title: 'Browse IT Courses', desc: 'Networking, cybersecurity, database administration, and IT infrastructure.', href: '/category/it' },
  { title: 'Software Development Courses', desc: 'Learn web development, databases, and engineering from scratch.', href: '/category/software-engineering' },
  { title: 'Best Free Business Courses Online (2026)', desc: 'Project management, Lean Six Sigma, and business strategy skills that complement AI knowledge.', href: '/free-business-courses' },
];

const faqs: FaqItem[] = [
  { q: 'Do I need coding experience to learn AI?', a: 'Not at the beginning. Many beginner AI courses focus on concepts, real-world applications, and tools rather than programming. However, learning Python later will significantly expand your options and help you build real AI projects.' },
  { q: 'How long does it take to learn AI basics?', a: 'A foundational AI certificate typically takes 3 to 10 hours to complete. If you study for an hour a day, you can finish a beginner course within one to two weeks. Diplomas covering broader AI topics take longer, usually 10 to 15 hours.' },
  { q: 'Are free AI certificates recognised by employers?', a: 'Increasingly, yes. Employers value demonstrated skills and initiative. Completing a free AI course and earning a certificate shows you are proactive about learning in one of the most in-demand areas in tech. It is especially impactful in non-technical roles where AI literacy is becoming an expectation.' },
  { q: 'What is the difference between AI, Machine Learning, and Generative AI?', a: 'Artificial Intelligence is the broad field of building systems that simulate human intelligence. Machine Learning is a subset of AI where systems learn from data without being explicitly programmed. Generative AI (like ChatGPT or image generators) is a subset of Machine Learning that creates new content (text, images, code) based on patterns in training data.' },
  { q: 'Which AI course should I start with?', a: 'If you have no technical background, start with the Diploma in Fundamentals of Artificial Intelligence, it covers concepts before tools. If you already have some tech experience, the Diploma in Applied Generative AI is a strong next step. Python and data skills can run alongside your AI learning at any stage.' },
];

export default function FreeAICoursesForBeginnersPage() {
  const featured = courseCategories.flatMap((cat) =>
    cat.ids.map((id) => allCourses.find((c) => c.id === id)).filter(Boolean)
  );
  const relatedCourses = courses
    .filter(
      (c) =>
        (c.subCategory === 'Software Engineering' || c.subCategory === 'Database & Software Development') &&
        c.rating >= 4.7 &&
        !featured.find((f) => f?.id === c.id)
    )
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 10);

  return (
    <GuideTemplate
      canonicalUrl={CANONICAL}
      breadcrumb={[{ label: 'Free AI Courses for Beginners' }]}
      heading="Best Free AI Courses for Beginners (2026)"
      heroDescription="Artificial Intelligence is no longer a future skill. It is a present-day advantage. If you are starting from scratch, this guide covers the best free AI courses for beginners in 2026, with no prior experience required. Understand AI concepts, tools, and real-world applications, and earn a certificate along the way."
      heroBadges={[
        { icon: CheckCircle2, label: 'No Prior Experience Needed', iconClassName: 'text-green-500' },
        { icon: Award, label: 'Free Certificates Included', iconClassName: 'text-primary' },
        { icon: Clock, label: 'Start in Minutes' },
      ]}
      authors={['jason']}
      lastUpdated="January 2026"
      benefitsSectionTitle="Why Learn AI as a Beginner?"
      benefitsSectionSubtitle="AI is one of the fastest-growing fields globally, and you do not need a technical background to get started."
      benefits={benefits}
      courseCategories={courseCategories}
      relatedCourses={relatedCourses}
      carouselTitle="More Tech & Development Courses"
      carouselSubtitle="Expand your skills with highly rated courses in software and data"
      postCarouselSection={
        <>
          <section className="mb-20 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">Do You Need Coding to Learn AI?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <p className="text-gray-600 leading-relaxed mb-4">Not at the beginning. Many beginner AI courses require no coding knowledge at all. They focus on concepts, applications, and understanding how AI systems work at a high level.</p>
                <p className="text-gray-600 leading-relaxed">This makes them ideal for business professionals, marketers, managers, and anyone curious about how AI fits into their field.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-4">However, learning Python later will:</p>
                <ul className="space-y-3">
                  {['Open up hands-on machine learning and data science roles', 'Let you build and test your own AI projects', 'Significantly increase your earning potential in tech', 'Prepare you for more advanced AI and ML courses'].map((point) => (
                    <li key={point} className="flex items-start gap-2 text-gray-600 text-sm">
                      <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-2">How to Choose the Right AI Course</h2>
            <p className="text-blue-100 mb-10">If you are new to AI, your starting point matters. Here is how to choose.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: '1', title: 'Start with Fundamentals', body: 'Pick a course that explains concepts before tools. Understanding what AI is and why it works prepares you to learn faster later.' },
                { step: '2', title: 'Decide Your Path', body: 'Non-technical learner? Focus on AI for business and strategy. Tech-oriented? Pair a fundamentals course with Python and data skills.' },
                { step: '3', title: 'Keep It Simple First', body: 'Avoid overly complex courses early on. Build confidence with one beginner certificate before moving to machine learning or data science.' },
              ].map(({ step, title, body }) => (
                <div key={step} className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <div className="w-9 h-9 bg-white text-primary rounded-full flex items-center justify-center font-extrabold text-lg mb-4">{step}</div>
                  <h3 className="font-bold text-white text-lg mb-2">{title}</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </section>
        </>
      }
      careerPathsTitle="Career Paths You Can Explore with AI"
      careerPathsSubtitle="Starting with free AI courses can open doors to a wide range of roles, from entry-level to specialist positions."
      careerPaths={careerPaths}
      careerPathsBrowseHref="/category/software-engineering"
      careerPathsBrowseLabel="Browse all AI & ML courses"
      relatedGuides={relatedGuides}
      faqs={faqs}
      ctaHeading="Ready to Start Learning AI?"
      ctaBody="AI can feel overwhelming at first, but the key is to start simple. Choose one beginner-friendly course, complete it, and build from there. Consistency matters more than complexity."
      ctaPrimaryLabel="Browse AI & ML Courses"
      ctaPrimaryHref="/category/software-engineering"
      ctaSecondaryLabel="All Free Courses with Certificates"
      ctaSecondaryHref="/free-courses-with-certificates"
    />
  );
}
