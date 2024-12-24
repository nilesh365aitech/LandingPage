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
  DollarSign,
  Users,
  TrendingUp,
  Award,
  Bell,
} from "lucide-react";
import { ScheduleMeetingModal } from "./Home";

const EnhancedRealEstateLanding = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(false);
  const [missedCalls, setMissedCalls] = useState(20);
  const [dealValue, setDealValue] = useState(10000);
  const aiAssistantCost = 500; // Monthly cost of AI Assistant

  const dealConversionRate = 0.015; // 1.5%

  // Calculate Additional Monthly Revenue
  const additionalRevenue = Math.round(
    missedCalls * dealConversionRate * dealValue
  );

  // Calculate ROI
  const roi = Math.round(
    ((additionalRevenue - aiAssistantCost) / aiAssistantCost) * 100
  );
  const bot = {
    id: 301,
    name: "Property Finder AI",
    description:
      "Simplifies property search with tailored recommendations, efficient appointment scheduling, and preference filtering.",
    price: 9,
    image: "/src/assets/2.png",
    videoUrl: "https://www.youtube.com/embed/wIF4TU2zDA0",
    integrations: ["Google Calendar", "CRM (Airtable)", "Email", "SMS"],
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Announcement Banner */}
      {/* <div className="bg-blue-900 text-white px-4 py-3 text-center">
        <div className="flex items-center justify-center gap-2">
          <Bell className="w-4 h-4" />
          <span>Limited Time Offer: Get 3 Months Free + Premium Features Access</span>
          <button className="ml-4 px-3 py-1 bg-white text-blue-900 rounded-full text-sm font-semibold hover:bg-blue-50">
            Claim Now
          </button>
        </div>
      </div> */}

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex justify-between items-center">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-blue-600" />
                <span className="text-blue-600 font-semibold">
                  #1 Rated Real Estate AI Assistant
                </span>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Turn Missed Calls into Closed Deals{" "}
                <span className="text-blue-600">While You Sleep</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Your AI assistant handles unlimited calls, schedules viewings,
                and qualifies leads 24/7 - so you never miss a potential sale.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center">
                  Start 30-Day Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button
                  className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center"
                  onClick={() => setIsVideoModalOpen(true)}
                >
                  Watch 2-Min Demo
                  <Play className="w-5 h-5 ml-2" />
                </button>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  No credit card required
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Setup in 5 minutes
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Cancel anytime
                </div>
              </div>
            </div>
            {/* Live Demo Preview */}
            <div className="hidden lg:block w-96 bg-white rounded-lg shadow-xl p-6">
              <div className="text-center mb-4">
                <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm mb-2">
                  Live Demo
                </div>
                <h3 className="font-semibold">See It In Action</h3>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="animate-pulse space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
              <button
                className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                onClick={() => setActiveModal(true)}
              >
                Try Interactive Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof Bar */}
      {/* <div className="border-y bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center">
            <div className="text-gray-600">
              Trusted by 10,000+ Real Estate Professionals
            </div>
            <div className="flex items-center gap-8">
              <img
                src="/api/placeholder/100/40"
                alt="RE/MAX"
                className="h-8 object-contain"
              />
              <img
                src="/api/placeholder/100/40"
                alt="Century 21"
                className="h-8 object-contain"
              />
              <img
                src="/api/placeholder/100/40"
                alt="Keller Williams"
                className="h-8 object-contain"
              />
              <img
                src="/api/placeholder/100/40"
                alt="Coldwell Banker"
                className="h-8 object-contain"
              />
            </div>
          </div>
        </div>
      </div> */}
      <div className="bg-[#2563EB] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              See It In Action
            </h2>
            <p className="text-blue-100">
              Watch how our AI Assistant transforms your workflow
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-gradient-to-r from-blue-700 to-blue-600 rounded-xl overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/watch?v=wIF4TU2zDA0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* ROI Calculator Section */}
      <div className="py-20 bg-gray-50 border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Calculate Your Revenue Potential
            </h2>
            <p className="text-gray-600">
              See how much more you could earn by never missing a lead
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-2 gap-8">
              {/* User Input Section */}
              <div>
                <h3 className="font-semibold mb-4">Your Current Numbers</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      Average Monthly Missed Calls
                    </label>
                    <input
                      type="number"
                      className="w-full border rounded-lg px-3 py-2"
                      placeholder="20"
                      value={missedCalls}
                      onChange={(e) => setMissedCalls(Number(e.target.value))}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      Average Deal Value
                    </label>
                    <input
                      type="number"
                      className="w-full border rounded-lg px-3 py-2"
                      placeholder="$10,000"
                      value={dealValue}
                      onChange={(e) => setDealValue(Number(e.target.value))}
                    />
                  </div>
                </div>
              </div>

              {/* Results Section */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-semibold mb-4">
                  Your Potential with AI Assistant
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Additional Monthly Revenue</span>
                    <span className="text-2xl font-bold text-blue-600">
                      ${additionalRevenue.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>ROI</span>
                    <span className="text-2xl font-bold text-green-600">
                      {roi.toLocaleString()}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Comparison */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Without vs. With AI Assistant
          </h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="p-8 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-6 text-gray-500">
                Without AI Assistant
              </h3>
              <ul className="space-y-4">
                {[
                  "Miss leads while with clients or sleeping",
                  "Manually schedule and reschedule viewings",
                  "Waste time on unqualified leads",
                  "Limited to working hours only",
                  "Risk losing leads to faster-responding agents",
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-500">
                    <span className="w-5 h-5 mr-3 flex-shrink-0">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 bg-blue-50 rounded-lg border-2 border-blue-600">
              <h3 className="text-xl font-semibold mb-6 text-blue-900">
                With AI Assistant
              </h3>
              <ul className="space-y-4">
                {[
                  "Never miss a lead - 24/7 instant response",
                  "Automated scheduling synced to your calendar",
                  "Smart lead qualification before your involvement",
                  "Work around the clock automatically",
                  "Always first to respond to new leads",
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-blue-900">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories Carousel */}
      {/* <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Success Stories
              </h2>
              <p className="text-gray-600">
                Join thousands of agents who have transformed their business
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex justify-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-6 h-6 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <blockquote className="text-xl text-gray-900 mb-6">
                "I was skeptical at first, but this AI assistant has been a
                game-changer. Last month, it handled 127 calls while I was
                showing properties, resulting in 14 new listings!"
              </blockquote>
              <div className="flex items-center gap-4">
                <img
                  src="/api/placeholder/48/48"
                  alt="Agent"
                  className="rounded-full"
                />
                <div>
                  <div className="font-semibold">Michael Rodriguez</div>
                  <div className="text-gray-600">
                    Top 1% Producer, Los Angeles
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Guarantee Section */}
      {/* <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            30-Day Money-Back Guarantee
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Try it risk-free. If you don't see an improvement in your response rate and lead conversion within 30 days, we'll refund every penny.
          </p>
          <button className="px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-blue-50 font-semibold">
            Start Your Risk-Free Trial
          </button>
          <p className="mt-4 text-sm text-blue-200">
            No credit card required • Cancel anytime
          </p>
        </div>
      </div> */}

      {/* FOMO Section */}
      <div className="border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Users className="w-6 h-6 text-blue-600" />
              <span className="text-gray-600">
                <strong>73 agents</strong> signed up in the last 24 hours
              </span>
            </div>
            <div className="flex items-center gap-4">
              <TrendingUp className="w-6 h-6 text-green-600" />
              <span className="text-gray-600">
                <strong>Limited spots available</strong> for your area
              </span>
            </div>
          </div>
        </div>
      </div>
      <ScheduleMeetingModal
        isOpen={activeModal}
        onClose={() => setActiveModal(false)}
        bot={bot}
        mode="schedule"
      />
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-blue-900 bg-opacity-50 flex justify-center items-center z-50">
          <div
            className="relative bg-white rounded-lg shadow-lg w-[90%] max-w-2xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-blue-600 hover:text-blue-800 transition focus:outline-none"
              onClick={() => setIsVideoModalOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="text-center mb-4">
              <h2 className="text-2xl font-bold text-blue-600">
                Watch the Demo
              </h2>
              <p className="text-blue-500">
                Explore the interactive demo by watching this video.
              </p>
            </div>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md">
              <iframe
                width="100%"
                height="400px"
                src="https://www.youtube.com/watch?v=wIF4TU2zDA0"
                title="Interactive Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnhancedRealEstateLanding;
