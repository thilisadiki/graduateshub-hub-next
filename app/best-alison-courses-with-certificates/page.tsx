import type { Metadata } from 'next';
import { CheckCircle2, Clock, Award, BookOpen, Users, TrendingUp, Star, Globe } from 'lucide-react';
import GuideTemplate from '@/components/course/GuideTemplate';
import type { BenefitItem, CourseCategory, CareerPathItem, RelatedGuide, FaqItem } from '@/components/course/GuideTemplate';
import { courses } from '@/data/courses';
import { courses as allCourses } from '@/data/courses';

const SITE_URL = 'https://www.graduateshub.co.za';
const CANONICAL = `${SITE_URL}/best-alison-courses-with-certificates`;

export const metadata: Metadata = {
  title: 'Best Alison Courses with Certificates (2026)',
  description:
    'The top CPD-accredited diplomas and certificates available on the Alison platform, hand-picked by subject specialists. Free to study with no deadlines, no enrolment fees, and no prior experience required.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Best Alison Courses with Certificates (2026) | Graduates Hub',
    description:
      'The top CPD-accredited diplomas and certificates available on the Alison platform, hand-picked by subject specialists. Free to study with no deadlines, no enrolment fees, and no prior experience required.',
    url: CANONICAL,
  },
};

const courseCategories: CourseCategory[] = [
  { label: 'Business & Project Management', slug: 'business', description: 'Master the project lifecycle, agile methods, and process optimisation.', ids: ['diploma-project-management', 'agile-project-management', 'lean-six-sigma-yellow-belt'] },
  { label: 'IT & Technology', slug: 'it', description: 'From networking fundamentals to IT service management and infrastructure.', ids: ['diploma-in-it-management', 'computer-networking', 'foundations-of-itil-4'] },
  { label: 'Accounting & Finance', slug: 'accounting', description: 'Build the financial literacy employers expect from business professionals.', ids: ['fundamentals-of-accounting', 'diploma-effective-bookkeeping-payroll', 'diploma-financial-management-managers'] },
  { label: 'Digital Marketing', slug: 'marketing', description: 'SEO, content strategy, social media, and digital growth techniques.', ids: ['digital-marketing', 'basic-concepts-of-digital-marketing', 'growth-hacking-techniques-for-digital-marketing'] },
];

const benefits: BenefitItem[] = [
  { icon: Award, title: 'CPD-Accredited Certificates', body: 'Alison certificates are CPD-accredited, a globally recognised standard that many employers accept.' },
  { icon: BookOpen, title: '100% Free to Study', body: 'Every course is completely free to access. No subscription, no credit card required.' },
  { icon: Clock, title: 'Self-Paced, No Deadlines', body: 'Study at your own speed. Pick up where you left off whenever life allows.' },
  { icon: Globe, title: '6,000+ Courses Available', body: 'One of the largest free course libraries on the internet, covering every major career field.' },
  { icon: Users, title: '50 Million Learners', body: "Alison is one of the world's most widely used free learning platforms, trusted by learners in 195 countries." },
  { icon: TrendingUp, title: 'Career-Focused Content', body: 'Courses are built around real job skills, not academic theory, so you can apply what you learn immediately.' },
];

const careerPaths: CareerPathItem[] = [
  { role: 'Project Coordinator', category: 'Business & Management', href: '/category/business' },
  { role: 'IT Support Specialist', category: 'IT & Technology', href: '/category/it' },
  { role: 'Bookkeeper', category: 'Accounting & Finance', href: '/category/accounting' },
  { role: 'Digital Marketer', category: 'Marketing', href: '/category/marketing' },
  { role: 'Data Analyst', category: 'Data & Analytics', href: '/free-courses-for-data-analysts' },
  { role: 'HR Assistant', category: 'Business & Management', href: '/category/business' },
];

const relatedGuides: RelatedGuide[] = [
  { title: 'How to Get Your First Graduate Job in SA (2026)', desc: 'A step-by-step guide to landing your first job — CV writing, skills gaps, interview prep, and the hidden job market.', href: '/first-graduate-job-south-africa' },
  { title: 'Best Free Online Courses with Certificates (2026)', desc: 'A broader look at free certified courses across all topics and platforms, not just Alison.', href: '/free-courses-with-certificates' },
  { title: 'Best Free AI Courses for Beginners (2026)', desc: 'No coding required. Start learning Artificial Intelligence and Generative AI for free today.', href: '/free-ai-courses-for-beginners' },
  { title: 'Best Free Business Courses Online (2026)', desc: 'Project management, Lean Six Sigma, GDPR, and economic strategy. All CPD-accredited and free.', href: '/free-business-courses' },
];

