import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // Import Helmet for SEO
import { FaInfoCircle } from "react-icons/fa"; 
const LoginForm = ({ onLogin }) => {
  const URL='https://webmasters-backend-2.onrender.com'
  const navigate = useNavigate(); // Use navigate to redirect after login

  const [loginData, setLoginData] = useState({
    studentId: "",
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Send login request to the backend API
      const response = await axios.post(`${URL}/students/login`, {
        email: loginData.studentId, // Assuming the backend uses 'email' field for login
        password: loginData.password,
      });

      const { token, role,studentId } = response.data; // Assuming the response contains a token and role

      // Save the token and role in localStorage for later use
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      localStorage.setItem("studentId", studentId);

      // Call onLogin to update parent state
      onLogin(token, role);

      // Success toast notification
      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 3000,
      });

      // Redirect based on user role
      if (role === "student") {
        navigate('/student-dashboard'); // Redirect to student dashboard
      } else {
        navigate('/'); // Redirect to home page for other roles
      }
    } catch (error) {
      console.error("Login failed:", error.response ? error.response.data : error);
      
      // Error toast notification
      toast.error("Login failed. Please check your credentials.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <>
     {/* SEO Metadata */}
     <Helmet>
        <title>Student Login | Webmasters Learning</title>
        <meta
          name="description"
          content="Login to your student dashboard at Webmasters Learning and access your courses, grades, and more."
        />
        <meta
          name="keywords"
          content="student login, Webmasters Learning, student dashboard, course access, login form"
        />
        <meta name="author" content="Webmasters Learning" />
        <meta property="og:title" content="Student Login | Webmasters Learning" />
        <meta
          property="og:description"
          content="Login to your student dashboard at Webmasters Learning and access all your educational resources."
        />
        <meta property="og:image" content="/path-to-your-image.jpg" />
        <meta property="og:url" content="https://www.webmasterslearning.com/login" />
        <meta property="og:type" content="website" />
      </Helmet>

    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-blue-500 flex justify-center items-center p-6">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Student Login</h2>
        <form onSubmit={handleSubmit}>
          {/* Student ID Input */}
          <div className="mb-5">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="studentId">
              Student Email
            </label>
            <input
              type="email"
              id="studentId"
              name="studentId"
              value={loginData.studentId}
              onChange={handleChange}
              placeholder="Enter your Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 px-4 rounded-lg hover:bg-purple-600 transition duration-300 ease-in-out font-semibold shadow-lg"
            >
              Login
            </button>
          </div>
        </form>
        {/* Note for students */}
        <div className="mt-8 p-4 bg-purple-100 border-l-4 border-purple-500 text-purple-700 rounded-lg flex items-center">
            <FaInfoCircle className="mr-3 text-purple-600 text-xl" />
            <p className="text-sm">
              <strong>Note:</strong> You must be a registered student of Webmasters Learning to log in. If you are not enrolled yet, please{" "}
              <Link to="/contact" className="underline text-purple-800 hover:text-purple-600">
                contact us
              </Link>{" "}
              for assistance.
            </p>
          </div>
        <ToastContainer />
      </div>
    </div>
    </>
  );
};

export default LoginForm;
