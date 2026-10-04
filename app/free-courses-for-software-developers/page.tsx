import type { Metadata } from 'next';
import { CheckCircle2, Clock, TrendingUp, Award, Code2, Layers, ArrowRight, Star } from 'lucide-react';
import GuideTemplate from '@/components/course/GuideTemplate';
import type { BenefitItem, CourseCategory, CareerPathItem, RelatedGuide, FaqItem } from '@/components/course/GuideTemplate';
import { courses } from '@/data/courses';
import { courses as allCourses } from '@/data/courses';
import { SITE_URL, SITE_NAME } from '@/lib/seo';

const CANONICAL = `${SITE_URL}/free-courses-for-software-developers`;

export const metadata: Metadata = {
  title: '10 Best Free Software Engineering Courses Online with Certificates (2026)',
  description:
    'Study 10+ top-rated free software engineering courses online in 2026. Earn accredited CPD certificates in Python, Java, C#, DevOps & System Design. 100% free with zero fees.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    siteName: SITE_NAME,
    title: '10 Best Free Software Engineering Courses Online with Certificates (2026) | Graduates Hub',
    description:
      'Study 10+ top-rated free software engineering courses online in 2026. Earn accredited CPD certificates in Python, Java, C#, DevOps & System Design. 100% free with zero fees.',
    url: CANONICAL,
  },
};

