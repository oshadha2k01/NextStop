import React from 'react';
import { BrainCircuit, Camera, Smartphone, Server, Map, Database } from 'lucide-react';

const Technologies = () => {
  const technologies = [
    { title: "Machine Learning", desc: "XGBoost, Pandas, and Flask for advanced ETA prediction APIs.", icon: <BrainCircuit size={32} /> },
    { title: "Computer Vision", desc: "YOLOv12 and OpenCV integrated via Docker for real-time crowd counting.", icon: <Camera size={32} /> },
    { title: "Mobile Development", desc: "Flutter and Dart for seamless Passenger and Driver cross-platform apps.", icon: <Smartphone size={32} /> },
    { title: "Backend Core", desc: "Node.js, Express, and WebSockets (Socket.io) for high-frequency data routing.", icon: <Server size={32} /> },
    { title: "Frontend Web", desc: "React.js, Vite, and Tailwind CSS for the Super Admin management dashboard.", icon: <Map size={32} /> },
    { title: "Cloud & Database", desc: "MongoDB for data persistence, deployed via Vercel and AWS.", icon: <Database size={32} /> }
  ];

  return (
    <section id="technologies" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2937] uppercase tracking-wide">Technologies</h2>
          <div className="h-1 w-20 bg-[#FF6B35] mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-500 mt-4">Cutting-edge technologies powering our transit platform.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {technologies.map((tech, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border-2 border-gray-100 text-center hover:border-[#FF6B35] transition-colors">
              <div className="flex justify-center text-[#FF6B35] mb-4">{tech.icon}</div>
              <h3 className="text-xl font-bold text-[#1F2937] mb-2">{tech.title}</h3>
              <p className="text-gray-600 text-sm">{tech.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
