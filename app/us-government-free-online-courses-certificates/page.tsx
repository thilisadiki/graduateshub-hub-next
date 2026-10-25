import type { Metadata } from 'next';
import { Landmark, Award, Clock, Lock, CheckCircle2 } from 'lucide-react';
import GuideTemplate from '@/components/course/GuideTemplate';
import type { BenefitItem, CourseCategory, CareerPathItem, RelatedGuide, FaqItem } from '@/components/course/GuideTemplate';
import { usGovernmentCourses } from '@/data/categories/usGovernmentCourses';
import { SITE_URL, SITE_NAME } from '@/lib/seo';

const CANONICAL = `${SITE_URL}/us-government-free-online-courses-certificates`;

export const metadata: Metadata = {
  title: 'Free US Government Online Courses with Certificates (2026)',
  description:
    'Free official U.S. government online courses with verified completion certificates. Complete training modules from FEMA, CISA, CDC, NIH, SBA, and YALI Network at no cost.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    siteName: SITE_NAME,
    title: 'Free US Government Online Courses with Certificates (2026) | Graduates Hub',
    description:
      'Explore official U.S. federal agency training portals offering free online certificates in emergency management, cybersecurity, public health, business leadership, and federal acquisition.',
    url: CANONICAL,
  },
};

const courseCategories: CourseCategory[] = [
  {
    label: 'Emergency Preparedness & Incident Command',
    slug: 'business',
    description: 'Master public safety, disaster management, and community health frameworks with official federal certificates from FEMA.',
    ids: ['fema-is-100c', 'fema-is-700b'],
  },
  {
    label: 'Cybersecurity & Public Technology',
    slug: 'cybersecurity',
    description: 'Gain technical cybersecurity skills through training modules developed by CISA and the Department of Homeland Security.',
    ids: ['cisa-fedvte-cybersecurity-foundations'],
  },
  {
    label: 'Public Health & Safety',
    slug: 'business',
    description: 'Earn public health, bioethics, and occupational safety credentials backed by premier federal healthcare institutions.',
    ids: ['cdc-public-health-101', 'nih-human-subjects-research', 'osha-10-hour-general-industry'],
  },
  {
    label: 'Business, Finance & Leadership',
    slug: 'business',
    description: 'Develop entrepreneurial, financial management, and civic leadership skills backed by U.S. government departments.',
    ids: ['sba-small-business-guide', 'yali-servant-leadership'],
  },
  {
    label: 'Federal Acquisition & Public Administration',
    slug: 'business',
    description: 'Understand government procurement, public sector contracting, and administrative project management.',
    ids: ['fai-federal-contracting-101'],
  },
];

const relatedCourses = usGovernmentCourses.slice(0, 6);

const benefits: BenefitItem[] = [
  {
    icon: Landmark,
    title: 'Official Government Backing',
    body: 'Training modules are created directly by U.S. federal agencies like FEMA, CISA, CDC, SBA, and the U.S. Department of State.',
  },
  {
    icon: Award,
    title: 'Verifiable Completion Certificates',
    body: 'Passing final knowledge checks or exam modules grants digital certificates of completion directly from federal agency portals.',
  },
  {
    icon: Lock,
    title: '100% Free & Open Access',
    body: 'All courses listed are completely free to study, take exams, and download certificates without hidden paywalls or subscription fees.',
  },
  {
    icon: Clock,
    title: 'Self-Paced & Flexible',
    body: 'Modules can be completed at your own speed from anywhere in the world, making them ideal for professionals, students, and job seekers.',
  },
];

const careerPaths: CareerPathItem[] = [
  {
    role: 'Emergency Management Specialist',
    detail: 'Coordinate disaster readiness, emergency operations, and community safety protocols for public and private organizations. Key modules: FEMA IS-100, IS-700 & OSHA Safety Standards.',
  },
  {
    role: 'Cybersecurity Analyst',
    detail: 'Protect critical IT infrastructure, analyze security threats, and implement incident response plans. Key modules: CISA FedVTE Cybersecurity Track & NICCS Threat Hunting.',
  },
  {
    role: 'Public Health Administrator',
    detail: 'Manage community health initiatives, bioethics compliance, and healthcare safety programs. Key modules: CDC Public Health & CEU Track, NIH Bioethics.',
  },
  {
    role: 'Small Business & Procurement Consultant',
    detail: 'Help entrepreneurs launch businesses, apply for funding, and navigate public sector contract opportunities. Key modules: SBA Business Planning & FAI Federal Contracting.',
  },
];

