import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Heroic from "../images/heroic-1.png";
import Wow2 from "../wow/Wow2";

const InstructorSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // animation duration
      easing: 'ease-in-out', // easing type
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <>
      <section className="bg-custom-blue text-white h-[43rem]">
        <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
          {/* Left Side - Text */}
          <div 
            className="text-center md:text-left mt-36"
            data-aos="fade-right"
          >
            <h3 className="text-lg font-bold mb-2">100% Satisfaction Guarantee</h3>
            <h1 className="text-[3.5rem] font-medium mb-6">
              Learn Skills From Our Top Instructors
            </h1>
            <button className="bg-btn-bg hover:bg-indigo-700 text-white text-xl font-medium py-5 px-14 rounded-full mx-5 mt-4">
              Our Courses
            </button>
          </div>

          {/* Right Side - Image */}
          <div 
            className="mt-8 md:mt-0 z-0 md:block hidden relative top-32 left-18 overflow-hidden"
            data-aos="fade-left"
          >
            <img
              src={Heroic}
              alt="Instructor"
              className="object-cover"
              style={{ height: "35rem", width: "48rem" }}
            />
          </div>
        </div>

        {/* Reviews Section */}
        <div 
          className="mt-10 bg-white justify-center items-center space-x-4 md:flex flex-col hidden border w-52 relative left-1/3 -top-24 rounded-lg"
          style={{ padding: '20px', width: '320px', height: '150px' }}
          data-aos="zoom-in"
        >
          <div className="flex -space-x-2">
            <img
              className="w-12 h-12 rounded-full border-2 border-white"
              src="https://randomuser.me/api/portraits/women/1.jpg"
              alt="Student 1"
            />
            <img
              className="w-12 h-12 rounded-full border-2 border-white"
              src="https://randomuser.me/api/portraits/men/2.jpg"
              alt="Student 2"
            />
            <img
              className="w-12 h-12 rounded-full border-2 border-white"
              src="https://randomuser.me/api/portraits/women/3.jpg"
              alt="Student 3"
            />
            <img
              className="w-12 h-12 rounded-full border-2 border-white"
              src="https://randomuser.me/api/portraits/men/4.jpg"
              alt="Student 4"
            />
          </div>
          <div className="flex mt-2">
            <span className="text-xl font-bold text-black mx-2">4.5</span>
            <span className="text-md text-black mt-[2px]">(300 Reviews)</span>
          </div>
        </div>
      </section>
      
      <Wow2 />
    </>
  );
};

export default InstructorSection;
