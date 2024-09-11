const CompanyProperties = () => {
  return (
    <div className="bg-white shadow rounded p-4 mb-6">
      <h2 className="text-xl font-bold mb-4">Company Properties</h2>
      <div className="grid grid-cols-2 gap-4">
        {/* Primary Logo Upload */}
        <div className="flex flex-col">
          <label className="font-medium">Primary Logo</label>
          <input type="file" className="border p-2 rounded mt-1" />
        </div>

        {/* Secondary Logo Upload */}
        <div className="flex flex-col">
          <label className="font-medium">Secondary Logo</label>
          <input type="file" className="border p-2 rounded mt-1" />
        </div>

        {/* Company Details */}
        <div className="col-span-2 flex flex-col">
          <label className="font-medium">Name</label>
          <input type="text" className="border p-2 rounded mt-1" />
        </div>

        <div className="flex flex-col">
          <label className="font-medium">Contact</label>
          <input type="text" className="border p-2 rounded mt-1" />
        </div>

        <div className="flex flex-col">
          <label className="font-medium">Address</label>
          <input type="text" className="border p-2 rounded mt-1" />
        </div>

        <button className="col-span-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Set Password
        </button>
      </div>
    </div>
  );
};
export default CompanyProperties;