import React, { useState } from "react";

const AdminResetPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleResetPassword = (e) => {
    e.preventDefault();
    // هنا يتم إدخال كود إعادة تعيين كلمة المرور (API) من قبل الأدمن فقط
    console.log("Resetting password for:", { email, newPassword });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Reset Engineer Password
        </h2>
        <form onSubmit={handleResetPassword}>
          <div className="mb-4">
            <label className="block text-gray-700">Engineer Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminResetPassword;
