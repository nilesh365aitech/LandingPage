import React from 'react';
import { ShoppingCart, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

const HorizontalBotCatalog = ({ onBuyNow }) => {
  
    const categories = [
        {
          name: "Healthcare",
          bots: [
            {
              id: 1,
              name: "MediAssist AI",
              description: "24/7 patient support voice bot with medical terminology understanding.",
              price: 299,
              image: "/api/placeholder/300/200"
            },
            {
              id: 2,
              name: "HealthGuide Pro",
              description: "Symptom assessment and medical information voice assistant.",
              price: 399,
              image: "/api/placeholder/300/200"
            },
            {
              id: 3,
              name: "NurseBot AI",
              description: "Automated nursing assistant for patient monitoring.",
              price: 349,
              image: "/api/placeholder/300/200"
            },
            {
              id: 4,
              name: "MedScheduler",
              description: "Appointment scheduling and reminder voice assistant.",
              price: 249,
              image: "/api/placeholder/300/200"
            },
            {
              id: 5,
              name: "PharmacyHelper",
              description: "Medication information and reminder voice bot.",
              price: 199,
              image: "/api/placeholder/300/200"
            }
          ]
        },
    
  ];

  const scroll = (direction, categoryName) => {
    const container = document.getElementById(`scroll-${categoryName}`);
    const scrollAmount = 800;
    if (container) {
      const scrollPosition = direction === 'left'
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;
      container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">
        AI Voice Bots Marketplace
      </h1>

      {categories.map((category) => (
        <div key={category.name} className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 px-4">{category.name}</h2>
          <div className="relative">
            <button
              onClick={() => scroll('left', category.name)}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            <div
              id={`scroll-${category.name}`}
              className="flex overflow-x-auto gap-6 px-12 pb-4 scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {category.bots.map((bot) => (
                <div
                  key={bot.id}
                  className="flex-none w-72 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
                >
                  <img src={bot.image} alt={bot.name} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{bot.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 h-12 overflow-hidden">{bot.description}</p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xl font-bold text-gray-800">${bot.price}</span>
                      <div className="flex gap-2">
                        <button
                          className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                          aria-label="View details"
                        >
                          <Eye className="w-4 h-4 text-gray-600" />
                        </button>
                        <button
                          onClick={() => onBuyNow(bot)}
                          className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                        >
                          <ShoppingCart className="w-4 h-4 mr-1" />
                          Buy
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => scroll('right', category.name)}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HorizontalBotCatalog;
