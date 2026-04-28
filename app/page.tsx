'use client';
import React, { useState, useEffect } from 'react';

// Import Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Domain from './components/Domain';
import Features from './components/Features';
import Technologies from './components/Technologies';
import Milestones from './components/Milestones';
import Documents from './components/Documents';
import Team from './components/Team';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function NextStopPortfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery) return;

    const target = searchQuery.toLowerCase();
    const sections = ['home', 'domain', 'features', 'technologies', 'milestones', 'documents', 'team', 'contact'];
    const match = sections.find(s => s.includes(target) || target.includes(s));

    if (match) {
      document.getElementById(match)?.scrollIntoView({ behavior: 'smooth' });
      setSearchQuery('');
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    // Prevent the browser from restoring the previous scroll position on reload/revisit
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    // Force scroll to top on initial load
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const sections = ['home', 'domain', 'features', 'technologies', 'milestones', 'documents', 'team', 'contact'];

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F8FA] text-[#1F2937] selection:bg-[#FF6B35] selection:text-white overflow-x-hidden font-sans">
      <Navbar
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />
      
      <main>
        <Hero />
        <Domain />
        <Features />
        <Technologies />
        <Milestones />
        <Documents />
        <Team />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}