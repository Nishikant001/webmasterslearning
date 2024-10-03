import React, { useState } from "react";
import { IoPersonCircle } from "react-icons/io5";
import { PiStudent } from "react-icons/pi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { PiBooksLight } from "react-icons/pi";
import { IoCloseOutline } from "react-icons/io5";
import burger_menu from "../images/burger_menu.png";

const Navbar_SuperAdmin_OffCanvas = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    profile: false,
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdown = (dropdown) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));
  };

  return (
    <nav className="block lg:hidden">
      <div className="container-fluid flex justify-between items-center fixed bg-slate-100 p-4 shadow-lg w-full">
        {/* Logo */}
        <a href="#" className="text-black text-xl font-bold">
          WebMasters Learning
        </a>

        <div className="flex justify-center space-x-1 items-center">
          {/* Burger Menu Button */}
          <button
            className="text-black text-2xl focus:outline-none lg:hidden"
            onClick={toggleMenu}
          >
            <img src={burger_menu} alt="menu" className="shadow-black" />
          </button>

          {/* Off-canvas Menu */}
          <div
            className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out z-50`}
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

                  {/* Dropdown Menu */}
                  <ul
                    className={`mt-2 space-y-2 text-center transition-max-height duration-300 ease-in-out ${
                      dropdownOpen.profile ? "max-h-40" : "max-h-0"
                    } overflow-hidden`}
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-custom-blue hover:text-white rounded"
                      >
                        Log In
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-custom-blue hover:text-white rounded"
                      >
                        Sign Up
                      </a>
                    </li>
                  </ul>
                </li>
                {/* Student Management */}
                <li className="relative">
                  <a
                    href="#"
                    className="text-black flex items-center text-base hover:bg-custom-blue hover:text-white p-2 rounded"
                  >
                    <PiStudent className="text-2xl mr-2" />
                    Student Management
                  </a>
                </li>

                {/* Course Management */}
                <li className="relative">
                  <a
                    href="#"
                    className="text-black flex items-center text-base hover:bg-custom-blue hover:text-white p-2 rounded"
                  >
                    <PiBooksLight className="text-2xl mr-2" />
                    Course Management
                  </a>
                </li>

                {/* Tutor Management */}
                <li className="relative">
                  <a
                    href="#"
                    className="text-black flex items-center text-base hover:bg-custom-blue hover:text-white p-2 rounded"
                  >
                    <LiaChalkboardTeacherSolid className="text-2xl mr-2" />
                    Team Management
                  </a>
                </li>

                {/* Contact */}
                <li>
                  <a
                    href="#"
                    className="text-black text-base hover:bg-custom-blue w-full hover:text-white p-2 rounded"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={toggleMenu}
          ></div>
        )}
      </div>
    </nav>
  );
};

export default Navbar_SuperAdmin_OffCanvas;
