import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBook } from "react-icons/fa";
import web from "../images/topCourses/web.jpeg";
import java from "../images/topCourses/java.jpg";
import de from "../images/topCourses/de.jpg";

const Wow2 = () => {
  const [visibleImages, setVisibleImages] = useState(4);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const scrollRef = useRef(null);

  const images = [java, web, de, web];
  const hoverText = [
    "Learn Java",
    "Fullstack Development",
    "Learn UX/UI Design",
    "Learn Animations",
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      easing: "ease-in-out", // easing type
      once: true, // animation happens only once
    });
  }, []);

  const loadMoreImages = () => {
    setVisibleImages(images.length);
    setShowLoadMore(false);
  };

  return (
    <div className="container mx-auto my-12">
      {/* Title Section */}
      <div
        className="text-start mb-8 px-4 md:px-12"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h2 className="text-purple-600 text-lg font-semibold mb-3 flex items-center">
          <FaBook className="text-purple-600 mr-2" /> Browse Categories
        </h2>
        <h1 className="md:text-4xl text-2xl font-bold mt-6">
          Top Courses Categories
        </h1>
      </div>

      {/* Scrollable Section */}
      <div className="relative w-full">
        <div
          ref={scrollRef}
          className="flex flex-col lg:flex-row flex-wrap lg:space-x-6 scroll-smooth space-y-6 lg:space-y-0 px-5 lg:px-0 lg:mx-44"
        >
          {images.slice(0, visibleImages).map((image, idx) => (
            <div
              key={idx}
              className="relative w-full md:w-48 h-64 group mx-auto"
              data-aos="zoom-in"
              data-aos-delay={`${100 * (idx + 1)}`} // staggered animation for each card
            >
              <img
                src={image}
                alt={`Category ${idx + 1}`}
                className="w-full h-full rounded-md object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black bg-opacity-50 rounded-md">
                <span className="text-white text-3xl font-bold">
                  {hoverText[idx] || "Visit"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Load More Button */}
      {showLoadMore && visibleImages < images.length && (
        <div
          className="flex justify-center mt-6"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <button
            onClick={loadMoreImages}
            className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-800 transition"
          >
            Explore More
          </button>
        </div>
      )}
    </div>
  );
};

export default Wow2;
