import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../pages/DashboardLayout"; // يجب استخدام التخطيط الأساسي هنا فقط
import Dashboard from "../pages/Dashboard";
import Upload from "../pages/Upload";
import Edit from "../pages/Edit";
import Reports from "../pages/Reports";
import Settings from "../pages/Settings";
import Erorr404 from "../Erorrs/Error404";
import OperatorProperties from "../forms/OperatorProperties";
import CompanyProperties from "../forms/CompanyProperties";
import OilWell from "../pages/OilWell";
import AddProject from "../pages/AddProject";
const router = createBrowserRouter([
  {
    path: "/", // المسار الأساسي الذي يحتوي على لوحة التحكم
    element: <DashboardLayout />, // التخطيط الرئيسي للوحة التحكم
    children: [
      {
        path: "dashboard", // المسار الصحيح هو "dashboard" بدون "./"
        element: <Dashboard />, // مكون Dashboard سيتم عرضه هنا
      },
      {
        path: "upload",
        element: <Upload />,
      },
      {
        path: "edit",
        element: <Edit />,
      },
      {
        path: "Reports",
        element: <Reports />,
      },
      {
        path: "Settings",
        element: <Settings />,
      },
      {
        path: "*",
        element: <Erorr404 />,
      },
      {
        path: "OperatorProperties",
        element: <OperatorProperties />,
      },
      {
        path: "CompanyProperties",
        element: <CompanyProperties />,
      },
      {
        path: "OilWell",
        element: <OilWell />,
      },
      {
        path: "add",
        element: <AddProject />,
      },
      {
        path: "*",
        element: <Erorr404 />,
      },
    ],
  },
]);

export default router;
