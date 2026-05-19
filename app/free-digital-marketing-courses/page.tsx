import type { Metadata } from 'next';
import { CheckCircle2, Clock, TrendingUp, Award, BarChart2, ArrowRight } from 'lucide-react';
import GuideTemplate from '@/components/course/GuideTemplate';
import type { BenefitItem, CourseCategory, CareerPathItem, RelatedGuide, FaqItem } from '@/components/course/GuideTemplate';
import { courses } from '@/data/courses';
import { courses as allCourses } from '@/data/courses';
import { SITE_URL, SITE_NAME } from '@/lib/seo';

const CANONICAL = `${SITE_URL}/free-digital-marketing-courses`;

export const metadata: Metadata = {
  title: 'Best Free Courses for Digital Marketing Careers (2026)',
  description:
    'Discover the best free digital marketing courses in 2026. Learn SEO, content marketing, paid ads, conversion strategy, and growth hacking, all free, all beginner-friendly.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    siteName: SITE_NAME,
    title: 'Best Free Courses for Digital Marketing Careers (2026) | Graduates Hub',
    description:
      'Discover the best free digital marketing courses in 2026. Learn SEO, content marketing, paid ads, conversion strategy, and growth hacking, all free, all beginner-friendly.',
    url: CANONICAL,
  },
};

const courseCategories: CourseCategory[] = [
  {
    label: 'Marketing Fundamentals',
    slug: 'marketing',
    description: 'Understand the strategy, channels, and core concepts behind digital marketing before you specialise.',
    items: [
      { id: 'basic-concepts-of-digital-marketing', customContent: 'The perfect starting point for any aspiring marketer. This course cuts through the industry jargon to explain exactly how digital marketing functions as a cohesive system. You will learn how businesses define their target audiences, choose the right digital channels, and measure success, giving you the strategic overview needed before diving into specialized technical skills.' },
      { id: 'digital-marketing-overview', customContent: 'A rapid, broad-spectrum introduction to the modern marketing toolkit. This course touches on the mechanics of SEO, the logic behind pay-per-click advertising, and the importance of email marketing. It provides a foundational understanding of the digital ecosystem, making it an excellent primer for small business owners or those exploring a career change.' },
      { id: 'digital-marketing', customContent: 'A deeper dive into executing comprehensive marketing strategies. This course teaches you how to align digital campaigns with broader business objectives. You will learn how to allocate budgets across different channels, create detailed buyer personas, and understand the customer journey from initial brand awareness through to final purchase and retention.' }
    ]
  },
  {
    label: 'Social Media Marketing',
    slug: 'marketing',
    description: 'Build, manage, and grow brand presence across Facebook, Instagram, and every major social platform.',
    items: [
      { id: 'diploma-social-media-strategy', customContent: 'Moving beyond simply posting content, this comprehensive diploma teaches the science of audience growth and brand management. You will learn how to conduct competitor analysis, develop a consistent brand voice, and manage crisis communications across platforms. Earning this diploma proves you can manage a brand\'s public reputation strategically and safely.' },
      { id: 'social-media-marketing-course', customContent: 'A practical, platform-focused course. You will learn the specific algorithms, content formats, and best practices for major networks like Facebook, Twitter, and LinkedIn. It covers the crucial difference between organic reach and paid promotion, teaching you how to build engaged communities and drive targeted traffic back to a company website.' },
      { id: 'facebook-marketing-foundations', customContent: 'Meta (Facebook and Instagram) remains the most powerful advertising platform in the world. This specialized course focuses entirely on mastering the Facebook ecosystem. You will learn how to set up business pages correctly, understand audience targeting, and run basic ad campaigns, a non-negotiable skill for any modern social media manager.' }
    ]
  },
  {
    label: 'Content Marketing & SEO',
    slug: 'marketing',
    description: 'Create content that actually gets found, covering YouTube SEO, content strategy, and Instagram growth.',
    items: [
      { id: 'youtube-marketing-seo', customContent: 'Video is the dominant medium on the internet, and YouTube is the world’s second-largest search engine. This highly specific course teaches you how to optimize video content to rank highly in search results. You will learn about keyword research for video, thumbnail optimization, and audience retention metrics, skills that are incredibly valuable to modern media brands.' },
      { id: 'content-creation-strategy', customContent: 'Great marketing requires great content. This course teaches you how to plan, produce, and distribute content that actually drives business results. You will learn how to map content to different stages of the buying cycle, write compelling copy, and repurpose assets across multiple platforms, transforming you from a mere writer into a strategic content marketer.' },
      { id: 'instagram-marketing-hashtags', customContent: 'Instagram is a highly visual, rapidly evolving platform. This tactical course dives deep into Instagram\'s specific growth mechanics. You will learn how to develop a cohesive grid aesthetic, master hashtag strategies for maximum discoverability, and utilize Stories and Reels effectively to build a loyal, engaged following for e-commerce or personal brands.' }
    ]
  },
  {
    label: 'Growth & Conversion',
    slug: 'marketing',
    description: 'Take your skills further, learn how to grow audiences fast and turn traffic into paying customers.',
    items: [
      { id: 'growth-hacking-techniques-for-digital-marketing', customContent: 'The mindset of Silicon Valley startups. This advanced course teaches you how to prioritize rapid experimentation over traditional, slow-moving marketing plans. You will learn how to analyze user data to find unconventional, low-cost ways to acquire and retain customers, making you an incredibly attractive hire for fast-paced tech companies.' },
      { id: 'using-digital-marketing-to-convert-customers', customContent: 'Generating website traffic is useless if those visitors do not take action. This critical course focuses entirely on the science of Conversion Rate Optimization (CRO). You will learn how to use A/B testing, heatmaps, and psychological copywriting to systematically improve the percentage of users who buy, sign up, or subscribe, directly impacting a company\'s revenue.' }
    ]
  },
];

