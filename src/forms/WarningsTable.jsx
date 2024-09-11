const WarningsTable = () => {
  return (
    <div className="bg-white shadow rounded p-4 mb-6">
      <h2 className="text-xl font-bold mb-4">Warnings</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Level</th>
            <th className="border p-2">Ratio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">Level 1</td>
            <td className="border p-2">2.000</td>
          </tr>
          <tr>
            <td className="border p-2">Level 2</td>
            <td className="border p-2">1.500</td>
          </tr>
          <tr>
            <td className="border p-2">Level 3</td>
            <td className="border p-2">1.000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
