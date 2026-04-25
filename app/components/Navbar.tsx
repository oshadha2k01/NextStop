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
    <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 shrink-0">
          <NextImage src="/logo.png" alt="NextStop Logo" width={80} height={80} className="object-contain w-12 h-12 sm:w-16 sm:h-16" />
          <span className="font-extrabold text-2xl sm:text-3xl text-[#FF6B35] tracking-tight">NextStop</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6 text-sm font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`transition-all duration-300 pb-1 border-b-2 ${activeSection === link.id
                  ? 'text-[#FF6B35] border-[#FF6B35]'
                  : 'text-gray-600 border-transparent hover:text-[#FF6B35]'
                  }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="relative group">
            <div className="flex items-center bg-[#F7F8FA] rounded-full pl-4 pr-1 py-1 border border-gray-200 focus-within:border-[#FF6B35] focus-within:bg-white transition-all w-48 lg:w-64">
              <input
                type="text"
                placeholder="Search sections..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none focus:ring-0 text-sm w-full text-gray-700 placeholder-[#FF6B35]/60"
              />
              <button
                type="submit"
                className="bg-[#FF6B35] text-white p-1.5 rounded-full hover:bg-[#E6521F] transition-all flex items-center justify-center shrink-0"
              >
                <Search size={16} />
              </button>
            </div>
          </form>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-[#FF6B35] transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`md:hidden absolute w-full bg-white border-b border-gray-200 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-4">
          <form onSubmit={handleSearch} className="relative">
            <div className="flex items-center bg-[#F7F8FA] rounded-full pl-4 pr-1 py-1 border border-gray-200 focus-within:border-[#FF6B35] focus-within:bg-white transition-all w-full">
              <input
                type="text"
                placeholder="Search sections..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none focus:ring-0 text-sm w-full text-gray-700 placeholder-[#FF6B35]/60"
              />
              <button
                type="submit"
                className="bg-[#FF6B35] text-white p-1.5 rounded-full hover:bg-[#E6521F] transition-all flex items-center justify-center shrink-0"
              >
                <Search size={16} />
              </button>
            </div>
          </form>

          <div className="flex flex-col space-y-3 px-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-semibold transition-colors ${activeSection === link.id ? 'text-[#FF6B35]' : 'text-gray-600 hover:text-[#FF6B35]'}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