const benefits: BenefitItem[] = [
  { icon: TrendingUp, title: 'High Demand Across Every Industry', body: 'Every business, from startups to corporations, needs digital marketers. Demand is growing faster than supply.' },
  { icon: CheckCircle2, title: 'No Degree Required', body: 'Digital marketing is one of the few career paths where demonstrated skills outweigh formal qualifications.' },
  { icon: Clock, title: 'Fast Entry Point', body: 'You can go from zero knowledge to job-ready skills in a matter of weeks with focused, structured study.' },
  { icon: Award, title: 'Earn a Certificate', body: 'Every course includes a downloadable certificate, proof of your skills you can add to your CV and LinkedIn.' },
  { icon: BarChart2, title: 'Multiple Career Paths', body: 'Digital marketing branches into SEO, content, paid ads, social media, and analytics, you choose where to specialise.' },
  { icon: ArrowRight, title: 'Remote Work Friendly', body: 'Digital marketing roles are among the most remote-friendly in the world. Build a career that works anywhere.' },
];

const skills = [
  { skill: 'SEO', desc: 'Ranking content on Google through keyword research and on-page optimisation', level: 'Foundation' },
  { skill: 'Content Marketing', desc: 'Creating blogs, videos, and assets that attract and convert audiences', level: 'Foundation' },
  { skill: 'Social Media', desc: 'Growing and managing brand presence across platforms like Instagram and LinkedIn', level: 'Foundation' },
  { skill: 'Email Marketing', desc: 'Building subscriber lists, writing campaigns, and automating sequences', level: 'Foundation' },
  { skill: 'Paid Advertising (PPC)', desc: 'Running and optimising Google Ads and Meta campaigns on a budget', level: 'Intermediate' },
  { skill: 'Analytics & Reporting', desc: 'Reading Google Analytics data to measure performance and prove ROI', level: 'Intermediate' },
  { skill: 'Conversion Optimisation', desc: 'Testing landing pages and copy to increase the percentage of visitors who buy', level: 'Intermediate' },
  { skill: 'Growth Hacking', desc: 'Using data-driven experiments to achieve rapid audience and revenue growth', level: 'Advanced' },
];

const careerPaths: CareerPathItem[] = [
  { role: 'Digital Marketing Assistant', category: 'Entry Level', href: '/category/marketing' },
  { role: 'SEO Specialist', category: 'Entry to Mid Level', href: '/category/marketing' },
  { role: 'Social Media Manager', category: 'Entry to Mid Level', href: '/category/marketing' },
  { role: 'Content Marketer', category: 'Entry to Mid Level', href: '/category/marketing' },
  { role: 'PPC Specialist', category: 'Mid Level', href: '/category/marketing' },
  { role: 'Digital Marketing Manager', category: 'Senior Level', href: '/category/marketing' },
];

const relatedGuides: RelatedGuide[] = [
  { title: 'Best Free Courses for Beginners (2026)', desc: 'Zero experience needed. Build skills from scratch across tech, business, and marketing.', href: '/free-courses-for-beginners' },
  { title: 'Best Free Courses for Data Analysts (2026)', desc: 'Excel, SQL, Python, and Power BI, the full data analyst learning path.', href: '/free-courses-for-data-analysts' },
  { title: 'Best Free AI Courses for Beginners (2026)', desc: 'Understand AI and Generative AI without any coding background.', href: '/free-ai-courses-for-beginners' },
  { title: 'Best Free Business Courses Online (2026)', desc: 'Project management, Lean Six Sigma, and business strategy skills that complement a marketing career.', href: '/free-business-courses' },
  { title: 'Best Free Courses with Certificates (2026)', desc: 'Top-rated certified courses across IT, Business, Marketing, and Finance.', href: '/free-courses-with-certificates' },
];

