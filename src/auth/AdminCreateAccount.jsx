import React, { useState } from 'react';

const AdminCreateAccount = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('engineer');

  const handleCreateAccount = (e) => {
    e.preventDefault();
    // هنا يتم إدخال كود لإنشاء الحساب (API) للأدمن فقط
    console.log('Creating account for:', { email, password, role });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Engineer Account</h2>
        <form onSubmit={handleCreateAccount}>
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
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminCreateAccount;
