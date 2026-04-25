import type { Metadata } from 'next';
import { CheckCircle2, Clock, TrendingUp, Award, Database, BarChart2 } from 'lucide-react';
import GuideTemplate from '@/components/course/GuideTemplate';
import type { BenefitItem, CourseCategory, CareerPathItem, RelatedGuide, FaqItem } from '@/components/course/GuideTemplate';
import { courses } from '@/data/courses';
import { courses as allCourses } from '@/data/courses';
import { SITE_URL } from '@/lib/seo';

const CANONICAL = `${SITE_URL}/free-courses-for-data-analysts`;

export const metadata: Metadata = {
  title: 'Best Free Courses for Data Analysts (2026)',
  description:
    'Discover the best free courses for data analysts in 2026. Learn SQL, Python, databases, and financial analysis, all free with certificates. No degree required.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Best Free Courses for Data Analysts (2026) | Graduates Hub',
    description:
      'Discover the best free courses for data analysts in 2026. Learn SQL, Python, databases, and financial analysis, all free with certificates. No degree required.',
    url: CANONICAL,
  },
};

const courseCategories: CourseCategory[] = [
  { label: 'Spreadsheets & Visualisation', description: 'Excel and Power BI are the two tools most entry-level analyst roles test on day one.', ids: ['microsoft-excel-data-analysis', 'intro-power-bi', 'mastering-financial-statement-analysis'], categoryHref: '/category/accounting', categoryLabel: 'Accounting & Finance' },
  { label: 'SQL & Databases', description: 'SQL is the single most important technical skill for a data analyst. Start here.', ids: ['intro-database-concepts', 'diploma-databases-t-sql', 'databases-dml-sql-server'], categoryHref: '/category/it', categoryLabel: 'IT & Technology' },
  { label: 'Python for Data', description: 'Python handles datasets, automates reporting, and unlocks machine learning.', ids: ['python-for-beginners-data', 'diploma-python-programming', 'machine-learning-with-ai'], categoryHref: '/category/software-engineering', categoryLabel: 'Software Development' },
];

const benefits: BenefitItem[] = [
  { icon: TrendingUp, title: 'High Demand Across Industries', body: 'Finance, healthcare, tech, retail, every sector needs people who can interpret data.' },
  { icon: Database, title: 'No Degree Required', body: 'Data analytics is skill-based. Employers care what you can do, not just what you studied.' },
  { icon: BarChart2, title: 'Clear Learning Path', body: 'SQL → Python → visualisation → ML. The roadmap is well-defined and learnable for free.' },
  { icon: Award, title: 'Earn Certificates', body: 'Every course includes a downloadable certificate to add to your CV and LinkedIn.' },
  { icon: Clock, title: 'Self-Paced Learning', body: 'Study around your schedule. Most foundational courses take just a few hours.' },
  { icon: CheckCircle2, title: '100% Free to Start', body: 'No upfront cost. Every course on Graduates Hub is free to begin.' },
];

const toolPath = [
  { tool: 'Excel / Google Sheets', use: 'Cleaning, sorting, and summarising small datasets', level: 'Beginner' },
  { tool: 'SQL', use: 'Querying databases to extract and filter data at scale', level: 'Beginner to Intermediate' },
  { tool: 'Python (Pandas / NumPy)', use: 'Automating analysis and working with large, complex datasets', level: 'Intermediate' },
  { tool: 'Power BI / Tableau', use: 'Building dashboards and visual reports for stakeholders', level: 'Intermediate' },
  { tool: 'Machine Learning basics', use: 'Predictive modelling and pattern recognition in data', level: 'Advanced' },
];

const careerPaths: CareerPathItem[] = [
  { role: 'Junior Data Analyst', detail: 'Entry-level role focused on data cleaning, reporting, and basic insights.' },
  { role: 'Reporting Analyst', detail: 'Creates dashboards and recurring reports for business decision-makers.' },
  { role: 'Business Intelligence Analyst', detail: 'Combines data analysis with business strategy and tooling.' },
  { role: 'Data Assistant', detail: 'Supports senior analysts with data collection, formatting, and quality checks.' },
  { role: 'Data Scientist', detail: 'Requires further learning in statistics and machine learning.' },
  { role: 'Machine Learning Engineer', detail: 'Builds and trains predictive models, advanced technical role.' },
];

