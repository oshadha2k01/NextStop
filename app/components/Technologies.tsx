import React from 'react';
import { BrainCircuit, Network, Smartphone, Server, Map, Database, Cpu, Boxes } from 'lucide-react';

const Technologies = () => {
  const technologies = [
    { 
      title: "Machine Learning", 
      desc: "LSTM networks, XGBoost, and Pandas for context-aware ETA predictions and fleet optimization.", 
      icon: <BrainCircuit size={32} /> 
    },
    { 
      title: "Deep Learning", 
      desc: "YOLOv12 and OpenCV for edge-based computer vision and real-time passenger counting.", 
      icon: <Network size={32} /> 
    },
    { 
      title: "IoT & Hardware", 
      desc: "Arduino, GPS modules, Thermal Sensors, and GSM/Wi-Fi for real-time edge processing on buses.", 
      icon: <Cpu size={32} /> 
    },
    { 
      title: "Mobile Development", 
      desc: "Flutter and Dart for inclusive, cross-platform Passenger and Driver applications.", 
      icon: <Smartphone size={32} /> 
    },
    { 
      title: "Backend Core", 
      desc: "Node.js, Express, Python (Flask), and WebSockets for high-frequency real-time data routing.", 
      icon: <Server size={32} /> 
    },
    { 
      title: "Frontend Web", 
      desc: "React.js, Vite, and Tailwind CSS for the comprehensive Super Admin management dashboard.", 
      icon: <Map size={32} /> 
    },
    { 
      title: "Cloud & Database", 
      desc: "MongoDB Cloud for secure data persistence, hosted and managed on DigitalOcean.", 
      icon: <Database size={32} /> 
    },
    { 
      title: "DevOps & Architecture", 
      desc: "Docker and Docker Compose for containerized microservices and seamless deployment.", 
      icon: <Boxes size={32} /> 
    }
  ];

  return (
    <section id="technologies" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2937] uppercase tracking-wide">Technologies</h2>
          <div className="h-1 w-20 bg-[#FF6B35] mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-500 mt-4">The complete hardware and software stack powering our smart transit platform.</p>
        </div>

        {/* Updated grid to handle 8 items cleanly (4 columns on large screens, 2 on medium, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border-2 border-gray-100 text-center hover:border-[#FF6B35] transition-colors flex flex-col items-center group">
              <div className="flex justify-center text-[#FF6B35] mb-4 group-hover:scale-110 transition-transform">{tech.icon}</div>
              <h3 className="text-xl font-bold text-[#1F2937] mb-2">{tech.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{tech.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
