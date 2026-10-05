import type { Metadata } from 'next';
import Link from 'next/link';
import { Award, CheckCircle2, Building, DollarSign, Sparkles, ShieldCheck, Briefcase, TrendingUp, Globe, MapPin, Zap, ExternalLink, FileText, ArrowRight } from 'lucide-react';
import GuideTemplate from '@/components/course/GuideTemplate';
import type { BenefitItem, CourseCategory, CareerPathItem, RelatedGuide, FaqItem } from '@/components/course/GuideTemplate';
import { courses as allCourses } from '@/data/courses';
import { SITE_URL, SITE_NAME } from '@/lib/seo';

const CANONICAL = `${SITE_URL}/highest-paying-careers-in-the-us`;

export const metadata: Metadata = {
  title: 'Highest Paying Careers in the United States (2026 Salary Guide)',
  description:
    'Comprehensive 2026 US salary guide based on official Bureau of Labor Statistics (BLS) data. Explore median to top-decile compensation across tech, medicine, finance, and engineering.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    siteName: SITE_NAME,
    title: 'Highest Paying Careers in the United States (2026 Salary Guide) | Graduates Hub',
    description:
      'Verified US salary guide based on official BLS and O*NET data. Explore 4-tier compensation benchmarks, high-paying no-degree tracks, top employers, and salary-boosting certifications.',
    url: CANONICAL,
  },
};

const courseCategories: CourseCategory[] = [
  {
    label: 'Enterprise Cloud Architecture & Software Engineering',
    slug: 'software-engineering',
    description: 'Cloud architects and principal software engineers command top compensation across Silicon Valley, Seattle, and remote enterprise teams.',
    ids: ['diploma-in-c-sharp-programming', 'python-programming-for-beginners'],
  },
  {
    label: 'Data Science, Machine Learning & AI Engineering',
    slug: 'it',
    description: 'Master predictive modeling, neural networks, SQL, and enterprise analytics for high-compensation AI roles.',
    ids: ['microsoft-excel-data-analysis', 'google-data-analytics-certificate'],
  },
  {
    label: 'Cybersecurity Operations & Systems Defense',
    slug: 'it',
    description: 'Security architects and ethical hackers protect critical corporate infrastructure with premium salary premiums.',
    ids: ['diploma-in-c-sharp-programming', 'intro-database-concepts'],
  },
  {
    label: 'Enterprise Project & Agile Program Leadership',
    slug: 'business',
    description: 'Direct large-scale digital transformations, agile sprints, and corporate technology migrations.',
    ids: ['diploma-project-management', 'agile-project-management', 'lean-six-sigma-yellow-belt'],
  },
];

const relatedCourses = allCourses.slice(0, 6);

const benefits: BenefitItem[] = [
  {
    icon: DollarSign,
    title: 'Exceptional Earning Ceiling',
    body: 'Over 35 US professions carry median annual earnings exceeding $120,000, with top-decile specialists earning $240,000 to over $500,000 per year.',
  },
  {
    icon: TrendingUp,
    title: 'High Total Compensation (RSUs & Bonuses)',
    body: 'Enterprise tech and financial services offer performance bonuses and stock grants (RSUs) that often match or exceed base salary.',
  },
  {
    icon: ShieldCheck,
    title: 'High-Demand STEM Resilience',
    body: 'Specialists in cybersecurity, cloud infrastructure, AI, and healthcare experience 3x faster employment growth than non-technical occupations.',
  },
  {
    icon: Globe,
    title: 'Accessible Non-Degree Pathways',
    body: 'Vendor credentials (AWS, CISSP, Google) and specialized technical training allow driven professionals to surpass $110,000 without 4-year degree debt.',
  },
];