const relatedGuides: RelatedGuide[] = [
  {
    href: '/free-courses-with-certificates',
    title: 'Free Online Courses with Free Certificates',
    desc: 'Explore the complete directory of free certified online courses across top global platforms.',
  },
  {
    href: '/google-cybersecurity-certificate-guide',
    title: 'Google Cybersecurity Professional Certificate Guide',
    desc: 'Learn SIEM tools, Python scripting, and Linux commands for entry-level SOC analyst roles.',
  },
  {
    href: '/free-it-courses-with-certificates',
    title: 'Free IT Support & Systems Admin Courses',
    desc: 'Master networking, Active Directory, help desk SLAs, and Windows/Linux server management.',
  },
  {
    href: '/free-business-courses',
    title: 'Free Online Business & Management Courses',
    desc: 'Develop financial management, operations, and leadership skills with accredited free diplomas.',
  },
];

const faqs: FaqItem[] = [
  {
    q: 'Are these U.S. government online courses completely free?',
    a: 'Yes. Every learning portal highlighted in this guide (including FEMA EMI, CISA FedVTE, CDC Learning Connection, NIH, SBA, and YALI Network) is funded by U.S. federal agencies and provides 100% free course access, exams, and downloadable completion certificates without any fee.',
  },
  {
    q: 'Can non-U.S. citizens enroll and earn certificates?',
    a: 'Yes! Portals such as FEMA EMI (Independent Study), YALI Network (sponsored by the U.S. Department of State), CDC Learning Connection, and SBA Learning Center are open to international learners worldwide.',
  },
  {
    q: 'How do I receive my certificate after completing a course?',
    a: 'Upon passing the required online final exam or assessment module (usually requiring a score of 75% or 80%), the agency portal automatically generates an official digital certificate of completion (PDF format) sent directly to your registered email address or downloadable from your learner account.',
  },
  {
    q: 'Can I list these government certificates on my CV and LinkedIn profile?',
    a: 'Absolutely. Adding certificates from recognized federal agencies like FEMA, CISA, CDC, or the SBA demonstrates proactive professional development, attention to compliance, and specialized knowledge in safety, technology, and public administration.',
  },
];

