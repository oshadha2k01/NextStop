import React from 'react';
import { Users, Mail } from 'lucide-react';

const Team = () => {
  const members = [
    { 
      name: "Dhananjaya Weerakoon", 
      role: "IoT Based Bus tracking System and ETA Prediction", 
      image: "/team/member1.jpeg",
      email: "Dpurnamalweerakoon@gmail.com",
      achievement: "IoT & Embedded Systems Specialist"
    },
    { 
      name: "Oshadha Pathiraja", 
      role: "Central Fleet Management and Route Optimization Engine", 
      image: "/team/member2.png",
      email: "oshadhanipun093@gmail.com",
      achievement: "Algorithm Design & Lead Developer"
    },
    { 
      name: "Vidumini Chandrasekara", 
      role: "Mobile-Based Passenger Interaction System", 
      image: "/team/member3.jpeg",
      email: "viduminipavithra@gmail.com",
      achievement: "UI/UX & Mobile Platform Architect"
    },
    { 
      name: "Raveesha Abeysekara", 
      role: "Vision-Based Passenger Counting and Occupancy Monitoring", 
      image: "/team/member4.png",
      email: "raveeshagimhanmendis@gmail.com",
      achievement: "Computer Vision & AI Researcher"
    },
  ];

  return (
    <section id="team" className="py-20 bg-[#F7F8FA] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2937] uppercase tracking-wide">Our Team</h2>
          <div className="h-1 w-20 bg-[#FF6B35] mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-500 mt-4">Meet the individuals behind NextStop.</p>
        </div>

        {/* Supervisor Section */}
        <div className="flex justify-center gap-8 md:gap-12 mb-16 flex-wrap">
          <div className="text-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100 min-w-[280px] hover:border-[#FF6B35] transition-all group">
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-2 border-[#FF6B35] shadow-inner">
              <img src="/team/supervisor.jpg" alt="Mr. Nelum Amarasena" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="font-bold text-lg text-[#1F2937]">Mr. Nelum Amarasena</h3>
            <p className="text-[#FF6B35] text-sm font-bold mt-1">Supervisor</p>
            <div className="text-gray-500 text-xs mt-2 space-y-1">
              <p>Senior Lecturer</p>
              <p>Faculty of Computing, SLIIT</p>
              <a 
                href="mailto:nelum.a@sliit.lk" 
                className="text-gray-400 font-medium pt-1 italic cursor-pointer hover:text-[#FF6B35] transition-colors flex items-center justify-center gap-1"
              >
                <Mail size={12} /> {`nelum.a@sliit.lk`}
              </a>
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
              <a 
                href="mailto:uthpala.s@sliit.lk" 
                className="text-gray-400 font-medium pt-1 italic cursor-pointer hover:text-[#FF6B35] transition-colors flex items-center justify-center gap-1"
              >
                <Mail size={12} /> {`uthpala.s@sliit.lk`}
              </a>
            </div>
          </div>
        </div>

        {/* Members Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {members.map((m, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-[#FF6B35] transition-all group flex flex-col h-full shadow-sm">
              <div className={`w-24 h-24 md:w-28 md:h-28 rounded-full mx-auto mb-4 overflow-hidden flex items-center justify-center border-2 shrink-0 ${m.image ? 'border-[#FF6B35]' : 'bg-gray-100 border-transparent'}`}>
                {m.image ? (
                  <img src={m.image} alt={m.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                ) : (
                  <Users size={32} className="text-gray-400" />
                )}
              </div>
              <h3 className="font-bold text-[#1F2937] text-sm md:text-base leading-tight mb-2">{m.name}</h3>
              <p className="text-[#FF6B35] text-[10px] font-bold uppercase tracking-wider mb-4 h-8 flex items-center justify-center">{m.role}</p>
              
              <div className="mt-auto pt-4 border-t border-gray-50 space-y-2">
                <div>
                  <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold mb-1">Achievement</p>
                  <p className="text-[#1F2937] text-[11px] font-semibold">{m.achievement}</p>
                </div>
                <a 
                  href={`mailto:${m.email}`} 
                  className="text-gray-400 font-medium italic cursor-pointer hover:text-[#FF6B35] transition-colors text-[10px] flex items-center justify-center gap-1 truncate px-2"
                >
                  <Mail size={10} className="shrink-0" /> {m.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
