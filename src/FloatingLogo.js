import React, { useState } from "react";
import { FaInstagram, FaWhatsapp, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const FloatingLogo = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle the expanded state for social icons
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Main Floating Button */}
      <motion.div
        className="relative bg-gradient-to-r from-purple-500 to-blue-500 p-4 rounded-full shadow-lg cursor-pointer flex items-center justify-center"
        onClick={handleToggle} // Handle click to expand/collapse
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: isExpanded ? 45 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {isExpanded ? (
          <FaTimes className="text-white" size={24} />
        ) : (
          <FaWhatsapp className="text-white" size={24} />
        )}
      </motion.div>

      {/* Social Icons - Only shown when expanded */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="flex flex-col items-center space-y-4 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* WhatsApp Icon */}
            <a
              href="https://wa.me/+916372770485?text=Hello%20Sir.."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 flex items-center justify-center"
            >
              <FaWhatsapp className="text-white" size={20} />
            </a>

            {/* Instagram Icon */}
            <a
              href="https://www.instagram.com/webmasterslearning2023/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 p-4 rounded-full shadow-lg hover:bg-pink-600 flex items-center justify-center"
            >
              <FaInstagram className="text-white" size={20} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingLogo;
