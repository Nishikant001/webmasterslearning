import React, { useState } from "react";

const SuperAdminLoginForm = () => {
  // State to manage the login form input
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // Handle change for form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send the loginData to a backend service or log it in the console
    console.log("SuperAdmin Login Data:", loginData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-600 to-orange-500 flex justify-center items-center p-6">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">SuperAdmin Login</h2>
        <form onSubmit={handleSubmit}>
          {/* SuperAdmin Email Input */}
          <div className="mb-5">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-5">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-3 px-4 rounded-lg hover:bg-red-600 transition duration-300 ease-in-out font-semibold shadow-lg"
            >
              Login
            </button>
          </div>
        </form>

        {/* Forgot Password */}
        <div className="text-center mt-4">
          <a href="/forgot-password" className="text-sm text-red-600 hover:underline">
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminLoginForm;
