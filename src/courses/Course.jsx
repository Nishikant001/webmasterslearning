import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaWhatsapp, FaChevronRight, FaCheckCircle } from "react-icons/fa"; // Importing Icons
import { Helmet } from "react-helmet-async"; // For SEO
import Modal from "react-modal"; // For modal functionality
import { motion } from "framer-motion"; // For advanced animations
import react from "../images/topCourses/react.png";
import web from "../images/topCourses/web.jpeg";
import de from "../images/topCourses/de.jpg";
import java from "../images/topCourses/java.jpg";
import boot from "../images/noramlCourses/boot.avif";
import mern from "../images/noramlCourses/mern.png";
import animations from "../images/noramlCourses/animations.jpeg";

// Define the courses array with topics list
const courses = [
  {
    id: 1,
    title: "React Basics",
    image: react,
    description: "Learn the fundamentals of React and build powerful web apps.",
    duration: "3 months",
    fees: "₹2299",
    topics: [
      "Introduction to React and JSX",
      "Virtual DOM and React Rendering",
      "Components, Props, and State",
      "Handling Events in React",
      "React Router for Navigation",
      "React Hooks (useState, useEffect)",
      "Handling Forms and Input",
      "State Management with Context API",
      "Introduction to Redux (Optional)"
    ],
  },
  {
    id: 2,
    title: "TailwindCSS + Bootstrap Mastery",
    image: boot,
    description: "Master TailwindCSS and Bootstrap to build modern, responsive web designs.",
    duration: "3 months",
    fees: "₹2000",
    topics: [
      "Introduction to Utility-First CSS",
      "Building Responsive Layouts with TailwindCSS",
      "Customizing Design using Tailwind's Config",
      "Bootstrap Grid System Deep Dive",
      "Responsive Design with Bootstrap",
      "Tailwind's Flexbox and Grid Utilities",
      "CSS Best Practices with TailwindCSS",
      "Combining TailwindCSS with Bootstrap",
    ],
  },
  {
    id: 3,
    title: "Web Technology",
    image: web,
    description: "Enhance your JavaScript skills with advanced web technologies.",
    duration: "3 months",
    fees: "₹3299",
    topics: [
      "HTML5 and CSS3 Fundamentals",
      "JavaScript Essentials (ES6+)",
      "Asynchronous Programming in JavaScript",
      "Using APIs and AJAX with Fetch",
      "Building Single Page Applications (SPAs)",
      "Introduction to Web Servers and Databases",
      "Responsive Web Design Principles",
      "CSS Grid and Flexbox",
    ],
  },
  {
    id: 4,
    title: "MERN Stack Development",
    image: mern,
    description: "Become a full-stack developer by mastering MongoDB, Express, React, and Node.js.",
    duration: "6 months",
    fees: "₹7299",
    topics: [
      "Introduction to Full-Stack Development",
      "Building REST APIs with Node.js and Express",
      "MongoDB and NoSQL Databases",
      "React Fundamentals (State, Props, Hooks)",
      "Building Frontend with React and Redux",
      "Authentication using JWT and Sessions",
      "Deployment of MERN Applications",
      "WebSocket and Real-Time Applications (Optional)",
    ],
  },
  {
    id: 5,
    title: "React + Web Technology",
    image: web,
    description: "Combine the power of React and advanced web technologies for full-stack development.",
    duration: "4 months",
    fees: "₹5999",
    topics: [
      "React Components and State Management",
      "Using React Router for SPA Development",
      "API Integration with Fetch and Axios",
      "JavaScript Promises and Async/Await",
      "Creating Responsive UIs with CSS3 and Flexbox",
      "Frontend Architecture for Scalable Web Apps",
      "Backend Integration with Node.js (Optional)",
      "Advanced React Patterns (Context API, Portals)"
    ],
  },
  {
    id: 6,
    title: "Animations Libraries",
    image: animations,
    description: "Learn to create stunning web animations using popular animation libraries.",
    duration: "3 months",
    fees: "₹5299",
    topics: [
      "CSS Animations and Keyframes",
      "Introduction to GreenSock Animation Platform (GSAP)",
      "Animating with Framer Motion in React",
      "SVG Animation Techniques",
      "3D Animations using Three.js",
      "Using Animation in UI/UX Design",
      "Performance Optimization for Animations",
      "Parallax and Scroll-Based Animations"
    ],
  },
  {
    id: 7,
    title: "UI/UX Design",
    image: de,
    description: "Master the principles of user interface and user experience design to create intuitive, user-friendly websites.",
    duration: "3 months",
    fees: "₹3299",
    topics: [
      "Introduction to UI/UX Design Principles",
      "Designing User-Centered Interfaces",
      "Wireframing and Prototyping",
      "Typography and Color Theory in Design",
      "Usability Testing and Research",
      "Creating Design Systems",
      "Responsive Design for Mobile and Desktop",
      "UI/UX Tools: Figma, Adobe XD"
    ],
  },
  {
    id: 8,
    title: "Java + DSA",
    image: java,
    description: "Enhance your problem-solving skills with Java and data structures and algorithms.",
    duration: "5 months",
    fees: "₹3299",
    topics: [
      "Java Basics (Variables, Operators, Loops)",
      "Object-Oriented Programming in Java",
      "Data Structures: Arrays, Linked Lists, Stacks, Queues",
      "Algorithms: Sorting and Searching",
      "Recursion and Backtracking",
      "Dynamic Programming Techniques",
      "Time and Space Complexity Analysis",
      "Solving Competitive Programming Challenges"
    ],
  },
];


