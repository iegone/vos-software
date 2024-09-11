const AntiCollisionSettings = () => {
  return (
    <div className="bg-white shadow rounded p-4 mb-6">
      <h2 className="text-xl font-bold mb-4">Anti-Collision Settings</h2>
      <div className="grid grid-cols-2 gap-4">
        {/* Dropdowns for settings */}
        <div className="flex flex-col">
          <label className="font-medium">Scan Method</label>
          <select className="border p-2 rounded mt-1">
            <option>3D Closest Approach</option>
            <option>Other Method</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="font-medium">Error Surface</label>
          <select className="border p-2 rounded mt-1">
            <option>Pedal Curve</option>
            <option>Another Option</option>
          </select>
        </div>

        {/* Sigma Values */}
        <div className="flex flex-col">
          <label className="font-medium">Errors Evaluated @ Sigma</label>
          <input type="number" className="border p-2 rounded mt-1" />
        </div>

        <div className="flex flex-col">
          <label className="font-medium">Errors Output @ Sigma</label>
          <input type="number" className="border p-2 rounded mt-1" />
        </div>

        {/* Casing Radio Buttons */}
        <div className="flex flex-col col-span-2">
          <label className="font-medium">Include Casings</label>
          <div className="flex items-center space-x-4">
            <label>
              <input type="radio" name="casing" value="Yes" className="mr-2" />
              Yes
            </label>
            <label>
              <input type="radio" name="casing" value="No" className="mr-2" />
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
