import React from 'react';
import { MapPin, Clock, Camera, FileText, Smartphone, ShieldAlert } from 'lucide-react';

const Features = () => {
  const features = [
    { title: "Real-Time Tracking", desc: "Live GPS mapping on the Flutter Passenger App using continuous WebSocket data from the driver node.", icon: <MapPin size={32} /> },
    { title: "Hybrid ETA Prediction", desc: "XGBoost machine learning integrates weather, traffic, and historical data to predict accurate travel times.", icon: <Clock size={32} /> },
    { title: "Smart Crowd Analysis", desc: "YOLOv12 deep learning computer vision counts waiting passengers at main bus stops via CCTV simulation.", icon: <Camera size={32} /> },
    { title: "Dynamic Fares", desc: "An intelligent backend calculates accurate ticket prices dynamically based on government regulations.", icon: <FileText size={32} /> },
    { title: "IoT Driver Console", desc: "A specialized Flutter app acting as a mobile IoT node, initiating journeys and broadcasting background GPS.", icon: <Smartphone size={32} /> },
    { title: "Super Admin Control", desc: "A React/Vite dashboard allowing transport authorities to manage fleets and configure fare rules.", icon: <ShieldAlert size={32} /> }
  ];

  return (
    <section id="features" className="py-20 bg-[#F7F8FA] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2937] uppercase tracking-wide">Key Features</h2>
          <div className="h-1 w-20 bg-[#FF6B35] mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-500 mt-4">Discover the innovative features that make NextStop exceptional.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feat, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:border-[#FF6B35] hover:shadow-md transition-all group">
              <div className="w-14 h-14 rounded-xl bg-[#FF6B35]/10 flex items-center justify-center text-[#FF6B35] mb-6 group-hover:bg-[#FF6B35] group-hover:text-white transition-colors">
                {feat.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1F2937] mb-3">{feat.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