const relatedGuides: RelatedGuide[] = [
  { title: 'Best Free AI Courses for Beginners (2026)', desc: 'Machine learning and AI are the natural next step after data analytics fundamentals.', href: '/free-ai-courses-for-beginners' },
  { title: 'Best Free Online Courses with Certificates (2026)', desc: 'The complete guide to free certified courses across all fields and career paths.', href: '/free-courses-with-certificates' },
  { title: 'Browse All IT & AI Courses', desc: 'SQL, databases, software engineering, and AI, all in one place.', href: '/category/it' },
  { title: 'Best Free Business Courses Online (2026)', desc: 'Project management and business strategy skills that complement a data analyst career.', href: '/free-business-courses' },
];

const faqs: FaqItem[] = [
  { q: 'Do you need coding experience to become a data analyst?', a: 'Not at first. You can start with Excel and basic data tools with no coding background. However, learning SQL and Python will significantly increase your job prospects, salary ceiling, and ability to work with larger datasets. Most employers expect at least basic SQL from entry-level analysts.' },
  { q: 'How long does it take to learn data analytics from scratch?', a: 'With consistent study (1 to 2 hours per day), you can cover the fundamentals, SQL, basic Python, and data interpretation, within 3 to 6 months. Completing several certificates along the way gives you tangible proof of progress for your CV.' },
  { q: 'Is SQL really necessary for data analysts?', a: 'Yes, it is arguably the most important tool. Most real-world data lives in relational databases. SQL lets you extract, filter, group, and join that data directly. It is typically the first technical skill employers test for in data analyst interviews.' },
  { q: 'Are free data analytics certificates worth adding to a CV?', a: 'Absolutely, especially early in your career. They show initiative, demonstrate that you have covered specific topics, and give interviewers a clear talking point. Pairing a certificate with a personal project (even a simple dataset analysis on GitHub) is even more compelling.' },
  { q: 'What is the difference between a data analyst and a data scientist?', a: 'A data analyst focuses on interpreting existing data to answer business questions using tools like SQL, Excel, and visualisation software. A data scientist goes further, building predictive models, working with unstructured data, and applying machine learning techniques. Most data scientists start as analysts.' },
];