const courseCategories: CourseCategory[] = [
  {
    label: 'Web Development',
    description: 'Master the foundational and full-stack web development skills every developer needs.',
    roadmapHref: '/career-roadmaps/web-developer',
    roadmapLabel: 'Web Developer',
    items: [
      { id: 'html-css-web-dev', customContent: 'Every software developer needs to understand how the web is built, making this the absolute starting point for your journey into front-end development. This course provides a deep dive into semantic HTML markup and responsive CSS styling, ensuring your web pages look professional and function flawlessly across both desktop and mobile devices. You will learn modern layout techniques like Flexbox and CSS Grid, empowering you to translate design mockups into pixel-perfect, accessible code that forms the foundation of any web application.' },
      { id: 'diploma-html5-css3-javascript', customContent: 'This comprehensive diploma packages a full frontend developer toolkit into one intensive program. It bridges the critical gap between building static web pages and creating interactive, dynamic web applications. You will learn how to use JavaScript to manipulate the Document Object Model (DOM), handle user events, and manage application state. By mastering these core web technologies together, you will be capable of building responsive interfaces that provide smooth, modern user experiences without relying entirely on heavy external frameworks.' },
      { id: 'diploma-ecommerce-web-dev', customContent: 'Moving beyond basic websites, this course teaches you how to architect and build fully functional, transactional web applications. Focusing on the complex architecture of e-commerce platforms, you will learn how to design shopping cart functionality, manage secure user authentication sessions, and understand the foundational concepts behind payment gateway integrations. This practical, project-focused approach demonstrates to employers that you can build applications that directly drive revenue and handle complex user flows.' }
    ]
  },
  {
    label: 'Programming Languages',
    description: 'Build fluency in the languages that power modern software, Python, Java, and C#.',
    roadmapHref: '/career-roadmaps/software-engineer',
    roadmapLabel: 'Software Engineer',
    items: [
      { id: 'java-programming-basics', customContent: 'Java remains one of the most dominant, battle-tested languages in enterprise software, banking, and large-scale backend systems. This thorough course introduces you to the core principles of object-oriented programming (OOP), including inheritance, polymorphism, and encapsulation. You will learn how to structure robust, scalable back-end applications, manage memory effectively, and write code that meets the strict performance and security standards required by large corporate employers.' },
      { id: 'python-flask-docker', customContent: 'This course introduces you to a highly popular, modern back-end technology stack. You will learn how to use Python and the lightweight Flask framework to build fast, secure web APIs from scratch. Crucially, the course also covers containerization using Docker, teaching you how to package your applications into predictable, isolated environments. This ensures that your code runs consistently across development, testing, and production servers, which is a skill that is absolutely essential in modern cloud-based development teams.' },
      { id: 'diploma-csharp-fundamentals', customContent: 'C# and the broader .NET ecosystem power countless corporate systems, Windows applications, and enterprise web services globally. This in-depth diploma builds a rigorous foundation in C# syntax, strong type safety, and advanced backend application logic. You will learn how to leverage the extensive .NET libraries to build scalable, secure applications, making you a highly attractive candidate for enterprise software roles that demand structural discipline and high performance.' }
    ]
  },
  {
    label: 'Engineering Practices',
    description: 'Learn Agile, project management, and DevOps, the workflows used in every professional team.',
    roadmapHref: '/career-roadmaps/cloud-support-devops',
    roadmapLabel: 'Cloud & DevOps',
    items: [
      { id: 'agile-essentials', customContent: 'In the professional world, writing code is only half the job; the other half is collaborating effectively within a team environment. This vital course covers the principles of Agile methodologies, including Scrum frameworks, sprint planning, and daily stand-ups. You will gain the professional vocabulary and workflow understanding needed to integrate seamlessly into modern development teams, allowing you to participate actively in product planning and iterative software delivery from your very first week on the job.' },
      { id: 'understanding-software-project-management', customContent: 'To become a truly effective developer, you need to understand how software moves from a client\'s initial request to a fully deployed product. This course provides a high-level view of the Software Development Life Cycle (SDLC). You will learn how technical leads estimate project timelines, manage scope creep, prioritize feature backlogs, and effectively communicate technical constraints to non-technical stakeholders, which are skills that are critical as you progress toward senior or lead developer roles.' },
      { id: 'intro-devops', customContent: 'The modern software industry has bridged the traditional gap between writing code (development) and deploying it (operations). This essential introduction to DevOps culture covers the fundamentals of continuous integration and continuous deployment (CI/CD) pipelines. You will learn the importance of automated testing, version control integration, and infrastructure as code, understanding how high-performing engineering teams are able to safely ship new features to users multiple times a day.' }
    ]
  },
  {
    label: 'Advanced Development',
    description: 'Take your skills further with architecture, microservices, and AI-assisted development.',
    roadmapHref: '/career-roadmaps/software-engineer',
    roadmapLabel: 'Software Engineer',
    items: [
      { id: 'microservices-beginners', customContent: 'Traditional, monolithic application architectures are rapidly being replaced by more scalable microservices. This forward-looking course explains the theory and practice of breaking down large, unwieldy applications into small, independent services that communicate seamlessly via APIs. You will learn about service discovery, fault tolerance, and API gateways, gaining a strong conceptual understanding of how modern tech giants architect their global platforms to handle massive user loads.' },
      { id: 'vibe-coding-basics', customContent: 'The landscape of software engineering is shifting with the rapid adoption of AI-assisted development tools. This cutting-edge course explores how to leverage large language models (LLMs) and AI coding assistants to dramatically increase your development velocity. You will learn how to generate boilerplate code instantly, debug complex logic errors faster, and write effective prompts that allow you to focus on high-level architecture and problem-solving rather than rote syntax memorization.' },
      { id: 'become-software-architect', customContent: 'This advanced course encourages you to step back from writing individual lines of code and look at the system as a whole. It introduces the fundamental principles of high-level system design, teaching you how to make critical decisions regarding scalability, security, and database selection. You will learn how to evaluate trade-offs between different tech stacks and design architectures that can support business growth, preparing you for senior technical leadership and architectural roles.' }
    ]
  },
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
  { skill: 'Agile & Scrum', level: 'Intermediate', color: 'bg-[#FFDF9C]/40 text-[#5a4000] border-[#D1C5B4]' },
  { skill: 'APIs & Backend Development', level: 'Intermediate', color: 'bg-[#FFDF9C]/40 text-[#5a4000] border-[#D1C5B4]' },
  { skill: 'Databases (SQL / NoSQL)', level: 'Intermediate', color: 'bg-[#FFDF9C]/40 text-[#5a4000] border-[#D1C5B4]' },
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
  { title: 'Software Engineer Career Roadmap', desc: 'Step-by-step career path to becoming a Software Engineer without a CS degree.', href: '/career-roadmaps/software-engineer' },
  { title: 'Free Python Courses with Certificates (2026)', desc: 'Master Python programming from syntax basics to backend development.', href: '/free-python-courses-with-certificates' },
  { title: 'Free Cloud Computing Courses (2026)', desc: 'Learn AWS, Azure, and DevOps deployment architectures.', href: '/free-cloud-computing-courses' },
  { title: 'Best Free AI Courses for Beginners (2026)', desc: 'Learn how AI and machine learning work, no coding background required.', href: '/free-ai-courses-for-beginners' },
];

