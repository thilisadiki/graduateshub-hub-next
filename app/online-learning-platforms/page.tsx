import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Award, Globe, BookOpen, Sparkles, ShieldCheck, Laptop, ExternalLink, Zap, Compass, Users } from 'lucide-react';
import GuideTemplate from '@/components/course/GuideTemplate';
import type { BenefitItem, CourseCategory, CareerPathItem, RelatedGuide, FaqItem } from '@/components/course/GuideTemplate';
import { courses } from '@/data/courses';
import { courses as allCourses } from '@/data/courses';
import { SITE_URL, SITE_NAME } from '@/lib/seo';

const CANONICAL = `${SITE_URL}/online-learning-platforms`;

export const metadata: Metadata = {
  title: 'Best Online Learning Platforms for Graduates (2026)',
  description:
    'Compare top online learning platforms in 2026. Discover free audit tracks, certified diplomas, and career paths on Coursera, Alison, edX, freeCodeCamp, and Graduates Hub.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    siteName: SITE_NAME,
    title: 'Best Online Learning Platforms for Graduates (2026) | Graduates Hub',
    description:
      'Compare top online learning platforms in 2026. Discover free audit tracks, certified diplomas, and career paths on Coursera, Alison, edX, freeCodeCamp, and Graduates Hub.',
    url: CANONICAL,
  },
};

const benefits: BenefitItem[] = [
  { icon: Globe, title: 'Global University & Industry Access', body: 'Learn directly from top universities and tech giants without leaving your home.' },
  { icon: ShieldCheck, title: 'Skill-Based Hiring Advantage', body: 'Employers increasingly prioritize verifiable skills and projects over traditional degrees alone.' },
  { icon: CheckCircle2, title: 'Zero Cost Upfront Barriers', body: 'Free audit tracks and open-access courses allow you to build expertise without financial strain.' },
  { icon: Award, title: 'Verified Portfolio Credentials', body: 'Earn shareable certificates to showcase your commitment on your CV and LinkedIn profile.' },
  { icon: Laptop, title: 'Self-Paced Flexibility', body: 'Balance learning with job applications, internships, or current work commitments.' },
  { icon: Sparkles, title: 'Continuous Skill Upgrading', body: 'Stay updated on modern industry tools including AI, cloud computing, and advanced analytics.' },
];

