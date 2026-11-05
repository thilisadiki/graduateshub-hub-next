import type { Metadata } from 'next';
import {
  Shield,
  Lock,
  Award,
  Clock,
  Users,
  Star,
  Server,
  CheckCircle2,
  Terminal,
  ExternalLink,
  Laptop,
  Compass,
  FileCheck,
  Building,
} from 'lucide-react';
import Link from 'next/link';
import GuideTemplate from '@/components/course/GuideTemplate';
import type { BenefitItem, CourseCategory, CareerPathItem, RelatedGuide, FaqItem } from '@/components/course/GuideTemplate';
import { courses as allCourses } from '@/data/courses';
import { SITE_URL, SITE_NAME, createGuideMetadata } from '@/lib/seo';

const CANONICAL = `${SITE_URL}/free-cybersecurity-courses`;

export const metadata: Metadata = createGuideMetadata({
  title: 'Best Free Cybersecurity Courses with Certificates (2026 Guide)',
  description:
    'Exhaustive guide to free certified cybersecurity courses from Cisco, Google, Microsoft, (ISC)², CISA, IBM, EC-Council, and SANS. Covers SOC defense, CISSP prep, SIEM, and ethical hacking.',
  canonicalUrl: CANONICAL,
});

const courseCategories: CourseCategory[] = [
  {
    label: 'Track 1: Foundational Cybersecurity & Threat Awareness',
    slug: 'cybersecurity',
    description: 'Master basic attack vectors, security hygiene, and core defensive principles with free verifiable badges from Cisco and SANS.',
    items: [
      {
        id: 'cisco-intro-cybersecurity',
        customContent: 'Offered through Cisco Networking Academy and Skills for All, this 6-hour introductory credential explores threat actors, malware vectors, data privacy, and defensive countermeasures. Learners receive an official, verifiable Cisco Credly digital badge upon passing the final assessment.',
      },
      {
        id: 'cisco-cybersecurity-essentials',
        customContent: 'A 30-hour technical dive into defensive controls, the CIA Triad, public-key cryptography, port filtering, and security compliance. Bridges the gap between introductory awareness and hands-on system administration defense.',
      },
      {
        id: 'sans-cyber-aces-online',
        customContent: 'Open-access instructional tutorials developed directly by SANS Institute faculty. Covers Linux and Windows operating system architectures, network protocol mechanics, and system administrator hardening techniques.',
      },
    ],
  },
  {
    label: 'Track 2: Industry Certifications & Global Governance',
    slug: 'cybersecurity',
    description: 'Prepare for globally recognized credentials including (ISC)² Certified in Cybersecurity, Microsoft SC-900, and CISSP.',
    items: [
      {
        id: 'isc2-certified-in-cybersecurity',
        customContent: 'Official self-paced training from (ISC)², creators of the gold-standard CISSP credential. Through their One Million Certified in Cybersecurity pledge, learners access complete training and an official exam voucher at zero cost.',
      },
      {
        id: 'microsoft-sc-900-fundamentals',
        customContent: 'Complete interactive modules covering Zero Trust security architecture, Microsoft Entra ID access controls, Microsoft Sentinel cloud SIEM, and Purview compliance across enterprise Microsoft environments.',
      },
      {
        id: 'diploma-in-cissp-2024',
        customContent: 'A comprehensive survey of the eight core domains of the CISSP Body of Knowledge: security governance, risk management, asset security, identity access management, and enterprise security operations.',
      },
    ],
  },
  {
    label: 'Track 3: Defensive Operations, SOC Triage & Incident Response',
    slug: 'cybersecurity',
    description: 'Hands-on instruction in security operations center monitoring, SIEM telemetry, packet analysis, and threat triage.',
    items: [
      {
        id: 'cisco-junior-cybersecurity-analyst',
        customContent: 'A comprehensive 120-hour learning pathway from Cisco preparing learners for entry-level SOC Analyst roles. Includes interactive Cisco Packet Tracer defensive labs, host-based firewall configurations, and real-world incident handling scenarios.',
      },
      {
        id: 'google-cybersecurity-certificate',
        customContent: 'Google 8-course professional certificate covering SIEM tools (Splunk, Chronicle), Linux command line, Python security scripting, and SQL log queries. Includes a 30% discount voucher for the CompTIA Security+ examination.',
      },
      {
        id: 'cisa-fedvte-cybersecurity-foundations',
        customContent: 'Technical cybersecurity training provided by the U.S. Cybersecurity and Infrastructure Security Agency (CISA) through FedVTE. Prepares learners for entry-level security analyst roles by covering network defense, risk mitigation, and threat hunting.',
      },
      {
        id: 'ibm-cybersecurity-fundamentals',
        customContent: 'An 8-hour credential exploring enterprise defense, public key encryption, malware behavior, and threat intelligence feeds. Learners earn a verified IBM Credly digital badge for LinkedIn.',
      },
    ],
  },
  {
    label: 'Track 4: Web Application Security, Ethical Hacking & Secure Coding',
    slug: 'software-engineering',
    description: 'Understand the offensive mindset, exploit mechanics, and proactive code-level security against the OWASP Top 10.',
    items: [
      {
        id: 'portswigger-web-security-academy',
        customContent: 'The undisputed global standard for free hands-on web application security labs by the creators of Burp Suite. Practice exploiting and remediating SQL injection, Cross-Site Scripting (XSS), SSRF, and authentication bypasses in real sandbox targets.',
      },
      {
        id: 'eccouncil-ethical-hacking-essentials',
        customContent: 'Introduces reconnaissance, port scanning, vulnerability discovery, and exploit mechanics taught by EC-Council, the credentialing body behind Certified Ethical Hacker (CEH). Includes an official certificate of completion.',
      },
      {
        id: 'eccouncil-network-defense-essentials',
        customContent: 'Offered on EC-Council CodeRed, Network Defense Essentials covers perimeter defense, stateful firewalls, demilitarized zones (DMZ), intrusion detection systems (IDS/IPS), and VPN configurations.',
      },
      {
        id: 'secure-software-design',
        customContent: 'Covers structural code security and practical mitigation of the OWASP Top 10 vulnerabilities. Learn input sanitization, password hashing algorithms, and resilient software architecture to prevent vulnerabilities before release.',
      },
    ],
  },
  {
    label: 'Track 5: Computer Networking, Protocols & Regulatory Resilience',
    slug: 'cybersecurity',
    description: 'Understand packet routing, network topology, and strict international compliance frameworks.',
    items: [
      {
        id: 'computer-networking',
        customContent: 'You cannot defend a network without understanding how data moves through it. Covers core internet protocols including TCP/IP addressing, subnet mask calculation, routers, switches, and the OSI stack. Essential preparation for configuring firewalls.',
      },
      {
        id: 'computer-networking-lan-osi',
        customContent: 'A focused certificate looking specifically at Local Area Network (LAN) structures and the OSI reference model to isolate network troubleshooting and traffic flow security.',
      },
      {
        id: 'fundamentals-of-dora',
        customContent: 'Examines the Digital Operational Resilience Act (DORA), the strict regulatory framework governing information security in financial institutions and their third-party supply chain partners worldwide.',
      },
    ],
  },
];

