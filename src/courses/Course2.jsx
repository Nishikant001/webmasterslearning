import React from "react";
import mern from "../images/noramlCourses/mern.png";
import java from "../images/topCourses/java.jpg";
import animations from "../images/noramlCourses/animations.jpeg";
import { Helmet } from "react-helmet-async"; 

const popularCourses = [
  {
    id: 1,
    title: "MERN Stack Development",
    image: mern,
    description: "Become a full-stack developer by mastering MongoDB, Express, React, and Node.js.",
    duration: "6 months",
    fees: "7299",
    rating: 4.8,
    students: 1200,
  },
  {
    id: 2,
    title: "Java + DSA",
    image: java,
    description: "Enhance your problem-solving skills with Java and data structures and algorithms.",
    duration: "5 months",
    fees: "3299",
    rating: 4.6,
    students: 800,
  },
  {
    id: 3,
    title: "Animations Libraries",
    image: animations,
    description: "Learn to create stunning web animations using popular animation libraries.",
    duration: "3 months",
    fees: "5299",
    rating: 4.7,
    students: 950,
  },
];

const PopularCoursesSection = () => {
  const handleWhatsAppClick = (courseName) => {
    const message = `Hello, I would like to enroll in the ${courseName} course.`;
    const whatsappUrl = `https://wa.me/+916372770485?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
     {/* SEO Metadata */}
     <Helmet>
        <title>Webmasters Learning - Popular Courses</title>
        <meta
          name="description"
          content="Explore the most popular programming and development courses at Webmasters Learning, including MERN Stack, Java, DSA, and Animation Libraries."
        />
        <meta
          name="keywords"
          content="MERN stack courses, Java DSA, Animation libraries, full-stack development, programming courses"
        />
        <meta name="author" content="Webmasters Learning" />
        <meta property="og:title" content="Webmasters Learning - Popular Courses" />
        <meta
          property="og:description"
          content="Join our popular courses to master MERN Stack, Java, DSA, and Animation Libraries, and become a proficient developer."
        />
        <meta property="og:image" content="/path-to-your-image.jpg" />
        <meta property="og:url" content="https://www.webmasterslearning.com/popular-courses" />
        <meta property="og:type" content="website" />
      </Helmet>

    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4 mt-20 mb-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Most Popular Courses
        </h2>

        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {/* Course Image */}
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />

              {/* Course Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {course.title}
                </h3>

                {/* Rating and Students */}
                <div className="flex items-center text-yellow-500 mb-4">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M10 15l-5.588 3.284 1.073-6.26L.97 7.29l6.289-.914L10 1l2.742 5.376 6.289.914-4.515 4.734 1.073 6.26L10 15z"
                    />
                  </svg>
                  <span className="ml-2 text-gray-700">
                    {course.rating} ({course.students} students)
                  </span>
                </div>

                {/* Course Duration and Fees */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-700 font-medium">
                    Duration: {course.duration}
                  </span>
                  <span className="text-indigo-600 font-bold">
                    {course.fees}
                  </span>
                </div>

                {/* Call to Action */}
                <button
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition duration-300"
                  onClick={() => handleWhatsAppClick(course.title)}
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default PopularCoursesSection;
