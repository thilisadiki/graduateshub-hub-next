import type { Metadata } from 'next';
import { CheckCircle2, Clock, TrendingUp, Award, Code2, Layers, ArrowRight } from 'lucide-react';
import GuideTemplate from '@/components/course/GuideTemplate';
import type { BenefitItem, CourseCategory, CareerPathItem, RelatedGuide, FaqItem } from '@/components/course/GuideTemplate';
import { courses } from '@/data/courses';
import { courses as allCourses } from '@/data/courses';

const SITE_URL = 'https://www.graduateshub.co.za';
const CANONICAL = `${SITE_URL}/free-courses-for-software-developers`;

export const metadata: Metadata = {
  title: 'Best Free Courses for Software Developers (2026)',
  description:
    'Discover the best free online courses for software developers in 2026. Learn web development, programming languages, DevOps, and software engineering practices, all free with certificates.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Best Free Courses for Software Developers (2026) | Graduates Hub',
    description:
      'Discover the best free online courses for software developers in 2026. Learn web development, programming languages, DevOps, and software engineering practices, all free with certificates.',
    url: CANONICAL,
  },
};

const courseCategories: CourseCategory[] = [
  { label: 'Web Development', description: 'Master the foundational and full-stack web development skills every developer needs.', ids: ['html-css-web-dev', 'diploma-html5-css3-javascript', 'diploma-ecommerce-web-dev'], categoryHref: '/category/software-engineering', categoryLabel: 'Software Development' },
  { label: 'Programming Languages', description: 'Build fluency in the languages that power modern software, Python, Java, and C#.', ids: ['java-programming-basics', 'python-flask-docker', 'diploma-csharp-fundamentals'], categoryHref: '/category/software-engineering', categoryLabel: 'Software Development' },
  { label: 'Engineering Practices', description: 'Learn Agile, project management, and DevOps, the workflows used in every professional team.', ids: ['agile-essentials', 'understanding-software-project-management', 'intro-devops'], categoryHref: '/category/software-engineering', categoryLabel: 'Software Development' },
  { label: 'Advanced Development', description: 'Take your skills further with architecture, microservices, and AI-assisted development.', ids: ['microservices-beginners', 'vibe-coding-basics', 'become-software-architect'], categoryHref: '/category/software-engineering', categoryLabel: 'Software Development' },
];

const benefits: BenefitItem[] = [
  { icon: TrendingUp, title: 'High Global Demand', body: 'Software developers are among the most in-demand professionals worldwide, and that demand keeps growing.' },
  { icon: Code2, title: 'No Degree Required', body: 'Many professional developers are self-taught. Skills, portfolio, and problem-solving matter more than formal qualifications.' },
  { icon: Clock, title: 'Remote & Flexible Work', body: 'Software development is one of the most remote-friendly careers. Work from anywhere, in your own time.' },
  { icon: Award, title: 'Earn a Certificate', body: 'Complete free courses and earn certificates to showcase on your CV, LinkedIn, or GitHub profile.' },
  { icon: Layers, title: 'Clear Career Progression', body: 'From junior developer to senior engineer to architect, software has one of the clearest skill-based career ladders.' },
  { icon: CheckCircle2, title: '100% Free to Start', body: 'Every software development course on Graduates Hub is free to begin. No credit card needed.' },
];

const coreSkills = [
  { skill: 'HTML & CSS', level: 'Foundation', color: 'bg-green-100 text-green-700 border-green-200' },
  { skill: 'JavaScript', level: 'Foundation', color: 'bg-green-100 text-green-700 border-green-200' },
  { skill: 'Python or Java', level: 'Foundation', color: 'bg-green-100 text-green-700 border-green-200' },
  { skill: 'Git & Version Control', level: 'Foundation', color: 'bg-green-100 text-green-700 border-green-200' },
  { skill: 'Agile & Scrum', level: 'Intermediate', color: 'bg-blue-100 text-blue-700 border-blue-200' },
  { skill: 'APIs & Backend Development', level: 'Intermediate', color: 'bg-blue-100 text-blue-700 border-blue-200' },
  { skill: 'Databases (SQL / NoSQL)', level: 'Intermediate', color: 'bg-blue-100 text-blue-700 border-blue-200' },
  { skill: 'DevOps & CI/CD', level: 'Advanced', color: 'bg-purple-100 text-purple-700 border-purple-200' },
  { skill: 'System Design & Architecture', level: 'Advanced', color: 'bg-purple-100 text-purple-700 border-purple-200' },
  { skill: 'Microservices & Cloud', level: 'Advanced', color: 'bg-purple-100 text-purple-700 border-purple-200' },
];

