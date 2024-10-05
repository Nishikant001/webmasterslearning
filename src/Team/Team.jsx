import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Nishi from "../images/team/Nishi.jpg";
import dada from "../images/team/dada.jpg";
import liku from "../images/team/liku.jpg";
import dhall from "../images/team/dhall.jpg";
import biswal from "../images/team/biswal.jpg";
import adi from "../images/team/aditya.jpg";
import { Helmet } from "react-helmet-async"; // Import Helmet for SEO
const instructors = [
  {
    id: 1,
    name: "Nishikant",
    subject: "Full-Stack Development",
    image: Nishi,
    description: "MERN Stack specialist in MERN development.",
    social: {
      linkedin: "#",
      instagram: "#",
      facebook: "#",
      whatsapp: "#",
    },
  },
  {
    id: 2,
    name: "Ananta",
    subject: "Web Development",
    image: liku,
    description: "Expert in advanced Web patterns and best practices.",
    social: {
      linkedin: "#",
      instagram: "#",
      facebook: "#",
      whatsapp: "#",
    },
  },
  {
    id: 3,
    name: "Sourav",
    subject: "Animation Development",
    image: dada,
    description: "Animations expert focusing on responsive web design.",
    social: {
      linkedin: "#",
      instagram: "#",
      facebook: "#",
      whatsapp: "#",
    },
  },
  {
    id: 4,
    name: "Aditya",
    subject: "Management",
    image: adi,
    description: "Management expert.",
    social: {
      linkedin: "#",
      instagram: "#",
      facebook: "#",
      whatsapp: "#",
    },
  },
  {
    id: 5,
    name: "Ankita",
    subject: "UI/UX Designer",
    image: biswal,
    description: "UI/UX expert.",
    social: {
      linkedin: "#",
      instagram: "#",
      facebook: "#",
      whatsapp: "#",
    },
  },
  {
    id: 6,
    name: "Ankita",
    subject: "Web Development",
    image: dhall,
    description: "Management expert.",
    social: {
      linkedin: "#",
      instagram: "#",
      facebook: "#",
      whatsapp: "#",
    },
  },
];

const TeamSection = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      easing: "ease-in-out", // Easing for smooth animation
      once: true, // Ensure animations happen only once
    });
  }, []);

  return (
    <>
     {/* SEO Metadata */}
     <Helmet>
        <title>Webmasters Learning - Meet Our Instructors</title>
        <meta
          name="description"
          content="Meet the expert instructors of Webmasters Learning, specializing in Full-Stack Development, Web Development, Animation, and UI/UX Design."
        />
        <meta
          name="keywords"
          content="MERN Stack instructors, Web development instructors, Animation experts, UI/UX design instructors, Full-stack development"
        />
        <meta name="author" content="Webmasters Learning" />
        <meta property="og:title" content="Webmasters Learning - Meet Our Instructors" />
        <meta
          property="og:description"
          content="Learn from the best instructors at Webmasters Learning. Our team of professionals specializes in various fields, from full-stack development to UI/UX design."
        />
        <meta property="og:image" content="/path-to-your-image.jpg" />
        <meta property="og:url" content="https://www.webmasterslearning.com/instructors" />
        <meta property="og:type" content="website" />
      </Helmet>

    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 mt-20 mb-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12" data-aos="fade-up">
          Meet Our Instructors
        </h2>

        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="relative group bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
              data-aos="fade-up"
            >
              {/* Instructor Image */}
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-2xl text-white font-bold mb-2">
                  {instructor.name}
                </h3>
                <p className="text-indigo-300 font-medium mb-4">
                  {instructor.subject}
                </p>
                <p className="text-gray-300 text-center mb-6 px-4">
                  {instructor.description}
                </p>

                {/* Social Media Links */}
                <div className="flex space-x-4">
                  <a
                    href={instructor.social.linkedin}
                    className="text-white hover:text-gray-400 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin fa-lg"></i>
                  </a>
                  <a
                    href={instructor.social.instagram}
                    className="text-white hover:text-gray-400 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram fa-lg"></i>
                  </a>
                  <a
                    href={instructor.social.facebook}
                    className="text-white hover:text-gray-400 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook fa-lg"></i>
                  </a>
                  <a
                    href={instructor.social.whatsapp}
                    className="text-white hover:text-gray-400 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-whatsapp fa-lg"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default TeamSection;
