import type { Metadata } from 'next';
import Link from 'next/link';
import { Award, Clock, CheckCircle2, Building, DollarSign, Target, Sparkles, ShieldCheck, Laptop, Cpu, Terminal, Code, Server, Database, Layers, ArrowRight, TrendingUp } from 'lucide-react';
import GuideTemplate from '@/components/course/GuideTemplate';
import type { BenefitItem, CourseCategory, CareerPathItem, RelatedGuide, FaqItem } from '@/components/course/GuideTemplate';
import { courses as allCourses } from '@/data/courses';
import { SITE_URL, SITE_NAME } from '@/lib/seo';

const CANONICAL = `${SITE_URL}/it-careers-without-a-degree`;

export const metadata: Metadata = {
  title: 'IT Careers Without a Degree (2026 Step-by-Step Guide)',
  description:
    'Learn how to launch high-paying IT careers without a university degree. Discover non-degree IT paths, vendor certifications, proof-of-work portfolio tasks, and self-taught entry routes.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    siteName: SITE_NAME,
    title: 'IT Careers Without a Degree (2026 Step-by-Step Guide) | Graduates Hub',
    description:
      'Break into IT without a computer science degree. Step-by-step roadmap for IT Support, Web Development, Cybersecurity, Cloud Infrastructure, and Data Analytics.',
    url: CANONICAL,
  },
};

const courseCategories: CourseCategory[] = [
  {
    label: 'IT Support & Systems Administration (No Degree Path)',
    slug: 'it',
    description: 'The fastest entry-level route into corporate IT infrastructure without requiring a university degree.',
    ids: ['computer-networking', 'diploma-in-it-management', 'google-it-support-certificate'],
  },
  {
    label: 'Web & Software Development (Portfolio Driven)',
    slug: 'software-engineering',
    description: 'Employers hire developers based on visible code repositories, GitHub projects, and technical assessment performance.',
    ids: ['diploma-in-c-sharp-programming', 'python-programming-for-beginners'],
  },
  {
    label: 'Cloud & Cybersecurity Fundamentals',
    slug: 'it',
    description: 'Build entry-level SOC analyst and Cloud support capabilities with vendor certifications (AWS, Google, Microsoft).',
    ids: ['google-cybersecurity-certificate', 'microsoft-azure-fundamentals'],
  },
];

const relatedCourses = allCourses.slice(0, 6);

const benefits: BenefitItem[] = [
  {
    icon: Laptop,
    title: 'Skills Over Credentials',
    body: 'The tech sector prioritizes practical ability, problem-solving, and verified certifications over traditional 3-year university degrees.',
  },
  {
    icon: ShieldCheck,
    title: 'Vendor Certifications Gold Standard',
    body: 'Certifications from Google, Microsoft, AWS, and CompTIA serve as direct proof of competency for hiring managers.',
  },
  {
    icon: Terminal,
    title: 'Proof-of-Work Portfolios',
    body: 'Completing hands-on projects (code repos, network labs, BI dashboards) gives candidates tangible evidence during technical interviews.',
  },
  {
    icon: DollarSign,
    title: 'Strong Entry-Level Salaries',
    body: 'Non-degree IT support specialists start at R15,000 to R25,000 per month, advancing to R45,000+ per month within 3 to 4 years.',
  },
];

const specMatrixData = [
  {
    specialization: 'IT Support & Helpdesk Specialist',
    cert: 'Google IT Support / CompTIA A+',
    timeline: '2 - 4 Months',
    salary: 'R180,000 - R320,000 / yr',
    skills: 'Hardware, Active Directory, M365, Troubleshooting',
  },
  {
    specialization: 'Frontend & Fullstack Web Developer',
    cert: 'FreeCodeCamp / Meta Frontend',
    timeline: '4 - 8 Months',
    salary: 'R220,000 - R420,000 / yr',
    skills: 'HTML/CSS, JavaScript, React, Git, REST APIs',
  },
  {
    specialization: 'Cybersecurity SOC Analyst (Tier 1)',
    cert: 'Google Cybersecurity / CompTIA Security+',
    timeline: '4 - 6 Months',
    salary: 'R250,000 - R480,000 / yr',
    skills: 'Linux, Wireshark, SIEM (Splunk), Incident Response',
  },
  {
    specialization: 'Cloud Support Specialist',
    cert: 'AWS Cloud Practitioner / Azure AZ-900',
    timeline: '3 - 5 Months',
    salary: 'R280,000 - R520,000 / yr',
    skills: 'AWS/Azure Tenants, Linux CLI, Virtual Machines, VPC',
  },
  {
    specialization: 'Data Analyst & BI Specialist',
    cert: 'Google Data Analytics / Microsoft Power BI',
    timeline: '3 - 6 Months',
    salary: 'R240,000 - R450,000 / yr',
    skills: 'SQL Queries, Excel, Power BI, Python, Data Cleaning',
  },
];

