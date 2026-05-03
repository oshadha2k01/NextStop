import React, { useState } from 'react';
import { FileText, Download, Presentation } from 'lucide-react';

const Documents = () => {
  const [activeTab, setActiveTab] = useState<'docs' | 'slides'>('docs');

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

  const currentItems = activeTab === 'docs' ? projectDocs : presentations;

  return (
    <section id="documents" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2937] uppercase tracking-wide">Resources</h2>
          <div className="h-1 w-20 bg-[#FF6B35] mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-500 mt-4">Access key project documentation and presentations.</p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-gray-100 rounded-2xl">
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
              onClick={() => setActiveTab('slides')}
              className={`px-8 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer ${activeTab === 'slides'
                ? 'bg-white text-[#FF6B35] shadow-lg'
                : 'text-gray-500 hover:text-gray-700'
                }`}
            >
              Presentations
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {currentItems.map((item, i) => (
            <div key={i} className="flex flex-col items-center p-6 bg-[#F7F8FA] rounded-xl border border-gray-200 hover:border-[#FF6B35] transition-colors cursor-pointer group">
              {activeTab === 'docs' ? (
                <FileText size={40} className="text-gray-400 mb-4 group-hover:text-[#FF6B35]" />
              ) : (
                <Presentation size={40} className="text-gray-400 mb-4 group-hover:text-[#FF6B35]" />
              )}
              <h4 className="font-bold text-[#1F2937] text-center text-sm mb-4">{item.title}</h4>
              <a
                href={item.path}
                target={item.path !== '#' ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="text-[#FF6B35] text-xs font-bold uppercase tracking-wider flex items-center gap-1 mt-auto bg-white px-4 py-2 rounded-full border border-gray-200 group-hover:bg-[#FF6B35] group-hover:text-white transition-colors cursor-pointer"
                onClick={(e) => item.path === '#' && e.preventDefault()}
              >
                View <Download size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Documents;