const platformsList = [
  {
    name: 'Graduates Hub',
    badge: 'Curated Directory & Tools',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
    description: 'A free learning resource centre matching graduates with hand-picked certified courses, career roadmaps, and AI career tools.',
    cost: '100% Free',
    certType: 'Free Verified Digital Certificates',
    bestFor: 'Graduates seeking structured, zero-cost career paths and free certified courses across IT, Business, Finance, and Marketing.',
    highlights: [
      'Hand-curated course directory with direct free enrollment',
      'Integrated career roadmaps and interview preparation guides',
      'No subscription fees or hidden paywalls',
    ],
    link: '/career-roadmaps',
    isExternal: false,
    ctaText: 'Browse Curated Courses',
  },
  {
    name: 'Coursera',
    badge: 'University & Corporate Specialisations',
    badgeColor: 'bg-blue-100 text-blue-900 border-blue-300',
    description: 'Leading global provider of university degrees, professional certificates, and university-backed specialisations.',
    cost: 'Free Audit Track (Paid Certificates & Aid)',
    certType: 'Shareable Professional Certificates',
    bestFor: 'Learners seeking formal academic rigor from institutions like Stanford, Google, IBM, and Imperial College London.',
    highlights: [
      'Audit mode provides free access to lecture videos and readings',
      'Financial aid options available for certificate tracks',
      'Recognized entry-level professional certificates',
    ],
    link: 'https://www.coursera.org',
    isExternal: true,
    ctaText: 'Visit Coursera',
  },
  {
    name: 'Alison',
    badge: 'CPD-Accredited Diplomas',
    badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    description: 'One of the world\'s largest free learning platforms offering over 4,000 certificate and diploma courses.',
    cost: '100% Free Learning (Optional Cert Fee)',
    certType: 'CPD Certificates & Diplomas',
    bestFor: 'Practical workplace skills, compliance, business management, and foundational IT skills.',
    highlights: [
      'Entire course catalog is completely free to complete',
      'Flexible self-paced modules with interactive assessments',
      'Clear progression from basic certificates to full diplomas',
    ],
    link: '/best-alison-courses-with-certificates',
    isExternal: false,
    ctaText: 'Explore Alison Guide',
  },
  {
    name: 'edX',
    badge: 'Ivy League Academic Courses',
    badgeColor: 'bg-purple-100 text-purple-900 border-purple-300',
    description: 'Founded by Harvard and MIT, edX brings university-level education in computer science, humanities, and engineering.',
    cost: 'Free Audit Track (Paid Verified Track)',
    certType: 'Verified Institutional Certificates',
    bestFor: 'Students and graduates wanting deep academic foundational knowledge in software development, data, and science.',
    highlights: [
      'Direct access to Harvard CS50 and MIT introductory curricula',
      'Free audit access to course materials for specified durations',
      'Structured academic assignments and exam preparation',
    ],
    link: 'https://www.edx.org',
    isExternal: true,
    ctaText: 'Visit edX',
  },
  {
    name: 'freeCodeCamp',
    badge: 'Open-Source Coding Curriculum',
    badgeColor: 'bg-slate-100 text-slate-900 border-slate-300',
    description: 'A non-profit community that helps people learn to code for free through hands-on interactive projects.',
    cost: '100% Free',
    certType: 'Free Developer Certifications',
    bestFor: 'Aspiring software developers, web designers, and data analysts looking for 100% practical coding experience.',
    highlights: [
      'In-browser interactive coding challenges and projects',
      '300-hour verified certifications across frontend, backend, and data',
      'Entirely free with no hidden upgrades or trials',
    ],
    link: '/free-courses-for-software-developers',
    isExternal: false,
    ctaText: 'View Software Dev Guide',
  },
  {
    name: 'LinkedIn Learning',
    badge: 'Professional & Soft Skills',
    badgeColor: 'bg-sky-100 text-sky-900 border-sky-300',
    description: 'Video-based training library focused on software applications, leadership, management, and creative design.',
    cost: 'Subscription (1-Month Free Trial / Library Access)',
    certType: 'LinkedIn Profile Certificates',
    bestFor: 'Working professionals and graduates polishing soft skills, project management tools, or creative software.',
    highlights: [
      'Seamless 1-click addition of completed skills to your LinkedIn profile',
      'Bite-sized video lessons taught by industry practitioners',
      'Often accessible for free via university or public library accounts',
    ],
    link: 'https://www.linkedin.com/learning',
    isExternal: true,
    ctaText: 'Visit LinkedIn Learning',
  },
];

const platformComparisonMatrix = [
  { platform: 'Graduates Hub', cost: '100% Free', cert: 'Free Verified Digital', focus: 'Career Paths & Curated Courses', ideal: 'Graduates seeking structured free learning' },
  { platform: 'Coursera', cost: 'Free Audit / Paid Cert', cert: 'University / Corporate', focus: 'Academic & Industry Specialisations', ideal: 'Learners seeking top university brand names' },
  { platform: 'Alison', cost: 'Free Study / Paid Cert', cert: 'CPD Diplomas & Certs', focus: 'Workplace & Vocational Skills', ideal: 'Practical career skill seekers' },
  { platform: 'edX', cost: 'Free Audit / Paid Cert', cert: 'Institutional Verified', focus: 'Deep Computer Science & Science', ideal: 'Students wanting rigorous academic foundations' },
  { platform: 'freeCodeCamp', cost: '100% Free', cert: 'Free Verified Projects', focus: 'Software Development & Data', ideal: 'Hands-on coding and web development' },
  { platform: 'LinkedIn Learning', cost: 'Subscription / Free Trial', cert: 'LinkedIn Profile Badges', focus: 'Business, Tools & Soft Skills', ideal: 'Professionals polishing job-ready software' },
];

