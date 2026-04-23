import React from 'react';
import NextImage from 'next/image';

const Hero = () => {
  return (
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
        {/* Deep Gradient Overlay with subtle blur to highlight the map details and ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937] via-[#1F2937]/60 to-[#1F2937]/40 backdrop-blur-[2px]"></div>
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
  );
};

export default Hero;
