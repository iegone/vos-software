import { useState } from 'react';

const Settings = () => {
  const [formData, setFormData] = useState({
    customer: "",
    wellLocation: "",
    wellName: "",
    rigNumber: "",
    surveyDate: "",
    latitude: "",
    longitude: "",
    northing: "",
    easting: "",
    dfe: "",
    gle: "",
    md: "",
    inclination: "",
    azimuth: "",
    tvd: "",
    vs: "",
    dls: "",
    engineerName: "",
    operatorName: "",
    toolNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg"
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Well Data Entry
      </h2>

      {/* القسم الأول: معلومات العميل والبئر */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Customer
          </label>
          <input
            type="text"
            name="customer"
            value={formData.customer}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Well Location
          </label>
          <input
            type="text"
            name="wellLocation"
            value={formData.wellLocation}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Well Name
          </label>
          <input
            type="text"
            name="wellName"
            value={formData.wellName}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Rig Number
          </label>
          <input
            type="text"
            name="rigNumber"
            value={formData.rigNumber}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Survey Date
          </label>
          <input
            type="date"
            name="surveyDate"
            value={formData.surveyDate}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded p-2"
          />
        </div>
      </div>

      {/* القسم الثاني: إحداثيات الموقع */}
      <div className="grid grid-cols-3 gap-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Latitude
          </label>
          <input
            type="text"
            name="latitude"
            value={formData.latitude}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Longitude
          </label>
          <input
            type="text"
            name="longitude"
            value={formData.longitude}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Northing
          </label>
          <input
            type="text"
            name="northing"
            value={formData.northing}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Easting
          </label>
          <input
            type="text"
            name="easting"
            value={formData.easting}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">DFE</label>
          <input
            type="text"
            name="dfe"
            value={formData.dfe}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">GLE</label>
          <input
            type="text"
            name="gle"
            value={formData.gle}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded p-2"
          />
        </div>
      </div>

      {/* القسم الثالث: معلومات الحفر */}
      <div className="grid grid-cols-3 gap-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            MD (Measured Depth)
          </label>
          <input
            type="text"
            name="md"
            value={formData.md}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Inclination
          </label>
          <input
            type="text"
            name="inclination"
            value={formData.inclination}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Azimuth
          </label>
          <input
            type="text"
            name="azimuth"
            value={formData.azimuth}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            TVD (True Vertical Depth)
          </label>
          <input
            type="text"
            name="tvd"
            value={formData.tvd}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            VS (Vertical Section)
          </label>
          <input
            type="text"
            name="vs"
            value={formData.vs}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            DLS (Dogleg Severity)
          </label>
          <input
            type="text"
            name="dls"
            value={formData.dls}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded p-2"
          />
        </div>
      </div>

      {/* القسم الأخير: معلومات عامة */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Engineer Name
          </label>
          <input
            type="text"
            name="engineerName"
            value={formData.engineerName}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Operator Name
          </label>
          <input
            type="text"
            name="operatorName"
            value={formData.operatorName}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Tool Number
          </label>
          <input
            type="text"
            name="toolNumber"
            value={formData.toolNumber}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded p-2"
          />
        </div>
      </div>

      {/* زر الإرسال */}
      <button
        type="submit"
        className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
      >
        Submit Well Data
      </button>
    </form>
  );
};

export default Settings;

