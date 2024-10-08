import React from "react";
import { FiPlus } from "react-icons/fi";
import { IoPersonCircle } from "react-icons/io5";
import Navbar_Small from "./Nav_Small";


import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <nav className="  lg:block hidden ">
      <div className="container-fluid xl:space-x-52 lg:space-x-28  flex justify-center items-center w-full fixed shadow-lg bg-slate-100 p-4 z-50">
        
        <a href="#" className="text-black text-xl font-bold flex justify-start">
          WebMasters Learning
        </a>
        <ul className="flex xl:space-x-16 lg:space-x-12  justify-center items-center">
          {/* Home Dropdown */}
          <li className="relative group">
            <a href="/">
            <button className="text-black focus:outline-none text-base  hover:rounded hover:h-full  p-2">
              Home
              <FiPlus className="inline-block text-sm ml-1" />
            </button>
            </a>
            
           
          </li>
          {/* Courses Dropdown */}
          <li className="relative group">
            <button className="text-black focus:outline-none text-base  hover:rounded hover:h-full  p-2">
              Courses
              <FiPlus className="inline-block text-sm ml-1" />
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
            <a href="">
            <button className="text-black focus:outline-none text-base  hover:rounded hover:h-full  p-2">
              Team
              <FiPlus className="inline-block text-sm ml-1" />
            </button>
            <ul className="absolute -left-2 mt-2 w-40 bg-white rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
              <li>
                <a
                  href="/team"
                  className="block px-2 py-2 text-gray-800  hover:bg-custom-blue hover:rounded hover:h-full hover:text-white p-2"
                >
                  Teams
                </a>
              </li>
              <li>
                <a
                  href="/reviews"
                  className="block px-2 py-2 text-gray-800  hover:bg-custom-blue hover:rounded hover:h-full hover:text-white p-2"
                >
                  Reviews
                </a>
              </li>
            </ul>
            </a>
            
          </li>
          
          {/* Blog Dropdown */}
          <li className="relative group">
            <a href="/blog">
            <button className="text-black focus:outline-none text-base  hover:rounded hover:h-full  p-2">
              Blog
              <FiPlus className="inline-block text-sm ml-1" />
            </button>
            </a>
           
          </li>
          {/* Contact */}
          <li>
            <a
              href="/contact"
              className="text-black text-base  hover:rounded hover:h-full  p-2"
            >
              Contact
            </a>
          </li>
          {/* Profile Dropdown */}
          <li className="relative group">
            <a href="#" className="text-black flex justify-center items-center">
              <IoPersonCircle className=" text-black text-3xl ml-1 hover:text-custom-blue" />
            </a>
            <ul className="absolute xl:-left-2 right-0  mt-2 w-32 bg-white rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
              <li>
                <a
                  href="/Student-login"
                  className="block px-2 py-2 text-gray-800 hover:bg-custom-blue  hover:rounded hover:h-full hover:text-white p-2"
                >
                  Log In
                </a>
              </li>
             
            </ul>
          </li>
        </ul>
      </div>
    </nav>
    <Navbar_Small/>
    
    </>
  );
};

export default Navbar;