const faqs: FaqItem[] = [
  { q: 'What are the best free online courses for learning software engineering in 2026?', a: 'The best free software engineering courses teach practical programming languages alongside system design. Start with Java Programming Basics or Python Flask for backend development, take the Diploma in HTML5, CSS3 & JavaScript for frontend architecture, and complete Introduction to DevOps for CI/CD and container workflows. All of these courses offer free self-paced learning and certificates on Graduates Hub.' },
  { q: 'Do I need a computer science degree to become a software engineer?', a: 'No. Many professional software engineers are entirely self-taught or completed targeted certifications rather than traditional university degrees. What matters to employers is your ability to write clean code, decompose complex problems, and demonstrate real projects in a GitHub portfolio. Relevant certificates often carry more weight than an unrelated degree.' },
  { q: 'What programming language should I learn first for software engineering?', a: 'For web development, start with HTML, CSS, and JavaScript. For general software engineering and backend systems, Python is beginner-friendly, while Java and C# are industry standards in enterprise banking, logistics, and large-scale applications. The most important rule is to commit to one language first and build real software with it.' },
  { q: 'How long does it take to become a software engineer from scratch?', a: 'With consistent daily study, most dedicated beginners reach a job-ready junior software developer level within 6 to 18 months. Free online courses provide theoretical frameworks and fundamentals, while building and shipping personal projects accelerates your progress.' },
  { q: 'Are free software engineering courses good enough to get hired?', a: 'Yes, especially when paired with a portfolio of deployed applications. Tech hiring managers review your GitHub repositories, code quality, and problem-solving ability during technical interviews. Free accredited certificates demonstrate structured commitment and verified domain knowledge.' },
  { q: 'Do software engineers need to learn DevOps and cloud tools?', a: 'Yes. Modern development teams expect software engineers to understand version control (Git), containerisation (Docker), and continuous integration pipelines (CI/CD). You do not need to be a cloud architect initially, but knowing how code is deployed and monitored makes you a significantly more valuable engineer.' },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Learn Software Engineering for Free Online in 2026',
  description: 'A 4-step structured learning guide to master programming fundamentals, web development, DevOps, and software architecture with free certificates.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Learn Programming Foundations',
      text: 'Master HTML, CSS, and core programming logic with Python, Java, or JavaScript.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Choose a Specialisation',
      text: 'Focus deeply on full-stack web, enterprise backend (Java or C#), or cloud-native software development.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Master Modern Engineering Practices',
      text: 'Learn Agile workflows, Git version control, testing principles, and CI/CD automation pipelines.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Build and Deploy Applications',
      text: 'Build and ship real-world portfolio applications with clean architecture to showcase on GitHub.',
    },
  ],
};

