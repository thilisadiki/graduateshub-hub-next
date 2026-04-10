'use client';
import { useState, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Sparkles, Map, TrendingUp } from 'lucide-react';
import SearchBar from './SearchBar';
import AIRecommendationModal from './AIRecommendationModal';
import LearningPathModal from './LearningPathModal';
import SkillsGapModal from './SkillsGapModal';
import { categories } from '@/data/categories';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesDropdownOpen, setIsCategoriesDropdownOpen] = useState(false);
  const [isAIDropdownOpen, setIsAIDropdownOpen] = useState(false);
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);
  const [isLearningPathOpen, setIsLearningPathOpen] = useState(false);
  const [isSkillsGapOpen, setIsSkillsGapOpen] = useState(false);
  const aiCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openAIDropdown = () => {
    if (aiCloseTimer.current) clearTimeout(aiCloseTimer.current);
    setIsAIDropdownOpen(true);
  };
  const closeAIDropdown = () => {
    aiCloseTimer.current = setTimeout(() => setIsAIDropdownOpen(false), 150);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
    setIsCategoriesDropdownOpen(false);
  };

  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center gap-4 md:gap-8 relative">

        {/* Logo & Explore */}
        <div className="flex items-center gap-6 lg:gap-8 shrink-0">
          <Link href="/" className="text-2xl font-extrabold text-primary flex items-center tracking-tight">
            Graduates<span className="text-gray-900">Hub</span>
          </Link>

          <div
            className="hidden md:block relative group cursor-pointer"
            onMouseEnter={() => setIsCategoriesDropdownOpen(true)}
            onMouseLeave={() => setIsCategoriesDropdownOpen(false)}
            onFocus={() => setIsCategoriesDropdownOpen(true)}
            onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget as Node)) setIsCategoriesDropdownOpen(false); }}
            onKeyDown={e => { if (e.key === 'Escape') setIsCategoriesDropdownOpen(false); }}
          >
            <button
              type="button"
              aria-expanded={isCategoriesDropdownOpen}
              aria-haspopup="true"
              onClick={() => setIsCategoriesDropdownOpen(prev => !prev)}
              className="flex items-center gap-1.5 hover:text-primary transition-colors py-2 text-sm font-semibold text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
            >
              Explore <ChevronDown size={14} className={`transition-transform duration-200 ${isCategoriesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            <div className={`absolute top-full left-0 mt-0 w-[580px] bg-white border border-gray-100 shadow-xl rounded-xl overflow-hidden transition-all duration-200 origin-top-left ${isCategoriesDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
              <div className="grid grid-cols-2 divide-x divide-gray-100">

                {/* Left — Guides & Roadmaps */}
                <div className="p-4 flex flex-col gap-1">
                  <Link href="/career-roadmaps" className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors mb-1">
                    <span className="text-sm font-bold text-primary">Career Roadmaps</span>
                    <span className="text-xs bg-primary text-white px-1.5 py-0.5 rounded-full font-bold leading-none">New</span>
                  </Link>
                  <p className="px-3 pt-1 pb-0.5 text-xs font-bold text-gray-400 uppercase tracking-wider">Popular Guides</p>
                  <Link href="/free-courses-for-beginners" className="px-3 py-1.5 hover:bg-gray-50 hover:text-primary rounded-md transition-colors block text-sm text-gray-700">Free Courses for Beginners</Link>
                  <Link href="/free-courses-with-certificates" className="px-3 py-1.5 hover:bg-gray-50 hover:text-primary rounded-md transition-colors block text-sm text-gray-700">Free Courses with Certificates</Link>
                  <Link href="/best-alison-courses-with-certificates" className="px-3 py-1.5 hover:bg-gray-50 hover:text-primary rounded-md transition-colors block text-sm text-gray-700">Best Alison Courses</Link>
                  <Link href="/free-courses-for-data-analysts" className="px-3 py-1.5 hover:bg-gray-50 hover:text-primary rounded-md transition-colors block text-sm text-gray-700">Free Courses for Data Analysts</Link>
                  <Link href="/free-ai-courses-for-beginners" className="px-3 py-1.5 hover:bg-gray-50 hover:text-primary rounded-md transition-colors block text-sm text-gray-700">Free AI Courses for Beginners</Link>
                  <Link href="/free-digital-marketing-courses" className="px-3 py-1.5 hover:bg-gray-50 hover:text-primary rounded-md transition-colors block text-sm text-gray-700">Free Digital Marketing Courses</Link>
                  <Link href="/free-courses-for-software-developers" className="px-3 py-1.5 hover:bg-gray-50 hover:text-primary rounded-md transition-colors block text-sm text-gray-700">Free Courses for Software Developers</Link>
                  <Link href="/free-courses-for-accounting-and-finance" className="px-3 py-1.5 hover:bg-gray-50 hover:text-primary rounded-md transition-colors block text-sm text-gray-700">Free Courses for Accounting & Finance</Link>
                  <Link href="/free-business-courses" className="px-3 py-1.5 hover:bg-gray-50 hover:text-primary rounded-md transition-colors block text-sm text-gray-700">Free Business Courses</Link>
                  <div className="mt-auto pt-2 border-t border-gray-100">
                    <Link href="/guides" className="px-3 py-1.5 text-primary font-semibold hover:bg-blue-50 rounded-md transition-colors block text-sm">
                      View All Guides →
                    </Link>
                  </div>
                </div>

                {/* Right — Browse by Subject */}
                <div className="p-4 flex flex-col gap-1 bg-gray-50/50">
                  <p className="px-3 pt-1 pb-0.5 text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Browse by Subject</p>
                  {categories.map(cat => (
                    <Link
                      key={cat.id}
                      href={`/category/${cat.id}`}
                      className="flex items-center gap-3 px-3 py-2 hover:bg-white hover:text-primary rounded-lg transition-colors group"
                    >
                      <cat.icon size={16} className="text-gray-400 group-hover:text-primary transition-colors shrink-0" strokeWidth={1.75} />
                      <span className="text-sm text-gray-700 group-hover:text-primary transition-colors">{cat.name}</span>
                    </Link>
                  ))}
                  <div className="mt-auto pt-2 border-t border-gray-200">
                    <Link href="/categories" className="px-3 py-1.5 text-primary font-semibold hover:bg-white rounded-md transition-colors block text-sm">
                      View All Subjects →
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden sm:flex flex-grow w-full max-w-2xl">
          <SearchBar variant="header" placeholder="What do you want to learn?" buttonColor="bg-primary hover:bg-blue-800" />
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4 shrink-0">
          <div className="hidden md:flex items-center gap-4">
            <Link href="/blog" className="text-sm font-semibold text-gray-700 hover:text-primary transition-colors px-2">Blog</Link>
            <Link href="/about" className="text-sm font-semibold text-gray-700 hover:text-primary transition-colors px-2">About</Link>

            {/* AI Tools Dropdown */}
            <div
              className="relative"
              onMouseEnter={openAIDropdown}
              onMouseLeave={closeAIDropdown}
            >
              <button
                onClick={() => setIsAIDropdownOpen(prev => !prev)}
                className="flex items-center gap-1.5 text-sm font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 hover:text-indigo-700 px-3 py-1.5 rounded-full transition-colors border border-indigo-100 group"
              >
                <Sparkles size={14} className="text-yellow-500 group-hover:scale-110 transition-transform" />
                <span>AI Tools</span>
                <ChevronDown size={13} className={`transition-transform duration-200 ${isAIDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`absolute top-full right-0 mt-1 w-64 bg-white border border-gray-100 shadow-xl rounded-xl overflow-hidden transition-all duration-200 origin-top-right ${isAIDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                <div className="p-2 flex flex-col gap-1">
                  <button onClick={() => { setIsAIModalOpen(true); setIsAIDropdownOpen(false); }} className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-indigo-50 transition-colors text-left w-full">
                    <Sparkles size={18} className="text-indigo-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-gray-800">Course Recommender</p>
                      <p className="text-xs text-gray-500">Get personalised course matches</p>
                    </div>
                  </button>
                  <button onClick={() => { setIsLearningPathOpen(true); setIsAIDropdownOpen(false); }} className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-blue-50 transition-colors text-left w-full">
                    <Map size={18} className="text-blue-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-gray-800">Learning Path</p>
                      <p className="text-xs text-gray-500">Build a step-by-step roadmap</p>
                    </div>
                  </button>
                  <button onClick={() => { setIsSkillsGapOpen(true); setIsAIDropdownOpen(false); }} className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-emerald-50 transition-colors text-left w-full">
                    <TrendingUp size={18} className="text-emerald-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-gray-800">Skills Gap Analyzer</p>
                      <p className="text-xs text-gray-500">Find what skills you're missing</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <Link
              href="/search"
              className="bg-white border-2 border-primary text-primary hover:bg-blue-50 px-5 py-2 rounded-md font-bold text-sm transition-colors whitespace-nowrap"
            >
              Find a Course
            </Link>
          </div>

          <button onClick={toggleMobileMenu} className="md:hidden p-2 text-gray-600 flex items-center justify-center focus:outline-none" aria-label="Toggle navigation menu">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="sm:hidden px-4 pb-3">
        <SearchBar variant="header" placeholder="Search courses..." buttonColor="bg-primary hover:bg-blue-800" />
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white border-b border-gray-100 shadow-xl transition-all duration-300 ease-in-out flex flex-col px-6 overflow-y-auto ${isMobileMenuOpen ? 'max-h-[85vh] py-6 opacity-100' : 'max-h-0 py-0 opacity-0 pointer-events-none'}`}>
        <Link href="/" onClick={toggleMobileMenu} className="font-semibold text-gray-800 hover:text-primary py-3 border-b border-gray-100">Home</Link>
        <Link href="/career-roadmaps" onClick={toggleMobileMenu} className="font-bold text-primary hover:text-blue-800 py-3 border-b border-gray-100 flex items-center gap-2">
          Career Roadmaps <span className="text-xs bg-primary text-white px-1.5 py-0.5 rounded-full">New</span>
        </Link>
        <div className="py-3 text-gray-400 font-bold text-xs uppercase tracking-wider mt-2">Popular Guides</div>
        <div className="grid grid-cols-1 gap-1 pl-2 border-l-2 border-blue-100 mb-4">
          <Link href="/free-courses-for-beginners" onClick={toggleMobileMenu} className="font-medium text-sm text-gray-600 hover:text-primary py-2.5">Free Courses for Beginners</Link>
          <Link href="/free-courses-with-certificates" onClick={toggleMobileMenu} className="font-medium text-sm text-gray-600 hover:text-primary py-2.5">Free Courses with Certificates</Link>
          <Link href="/best-alison-courses-with-certificates" onClick={toggleMobileMenu} className="font-medium text-sm text-gray-600 hover:text-primary py-2.5">Best Alison Courses</Link>
          <Link href="/free-courses-for-data-analysts" onClick={toggleMobileMenu} className="font-medium text-sm text-gray-600 hover:text-primary py-2.5">Free Courses for Data Analysts</Link>
          <Link href="/free-ai-courses-for-beginners" onClick={toggleMobileMenu} className="font-medium text-sm text-gray-600 hover:text-primary py-2.5">Free AI Courses for Beginners</Link>
          <Link href="/free-digital-marketing-courses" onClick={toggleMobileMenu} className="font-medium text-sm text-gray-600 hover:text-primary py-2.5">Free Digital Marketing Courses</Link>
          <Link href="/free-courses-for-software-developers" onClick={toggleMobileMenu} className="font-medium text-sm text-gray-600 hover:text-primary py-2.5">Free Courses for Software Developers</Link>
          <Link href="/free-courses-for-accounting-and-finance" onClick={toggleMobileMenu} className="font-medium text-sm text-gray-600 hover:text-primary py-2.5">Free Courses for Accounting & Finance</Link>
          <Link href="/free-business-courses" onClick={toggleMobileMenu} className="font-medium text-sm text-gray-600 hover:text-primary py-2.5">Free Business Courses</Link>
        </div>
        <div className="py-3 text-gray-400 font-bold text-xs uppercase tracking-wider mt-2">Explore Subject Areas</div>
        <div className="grid grid-cols-1 gap-1 pl-2 border-l-2 border-blue-100 mb-4">
          {categories.map(cat => (
            <Link key={cat.id} href={`/category/${cat.id}`} onClick={toggleMobileMenu} className="font-medium text-sm text-gray-600 hover:text-primary py-2.5">
              {cat.name}
            </Link>
          ))}
          <Link href="/categories" onClick={toggleMobileMenu} className="font-semibold text-sm text-primary py-2.5">View All Categories →</Link>
        </div>
        <Link href="/blog" onClick={toggleMobileMenu} className="font-semibold text-gray-800 hover:text-primary py-3 border-t border-gray-100">Blog</Link>
        <Link href="/about" onClick={toggleMobileMenu} className="font-semibold text-gray-800 hover:text-primary py-3 border-t border-gray-100">About Us</Link>
        <div className="py-3 text-gray-400 font-bold text-xs uppercase tracking-wider mt-2">AI Tools</div>
        <div className="flex flex-col gap-2">
          <button onClick={() => { toggleMobileMenu(); setIsAIModalOpen(true); }} className="flex items-center gap-2 font-bold text-indigo-700 bg-indigo-50 py-3 px-4 rounded-lg border border-indigo-100 transition-colors">
            <Sparkles size={16} className="text-yellow-500" /> Course Recommender
          </button>
          <button onClick={() => { toggleMobileMenu(); setIsLearningPathOpen(true); }} className="flex items-center gap-2 font-bold text-blue-700 bg-blue-50 py-3 px-4 rounded-lg border border-blue-100 transition-colors">
            <Map size={16} className="text-blue-500" /> Learning Path Generator
          </button>
          <button onClick={() => { toggleMobileMenu(); setIsSkillsGapOpen(true); }} className="flex items-center gap-2 font-bold text-emerald-700 bg-emerald-50 py-3 px-4 rounded-lg border border-emerald-100 transition-colors">
            <TrendingUp size={16} className="text-emerald-500" /> Skills Gap Analyzer
          </button>
        </div>
        <div className="flex flex-col gap-3 pt-6 pb-2">
          <Link href="/search" onClick={toggleMobileMenu}
            className="block text-center bg-primary hover:bg-blue-800 text-white px-5 py-3 rounded-md font-bold transition-colors w-full">
            Find a Course
          </Link>
        </div>
      </div>

      <AIRecommendationModal isOpen={isAIModalOpen} onClose={() => setIsAIModalOpen(false)} />
      <LearningPathModal isOpen={isLearningPathOpen} onClose={() => setIsLearningPathOpen(false)} />
      <SkillsGapModal isOpen={isSkillsGapOpen} onClose={() => setIsSkillsGapOpen(false)} />
    </nav>
  );
}