const faqs: FaqItem[] = [
  { q: 'Do I need any experience to start a digital marketing course?', a: 'No, every course on this page is designed for beginners. The fundamentals courses assume no prior knowledge of marketing or business. You simply need an internet connection and a willingness to learn.' },
  { q: 'Can I get a job in digital marketing with a free certificate?', a: 'Yes, especially at the entry level. Digital marketing is one of the most portfolio-driven careers, what you have done matters more than where you studied. A free certificate combined with a small personal project (a blog, a managed social account, a mock ad campaign) is a credible foundation for an entry-level application.' },
  { q: 'What is the difference between digital marketing and growth hacking?', a: "Digital marketing is the broader discipline, it covers SEO, content, email, social, and paid channels. Growth hacking is a specific methodology within digital marketing, focused on rapid, data-driven experimentation to achieve explosive audience or revenue growth. It's typically used in tech startups. Start with digital marketing fundamentals before attempting growth hacking courses." },
  { q: 'Which digital marketing skill should I learn first?', a: 'Start with a broad overview course to understand how the different channels (SEO, content, paid ads, social, email) relate to each other. Once you have that strategic picture, choose the one specialisation that interests you most and go deep. Most entry-level roles focus on one or two channels, not all of them.' },
  { q: 'How long does it take to become job-ready in digital marketing?', a: 'With focused part-time study, most people can complete the foundational courses in two to four weeks. Becoming genuinely job-ready, including building a small portfolio of real work, typically takes two to three months. Digital marketing rewards people who practice while they learn, so starting a blog or managing a social account alongside your courses dramatically accelerates the process.' },
];

const exploreCategories = [
  { label: 'Digital Marketing', href: '/category/marketing' },
  { label: 'IT & Technology', href: '/category/it' },
  { label: 'Software Development', href: '/category/software-engineering' },
  { label: 'Business & Management', href: '/category/business' },
  { label: 'Accounting & Finance', href: '/category/accounting' },
];

