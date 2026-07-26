import type { Metadata } from 'next';
import { CheckCircle2, Clock, TrendingUp, Award, Zap, Brain, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import GuideTemplate from '@/components/course/GuideTemplate';
import type { BenefitItem, CourseCategory, CareerPathItem, RelatedGuide, FaqItem } from '@/components/course/GuideTemplate';
import { courses } from '@/data/courses';
import { courses as allCourses } from '@/data/courses';
import { SITE_URL, SITE_NAME } from '@/lib/seo';

const CANONICAL = `${SITE_URL}/free-ai-courses-for-beginners`;

export const metadata: Metadata = {
  title: 'Best Free AI Courses for Beginners (2026)',
  description:
    'The best free AI courses for people with no AI or coding background in 2026. Start learning Artificial Intelligence, Machine Learning, and Generative AI from scratch. All free with certificates.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    siteName: SITE_NAME,
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
    categoryHref: '/category/software-engineering',
    categoryLabel: 'AI & ML',
    items: [
      { id: 'diploma-fundamentals-ai', customContent: 'If you are completely new to the world of artificial intelligence, this is exactly where you should start. This comprehensive diploma strips away the media hype and sci-fi tropes to explain the core mathematical and logical mechanics of AI in plain, accessible English. You will gain a solid, foundational understanding of how machine learning algorithms operate, what neural networks actually are, and how these systems process data to make decisions. It provides the critical context needed before you start using or building AI tools yourself.' },
      { id: 'diploma-applied-generative-ai', customContent: 'Moving from theoretical concepts to immediate, practical application, this course focuses on the tools that are reshaping the modern workplace. You will learn how to effectively use powerful generative models like ChatGPT, Claude, and Midjourney to accelerate your daily tasks. The curriculum places a heavy emphasis on advanced prompt engineering, teaching you how to structure your requests to get precise, high-quality outputs, and explores how to integrate these generative AI capabilities seamlessly into your existing business workflows and creative processes.' },
      { id: 'machine-learning-with-ai', customContent: 'This course provides a gentle, structured introduction to the core engine behind modern AI: how machines actually learn from data. You will explore the critical differences between supervised learning (training models on labeled data) and unsupervised learning (finding hidden patterns in raw data). By understanding how algorithms evaluate data, adjust their parameters, and improve their accuracy over time, you will develop a clear, intuitive understanding of the mechanisms that power everything from recommendation engines to fraud detection systems.' }
    ]
  },
  {
    label: 'Tech Skills for AI',
    description: 'Build the foundational data and programming skills that underpin every AI system.',
    categoryHref: '/category/software-engineering',
    categoryLabel: 'AI & ML',
    items: [
      { id: 'python-flask-docker', customContent: 'Python is universally recognized as the lingua franca of the artificial intelligence and data science communities. While it is possible to use consumer AI tools without knowing how to code, learning Python unlocks the ability to build custom AI solutions. This course provides the foundational programming skills needed to interact programmatically with APIs (like OpenAI\'s), process and clean large datasets at scale, and eventually build and deploy your own lightweight AI-powered web applications using Flask and Docker.' },
      { id: 'databases-dml-sql-server', customContent: 'The secret behind every successful artificial intelligence model is the quality and quantity of the data it was trained on. This essential course teaches you how to interact with large-scale relational databases using SQL. You will learn how to write efficient queries to extract specific datasets, manipulate records, and structure data in a way that is ready for machine learning ingestion. Mastering database management is an absolutely critical skill for anyone looking to prepare training data or work seriously in the AI space.' },
      { id: 'diploma-foundations-cognitive-robotics', customContent: 'This fascinating, forward-looking diploma explores the physical application of artificial intelligence. It examines the exciting intersection between hardware engineering and cognitive AI, covering how artificial intelligence is applied to physical systems, sensors, and automated decision-making in the real world. You will learn about computer vision, spatial awareness, and how robotic systems process environmental data to navigate and interact with their physical surroundings intelligently.' }
    ]
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
  const featured = courseCategories.flatMap((cat) => {
    if (cat.ids) return cat.ids.map((id) => allCourses.find((c) => c.id === id)).filter(Boolean);
    if (cat.items) return cat.items.map((i) => allCourses.find((c) => c.id === i.id)).filter(Boolean);
    return [];
  });
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
      benefitsSectionTitle="Why Learn AI as a Beginner?"
      benefitsSectionSubtitle="AI is one of the fastest-growing fields globally, and you do not need a technical background to get started."
      benefits={benefits}
      courseCategories={courseCategories}
      relatedCourses={relatedCourses}
      carouselTitle="More Tech & Development Courses"
      carouselSubtitle="Expand your skills with highly rated courses in software and data"
      postCarouselSection={
        <>
          {/* South Africa & Global AI Job Market Demand Section (Merged from /blog/artificial-intelligence-courses) */}
          <section className="mb-20 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
            <div className="max-w-3xl">
              <span className="text-xs font-bold bg-[#FFDF9C]/20 text-[#5a4000] border border-[#D1C5B4] px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
                Job Market Analysis 2026
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
                The Rising Demand for Artificial Intelligence Skills
              </h2>
              <p className="text-gray-600 leading-relaxed text-base mb-6">
                Artificial Intelligence is no longer restricted to research labs or niche tech startups. Industry hiring data from PNet reveals that <strong>AI skill demand in South Africa has surged by +352% since 2019</strong>, with employers actively seeking professionals who understand machine learning, generative AI, and data automation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <p className="text-3xl font-black text-primary mb-1">+352%</p>
                <p className="font-bold text-gray-900 text-sm mb-1">AI Hiring Surge</p>
                <p className="text-xs text-gray-500 leading-relaxed">PNet hiring data shows massive growth in AI skill requests across South African tech &amp; finance jobs.</p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <p className="text-3xl font-black text-emerald-600 mb-1">50%+</p>
                <p className="font-bold text-gray-900 text-sm mb-1">Gauteng Hub</p>
                <p className="text-xs text-gray-500 leading-relaxed">Gauteng alone accounts for over half of all South African AI job openings (JHB &amp; PTA tech hubs).</p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <p className="text-3xl font-black text-blue-600 mb-1">CPD &amp; Global</p>
                <p className="font-bold text-gray-900 text-sm mb-1">Accredited Learning</p>
                <p className="text-xs text-gray-500 leading-relaxed">Certificates from Google, IBM, and Alison carry recognized weight with hiring managers.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-8 mb-8">
              <div>
                <h3 className="font-bold text-gray-900 text-base mb-2">Regional Job Distribution</h3>
                <p className="mb-3">While Gauteng leads in AI vacancies, the <strong>Western Cape</strong> (Cape Town tech ecosystem) and <strong>KwaZulu-Natal</strong> follow closely as major hiring hubs for automation, data analytics, and digital transformation roles.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base mb-2">Acute Local Skills Gap</h3>
                <p>Despite hiring demand growing by <strong>+77% in a single year</strong> (RecruitAGraduate data), South African employers face a severe shortage of qualified candidates, making verified AI certificates highly competitive for applicants.</p>
              </div>
            </div>

            {/* South African Enterprise AI Adoption Table */}
            <div className="border-t border-gray-100 pt-8">
              <h3 className="font-bold text-gray-900 text-lg mb-4">How South African Enterprise Leaders Use AI Today</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { sector: 'Financial Services', companies: 'Standard Bank, Absa, FirstRand', application: 'Fraud detection, credit risk scoring models, and automated customer service bots.' },
                  { sector: 'Retail & E-commerce', companies: 'Takealot, Shoprite Group', application: 'Machine learning recommendation engines, price optimization, and inventory supply chain forecasting.' },
                  { sector: 'Telecommunications', companies: 'MTN, Vodacom', application: 'Predictive network failure maintenance, churn prevention algorithms, and automated service management.' },
                  { sector: 'Mining & Heavy Industry', companies: 'Anglo American, Sasol', application: 'Autonomous machinery, sensor data processing, and predictive equipment safety alerts.' },
                ].map(({ sector, companies, application }) => (
                  <div key={sector} className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                    <span className="text-xs font-bold text-primary bg-[#FFDF9C]/20 border border-[#D1C5B4] px-2.5 py-0.5 rounded-full inline-block mb-2">
                      {sector}
                    </span>
                    <p className="font-bold text-gray-900 text-sm mb-1">{companies}</p>
                    <p className="text-xs text-gray-600 leading-relaxed">{application}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 3-Stage AI Skill Progression Framework */}
          <section className="mb-20 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">3-Stage AI Skill Advancement Roadmap</h2>
            <p className="text-gray-500 text-sm mb-8">From beginner conceptual understanding to advanced system architecture.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-amber-50/50 rounded-2xl p-6 border border-amber-100">
                <span className="text-xs font-extrabold bg-amber-100 text-amber-900 px-3 py-1 rounded-full inline-block mb-3">
                  Stage 1: Beginner (0-3 Months)
                </span>
                <h3 className="font-bold text-gray-900 text-lg mb-2">AI Concepts &amp; Prompting</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Understand AI terminology, ethics, and prompt engineering. Master generative tools like ChatGPT, Claude, and Midjourney to boost daily productivity.
                </p>
                <p className="text-xs font-bold text-amber-900">Key Focus: DeepLearning.AI &amp; Alison AI Diplomas</p>
              </div>

              <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100">
                <span className="text-xs font-extrabold bg-blue-100 text-blue-900 px-3 py-1 rounded-full inline-block mb-3">
                  Stage 2: Intermediate (3-6 Months)
                </span>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Python &amp; Data Analysis</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Learn Python programming, SQL database querying, and data cleaning. Build foundational machine learning models with Scikit-Learn.
                </p>
                <p className="text-xs font-bold text-blue-900">Key Focus: Python, SQL &amp; Data Prep Courses</p>
              </div>

              <div className="bg-emerald-50/50 rounded-2xl p-6 border border-emerald-100">
                <span className="text-xs font-extrabold bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full inline-block mb-3">
                  Stage 3: Advanced (6-12 Months)
                </span>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Deep Learning &amp; MLOps</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Master neural networks, Natural Language Processing (NLP), Computer Vision, and production deployment using TensorFlow and PyTorch.
                </p>
                <p className="text-xs font-bold text-emerald-900">Key Focus: Stanford ML &amp; IBM Professional Certificates</p>
              </div>
            </div>
          </section>

          <section className="mb-20 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
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

          <section className="mb-20 bg-gradient-to-br from-[#7A5900] to-[#5a4000] rounded-3xl p-8 md:p-12 text-white shadow-sm">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-2">How to Choose the Right AI Course</h2>
            <p className="text-[#FFDF9C] mb-10 text-sm md:text-base">If you are new to AI, your starting point matters. Evaluate these 4 core factors before enrolling.</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Experience Level', body: 'Start with non-technical fundamentals if you have zero coding background. Build confidence before diving into Python or algorithms.' },
                { step: '2', title: 'Practical Projects', body: 'Look for courses that include hands-on prompt building or data manipulation so you leave with demonstrable skills.' },
                { step: '3', title: 'Accreditation', body: 'Prioritize courses certified by recognised bodies (CPD, Google, IBM, Alison) that carry weight on your CV.' },
                { step: '4', title: 'Career Alignment', body: 'Match your learning to target job roles: prompt engineering for operations, or Python/SQL for data roles.' },
              ].map(({ step, title, body }) => (
                <div key={step} className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="w-9 h-9 bg-white text-primary rounded-full flex items-center justify-center font-extrabold text-lg mb-4">{step}</div>
                  <h3 className="font-bold text-white text-base mb-2">{title}</h3>
                  <p className="text-[#FFDF9C] text-xs leading-relaxed">{body}</p>
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