const portfolioBlueprints = [
  {
    title: 'Fullstack Web Application Repo',
    role: 'Software & Frontend Developers',
    description: 'Build and deploy a responsive web app using React, Node.js, and PostgreSQL. Include a public GitHub link, README setup guide, and live demo link.',
    icon: Code,
  },
  {
    title: 'Active Directory & M365 Virtual Lab',
    role: 'IT Support & Systems Administrators',
    description: 'Set up a Windows Server VM with Active Directory domain controllers, user group policies, and Microsoft 365 tenant provisioning.',
    icon: Server,
  },
  {
    title: 'Interactive Power BI Dashboard',
    role: 'Data Analysts & BI Specialists',
    description: 'Clean a raw public dataset (Kaggle/World Bank) with SQL and publish an interactive Power BI dashboard highlighting key KPIs.',
    icon: Database,
  },
  {
    title: 'SIEM Log Analysis & CTF Writeup',
    role: 'Cybersecurity Operations Analysts',
    description: 'Configure a Wazuh or Splunk SIEM home lab, capture network traffic with Wireshark, and publish a detailed incident response writeup on Medium or GitHub.',
    icon: ShieldCheck,
  },
];

const timelineProgression = [
  {
    stage: 'Year 1: Entry-Level Specialist',
    salary: 'R180,000 - R320,000 / year (R15,000 - R26,000 / month)',
    focus: 'Focus on helpdesk tickets, junior developer tasks, SOC alert monitoring, and mastering workplace IT procedures.',
  },
  {
    stage: 'Year 3: Mid-Level Engineer',
    salary: 'R450,000 - R750,000 / year (R37,000 - R62,000 / month)',
    focus: 'Take ownership of infrastructure projects, build complex software features, manage cloud migrations, and mentor junior team members.',
  },
  {
    stage: 'Year 5+: Senior Architect / Lead Engineer',
    salary: 'R800,000 - R1,400,000+ / year (R66,000 - R115,000+ / month)',
    focus: 'Lead technical strategy, enterprise architecture, and team management. At this stage, degree status is completely irrelevant to employers.',
  },
];

const careerPaths: CareerPathItem[] = [
  {
    role: 'IT Support & Helpdesk Technician',
    detail: 'Maintain workplace hardware, diagnose software faults, and administer user accounts. Average SA Salary: R180,000 to R320,000 / year.',
  },
  {
    role: 'Frontend & Web Developer',
    detail: 'Build responsive websites and web application interfaces using HTML, CSS, JavaScript, and React. Average SA Salary: R220,000 to R420,000 / year.',
  },
  {
    role: 'Cybersecurity SOC Analyst (Tier 1)',
    detail: 'Monitor security event logs, analyze network traffic, and respond to security alerts. Average SA Salary: R250,000 to R480,000 / year.',
  },
  {
    role: 'Cloud Support Engineer',
    detail: 'Assist with cloud tenant provisioning, virtual machine configuration, and cloud security policies. Average SA Salary: R280,000 to R520,000 / year.',
  },
];

const relatedGuides: RelatedGuide[] = [
  {
    href: '/best-careers-in-south-africa',
    title: 'Best Careers in South Africa (2026 Guide)',
    desc: 'Explore top in-demand growth sectors, starting salary benchmarks, and free online diplomas.',
  },
  {
    href: '/highest-paying-careers-in-south-africa',
    title: 'Highest Paying Careers in South Africa',
    desc: 'Explore salary compensation bands from entry-level to senior executive roles across SA.',
  },
  {
    href: '/portfolio-tasks',
    title: 'Proof-of-Work Portfolio Tasks Hub',
    desc: 'Build real-world developer, marketing, and data projects to present to IT recruiters.',
  },
  {
    href: '/free-it-courses-with-certificates',
    title: 'Free IT Support Courses with Certificates',
    desc: 'Catalogue of free IT training courses with downloadable digital certificates of completion.',
  },
];

