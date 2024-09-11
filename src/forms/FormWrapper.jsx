import CompanyProperties from "./CompanyProperties";
import AntiCollisionSettings from "./AntiCollisionSettings";
import WarningsTable from "./WarningsTable";

const FormWrapper = () => {
  return (
    <div className="p-8 bg-gray-100 h-screen overflow-auto">
      <h1 className="text-3xl font-bold mb-8">Operator Properties</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <CompanyProperties />
        <AntiCollisionSettings />
      </div>
      <WarningsTable />
      <div className="flex justify-end mt-4">
        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Apply
        </button>
        <button className="bg-gray-300 text-black p-2 rounded ml-2">
          Close
        </button>
      </div>
    </div>
  );
};

export default FormWrapper;
