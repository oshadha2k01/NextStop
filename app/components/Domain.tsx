import React from 'react';

const Domain = () => {
  const imageDomains = [
    {
      title: "Research Background",
      image: "/domain/background.png",
      content: "Today's public transport commuters in Sri Lanka face constant uncertainty regarding bus arrival times and crowd levels. Despite widespread mobile internet access, there is a distinct lack of localized, intelligent travel management systems tailored for busy routes like Route 177."
    },
    {
      title: "Research Problem",
      image: "/domain/problem.png",
      content: "Existing public transport networks lack real-time data integration, dynamic fare calculation, and predictive insights. Commuters cannot accurately plan journeys due to unpredictable delays and unknown crowd densities at upcoming stops."
    },
    {
      title: "Methodology",
      image: "/domain/methodology.png",
      content: "Our approach utilizes a robust microservices architecture combining XGBoost for ETA prediction, YOLOv12 for crowd analysis, and a Node.js backend. This intelligence is delivered through highly responsive, cross-platform Flutter applications for both passengers and drivers, alongside a comprehensive React/Vite Super Admin dashboard for centralized fleet and feedback management."
    }
  ];

  return (
    <section id="domain" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2937] uppercase tracking-wide">Our Domain</h2>
          <div className="h-1 w-20 bg-[#FF6B35] mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto">Discover how NextStop is transforming the public transit experience through cutting-edge technology.</p>
        </div>

        {/* Top Section: Cards with Images */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {imageDomains.map((d, i) => (
            <div
              key={i}
              className="group flex flex-col bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-[#FF6B35]/10 transition-all duration-500 overflow-hidden"
            >
              <div className="h-56 overflow-hidden relative">
                <img
                  src={d.image}
                  alt={d.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#FF6B35] mb-4 group-hover:text-[#1F2937] transition-colors duration-300">
                  {d.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm text-justify">
                  {d.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section: Previous Styles (Text Only) */}
        <div className="space-y-16 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-[#FF6B35] mb-4 border-b-2 border-[#FF6B35]/20 pb-2">Literature Survey</h3>
            <p className="text-gray-600 leading-relaxed text-justify mb-4">
              Our literature survey reveals that while numerous public transportation management systems exist, there are significant gaps in how they address the dynamic realities of urban commuting, particularly in developing regions. Current research by global transport authorities indicates that unpredictable transit schedules and overcrowding deter up to 40% of potential passengers from utilizing public bus networks. Additionally, studies on urban mobility found that traditional GPS-based tracking causes frustration for daily commuters, largely due to inaccurate Estimated Times of Arrival (ETA) that fail to account for real-time traffic and contextual variables.
            </p>
            <p className="text-gray-600 leading-relaxed text-justify mb-4">
              Recent transit research demonstrates that addressing passenger crowding significantly boosts public transport adoption, yet most existing systems fail to leverage edge-computing and computer vision for real-time occupancy monitoring. According to urban accessibility studies, inclusive design in transit applications remains severely underutilized, leaving differently-abled commuters with limited support and information regarding seat availability.
            </p>
            <p className="text-gray-600 leading-relaxed text-justify">
              Furthermore, studies by recent IoT transit researchers emphasize the importance of context-aware machine learning models that integrate real-time tracking with predictive analytics, while fleet management research highlights the critical need for transparent pricing and driver behavior monitoring to ensure passenger safety and system efficiency.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#FF6B35] mb-4 border-b-2 border-[#FF6B35]/20 pb-2">Research Gap</h3>
            <p className="text-gray-600 leading-relaxed text-justify mb-4">
              Despite advances in smart city technologies, our research reveals several critical gaps in existing public transport management solutions:
            </p>
            <p className="text-gray-600 leading-relaxed text-justify mb-4">
              First, most current tracking applications fail to provide highly accurate, context-aware ETA predictions. They typically rely on basic distance-over-speed calculations rather than leveraging advanced machine learning algorithms (such as LSTM) to predict arrival times based on real-world variables like traffic, weather, and historical data.
            </p>
            <p className="text-gray-600 leading-relaxed text-justify mb-4">
              Second, there is a significant lack of real-time, privacy-preserving passenger occupancy monitoring. While reducing overcrowding is critical, existing solutions either rely on inaccurate manual ticketing data or utilize expensive, cloud-heavy camera systems, rather than deploying optimized, edge-based computer vision models (like YOLO) directly onboard the buses.
            </p>
            <p className="text-gray-600 leading-relaxed text-justify mb-4">
              Third, mobile transit interfaces severely lack inclusive accessibility features. Few platforms are designed with differently-abled users in mind, failing to provide essential tools like multilingual audio alerts, vibration feedback, or smart travel suggestions based on live seat availability.
            </p>
            <p className="text-gray-600 leading-relaxed text-justify">
              Finally, existing transit systems typically lack pre-onboarding transparency and dynamic fleet optimization. They do not provide predictive travel durations or transparent ticket pricing prior to the journey, and they lack mechanisms to actively monitor driver behavior in real-time through integrated passenger feedback.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#FF6B35] mb-4 border-b-2 border-[#FF6B35]/20 pb-2">Research Objectives</h3>
            <ul className="list-disc pl-6 space-y-4 text-gray-600 text-justify">
              <li><span className="font-bold text-[#1F2937]">Smart ETA & Routing:</span> Built an XGBoost predictive model using live and historical IoT data to provide users with highly accurate arrival times and trip durations.</li>
              <li><span className="font-bold text-[#1F2937]">Crowd Forecasting:</span> Developed an analytics pipeline to predict future bus capacity based on historical ridership trends, helping users plan trips proactively.</li>
              <li><span className="font-bold text-[#1F2937]">Computer Vision Passenger Tracking:</span> Deployed door-mounted cameras to automatically count passengers boarding and exiting, providing real-time metrics on bus capacity.</li>
              <li><span className="font-bold text-[#1F2937]">Digital Bus Hailing:</span> Created a real-time mobile feature allowing passengers to send their exact pickup location directly to the driver’s dashboard to prevent missed stops.</li>
              <li><span className="font-bold text-[#1F2937]">Cross-Platform Mobile Apps:</span> Developed synchronized Flutter applications for both passengers and drivers, powered by real-time WebSocket connections.</li>
              <li><span className="font-bold text-[#1F2937]">Dynamic Fare System:</span> Designed a Node.js/Express backend that automatically calculates ticket prices based on travel distance and official government rates.</li>
              <li><span className="font-bold text-[#1F2937]">Super Admin Dashboard:</span> Implemented a comprehensive React/Vite web platform for authorities to monitor real-time fleet operations, manage routes, and oversee driver behavior.</li>
              <li><span className="font-bold text-[#1F2937]">Feedback & Complaints System:</span> Developed an integrated reporting mechanism for passengers to provide insights on journey conditions and driver performance, ensuring quality of service.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Domain;
