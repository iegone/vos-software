import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../auth/Login";
import AdminCreateAccount from "./auth/AdminCreateAccount";
import AdminResetPassword from "./auth/AdminResetPassword";
import Dashboard from "./pages/Dashboard";
import AdminProtectedRoute from "./auth/AdminProtectedRoute";

const App = () => {
  const isAdmin = true; // يتم التحقق من حالة الأدمن هنا

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin/create-account"
          element={
            <AdminProtectedRoute isAdmin={isAdmin}>
              <AdminCreateAccount />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/admin/reset-password"
          element={
            <AdminProtectedRoute isAdmin={isAdmin}>
              <AdminResetPassword />
            </AdminProtectedRoute>
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
