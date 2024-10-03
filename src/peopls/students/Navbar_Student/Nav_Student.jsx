import React from "react";
import { FiPlus } from "react-icons/fi";
import { IoPersonCircle } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate to redirect after logout
import Navbar_Small_Student from "./Nav_Small_Student";

const Navbar_Student = ({ onLogout }) => {
    const navigate = useNavigate(); // Hook for navigation

    // Function to handle logout and clear authentication state
    const handleLogout = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("role");

      // Call onLogout to update parent state and redirect to login or home
      onLogout();

      // Redirect to login or home page
      navigate("/student-login");
    };

  return (
    <>
    <nav className="  lg:block hidden ">
      <div className="container-fluid xl:space-x-52 lg:space-x-28  flex justify-center items-center w-full fixed shadow-lg bg-slate-100 p-4 z-50">
        <a href="#" className="text-black text-xl font-bold flex justify-start">
          WebMasters Learning
        </a>
        <ul className="flex xl:space-x-16 lg:space-x-12  justify-center items-center">
          {/* Home Dropdown */}
          
          {/* Courses Dropdown */}
          <li className="relative group">
            <button className=" focus:outline-none text-base hover:bg-custom-blue hover:rounded hover:h-full hover:text-white p-2">
              Courses
              <FiPlus className="inline  text-sm ml-1" />
            </button>
            <ul className="absolute -left-2 mt-2 w-40 bg-white rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
              <li>
                <a
                  href="/course"
                  className="block px-2 py-2 text-gray-800  hover:bg-custom-blue hover:rounded hover:h-full hover:text-white p-2"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="/course2"
                  className="block px-2 py-2 text-gray-800  hover:bg-custom-blue hover:rounded hover:h-full hover:text-white p-2"
                >
                  Top Courses
                </a>
              </li>
            </ul>
          </li>
          {/* Team Dropdown */}
          <li className="relative group">
            <a href="/team">
            <button className=" focus:outline-none text-base hover:bg-custom-blue hover:rounded hover:h-full hover:text-white p-2">
              Team
              <FiPlus className="inline  text-sm ml-1" />
            </button>
            </a>
            
          </li>
          {/* Pages Dropdown */}
         
          {/* Blog Dropdown */}
          <li className="relative group">
          <Link to="/queryform">
            <button className=" focus:outline-none text-base hover:bg-custom-blue hover:rounded hover:h-full hover:text-white p-2">
              Query
              <FiPlus className=" text-sm ml-1 inline" />
            </button>
            </Link>
            
          </li>
          {/* Contact */}
          <li>
            <a href="/contact" className=" text-base hover:bg-custom-blue hover:rounded hover:h-full hover:text-white p-2">
              Contact
            </a>
          </li>
          {/* Profile Dropdown */}
          <li className="relative group">
            
              <IoPersonCircle className="  text-3xl ml-1 hover:text-custom-blue" />
            
            <ul className="absolute right-0 mt-2 w-32 bg-white rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
              <li>
                <a
                  href="/student-dashboard"
                  className="block px-2 py-2 text-gray-800 hover:bg-custom-blue hover:text-white rounded hover:rounded "
                >
                  Profile
                </a>
              </li>
            
              <li>
                <a onClick={handleLogout}
                  href="#"
                  className="block px-2 py-2 text-gray-800 hover:bg-custom-blue hover:text-white rounded hover:rounded "
                >
                  Log Out
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
    <Navbar_Small_Student onLogout={handleLogout}/>
    </>

  );
};

export default Navbar_Student;
