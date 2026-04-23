import React from 'react';
import { Users } from 'lucide-react';

const Team = () => {
  const members = [
    { name: "Dhananjaya Weerakoon", role: "IoT Based Bus tracking System and ETA Prediction", image: "/team/member1.jpeg" },
    { name: "Oshadha Pathiraja", role: "Central Fleet Management and Route Optimization Engine", image: "/team/member2.png" },
    { name: "Vidumini Chandrasekara", role: "Mobile-Based Passenger Interaction System", image: "/team/member3.jpeg" },
    { name: "[Member 4]", role: "Admin Web & Data Pipeline", image: null },
  ];

  return (
    <section id="team" className="py-20 bg-[#F7F8FA] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2937] uppercase tracking-wide">Our Team</h2>
          <div className="h-1 w-20 bg-[#FF6B35] mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-500 mt-4">Meet the individuals behind NextStop.</p>
        </div>

        <div className="flex justify-center gap-12 mb-16 flex-wrap">
          <div className="text-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100 min-w-[280px] hover:border-[#FF6B35] transition-all group">
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-2 border-[#FF6B35] shadow-inner">
              <img src="/team/supervisor.jpg" alt="Mr. Nelum Chathuranga" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="font-bold text-lg text-[#1F2937]">Mr. Nelum Chathuranga</h3>
            <p className="text-[#FF6B35] text-sm font-bold mt-1">Supervisor</p>
            <div className="text-gray-500 text-xs mt-2 space-y-1">
              <p>Senior Lecturer</p>
              <p>Faculty of Computing, SLIIT</p>
              <p className="text-gray-400 font-medium pt-1 italic">{`nelum.a@sliit.lk`}</p>
            </div>
          </div>
          <div className="text-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100 min-w-[280px] hover:border-[#FF6B35] transition-all group">
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-2 border-[#FF6B35] shadow-inner">
              <img src="/team/cosupervisor.jpg" alt="Ms. Uthpala Samarakoon" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="font-bold text-lg text-[#1F2937]">Ms. Uthpala Samarakoon</h3>
            <p className="text-[#FF6B35] text-sm font-bold mt-1">Co-Supervisor</p>
            <div className="text-gray-500 text-xs mt-2 space-y-1">
              <p>Senior Lecturer</p>
              <p>Faculty of Computing, SLIIT</p>
              <p className="text-gray-400 font-medium pt-1 italic">{`uthpala.s@sliit.lk`}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {members.map((m, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-[#FF6B35] transition-all group">
              <div className={`w-28 h-28 rounded-full mx-auto mb-4 overflow-hidden flex items-center justify-center border-2 ${m.image ? 'border-[#FF6B35]' : 'bg-gray-100 border-transparent'}`}>
                {m.image ? (
                  <img src={m.image} alt={m.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                ) : (
                  <Users size={32} className="text-gray-400" />
                )}
              </div>
              <h3 className="font-bold text-[#1F2937] text-sm md:text-base leading-tight">{m.name}</h3>
              <p className="text-[#FF6B35] text-[10px] md:text-xs font-bold mt-2 px-2 uppercase tracking-wider">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