// Modal styles
const customModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    maxWidth: "700px",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",
    background: "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(10px)",
    transition: "all 0.3s ease",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    transition: "all 0.3s ease",
  },
};

const listItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeInOut" } },
};

const CoursesSection = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1200, // Duration of the animation
      easing: "ease-in-out", // Easing for smoothness
      once: true, // Only animate once
    });
  }, []);

  // State to control how many courses to show
  const [visibleCourses, setVisibleCourses] = useState(3);
  const [viewAll, setViewAll] = useState(false);

  // Modal state and selected course for modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Function to handle "View All" button click
  const handleViewAll = () => {
    setVisibleCourses(courses.length);
    setViewAll(true);
  };

  // Function to open modal with the selected course
  const openModal = (course) => {
    setSelectedCourse(course);
    setModalIsOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setModalIsOpen(false);
  };

  // WhatsApp enrollment handler
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
          <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-10" data-aos="fade-up">
            Explore Our Courses
          </h2>

          {/* Responsive grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.slice(0, visibleCourses).map((course) => (
              <motion.div
                key={course.id}
                className="bg-white bg-opacity-70 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2"
                data-aos="fade-up"
                whileHover={{ scale: 1.03 }}
              >
                {/* Course Image */}
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />

                {/* Course Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>

                  {/* List of course topics (modern list with icons) */}
                  <ul className="list-none pl-0 mb-4">
                    {course.topics.slice(0, 3).map((topic, index) => (
                      <motion.li
                        key={index}
                        className="text-gray-600 flex items-center mb-2"
                        variants={listItemVariants}
                        initial="hidden"
                        whileInView="visible"
                      >
                        <FaCheckCircle className="text-green-500 mr-2" />
                        {topic}
                      </motion.li>
                    ))}
                  </ul>

                  {/* More Details Button */}
                  <motion.button
                    className="w-full flex items-center justify-center bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 hover:from-gray-300 hover:to-gray-400 transition duration-300 space-x-2"
                    onClick={() => openModal(course)}
                    whileHover={{ scale: 1.02 }}
                  >
                    <span>More Details</span>
                    <FaChevronRight />
                  </motion.button>

                  {/* WhatsApp Enroll Button */}
                  <motion.button
                    className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-2 px-4 rounded-lg hover:shadow-lg hover:from-indigo-700 hover:to-blue-600 transition duration-300 flex items-center justify-center space-x-2 mt-2"
                    onClick={() => handleWhatsAppClick(course.title)}
                    whileHover={{ scale: 1.02 }}
                  >
                    <FaWhatsapp className="text-white" />
                    <span>Enroll Now</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All button */}
          {!viewAll && (
            <div className="flex justify-center mt-10">
              <motion.button
                className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2 px-6 rounded-lg hover:shadow-lg hover:from-purple-700 hover:to-pink-600 transition duration-300"
                onClick={handleViewAll}
                whileHover={{ scale: 1.05 }}
              >
                View All
              </motion.button>
            </div>
          )}

          {/* Modal for showing full list of topics */}
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customModalStyles}
            contentLabel="Course Details"
          >
            {selectedCourse && (
              <div className="space-y-6">
                <motion.h2
                  className="text-3xl font-extrabold text-gray-900"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.1 } }}
                >
                  {selectedCourse.title}
                </motion.h2>
                <motion.p
                  className="text-gray-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.3 } }}
                >
                  {selectedCourse.description}
                </motion.p>
                <ul className="list-none pl-0 space-y-2">
                  {selectedCourse.topics.map((topic, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center text-gray-600"
                      variants={listItemVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: index * 0.1 }}
                    >
                      <FaCheckCircle className="text-green-500 mr-2" />
                      {topic}
                    </motion.li>
                  ))}
                </ul>
                <motion.button
                  className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-2 px-4 rounded-lg hover:shadow-lg hover:from-indigo-700 hover:to-blue-600 transition duration-300"
                  onClick={closeModal}
                  whileHover={{ scale: 1.02 }}
                >
                  Close
                </motion.button>
              </div>
            )}
          </Modal>
        </div>
      </section>
    </>
  );
};

export default CoursesSection;
