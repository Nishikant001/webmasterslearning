import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import pra from "../images/review/pra.jpg";
import sub from "../images/review/sub.jpg";
import ritu from "../images/review/ritu.jpg";
import { Helmet } from "react-helmet-async"; // Import Helmet for SEO

// Review Data
const reviews = [
  {
    id: 1,
    name: "Pragyan Sree Patanayak",
    course: "Web Development",
    review:
      "This course was amazing! I learned so much about React and the instructor was really knowledgeable.",
    image: pra,
    rating: 5,
  },
  {
    id: 2,
    name: "Suvrajyoti Mohanty",
    course: "React Development",
    review:
      "JavaScript finally makes sense! The course was well-structured, and I can now build my own apps.",
    image: sub,
    rating: 4,
  },
  {
    id: 3,
    name: "Rituprava Mohanty",
    course: "Full Stack Development",
    review:
      "This course has opened so many doors for me. The hands-on approach was exactly what I needed.",
    image: ritu,
    rating: 5,
  },
];

// Animation Variants
const reviewCardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

const ReviewsSection = () => {
  // To generate star rating visually with hover and transition
  const renderStars = (rating) => {
    return (
      <div className="flex justify-center space-x-1 mt-2">
        {Array.from({ length: 5 }, (_, i) => (
          <motion.span
            key={i}
            className={`${
              i < rating ? "text-yellow-400" : "text-gray-500"
            } text-xl drop-shadow-lg`}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <FontAwesomeIcon icon={faStar} />
          </motion.span>
        ))}
      </div>
    );
  };

  return (
    <>
    {/* SEO Metadata */}
    <Helmet>
        <title>What Our Students Say | Webmasters Learning Reviews</title>
        <meta
          name="description"
          content="Read the testimonials from our students at Webmasters Learning who have excelled in Web Development, Full Stack, and React courses."
        />
        <meta
          name="keywords"
          content="student reviews, testimonials, Web Development reviews, React Development reviews, Full Stack Development reviews, Webmasters Learning"
        />
        <meta name="author" content="Webmasters Learning" />
        <meta property="og:title" content="What Our Students Say | Webmasters Learning Reviews" />
        <meta
          property="og:description"
          content="Hear from our successful students who have excelled in Web Development, Full Stack Development, and React courses at Webmasters Learning."
        />
        <meta property="og:image" content="/path-to-your-image.jpg" />
        <meta property="og:url" content="https://www.webmasterslearning.com/reviews" />
        <meta property="og:type" content="website" />
      </Helmet>

    <section className="bg-custom-blue py-16 relative overflow-hidden">
      {/* Circular Background Gradients for Modern Look */}
      <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-700 w-96 h-96 rounded-full blur-3xl opacity-30"></div>
        <div className="bg-gradient-to-r from-pink-500 to-yellow-500 w-72 h-72 rounded-full blur-2xl opacity-20 absolute top-10 right-20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 mt-20 mb-6">
        <h2 className="text-5xl font-extrabold text-center text-white mb-12">
          What Our Students Say
        </h2>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              className="bg-white/20 backdrop-blur-md p-8 rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              variants={reviewCardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Student Image */}
              <img
                src={review.image}
                alt={review.name}
                className="w-24 h-24 rounded-full mx-auto mb-6 object-cover shadow-lg border-4 border-purple-600"
              />

              {/* Student Name */}
              <h3 className="text-2xl font-semibold text-white text-center mb-2">
                {review.name}
              </h3>

              {/* Star Rating (Now below student name) */}
              {renderStars(review.rating)}

              {/* Course Name */}
              <p className="text-purple-300 text-center font-medium mb-4 tracking-wide mt-4">
                {review.course}
              </p>

              {/* Review Text */}
              <p className="text-gray-300 text-center leading-relaxed mb-6 italic">
                "{review.review}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default ReviewsSection;