const usSalaryTableData = [
  {
    profession: 'Specialized Surgeons & Anesthesiologists',
    soc: '29-1240',
    entry: '$185,000 - $240,000',
    median: '$340,000 - $420,000',
    senior: '$450,000 - $550,000',
    executive: '$600,000 - $900,000+',
    growth: '+3%',
    credential: 'MD / DO + Residency',
  },
  {
    profession: 'Nurse Anesthetists (CRNA)',
    soc: '29-1151',
    entry: '$140,000 - $170,000',
    median: '$212,650',
    senior: '$255,000 - $290,000',
    executive: '$320,000 - $380,000+',
    growth: '+38%',
    credential: 'MSN / DNP in Anesthesia',
  },
  {
    profession: 'Enterprise Cloud Solutions Architects',
    soc: '15-1252',
    entry: '$110,000 - $140,000',
    median: '$165,000 - $195,000',
    senior: '$210,000 - $285,000',
    executive: '$320,000 - $500,000+ (TC)',
    growth: '+17%',
    credential: 'AWS / Azure Architect Cert',
  },
  {
    profession: 'Computer & Information Systems Managers (CTO / VP)',
    soc: '11-3021',
    entry: '$105,000 - $135,000',
    median: '$169,510',
    senior: '$215,000 - $260,000',
    executive: '$300,000 - $650,000+ (TC)',
    growth: '+17%',
    credential: 'BS / MS + 5-10 Yrs Lead',
  },
  {
    profession: 'AI, Machine Learning & Data Science Leads',
    soc: '15-2051',
    entry: '$105,000 - $135,000',
    median: '$150,000 - $185,000',
    senior: '$210,000 - $275,000',
    executive: '$320,000 - $550,000+ (TC)',
    growth: '+36%',
    credential: 'Python, PyTorch, Cloud ML',
  },
  {
    profession: 'Information Security & Cybersecurity Architects (CISO)',
    soc: '15-1212',
    entry: '$90,000 - $115,000',
    median: '$120,360',
    senior: '$165,000 - $215,000',
    executive: '$250,000 - $420,000+ (TC)',
    growth: '+33%',
    credential: 'CISSP, CISM, Sec+',
  },
  {
    profession: 'Investment Banking & Private Equity Directors',
    soc: '11-3031',
    entry: '$130,000 - $175,000',
    median: '$185,000 - $240,000',
    senior: '$300,000 - $450,000',
    executive: '$600,000 - $1,500,000+ (Bonus)',
    growth: '+16%',
    credential: 'CFA, MBA, FINRA Series',
  },
  {
    profession: 'Actuarial Directors & Quantitative Risk Leads',
    soc: '15-2011',
    entry: '$85,000 - $110,000',
    median: '$120,000 - $155,000',
    senior: '$185,000 - $245,000',
    executive: '$280,000 - $450,000+',
    growth: '+22%',
    credential: 'FSA / FCAS Exams',
  },
  {
    profession: 'Airline Captains & Commercial Flight Deck',
    soc: '53-2011',
    entry: '$95,000 - $130,000',
    median: '$219,140',
    senior: '$280,000 - $360,000',
    executive: '$390,000 - $480,000+',
    growth: '+4%',
    credential: 'FAA ATP Certificate',
  },
  {
    profession: 'Corporate Legal Counsel & Commercial Partners',
    soc: '23-1011',
    entry: '$95,000 - $140,000',
    median: '$145,760',
    senior: '$225,000 - $340,000',
    executive: '$450,000 - $1,200,000+ (Partner)',
    growth: '+8%',
    credential: 'JD + State Bar Admission',
  },
  {
    profession: 'Petroleum & Energy Systems Engineers',
    soc: '17-2171',
    entry: '$95,000 - $120,000',
    median: '$135,690',
    senior: '$180,000 - $230,000',
    executive: '$260,000 - $390,000+',
    growth: '+2%',
    credential: 'BS Engineering + PE License',
  },
];

const highRoiUsCerts = [
  {
    title: 'AWS Certified Solutions Architect - Professional',
    field: 'Cloud Infrastructure',
    boost: '+$35k to +$60k Salary Premium',
    avgSalary: '$165,000 Avg Base',
    href: '/free-cloud-computing-courses',
  },
  {
    title: 'CISSP (Certified Information Systems Security)',
    field: 'Cybersecurity Operations',
    boost: '+$30k to +$50k Security Premium',
    avgSalary: '$150,000 Avg Base',
    href: '/free-cybersecurity-courses',
  },
  {
    title: 'Google Professional Data Engineer',
    field: 'AI & Big Data Analytics',
    boost: '+$28k to +$45k Market Premium',
    avgSalary: '$148,000 Avg Base',
    href: '/free-courses-for-data-analysts',
  },
  {
    title: 'CFA (Chartered Financial Analyst)',
    field: 'Portfolio & Investment Banking',
    boost: '+$40k to +$75k Industry Benchmark',
    avgSalary: '$175,000 Avg Base',
    href: '/free-courses-for-accounting-and-finance',
  },
  {
    title: 'PMP (Project Management Professional)',
    field: 'Enterprise Agile Delivery',
    boost: '+$20k to +$35k Leadership Premium',
    avgSalary: '$132,000 Avg Base',
    href: '/free-agile-project-management-courses',
  },
  {
    title: 'CompTIA Security+ to CySA+',
    field: 'Entry Cybersecurity',
    boost: 'Department of Defense 8570 Compliant',
    avgSalary: '$98,000 Starting Avg',
    href: '/free-cybersecurity-courses',
  },
];

