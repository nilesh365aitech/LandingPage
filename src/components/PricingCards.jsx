import React, { useState, useEffect } from "react";

const PricingCards = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await fetch(
          "https://configstaging.trainright.fit/api/plans/getAllPlans"
        );
        const result = await response.json();
        setPlans(result.data);
      } catch (error) {
        console.error("Error fetching plans:", error);
      }
    };

    fetchPlans();
  }, []);

  return (
    <div>
      <div className="bg-gradient-to-b from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <div className="px-3 py-1 bg-blue-800 text-blue-100 rounded-full text-sm inline-block">
              <span>⚪</span> Pricing
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Pricing That Scales With You
          </h1>
          <p className="text-lg mb-8">
            Choose the perfect plan for your needs with our flexible pricing
            options
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
            {plans.map((plan) => (
              <div
                key={plan._id}
                className="bg-white text-blue-900 p-6 rounded-lg text-center shadow-lg"
              >
                <h2 className="text-xl font-bold mb-4">{plan.name}</h2>
                <p className="text-3xl font-bold mb-2">
                  ${plan.price}
                  <span className="text-lg font-normal">/mo</span>
                </p>
                <div className="mb-6 space-y-2">
                  <p>{plan.credits} Credits</p>
                  <p>{plan.callDuration} Minutes</p>
                  <p>{plan.creditsUsedPerMin} Credits/Min</p>
                </div>
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  {plan.price === 0 ? "Start Free" : "Subscribe Now"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-50 text-blue-900 p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">
            Compare Plans and Make the Right Choice
          </h2>
          <p className="mt-4 text-gray-600">
            All plans include basic features with different credit allocations
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
