import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { IoPersonCircle, IoCloseOutline } from "react-icons/io5";
import burger_menu from "../../../images/burger_menu.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar_Small_Student = ({ onLogout }) => {
  const navigate = useNavigate(); // Hook for navigation
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    courses: false,
    team: false,
    query: false,
    profile: false,
  });

  // Toggle the menu (open/close)
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle logout and clear authentication state
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    // Call onLogout to update parent state and redirect to login or home
    onLogout();

    // Redirect to login or home page
    navigate("/student-login");
  };

  const toggleDropdown = (dropdown) => {
    setDropdownOpen((prevState) => {
      const newDropdownState = Object.keys(prevState).reduce((acc, key) => {
        acc[key] = key === dropdown ? !prevState[key] : false;
        return acc;
      }, {});
      return newDropdownState;
    });
  };

  return (
    <nav className="lg:hidden block fixed w-full bg-slate-100 shadow-lg z-50">
      <div className="flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-lg font-bold">WebMasters Learning</div>

        <div className="flex justify-center space-x-2 items-center">
          {/* Burger Menu Button */}
          <button
            className="text-black text-2xl focus:outline-none"
            onClick={toggleMenu}
          >
            <img src={burger_menu} alt="menu" className="w-8 h-8" />
          </button>

          {/* Off-canvas Menu */}
          <div
            className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out`}
          >
            <div className="p-4">
              <div className="flex justify-end">
                <button
                  onClick={toggleMenu}
                  className="text-black text-2xl focus:outline-none"
                >
                  <IoCloseOutline />
                </button>
              </div>

              <ul className="space-y-4 mt-4">
                {/* Profile Section */}
                <li className="relative">
                  <button
                    className="flex justify-center items-center w-full text-black focus:outline-none text-base"
                    onClick={() => toggleDropdown("profile")}
                  >
                    <IoPersonCircle className="text-3xl text-black hover:text-indigo-600" />
                  </button>
                  <ul
                    className={`mt-2 space-y-2 text-center transition-max-height duration-300 ease-in-out ${
                      dropdownOpen.profile ? "max-h-40" : "max-h-0"
                    } overflow-hidden`}
                  >
                    <li>
                      <Link
                        to="/student-dashboard"
                        className="block px-4 py-2 text-gray-800 hover:bg-custom-blue hover:rounded hover:h-full hover:text-white p-2"
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="block px-4 py-2 text-gray-800 hover:bg-custom-blue hover:rounded hover:h-full hover:text-white p-2"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </li>

                {/* Courses Dropdown */}
                <li className="relative">
                  <button
                    className="text-black focus:outline-none text-base flex justify-between w-full hover:bg-indigo-600 hover:rounded hover:text-white p-2"
                    onClick={() => toggleDropdown("courses")}
                  >
                    Courses
                    <FiPlus className="text-sm ml-1" />
                  </button>
                  {dropdownOpen.courses && (
                    <ul className="mt-2 space-y-2">
                      <li>
                        <Link
                          to="/course"
                          className="block px-4 py-2 text-gray-800 hover:bg-indigo-600 hover:rounded hover:text-white"
                        >
                          All Courses
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/top-courses"
                          className="block px-4 py-2 text-gray-800 hover:bg-indigo-600 hover:rounded hover:text-white"
                        >
                          Top Courses
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                {/* Team Link */}
                <li>
                  <Link
                    to="/team"
                    className="text-black text-base block hover:bg-indigo-600 hover:rounded hover:text-white p-2"
                  >
                    Team
                  </Link>
                </li>

                {/* Query Link */}
                <li>
                  <Link
                    to="/queryform"
                    className="text-black text-base block hover:bg-indigo-600 hover:rounded hover:text-white p-2"
                  >
                    Query
                  </Link>
                </li>

                {/* Contact Link */}
                <li>
                  <Link
                    to="/contact"
                    className="text-black text-base block hover:bg-indigo-600 hover:rounded hover:text-white p-2"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar_Small_Student;