const faqs: FaqItem[] = [
  {
    q: 'Can I get an IT job in South Africa without a computer science degree?',
    a: 'Yes. Thousands of IT professionals in South Africa started their careers without a university degree. IT Support, Web Development, Cloud Support, and Cybersecurity Tier 1 roles regularly hire candidates with industry certifications (CompTIA A+, Google IT Support, AWS Cloud Practitioner) and strong practical skills.',
  },
  {
    q: 'What are the best IT certifications to take without a degree?',
    a: 'Top entry-level certifications include: Google IT Support Professional Certificate, CompTIA A+ / Network+, AWS Certified Cloud Practitioner, Microsoft Certified Azure Fundamentals (AZ-900), and Google Cybersecurity Professional Certificate.',
  },
  {
    q: 'How do I prove my IT skills to employers without formal qualifications?',
    a: 'Build a Proof-of-Work portfolio: publish code repositories on GitHub, build a personal website, document home network/lab configurations, earn verifiable digital certificates, and complete real-world portfolio challenges.',
  },
  {
    q: 'Where can I find entry-level IT jobs that do not require a degree?',
    a: 'Search on LinkedIn Jobs, Pnet, Careers24, and OfferZen (for developers) using keywords such as "Junior IT Support", "Helpdesk Analyst", "Junior Web Developer", "Tier 1 SOC Analyst", and "Graduate / Trainee IT Technician". Target Managed Service Providers (MSPs) and tech startups.',
  },
];

