'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import SearchBar from './SearchBar';
import AIRecommendationModal from './AIRecommendationModal';
import { categories } from '@/data/categories';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesDropdownOpen, setIsCategoriesDropdownOpen] = useState(false);
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);

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

            <div className={`absolute top-full left-0 mt-0 w-64 bg-white border border-gray-100 shadow-xl rounded-lg overflow-hidden transition-all duration-200 origin-top-left ${isCategoriesDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
              <div className="p-2 grid gap-1">
                {categories.map(cat => (
                  <Link key={cat.id} href={`/category/${cat.id}`} className="px-4 py-2 hover:bg-blue-50 hover:text-primary rounded-md transition-colors block text-sm font-medium text-gray-700">
                    {cat.name}
                  </Link>
                ))}
                <div className="border-t border-gray-100 mt-2 pt-2">
                  <Link href="/categories" className="px-4 py-2 text-primary font-semibold hover:bg-blue-50 rounded-md transition-colors block text-center text-sm">
                    View All Subjects →
                  </Link>
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
            <a href="https://articles.graduateshub.co.za/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-gray-700 hover:text-primary transition-colors px-2">Articles</a>
            <Link href="/about" className="text-sm font-semibold text-gray-700 hover:text-primary transition-colors px-2">About</Link>
            <button
              onClick={() => setIsAIModalOpen(true)}
              className="flex items-center gap-1.5 text-sm font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 hover:text-indigo-700 px-3 py-1.5 rounded-full transition-colors border border-indigo-100 group"
            >
              <Sparkles size={14} className="text-yellow-500 group-hover:scale-110 transition-transform" />
              <span>Recommend Me</span>
            </button>
            <a
              href="https://alison.com/register?utm_source=alison_user&utm_medium=affiliates&utm_campaign=43098205"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-primary text-primary hover:bg-blue-50 px-5 py-2 rounded-md font-bold text-sm transition-colors whitespace-nowrap"
            >
              Join for Free
            </a>
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
        <div className="py-3 text-gray-400 font-bold text-xs uppercase tracking-wider mt-2">Explore Subject Areas</div>
        <div className="grid grid-cols-1 gap-1 pl-2 border-l-2 border-blue-100 mb-4">
          {categories.map(cat => (
            <Link key={cat.id} href={`/category/${cat.id}`} onClick={toggleMobileMenu} className="font-medium text-sm text-gray-600 hover:text-primary py-2.5">
              {cat.name}
            </Link>
          ))}
          <Link href="/categories" onClick={toggleMobileMenu} className="font-semibold text-sm text-primary py-2.5">View All Categories →</Link>
        </div>
        <a href="https://articles.graduateshub.co.za/" target="_blank" rel="noopener noreferrer" onClick={toggleMobileMenu} className="font-semibold text-gray-800 hover:text-primary py-3 border-t border-gray-100">Articles</a>
        <Link href="/about" onClick={toggleMobileMenu} className="font-semibold text-gray-800 hover:text-primary py-3 border-t border-gray-100">About Us</Link>
        <button
          onClick={() => { toggleMobileMenu(); setIsAIModalOpen(true); }}
          className="flex justify-center items-center gap-2 font-bold text-indigo-700 bg-indigo-50 py-3 mt-2 rounded-lg border border-indigo-100 transition-colors"
        >
          <Sparkles size={16} className="text-yellow-500" /> Recommend me a course
        </button>
        <div className="flex flex-col gap-3 pt-6 pb-2">
          <a href="https://alison.com/register?utm_source=alison_user&utm_medium=affiliates&utm_campaign=43098205" target="_blank" rel="noopener noreferrer" onClick={toggleMobileMenu}
            className="block text-center bg-primary hover:bg-blue-800 text-white px-5 py-3 rounded-md font-bold transition-colors w-full">
            Join for Free
          </a>
        </div>
      </div>

      <AIRecommendationModal isOpen={isAIModalOpen} onClose={() => setIsAIModalOpen(false)} />
    </nav>
  );
}
