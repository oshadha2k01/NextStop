import React from 'react';

const Domain = () => {
  return (
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
  );
};

export default Domain;