// ---------------------------------------------------------------------------
// Deep-dive editorial sections injected after the course carousel
// ---------------------------------------------------------------------------
function USGovDeepDiveSections() {
  return (
    <div className="mb-20 flex flex-col gap-20">

      {/* Section 1: Federal vs State */}
      <section>
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
          State-Level vs. Federal Government Certifications: Which Should You Pursue?
        </h2>
        <div className="w-12 h-1 bg-primary rounded-full mb-8" />
        <p className="text-gray-600 leading-relaxed mb-8">
          Not all US government certificates carry the same scope or audience. Understanding the difference between federal and state-level programs helps you target the credentials that align with your career goals and, if you are job searching, the region where you intend to work.
        </p>

        <h3 className="text-xl font-extrabold text-gray-900 mb-4">Federal Certifications: Nationally Recognized, No Geographic Limit</h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          Federal programs are issued by national agencies and are valid across all 50 states. These credentials carry the weight of the US government and are recognized by both public and private sector employers nationwide. The most widely pursued federal programs include:
        </p>
        <ul className="list-disc list-inside space-y-3 text-gray-600 mb-8 pl-2">
          <li><strong className="text-gray-900">FEMA Independent Study (IS) Program:</strong> Emergency management, disaster preparedness, and incident command training recognized across every state and territory.</li>
          <li><strong className="text-gray-900">CISA (Cybersecurity and Infrastructure Security Agency):</strong> Cybersecurity awareness and workforce development courses accepted by federal contractors, IT departments, and defense sector employers.</li>
          <li><strong className="text-gray-900">CDC Learning Connection:</strong> Public health, epidemiology, and health communication courses used by healthcare employers and NGOs globally.</li>
          <li><strong className="text-gray-900">OSHA Online Outreach Training:</strong> Workplace safety certifications required or preferred by construction, manufacturing, and facilities employers across all US states.</li>
          <li><strong className="text-gray-900">USDA AgLearn:</strong> Agriculture, rural development, and natural resource management training.</li>
        </ul>
        <p className="text-gray-600 mb-8">
          <strong className="text-gray-900">Best for:</strong> Learners targeting remote roles, federal contractor positions, nationwide job applications, or careers in emergency management, cybersecurity, and public health.
        </p>

        <h3 className="text-xl font-extrabold text-gray-900 mb-4">State-Level Certifications: High Local Intent, Less Competition</h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          Every US state maintains its own workforce development boards, public safety agencies, and community college systems that offer free or subsidized credentialing programs. These programs are typically:
        </p>
        <ul className="list-disc list-inside space-y-3 text-gray-600 mb-6 pl-2">
          <li>Funded by state workforce investment boards under the Workforce Innovation and Opportunity Act (WIOA)</li>
          <li>Administered through state community colleges, labor departments, or economic development offices</li>
          <li>Targeted at sectors critical to that state&apos;s economy - tech in California, finance in New York, or energy in Texas</li>
        </ul>
        <p className="text-gray-600 font-semibold mb-3">Why state-level credentials matter for your job search:</p>
        <ul className="list-disc list-inside space-y-3 text-gray-600 mb-8 pl-2">
          <li>Local employers, especially small and mid-size businesses, often recognize and actively prefer state-issued workforce credentials because they signal region-specific training.</li>
          <li>State programs frequently include funding for industry certifications like CompTIA, AWS, or Salesforce at no cost to the learner, meaning you gain a nationally recognized private-sector credential through a publicly funded pathway.</li>
          <li>Applying for local government or municipal roles almost always favors candidates holding state-recognized credentials over generic online courses.</li>
        </ul>

        <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
          <table className="w-full text-sm text-left">
            <thead className="bg-[#FFDF9C]/20 text-gray-900 font-bold">
              <tr>
                <th className="px-5 py-3 border-b border-gray-100">Factor</th>
                <th className="px-5 py-3 border-b border-gray-100">Federal Programs</th>
                <th className="px-5 py-3 border-b border-gray-100">State Programs</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-50 text-gray-600">
              <tr>
                <td className="px-5 py-3 font-medium text-gray-900">Geographic recognition</td>
                <td className="px-5 py-3">Nationwide</td>
                <td className="px-5 py-3">Primarily regional</td>
              </tr>
              <tr>
                <td className="px-5 py-3 font-medium text-gray-900">Employer audience</td>
                <td className="px-5 py-3">Federal contractors, large corporations, NGOs</td>
                <td className="px-5 py-3">Local government, SMBs, regional employers</td>
              </tr>
              <tr>
                <td className="px-5 py-3 font-medium text-gray-900">Access</td>
                <td className="px-5 py-3">Open to all, often globally</td>
                <td className="px-5 py-3">Often requires state residency or employment</td>
              </tr>
              <tr>
                <td className="px-5 py-3 font-medium text-gray-900">Best use case</td>
                <td className="px-5 py-3">Resume credibility boost, universal skills</td>
                <td className="px-5 py-3">Local job market targeting, funded certifications</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-sm text-gray-500 bg-[#FFDF9C]/10 border border-[#D1C5B4] rounded-xl px-5 py-4">
          <strong className="text-gray-900">Actionable tip:</strong> Search your state name plus &quot;free workforce certification&quot; or &quot;workforce development board&quot; to find locally funded programs. Every state has them; most learners never look.
        </p>
      </section>

      {/* Section 2: Resume and CV Translation */}
      <section>
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
          How to Add US Government Certificates to Your Resume and LinkedIn Profile
        </h2>
        <div className="w-12 h-1 bg-primary rounded-full mb-8" />
        <p className="text-gray-600 leading-relaxed mb-8">
          Earning a government-backed certificate is only half the work. How you list it on your resume determines whether it gets noticed by recruiters and passed by Applicant Tracking Systems (ATS). Government credentials have specific formatting conventions that differ from commercial online courses, and using the wrong format can cause your qualification to be ignored or misread.
        </p>

        <h3 className="text-xl font-extrabold text-gray-900 mb-3">Step 1: Use the Exact Official Course Title and Issuing Body</h3>
        <p className="text-gray-600 leading-relaxed mb-4">Always use the exact official name of the course and the full name of the issuing agency. ATS systems and recruiter keyword searches are built around specific terminology.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5">
            <p className="text-xs font-bold text-emerald-700 uppercase tracking-wide mb-2">Correct</p>
            <p className="text-sm text-gray-700">FEMA Independent Study IS-700.b: National Incident Management System (NIMS), An Introduction</p>
          </div>
          <div className="bg-red-50 border border-red-100 rounded-xl p-5">
            <p className="text-xs font-bold text-red-600 uppercase tracking-wide mb-2">Incorrect</p>
            <p className="text-sm text-gray-700">FEMA disaster course</p>
          </div>
          <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5">
            <p className="text-xs font-bold text-emerald-700 uppercase tracking-wide mb-2">Correct</p>
            <p className="text-sm text-gray-700">OSHA 10-Hour General Industry Outreach Training - Occupational Safety and Health Administration</p>
          </div>
          <div className="bg-red-50 border border-red-100 rounded-xl p-5">
            <p className="text-xs font-bold text-red-600 uppercase tracking-wide mb-2">Incorrect</p>
            <p className="text-sm text-gray-700">OSHA safety certificate</p>
          </div>
        </div>

        <h3 className="text-xl font-extrabold text-gray-900 mb-3">Step 2: Format Each Entry in Your Certifications Section</h3>
        <p className="text-gray-600 mb-4">Place government certificates in a dedicated <strong>Certifications</strong> section, not buried inside Education or Skills. Use this format:</p>
        <div className="bg-gray-900 rounded-xl px-6 py-5 mb-6 font-mono text-sm text-green-400 leading-loose">
          <p>[Official Certificate / Course Title]</p>
          <p>[Full Issuing Agency Name] | [Month Year] | [Certificate ID if available]</p>
        </div>
        <p className="text-gray-600 font-semibold mb-3">Real examples formatted correctly:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 mb-8 pl-2 text-sm">
          <li>IS-100.c: Introduction to the Incident Command System, FEMA | Aug 2024 | Certificate No. 12345678</li>
          <li>OSHA 30-Hour Construction Industry Outreach Training, Occupational Safety and Health Administration | Jun 2024</li>
          <li>Introduction to Cybersecurity, Cybersecurity and Infrastructure Security Agency (CISA) | Mar 2024</li>
          <li>Public Health 101: Healthy People for a Healthy Nation, CDC | Jan 2024</li>
        </ul>

        <h3 className="text-xl font-extrabold text-gray-900 mb-3">Step 3: Add ATS-Friendly Skill Tags in Your Skills Section</h3>
        <p className="text-gray-600 mb-5">Extract the core skills each course taught and list them as keywords in your Skills section. ATS software scores resumes against job descriptions, so matching the language used in job postings is critical.</p>
        <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm mb-8">
          <table className="w-full text-sm text-left">
            <thead className="bg-[#FFDF9C]/20 text-gray-900 font-bold">
              <tr>
                <th className="px-5 py-3 border-b border-gray-100">Certificate</th>
                <th className="px-5 py-3 border-b border-gray-100">Skills to Add to Your Resume</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-50 text-gray-600">
              <tr>
                <td className="px-5 py-3 font-medium text-gray-900">FEMA IS-700 (NIMS)</td>
                <td className="px-5 py-3">Incident Command System (ICS), Emergency Operations, Unified Command, Public Safety Coordination</td>
              </tr>
              <tr>
                <td className="px-5 py-3 font-medium text-gray-900">CISA Cybersecurity</td>
                <td className="px-5 py-3">Cybersecurity Awareness, Risk Management, Phishing Prevention, Zero Trust Principles</td>
              </tr>
              <tr>
                <td className="px-5 py-3 font-medium text-gray-900">OSHA 10 or 30</td>
                <td className="px-5 py-3">OSHA Compliance, Workplace Hazard Identification, Safety Management, PPE Protocols</td>
              </tr>
              <tr>
                <td className="px-5 py-3 font-medium text-gray-900">CDC Public Health</td>
                <td className="px-5 py-3">Epidemiology Basics, Health Communication, Disease Surveillance, Community Health</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-extrabold text-gray-900 mb-3">Step 4: Optimize Your LinkedIn Profile</h3>
        <ul className="list-disc list-inside space-y-3 text-gray-600 mb-8 pl-2">
          <li><strong className="text-gray-900">Name:</strong> Full official certificate or course title</li>
          <li><strong className="text-gray-900">Issuing Organization:</strong> Full agency name (FEMA, CISA, CDC, OSHA). LinkedIn has verified entries for most of these, which adds a credibility badge to your profile.</li>
          <li><strong className="text-gray-900">Issue Date:</strong> Month and year of completion</li>
          <li><strong className="text-gray-900">Credential ID:</strong> Include your certificate number if provided. FEMA issues numbered certificates you can verify online.</li>
          <li><strong className="text-gray-900">Credential URL:</strong> Link directly to your FEMA transcript or certificate verification page where possible.</li>
        </ul>

        <h3 className="text-xl font-extrabold text-gray-900 mb-3">Common Mistakes to Avoid</h3>
        <ul className="list-disc list-inside space-y-3 text-gray-600 pl-2">
          <li>Do not list &quot;FEMA&quot; or &quot;CDC&quot; without the full course title. Recruiters and ATS need specifics.</li>
          <li>Do not group multiple certificates into a single bullet point. Each credential deserves its own line.</li>
          <li>Do not omit the completion date. Undated certificates are discounted by most hiring managers, especially in rapidly evolving fields like cybersecurity.</li>
          <li>Do not confuse the issuing body with the delivery platform. If you completed a CDC course through Coursera, the issuing body is still the CDC, not Coursera.</li>
        </ul>
      </section>

      {/* Section 3: Prerequisites and Global Eligibility */}
      <section>
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
          Who Can Enroll? Prerequisites and Eligibility for US Government Free Courses
        </h2>
        <div className="w-12 h-1 bg-primary rounded-full mb-8" />
        <p className="text-gray-600 leading-relaxed mb-8">
          One of the most frequently asked questions about US government training programs is whether non-US citizens, international students, or global learners can access them. The answer varies significantly by agency and program type, and understanding the rules upfront saves you from enrolling in a course only to find your certificate is unavailable at the end.
        </p>

        <h3 className="text-xl font-extrabold text-gray-900 mb-4">Programs Open to Global Learners (No US Citizenship Required)</h3>
        <div className="flex flex-col gap-4 mb-10">
          {[
            {
              name: 'FEMA Emergency Management Institute - Independent Study',
              detail: 'The majority of IS courses are open to international participants. Non-US residents can complete courses and receive certificates. In-person courses at the EMI campus are restricted to US government personnel.',
            },
            {
              name: 'CDC Learning Connection',
              detail: 'Public health, epidemiology, health equity, and emergency preparedness courses are publicly accessible worldwide. No citizenship verification is required for most self-paced modules.',
            },
            {
              name: 'CISA Cybersecurity Training (online modules)',
              detail: "Most of CISA's self-paced online courses are open to global learners, reflecting the agency's mandate to strengthen cybersecurity worldwide. Some advanced simulations may require US affiliation.",
            },
            {
              name: 'National Library of Medicine (NLM)',
              detail: 'Health data, medical informatics, and bioinformatics courses through NLM are accessible internationally with no citizenship restrictions.',
            },
            {
              name: 'USDA AgLearn (select courses)',
              detail: 'Certain open modules covering food safety, sustainable agriculture, and rural development are publicly accessible without a US government affiliation.',
            },
          ].map(({ name, detail }) => (
            <div key={name} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm flex gap-4">
              <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-gray-900 mb-1">{name}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{detail}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-extrabold text-gray-900 mb-4">Programs Restricted to US Residents or Citizens</h3>
        <ul className="list-disc list-inside space-y-4 text-gray-600 mb-10 pl-2">
          <li><strong className="text-gray-900">OSHA Outreach Training Card:</strong> While OSHA course content is publicly available, the official card requires completion through an OSHA-authorized trainer and is only issued to workers under US OSHA jurisdiction.</li>
          <li><strong className="text-gray-900">Federal Law Enforcement Training Centers (FLETC):</strong> All programs are restricted to US law enforcement personnel and affiliated government agencies.</li>
          <li><strong className="text-gray-900">In-person EMI residential courses:</strong> Restricted to US emergency management personnel and government employees at all levels.</li>
          <li><strong className="text-gray-900">State workforce development programs:</strong> The majority require proof of state residency and current employment or job-seeking status within that state, funded under WIOA guidelines that limit spending to US workers.</li>
        </ul>

        <h3 className="text-xl font-extrabold text-gray-900 mb-4">Practical Eligibility Checklist Before You Enroll</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {[
            { label: 'Check for geographic restrictions', detail: 'Look for phrases like "open to the public" or "US government employees only" on the enrollment page. If not stated, the program is generally open to all.' },
            { label: 'Confirm how the certificate is issued', detail: 'FEMA IS certificates require you to pass a final exam and then request your certificate through the IS website using your enrollment email.' },
            { label: 'Verify the credential is electronically verifiable', detail: 'FEMA, CDC, and CISA all maintain transcript or verification systems that allow employers to confirm your completion.' },
            { label: 'Check for language requirements', detail: 'Most federal programs are English-only, though CDC offers select modules in Spanish and other languages.' },
          ].map(({ label, detail }) => (
            <div key={label} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
              <p className="font-bold text-gray-900 mb-1 text-sm">{label}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#FFDF9C]/10 border border-[#D1C5B4] rounded-xl px-6 py-5">
          <p className="font-bold text-gray-900 mb-2">Bottom Line for International Learners</p>
          <p className="text-sm text-gray-600 leading-relaxed">
            If you are based outside the United States, FEMA Independent Study, CDC Learning Connection, and CISA cybersecurity modules are your most accessible and globally relevant options. These certificates appear on thousands of resumes worldwide and are well understood by international organizations, NGOs, global health agencies, and multinational employers. Start with these, add them properly to your resume using the formatting guide above, and you will have credible, verifiable credentials that cost nothing to earn.
          </p>
        </div>
      </section>

    </div>
  );
}

export default function USGovernmentCoursesPage() {
  return (
    <GuideTemplate
      canonicalUrl={CANONICAL}
      breadcrumb={[{ label: 'US Government Free Online Courses' }]}
      heading="Free US Government Online Courses with Certificates (2026)"
      heroDescription="Several official U.S. government agencies offer free online learning portals where you can complete training modules and download verified certificates of completion at no cost across Emergency Management, Cybersecurity, Public Health, Business, and Federal Acquisition."
      heroBadges={[
        { icon: Landmark, label: 'Official Federal Agency Portals', iconClassName: 'text-amber-600' },
        { icon: Award, label: 'Verified Certificates', iconClassName: 'text-primary' },
        { icon: CheckCircle2, label: '100% Free & Open Access', iconClassName: 'text-green-600' },
      ]}
      authors={['jason', 'ndulamiso']}
      benefitsSectionTitle="Why Learn with U.S. Government Agency Portals?"
      benefitsSectionSubtitle="Federal training portals provide authoritative, standardized instruction built by public sector policy experts, risk managers, and agency engineers."
      benefits={benefits}
      courseCategories={courseCategories}
      relatedCourses={relatedCourses}
      carouselTitle="Official Federal Agency Courses"
      carouselSubtitle="Direct links to free training modules and certification exams from U.S. government agencies"
      postCarouselSection={<USGovDeepDiveSections />}
      careerPathsTitle="Career Paths Powered by Government Training"
      careerPathsSubtitle="These free federal training modules prepare you for high-responsibility public and private sector roles."
      careerPaths={careerPaths}
      relatedGuides={relatedGuides}
      faqs={faqs}
      ctaHeading="Start Earning Official Government Certificates"
      ctaBody="Enhance your CV with credentials from FEMA, CISA, CDC, SBA, and the U.S. Department of State today."
      ctaPrimaryLabel="Explore All Course Guides"
      ctaPrimaryHref="/guides"
      ctaSecondaryLabel="View Free IT & Tech Courses"
      ctaSecondaryHref="/free-it-courses-with-certificates"
    />
  );
}