export default function ITCareersWithoutDegreePage() {
  return (
    <GuideTemplate
      canonicalUrl={CANONICAL}
      breadcrumb={[{ label: 'IT Careers Without a Degree' }]}
      heading="IT Careers Without a Degree (2026 Step-by-Step Guide)"
      heroDescription="Want to break into technology without a computer science degree? Learn how to launch high-paying IT careers using free online certification courses, proof-of-work portfolio tasks, and self-taught entry routes."
      heroBadges={[
        { icon: Laptop, label: 'Zero Degree Required', iconClassName: 'text-amber-600' },
        { icon: ShieldCheck, label: 'Vendor Certifications', iconClassName: 'text-primary' },
        { icon: CheckCircle2, label: 'Practical Portfolio Paths', iconClassName: 'text-green-600' },
      ]}
      authors={['jason', 'ndulamiso']}
      benefitsSectionTitle="Why Tech Is the Best Field for Non-Degree Holders"
      benefitsSectionSubtitle="In technology, demonstrated practical ability and problem-solving skills matter far more to hiring managers than paper qualifications."
      benefits={benefits}
      preCoursesSection={
        <div className="space-y-16 mb-16">
          {/* Section 1: Non-Degree Tech Specializations Matrix */}
          <section className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <Laptop size={20} />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                Non-Degree Tech Specializations Matrix
              </h2>
            </div>
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              Compare entry-level IT roles accessible without a computer science degree, including learning duration, required certifications, and salary expectations.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-[#FFF8F1] border-b border-[#D1C5B4] text-xs uppercase tracking-wider text-[#1F1B13]">
                    <th className="py-3.5 px-4 font-bold">Specialization</th>
                    <th className="py-3.5 px-4 font-bold text-amber-900">Entry Certification</th>
                    <th className="py-3.5 px-4 font-bold text-blue-900">Time to Job-Ready</th>
                    <th className="py-3.5 px-4 font-bold text-emerald-900">Avg Starting Salary</th>
                    <th className="py-3.5 px-4 font-bold text-purple-900">Key Skills</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                  {specMatrixData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-gray-900">{row.specialization}</td>
                      <td className="py-3.5 px-4 font-semibold text-amber-800">{row.cert}</td>
                      <td className="py-3.5 px-4 font-semibold text-blue-800">{row.timeline}</td>
                      <td className="py-3.5 px-4 font-semibold text-emerald-800">{row.salary}</td>
                      <td className="py-3.5 px-4 text-xs text-gray-600">{row.skills}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: Proof-of-Work Portfolio Blueprints */}
          <section className="bg-[#FFF8F1] rounded-2xl border border-[#D1C5B4] p-6 md:p-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                <Terminal size={20} />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                Proof-of-Work Portfolio Blueprints
              </h2>
            </div>
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              Without a degree, your portfolio is your primary resume. Build these specific real-world projects to demonstrate practical capability to tech recruiters.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {portfolioBlueprints.map((project, i) => (
                <div key={i} className="bg-white rounded-xl border border-[#D1C5B4] p-5 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <project.icon size={18} className="text-primary shrink-0" />
                      <span className="text-xs font-bold text-primary uppercase tracking-wider">{project.role}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{project.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed mb-4">{project.description}</p>
                  </div>
                  <Link href="/portfolio-tasks" className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1">
                    Explore Portfolio Tasks Hub →
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Official Certification Authorities */}
          <section className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <ShieldCheck size={20} />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                Official Certification &amp; Testing Authorities
              </h2>
            </div>
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              Industry certification roadmaps and vendor training credentials featured in this guide link directly to official global testing authorities:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <a
                href="https://grow.google/certificates/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-gray-200 rounded-xl hover:border-primary transition-colors bg-gray-50/50 block group"
              >
                <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">Google Official</span>
                <h3 className="font-bold text-gray-900 text-sm group-hover:text-primary transition-colors mb-1">Google Career Certs</h3>
                <p className="text-xs text-gray-500">IT Support, Cybersecurity, Data Analytics, and UX Design professional certificates.</p>
              </a>

              <a
                href="https://learn.microsoft.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-gray-200 rounded-xl hover:border-primary transition-colors bg-gray-50/50 block group"
              >
                <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">Microsoft Official</span>
                <h3 className="font-bold text-gray-900 text-sm group-hover:text-primary transition-colors mb-1">Microsoft Learn Portal</h3>
                <p className="text-xs text-gray-500">Azure Cloud Fundamentals (AZ-900), Power BI, and Microsoft 365 role paths.</p>
              </a>

              <a
                href="https://aws.amazon.com/certification/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-gray-200 rounded-xl hover:border-primary transition-colors bg-gray-50/50 block group"
              >
                <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">AWS Official</span>
                <h3 className="font-bold text-gray-900 text-sm group-hover:text-primary transition-colors mb-1">AWS Cloud Certification</h3>
                <p className="text-xs text-gray-500">AWS Certified Cloud Practitioner and Solutions Architect testing routes.</p>
              </a>

              <a
                href="https://www.comptia.org"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-gray-200 rounded-xl hover:border-primary transition-colors bg-gray-50/50 block group"
              >
                <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">CompTIA Official</span>
                <h3 className="font-bold text-gray-900 text-sm group-hover:text-primary transition-colors mb-1">CompTIA Infrastructure</h3>
                <p className="text-xs text-gray-500">Industry standard CompTIA A+, Network+, and Security+ certification standards.</p>
              </a>
            </div>
          </section>

          {/* Section 4 & 5: Bypassing ATS Filters & Career Timeline */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* ATS Bypassing Strategy */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-primary" size={24} />
                <h3 className="text-xl font-bold text-gray-900">How to Bypass "Degree Required" Filters</h3>
              </div>
              <div className="space-y-4 text-xs text-gray-600">
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">1. Structure Your CV for Skills First</h4>
                  <p className="leading-relaxed">
                    Place a prominent <strong>Technical Skills Grid</strong> and <strong>Certifications Section</strong> at the top of your CV above education. Recruiters scan the top third of your resume in 6 seconds.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">2. Target MSPs and Tech Startups</h4>
                  <p className="leading-relaxed">
                    Managed Service Providers (MSPs) and high-growth startups value practical troubleshooting and agility over rigid corporate HR degree requirements.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">3. Direct LinkedIn Outreach</h4>
                  <p className="leading-relaxed">
                    Reach out directly to Engineering Leads or IT Support Managers on LinkedIn with a concise note: <em>"I built a virtual M365 test lab and earned my AWS Cloud Practitioner cert - I would love to contribute to your IT team."</em>
                  </p>
                </div>
              </div>
            </div>

            {/* Salary & Progression Timeline */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="text-amber-400" size={24} />
                <h3 className="text-xl font-bold">5-Year Salary &amp; Career Progression</h3>
              </div>
              <div className="space-y-4">
                {timelineProgression.map((item, idx) => (
                  <div key={idx} className="border-b border-slate-700 pb-3 last:border-0 last:pb-0">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-sm text-white">{item.stage}</span>
                    </div>
                    <div className="text-xs font-bold text-amber-400 mb-1">{item.salary}</div>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.focus}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      }
      courseCategories={courseCategories}
      relatedCourses={relatedCourses}
      carouselTitle="Free Certification Courses for Non-Degree IT Roles"
      carouselSubtitle="Start building job-ready IT skills today with free online courses and certificates"
      careerPathsTitle="Entry-Level Non-Degree IT Career Tracks"
      careerPathsSubtitle="Explore accessible tech roles, certification requirements, and starting salary ranges."
      careerPaths={careerPaths}
      relatedGuides={relatedGuides}
      faqs={faqs}
      ctaHeading="Ready to Launch Your IT Career Without a Degree?"
      ctaBody="Combine your certified IT skills with hands-on portfolio projects and an ATS-optimized CV."
      ctaPrimaryLabel="Explore Portfolio Tasks"
      ctaPrimaryHref="/portfolio-tasks"
      ctaSecondaryLabel="Build a Free Professional CV"
      ctaSecondaryHref="/cv-builder"
    />
  );
}
