'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Sparkles, Building2, ShieldCheck, Mail, MessageSquare, Info, FileText, Lock, Award } from 'lucide-react';
import { categories } from '@/data/categories';
import { featuredLinks, popularGuides } from '@/data/navigation';
import LinkPendingDot from '@/components/ui/LinkPendingDot';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesDropdownOpen, setIsCategoriesDropdownOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
    setIsCategoriesDropdownOpen(false);
    setIsCompanyDropdownOpen(false);
  };

  const companyLinks = [
    { href: '/about', label: 'About Us', desc: 'Our mission, story & co-founders', icon: Info },
    { href: '/contact', label: 'Contact Us', desc: 'Get in touch with our team', icon: Mail },
    { href: '/feedback', label: 'Give Feedback', desc: 'Help us improve Graduates Hub', icon: MessageSquare },
    { href: '/curation-policy', label: 'Curation Policy', desc: 'Our 5-point editorial quality checklist', icon: ShieldCheck },
    { href: '/terms-of-service', label: 'Terms of Service', desc: 'Platform terms & AI disclaimers', icon: FileText },
    { href: '/privacy-policy', label: 'Privacy Policy', desc: 'POPIA & GDPR compliance disclosures', icon: Lock },
    { href: '/disclosure', label: 'Affiliate Disclosure', desc: 'Partner transparency & link policy', icon: Award },
  ];

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
                  <p className="px-3 pt-1 pb-0.5 text-xs font-bold text-[#7C7061] uppercase tracking-wider">Course &amp; Certification Guides</p>
                  {popularGuides.slice(0, 6).map(guide => (
                    <Link key={guide.href} href={guide.href} className="px-3 py-1.5 hover:bg-[#FBF3EB] hover:text-primary rounded-md transition-colors block text-sm text-[#4F4639]">{guide.title}</Link>
                  ))}
                  <div className="mt-auto pt-2 border-t border-[#D1C5B4]">
                    <Link href="/guides" className="px-3 py-1.5 text-primary font-semibold hover:bg-[#FFDF9C]/40 rounded-md transition-colors block text-sm">
                      View All Course Guides →
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

        {/* Right Actions */}
        <div className="flex items-center gap-4 shrink-0 ml-auto">
          <div className="hidden md:flex items-center gap-4">
            <Link href="/blog" className="flex items-center text-sm font-semibold text-[#1F1B13] hover:text-primary transition-colors px-2">Articles &amp; Advice<LinkPendingDot /></Link>
            <Link
              href="/free-ai-career-tools"
              className="flex items-center gap-1.5 text-sm font-bold text-primary bg-[#FFDF9C]/50 hover:bg-[#FFDF9C] px-3 py-1.5 rounded-full transition-colors border border-[#D1C5B4]"
            >
              <Sparkles size={14} className="text-primary" />
              AI Tools<LinkPendingDot />
            </Link>
            <Link
              href="/career-roadmaps"
              className="flex items-center bg-[#FFF8F1] border-2 border-primary text-primary hover:bg-[#FFDF9C]/40 px-5 py-2 rounded-md font-bold text-sm transition-colors whitespace-nowrap"
            >
              Career Roadmaps<LinkPendingDot />
            </Link>

            {/* Company & Legal Dropdown (Last Menu Item) */}
            <div
              className="relative group cursor-pointer"
              onMouseEnter={() => setIsCompanyDropdownOpen(true)}
              onMouseLeave={() => setIsCompanyDropdownOpen(false)}
              onFocus={() => setIsCompanyDropdownOpen(true)}
              onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget as Node)) setIsCompanyDropdownOpen(false); }}
              onKeyDown={e => { if (e.key === 'Escape') setIsCompanyDropdownOpen(false); }}
            >
              <button
                type="button"
                aria-expanded={isCompanyDropdownOpen}
                aria-haspopup="true"
                onClick={() => setIsCompanyDropdownOpen(prev => !prev)}
                className="flex items-center gap-1.5 hover:text-primary transition-colors py-2 text-sm font-semibold text-[#1F1B13] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-2"
              >
                Company &amp; Legal <ChevronDown size={14} className={`transition-transform duration-200 ${isCompanyDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <div className={`absolute top-full right-0 mt-0 w-[320px] bg-[#FFFFFF] border border-[#D1C5B4] shadow-xl rounded-xl overflow-hidden transition-all duration-200 origin-top-right p-2 flex flex-col gap-1 ${isCompanyDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                {companyLinks.map(item => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-start gap-3 p-2.5 hover:bg-[#FBF3EB] rounded-lg transition-colors group"
                  >
                    <item.icon size={18} className="text-primary mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-sm font-bold text-[#1F1B13] group-hover:text-primary transition-colors">{item.label}</div>
                      <div className="text-xs text-[#7C7061]">{item.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <button onClick={toggleMobileMenu} className="md:hidden p-2 text-gray-600 flex items-center justify-center focus:outline-none" aria-label="Toggle navigation menu">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-[#FFF8F1] border-b border-[#D1C5B4] shadow-xl transition-all duration-300 ease-in-out flex flex-col px-6 overflow-y-auto ${isMobileMenuOpen ? 'max-h-[85vh] py-6 opacity-100' : 'max-h-0 py-0 opacity-0 pointer-events-none'}`}>
        <Link href="/" onClick={toggleMobileMenu} className="font-semibold text-[#1F1B13] hover:text-primary py-3 border-b border-[#D1C5B4]">Home</Link>
        {featuredLinks.map(link => (
          <Link key={link.href} href={link.href} onClick={toggleMobileMenu} className="font-bold text-primary hover:text-[#5a4000] py-3 border-b border-[#D1C5B4] flex items-center gap-2">
            {link.label} <span className="text-xs bg-primary text-white px-1.5 py-0.5 rounded-full">{link.badge}</span>
          </Link>
        ))}
        <div className="py-3 text-[#7C7061] font-bold text-xs uppercase tracking-wider mt-2">Course &amp; Certification Guides</div>
        <div className="grid grid-cols-1 gap-1 pl-2 border-l-2 border-[#FFDF9C] mb-4">
          {popularGuides.slice(0, 6).map(guide => (
            <Link key={guide.href} href={guide.href} onClick={toggleMobileMenu} className="font-medium text-sm text-[#4F4639] hover:text-primary py-2.5">{guide.title}</Link>
          ))}
        </div>
        <Link href="/blog" onClick={toggleMobileMenu} className="font-semibold text-[#1F1B13] hover:text-primary py-3 border-t border-[#D1C5B4]">Articles &amp; Advice</Link>

        <Link
          href="/free-ai-career-tools"
          onClick={toggleMobileMenu}
          className="flex items-center gap-2 font-bold text-primary bg-[#FFDF9C]/50 py-3 px-4 rounded-lg border border-[#D1C5B4] transition-colors mt-2"
        >
          <Sparkles size={16} className="text-primary" /> AI Career Tools - 7 Free Tools
        </Link>
        <div className="flex flex-col gap-3 pt-3 pb-2">
          <Link href="/career-roadmaps" onClick={toggleMobileMenu}
            className="flex items-center justify-center bg-primary hover:bg-[#5a4000] text-white px-5 py-3 rounded-md font-bold transition-colors w-full">
            Career Roadmaps<LinkPendingDot />
          </Link>
        </div>

        {/* Mobile Company & Legal Accordion (Last Section) */}
        <div className="py-3 text-[#7C7061] font-bold text-xs uppercase tracking-wider mt-2 border-t border-[#D1C5B4]">Company &amp; Legal</div>
        <div className="grid grid-cols-1 gap-1 pl-2 border-l-2 border-[#FFDF9C] mb-4">
          {companyLinks.map(item => (
            <Link key={item.href} href={item.href} onClick={toggleMobileMenu} className="font-medium text-sm text-[#4F4639] hover:text-primary py-2 flex items-center gap-2">
              <item.icon size={15} className="text-primary shrink-0" />
              {item.label}
            </Link>
          ))}
        </div>
      </div>

    </nav>
  );
}
