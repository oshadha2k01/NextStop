import React from 'react';

const Milestones = () => {
  const milestones = [
    { title: "Project Proposal", desc: "Defining the scope, objectives, and architecture of NextStop.", date: "September 2025", prog: "10%" },
    { title: "Progress Presentation-1", desc: "Showcasing the backend structure, UI designs, initial Flutter development, and full frontend completion.", date: "January 2026", prog: "50%" },
    { title: "Progress Presentation-2", desc: "Demonstrating ML/CV integration, real-time Socket.io testing, system integration, and the finalized platform.", date: "March 2026", prog: "90%" },
    { title: "Final Assessment", desc: "Comprehensive system review and hardware/software quality assessment.", date: "May 2026", prog: "100%" },
    { title: "Viva and Project Completion", desc: "Final project presentation, viva, and Q&A session with the examiner panel.", date: "May 2026", prog: "100%" },
  ];

  return (
    <section id="milestones" className="py-20 bg-[#F7F8FA] scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2937] uppercase tracking-wide">Project Milestones</h2>
          <div className="h-1 w-20 bg-[#FF6B35] mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-500 mt-4">Track our progress through key project phases.</p>
        </div>

        <div className="space-y-8 border-l-2 border-[#FF6B35] pl-6 ml-4 md:ml-0">
          {milestones.map((m, i) => (
            <div key={i} className="relative bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="absolute -left-[35px] top-6 w-4 h-4 bg-[#FF6B35] rounded-full border-4 border-[#F7F8FA]"></div>
              <h3 className="text-xl font-bold text-[#FF6B35]">{m.title}</h3>
              <p className="text-gray-600 mt-2">{m.desc}</p>
              <div className="mt-4 flex items-center gap-2">
                <span className="bg-[#FF6B35]/10 text-[#FF6B35] px-3 py-1 rounded-md text-xs font-bold">{m.date}</span>
                <span className="text-gray-400 text-sm font-bold">&bull; {m.prog}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestones;
