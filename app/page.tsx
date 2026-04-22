'use client';
import React, { useState, useEffect } from 'react';
import NextImage from 'next/image';
import { Inter } from 'next/font/google';
import {
  Bus, BrainCircuit, Smartphone, Server, ShieldAlert, Database,
  MapPin, Clock, Camera, FileText, Download, Mail, Phone, Map, Users, Search, Menu, X
} from 'lucide-react';

// Initialize the Inter font globally
const inter = Inter({ subsets: ['latin'] });

export default function NextStopPortfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery) return;
    
    // Simple search logic: scroll to section if name matches
    const target = searchQuery.toLowerCase();
    const sections = ['home', 'domain', 'features', 'technologies', 'milestones', 'documents', 'team', 'contact'];
    const match = sections.find(s => s.includes(target) || target.includes(s));
    
    if (match) {
      document.getElementById(match)?.scrollIntoView({ behavior: 'smooth' });
      setSearchQuery('');
    }
  };

  useEffect(() => {
    const sections = ['home', 'domain', 'features', 'technologies', 'milestones', 'documents', 'team', 'contact'];

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`${inter.className} min-h-screen bg-[#F7F8FA] text-[#1F2937] selection:bg-[#FF6B35] selection:text-white overflow-x-hidden`}>

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <NextImage src="/logo.png" alt="NextStop Logo" width={42} height={42} className="object-contain w-8 h-8 sm:w-12 sm:h-12" />
            <span className="font-extrabold text-xl sm:text-2xl text-[#FF6B35] tracking-tight">NextStop</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6 text-sm font-semibold">
              {[
                { id: 'home', label: 'Home' },
                { id: 'domain', label: 'Domain' },
                { id: 'features', label: 'Features' },
                { id: 'technologies', label: 'Technologies' },
                { id: 'milestones', label: 'Milestones' },
                { id: 'documents', label: 'Documents' },
                { id: 'team', label: 'Team' },
                { id: 'contact', label: 'Contact' }
              ].map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`transition-all duration-300 pb-1 border-b-2 ${activeSection === link.id
                    ? 'text-[#FF6B35] border-[#FF6B35]'
                    : 'text-gray-600 border-transparent hover:text-[#FF6B35]'
                    }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative group">
              <div className="flex items-center bg-[#F7F8FA] rounded-full pl-4 pr-1 py-1 border border-gray-200 focus-within:border-[#FF6B35] focus-within:bg-white transition-all w-48 lg:w-64">
                <input
                  type="text"
                  placeholder="Search sections..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent border-none outline-none focus:ring-0 text-sm w-full text-gray-700 placeholder-[#FF6B35]/60"
                />
                <button 
                  type="submit" 
                  className="bg-[#FF6B35] text-white p-1.5 rounded-full hover:bg-[#E6521F] transition-all flex items-center justify-center shrink-0"
                >
                  <Search size={16} />
                </button>
              </div>
            </form>
          </div>

          {/* Mobile Menu Button - Outside the hidden container */}
          <button
            className="md:hidden p-2 text-[#FF6B35] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        <div className={`md:hidden absolute w-full bg-white border-b border-gray-200 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 pt-2 pb-6 space-y-4">
            {/* Mobile Search Bar */}
            <form onSubmit={handleSearch} className="relative">
              <div className="flex items-center bg-[#F7F8FA] rounded-full pl-4 pr-1 py-1 border border-gray-200 focus-within:border-[#FF6B35] focus-within:bg-white transition-all w-full">
                <input
                  type="text"
                  placeholder="Search sections..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent border-none outline-none focus:ring-0 text-sm w-full text-gray-700 placeholder-[#FF6B35]/60"
                />
                <button
                  type="submit"
                  className="bg-[#FF6B35] text-white p-1.5 rounded-full hover:bg-[#E6521F] transition-all flex items-center justify-center shrink-0"
                >
                  <Search size={16} />
                </button>
              </div>
            </form>

            <div className="flex flex-col space-y-3 px-2">
              {[
                { id: 'home', label: 'Home' },
                { id: 'domain', label: 'Domain' },
                { id: 'features', label: 'Features' },
                { id: 'technologies', label: 'Technologies' },
                { id: 'milestones', label: 'Milestones' },
                { id: 'documents', label: 'Documents' },
                { id: 'team', label: 'Team' },
                { id: 'contact', label: 'Contact' }
              ].map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-semibold transition-colors ${activeSection === link.id ? 'text-[#FF6B35]' : 'text-gray-600 hover:text-[#FF6B35]'}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* 1. Home Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-16">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <NextImage
            src="/coverimage.png"
            alt="Transit Future Background"
            fill
            priority
            unoptimized
            className="object-cover"
          />
          {/* Professional Dark Overlay with subtle blur for better text contrast */}
          <div className="absolute inset-0 bg-[#1F2937]/80 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight">
            Navigating the Future of <span className="text-[#FF6B35]">Public Transport</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
            NextStop transforms everyday commutes into a predictable, data-driven experience. By combining real-time edge computing with advanced predictive modeling and Google Maps integration, we’re delivering the most accurate bus tracking and ETA platform in Sri Lanka.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#features" className="inline-block bg-[#FF6B35] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#E6521F] transition-all shadow-xl hover:shadow-[#FF6B35]/30 hover:-translate-y-1">
              Discover Features
            </a>
          </div>
        </div>
      </section>

      {/* 2. Our Domain Section */}
      <section id="domain" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1F2937] uppercase tracking-wide">Our Domain</h2>
            <div className="h-1 w-20 bg-[#FF6B35] mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-500 mt-4">Discover how NextStop is transforming the public transit experience.</p>
          </div>

          <div className="space-y-16">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-[#F7F8FA] p-8 rounded-2xl border border-gray-100">
                <h3 className="text-2xl font-bold text-[#FF6B35] mb-4">Research Background</h3>
                <p className="text-gray-600 leading-relaxed text-justify">
                  Today's public transport commuters in Sri Lanka face constant uncertainty regarding bus arrival times and crowd levels. Despite widespread mobile internet access, there is a distinct lack of localized, intelligent travel management systems tailored for busy routes like Route 177.
                </p>
              </div>
              <div className="bg-[#F7F8FA] p-8 rounded-2xl border border-gray-100">
                <h3 className="text-2xl font-bold text-[#FF6B35] mb-4">Research Problem</h3>
                <p className="text-gray-600 leading-relaxed text-justify">
                  Existing public transport networks lack real-time data integration, dynamic fare calculation, and predictive insights. Commuters cannot accurately plan journeys due to unpredictable delays and unknown crowd densities at upcoming stops.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#FF6B35] mb-4 border-b-2 border-[#FF6B35]/20 pb-2">Methodology</h3>
              <p className="text-gray-600 leading-relaxed text-justify">
                Our approach utilizes a robust microservices architecture. We combine an XGBoost machine learning algorithm for ETA prediction, YOLOv12 computer vision for crowd analysis at bus stops, and a Node.js central backend to handle real-time IoT WebSockets from dedicated driver applications.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#FF6B35] mb-4 border-b-2 border-[#FF6B35]/20 pb-2">Literature Survey</h3>
              <p className="text-gray-600 leading-relaxed text-justify mb-4">
                Our literature survey reveals that while intelligent transport systems exist globally, there are significant gaps in applying them to developing nations like Sri Lanka. Current research indicates that 75% of commuters experience daily anxiety related to unpredictable transit schedules.
              </p>
              <p className="text-gray-600 leading-relaxed text-justify">
                Furthermore, studies emphasize the importance of context-aware mobile transit guides. While generic mapping tools exist, research shows that combining real-time hardware telemetry (IoT) with predictive machine learning significantly boosts transit efficiency and user satisfaction.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#FF6B35] mb-4 border-b-2 border-[#FF6B35]/20 pb-2">Research Gap</h3>
              <p className="text-gray-600 leading-relaxed text-justify mb-4">
                Despite advances in smart transit technology, our research reveals critical gaps: First, most applications fail to provide dynamic ETAs based on live traffic, weather, and historical localized data.
              </p>
              <p className="text-gray-600 leading-relaxed text-justify mb-4">
                Second, there is a significant lack of crowd density prediction; commuters do not know if an incoming bus is full until it arrives. Third, immersive digital ticketing and dynamic fare calculation based on shifting government tariffs are rarely integrated seamlessly.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#FF6B35] mb-4 border-b-2 border-[#FF6B35]/20 pb-2">Research Objectives</h3>
              <ul className="list-disc pl-6 space-y-3 text-gray-600 text-justify">
                <li>Develop an intelligent travel prediction system leveraging XGBoost to provide highly accurate ETAs based on real-time and historical IoT data.</li>
                <li>Create a computer vision module utilizing YOLOv12 to analyze crowd density at main bus stops and predict incoming passenger capacity.</li>
                <li>Design an integrated microservices architecture (Node.js/Express) that securely manages dynamic fare calculations based on government tariffs.</li>
                <li>Develop dual cross-platform mobile applications (Passenger and Driver) using Flutter, connected via low-latency WebSockets.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Key Features Section */}
      <section id="features" className="py-20 bg-[#F7F8FA] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1F2937] uppercase tracking-wide">Key Features</h2>
            <div className="h-1 w-20 bg-[#FF6B35] mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-500 mt-4">Discover the innovative features that make NextStop exceptional.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Real-Time Tracking", desc: "Live GPS mapping on the Flutter Passenger App using continuous WebSocket data from the driver node.", icon: <MapPin size={32} /> },
              { title: "Hybrid ETA Prediction", desc: "XGBoost machine learning integrates weather, traffic, and historical data to predict accurate travel times.", icon: <Clock size={32} /> },
              { title: "Smart Crowd Analysis", desc: "YOLOv12 deep learning computer vision counts waiting passengers at main bus stops via CCTV simulation.", icon: <Camera size={32} /> },
              { title: "Dynamic Fares", desc: "An intelligent backend calculates accurate ticket prices dynamically based on government regulations.", icon: <FileText size={32} /> },
              { title: "IoT Driver Console", desc: "A specialized Flutter app acting as a mobile IoT node, initiating journeys and broadcasting background GPS.", icon: <Smartphone size={32} /> },
              { title: "Super Admin Control", desc: "A React/Vite dashboard allowing transport authorities to manage fleets and configure fare rules.", icon: <ShieldAlert size={32} /> }
            ].map((feat, i) => (
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

      {/* 4. Technologies Section */}
      <section id="technologies" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1F2937] uppercase tracking-wide">Technologies</h2>
            <div className="h-1 w-20 bg-[#FF6B35] mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-500 mt-4">Cutting-edge technologies powering our transit platform.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Machine Learning", desc: "XGBoost, Pandas, and Flask for advanced ETA prediction APIs.", icon: <BrainCircuit size={32} /> },
              { title: "Computer Vision", desc: "YOLOv12 and OpenCV integrated via Docker for real-time crowd counting.", icon: <Camera size={32} /> },
              { title: "Mobile Development", desc: "Flutter and Dart for seamless Passenger and Driver cross-platform apps.", icon: <Smartphone size={32} /> },
              { title: "Backend Core", desc: "Node.js, Express, and WebSockets (Socket.io) for high-frequency data routing.", icon: <Server size={32} /> },
              { title: "Frontend Web", desc: "React.js, Vite, and Tailwind CSS for the Super Admin management dashboard.", icon: <Map size={32} /> },
              { title: "Cloud & Database", desc: "MongoDB for data persistence, deployed via Vercel and AWS.", icon: <Database size={32} /> }
            ].map((tech, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border-2 border-gray-100 text-center hover:border-[#FF6B35] transition-colors">
                <div className="flex justify-center text-[#FF6B35] mb-4">{tech.icon}</div>
                <h3 className="text-xl font-bold text-[#1F2937] mb-2">{tech.title}</h3>
                <p className="text-gray-600 text-sm">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Project Milestones */}
      <section id="milestones" className="py-20 bg-[#F7F8FA] scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1F2937] uppercase tracking-wide">Project Milestones</h2>
            <div className="h-1 w-20 bg-[#FF6B35] mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-500 mt-4">Track our progress through key project phases.</p>
          </div>

          <div className="space-y-8 border-l-2 border-[#FF6B35] pl-6 ml-4 md:ml-0">
            {[
              { title: "Project Proposal", desc: "Defining the scope, objectives, and architecture of NextStop.", date: "August 2024", prog: "10%" },
              { title: "Progress Presentation-1", desc: "Showcasing backend structure, UI designs, and initial Flutter development.", date: "December 2024", prog: "50%" },
              { title: "Progress Presentation-2", desc: "Demonstrating ML/CV integration and real-time Socket.io testing.", date: "March 2025", prog: "80%" },
              { title: "Final Assessment", desc: "Complete system review and hardware/software quality assessment.", date: "April 2025", prog: "90%" },
              { title: "Viva and Project Completion", desc: "Final project presentation to the examiner panel.", date: "May 2025", prog: "100%" },
            ].map((m, i) => (
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

      {/* 6. Documents Section */}
      <section id="documents" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1F2937] uppercase tracking-wide">Project Documents</h2>
            <div className="h-1 w-20 bg-[#FF6B35] mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-500 mt-4">Access key project documentation and presentations.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {['Project Charter', 'Proposal Document', 'Check List Documents', 'Proposal Presentation', 'Progress Presentation-1', 'Progress Presentation-2', 'Final Presentation', 'Final Documentation'].map((doc, i) => (
              <div key={i} className="flex flex-col items-center p-6 bg-[#F7F8FA] rounded-xl border border-gray-200 hover:border-[#FF6B35] transition-colors cursor-pointer group">
                <FileText size={40} className="text-gray-400 mb-4 group-hover:text-[#FF6B35]" />
                <h4 className="font-bold text-[#1F2937] text-center text-sm mb-4">{doc}</h4>
                <span className="text-[#FF6B35] text-xs font-bold uppercase tracking-wider flex items-center gap-1 mt-auto bg-white px-4 py-2 rounded-full border border-gray-200 group-hover:bg-[#FF6B35] group-hover:text-white transition-colors">
                  View <Download size={14} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Our Team */}
      <section id="team" className="py-20 bg-[#F7F8FA] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1F2937] uppercase tracking-wide">Our Team</h2>
            <div className="h-1 w-20 bg-[#FF6B35] mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-500 mt-4">Meet the individuals behind NextStop.</p>
          </div>

          <div className="flex justify-center gap-12 mb-16 flex-wrap">
            <div className="text-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100 min-w-[270px] hover:border-[#FF6B35] transition-all">
              <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-4 border-2 border-[#FF6B35] shadow-inner">
                <img src="/team/supervisor.jpg" alt="Mr. Nelum Chathuranga" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-lg text-[#1F2937]">Mr. Nelum Chathuranga</h3>
              <p className="text-[#FF6B35] text-sm font-bold mt-1">Supervisor</p>
              <div className="text-gray-500 text-xs mt-2 space-y-1">
                <p>Senior Lecturer</p>
                <p>Faculty of Computing, SLIIT</p>
                <p className="text-gray-400 font-medium pt-1 italic">{`nelum.a@sliit.lk`}</p>
              </div>
            </div>
            <div className="text-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100 min-w-[270px] hover:border-[#FF6B35] transition-all">
              <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-4 border-2 border-[#FF6B35] shadow-inner">
                <img src="/team/cosupervisor.jpg" alt="Ms. Uthpala Samarakoon" className="w-full h-full object-cover" />
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
            <div className="bg-white p-6 rounded-2xl border border-gray-100">
              <div className="w-20 h-20 rounded-full bg-[#FF6B35]/10 mx-auto mb-4 flex items-center justify-center border-2 border-[#FF6B35]"><Users size={24} className="text-[#FF6B35]" /></div>
              <h3 className="font-bold text-[#1F2937]">Oshadha Pathiraja</h3>
              <p className="text-gray-500 text-xs mt-2 px-2">Full-Stack Architecture & ML Integration</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100">
              <div className="w-20 h-20 rounded-full bg-gray-100 mx-auto mb-4 flex items-center justify-center"><Users size={24} className="text-gray-400" /></div>
              <h3 className="font-bold text-[#1F2937]">[Member 2]</h3>
              <p className="text-gray-500 text-xs mt-2 px-2">Backend & IoT Intergration</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100">
              <div className="w-20 h-20 rounded-full bg-gray-100 mx-auto mb-4 flex items-center justify-center"><Users size={24} className="text-gray-400" /></div>
              <h3 className="font-bold text-[#1F2937]">[Member 3]</h3>
              <p className="text-gray-500 text-xs mt-2 px-2">Mobile Development & UI/UX</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100">
              <div className="w-20 h-20 rounded-full bg-gray-100 mx-auto mb-4 flex items-center justify-center"><Users size={24} className="text-gray-400" /></div>
              <h3 className="font-bold text-[#1F2937]">[Member 4]</h3>
              <p className="text-gray-500 text-xs mt-2 px-2">Admin Web & Data Pipeline</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Contact Section & Footer (Stark Orange & White theme) */}
      <footer id="contact" className="bg-[#FF6B35] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold uppercase tracking-wide text-white">Contact Us</h2>
            <div className="h-1 w-20 bg-white mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 border-b border-white/20 pb-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-full"><MapPin className="text-white" size={24} /></div>
                <div className="pt-2"><h4 className="font-bold mb-1 text-lg">Address</h4><p className="text-white/80">SLIIT Campus, New Kandy Road, Malabe, Sri Lanka</p></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-full"><Phone className="text-white" size={24} /></div>
                <div className="pt-2"><h4 className="font-bold mb-1 text-lg">Phone</h4><p className="text-white/80">+94 11 754 4801</p></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-full"><Mail className="text-white" size={24} /></div>
                <div className="pt-2"><h4 className="font-bold mb-1 text-lg">Email</h4><p className="text-white/80">nextstop@sliit.lk</p></div>
              </div>
            </div>

            {/* Form Box */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h4 className="text-2xl font-bold text-[#1F2937] mb-6">Send Us a Message</h4>
              <input type="text" placeholder="Your Name" className="w-full bg-[#F7F8FA] border border-gray-200 text-[#1F2937] rounded-lg p-4 mb-4 focus:outline-none focus:border-[#FF6B35]" />
              <input type="email" placeholder="Your Email" className="w-full bg-[#F7F8FA] border border-gray-200 text-[#1F2937] rounded-lg p-4 mb-4 focus:outline-none focus:border-[#FF6B35]" />
              <textarea placeholder="Message" rows={4} className="w-full bg-[#F7F8FA] border border-gray-200 text-[#1F2937] rounded-lg p-4 mb-6 focus:outline-none focus:border-[#FF6B35]"></textarea>
              <button className="bg-[#1F2937] text-white font-bold py-4 px-6 rounded-lg hover:bg-black w-full transition-colors">Submit Inquiry</button>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 py-12 text-sm text-white/80">
            <div className="col-span-1 md:col-span-2">
              <div className="font-extrabold text-3xl text-white mb-4 flex items-center gap-2 tracking-tight"><Bus /> NextStop</div>
              <p className="max-w-md text-base leading-relaxed">Redefining smart public transit with dynamic fare calculations, live IoT integrations, and deep learning predictions for a seamless commuter experience.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 uppercase text-white tracking-wide">Quick Links</h4>
              <ul className="space-y-3 font-medium">
                <li><a href="#home" className="hover:text-white transition">Home</a></li>
                <li><a href="#domain" className="hover:text-white transition">Domain</a></li>
                <li><a href="#technologies" className="hover:text-white transition">Technologies</a></li>
                <li><a href="#documents" className="hover:text-white transition">Documents</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 uppercase text-white tracking-wide">Newsletter</h4>
              <p className="mb-4">Subscribe to receive updates on our project progress.</p>
              <div className="flex bg-white rounded-lg p-1">
                <input type="email" placeholder="Email Address" className="p-3 w-full focus:outline-none text-[#1F2937] bg-transparent" />
                <button className="bg-[#1F2937] px-6 rounded-md font-bold text-white hover:bg-black transition">Go</button>
              </div>
            </div>
          </div>

          <div className="text-center text-white/60 text-sm mt-8 font-medium">
            © 2026 NextStop - All Rights Reserved | Research Project IT4010 - SLIIT
          </div>
        </div>
      </footer>
    </div>
  );
}