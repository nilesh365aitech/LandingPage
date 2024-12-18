import React from "react";

const Pricing0 = () => {
  return (
    <div className="max-w-4x mx-auto p-6 bg-white border rounded-lg shadow-md">
      {/* Costs Structure */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span role="img" aria-label="user-icon" className="text-2xl">
            👤
          </span>
          <h2 className="text-2xl font-semibold text-gray-800">
            Costs Structure
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full table-fixed border-collapse">
            <thead>
              <tr className="text-gray-600 border-b">
                <th className="py-3 px-4 text-left">Minutes Included</th>
                <th className="py-3 px-4">50</th>
                <th className="py-3 px-4">2,000</th>
                <th className="py-3 px-4">4,000</th>
                <th className="py-3 px-4">6,000</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-4 text-gray-600">Overage cost/min.*</td>
                <td className="py-3 px-4">—</td>
                <td className="py-3 px-4">$0.13</td>
                <td className="py-3 px-4">$0.13</td>
                <td className="py-3 px-4">$0.08–$0.13</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          *<span className="text-red-500 cursor-pointer">Contact sales</span>{" "}
          for our volume-based pricing table.
        </p>
      </div>

      {/* Core Capabilities */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span role="img" aria-label="core-icon" className="text-2xl">
            ✅
          </span>
          <h2 className="text-2xl font-semibold text-gray-800">
            Core Capabilities
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full table-fixed border-collapse">
            <thead>
              <tr className="text-gray-600 border-b">
                <th className="py-3 px-4 text-left">Feature</th>
                <th className="py-3 px-4">10</th>
                <th className="py-3 px-4">25</th>
                <th className="py-3 px-4">50</th>
                <th className="py-3 px-4">100</th>
              </tr>
            </thead>
            <tbody>
              {/* Concurrent Calls */}
              <tr className="border-b">
                <td className="py-3 px-4 text-gray-600">Concurrent Calls</td>
                <td className="py-3 px-4">10</td>
                <td className="py-3 px-4">25</td>
                <td className="py-3 px-4">50</td>
                <td className="py-3 px-4">100</td>
              </tr>
              {/* Unlimited Assistants */}
              <tr className="border-b">
                <td className="py-3 px-4 text-gray-600">Unlimited Assistants</td>
                <td className="py-3 px-4 text-purple-600 text-2xl font-semibold">
                  ✔
                </td>
                <td className="py-3 px-4 text-purple-600 text-2xl font-semibold">
                  ✔
                </td>
                <td className="py-3 px-4 text-purple-600 text-2xl font-semibold">
                  ✔
                </td>
                <td className="py-3 px-4 text-purple-600 text-2xl font-semibold">
                  ✔
                </td>
              </tr>
              {/* Subaccounts */}
              <tr className="border-b">
                <td className="py-3 px-4 text-gray-600">Subaccounts</td>
                <td className="py-3 px-4">—</td>
                <td className="py-3 px-4">—</td>
                <td className="py-3 px-4">25</td>
                <td className="py-3 px-4">Unlimited</td>
              </tr>
              {/* Rebilling */}
              <tr className="border-b">
                <td className="py-3 px-4 text-gray-600">Rebilling</td>
                <td className="py-3 px-4">—</td>
                <td className="py-3 px-4">—</td>
                <td className="py-3 px-4 text-purple-600 text-2xl font-semibold">
                  ✔
                </td>
                <td className="py-3 px-4 text-purple-600 text-2xl font-semibold">
                  ✔
                </td>
              </tr>
              {/* Multilanguage */}
              <tr className="border-b">
                <td className="py-3 px-4 text-gray-600">Multilanguage</td>
                <td className="py-3 px-4 text-purple-600 text-2xl font-semibold">
                  ✔
                </td>
                <td className="py-3 px-4 text-purple-600 text-2xl font-semibold">
                  ✔
                </td>
                <td className="py-3 px-4 text-purple-600 text-2xl font-semibold">
                  ✔
                </td>
                <td className="py-3 px-4 text-purple-600 text-2xl font-semibold">
                  ✔
                </td>
              </tr>
              {/* Batch Campaigns */}
              <tr className="border-b">
                <td className="py-3 px-4 text-gray-600">Batch Campaigns</td>
                <td className="py-3 px-4">—</td>
                <td className="py-3 px-4 text-purple-600 text-2xl font-semibold">
                  ✔
                </td>
                <td className="py-3 px-4 text-purple-600 text-2xl font-semibold">
                  ✔
                </td>
                <td className="py-3 px-4 text-purple-600 text-2xl font-semibold">
                  ✔
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Pricing0;
