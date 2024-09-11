import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";
import Navbar from "../components/Navbar";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-[250px_1fr] grid-rows-[auto_1fr] h-screen w-screen overflow-hidden">
      <Sidebar />
      <div className="grid grid-rows-[auto_1fr] min-h-0">
        {" "}
        {/* إضافة min-h-0 */}
        <Navbar />
        <main className="p-4 bg-background overflow-auto">
          {" "}
          {/* استخدام overflow-auto */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
