import React, { useState } from "react";

const OperatorProperties = () => {
  const [primaryLogo, setPrimaryLogo] = useState(null);
  const [secondaryLogo, setSecondaryLogo] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    address: "",
    scanMethod: "3D Closest Approach",
    errorSurface: "Pedal Curve",
    warningType: "Error Ratio",
    errorsSigma: 2.0,
    errorsOutputSigma: 2.0,
    casing: "Yes",
    errorsFrom: "Surface",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-6">
        {/* Company Properties */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">Company Properties</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Primary Logo</label>
              <div className="flex items-center space-x-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                  Select Primary Logo
                </button>
                <button className="px-4 py-2 bg-red-500 text-white rounded-lg">
                  Clear
                </button>
              </div>
            </div>
            <div>
              <label className="block text-gray-700">Secondary Logo</label>
              <div className="flex items-center space-x-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                  Select Secondary Logo
                </button>
                <button className="px-4 py-2 bg-red-500 text-white rounded-lg">
                  Clear
                </button>
              </div>
            </div>
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter Name"
              />
            </div>
            <div>
              <label className="block text-gray-700">Contact</label>
              <input
                type="text"
                name="contact"
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.contact}
                onChange={handleInputChange}
                placeholder="Enter Contact"
              />
            </div>
            <div>
              <label className="block text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter Address"
              />
            </div>
            <div>
              <button className="mt-6 px-4 py-2 bg-green-500 text-white rounded-lg">
                Set Password
              </button>
            </div>
          </div>
        </div>

        {/* Anti-Collision Settings */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">Anti-Collision Settings</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Scan Method</label>
              <select
                name="scanMethod"
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.scanMethod}
                onChange={handleInputChange}
              >
                <option>3D Closest Approach</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Error Surface</label>
              <select
                name="errorSurface"
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.errorSurface}
                onChange={handleInputChange}
              >
                <option>Pedal Curve</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Warning Type</label>
              <select
                name="warningType"
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.warningType}
                onChange={handleInputChange}
              >
                <option>Error Ratio</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">
                Errors Evaluated @ Sigma
              </label>
              <input
                type="number"
                name="errorsSigma"
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.errorsSigma}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-gray-700">
                Errors Output @ Sigma
              </label>
              <input
                type="number"
                name="errorsOutputSigma"
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.errorsOutputSigma}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-gray-700">Casing</label>
              <select
                name="casing"
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.casing}
                onChange={handleInputChange}
              >
                <option>Yes</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">
                Errors Calculated From
              </label>
              <select
                name="errorsFrom"
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.errorsFrom}
                onChange={handleInputChange}
              >
                <option>Surface</option>
              </select>
            </div>
          </div>
        </div>

        {/* Warnings */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">Warnings</h2>
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Ratio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Level 1</td>
                <td className="border px-4 py-2">2.000</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Level 2</td>
                <td className="border px-4 py-2">1.500</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Level 3</td>
                <td className="border px-4 py-2">1.000</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4">
          <button className="px-4 py-2 bg-gray-500 text-white rounded-lg">
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default OperatorProperties;
