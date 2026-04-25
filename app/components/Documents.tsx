import React from 'react';
import { FileText, Download } from 'lucide-react';

const Documents = () => {
  const docs = [
    { title: 'Project Charter', path: '/documents/charter.pdf' },
    { title: 'Proposal Document', path: '#' },
    { title: 'Check List Documents', path: '#' },
    { title: 'Proposal Presentation', path: '#' },
    { title: 'Progress Presentation-1', path: '#' },
    { title: 'Progress Presentation-2', path: '#' },
    { title: 'Final Presentation', path: '#' },
    { title: 'Final Documentation', path: '#' }
  ];

  return (
    <section id="documents" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2937] uppercase tracking-wide">Project Documents</h2>
          <div className="h-1 w-20 bg-[#FF6B35] mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-500 mt-4">Access key project documentation and presentations.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {docs.map((doc, i) => (
            <div key={i} className="flex flex-col items-center p-6 bg-[#F7F8FA] rounded-xl border border-gray-200 hover:border-[#FF6B35] transition-colors cursor-pointer group">
              <FileText size={40} className="text-gray-400 mb-4 group-hover:text-[#FF6B35]" />
              <h4 className="font-bold text-[#1F2937] text-center text-sm mb-4">{doc.title}</h4>
              <a 
                href={doc.path}
                target={doc.path !== '#' ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="text-[#FF6B35] text-xs font-bold uppercase tracking-wider flex items-center gap-1 mt-auto bg-white px-4 py-2 rounded-full border border-gray-200 group-hover:bg-[#FF6B35] group-hover:text-white transition-colors"
                onClick={(e) => doc.path === '#' && e.preventDefault()}
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