export default function FreeCoursesForSoftwareDevelopersPage() {
  const featured = courseCategories.flatMap((cat) => {
    if (cat.ids) return cat.ids.map((id) => allCourses.find((c) => c.id === id)).filter(Boolean);
    if (cat.items) return cat.items.map((i) => allCourses.find((c) => c.id === i.id)).filter(Boolean);
    return [];
  });
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema).replace(/</g, '\\u003c') }}
      />
      <GuideTemplate
        canonicalUrl={CANONICAL}
        datePublished="2026-01-01"
        breadcrumb={[{ label: 'Free Software Engineering Courses' }]}
        heading="10 Best Free Software Engineering Courses Online with Certificates (2026)"
        heroDescription="Study top-rated accredited software engineering and development courses online for free in 2026. Master programming fundamentals, backend systems, DevOps, and software architecture with downloadable CPD certificates - no degree or tuition fees required."
        heroBadges={[
          { icon: Star, label: 'Top-Rated (4.6+ ★)', iconClassName: 'text-amber-500' },
          { icon: CheckCircle2, label: 'No Degree Required', iconClassName: 'text-green-500' },
          { icon: Award, label: 'Free Certificates Included', iconClassName: 'text-primary' },
          { icon: Clock, label: 'Self-Paced Learning' },
        ]}
        authors={['jason']}
        benefitsSectionTitle="Why Study Software Engineering?"
        benefitsSectionSubtitle="Software engineering powers everything from modern web applications and mobile platforms to AI automation and global enterprise systems."
        benefits={benefits}
        preCoursesSection={
          <section className="mb-20 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">Core Skills Every Software Engineer Needs</h2>
            <p className="text-gray-500 mb-8">Before choosing courses, understand which skills to build, and in which order.</p>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="flex items-center gap-1.5 text-xs font-bold text-green-700 bg-green-100 border border-green-200 px-3 py-1 rounded-full">Foundation</span>
              <span className="flex items-center gap-1.5 text-xs font-bold text-[#5a4000] bg-[#FFDF9C]/40 border border-[#D1C5B4] px-3 py-1 rounded-full">Intermediate</span>
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
        carouselTitle="More Software Engineering Courses"
        carouselSubtitle="Explore further with highly rated courses in engineering and development"
        postCarouselSection={
          <>
            {/* Position 0 Snippet Target: Summary Comparison Table */}
            <section className="mb-20 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 overflow-x-auto">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">Top Software Engineering Courses to Learn Free in 2026</h2>
              <p className="text-gray-500 mb-8 text-lg">Compare study times, ratings, and target career roles for each core software engineering discipline.</p>
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b border-gray-200 text-sm font-bold text-gray-900 bg-gray-50/50">
                    <th className="py-3 px-4">Engineering Track</th>
                    <th className="py-3 px-4">Top Free Course</th>
                    <th className="py-3 px-4">Rating</th>
                    <th className="py-3 px-4">Study Time</th>
                    <th className="py-3 px-4">Target Job Roles</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm text-gray-600">
                  <tr>
                    <td className="py-3.5 px-4 font-bold text-gray-900">Backend Engineering</td>
                    <td className="py-3.5 px-4 font-semibold text-gray-900">Java Programming Basics</td>
                    <td className="py-3.5 px-4 font-medium text-gray-900">4.7 ★</td>
                    <td className="py-3.5 px-4">8-12 hrs</td>
                    <td className="py-3.5 px-4">Junior Backend Developer, Systems Engineer</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-bold text-gray-900">Web & Full-Stack</td>
                    <td className="py-3.5 px-4 font-semibold text-gray-900">Diploma in HTML5, CSS3 & JavaScript</td>
                    <td className="py-3.5 px-4 font-medium text-gray-900">4.8 ★</td>
                    <td className="py-3.5 px-4">10-15 hrs</td>
                    <td className="py-3.5 px-4">Frontend Developer, Full-Stack Developer</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-bold text-gray-900">Enterprise .NET</td>
                    <td className="py-3.5 px-4 font-semibold text-gray-900">Diploma in C# Fundamentals</td>
                    <td className="py-3.5 px-4 font-medium text-gray-900">4.7 ★</td>
                    <td className="py-3.5 px-4">12-15 hrs</td>
                    <td className="py-3.5 px-4">C# Developer, Enterprise Software Engineer</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-bold text-gray-900">DevOps & Cloud</td>
                    <td className="py-3.5 px-4 font-semibold text-gray-900">Introduction to DevOps (CI/CD)</td>
                    <td className="py-3.5 px-4 font-medium text-gray-900">4.6 ★</td>
                    <td className="py-3.5 px-4">3-5 hrs</td>
                    <td className="py-3.5 px-4">DevOps Engineer, Cloud Support Specialist</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-bold text-gray-900">System Architecture</td>
                    <td className="py-3.5 px-4 font-semibold text-gray-900">Microservices Architecture</td>
                    <td className="py-3.5 px-4 font-medium text-gray-900">4.8 ★</td>
                    <td className="py-3.5 px-4">3-5 hrs</td>
                    <td className="py-3.5 px-4">Software Architect, Lead Developer</td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section className="mb-20 bg-gradient-to-br from-[#7A5900] to-[#5a4000] rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-2">Best Learning Path for Software Engineers</h2>
              <p className="text-[#FFDF9C] mb-10">If you are starting from scratch, follow this roadmap to go from beginner to job-ready.</p>
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
                      <p className="text-[#FFDF9C] text-sm leading-relaxed">{detail}</p>
                    </div>
                    {idx < arr.length - 1 && (
                      <ArrowRight size={24} className="text-[#FFDF9C] shrink-0 my-6 md:my-0 md:mx-4 rotate-90 md:rotate-0 self-center" />
                    )}
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-20 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">Do You Need a Degree to Become a Software Engineer?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <p className="text-gray-600 leading-relaxed mb-4">No. Many developers today are entirely self-taught using free online courses, coding platforms, and real-world projects. The tech industry is one of the most meritocratic fields: what you have built matters far more than where you studied.</p>
                  <p className="text-gray-600 leading-relaxed">What employers actually evaluate during interviews is your ability to solve problems, write clean code, and communicate your thinking. A strong GitHub portfolio and a few well-chosen certificates often outweigh a generic degree.</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-4">What actually matters to employers:</p>
                  <ul className="space-y-3">
                    {['A portfolio of real projects you have built and shipped', 'Problem-solving ability demonstrated through coding challenges', 'Understanding of software development best practices and workflows', 'Ability to work within a team using Agile and Git', 'Continuous learning of new tools, frameworks, and architectures'].map((point) => (
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
        careerPathsTitle="Career Paths in Software Engineering"
        careerPathsSubtitle="After completing these courses, you can pursue a range of roles, from entry-level to specialist positions."
        careerPaths={careerPaths}
        careerPathsBrowseHref="/career-roadmaps/software-engineer"
        careerPathsBrowseLabel="Explore Software Engineer Career Roadmap"
        relatedGuides={relatedGuides}
        faqs={faqs}
        ctaHeading="Ready to Start Your Software Engineering Journey?"
        ctaBody="The key is not to jump between courses. Pick one path, build consistently, and apply what you learn through real projects. That is how beginners become software engineers."
        ctaPrimaryLabel="Explore Software Engineer Roadmap"
        ctaPrimaryHref="/career-roadmaps/software-engineer"
        ctaSecondaryLabel="All Free Courses with Certificates"
        ctaSecondaryHref="/free-courses-with-certificates"
      />
    </>
  );
}