const benefits: BenefitItem[] = [
  {
    icon: Shield,
    title: 'Top Global Institutions',
    body: 'Learn from Cisco, Google, Microsoft, (ISC)², U.S. CISA, IBM, EC-Council, and SANS at zero cost.',
  },
  {
    icon: Award,
    title: 'Verifiable Digital Badges',
    body: 'Earn digital credentials on Credly, official vendor certificates, and accredited diplomas to validate your CV.',
  },
  {
    icon: Terminal,
    title: 'Hands-on SOC & Lab Skills',
    body: 'Gain practical experience with Splunk, Google Chronicle, Wireshark, Linux CLI, Python, and Burp Suite.',
  },
  {
    icon: Clock,
    title: '100% Self-Paced Learning',
    body: 'Complete courses on your own schedule alongside work, university studies, or family commitments.',
  },
  {
    icon: Server,
    title: 'Vendor-Neutral & Specialized',
    body: 'Combine broad architectural knowledge like CISSP and (ISC)² CC with vendor tools in Microsoft Azure and Cisco.',
  },
  {
    icon: Star,
    title: 'Curator-Reviewed Tracks',
    body: 'Every course has been audited for technical currency, employer recognition, and free accessibility in 2026.',
  },
];

const careerPaths: CareerPathItem[] = [
  { role: 'Security Operations Center (SOC) Analyst', category: 'Cybersecurity', href: '/career-roadmaps/cybersecurity-analyst' },
  { role: 'Cloud Security Administrator', category: 'IT & Infrastructure', href: '/career-roadmaps/cloud-support-devops' },
  { role: 'Junior Penetration Tester', category: 'Offensive Security', href: '/career-roadmaps/software-engineer' },
  { role: 'IT Risk & Compliance Officer', category: 'Risk & Governance', href: '/career-roadmaps/business-analyst' },
  { role: 'Network Security Specialist', category: 'IT & Infrastructure', href: '/career-roadmaps/it-support-specialist' },
];

