import React, { useState } from "react";
import {
  Clock,
  Calendar,
  Phone,
  MessageCircle,
  CheckCircle,
  Star,
  ArrowRight,
  Play,
  Users,
  TrendingUp,
  Award,
  Bell,
  DollarSign,
  ArrowUpRight,
} from "lucide-react";

const PlanLanding = () => {
  const bots = [
    {
      id: 1,
      name: "PropertyResponse Pro",
      description: "24/7 inquiry handling and viewing scheduler",
      price: 199,
      rating: 4.9,
      reviews: 128,
      image: "/api/placeholder/300/200",
      features: [
        "Lead Qualification",
        "Calendar Integration",
        "Multi-language",
      ],
      bestFor: "Individual Agents",
      monthlyLeads: "150+",
    },
    {
      id: 2,
      name: "ListingAssist AI",
      description: "Automated listing inquiries and property details",
      price: 299,
      rating: 4.8,
      reviews: 94,
      image: "/api/placeholder/300/200",
      features: ["Listing Management", "Price Inquiries", "Area Information"],
      bestFor: "Brokerages",
      monthlyLeads: "300+",
    },
    {
      id: 3,
      name: "ShowingBot Pro",
      description: "Smart showing scheduler with follow-up automation",
      price: 249,
      rating: 4.7,
      reviews: 156,
      image: "/api/placeholder/300/200",
      features: [
        "Automated Scheduling",
        "Reminder System",
        "Feedback Collection",
      ],
      bestFor: "Teams",
      monthlyLeads: "200+",
    },
  ];

  return (
    <>
      {" "}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your Perfect AI Assistant
            </h2>
            <p className="text-gray-600">
              Handpicked solutions for real estate professionals
            </p>
          </div>

          {/* Bot Grid */}
          <div className="grid grid-cols-3 gap-8">
            {bots.map((bot) => (
              <div
                key={bot.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="relative">
                  <img
                    src={bot.image}
                    alt={bot.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center shadow-sm">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-medium">
                      {bot.rating}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {bot.name}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {bot.description}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-2">
                      Best For: {bot.bestFor}
                    </div>
                    <div className="text-sm text-gray-600">
                      Monthly Leads: {bot.monthlyLeads}
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {bot.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-gray-900">
                      <span className="text-sm text-gray-600">From</span>
                      <span className="text-xl font-bold ml-1">
                        ${bot.price}
                      </span>
                      <span className="text-sm text-gray-600">/mo</span>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center">
                      Try Free
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanLanding;
