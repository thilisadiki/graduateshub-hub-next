'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, MapPin, Clock, BookOpen, GraduationCap, Building, Star } from 'lucide-react';
import CourseCarousel from '@/components/CourseCarousel';
import NewsletterBanner from '@/components/NewsletterBanner';
import LatestArticles from '@/components/LatestArticles';
import { formatCategoryName } from '@/utils/formatters';
import type { Course } from '@/types';

function AccordionItem({ title, isActive, onClick, children }: {
  title: string;
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  const id = `section-${title.replace(/\s+/g, '-')}`;
  return (
    <div id={id} className="border-t border-gray-100 first:border-t-0 scroll-mt-32">
      <button
        className="w-full py-5 flex justify-between items-center text-left hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg px-2 transition-colors group"
        onClick={onClick}
      >
        <h3 className="text-lg lg:text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">{title}</h3>
        <ChevronDown className={`text-primary transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isActive ? 'max-h-[2000px] opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
        <div className="px-2 pt-2">{children}</div>
      </div>
    </div>
  );
}

export default function CourseDetailsContent({ course, relatedCourses }: { course: Course; relatedCourses: Course[] }) {
  const [openSection, setOpenSection] = useState('Introduction');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [course.id]);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? '' : section);
  };

  const handleNavClick = (section: string) => {
    setOpenSection(section);
    setTimeout(() => {
      const id = `section-${section.replace(/\s+/g, '-')}`;
      const element = document.getElementById(id);
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 120;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 150);
  };

  const navItems = ['Introduction', 'Admissions', 'Program Outcomes', 'Career Opportunities', "Editor's Take", 'About the Provider', 'Questions']
    .filter(item => item !== "Editor's Take" || !!course.editorsTake);

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col font-sans">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4 text-sm text-gray-500 flex items-center flex-wrap gap-2">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="text-gray-300">›</span>
          <Link href="/categories" className="hover:text-primary transition-colors">Categories</Link>
          <span className="text-gray-300">›</span>
          <Link href={`/category/${course.category.toLowerCase().replace(/ /g, '-')}`} className="hover:text-primary transition-colors">{formatCategoryName(course.category)}</Link>
          <span className="text-gray-300">›</span>
          <span className="text-gray-900 font-medium truncate max-w-[200px] sm:max-w-xs md:max-w-md">{course.title}</span>
        </div>
      </div>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 w-full relative">
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-10 items-start">

          {/* Left Sticky Navigation */}
          <div className="hidden lg:block w-56 sticky top-28 shrink-0">
            <nav className="flex flex-col space-y-1 text-sm font-medium">
              {navItems.map(item => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`text-left px-4 py-3 rounded-xl transition-all duration-200 border-l-4 ${openSection === item
                    ? 'bg-blue-50/50 text-primary border-primary font-bold shadow-sm'
                    : 'border-transparent text-gray-600 hover:bg-white hover:border-gray-300'}`}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-grow w-full lg:w-[55%] xl:w-[60%] flex flex-col gap-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="h-56 sm:h-72 w-full relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-primary font-bold tracking-wider text-xs uppercase bg-blue-50 px-3 py-1 rounded-md border border-blue-100">
                    {course.subCategory || course.category}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] leading-[1.2]">{course.title}</h1>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8 py-6 border-y border-gray-100">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-1.5 text-gray-500"><Building size={16} /><span className="text-xs font-semibold uppercase tracking-wider">Provider</span></div>
                    <p className="font-bold text-gray-900 text-sm">Alison</p>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-1.5 text-gray-500"><MapPin size={16} /><span className="text-xs font-semibold uppercase tracking-wider">Format</span></div>
                    <p className="font-bold text-gray-900 text-sm">100% Online</p>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-1.5 text-gray-500"><GraduationCap size={16} /><span className="text-xs font-semibold uppercase tracking-wider">Level</span></div>
                    <p className="font-bold text-gray-900 text-sm">{course.tag || 'Certificate'}</p>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-1.5 text-gray-500"><Clock size={16} /><span className="text-xs font-semibold uppercase tracking-wider">Duration</span></div>
                    <p className="font-bold text-gray-900 text-sm">{course.duration}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary Box */}
            <div className="bg-[#EBF5FF] rounded-2xl p-6 sm:p-8 border border-blue-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5"><BookOpen size={120} /></div>
              <div className="relative z-10">
                <h2 className="text-lg font-bold text-[#1e3a8a] flex items-center gap-2 mb-3">
                  <span className="bg-white p-1.5 rounded-lg shadow-sm text-primary"><BookOpen size={18} /></span>
                  Course Overview
                </h2>
                <p className="text-[#1e40af] leading-relaxed text-[15px]">
                  {course.editorsTake ||
                    `Join thousands of learners worldwide in this highly rated online program. Completing this ${course.tag?.toLowerCase() || 'certificate'} opens the door to new career opportunities and helps you master the skills required to excel in ${course.subCategory || course.category}.`}
                </p>
              </div>
            </div>

            {/* Accordions */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6 lg:p-8">
              <AccordionItem title="Introduction" isActive={openSection === 'Introduction'} onClick={() => toggleSection('Introduction')}>
                <p className="text-gray-600 leading-relaxed text-[15px] mb-4 font-medium text-lg">{course.description}</p>
                <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                  {course.longDescription || 'This course has been curated to provide you with the most up-to-date and relevant information. It is structured to cater to both beginners and those looking to refresh their knowledge.'}
                </p>
                <ul className="list-none space-y-3 mt-4">
                  {['Self-paced learning, anytime and anywhere.', 'Accessible on any device (Desktop, Tablet, Mobile).', 'Interactive content designed for maximum retention.'].map(item => (
                    <li key={item} className="flex items-start text-gray-600 text-[15px]"><span className="text-primary mr-3 mt-0.5">•</span>{item}</li>
                  ))}
                </ul>
              </AccordionItem>

              <AccordionItem title="Admissions" isActive={openSection === 'Admissions'} onClick={() => toggleSection('Admissions')}>
                <h4 className="font-bold text-gray-900 mb-2 mt-2">Who Should Enrol?</h4>
                <p className="text-gray-600 text-[15px] mb-6 leading-relaxed">
                  {course.targetAudience || 'There are no formal entry requirements for this course. It is completely free to enrol and start learning immediately.'}
                </p>
                <h4 className="font-bold text-gray-900 mb-2">English Language Requirements</h4>
                <p className="text-gray-600 text-[15px] leading-relaxed">A basic proficiency in reading and understanding English is recommended to fully benefit from the material.</p>
              </AccordionItem>

              <AccordionItem title="Program Outcomes" isActive={openSection === 'Program Outcomes'} onClick={() => toggleSection('Program Outcomes')}>
                <p className="text-gray-600 text-[15px] mb-4 mt-2">Upon successful completion of this program, you will be able to:</p>
                <ul className="list-none space-y-3">
                  {(course.outcomes || [
                    `Demonstrate a comprehensive understanding of core concepts in ${course.category}.`,
                    'Apply practical methodologies to solve real-world problems.',
                    `Utilize industry-standard practices relevant to ${course.subCategory || 'your field'}.`,
                    'Enhance your professional portfolio with an internationally recognized achievement.',
                  ]).map((outcome, idx) => (
                    <li key={idx} className="flex items-start text-gray-600 text-[15px]"><span className="text-green-500 mr-3 mt-0.5">✓</span>{outcome}</li>
                  ))}
                </ul>
              </AccordionItem>

              <AccordionItem title="Career Opportunities" isActive={openSection === 'Career Opportunities'} onClick={() => toggleSection('Career Opportunities')}>
                <p className="text-gray-600 text-[15px] leading-relaxed mt-2">
                  {course.careerPath || `Earning this ${course.tag?.toLowerCase() || 'certificate'} can significantly improve your employability in various sectors. The skills acquired are highly sought after by employers globally.`}
                </p>
              </AccordionItem>

              {course.editorsTake && (
                <AccordionItem title="Editor's Take" isActive={openSection === "Editor's Take"} onClick={() => toggleSection("Editor's Take")}>
                  <div className="bg-orange-50 p-6 rounded-xl border border-orange-100 mt-2">
                    <h4 className="font-bold text-orange-900 mb-2 flex items-center gap-2"><Star className="text-orange-500 fill-current" size={18} />Why We Recommend This Course</h4>
                    <p className="text-orange-800 text-[15px] leading-relaxed italic">"{course.editorsTake}"</p>
                  </div>
                </AccordionItem>
              )}

              <AccordionItem title="About the Provider" isActive={openSection === 'About the Provider'} onClick={() => toggleSection('About the Provider')}>
                <div className="flex items-center gap-4 mb-5 mt-2">
                  <div className="bg-gray-50 border border-gray-100 p-3 rounded-xl shadow-sm"><Building className="text-primary" size={28} /></div>
                  <div><h4 className="font-bold text-gray-900 text-lg">Alison</h4><p className="text-sm text-gray-500 font-medium tracking-wide uppercase">Global Online Learning Platform</p></div>
                </div>
                <p className="text-gray-600 text-[15px] leading-relaxed">Alison is one of the world's largest free learning platforms for education and skills training, empowering millions of learners worldwide.</p>
              </AccordionItem>

              <AccordionItem title="Questions" isActive={openSection === 'Questions'} onClick={() => toggleSection('Questions')}>
                <div className="bg-[#F8FAFC] p-6 sm:p-8 rounded-xl border border-[#E2E8F0] mt-2 text-center">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Still have questions?</h4>
                  <p className="text-gray-600 text-[15px] mb-6">Our support team is here to help you make the right choice for your career development.</p>
                  <Link href="/contact" className="inline-block bg-white border-2 border-primary text-primary font-bold px-8 py-2.5 rounded-lg hover:bg-blue-50 transition-colors shadow-sm">Contact Support</Link>
                </div>
              </AccordionItem>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-80 shrink-0 sticky top-28">
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 sm:p-8 overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-blue-400"></div>
              <h3 className="text-center font-extrabold text-[#111827] text-2xl mb-2 mt-2">Enquire / Apply</h3>
              <p className="text-center text-gray-500 text-[15px] mb-8">Takes less than a minute.</p>
              <div className="space-y-3 mb-8">
                {['100% Free Access', 'Self-Paced Learning', 'CPD Accreditation'].map(item => (
                  <div key={item} className="flex items-center text-[15px] font-medium text-gray-700 bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                    <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 border border-green-200">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    {item}
                  </div>
                ))}
              </div>
              <a
                href={course.affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center w-full bg-primary hover:bg-[#1d4ed8] text-white text-center font-bold text-lg py-4 rounded-xl shadow-[0_5px_15px_rgba(37,99,235,0.3)] hover:shadow-[0_8px_20px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 transition-all duration-300"
              >
                Enrol Now
              </a>
              <p className="text-[13px] text-center text-gray-500 mt-5 leading-relaxed">
                By clicking Enrol Now, you will be redirected to our partner platform, <strong className="font-bold text-gray-700">Alison</strong>, to complete your registration securely.
              </p>
            </div>
          </div>
        </div>
      </main>

      {relatedCourses.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-100 w-full overflow-hidden">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8">You might also like...</h2>
          <CourseCarousel courses={relatedCourses} />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-100 w-full overflow-hidden bg-[#FAFAFA]">
        <LatestArticles searchQuery={course.category} customTitle={`Articles on ${course.category}`} customSubtitle={`Explore our latest guides, news, and tips related to ${course.category}.`} />
      </div>

      <div className="mt-8 border-t border-gray-100"><NewsletterBanner /></div>
    </div>
  );
}
