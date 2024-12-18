import React from "react";

const SupportTable = () => {
  const supportItems = [
    "White-Glove Onboarding",
    "Dedicated Support Manager",
    "Private Slack Channel**",
    "Early Release Features",
    "Synthflow Academy",
    "High Priority Email Support",
  ];

  const columns = [1, 2, 3, 4]; // Represents 4 checkmark columns

  return (
    <div className=" mx-auto p-6 bg-white border rounded-lg shadow-md">
      {/* Title */}
      <div className="flex items-center gap-2 mb-4">
        <img
          src="https://via.placeholder.com/32"
          alt="support icon"
          className="w-8 h-8"
        />
        <h2 className="text-2xl font-semibold text-gray-800">Support</h2>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full table-fixed border-collapse">
          <tbody>
            {supportItems.map((item, rowIndex) => (
              <tr key={rowIndex} className="border-b">
                {/* Support Feature Name */}
                <td
                  className={`py-3 text-left ${
                    item.includes("**")
                      ? "text-red-500 font-medium"
                      : "text-gray-700 font-medium"
                  }`}
                >
                  {item}
                </td>

                {/* Checkmarks */}
                {columns.map((col, colIndex) => (
                  <td key={colIndex} className="py-3 text-center">
                    {colIndex >= 2 || (rowIndex >= 4 && colIndex >= 1) ? (
                      <span className="text-purple-600 text-2xl font-semibold">
                        ✔
                      </span>
                    ) : (
                      <span className="text-gray-400 text-2xl">—</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Note */}
      <div className="mt-4 text-sm text-gray-500">
        <span className="text-red-500 font-semibold">**</span> Private 40-day
        slack channel then High Priority Email Support
      </div>
    </div>
  );
};

export default SupportTable;
