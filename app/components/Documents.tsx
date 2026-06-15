import React, { useState } from 'react';
import { FileText, Download, Presentation, BookOpen } from 'lucide-react';

// Custom SVG-based Github Icon to match Lucide style
const GithubIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Documents = () => {
  const [activeTab, setActiveTab] = useState<'research' | 'docs' | 'slides' | 'code'>('docs');

  const projectDocs = [
    { title: 'Project Charter', path: '/documents/charter.pdf' },
    { title: 'Proposal Document', path: '/documents/proposal.pdf' },
    { title: 'Check List Documents', path: '/documents/checklist.pdf' },
    { title: 'Final Documentation', path: '#' }
  ];

  const presentations = [
    { title: 'Proposal Presentation', path: '/presentation/proposal.pdf' },
    { title: 'Progress Presentation-1', path: '/presentation/pp1.pdf' },
    { title: 'Progress Presentation-2', path: '/presentation/pp2.pdf' },
    { title: 'Final Presentation', path: '/presentation/final.pdf' }
  ];

  const researchDocs = [
    { title: 'Research Paper', path: '/research/rp.pdf' }
  ];

  const sourceCodes = [
    { title: 'Main Core of the Research Project', path: 'https://github.com/oshadha2k01/NextStop-Research-backend' },
    { title: 'Passenger Mobile Application', path: 'https://github.com/oshadha2k01/NextStop-Research-App' },
    { title: 'Real-Time Bus Driver Mobile Application', path: 'https://github.com/oshadha2k01/NextStop-DriverApp' }
  ];

  const currentItems =
    activeTab === 'research' ? researchDocs :
      (activeTab === 'docs' ? projectDocs :
        (activeTab === 'slides' ? presentations : sourceCodes));

  return (
    <section id="documents" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2937] uppercase tracking-wide">Resources</h2>
          <div className="h-1 w-20 bg-[#FF6B35] mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-500 mt-4">Access key project documentation, source code, and presentations.</p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-gray-100 rounded-2xl flex-wrap justify-center gap-1 sm:gap-0">
            <button
              onClick={() => setActiveTab('docs')}
              className={`px-8 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer ${activeTab === 'docs'
                ? 'bg-white text-[#FF6B35] shadow-lg'
                : 'text-gray-500 hover:text-gray-700'
                }`}
            >
              Project Documents
            </button>
            <button
              onClick={() => setActiveTab('research')}
              className={`px-8 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer ${activeTab === 'research'
                ? 'bg-white text-[#FF6B35] shadow-lg'
                : 'text-gray-500 hover:text-gray-700'
                }`}
            >
              Research Paper
            </button>
            <button
              onClick={() => setActiveTab('slides')}
              className={`px-8 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer ${activeTab === 'slides'
                ? 'bg-white text-[#FF6B35] shadow-lg'
                : 'text-gray-500 hover:text-gray-700'
                }`}
            >
              Presentations
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`px-8 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer ${activeTab === 'code'
                ? 'bg-white text-[#FF6B35] shadow-lg'
                : 'text-gray-500 hover:text-gray-700'
                }`}
            >
              Source Codes
            </button>
          </div>
        </div>

        <div className={`grid gap-6 ${
          currentItems.length === 1
            ? 'grid-cols-1 max-w-xs mx-auto w-full'
            : currentItems.length === 3
              ? 'grid-cols-1 sm:grid-cols-3 max-w-5xl mx-auto w-full'
              : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full'
        }`}>
          {currentItems.map((item, i) => (
            <div key={i} className="flex flex-col items-center p-6 bg-[#F7F8FA] rounded-xl border border-gray-200 hover:border-[#FF6B35] transition-colors cursor-pointer group">
              {activeTab === 'research' ? (
                <BookOpen size={40} className="text-gray-400 mb-4 group-hover:text-[#FF6B35]" />
              ) : activeTab === 'docs' ? (
                <FileText size={40} className="text-gray-400 mb-4 group-hover:text-[#FF6B35]" />
              ) : activeTab === 'slides' ? (
                <Presentation size={40} className="text-gray-400 mb-4 group-hover:text-[#FF6B35]" />
              ) : (
                <GithubIcon size={40} className="text-gray-400 mb-4 group-hover:text-[#FF6B35]" />
              )}
              <h4 className="font-bold text-[#1F2937] text-center text-sm mb-4">{item.title}</h4>
              <a
                href={item.path}
                target={item.path !== '#' ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="text-[#FF6B35] text-xs font-bold uppercase tracking-wider flex items-center gap-1 mt-auto bg-white px-4 py-2 rounded-full border border-gray-200 group-hover:bg-[#FF6B35] group-hover:text-white transition-colors cursor-pointer"
                onClick={(e) => item.path === '#' && e.preventDefault()}
              >
                {activeTab === 'code' ? (
                  <>Explore <GithubIcon size={14} /></>
                ) : (
                  <>View <Download size={14} /></>
                )}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Documents;
