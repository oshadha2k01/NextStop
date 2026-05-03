'use client';
import React from 'react';
import NextImage from 'next/image';
import { Search, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleSearch: (e: React.FormEvent) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  isMenuOpen,
  setIsMenuOpen,
  searchQuery,
  setSearchQuery,
  handleSearch
}) => {
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'domain', label: 'Domain' },
    { id: 'features', label: 'Features' },
    { id: 'technologies', label: 'Technologies' },
    { id: 'milestones', label: 'Milestones' },
    { id: 'documents', label: 'Resources' },
    { id: 'team', label: 'Team' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo & Title */}
        <div className="flex items-center gap-3">
          <NextImage src="/logo.png" alt="NextStop Logo" width={80} height={80} className="object-contain w-14 h-14 sm:w-20 sm:h-20" />
          <span className="font-bold text-2xl text-[#FF6B35] tracking-tight">NextStop</span>
        </div>

        {/* Navigation & Search - Matching TripMate layout */}
        <div className="hidden lg:flex items-center gap-12">
          <div className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative text-[15px] font-medium transition-all duration-300 pb-2 border-b-2 cursor-pointer ${activeSection === link.id
                    ? 'text-[#FF6B35] border-[#FF6B35]'
                    : 'text-[#1F2937] border-transparent hover:text-[#FF6B35]'
                  }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white border border-gray-200 rounded-full px-5 py-2 text-sm w-56 focus:outline-none focus:border-[#FF6B35] transition-all placeholder-gray-400 shadow-inner"
              />
            </div>
            <button
              onClick={(e) => handleSearch(e as any)}
              className="bg-[#FF6B35] text-white p-2.5 rounded-full hover:bg-[#E6521F] transition-all flex items-center justify-center shrink-0 shadow-md active:scale-95 cursor-pointer"
            >
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-[#FF6B35] cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`lg:hidden absolute w-full bg-white border-b border-gray-100 shadow-xl transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 py-8 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsMenuOpen(false)}
                className={`text-lg font-semibold transition-colors cursor-pointer ${activeSection === link.id ? 'text-[#FF6B35]' : 'text-gray-600'
                  }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3 pt-6 border-t border-gray-50">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-gray-50 border-none rounded-full px-5 py-3 text-sm w-full focus:ring-2 focus:ring-[#FF6B35]"
            />
            <button
              onClick={(e) => handleSearch(e as any)}
              className="bg-[#FF6B35] text-white p-3 rounded-full shadow-lg cursor-pointer"
            >
              <Search size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
