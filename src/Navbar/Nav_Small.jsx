import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { IoPersonCircle, IoCloseOutline } from "react-icons/io5";
import burger_menu from "../images/burger_menu.png";

const Navbar_Small = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    home: false,
    courses: false,
    team: false,
    blog: false,
    profile: false,
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
    <nav className="lg:hidden block z-50">
      <div className="container-fluid flex justify-between items-center fixed bg-slate-100 p-4 shadow-lg w-full z-50">
        {/* Logo */}
        <a href="/" className="text-black text-xl font-bold">
          WebMasters Learning
        </a>
        <div className="flex justify-center space-x-1 items-center">
          {/* Burger Menu Button */}
          <button
            className="text-black text-2xl focus:outline-none lg:hidden"
            onClick={toggleMenu}
          >
            <img src={burger_menu} alt="Menu" className="shadow-black" />
          </button>

          {/* Off-canvas Menu */}
          <div
            className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out lg:hidden `} // z-60 ensures the menu is on top
          >
            <div className="p-4">
              <div className="flex justify-end">
                <button
                  onClick={toggleMenu}
                  className="text-black text-2xl focus:outline-none mb-4"
                >
                  <IoCloseOutline />
                </button>
              </div>
              <ul className="space-y-4">
                {/* Profile Dropdown */}
                <li className="relative">
                  <button
                    className="text-black focus:outline-none text-base flex justify-center w-full"
                    onClick={() => toggleDropdown("profile")}
                  >
                    <IoPersonCircle className="text-black text-3xl hover:text-custom-blue" />
                  </button>
                  <ul
                    className={`mt-2 space-y-2 text-center transition-max-height duration-300 ease-in-out ${
                      dropdownOpen.profile ? "max-h-40" : "max-h-0"
                    } overflow-hidden`}
                  >
                    <li>
                      <a
                        href="/Student-login"
                        className="block px-4 py-2 text-gray-800 hover:bg-custom-blue hover:rounded hover:h-full hover:text-white p-2"
                      >
                        Log In
                      </a>
                    </li>
                    
                  </ul>
                </li>

                {/* Home Dropdown */}
                <li className="relative">
                  <a href="/">
                    <button
                      className="text-black focus:outline-none text-base flex justify-between w-full hover:bg-custom-blue hover:rounded hover:h-full hover:text-white p-2"
                      onClick={() => toggleDropdown("home")}
                    >
                      Home
                      <FiPlus className="text-sm ml-1 inline" />
                    </button>
                  </a>
                </li>

                {/* Courses Dropdown */}
                <li className="relative">
                  <button
                    className="text-black focus:outline-none text-base flex justify-between w-full hover:bg-custom-blue hover:rounded hover:h-full hover:text-white p-2"
                    onClick={() => toggleDropdown("courses")}
                  >
                    Courses
                    <FiPlus className="text-sm ml-1 inline" />
                  </button>
                  <ul
                    className={`mt-2 space-y-2 transition-max-height duration-300 ease-in-out ${
                      dropdownOpen.courses ? "max-h-40" : "max-h-0"
                    } overflow-hidden`}
                  >
                    <li>
                      <a
                        href="/course"
                        className="block px-4 py-2 text-gray-800 hover:bg-custom-blue hover:rounded hover:h-full hover:text-white p-2"
                      >
                        Course 1
                      </a>
                    </li>
                    <li>
                      <a
                        href="/course2"
                        className="block px-4 py-2 text-gray-800 hover:bg-custom-blue hover:rounded hover:h-full hover:text-white p-2"
                      >
                        Course 2
                      </a>
                    </li>
                  </ul>
                </li>

                {/* Team Dropdown */}
                <li className="relative">
                  <button
                    className="text-black focus:outline-none text-base flex justify-between w-full hover:bg-custom-blue hover:rounded hover:h-full hover:text-white p-2"
                    onClick={() => toggleDropdown("team")}
                  >
                    Team
                    <FiPlus className="text-sm ml-1 inline" />
                  </button>
                  <ul
                    className={`mt-2 space-y-2 transition-max-height duration-300 ease-in-out ${
                      dropdownOpen.team ? "max-h-40" : "max-h-0"
                    } overflow-hidden`}
                  >
                    <li>
                      <a
                        href="/team"
                        className="block px-4 py-2 text-gray-800 hover:bg-custom-blue hover:rounded hover:h-full hover:text-white p-2"
                      >
                        Teams
                      </a>
                    </li>
                    <li>
                      <a
                        href="/reviews"
                        className="block px-4 py-2 text-gray-800 hover:bg-custom-blue hover:rounded hover:h-full hover:text-white p-2"
                      >
                        Reviews
                      </a>
                    </li>
                  </ul>
                </li>

                {/* Blog Dropdown */}
                <li className="relative">
                  <a href="/blog">
                    <button
                      className="text-black focus:outline-none text-base flex justify-between w-full hover:bg-custom-blue hover:rounded hover:h-full hover:text-white p-2"
                      onClick={() => toggleDropdown("blog")}
                    >
                      Blog
                      <FiPlus className="text-sm ml-1 inline" />
                    </button>
                  </a>
                </li>

                {/* Contact Link */}
                <li>
                  <a
                    href="/contact"
                    className="text-black text-base hover:bg-custom-blue hover:rounded hover:h-full hover:text-white p-2"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

       
      </div>
    </nav>
  );
};

export default Navbar_Small;