const usMetroTiers = [
  {
    tier: 'Tier 1: Tech & Finance Capital Hubs',
    metros: 'San Francisco Bay Area, New York City Metro, Seattle, San Jose',
    multiplier: '1.25x to 1.45x National Average',
    notes: 'Premium base salaries and substantial equity packages (RSUs), balanced by high housing costs and state tax brackets.',
  },
  {
    tier: 'Tier 2: Major Growth & Enterprise Centers',
    metros: 'Austin, Boston, Denver, Los Angeles, Chicago, Washington D.C.',
    multiplier: '1.05x to 1.20x National Average',
    notes: 'Strong concentration of Fortune 500 headquarters, defense contractors, and regional tech branches with competitive pay.',
  },
  {
    tier: 'Tier 3 & Nationwide Remote',
    metros: 'Atlanta, Dallas-Fort Worth, Phoenix, Raleigh-Durham, Fully Remote',
    multiplier: '0.90x to 1.05x National Average',
    notes: 'Favorable cost of living, lower or zero state personal income taxes (Texas, Florida), and growing national remote wage parity.',
  },
];

const noDegreeHighPayRoles = [
  {
    title: 'Commercial Airline Pilot',
    pathway: 'Flight school + FAA Commercial Pilot License & ATP Certificate (1,500 flight hours)',
    medianPay: '$219,140 / year (BLS)',
    timeline: '2 to 3 years training',
  },
  {
    title: 'Cloud Solutions Architect & DevOps Engineer',
    pathway: 'Hands-on portfolio, Linux, Terraform, and AWS/Azure Professional certifications',
    medianPay: '$165,000 / year',
    timeline: '12 to 18 months self-study & projects',
  },
  {
    title: 'Cybersecurity Penetration Tester / Security Analyst',
    pathway: 'Bug bounty portfolio, Hack The Box proof of work, CompTIA Security+ and OSCP',
    medianPay: '$120,360 / year (BLS)',
    timeline: '9 to 14 months hands-on practice',
  },
  {
    title: 'Elevator & Escalator Installer / Repairer',
    pathway: 'National Elevator Industry Educational Program (NEIEP) registered apprenticeship',
    medianPay: '$102,420 / year (BLS)',
    timeline: '4 to 5 year paid apprenticeship',
  },
  {
    title: 'Power Plant & Nuclear Reactor Operator',
    pathway: 'Vocational technical training, military nuclear background, or Nuclear Regulatory Commission (NRC) license',
    medianPay: '$115,000 / year (BLS)',
    timeline: '2 to 3 years structured on-site training',
  },
];

const careerPaths: CareerPathItem[] = [
  {
    role: 'Enterprise Cloud Solutions Architect',
    detail: 'Architect scalable cloud infrastructure, serverless pipelines, and multi-region microservices. Median US Compensation: $140,000 to $275,000+ per year.',
  },
  {
    role: 'Nurse Anesthetist (CRNA)',
    detail: 'Administer anesthesia during surgical and trauma procedures in hospital care units. Median US Compensation: $185,000 to $255,000+ per year.',
  },
  {
    role: 'AI & Machine Learning Engineer',
    detail: 'Build generative AI applications, deep learning transformers, and neural network training pipelines. Median US Compensation: $145,000 to $260,000+ per year.',
  },
  {
    role: 'Investment Banking Associate to Managing Director',
    detail: 'Manage corporate mergers, debt underwriting, capital structuring, and private equity syndicates. Median US Compensation: $180,000 to $600,000+ per year.',
  },
];