const faqs: FaqItem[] = [
  { q: 'Are Alison courses completely free?', a: 'Yes, all Alison courses are 100% free to study. The learning content, assessments, and course completion are all free. Alison does offer optional paid certificates (physical or digital) if you want an official printed credential, but the learning itself costs nothing.' },
  { q: 'What is the difference between an Alison certificate and an Alison diploma?', a: 'Certificate courses typically take 2 to 5 hours and focus on a specific skill or topic. Diploma courses are longer, usually 6 to 15 hours, and provide a more comprehensive, in-depth qualification. Diplomas carry more weight on a CV because they demonstrate deeper commitment and broader knowledge.' },
  { q: 'Are Alison certificates recognised by employers?', a: "Alison has issued over 30 million certificates and is one of the most widely recognised free learning platforms globally. Recognition varies by industry and employer, but Alison's CPD accreditation is accepted by many companies as proof of practical skills. Combined with practical experience or portfolio work, Alison certificates can meaningfully strengthen a job application." },
  { q: 'How do I get my Alison certificate?', a: 'You receive a certificate once you pass the final assessment at the end of your course. Alison issues a digital certificate that you can download, add to your LinkedIn profile, or share with employers. An optional paid physical certificate is also available.' },
  { q: 'How long does it take to complete an Alison course?', a: 'Short certificate courses typically take 2 to 6 hours, which most people complete in a few evenings. Diploma courses range from 8 to 15+ hours, usually two to four weeks of part-time study. There are no deadlines, so you progress at whatever pace suits your schedule.' },
  { q: 'Can I do multiple Alison courses at the same time?', a: "Absolutely. Many learners combine a technical course (like IT or Accounting) with a soft-skills course (like Project Management) to build a well-rounded profile. Alison's self-paced format makes it easy to juggle multiple courses alongside work or study." },
];

const exploreCategories = [
  { label: 'IT & Technology', href: '/category/it' },
  { label: 'Software Development', href: '/category/software-engineering' },
  { label: 'Business & Management', href: '/category/business' },
  { label: 'Accounting & Finance', href: '/category/accounting' },
  { label: 'Digital Marketing', href: '/category/marketing' },
];

