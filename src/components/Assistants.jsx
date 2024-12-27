import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ title, description, color, onClick }) => (
  <div
    className={`${color} rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105`}
    onClick={onClick}
  >
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-3 text-white uppercase">{title}</h2>
      <p className="text-white mb-4">{description}</p>
      <button className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-full hover:bg-opacity-90 transition duration-300">
        Try Now
      </button>
    </div>
  </div>
);

export default function BeautifulCards() {
  const navigate = useNavigate();

  const handeStart = useCallback(
    (id) => {
      navigate("/assistant", { state: { id } });
    },
    [navigate]
  );
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-xl w-full p-8 shadow-2xl">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-2 rounded-lg">
              <span className="text-2xl">🏠</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              Your Real Estate AI Assistant
            </h3>
          </div>
          <button
            onClick={() => setShowModal(false)}
            className="text-gray-400 hover:text-gray-600 text-2xl"
          >
            ×
          </button>
        </div>

        <div className="space-y-6">
          <p className="text-gray-700 text-lg">
            I'm your AI-powered real estate assistant, ready to help you with:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: "🔍",
                title: "Property Search",
                desc: "Find your perfect home based on your preferences",
              },
              {
                icon: "💰",
                title: "Price Analysis",
                desc: "Get instant property valuations and market insights",
              },
              {
                icon: "📊",
                title: "Market Trends",
                desc: "Access real-time market data and trends",
              },
              {
                icon: "📝",
                title: "Listing Assistant",
                desc: "Help create compelling property descriptions",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg"
              >
                <span className="text-xl">{item.icon}</span>
                <div>
                  <h4 className="font-semibold text-gray-900">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t">
            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              onClick={() =>
                handeStart("Real-estate-New-iSKHignjLL9LrPsz-8Ajb")
              }
            >
              <span>Try Our AI Assistant</span>
              <span className="text-xl">→</span>
            </button>
            <p className="text-center text-sm text-gray-500 mt-4">
              Available 24/7 to help with your real estate needs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
