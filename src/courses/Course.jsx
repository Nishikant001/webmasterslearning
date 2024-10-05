import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaWhatsapp } from "react-icons/fa"; // Importing WhatsApp Icon
import react from "../images/topCourses/react.png";
import web from "../images/topCourses/web.jpeg";
import de from "../images/topCourses/de.jpg";
import java from "../images/topCourses/java.jpg";
import boot from "../images/noramlCourses/boot.avif";
import mern from "../images/noramlCourses/mern.png";
import animations from "../images/noramlCourses/animations.jpeg";
import { Helmet } from "react-helmet-async"; // For SEO

const courses = [
  {
    id: 1,
    title: "React Basics",
    image: react,
    description: "Learn the fundamentals of React and build powerful web apps.",
    duration: "3 months",
    fees: "₹2299",
  },
  {
    id: 2,
    title: "TailwindCSS + Bootstrap Mastery",
    image: boot,
    description: "Master TailwindCSS and Bootstrap to build modern, responsive web designs.",
    duration: "3 months",
    fees: "₹2000",
  },
  {
    id: 3,
    title: "Web Technology",
    image: web,
    description: "Enhance your JavaScript skills with advanced web technologies.",
    duration: "3 months",
    fees: "₹3299",
  },
  {
    id: 4,
    title: "MERN Stack Development",
    image: mern,
    description: "Become a full-stack developer by mastering MongoDB, Express, React, and Node.js.",
    duration: "6 months",
    fees: "₹7299",
  },
  {
    id: 5,
    title: "React + Web Technology",
    image: web,
    description: "Combine the power of React and advanced web technologies for full-stack development.",
    duration: "4 months",
    fees: "₹5999",
  },
  {
    id: 6,
    title: "Animations Libraries",
    image: animations,
    description: "Learn to create stunning web animations using popular animation libraries.",
    duration: "3 months",
    fees: "₹5299",
  },
  {
    id: 7,
    title: "UI/UX Design",
    image: de,
    description: "Master the principles of user interface and user experience design to create intuitive, user-friendly websites.",
    duration: "3 months",
    fees: "₹3299",
  },
  {
    id: 8,
    title: "Java + DSA",
    image: java,
    description: "Enhance your problem-solving skills with Java and data structures and algorithms.",
    duration: "5 months",
    fees: "₹3299",
  },
];

const CoursesSection = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1200, // Duration of the animation
      easing: 'ease-in-out', // Easing for smoothness
      once: true, // Only animate once
    });
  }, []);

  const handleWhatsAppClick = (courseName) => {
    const message = `Hello, I would like to enroll in the ${courseName} course.`;
    const whatsappUrl = `https://wa.me/+916372770485?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
     {/* SEO Metadata */}
     <Helmet>
        <title>Webmasters Learning - Our Courses</title>
        <meta
          name="description"
          content="Explore a wide range of programming and design courses at Webmasters Learning, including React, MERN stack, UI/UX design, and more."
        />
        <meta
          name="keywords"
          content="React courses, TailwindCSS, Web development, MERN stack, Java, DSA, UI/UX design, programming"
        />
        <meta name="author" content="Webmasters Learning" />
        <meta property="og:title" content="Webmasters Learning - Our Courses" />
        <meta
          property="og:description"
          content="Join Webmasters Learning to master web development, design, and programming skills. Learn React, MERN, Java, and more."
        />
        <meta property="og:image" content="/path-to-your-image.jpg" />
        <meta property="og:url" content="https://www.webmasterslearning.com/courses" />
        <meta property="og:type" content="website" />
      </Helmet>

    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4 mt-20 mb-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10" data-aos="fade-up">
          Our Courses
        </h2>

        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
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
                <p className="text-gray-600 mb-4">{course.description}</p>

                {/* Course Duration and Fees */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-700 font-medium">
                    Duration: {course.duration}
                  </span>
                  <span className="text-indigo-600 font-bold">{course.fees}</span>
                </div>

                {/* Call to Action */}
                <button
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition duration-300 flex items-center justify-center space-x-2"
                  onClick={() => handleWhatsAppClick(course.title)}
                >
                  <FaWhatsapp className="text-white" />
                  <span>Enroll Now</span>
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

export default CoursesSection;
