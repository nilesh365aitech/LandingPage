import React from 'react';

const Pricing1 = () => {
  return (
    <div className=" px-7 p-4 bg-white border rounded-lg shadow-md">
      {/* Costs Structure Section */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <img src="https://via.placeholder.com/24" alt="icon" />
          <h2 className="text-xl font-semibold text-gray-800">Costs Structure</h2>
        </div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="py-2">Minutes Included</th>
              <th className="py-2 text-center">50</th>
              <th className="py-2 text-center">2,000</th>
              <th className="py-2 text-center">4,000</th>
              <th className="py-2 text-center">6,000</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2">Overage cost/min.*</td>
              <td className="py-2 text-center">-</td>
              <td className="py-2 text-center">$0.13</td>
              <td className="py-2 text-center">$0.13</td>
              <td className="py-2 text-center">$0.08-$0.13</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2 text-sm text-purple-600">
          * <a href="#" className="underline">Contact sales</a> for our volume-based pricing table.
        </p>
      </div>

      <hr className="my-4" />

      {/* Core Capabilities Section */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <img src="https://via.placeholder.com/24" alt="icon" />
          <h2 className="text-xl font-semibold text-gray-800">Core Capabilities</h2>
        </div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="py-2">Concurrent Calls</th>
              <th className="py-2 text-center">10</th>
              <th className="py-2 text-center">25</th>
              <th className="py-2 text-center">50</th>
              <th className="py-2 text-center">100</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2">Unlimited Assistants</td>
              <td className="py-2 text-center">✔</td>
              <td className="py-2 text-center">✔</td>
              <td className="py-2 text-center">✔</td>
              <td className="py-2 text-center">✔</td>
            </tr>
            <tr>
              <td className="py-2">Subaccounts</td>
              <td className="py-2 text-center">-</td>
              <td className="py-2 text-center">-</td>
              <td className="py-2 text-center">25</td>
              <td className="py-2 text-center">Unlimited</td>
            </tr>
            <tr>
              <td className="py-2">Rebilling</td>
              <td className="py-2 text-center">-</td>
              <td className="py-2 text-center">-</td>
              <td className="py-2 text-center">✔</td>
              <td className="py-2 text-center">✔</td>
            </tr>
            <tr>
              <td className="py-2">Multilanguage</td>
              <td className="py-2 text-center">✔</td>
              <td className="py-2 text-center">✔</td>
              <td className="py-2 text-center">✔</td>
              <td className="py-2 text-center">✔</td>
            </tr>
            <tr>
              <td className="py-2">Batch campaigns</td>
              <td className="py-2 text-center">-</td>
              <td className="py-2 text-center">✔</td>
              <td className="py-2 text-center">✔</td>
              <td className="py-2 text-center">✔</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pricing1;