export default function FreeCoursesForDataAnalystsPage() {
  const featured = courseCategories.flatMap((cat) =>
    cat.ids.map((id) => allCourses.find((c) => c.id === id)).filter(Boolean)
  );
  const relatedCourses = courses
    .filter(
      (c) =>
        (c.category.toLowerCase().includes('data analytics') ||
          c.category.toLowerCase().includes('accounting') ||
          c.subCategory === 'Artificial Intelligence' ||
          c.subCategory === 'Database & Software Development') &&
        c.rating >= 4.5 &&
        !featured.find((f) => f?.id === c.id)
    )
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 12);

  return (
    <GuideTemplate
      canonicalUrl={CANONICAL}
      breadcrumb={[{ label: 'Free Courses for Data Analysts' }]}
      heading="Best Free Courses for Data Analysts (2026)"
      heroDescription="Data is one of the most valuable assets in today's economy, and companies are actively hiring people who know how to work with it. If you are starting out or switching careers, this guide covers the best free data analytics courses in 2026, designed to build real, job-ready skills with no prior experience required."
      heroBadges={[
        { icon: CheckCircle2, label: 'No Degree Required', iconClassName: 'text-green-500' },
        { icon: Award, label: 'Free Certificates Included', iconClassName: 'text-primary' },
        { icon: Database, label: 'SQL, Python & More' },
      ]}
      authors={['jason']}
      lastUpdated="January 2026"
      benefitsSectionTitle="Why Become a Data Analyst?"
      benefitsSectionSubtitle="Data analytics is one of the most in-demand career paths globally, and it is one of the few where free, self-directed learning genuinely works."
      benefits={benefits}
      courseCategories={courseCategories}
      relatedCourses={relatedCourses}
      carouselTitle="More Courses to Build Your Data Skills"
      carouselSubtitle="Accounting, AI, and finance courses that complement a data analytics career"
      postCarouselSection={
        <>
          <section className="mb-20 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">What Skills Do You Need to Become a Data Analyst?</h2>
            <p className="text-gray-500 mb-8 text-lg">Most data analyst roles expect a core set of tools and skills. Here is the standard learning path, from beginner to job-ready.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left font-bold text-gray-900 py-3 pr-6">Tool</th>
                    <th className="text-left font-bold text-gray-900 py-3 pr-6">What You Use It For</th>
                    <th className="text-left font-bold text-gray-900 py-3">Level</th>
                  </tr>
                </thead>
                <tbody>
                  {toolPath.map(({ tool, use, level }, i) => (
                    <tr key={tool} className={i < toolPath.length - 1 ? 'border-b border-gray-50' : ''}>
                      <td className="py-4 pr-6 font-semibold text-gray-800 whitespace-nowrap">{tool}</td>
                      <td className="py-4 pr-6 text-gray-600">{use}</td>
                      <td className="py-4">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-bold whitespace-nowrap ${level === 'Beginner' ? 'bg-green-50 text-green-700' : level === 'Intermediate' ? 'bg-blue-50 text-blue-700' : level === 'Beginner to Intermediate' ? 'bg-yellow-50 text-yellow-700' : 'bg-purple-50 text-purple-700'}`}>{level}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-2">Do You Need Coding to Become a Data Analyst?</h2>
            <p className="text-blue-100 mb-10">Not always, but learning Python and SQL will make you significantly more competitive.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold text-white text-lg mb-4">You can start without coding:</h3>
                <ul className="space-y-3">
                  {['Excel and Google Sheets for basic data manipulation', 'Online dashboarding tools with drag-and-drop interfaces', 'Basic reporting and data interpretation skills'].map((point) => (
                    <li key={point} className="flex items-start gap-2 text-blue-100 text-sm"><CheckCircle2 size={16} className="text-green-300 mt-0.5 shrink-0" />{point}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold text-white text-lg mb-4">However, learning Python and SQL will:</h3>
                <ul className="space-y-3">
                  {['Increase your job opportunities significantly', 'Let you work with larger, more complex datasets', 'Make you more competitive at salary negotiation', 'Open paths into data science and machine learning'].map((point) => (
                    <li key={point} className="flex items-start gap-2 text-blue-100 text-sm"><CheckCircle2 size={16} className="text-green-300 mt-0.5 shrink-0" />{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-20 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">How to Choose the Right Course</h2>
            <p className="text-gray-500 mb-10">A clear starting strategy prevents wasted time and dropped momentum.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: '1', title: 'Start with the Basics', body: 'Begin with introductory database and SQL courses before jumping into Python. Understanding how data is stored and queried is the most foundational skill.' },
                { step: '2', title: 'Learn Tools Step-by-Step', body: 'Follow the natural progression: databases and SQL → Python → visualisation tools. Each layer builds on the last and maps directly to real job requirements.' },
                { step: '3', title: 'Focus on Practical Skills', body: 'Prioritise courses that use real-world examples and datasets. Theory is useful, but employers hire for what you can actually do with the data in front of you.' },
              ].map(({ step, title, body }) => (
                <div key={step} className="flex flex-col">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-extrabold text-lg mb-4 shrink-0">{step}</div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </section>
        </>
      }
      careerPathsTitle="Career Paths in Data Analytics"
      careerPathsSubtitle="These free courses lead directly to entry-level roles, and lay the foundation for more advanced positions with further learning."
      careerPaths={careerPaths}
      careerPathsBrowseHref="/category/it"
      careerPathsBrowseLabel="Browse all IT & Data courses"
      relatedGuides={relatedGuides}
      faqs={faqs}
      ctaHeading="Ready to Start Your Data Analytics Journey?"
      ctaBody="Becoming a data analyst does not require a traditional degree; it requires the right skills. Start with one course, build your foundation, and expand from there. Consistency and practice are what set successful learners apart."
      ctaPrimaryLabel="Browse IT & Data Courses"
      ctaPrimaryHref="/category/it"
      ctaSecondaryLabel="All Free Courses with Certificates"
      ctaSecondaryHref="/free-courses-with-certificates"
    />
  );
}