const relatedGuides: RelatedGuide[] = [
  {
    title: 'Google Cybersecurity Certificate Guide (2026)',
    desc: 'Complete walkthrough of Google 8-module certificate, SIEM tools, and CompTIA Security+ discount vouchers.',
    href: '/google-cybersecurity-certificate-guide',
  },
  {
    title: 'Free US Government Online Courses (2026)',
    desc: 'Access verified training certificates from FEMA, CISA FedVTE, CDC, and the U.S. Small Business Administration.',
    href: '/us-government-free-online-courses-certificates',
  },
  {
    title: 'Free Courses for Software Developers (2026)',
    desc: 'Master programming languages, clean architecture, automated testing, and DevOps deployment pipelines.',
    href: '/free-courses-for-software-developers',
  },
  {
    title: 'Artificial Intelligence Training & Certificates (2026)',
    desc: 'Explore machine learning, prompt engineering, and generative AI security tracks with certificates.',
    href: '/artificial-intelligence-training',
  },
];

const faqs: FaqItem[] = [
  {
    q: 'Can I really get a cybersecurity job with free online courses?',
    a: 'Yes, entry-level candidates frequently break into cybersecurity using free training, provided they pair theoretical knowledge with demonstrable proof of work. Employers look for three components: foundational certificates from recognized bodies like Cisco, Google, or (ISC)², practical familiarity with industry tools like Splunk, Wireshark, and Linux, and a hands-on portfolio such as home lab write-ups or our AI-graded proof-of-work portfolio tasks.',
  },
  {
    q: 'How do I claim the free (ISC)² Certified in Cybersecurity (CC) exam voucher?',
    a: 'Visit the official (ISC)² One Million Certified in Cybersecurity pledge page (isc2.org/certifications/cc). Create a free (ISC)² Candidate profile, enroll in the free Certified in Cybersecurity online self-paced training course, and upon completion you will receive a promotion code covering 100% of the Pearson VUE exam registration fee.',
  },
  {
    q: 'How can I take the Google Cybersecurity Certificate for free?',
    a: 'You can audit every module of the Google Cybersecurity Professional Certificate on Coursera for free, giving you full access to video lectures and readings. To access graded assignments, labs, and receive the official shareable certificate, apply for Coursera Financial Aid by clicking the Financial Aid Available link on the course page and submitting a brief waiver application.',
  },
  {
    q: 'What is the recommended order to study these cybersecurity courses?',
    a: 'Start with Computer Networking and Cisco Introduction to Cybersecurity to build networking fluency. Next, progress to (ISC)² Certified in Cybersecurity and Microsoft SC-900 for core security and cloud concepts. Then, dive into hands-on defensive tools with Google Cybersecurity (SIEM and Linux) and Cisco Junior Analyst. Finally, practice application security with PortSwigger Web Security Academy and complete compliance training like DORA.',
  },
  {
    q: 'Do I need a university degree in computer science to work in cybersecurity?',
    a: 'No. The global cybersecurity field has one of the lowest degree requirements in technology. Employers prioritize demonstrated technical capability, problem-solving skills, and industry certifications over computer science degrees. Building an auditable home lab and earning credentials from Cisco, Microsoft, and (ISC)² signals real-world readiness.',
  },
  {
    q: 'Are these cybersecurity certificates recognized in South Africa?',
    a: 'Yes. South African corporate enterprises, banks, telecommunications operators, and government departments face severe cybersecurity talent shortages and strict regulatory compliance mandates under the Protection of Personal Information Act (POPIA) and the Cybercrimes Act of 2020. Credentials from Cisco, Google, Microsoft, and (ISC)² are widely respected across South African IT hiring teams.',
  },
];