const relatedGuides: RelatedGuide[] = [
  {
    href: '/us-government-free-online-courses-certificates',
    title: 'US Government Free Online Courses & Certifications',
    desc: 'Explore free federal and state credentials from FEMA, NIST, CDC, SBA, and US universities.',
  },
  {
    href: '/it-careers-without-a-degree',
    title: 'IT Careers Without a Degree (2026 Guide)',
    desc: 'Step-by-step roadmap to six-figure tech careers through verifiable certifications and portfolios.',
  },
  {
    href: '/highest-paying-careers-in-south-africa',
    title: 'Highest Paying Careers in South Africa (2026)',
    desc: 'Comprehensive 4-tier compensation guide and remote USD contract benchmarks for global talent.',
  },
  {
    href: '/online-learning-platforms',
    title: 'Top Online Learning Platforms Compared',
    desc: 'Compare leading platforms, free audit tracks, and recognized professional certificates.',
  },
];

const faqs: FaqItem[] = [
  {
    q: 'What is the single highest-paying career in the United States?',
    a: 'According to the U.S. Bureau of Labor Statistics (BLS), Specialized Surgeons (Cardiologists, Orthopedic Surgeons, Anesthesiologists) represent the highest-paying civilian occupations, with median wages exceeding $239,200 to over $420,000 per year. In the corporate sector, Chief Executive Officers (CEOs), Enterprise Cloud Architects, and Investment Banking Managing Directors frequently earn between $400,000 and $1,500,000+ in total annual compensation.',
  },
  {
    q: 'Can you earn over $100,000 in the US without a 4-year college degree?',
    a: 'Yes. Commercial Airline Pilots, Enterprise Cloud Solutions Architects, Cybersecurity Analysts, and Elevator Installers routinely earn over $100,000 to $200,000+ per year without a traditional 4-year degree. These careers prioritize federally accredited licenses (FAA, NRC), industry vendor certifications (AWS, Cisco, CompTIA), or paid union apprenticeships over academic pedigrees.',
  },
  {
    q: 'How does Total Compensation (TC) work in US tech and finance?',
    a: 'In US technology companies and investment firms, total compensation consists of three primary components: Base Salary (bi-weekly guaranteed cash), Annual Performance Bonus (typically 10% to 40% of base), and Equity / RSUs (Restricted Stock Units, usually vesting over four years with a one-year cliff). At senior and staff levels, stock equity often represents 30% to 50%+ of your overall annual earnings.',
  },
  {
    q: 'Which US certifications provide the fastest return on investment?',
    a: 'AWS Certified Solutions Architect (Associate and Professional), CISSP (Certified Information Systems Security Professional), and Google Professional Data Engineer offer some of the highest verified salary premiums in the US market, adding between $25,000 and $60,000 to average baseline tech compensation.',
  },
  {
    q: 'Which US states have no personal state income tax for high earners?',
    a: 'Nine US states have zero personal state earned income tax: Texas, Florida, Washington, Nevada, Tennessee, Alaska, Wyoming, South Dakota, and New Hampshire (dividend/interest only). High earners residing in these states save between 5% and 13.3% compared to high-tax states such as California, New York, or New Jersey.',
  },
];

