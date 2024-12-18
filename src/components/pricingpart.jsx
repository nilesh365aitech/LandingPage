import React from "react";

const PricingTable = () => {
  return (
    <div className=" mx-auto mt-10 bg-white shadow-md p-6 rounded-lg">
      {/* Actions Section */}
      <div>
        <h2 className="text-purple-600 font-semibold text-xl mb-4 flex items-center">
          <span className="mr-2">⚡</span> Actions
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 border-b pb-4 mb-6">
          <div className="col-span-2">
            <p>Send SMS</p>
          </div>
          <Checkmarks />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 border-b pb-4 mb-6">
          <div className="col-span-2">
            <p>Real Time Booking</p>
          </div>
          <Checkmarks />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 border-b pb-4 mb-6">
          <div className="col-span-2">
            <p>Call Transfer</p>
          </div>
          <Checkmarks />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 border-b pb-4 mb-6">
          <div className="col-span-2">
            <p>Information Extractor</p>
          </div>
          <Checkmarks />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 mb-6">
          <div className="col-span-2">
            <p>Custom Actions</p>
          </div>
          <Checkmarks />
        </div>
      </div>

      {/* White Label Section */}
      <div>
        <h2 className="text-purple-600 font-semibold text-xl mb-4 flex items-center">
          <span className="mr-2">☑️</span> White Label
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 border-b pb-4 mb-6">
          <div className="col-span-2">
            <p>Your own white label platform</p>
          </div>
          <div className="col-span-4 flex justify-center items-center">
            <span className="text-gray-400">-</span>
          </div>
        </div>
      </div>

      {/* Collaboration Section */}
      <div>
        <h2 className="text-purple-600 font-semibold text-xl mb-4 flex items-center">
          <span className="mr-2">👥</span> Collaboration
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-4">
          <div className="col-span-2">
            <p>Invite Team Members</p>
          </div>
          <Checkmarks />
        </div>
      </div>
    </div>
  );
};

// Checkmarks Component
const Checkmarks = () => {
  return (
    <>
      {Array.from({ length: 4 }).map((_, idx) => (
        <div key={idx} className="flex justify-center items-center">
          <span className="text-purple-600 font-semibold text-xl">✔</span>
        </div>
      ))}
    </>
  );
};

export default PricingTable;
