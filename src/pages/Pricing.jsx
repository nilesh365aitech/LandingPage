import React from "react";
import PricingTable from "../components/pricingpart";
import Pricing1 from "../components/Pricing1";
import IntegrationsTable from "../components/IntegrationTable";
import SupportTable from "../components/SupportTable";
import Pricing0 from "../components/Pricing0";

const Pricing = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-zinc-900 to-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <div className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-sm inline-block">
              <span>⚪</span> Pricing
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Pricing That Scales With You
          </h1>
          <p className="text-lg mb-8">
            As your business expands, our pricing adjusts to match your evolving
            needs, ensuring cost-efficiency without compromise
          </p>
          <div className="flex justify-center space-x-4 mb-12">
            <button className="px-6 py-2 bg-purple-700 text-white rounded-md">
              Monthly
            </button>
            <button className="px-6 py-2 bg-zinc-800 text-purple-400 rounded-md">
              Annual (-11% OFF)
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 px-6">
            <div className="bg-purple-800 p-6 rounded-lg text-center">
              <h2 className="text-xl mb-4">Starter</h2>
              <p className="text-3xl font-bold mb-2">
                $29 <span className="text-lg font-normal">/mo*</span>
              </p>
              <p className="mb-6">50 Minutes</p>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-md">
                Subscribe
              </button>
            </div>

            <div className="bg-purple-800 p-6 rounded-lg text-center">
              <h2 className="text-xl mb-4">Pro</h2>
              <p className="text-3xl font-bold mb-2">
                $450 <span className="text-lg font-normal">/mo*</span>
              </p>
              <p className="mb-6">2,000 Minutes, then $0.13/min</p>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-md">
                Start Free Trial
              </button>
            </div>

            <div className="bg-purple-800 p-6 rounded-lg text-center">
              <h2 className="text-xl mb-4">Growth</h2>
              <p className="text-3xl font-bold mb-2">
                $900 <span className="text-lg font-normal">/mo*</span>
              </p>
              <p className="mb-6">4,000 Minutes, then $0.08/min</p>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-md">
                Start Free Trial
              </button>
            </div>

            <div className="bg-purple-800 p-6 rounded-lg text-center">
              <h2 className="text-xl mb-4">Agency</h2>
              <p className="text-3xl font-bold mb-2">
                $1,400 <span className="text-lg font-normal">/mo*</span>
              </p>
              <p className="mb-6">6,000 Minutes, then $0.13/min</p>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-md">
                Start Free Trial
              </button>
            </div>

            <div className="bg-purple-800 p-6 rounded-lg text-center">
              <h2 className="text-xl mb-4 pb-1">
                Enterprise{" "}
                <span className="bg-white text-purple-800 text-xs px-2 py-1 ml-2 rounded-full">
                  Dedicated
                </span>
              </h2>
              <p className="mb-6">
                For businesses needing top performance, scalability, and
                support.
              </p>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-md">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white text-zinc-800 :bg-zinc-900 :text-zinc-200 p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">
            Compare Plans and Make the Right Choice
          </h1>
          <div className="mt-4 inline-flex items-center space-x-2 text-sm">
            <div className="flex items-center cursor-pointer">
              <span className="flex items-center justify-center text-white bg-zinc-800 rounded-full w-8 h-8 :bg-zinc-700">
                <span className="text-xl">📄</span>
              </span>
              <span className="ml-2">Compare Plans</span>
            </div>
          </div>
        </div>
        <div className="bg-zinc-100 :bg-zinc-800 p-4 rounded-lg mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">Subscription Type</h2>
              <p className="text-sm">Save Money with an Annual plan</p>
            </div>
            <div className="flex space-x-2">
              <button className="px-4 py-1 bg-zinc-300 text-zinc-700 rounded-full focus:outline-none">
                Monthly
              </button>
              <button className="px-4 py-1 bg-white text-zinc-900 rounded-full focus:outline-none shadow">
                Annual (save up to 11%)
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-white :bg-zinc-800 p-4 rounded-lg text-center">
            <h3 className="text-lg font-bold">Starter</h3>
            <p className="text-sm text-zinc-600">Not available annually</p>
            <p className="text-xl font-semibold">$29/mo</p>
            <button className="mt-2 px-4 py-2 bg-zinc-200 :bg-zinc-700 rounded-full">
              Subscribe
            </button>
          </div>
          <div className="bg-white :bg-zinc-800 p-4 rounded-lg text-center">
            <h3 className="text-lg font-bold">Pro</h3>
            <p className="text-xl font-semibold">$375/mo</p>
            <button className="mt-2 px-4 py-2 bg-white text-zinc-900 border border-zinc-300 rounded-full shadow">
              Start Free Trial
            </button>
          </div>
          <div className="bg-white :bg-zinc-800 p-4 rounded-lg text-center">
            <h3 className="text-lg font-bold">Growth</h3>
            <p className="text-xl font-semibold">$750/mo</p>
            <button className="mt-2 px-4 py-2 bg-white text-zinc-900 border border-zinc-300 rounded-full shadow">
              Start Free Trial
            </button>
          </div>
          <div className="bg-white :bg-zinc-800 p-4 rounded-lg text-center">
            <h3 className="text-lg font-bold">Agency</h3>
            <p className="text-xl font-semibold">$1,250/mo</p>
            <button className="mt-2 px-4 py-2 bg-purple-600 text-white rounded-full">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
      {/* <Pricing1/> */}
      <Pricing0 />
      <PricingTable />
      <IntegrationsTable />
      <SupportTable />
    </>
  );
};

export default Pricing;