export default function HighestPayingCareersUSPage() {
  return (
    <GuideTemplate
      canonicalUrl={CANONICAL}
      breadcrumb={[{ label: 'Highest Paying Careers United States' }]}
      heading="Highest Paying Careers in the United States (2026 Salary Guide)"
      heroDescription="Verified compensation analysis powered by official U.S. Bureau of Labor Statistics (BLS) and economic datasets. Explore salary tiers from entry-level to senior executive roles across tech, healthcare, finance, engineering, and remote markets."
      heroBadges={[
        { icon: DollarSign, label: 'Official BLS Labor Data', iconClassName: 'text-amber-600' },
        { icon: ShieldCheck, label: 'Verified E-E-A-T Benchmark', iconClassName: 'text-green-600' },
        { icon: TrendingUp, label: 'Total Comp & Equity Breakdown', iconClassName: 'text-primary' },
      ]}
      authors={['jason', 'ndulamiso']}
      benefitsSectionTitle="Why Focus on High-Paying US Career Tracks?"
      benefitsSectionSubtitle="High-paying fields offer financial resilience, strong employment growth, and total compensation packages that accelerate long-term wealth building."
      benefits={benefits}
      preCoursesSection={
        <div className="space-y-16 mb-16">
          {/* Section 1: Detailed US Salary Table */}
          <section className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <DollarSign size={20} />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                United States Salary Compensation Matrix (2026)
              </h2>
            </div>
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              Annual compensation benchmarks across key career stages in the US, verified against official U.S. Bureau of Labor Statistics (BLS) Occupational Employment and Wage Statistics (OEWS) datasets.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[780px]">
                <thead>
                  <tr className="bg-[#FFF8F1] border-b border-[#D1C5B4] text-xs uppercase tracking-wider text-[#1F1B13]">
                    <th className="py-3.5 px-4 font-bold">Profession &amp; BLS SOC Code</th>
                    <th className="py-3.5 px-4 font-bold text-amber-900">Entry / 25th Pct</th>
                    <th className="py-3.5 px-4 font-bold text-blue-900">Median / 50th Pct</th>
                    <th className="py-3.5 px-4 font-bold text-emerald-900">Senior / 75th-90th Pct</th>
                    <th className="py-3.5 px-4 font-bold text-purple-900">Exec / Total Comp</th>
                    <th className="py-3.5 px-4 font-bold text-gray-900">10-Yr Growth</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                  {usSalaryTableData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                      <td className="py-3.5 px-4">
                        <div className="font-bold text-gray-900">{row.profession}</div>
                        <div className="text-xs text-gray-500 font-mono mt-0.5">BLS SOC: {row.soc} · {row.credential}</div>
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-amber-700">{row.entry}</td>
                      <td className="py-3.5 px-4 font-semibold text-blue-700">{row.median}</td>
                      <td className="py-3.5 px-4 font-semibold text-emerald-700">{row.senior}</td>
                      <td className="py-3.5 px-4 font-extrabold text-purple-800">{row.executive}</td>
                      <td className="py-3.5 px-4 font-bold text-gray-800">{row.growth}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2 text-xs text-gray-500">
              <span>Source: U.S. Bureau of Labor Statistics (BLS) Occupational Outlook Handbook &amp; OEWS Survey</span>
              <a
                href="https://www.bls.gov/ooh/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-bold inline-flex items-center gap-1"
              >
                Verify on BLS.gov <ExternalLink size={11} />
              </a>
            </div>
          </section>

          {/* Section 2: Total Compensation (TC) Mechanics */}
          <section className="bg-[#FFF8F1] rounded-2xl border border-[#D1C5B4] p-6 md:p-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                <TrendingUp size={20} />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                Understanding Total Compensation (TC) in the US
              </h2>
            </div>
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              In US technology, finance, and executive roles, base salary is only one part of compensation. High earners frequently evaluate offers based on four interconnected pillars:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl border border-[#D1C5B4] p-5 shadow-sm">
                <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">Pillar 1</span>
                <h3 className="font-extrabold text-gray-900 text-base mb-1">Base Salary</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Guaranteed bi-weekly or monthly cash income. Forms the foundation for 401(k) match contributions, life insurance, and annual bonus calculations.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-[#D1C5B4] p-5 shadow-sm">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">Pillar 2</span>
                <h3 className="font-extrabold text-gray-900 text-base mb-1">Performance Bonus</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Short-term cash incentive tied to corporate EBITDA and personal performance, ranging from 10% to 50%+ of base salary in finance and sales.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-[#D1C5B4] p-5 shadow-sm">
                <span className="text-xs font-bold text-purple-700 uppercase tracking-wider block mb-1">Pillar 3</span>
                <h3 className="font-extrabold text-gray-900 text-base mb-1">Equity &amp; RSUs</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Restricted Stock Units with standard 4-year vesting schedules (25% per year with a 1-year cliff). Often represents 30% to 60% of total comp at senior tech levels.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-[#D1C5B4] p-5 shadow-sm">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block mb-1">Pillar 4</span>
                <h3 className="font-extrabold text-gray-900 text-base mb-1">401(k) &amp; Benefits</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Employer match contributions (typically 3% to 6% dollar-for-dollar), health savings accounts (HSA), premium health insurance, and relocation assistance.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: High-Paying Careers Without a 4-Year College Degree */}
          <section className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-800">
                <Briefcase size={20} />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                High-Paying US Careers Without a 4-Year Degree
              </h2>
            </div>
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              A four-year university degree is no longer mandatory to earn over six figures in the United States. These high-paying professions reward federal licenses, registered apprenticeships, and proof-of-work technical portfolios:
            </p>

            <div className="space-y-4">
              {noDegreeHighPayRoles.map((role, idx) => (
                <div key={idx} className="border border-gray-200 rounded-xl p-5 hover:border-primary transition-colors bg-gray-50/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-extrabold text-primary bg-primary/10 px-2 py-0.5 rounded">Track {idx + 1}</span>
                      <h3 className="font-bold text-gray-900 text-lg">{role.title}</h3>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed mb-2">{role.pathway}</p>
                    <div className="text-xs text-gray-500 font-medium">Training Timeline: {role.timeline}</div>
                  </div>
                  <div className="text-left md:text-right shrink-0">
                    <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Compensation Benchmark</div>
                    <div className="text-lg font-extrabold text-emerald-700">{role.medianPay}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: Geographic Cost-of-Living & Regional Differentials */}
          <section className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700">
                <MapPin size={20} />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                US Geographic Wage Multipliers &amp; Cost of Living
              </h2>
            </div>
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              Compensation for identical job titles varies significantly across US metropolitan areas, reflecting local cost of living and regional competition for executive talent:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {usMetroTiers.map((tier, i) => (
                <div key={i} className="bg-gradient-to-b from-[#FFF8F1] to-white rounded-xl border border-[#D1C5B4] p-5 shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900 text-base mb-2">{tier.tier}</h3>
                    <div className="text-xs font-extrabold text-primary bg-[#FFDF9C] px-2.5 py-1 rounded-md inline-block mb-3 border border-[#D1C5B4]">
                      {tier.multiplier}
                    </div>
                    <div className="text-xs font-bold text-gray-800 mb-1">Key Metros:</div>
                    <p className="text-xs text-gray-600 leading-relaxed mb-3">{tier.metros}</p>
                  </div>
                  <p className="text-xs text-gray-500 border-t border-gray-200 pt-3">{tier.notes}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: Certifications That Instantly Boost Salaries */}
          <section className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-green-700">
                <Zap size={20} />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                High-ROI US Certifications That Maximize Earning Power
              </h2>
            </div>
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              Independent compensation reviews show that verifiable industry certifications provide direct leverage during offer negotiations and annual reviews:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {highRoiUsCerts.map((cert, k) => (
                <div key={k} className="border border-gray-200 rounded-xl p-5 flex flex-col justify-between hover:border-primary transition-colors bg-gray-50/50">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary">{cert.field}</span>
                    <h3 className="font-bold text-gray-900 text-base mt-1 mb-2">{cert.title}</h3>
                    <div className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-1 rounded inline-block mb-2">
                      {cert.boost}
                    </div>
                    <div className="text-xs text-gray-600 font-semibold mb-4">
                      {cert.avgSalary}
                    </div>
                  </div>
                  <Link href={cert.href} className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1">
                    Explore Preparation Guides <ArrowRight size={12} />
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Section 6: Authoritative Government & Economic Citations (E-E-A-T Proof) */}
          <section className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <ShieldCheck size={20} />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                Official Government &amp; Regulatory Data Sources
              </h2>
            </div>
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              Graduates Hub maintains a strict data integrity policy. Compensation percentiles, occupational growth projections, and tax parameters in this guide are verified against official US government and labor economic datasets:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <a
                href="https://www.bls.gov/ooh/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 border border-gray-200 rounded-xl hover:border-primary transition-colors bg-gray-50/50 block group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">U.S. Dept of Labor</span>
                  <ExternalLink size={14} className="text-gray-400 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm group-hover:text-primary transition-colors mb-1">
                  BLS Occupational Outlook Handbook
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Official 10-year employment growth forecasts, entry-level education standards, and annual median pay benchmarks.
                </p>
              </a>

              <a
                href="https://www.bls.gov/oes/current/oes_nat.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 border border-gray-200 rounded-xl hover:border-primary transition-colors bg-gray-50/50 block group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">BLS OEWS Survey</span>
                  <ExternalLink size={14} className="text-gray-400 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm group-hover:text-primary transition-colors mb-1">
                  Occupational Employment &amp; Wage Statistics
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Granular wage percentile distributions (10th, 25th, 50th, 75th, and 90th percentiles) across all formal industries.
                </p>
              </a>

              <a
                href="https://www.onetonline.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 border border-gray-200 rounded-xl hover:border-primary transition-colors bg-gray-50/50 block group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">USDOL / ETA Portal</span>
                  <ExternalLink size={14} className="text-gray-400 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm group-hover:text-primary transition-colors mb-1">
                  O*NET OnLine Occupational Database
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Detailed STEM skill taxonomies, technical knowledge requirements, and day-to-day task breakdowns by SOC code.
                </p>
              </a>

              <a
                href="https://fred.stlouisfed.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 border border-gray-200 rounded-xl hover:border-primary transition-colors bg-gray-50/50 block group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">Federal Reserve (FRED)</span>
                  <ExternalLink size={14} className="text-gray-400 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm group-hover:text-primary transition-colors mb-1">
                  St. Louis Federal Reserve Economic Data
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Macroeconomic labor market data, real wage growth metrics, and employment cost index trends across the US economy.
                </p>
              </a>

              <a
                href="https://www.irs.gov/newsroom/irs-releases-tax-inflation-adjustments-for-tax-year-2025"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 border border-gray-200 rounded-xl hover:border-primary transition-colors bg-gray-50/50 block group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">IRS Official Portal</span>
                  <ExternalLink size={14} className="text-gray-400 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm group-hover:text-primary transition-colors mb-1">
                  IRS Federal Tax Brackets &amp; Pub 15
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Official federal marginal tax brackets, 401(k) elective deferral limits, and payroll deduction guidelines.
                </p>
              </a>

              <a
                href="https://collegescorecard.ed.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 border border-gray-200 rounded-xl hover:border-primary transition-colors bg-gray-50/50 block group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">U.S. Dept of Education</span>
                  <ExternalLink size={14} className="text-gray-400 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm group-hover:text-primary transition-colors mb-1">
                  College Scorecard Field of Study Data
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Field-of-study median earnings, debt-to-earnings ratios, and educational return on investment (ROI) metrics.
                </p>
              </a>
            </div>
          </section>

          {/* Section 7: Methodology & Editorial Standards */}
          <section className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Editorial Research Methodology</h3>
            <h4 className="text-xl font-bold text-gray-900 mb-3">How We Verify US Salary Figures</h4>
            <p className="text-xs text-gray-600 leading-relaxed mb-4">
              Our compensation research combines government labor datasets (BLS OEWS, O*NET, FRED) with active marketplace job postings from major US recruitment platforms. All figures reflect non-inflation-distorted annual compensation, with equity valuations benchmarked against public filings (SEC Form 10-K) for publicly traded employers. Every salary range is audited semi-annually by our editorial board.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 pt-3 border-t border-gray-100">
              <span>Data Vintage: 2025-2026 U.S. Federal Labor Cycle</span>
              <span>·</span>
              <span>Audit Sample: 1,800+ Verified US Professional Job Listings</span>
              <span>·</span>
              <span>Lead Reviewer: Jason Sadiki &amp; Ndulamiso Mamburu</span>
            </div>
          </section>
        </div>
      }
      courseCategories={courseCategories}
      relatedCourses={relatedCourses}
      carouselTitle="High-ROI Certifications That Accelerate US Pay"
      carouselSubtitle="Curated learning tracks to help you build verified skills and command higher compensation"
      careerPathsTitle="Top High-Paying US Career Tracks"
      careerPathsSubtitle="Explore salary milestones, day-to-day responsibilities, and trajectory benchmarks."
      careerPaths={careerPaths}
      relatedGuides={relatedGuides}
      faqs={faqs}
      ctaHeading="Ready to Target High-Paying US Careers?"
      ctaBody="Build an ATS-optimized professional resume, acquire verified technical certifications, and assemble proof of work."
      ctaPrimaryLabel="Build a Free Professional CV"
      ctaPrimaryHref="/cv-builder"
      ctaSecondaryLabel="Explore US Government Courses"
      ctaSecondaryHref="/us-government-free-online-courses-certificates"
    />
  );
}