const careerPaths: CareerPathItem[] = [
  { role: 'Junior Developer', detail: 'Entry-level coding role. Build features, fix bugs, and work within a team under senior guidance.' },
  { role: 'Front-End Developer', detail: 'Specialise in building user interfaces with HTML, CSS, and JavaScript frameworks.' },
  { role: 'Back-End Developer', detail: 'Build the logic, APIs, and databases that power applications behind the scenes.' },
  { role: 'Full-Stack Developer', detail: 'Handle both front-end and back-end. One of the most versatile and in-demand roles.' },
  { role: 'DevOps Engineer', detail: 'Bridge development and operations. Automate deployments and manage infrastructure.' },
  { role: 'Software Architect', detail: 'Design the high-level structure of systems. A senior leadership role in engineering.' },
];

const relatedGuides: RelatedGuide[] = [
  { title: 'Best Free AI Courses for Beginners (2026)', desc: 'Learn how AI and machine learning work, no coding background required.', href: '/free-ai-courses-for-beginners' },
  { title: 'Best Free Courses for Data Analysts (2026)', desc: 'Excel, SQL, Python, and Power BI, the full analyst learning path.', href: '/free-courses-for-data-analysts' },
  { title: 'Free Courses for Beginners, No Experience Needed', desc: 'Starting from scratch? These beginner courses require zero prior knowledge.', href: '/free-courses-for-beginners' },
  { title: 'Best Free Business Courses Online (2026)', desc: 'Project management and Agile skills that complement a software development career.', href: '/free-business-courses' },
];

const faqs: FaqItem[] = [
  { q: 'Do I need a degree to become a software developer?', a: 'No, many professional developers are entirely self-taught or completed bootcamps rather than traditional university degrees. What matters to employers is your ability to write code, solve problems, and demonstrate real projects. A strong portfolio and relevant certificates often carry more weight than a degree in an unrelated field.' },
  { q: 'What programming language should I learn first?', a: 'For web development, start with HTML and CSS, then move to JavaScript. For general programming and data-related paths, Python is the most beginner-friendly language with the broadest range of applications. Java and C# are strong choices if you are targeting enterprise software environments. The most important thing is to commit to one language first and build real projects with it.' },
  { q: 'How long does it take to become a software developer?', a: 'With consistent daily study, most beginners reach a junior developer level within 6 to 18 months. The timeline varies depending on your starting point, the hours you invest, and how actively you build projects alongside your learning. Free online courses provide the theory, building and shipping your own projects is what accelerates your progress.' },
  { q: 'Are free software development courses good enough to get a job?', a: 'Yes, especially when combined with a strong project portfolio. Many of the best-known developers started with free courses and self-directed learning. Employers in tech typically review your GitHub, past projects, and problem-solving ability during interviews. Free certificates from reputable platforms demonstrate initiative and structured learning.' },
  { q: 'What is the difference between front-end, back-end, and full-stack development?', a: 'Front-end development focuses on what users see and interact with, websites, interfaces, buttons, and layouts. Back-end development covers what happens on the server, databases, logic, APIs, and authentication. Full-stack development means you can work across both. Most developers start by specialising in one and gradually build knowledge of the other.' },
  { q: 'Do I need to learn DevOps as a software developer?', a: 'Not immediately, but understanding the basics, version control, CI/CD pipelines, containerisation, makes you a significantly stronger developer. Modern teams expect developers to have some DevOps awareness, even if a dedicated DevOps engineer handles the infrastructure. Starting with Git, Docker basics, and Agile workflows is a practical first step.' },
];

