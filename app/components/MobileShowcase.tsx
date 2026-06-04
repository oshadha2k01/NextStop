'use client';

import React, { useEffect, useMemo, useState } from 'react';
import NextImage from 'next/image';
import { ChevronLeft, ChevronRight, Smartphone } from 'lucide-react';

const AUTO_PLAY_MS = 4500;

const MobileShowcase = () => {
  const slides = useMemo(
    () => [
      {
        title: 'Passenger Home Screen',
        caption: 'Quick access to live bus locations, route overview, and dynamic ETA updates.',
        image: '/ui/home.jpeg'
      },
      {
        title: 'Real-Time Tracking View',
        caption: 'Real-time details: location coordinates, actual bus speeds, passenger counts, and precise arrival estimates using deep-learning camera insights and onboard IoT devices.',
        image: '/ui/tracking.jpeg'
      },
      {
        title: 'Journey Insights Screen',
        caption: 'Shows full journey time prediction using user inputs, IoT historical data, and real-time Google Maps API signals for accurate end-to-end ETAs.',
        image: '/ui/journey.jpeg'
      },
      {
        title: 'Fare Calculation View',
        caption: 'Transparent fare breakdowns showing distance-based pricing, dynamic fare adjustments, and estimated ticket costs before you travel — calculated in accordance with government rules and regulations.',
        image: '/ui/fare.jpeg'
      },
      {
        title: 'Crowd Prediction View',
        caption: 'Predicted occupancy levels for upcoming stops using user-provided travel date/time, historical ridership, and a trained model to produce short-term forecasts.',
        image: '/ui/crowd.jpeg'
      },
      {
        title: 'Passenger–Driver Connection',
        caption: 'Direct handoff UI for sending pickup coordinates, ETA sync, and real-time driver acknowledgements for smooth boarding.',
        image: '/ui/passenger.png'
      }
      ,
      {
        title: 'Driver Dashboard',
        caption: 'Driver-facing console showing assigned trips, real-time bus telemetry, incident reporting, and route instructions for each shift.',
        image: '/ui/driver.png'
      },
      {
        title: 'All Routes (Sri Lanka)',
        caption: 'Comprehensive route explorer with filters for region, route number, and service frequency across Sri Lanka.',
        image: '/ui/routes.jpeg'
      },
      {
        title: 'Feedback',
        caption: 'Passenger feedback submission (ratings, suggestions, optional photos) for service improvement and admin review.',
        image: '/ui/feedback.jpeg'
      },
      {
        title: 'Complaints',
        caption: 'Formal complaint intake routed to drivers/operators with escalation, evidence upload, and status tracking until resolution.',
        image: '/ui/complaint.jpeg'
      }
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, AUTO_PLAY_MS);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="showcase" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-[#1F2937] uppercase tracking-wide">Mobile App UI Showcase</h2>
          <div className="h-1 w-20 bg-[#FF6B35] mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            A visual walkthrough of the passenger experience from route discovery to real-time commute decisions.
          </p>
        </div>

        <div className="relative rounded-3xl border border-[#FF6B35]/20 bg-gradient-to-br from-white via-[#FFF3EE] to-[#FFE4D8] p-4 md:p-8 shadow-xl shadow-[#FF6B35]/10 overflow-hidden">
          <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#FF6B35]/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-10 w-44 h-44 bg-[#1F2937]/10 rounded-full blur-3xl"></div>

          <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
            <div className="w-full lg:w-[40%]">
              <div className="inline-flex items-center gap-2 text-[#FF6B35] font-semibold mb-4">
                <Smartphone size={20} />
                Product UI Preview
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#1F2937] mb-4 leading-tight">
                {slides[activeIndex].title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {slides[activeIndex].caption}
              </p>

              <div className="flex items-center gap-3">
                <button
                  onClick={goPrev}
                  aria-label="Previous slide"
                  className="w-11 h-11 rounded-full bg-white border border-gray-200 text-[#1F2937] hover:border-[#FF6B35] hover:text-[#FF6B35] transition-colors cursor-pointer"
                >
                  <ChevronLeft className="mx-auto" size={20} />
                </button>
                <button
                  onClick={goNext}
                  aria-label="Next slide"
                  className="w-11 h-11 rounded-full bg-[#FF6B35] text-white hover:bg-[#E6521F] transition-colors cursor-pointer"
                >
                  <ChevronRight className="mx-auto" size={20} />
                </button>
              </div>
            </div>

            <div className="w-full lg:w-[60%]">
              <div className="relative w-full overflow-hidden">
                <div
                  className="flex transition-transform duration-700 ease-out"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                  {slides.map((slide) => (
                    <div key={slide.title} className="w-full shrink-0 px-1 md:px-3">
                      <div className="mx-auto max-w-[300px] rounded-[2.2rem] border-[10px] border-[#1F2937] bg-black shadow-2xl overflow-hidden">
                        <div className="relative aspect-[9/19] bg-gray-900">
                          <NextImage
                            src={slide.image}
                            alt={slide.title}
                            fill
                            unoptimized
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center gap-2 mt-6">
                {slides.map((slide, index) => (
                  <button
                    key={slide.title}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to ${slide.title}`}
                    className={`h-2.5 rounded-full transition-all cursor-pointer ${
                      index === activeIndex ? 'w-7 bg-[#FF6B35]' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileShowcase;