const courseCategories: CourseCategory[] = [
  {
    label: 'Software Development & IT',
    description: 'Build foundational programming skills with top-rated free developer courses.',
    categoryHref: '/category/software-engineering',
    categoryLabel: 'Software Engineering',
    items: [
      { id: 'python-for-beginners-data', customContent: 'Python is the versatile programming language driving web development, automation, and artificial intelligence. This accessible course introduces syntax, data structures, and scripting essentials with no prior coding experience needed.' },
      { id: 'diploma-python-programming', customContent: 'Master object-oriented programming, external API integrations, and database operations in Python. Perfect for graduates advancing toward backend engineering or data engineering roles.' },
      { id: 'intro-database-concepts', customContent: 'Relational databases underpin every web application and enterprise system. Learn primary keys, schema normalization, and database architecture basics.' },
    ],
  },
  {
    label: 'Data Analytics & AI',
    description: 'Learn to query databases, analyze data, and build predictive models.',
    categoryHref: '/category/it',
    categoryLabel: 'IT & Data Science',
    items: [
      { id: 'microsoft-excel-data-analysis', customContent: 'Spreadsheet fluency remains the baseline requirement for corporate analysts. Master VLOOKUP, XLOOKUP, nested formulas, and dynamic pivot tables for reporting.' },
      { id: 'diploma-databases-t-sql', customContent: 'SQL is the single most essential technical query language for data analysts. Master complex JOINs, aggregation functions, and subqueries.' },
      { id: 'machine-learning-with-ai', customContent: 'Explore introductory artificial intelligence, supervised learning, and regression algorithms designed for future-ready data professionals.' },
    ],
  },
  {
    label: 'Accounting & Finance',
    description: 'Practical financial management, bookkeeping, and auditing fundamentals.',
    categoryHref: '/category/accounting',
    categoryLabel: 'Accounting & Finance',
    items: [
      { id: 'mastering-financial-statement-analysis', customContent: 'Learn how to read and interpret balance sheets, income statements, and cash flow reports to evaluate business performance.' },
      { id: 'advanced-excel-financial-modeling', customContent: 'Build dynamic financial models, scenario managers, and cash flow projections using advanced Excel techniques.' },
    ],
  },
  {
    label: 'Digital Marketing & Business',
    description: 'Master search engine optimization, content strategy, and business management.',
    categoryHref: '/category/marketing',
    categoryLabel: 'Marketing & Business',
    items: [
      { id: 'diploma-digital-marketing', customContent: 'Comprehensive coverage of search engine optimization, social media marketing, email campaigns, and conversion funnel optimization.' },
      { id: 'project-management-fundamentals', customContent: 'Learn Agile, Scrum, and classic project management methodologies to coordinate team workflows effectively.' },
    ],
  },
];

const relatedGuides: RelatedGuide[] = [
  { title: 'Best Free Courses with Certificates (2026)', desc: 'The complete directory of free certified courses across all major fields.', href: '/free-courses-with-certificates' },
  { title: 'Best Free Alison Courses (2026)', desc: 'CPD-accredited diplomas and certificates you can complete completely free.', href: '/best-alison-courses-with-certificates' },
  { title: 'Best Free Courses for Data Analysts', desc: 'SQL, Python, Excel, and Power BI in one structured learning path.', href: '/free-courses-for-data-analysts' },
  { title: 'Free Courses for Software Developers', desc: 'Web development, databases, and programming fundamentals.', href: '/free-courses-for-software-developers' },
];

const faqs: FaqItem[] = [
  { q: 'Are certificates from online learning platforms recognized by employers?', a: 'Yes, especially when paired with tangible proof of work. Employers value candidates who demonstrate self-directed learning. A certificate from a reputable platform combined with a personal project or detailed portfolio shows initiative and verified technical skills.' },
  { q: 'Can I study on platforms like Coursera and edX completely for free?', a: 'Yes. Both Coursera and edX offer a "Free Audit" track for the vast majority of their courses. In audit mode, you get access to all lecture videos, readings, and course materials without paying anything. You only pay if you require a formal verified certificate.' },
  { q: 'What is the difference between auditing a course and earning a certificate?', a: 'Auditing allows you to consume all instructional videos and reading material for free, but usually excludes graded assignments and a formal certificate document. Earning a certificate involves passing graded assignments and receiving a verified credential to share on LinkedIn.' },
  { q: 'Which online learning platform is best for entry-level tech jobs?', a: 'For coding and web development, freeCodeCamp offers the most practical, 100% free hands-on practice. For university-backed computer science foundations, edX (CS50) and Coursera are excellent choices. Graduates Hub aggregates the best free certified courses from across these platforms into structured paths.' },
  { q: 'How does Graduates Hub differ from other online learning platforms?', a: 'Graduates Hub is a free learning resource centre and directory. Rather than locking content behind paywalls or monthly subscriptions, we curate top-rated free certified courses across platforms, pair them with career roadmaps, and provide free tools to help graduates land entry-level roles.' },
];