export default function FreeCoursesForSoftwareDevelopersPage() {
  const featured = courseCategories.flatMap((cat) =>
    cat.ids.map((id) => allCourses.find((c) => c.id === id)).filter(Boolean)
  );
  const relatedCourses = courses
    .filter(
      (c) =>
        (c.subCategory === 'Software Engineering' || c.subCategory === 'Database & Software Development') &&
        c.rating >= 4.6 &&
        !featured.find((f) => f?.id === c.id)
    )
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 10);

  return (
    <GuideTemplate
      canonicalUrl={CANONICAL}
      breadcrumb={[{ label: 'Free Courses for Software Developers' }]}
      heading="Best Free Courses for Software Developers (2026)"
      heroDescription="Software development is one of the most in-demand and high-paying career paths globally, and the barrier to entry has never been lower. This guide covers the best free courses for software developers in 2026, from web development foundations to advanced engineering practices, all with free certificates."
      heroBadges={[
        { icon: CheckCircle2, label: 'No Degree Required', iconClassName: 'text-green-500' },
        { icon: Award, label: 'Free Certificates Included', iconClassName: 'text-primary' },
        { icon: Clock, label: 'Self-Paced Learning' },
      ]}
      authors={['jason']}
      lastUpdated="January 2026"
      benefitsSectionTitle="Why Learn Software Development?"
      benefitsSectionSubtitle="Software development powers everything, from websites and apps to AI systems and automation tools."
      benefits={benefits}
      preCoursesSection={
        <section className="mb-20 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">Core Skills Every Software Developer Needs</h2>
          <p className="text-gray-500 mb-8">Before choosing courses, understand which skills to build, and in which order.</p>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="flex items-center gap-1.5 text-xs font-bold text-green-700 bg-green-100 border border-green-200 px-3 py-1 rounded-full">Foundation</span>
            <span className="flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-100 border border-blue-200 px-3 py-1 rounded-full">Intermediate</span>
            <span className="flex items-center gap-1.5 text-xs font-bold text-purple-700 bg-purple-100 border border-purple-200 px-3 py-1 rounded-full">Advanced</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {coreSkills.map(({ skill, level, color }) => (
              <div key={skill} className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-3 border border-gray-100">
                <span className="font-medium text-gray-800 text-sm">{skill}</span>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${color}`}>{level}</span>
              </div>
            ))}
          </div>
        </section>
      }
      courseCategories={courseCategories}
      relatedCourses={relatedCourses}
      carouselTitle="More Software Development Courses"
      carouselSubtitle="Explore further with highly rated courses in engineering and development"
      postCarouselSection={
        <>
          <section className="mb-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-2">Best Learning Path for Software Developers</h2>
            <p className="text-blue-100 mb-10">If you are starting from scratch, follow this roadmap to go from beginner to job-ready.</p>
            <div className="flex flex-col md:flex-row items-start gap-0 md:gap-0">
              {[
                { step: '1', title: 'Learn the Basics', detail: 'HTML, CSS, and a programming language (Python or JavaScript). Build your first simple project.' },
                { step: '2', title: 'Pick a Specialisation', detail: 'Front-end, back-end, or full-stack. Choose one direction and go deep before branching out.' },
                { step: '3', title: 'Master Engineering Practices', detail: 'Agile workflows, Git version control, and testing principles used by every professional dev team.' },
                { step: '4', title: 'Build & Deploy Projects', detail: 'Ship real projects. Add them to GitHub and your portfolio. This is what employers actually evaluate.' },
              ].map(({ step, title, detail }, idx, arr) => (
                <div key={step} className="flex flex-col md:flex-row items-start md:items-center flex-1 gap-0">
                  <div className="flex flex-col items-start md:items-center w-full md:flex-1">
                    <div className="w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center font-extrabold text-lg mb-4 shrink-0">{step}</div>
                    <h3 className="font-bold text-white text-base mb-2">{title}</h3>
                    <p className="text-blue-100 text-sm leading-relaxed">{detail}</p>
                  </div>
                  {idx < arr.length - 1 && (
                    <ArrowRight size={24} className="text-blue-300 shrink-0 my-6 md:my-0 md:mx-4 rotate-90 md:rotate-0 self-center" />
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">Do You Need a Degree to Become a Developer?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <p className="text-gray-600 leading-relaxed mb-4">No. Many developers today are entirely self-taught using free online courses, coding platforms, and real-world projects. The tech industry is one of the most meritocratic fields, what you have built matters far more than where you studied.</p>
                <p className="text-gray-600 leading-relaxed">What employers actually evaluate during interviews is your ability to solve problems, write clean code, and communicate your thinking. A strong GitHub portfolio and a few well-chosen certificates often outweigh a generic computer science degree.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-4">What actually matters to employers:</p>
                <ul className="space-y-3">
                  {['A portfolio of real projects you have built and shipped', 'Problem-solving ability demonstrated through coding challenges', 'Understanding of software development best practices and workflows', 'Ability to work within a team using Agile and Git', 'Continuous learning, new tools, frameworks, and languages'].map((point) => (
                    <li key={point} className="flex items-start gap-2 text-gray-600 text-sm">
                      <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />{point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </>
      }
      careerPathsTitle="Career Paths in Software Development"
      careerPathsSubtitle="After completing these courses, you can pursue a range of roles, from entry-level to specialist positions."
      careerPaths={careerPaths}
      careerPathsBrowseHref="/category/software-engineering"
      careerPathsBrowseLabel="Browse all Software Development courses"
      relatedGuides={relatedGuides}
      faqs={faqs}
      ctaHeading="Ready to Start Your Development Journey?"
      ctaBody="The key is not to jump between courses. Pick one path, build consistently, and apply what you learn through real projects. That is how beginners become developers."
      ctaPrimaryLabel="Browse Software Development Courses"
      ctaPrimaryHref="/category/software-engineering"
      ctaSecondaryLabel="All Free Courses with Certificates"
      ctaSecondaryHref="/free-courses-with-certificates"
    />
  );
}