export default function BestAlisonCoursesPage() {
  const featured = courseCategories.flatMap((cat) =>
    cat.ids.map((id) => allCourses.find((c) => c.id === id)).filter(Boolean)
  );
  const relatedCourses = courses
    .filter((c) => c.rating >= 4.6 && !featured.find((f) => f?.id === c.id))
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 12);

  return (
    <GuideTemplate
      canonicalUrl={CANONICAL}
      breadcrumb={[{ label: 'Best Alison Courses with Certificates' }]}
      heading="Best Alison Courses with Certificates (2026)"
      heroDescription="Alison is one of the world's leading free learning platforms, with over 6,000 courses, 50 million learners, and CPD-accredited certificates across Business, IT, Marketing, Finance, and more. We have curated the best Alison courses to help you build real skills and earn a recognised certificate at no cost."
      heroBadges={[
        { icon: CheckCircle2, label: 'CPD-Accredited', iconClassName: 'text-green-500' },
        { icon: Award, label: 'Free Certificates', iconClassName: 'text-primary' },
        { icon: Clock, label: 'Self-Paced' },
        { icon: Star, label: '50M+ Learners', iconClassName: 'text-yellow-500' },
      ]}
      benefitsSectionTitle="Why Choose Alison?"
      benefitsSectionSubtitle="With thousands of free platforms competing for your attention, here is why Alison consistently stands out for learners looking for a genuine, practical qualification."
      benefits={benefits}
      preCoursesSection={
        <section className="mb-20 bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">Certificate or Diploma, Which Should You Choose?</h2>
          <p className="text-gray-500 mb-8 text-lg">Alison offers two types of qualifications. Picking the right one depends on how much time you have and how deeply you want to go.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-xl border-2 border-blue-100 bg-blue-50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">Cert</div>
                <h3 className="font-bold text-gray-900 text-xl">Certificate Courses</h3>
              </div>
              <ul className="text-gray-700 text-sm space-y-3">
                <li className="flex items-start gap-2"><CheckCircle2 size={15} className="text-green-500 mt-0.5 shrink-0" /> Duration: typically 2 to 6 hours</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={15} className="text-green-500 mt-0.5 shrink-0" /> Best for: quick skill building and adding specific tools to your CV</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={15} className="text-green-500 mt-0.5 shrink-0" /> Ideal for: career changers exploring a new field before committing deeper</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={15} className="text-green-500 mt-0.5 shrink-0" /> Great alongside an existing job or study schedule</li>
              </ul>
            </div>
            <div className="rounded-xl border-2 border-indigo-100 bg-indigo-50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">Dip</div>
                <h3 className="font-bold text-gray-900 text-xl">Diploma Courses</h3>
              </div>
              <ul className="text-gray-700 text-sm space-y-3">
                <li className="flex items-start gap-2"><CheckCircle2 size={15} className="text-green-500 mt-0.5 shrink-0" /> Duration: typically 8 to 15+ hours</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={15} className="text-green-500 mt-0.5 shrink-0" /> Best for: comprehensive, in-depth qualifications that employers notice</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={15} className="text-green-500 mt-0.5 shrink-0" /> Carries more weight on a CV, demonstrates sustained commitment</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={15} className="text-green-500 mt-0.5 shrink-0" /> Ideal for career switchers making a serious move into a new field</li>
              </ul>
            </div>
          </div>
        </section>
      }
      courseCategories={courseCategories}
      relatedCourses={relatedCourses}
      carouselTitle="More Top-Rated Alison Courses"
      carouselSubtitle="Highly rated courses across all categories, free to start today"
      postCarouselSection={
        <>
          <section className="mb-20">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Are Alison Certificates Free?</h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl leading-relaxed">The short answer: the learning is completely free. All courses, assessments, and completion recognition are free to access. Alison does offer optional paid certificates, but the skills and the qualification are yours regardless.</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { stat: 'Free to study', body: 'All course content and assessments are 100% free. No subscription, no credit card needed.' },
                  { stat: 'Optional paid certificate', body: 'Alison charges a small fee for an official digital or physical certificate if you want a printed credential.' },
                  { stat: 'Free digital badge', body: 'Even without paying, you receive a digital badge and can showcase your completion on your Alison profile.' },
                ].map(({ stat, body }) => (
                  <div key={stat} className="bg-white/10 rounded-xl p-5 backdrop-blur-sm">
                    <p className="font-bold text-white mb-2">{stat}</p>
                    <p className="text-blue-100 text-sm leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-20 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">How to Choose the Right Alison Course</h2>
            <p className="text-gray-500 mb-10">Three steps to finding the course that will actually move your career forward.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-extrabold text-lg mb-4 shrink-0">1</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Start with Your Career Goal</h3>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li className="flex items-start gap-2"><CheckCircle2 size={15} className="text-green-500 mt-0.5 shrink-0" /> Career change? Choose a diploma-level course in your target field.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 size={15} className="text-green-500 mt-0.5 shrink-0" /> Skill upgrade? Pick a specific certificate that fills your knowledge gap.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 size={15} className="text-green-500 mt-0.5 shrink-0" /> Exploring? Start with a beginner certificate to test your interest before committing to a diploma.</li>
                </ul>
              </div>
              <div className="flex flex-col">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-extrabold text-lg mb-4 shrink-0">2</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Focus on High-Demand Skills</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">Not all skills are equally valuable. Focus on areas where employers are actively hiring and where your certificate can make a measurable difference to your application:</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  {['IT & Programming', 'Business & Project Management', 'Data & Analytics', 'Digital Marketing'].map((skill) => (
                    <li key={skill} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" /> {skill}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-extrabold text-lg mb-4 shrink-0">3</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Balance Time and Depth</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Short certificate courses (2 to 6 hours) are great for quick wins. Diploma courses (8 to 15 hours) give you the depth that helps you stand out in a competitive job market. If you have two to four weeks of part-time study available, a diploma is almost always the better career investment.</p>
              </div>
            </div>
          </section>
        </>
      }
      careerPathsTitle="Career Paths You Can Start with Alison Courses"
      careerPathsSubtitle="Alison's CPD-accredited courses directly support entry-level hiring in these in-demand roles."
      careerPaths={careerPaths}
      relatedGuides={relatedGuides}
      exploreCategories={exploreCategories}
      faqs={faqs}
      ctaHeading="Ready to Earn Your Alison Certificate?"
      ctaBody="Choose a course, start today, and complete it. Consistent, small steps lead to real career progress, and with Alison, the only thing standing between you and a certificate is the time you put in."
      ctaPrimaryLabel="Browse All Courses"
      ctaPrimaryHref="/categories"
      ctaSecondaryLabel="Search a Specific Topic"
      ctaSecondaryHref="/search"
    />
  );
}