export default function FreeDigitalMarketingCoursesPage() {
  const featured = courseCategories.flatMap((cat) => {
    if (cat.ids) return cat.ids.map((id) => allCourses.find((c) => c.id === id)).filter(Boolean);
    if (cat.items) return cat.items.map((i) => allCourses.find((c) => c.id === i.id)).filter(Boolean);
    return [];
  });
  const relatedCourses = courses
    .filter((c) => c.rating >= 4.6 && !featured.find((f) => f?.id === c.id))
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 12);

  return (
    <GuideTemplate
      canonicalUrl={CANONICAL}
      breadcrumb={[{ label: 'Digital Marketing', href: '/category/marketing' }, { label: 'Free Digital Marketing Courses' }]}
      heading="Best Free Courses for Digital Marketing Careers (2026)"
      heroDescription="Digital marketing is one of the most accessible and in-demand career paths available today, and you do not need a degree to break in. These free courses cover everything from strategy and SEO to conversion optimisation and growth hacking, all designed for beginners."
      heroBadges={[
        { icon: CheckCircle2, label: 'No Degree Required', iconClassName: 'text-green-500' },
        { icon: Award, label: 'Free Certificates', iconClassName: 'text-primary' },
        { icon: Clock, label: 'Self-Paced' },
      ]}
      authors={['jason']}
      lastUpdated="January 2026"
      benefitsSectionTitle="Why Choose a Career in Digital Marketing?"
      benefitsSectionSubtitle="Digital marketing is growing faster than the talent pool. Here is why it is one of the smartest career moves you can make right now."
      benefits={benefits}
      courseCategories={courseCategories}
      relatedCourses={relatedCourses}
      carouselTitle="More Top-Rated Free Courses"
      carouselSubtitle="Expand your skill set beyond marketing, all free to start"
      postCarouselSection={
        <>
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">Key Skills You Need for a Digital Marketing Career</h2>
            <p className="text-gray-500 mb-8 text-lg">Digital marketing is a broad field. These are the core skills employers expect, organised by the level at which you need them.</p>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-100 px-6 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider">
                <span>Skill</span>
                <span className="col-span-1 hidden sm:block">What It Means</span>
                <span className="text-right">Level</span>
              </div>
              <div className="divide-y divide-gray-50">
                {skills.map(({ skill, desc, level }) => (
                  <div key={skill} className="grid grid-cols-3 px-6 py-4 items-center gap-4">
                    <span className="font-bold text-gray-900 text-sm">{skill}</span>
                    <span className="text-gray-500 text-sm leading-snug col-span-1 hidden sm:block">{desc}</span>
                    <span className={`text-right justify-self-end text-xs font-bold px-2.5 py-1 rounded-full ${level === 'Foundation' ? 'bg-green-50 text-green-700' : level === 'Intermediate' ? 'bg-blue-50 text-primary' : 'bg-purple-50 text-purple-700'}`}>{level}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-2">Digital Marketing Career Progression</h2>
              <p className="text-blue-100 mb-10 text-lg max-w-2xl">Digital marketing has a clear, achievable progression, from entry-level assistant to senior strategist. Here is what the path typically looks like.</p>
              <div className="flex flex-col md:flex-row gap-4 md:gap-0 md:items-stretch">
                {[
                  { stage: 'Start', role: 'Digital Marketing Assistant', detail: 'Apply fundamentals across multiple channels under supervision', time: '0 to 1 year' },
                  { stage: 'Specialise', role: 'SEO / Social / PPC Specialist', detail: 'Go deep on one or two channels and own campaigns independently', time: '1 to 3 years' },
                  { stage: 'Lead', role: 'Digital Marketing Manager', detail: 'Manage a team, set strategy, and report on revenue impact', time: '3 to 5 years' },
                  { stage: 'Strategise', role: 'Growth Marketer / Director', detail: 'Own the full growth function, audience, acquisition, and retention', time: '5+ years' },
                ].map(({ stage, role, detail, time }, i, arr) => (
                  <div key={stage} className="flex md:flex-col items-start md:items-stretch gap-4 md:gap-0 flex-1">
                    <div className="bg-white/10 rounded-xl p-5 flex-1 backdrop-blur-sm">
                      <p className="text-xs font-bold text-blue-200 uppercase tracking-wider mb-2">{stage}</p>
                      <p className="font-bold text-white mb-1">{role}</p>
                      <p className="text-blue-100 text-xs leading-relaxed mb-3">{detail}</p>
                      <p className="text-xs text-blue-200 font-semibold">{time}</p>
                    </div>
                    {i < arr.length - 1 && (
                      <div className="flex md:justify-center items-center md:py-2 shrink-0">
                        <ArrowRight size={18} className="text-blue-300 rotate-90 md:rotate-0" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-20 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">How to Choose the Right Digital Marketing Course</h2>
            <p className="text-gray-500 mb-10">Three steps to avoid overwhelm and build in the right order.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { n: '1', title: 'Start Broad', body: 'Begin with a general digital marketing overview course before picking a specialisation. Understanding how SEO, content, email, and paid ads all connect to each other will make every subsequent course far more useful.' },
                { n: '2', title: 'Pick a Specialisation', items: ['Prefer writing? Focus on content marketing and SEO.', 'Prefer data? Head toward paid ads and analytics.', 'Prefer people and creativity? Social media and community management.'] },
                { n: '3', title: 'Practice While You Learn', body: "Digital marketing is a hands-on discipline. Employers respond to what you have done, not just what you have studied. Start a blog, manage a social account, or run a small ad campaign with a minimal budget, even unpaid projects build a portfolio." },
              ].map((s) => (
                <div key={s.n} className="flex flex-col">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-extrabold text-lg mb-4 shrink-0">{s.n}</div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{s.title}</h3>
                  {'items' in s ? (
                    <ul className="text-gray-600 text-sm space-y-2">
                      {s.items!.map((item) => (
                        <li key={item} className="flex items-start gap-2"><CheckCircle2 size={15} className="text-green-500 mt-0.5 shrink-0" /> {item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-600 text-sm leading-relaxed">{s.body}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        </>
      }
      careerPathsTitle="Roles You Can Work Towards"
      careerPathsSubtitle="These are the realistic entry and mid-level roles that digital marketing courses directly prepare you for."
      careerPaths={careerPaths}
      relatedGuides={relatedGuides}
      exploreCategories={exploreCategories}
      faqs={faqs}
      ctaHeading="Ready to Start Your Digital Marketing Career?"
      ctaBody="Start with the fundamentals, pick a specialisation, and build something real while you study. Consistent practice, even on small personal projects, is what separates candidates who get hired from those who don't."
      ctaPrimaryLabel="Browse Marketing Courses"
      ctaPrimaryHref="/category/marketing"
      ctaSecondaryLabel="Search a Specific Topic"
      ctaSecondaryHref="/search"
    />
  );
}
