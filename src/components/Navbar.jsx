import { BsDatabaseAdd } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className=" bg-background h-16 flex items-center justify-between px-8 ">
      <h1 className="text-lg font-bold">Dashboard</h1>
      <div>
        <button className="px-4 py-2 flex items-center gap-2 bg-primary text-white rounded">
          <BsDatabaseAdd /> Import
        </button>
      </div>
    </div>
  );
};

export default Navbar;