const careerPaths: CareerPathItem[] = [
  { role: 'Junior Software Engineer', detail: 'Build web applications using Python, JavaScript, and database management.' },
  { role: 'Data Analyst', detail: 'Extract database insights using SQL, Excel, and visualization dashboards.' },
  { role: 'Digital Marketer', detail: 'Manage organic SEO, content strategies, and multi-channel campaigns.' },
  { role: 'Junior Accountant', detail: 'Manage bookkeeping, payroll entries, and financial reporting analysis.' },
  { role: 'Project Coordinator', detail: 'Organize team sprints, project timelines, and operational workflows.' },
];

export default function OnlineLearningPlatformsPage() {
  const featured = courseCategories.flatMap((cat) => {
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
      breadcrumb={[{ label: 'Online Learning Platforms' }]}
      heading="Best Online Learning Platforms for Graduates (2026)"
      heroDescription="Navigating the world of online education can be overwhelming. This guide compares top free online learning platforms, audit options, and certified course providers to help you build job-ready skills without tuition fees."
      heroBadges={[
        { icon: CheckCircle2, label: '100% Free Audit Tracks', iconClassName: 'text-green-500' },
        { icon: Award, label: 'Verified Certificates', iconClassName: 'text-primary' },
        { icon: BookOpen, label: 'Top Global Providers' },
      ]}
      authors={['jason', 'ndulamiso']}
      benefitsSectionTitle="Why Use Online Learning Platforms for Career Growth?"
      benefitsSectionSubtitle="Self-directed online learning allows you to bridge university knowledge gaps, learn modern software tools, and prove your capabilities to hiring managers."
      benefits={benefits}
      preCoursesSection={
        <>
          {/* Section 2: Platform Breakdown Grid */}
          <section className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold text-primary bg-[#FFDF9C]/30 border border-[#D1C5B4] px-3 py-1 rounded-full uppercase tracking-wider">
                Platform Breakdown
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 mt-3 mb-4">
                Top Online Learning Platforms Compared
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Explore the key features, costs, and best use cases for the world's leading online course platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {platformsList.map((p) => (
                <div
                  key={p.name}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col justify-between hover:shadow-md transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <h3 className="text-2xl font-extrabold text-gray-900">{p.name}</h3>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full border ${p.badgeColor}`}>
                        {p.badge}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">{p.description}</p>

                    <div className="space-y-3 mb-6 bg-gray-50 rounded-xl p-4 border border-gray-100 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-gray-700">Cost Model:</span>
                        <span className="font-semibold text-primary">{p.cost}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-gray-700">Certificate Type:</span>
                        <span className="text-gray-600">{p.certType}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">Key Highlights:</p>
                      <ul className="space-y-2">
                        {p.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2 text-xs text-gray-600">
                            <CheckCircle2 size={14} className="text-green-500 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 mt-auto">
                    {p.isExternal ? (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full bg-gray-900 hover:bg-black text-white font-bold text-sm py-2.5 px-4 rounded-xl transition-colors"
                      >
                        {p.ctaText} <ExternalLink size={14} />
                      </a>
                    ) : (
                      <Link
                        href={p.link}
                        className="inline-flex items-center justify-center gap-2 w-full bg-primary hover:bg-[#5a4000] text-white font-bold text-sm py-2.5 px-4 rounded-xl transition-colors"
                      >
                        {p.ctaText} <Zap size={14} />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Platform Comparison Matrix */}
          <section className="mb-20 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
                Platform Feature &amp; Cost Matrix
              </h2>
              <p className="text-gray-500 text-sm md:text-base">
                Quick comparison to help you choose the right platform based on your learning goals.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50/50">
                    <th className="text-left font-bold text-gray-900 py-3.5 px-4 rounded-l-lg">Platform</th>
                    <th className="text-left font-bold text-gray-900 py-3.5 px-4">Cost Structure</th>
                    <th className="text-left font-bold text-gray-900 py-3.5 px-4">Certificate Type</th>
                    <th className="text-left font-bold text-gray-900 py-3.5 px-4">Primary Focus</th>
                    <th className="text-left font-bold text-gray-900 py-3.5 px-4 rounded-r-lg">Ideal Learner</th>
                  </tr>
                </thead>
                <tbody>
                  {platformComparisonMatrix.map((row, i) => (
                    <tr key={row.platform} className={i < platformComparisonMatrix.length - 1 ? 'border-b border-gray-50' : ''}>
                      <td className="py-4 px-4 font-bold text-gray-900 whitespace-nowrap">{row.platform}</td>
                      <td className="py-4 px-4 text-xs font-semibold text-primary">{row.cost}</td>
                      <td className="py-4 px-4 text-xs text-gray-600">{row.cert}</td>
                      <td className="py-4 px-4 text-xs text-gray-600">{row.focus}</td>
                      <td className="py-4 px-4 text-xs text-gray-500 leading-relaxed">{row.ideal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </>
      }
      courseCategories={courseCategories}
      relatedCourses={relatedCourses}
      carouselTitle="Top-Rated Free Certified Courses"
      carouselSubtitle="Explore hand-picked courses from Graduates Hub's directory with free certificates."
      postCarouselSection={
        <>
          {/* Action Guide for Graduates */}
          <section className="mb-20 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
              How to Maximize Free Online Learning
            </h2>
            <p className="text-gray-500 mb-10 text-base">
              Follow these three actionable steps to turn online courses into real interview opportunities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: '1', title: 'Audit Courses First', body: 'Start with free audit tracks on platforms like Coursera or edX to test topics without spending money upfront.' },
                { step: '2', title: 'Build Project Proof', body: 'Apply what you learn to a real project. A simple GitHub repo, financial analysis, or marketing audit speaks louder than a certificate alone.' },
                { step: '3', title: 'Optimize Your CV & LinkedIn', body: 'Add verified certificates to your LinkedIn Licenses & Certifications section to signal active continuous learning to recruiters.' },
              ].map(({ step, title, body }) => (
                <div key={step} className="flex flex-col">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-extrabold text-lg mb-4 shrink-0">
                    {step}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Banner Promo */}
          <section className="mb-20 bg-gradient-to-br from-[#7A5900] to-[#5a4000] rounded-2xl p-8 md:p-12 text-white">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <span className="text-xs font-bold text-[#FFDF9C] bg-white/10 px-3 py-1 rounded-full uppercase tracking-widest">
                  Free Career Tooling
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold mt-3 mb-2">
                  Need Help Matching Courses to Your Target Career?
                </h2>
                <p className="text-[#FFDF9C] text-sm md:text-base max-w-xl">
                  Use our free Gemini-powered AI tools, interactive career roadmaps, and CV builder to accelerate your job search.
                </p>
              </div>
              <Link
                href="/find-a-course"
                className="shrink-0 bg-white hover:bg-gray-100 text-gray-900 font-extrabold text-sm px-6 py-3 rounded-xl transition-colors whitespace-nowrap"
              >
                Browse All Free Courses →
              </Link>
            </div>
          </section>
        </>
      }
      careerPathsTitle="Popular Graduate Career Paths"
      careerPathsSubtitle="Explore roles you can prepare for using free online learning platforms."
      careerPaths={careerPaths}
      careerPathsBrowseHref="/categories"
      careerPathsBrowseLabel="Browse All Categories"
      relatedGuides={relatedGuides}
      faqs={faqs}
      ctaHeading="Ready to Start Learning Today?"
      ctaBody="Choose a platform, select a course, and build your skill set step-by-step. Consistency and practical project proof are what set successful candidates apart."
      ctaPrimaryLabel="Find a Free Course"
      ctaPrimaryHref="/find-a-course"
      ctaSecondaryLabel="Explore Career Roadmaps"
      ctaSecondaryHref="/career-roadmaps"
    />
  );
}
