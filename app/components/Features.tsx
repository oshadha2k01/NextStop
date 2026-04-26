import React from 'react';
import { MapPin, Clock, Camera, BrainCircuit, FileText, Smartphone, ShieldAlert, Users, Radio, Zap, ShieldCheck, MessageSquareQuote } from 'lucide-react';

const Features = () => {
  const features = [
    { 
      title: "Real-Time Tracking", 
      desc: "Live GPS mapping on the Flutter Passenger App using continuous WebSocket data broadcasted directly from the driver node for pin-point accuracy.", 
      icon: <MapPin size={32} /> 
    },
    { 
      title: "Journey Prediction Model", 
      desc: "An advanced XGBoost model utilizing historical and real-time IoT data, seamlessly fused with Google API real-time traffic and Distance Matrix data.", 
      icon: <Clock size={32} /> 
    },
    { 
      title: "Smart Crowd Analysis", 
      desc: "YOLOv12 deep learning computer vision counts waiting passengers at main bus stops via CCTV simulation to provide real-time occupancy insights.", 
      icon: <Camera size={32} /> 
    },
    { 
      title: "Crowd Prediction Model", 
      desc: "Intelligent forecasting of passenger densities using extensive datasets based on preferred dates, times, and historical trends for predictive planning.", 
      icon: <BrainCircuit size={32} /> 
    },
    { 
      title: "Dynamic Fares", 
      desc: "An intelligent backend system that calculates highly accurate digital ticket prices dynamically based on standardized government distance regulations.", 
      icon: <FileText size={32} /> 
    },
    { 
      title: "IoT Driver Console", 
      desc: "A specialized Flutter application acting as a mobile IoT node, allowing drivers to initiate journeys and broadcast background GPS seamlessly.", 
      icon: <Smartphone size={32} /> 
    },
    { 
      title: "Real-Time Admin Console", 
      desc: "A comprehensive React/Vite dashboard empowering bus owners and authorities to manage fleets and monitor all buses in real-time.", 
      icon: <ShieldAlert size={32} /> 
    },
    { 
      title: "Interactive Passenger App", 
      desc: "A dedicated mobile interface for commuters to view ETAs, check predicted occupancy, and manage their travel experience in one place.", 
      icon: <Users size={32} /> 
    },
    { 
      title: "Smart Pickup Connection", 
      desc: "Seamless real-time link between passenger and driver apps, enabling commuters to send their onboarding locations directly to the driver for precise coordination.", 
      icon: <Radio size={32} /> 
    },
    { 
      title: "Live Telemetry Hub", 
      desc: "The Driver App broadcasts real-time telemetry including speed, location, and dynamic ETAs directly to passengers through a low-latency IoT gateway.", 
      icon: <Zap size={32} /> 
    },
    { 
      title: "Super Admin Control", 
      desc: "Centralized management of all buses, owners, and drivers. Includes real-time tracking, route management, feedback analysis, and driver behavior monitoring.", 
      icon: <ShieldCheck size={32} /> 
    },
    { 
      title: "Feedback & Complaints", 
      desc: "Integrated reporting system for passengers to provide feedback on journey conditions, driver behavior, and file complaints for administrative action.", 
      icon: <MessageSquareQuote size={32} /> 
    }
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
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:border-[#FF6B35] hover:shadow-md transition-all group flex flex-col">
              <div className="w-14 h-14 rounded-xl bg-[#FF6B35]/10 flex items-center justify-center text-[#FF6B35] mb-6 group-hover:bg-[#FF6B35] group-hover:text-white transition-colors">
                {feat.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1F2937] mb-3">{feat.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
