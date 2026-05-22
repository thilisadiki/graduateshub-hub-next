'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import SearchBar from '@/components/shared/SearchBar';
import { categories } from '@/data/categories';
import { featuredLinks, popularGuides } from '@/data/navigation';
import LinkPendingDot from '@/components/ui/LinkPendingDot';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesDropdownOpen, setIsCategoriesDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
    setIsCategoriesDropdownOpen(false);
  };

  return (
    <nav className="bg-[#FFF8F1] border-b border-[#D1C5B4] shadow-sm sticky top-0 z-50">
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
              className="flex items-center gap-1.5 hover:text-primary transition-colors py-2 text-sm font-semibold text-[#1F1B13] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
            >
              Explore <ChevronDown size={14} className={`transition-transform duration-200 ${isCategoriesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            <div className={`absolute top-full left-0 mt-0 w-[580px] bg-[#FFFFFF] border border-[#D1C5B4] shadow-xl rounded-xl overflow-hidden transition-all duration-200 origin-top-left ${isCategoriesDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
              <div className="grid grid-cols-2 divide-x divide-[#D1C5B4]">

                {/* Left: Guides and Roadmaps */}
                <div className="p-4 flex flex-col gap-1">
                  {featuredLinks.map(link => (
                    <Link key={link.href} href={link.href} className={`flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#FBF3EB] transition-colors mb-1`}>
                      <span className="text-sm font-bold text-[#1F1B13]">{link.label}</span>
                      <span className="text-xs bg-primary text-white px-1.5 py-0.5 rounded-full font-bold leading-none">{link.badge}</span>
                    </Link>
                  ))}
                  <p className="px-3 pt-1 pb-0.5 text-xs font-bold text-[#7C7061] uppercase tracking-wider">Popular Guides</p>
                  {popularGuides.slice(0, 6).map(guide => (
                    <Link key={guide.href} href={guide.href} className="px-3 py-1.5 hover:bg-[#FBF3EB] hover:text-primary rounded-md transition-colors block text-sm text-[#4F4639]">{guide.title}</Link>
                  ))}
                  <div className="mt-auto pt-2 border-t border-[#D1C5B4]">
                    <Link href="/guides" className="px-3 py-1.5 text-primary font-semibold hover:bg-[#FFDF9C]/40 rounded-md transition-colors block text-sm">
                      View All Guides →
                    </Link>
                  </div>
                </div>

                {/* Right: Browse by Subject */}
                <div className="p-4 flex flex-col gap-1 bg-[#FBF3EB]/50">
                  <p className="px-3 pt-1 pb-0.5 text-xs font-bold text-[#7C7061] uppercase tracking-wider mb-1">Browse by Subject</p>
                  {categories.map(cat => (
                    <Link
                      key={cat.id}
                      href={`/category/${cat.id}`}
                      className="flex items-center gap-3 px-3 py-2 hover:bg-[#FFFFFF] hover:text-primary rounded-lg transition-colors group"
                    >
                      <cat.icon size={16} className="text-[#7C7061] group-hover:text-primary transition-colors shrink-0" strokeWidth={1.75} />
                      <span className="text-sm text-[#4F4639] group-hover:text-primary transition-colors">{cat.name}</span>
                    </Link>
                  ))}
                  <div className="mt-auto pt-2 border-t border-[#D1C5B4]">
                    <Link href="/categories" className="px-3 py-1.5 text-primary font-semibold hover:bg-[#FFFFFF] rounded-md transition-colors block text-sm">
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
          <SearchBar variant="header" placeholder="What do you want to learn?" buttonColor="bg-primary hover:bg-[#5a4000]" />
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4 shrink-0">
          <div className="hidden md:flex items-center gap-4">
            <Link href="/blog" className="flex items-center text-sm font-semibold text-[#1F1B13] hover:text-primary transition-colors px-2">Blog<LinkPendingDot /></Link>
            <Link href="/about" className="flex items-center text-sm font-semibold text-[#1F1B13] hover:text-primary transition-colors px-2">About<LinkPendingDot /></Link>
            <Link
              href="/tools"
              className="flex items-center gap-1.5 text-sm font-bold text-primary bg-[#FFDF9C]/50 hover:bg-[#FFDF9C] px-3 py-1.5 rounded-full transition-colors border border-[#D1C5B4]"
            >
              <Sparkles size={14} className="text-primary" />
              AI Tools<LinkPendingDot />
            </Link>
            <Link
              href="/search"
              className="flex items-center bg-[#FFF8F1] border-2 border-primary text-primary hover:bg-[#FFDF9C]/40 px-5 py-2 rounded-md font-bold text-sm transition-colors whitespace-nowrap"
            >
              Find a Course<LinkPendingDot />
            </Link>
          </div>

          <button onClick={toggleMobileMenu} className="md:hidden p-2 text-gray-600 flex items-center justify-center focus:outline-none" aria-label="Toggle navigation menu">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="sm:hidden px-4 pb-3">
        <SearchBar variant="header" placeholder="Search courses..." buttonColor="bg-primary hover:bg-[#5a4000]" />
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-[#FFF8F1] border-b border-[#D1C5B4] shadow-xl transition-all duration-300 ease-in-out flex flex-col px-6 overflow-y-auto ${isMobileMenuOpen ? 'max-h-[85vh] py-6 opacity-100' : 'max-h-0 py-0 opacity-0 pointer-events-none'}`}>
        <Link href="/" onClick={toggleMobileMenu} className="font-semibold text-[#1F1B13] hover:text-primary py-3 border-b border-[#D1C5B4]">Home</Link>
        {featuredLinks.map(link => (
          <Link key={link.href} href={link.href} onClick={toggleMobileMenu} className="font-bold text-primary hover:text-[#5a4000] py-3 border-b border-[#D1C5B4] flex items-center gap-2">
            {link.label} <span className="text-xs bg-primary text-white px-1.5 py-0.5 rounded-full">{link.badge}</span>
          </Link>
        ))}
        <div className="py-3 text-[#7C7061] font-bold text-xs uppercase tracking-wider mt-2">Popular Guides</div>
        <div className="grid grid-cols-1 gap-1 pl-2 border-l-2 border-[#FFDF9C] mb-4">
          {popularGuides.slice(0, 6).map(guide => (
            <Link key={guide.href} href={guide.href} onClick={toggleMobileMenu} className="font-medium text-sm text-[#4F4639] hover:text-primary py-2.5">{guide.title}</Link>
          ))}
        </div>
        <div className="py-3 text-[#7C7061] font-bold text-xs uppercase tracking-wider mt-2">Explore Subject Areas</div>
        <div className="grid grid-cols-1 gap-1 pl-2 border-l-2 border-[#FFDF9C] mb-4">
          {categories.map(cat => (
            <Link key={cat.id} href={`/category/${cat.id}`} onClick={toggleMobileMenu} className="font-medium text-sm text-[#4F4639] hover:text-primary py-2.5">
              {cat.name}
            </Link>
          ))}
          <Link href="/categories" onClick={toggleMobileMenu} className="font-semibold text-sm text-primary py-2.5">View All Categories →</Link>
        </div>
        <Link href="/blog" onClick={toggleMobileMenu} className="font-semibold text-[#1F1B13] hover:text-primary py-3 border-t border-[#D1C5B4]">Blog</Link>
        <Link href="/about" onClick={toggleMobileMenu} className="font-semibold text-[#1F1B13] hover:text-primary py-3 border-t border-[#D1C5B4]">About Us</Link>
        <Link
          href="/tools"
          onClick={toggleMobileMenu}
          className="flex items-center gap-2 font-bold text-primary bg-[#FFDF9C]/50 py-3 px-4 rounded-lg border border-[#D1C5B4] transition-colors"
        >
          <Sparkles size={16} className="text-primary" /> AI Career Tools - 7 Free Tools
        </Link>
        <div className="flex flex-col gap-3 pt-6 pb-2">
          <Link href="/search" onClick={toggleMobileMenu}
            className="flex items-center justify-center bg-primary hover:bg-[#5a4000] text-white px-5 py-3 rounded-md font-bold transition-colors w-full">
            Find a Course<LinkPendingDot />
          </Link>
        </div>
      </div>

    </nav>
  );
}
