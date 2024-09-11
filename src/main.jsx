import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom"; // استيراد RouterProvider
import router from "./router"; // استيراد الروتر الذي قمت بإنشائه
import "./index.css"; // استيراد CSS لتشغيل Tailwind CSS


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
