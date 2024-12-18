import React from 'react';

const IntegrationsTable = () => {
  const integrations = [
    "Rest API",
    "GoHighLevel",
    "Zapier",
    "Make",
    "HubSpot",
    "Zoho",
    "Salesforce",
    "Activecampaign",
    "Clickfunnels",
    "Jobber",
  ];

  const columns = [1, 2, 3, 4]; // Representing the four checkmark columns

  return (
    <div className="max-w- mx-auto p-6 bg-white border rounded-lg shadow-md">
      {/* Title */}
      <div className="flex items-center gap-2 mb-4">
        <img
          src="https://via.placeholder.com/32"
          alt="integration icon"
          className="w-8 h-8"
        />
        <h2 className="text-2xl font-semibold text-gray-800">Integrations</h2>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full table-fixed border-collapse">
          <tbody>
            {integrations.map((item, rowIndex) => (
              <tr key={rowIndex} className="border-b">
                {/* Integration Name */}
                <td className="py-3 text-left text-gray-700 font-medium">
                  {item}
                </td>
                {/* Checkmarks */}
                {columns.map((col, colIndex) => (
                  <td key={colIndex} className="py-3 text-center">
                    <span className="text-purple-600 text-2xl font-semibold">
                      ✔
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IntegrationsTable;