const exploreCategories = [
  { label: 'Cybersecurity Analyst Roadmap', href: '/career-roadmaps/cybersecurity-analyst' },
  { label: 'IT Support Specialist', href: '/career-roadmaps/it-support-specialist' },
  { label: 'Cloud & DevOps Engineer', href: '/career-roadmaps/cloud-support-devops' },
  { label: 'Proof of Work Portfolio', href: '/portfolio-tasks' },
];

function CybersecurityDeepDiveSections() {
  return (
    <div className="space-y-16 mt-12 mb-16 text-gray-700">
      {/* Section 1: Institutional Comparison */}
      <section className="bg-white border border-[#D1C5B4] rounded-2xl p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            <Building size={22} />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Institutional Comparison: Which Free Credential Should You Choose?
            </h2>
            <p className="text-sm text-gray-500">Compare curriculum focus, credential type, and employer perception across top providers.</p>
          </div>
        </div>

        <div className="overflow-x-auto mt-6">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200 bg-[#FFF8F1] text-gray-900">
                <th className="py-3 px-4 font-bold">Institution</th>
                <th className="py-3 px-4 font-bold">Flagship Program</th>
                <th className="py-3 px-4 font-bold">Credential Form</th>
                <th className="py-3 px-4 font-bold">Key Practical Focus</th>
                <th className="py-3 px-4 font-bold">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="py-3.5 px-4 font-bold text-gray-900">Cisco Networking Academy</td>
                <td className="py-3.5 px-4">Junior Cybersecurity Analyst</td>
                <td className="py-3.5 px-4">Credly Digital Badge &amp; Certificate</td>
                <td className="py-3.5 px-4">Packet Tracer, Endpoint Security, Network Defense</td>
                <td className="py-3.5 px-4 text-xs font-semibold text-primary">Aspiring Network &amp; SOC Technicians</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="py-3.5 px-4 font-bold text-gray-900">Google (Coursera)</td>
                <td className="py-3.5 px-4">Google Cybersecurity Certificate</td>
                <td className="py-3.5 px-4">Professional Certificate (8 Courses)</td>
                <td className="py-3.5 px-4">SIEM (Splunk/Chronicle), Linux CLI, Python, SQL</td>
                <td className="py-3.5 px-4 text-xs font-semibold text-primary">Entry-Level SOC Analysts (CompTIA Voucher)</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="py-3.5 px-4 font-bold text-gray-900">(ISC)²</td>
                <td className="py-3.5 px-4">Certified in Cybersecurity (CC)</td>
                <td className="py-3.5 px-4">Industry Exam Certification</td>
                <td className="py-3.5 px-4">Security Governance, Access Controls, Business Continuity</td>
                <td className="py-3.5 px-4 text-xs font-semibold text-primary">Gold-Standard Vendor-Neutral Foundation</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="py-3.5 px-4 font-bold text-gray-900">Microsoft Learn</td>
                <td className="py-3.5 px-4">SC-900 Fundamentals</td>
                <td className="py-3.5 px-4">Interactive Learning Badges</td>
                <td className="py-3.5 px-4">Zero Trust, Microsoft Entra ID, Sentinel SIEM, Purview</td>
                <td className="py-3.5 px-4 text-xs font-semibold text-primary">Corporate Cloud &amp; Windows Environments</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="py-3.5 px-4 font-bold text-gray-900">PortSwigger</td>
                <td className="py-3.5 px-4">Web Security Academy</td>
                <td className="py-3.5 px-4">Interactive Lab Progress Badges</td>
                <td className="py-3.5 px-4">OWASP Top 10, SQLi, XSS, Burp Suite, Web Exploitation</td>
                <td className="py-3.5 px-4 text-xs font-semibold text-primary">AppSec Engineers &amp; Pen Testers</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="py-3.5 px-4 font-bold text-gray-900">U.S. CISA</td>
                <td className="py-3.5 px-4">FedVTE Training Track</td>
                <td className="py-3.5 px-4">Federal Agency Completion Record</td>
                <td className="py-3.5 px-4">Incident Triage, Threat Hunting, NIST Framework</td>
                <td className="py-3.5 px-4 text-xs font-semibold text-primary">Public Sector &amp; Defense Contractors</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 2: How to Get Free Certification Vouchers */}
      <section className="bg-gradient-to-br from-[#FFF8F1] to-white border border-[#D1C5B4] rounded-2xl p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
            <FileCheck size={22} />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              How to Claim 100% Free Certification Vouchers &amp; Waivers
            </h2>
            <p className="text-sm text-gray-500">Step-by-step instructions for legitimate free certifications and examination fee discounts.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-md">
              (ISC)² Initiative
            </span>
            <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2">Claim the Free (ISC)² CC Certification</h3>
            <ol className="list-decimal list-inside text-sm text-gray-600 space-y-2 leading-relaxed">
              <li>Navigate to <strong className="text-gray-900">isc2.org/certifications/cc</strong> and register for a free (ISC)² Candidate membership.</li>
              <li>Sign the Candidate Agreement and select the One Million Certified in Cybersecurity program.</li>
              <li>Access the free self-paced training module (approximately 14 hours of study material).</li>
              <li>Upon course completion, redeem your unique promotional code to schedule your in-person Pearson VUE exam at 100% discount.</li>
            </ol>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-md">
              Coursera Financial Aid
            </span>
            <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2">Access Google Cybersecurity for Free</h3>
            <ol className="list-decimal list-inside text-sm text-gray-600 space-y-2 leading-relaxed">
              <li>Open the <strong className="text-gray-900">Google Cybersecurity Professional Certificate</strong> on Coursera.</li>
              <li>Click the small <strong className="text-gray-900">Financial Aid Available</strong> link beside the Enroll button.</li>
              <li>Complete the brief application stating your educational goals and financial situation.</li>
              <li>Coursera reviews applications within 15 days, providing 100% tuition coverage for labs, grading, and the certificate.</li>
            </ol>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-2.5 py-1 rounded-md">
              Cisco Skills for All
            </span>
            <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2">Earn Direct Credly Badges from Cisco</h3>
            <ol className="list-decimal list-inside text-sm text-gray-600 space-y-2 leading-relaxed">
              <li>Register an account on <strong className="text-gray-900">skillsforall.com</strong> (powered by Cisco Networking Academy).</li>
              <li>Enroll in Introduction to Cybersecurity, Cybersecurity Essentials, or Network Defense.</li>
              <li>Complete the interactive labs and pass the end-of-course online exam with 70% or higher.</li>
              <li>Your verifiable digital badge is automatically issued to your Credly account for instant LinkedIn sharing.</li>
            </ol>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-2.5 py-1 rounded-md">
              Microsoft Learn Sandboxes
            </span>
            <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2">Free Microsoft Security Interactive Labs</h3>
            <ol className="list-decimal list-inside text-sm text-gray-600 space-y-2 leading-relaxed">
              <li>Visit <strong className="text-gray-900">learn.microsoft.com</strong> and browse to the SC-900 learning path.</li>
              <li>Launch Microsoft Cloud Sandboxes directly in your browser without requiring an Azure subscription.</li>
              <li>Practice configuring Microsoft Entra ID conditional access policies and Microsoft Defender alerts.</li>
              <li>Earn Microsoft Learn XP and module completion trophies verifiable on your public Microsoft profile.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Section 3: Home Lab Blueprint */}
      <section className="bg-white border border-[#D1C5B4] rounded-2xl p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            <Laptop size={22} />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              The Free Cybersecurity Home Lab Blueprint
            </h2>
            <p className="text-sm text-gray-500">Pair your course certificates with a practical home lab to prove your abilities to employers.</p>
          </div>
        </div>

        <p className="text-sm text-gray-600 leading-relaxed mb-6">
          The difference between candidates who get ignored and candidates who receive job offers is practical proof. Hiring managers want to see that you have actually examined packet captures, configured firewall rules, and investigated malware telemetry. You can build an enterprise-grade security lab on any standard laptop with at least 8 GB of RAM at zero cost.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#FFF8F1] border border-[#D1C5B4] rounded-xl p-5">
            <span className="text-xs font-bold text-primary uppercase tracking-wider">Step 1: Hypervisor</span>
            <h3 className="font-bold text-gray-900 mt-2 mb-2">VirtualBox or VMware</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Install Oracle VirtualBox (100% free, open-source). This lets you run isolated virtual machines without altering your host computer operating system.
            </p>
          </div>

          <div className="bg-[#FFF8F1] border border-[#D1C5B4] rounded-xl p-5">
            <span className="text-xs font-bold text-primary uppercase tracking-wider">Step 2: Defensive VM</span>
            <h3 className="font-bold text-gray-900 mt-2 mb-2">pfSense &amp; Elastic SIEM</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Deploy a virtual pfSense firewall or a free Elastic SIEM / Security Onion VM. Configure it to ingest security event logs and generate intrusion alerts.
            </p>
          </div>

          <div className="bg-[#FFF8F1] border border-[#D1C5B4] rounded-xl p-5">
            <span className="text-xs font-bold text-primary uppercase tracking-wider">Step 3: Offensive VM</span>
            <h3 className="font-bold text-gray-900 mt-2 mb-2">Kali Linux &amp; Wireshark</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Install Kali Linux. Run Nmap scans against target sandbox machines (such as Metasploitable), capture the network packets in Wireshark, and document your findings.
            </p>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-between flex-wrap gap-4">
          <p className="text-xs text-gray-600">
            <strong className="text-gray-900">Want a structured project rubric?</strong> Complete our AI-graded cybersecurity portfolio task to earn a public proof-of-work badge.
          </p>
          <Link
            href="/portfolio-tasks/information-technology/it-cybersecurity-fundamentals"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
          >
            Open Cybersecurity Portfolio Task &rarr;
          </Link>
        </div>
      </section>

      {/* Section 4: South African & Global Employer Relevance */}
      <section className="bg-white border border-[#D1C5B4] rounded-2xl p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            <Compass size={22} />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              South African &amp; Global Employer Demand Drivers
            </h2>
            <p className="text-sm text-gray-500">Why corporate organizations are urgently recruiting certified entry-level security analysts.</p>
          </div>
        </div>

        <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
          <p>
            The global cybersecurity workforce gap exceeds 4 million unfilled positions, and South Africa is among the most heavily targeted nations on the African continent for ransomware, phishing syndicates, and financial wire fraud. As a result, South African enterprises across banking (Standard Bank, FirstRand, Absa, Nedbank), telecommunications (MTN, Vodacom), and retail face immense pressure to staff their Security Operations Centers (SOCs).
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <strong className="text-gray-900 block mb-1">POPIA &amp; Cybercrimes Act Compliance</strong>
              <p className="text-xs text-gray-600">
                The Protection of Personal Information Act (POPIA) imposes severe financial fines on organizations that fail to secure customer personal data. Companies need security analysts who understand data protection lifecycles and breach reporting requirements.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <strong className="text-gray-900 block mb-1">Global Remote &amp; Fintech Opportunities</strong>
              <p className="text-xs text-gray-600">
                International organizations frequently hire remote Tier 1 SOC analysts across South African time zones (UTC+2 aligns perfectly with European and UK business hours). Having recognized certifications like Google Cybersecurity, Cisco, and (ISC)² CC gives you immediate credibility for international applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Recommended 12-Month Progression Plan */}
      <section className="bg-gradient-to-br from-white to-[#FFF8F1] border border-[#D1C5B4] rounded-2xl p-6 sm:p-10 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-2">
          Recommended 12-Month Step-by-Step Security Study Progression
        </h2>
        <p className="text-sm text-gray-500 mb-8">Follow this proven sequence to progress from complete beginner to job-ready SOC Analyst.</p>

        <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 before:w-0.5 before:bg-[#D1C5B4] md:before:left-5">
          {[
            {
              phase: 'Phase 1 (Months 1-2)',
              title: 'Networking & Hardware Fundamentals',
              desc: 'Complete Computer Networking (Alison) and Cisco Introduction to Cybersecurity. Understand IP addressing, subnet masks, DNS, DHCP, and the OSI 7-layer stack.',
            },
            {
              phase: 'Phase 2 (Months 3-4)',
              title: 'Foundational Vendor-Neutral Certifications',
              desc: 'Enroll in the free (ISC)² Certified in Cybersecurity (CC) training and schedule your exam. Study Microsoft SC-900 on Microsoft Learn to understand Zero Trust and Entra ID.',
            },
            {
              phase: 'Phase 3 (Months 5-7)',
              title: 'Hands-on Defensive Tools & Scripting',
              desc: 'Take the Google Cybersecurity Professional Certificate. Master Splunk log queries, Linux command line syntax, and write basic Python scripts to automate IP blocking.',
            },
            {
              phase: 'Phase 4 (Months 8-9)',
              title: 'Interactive Web Security & Threat Triage',
              desc: 'Complete the Cisco Junior Cybersecurity Analyst career path and solve apprentice-level labs on PortSwigger Web Security Academy to understand OWASP vulnerabilities.',
            },
            {
              phase: 'Phase 5 (Months 10-12)',
              title: 'Home Lab Documentation, CV & Applications',
              desc: 'Document your home lab setup on GitHub or LinkedIn, complete our AI-graded Cybersecurity Portfolio Task, and review our Cybersecurity Analyst Interview Prep guide to prepare for technical interviews.',
            },
          ].map((item, idx) => (
            <div key={idx} className="relative flex items-start gap-4 md:gap-6 pl-2">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs md:text-sm shrink-0 shadow-md ring-4 ring-white z-10">
                {idx + 1}
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm flex-1">
                <span className="text-xs font-bold text-primary uppercase tracking-wider">{item.phase}</span>
                <h3 className="text-base font-bold text-gray-900 mt-1 mb-1">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default function FreeCybersecurityCoursesPage() {
  const featuredIds = courseCategories.flatMap((cat) => {
    if (cat.ids) return cat.ids;
    if (cat.items) return cat.items.map((i) => i.id);
    return [];
  });

  const relatedCourses = allCourses
    .filter((c) => c.category.includes('it') && !featuredIds.includes(c.id))
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 12);

  return (
    <GuideTemplate
      canonicalUrl={CANONICAL}
      breadcrumb={[{ label: 'Free Cybersecurity Courses' }]}
      heading="Best Free Cybersecurity Courses with Certificates (2026 Guide)"
      heroDescription="Master information security, defensive SOC operations, ethical hacking, and cloud governance. Complete free certified training from Cisco, Google, Microsoft, (ISC)², CISA, IBM, and SANS."
      heroBadges={[
        { icon: Shield, label: 'Top Global Institutions', iconClassName: 'text-primary' },
        { icon: Award, label: 'Free Badges & Certificates', iconClassName: 'text-emerald-600' },
        { icon: Terminal, label: 'Hands-on Lab Practice Included', iconClassName: 'text-amber-600' },
        { icon: Clock, label: '100% Self-Paced Training' },
      ]}
      authors={['jason']}
      benefitsSectionTitle="Why Start a Career in Cybersecurity?"
      benefitsSectionSubtitle="As digital infrastructure scales globally, protecting networks and user data is the highest priority for enterprise employers."
      benefits={benefits}
      courseCategories={courseCategories}
      relatedCourses={relatedCourses}
      carouselTitle="Complementary Free IT & Infrastructure Courses"
      carouselSubtitle="Broaden your technical foundation with these top-rated free learning pathways"
      postCarouselSection={<CybersecurityDeepDiveSections />}
      careerPathsTitle="Where This Cybersecurity Training Can Lead You"
      careerPathsSubtitle="These courses align directly with roles facing extreme talent shortages across South African and global tech markets."
      careerPaths={careerPaths}
      relatedGuides={relatedGuides}
      exploreCategories={exploreCategories}
      faqs={faqs}
      ctaHeading="Start Securing Your Future Today"
      ctaBody="Pick your first course track: start with Cisco Introduction to Cybersecurity if you are a beginner, or claim the free (ISC)² CC exam voucher to earn an industry credential."
      ctaPrimaryLabel="Explore Cybersecurity Analyst Roadmap"
      ctaPrimaryHref="/career-roadmaps/cybersecurity-analyst"
      ctaSecondaryLabel="Build Your Proof of Work Portfolio"
      ctaSecondaryHref="/portfolio-tasks"
    />
  );
}
