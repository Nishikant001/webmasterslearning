import React from "react";
import { IoPersonCircle } from "react-icons/io5";
import { PiStudent } from "react-icons/pi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { PiBooksLight } from "react-icons/pi";

const Navbar_SuperAdmin = () => {
  return (
    <nav className="lg:block hidden">
      <div className="container-fluid xl:space-x-52 lg:space-x-28 flex justify-center items-center w-full fixed shadow-lg bg-slate-100 p-4">
        <a href="#" className="text-black text-xl font-bold flex justify-start">
          WebMasters Learning
        </a>
        <ul className="flex xl:space-x-16 lg:space-x-12 justify-center items-center">
          {/* Student Management Dropdown */}
          <li className="relative group">
            <button className="text-black focus:outline-none text-base flex justify-center items-center  hover:bg-custom-blue hover:rounded hover:h-full hover:text-white p-2">
              <PiStudent className="text-2xl" />
              Student Management
            </button>
          </li>
          {/* Course Management Dropdown */}
          <li className="relative group ">
            <button className="text-black focus:outline-none text-base flex items-center justify-center  hover:bg-custom-blue hover:rounded hover:h-full hover:text-white p-2">
              <PiBooksLight className="text-2xl" />
              Course Management
            </button>
          </li>
          {/* Tutor Management Dropdown */}
          <li className="relative group ">
            <button className="text-black focus:outline-none text-base flex items-center justify-center  hover:bg-custom-blue hover:rounded hover:h-full hover:text-white p-2">
              <LiaChalkboardTeacherSolid className="text-2xl" />
              Team Management
            </button>
          </li>
          {/* Contact */}
          <li>
            <a href="#" className="text-black text-base  hover:bg-custom-blue hover:rounded hover:h-full hover:w-full hover:text-white p-2">
              Contact
            </a>
          </li>
          {/* Profile Dropdown */}
          <li className="relative group">
            <a href="#" className="text-black flex justify-center items-center">
              <IoPersonCircle className="text-black text-3xl ml-1 hover:text-custom-blue" />
            </a>
            <ul className="absolute right-0 mt-2 w-32 bg-white rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
              <li>
                <a
                  href="#"
                  className="block px-2 py-2 text-gray-800 hover:bg-gray-200 hover:bg-custom-blue hover:text-white hover:rounded"
                >
                  Log In
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-2 py-2 text-gray-800 hover:bg-gray-200 hover:bg-custom-blue hover:text-white hover:rounded"
                >
                  Sign Up
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar_SuperAdmin;
