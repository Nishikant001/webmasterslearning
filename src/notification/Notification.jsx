import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP's ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const notifications = [
  {
    id: 1,
    name: "John Doe",
    title: "Query about React Course",
    date: "2024-09-25",
    message: "I would like to know more about the advanced topics covered in the React course.",
    unread: true,
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Web Development Inquiry",
    date: "2024-09-24",
    message: "Is there a project-based approach in the Web Development course?",
    unread: false,
  },
  // Add more notifications as needed...
];

// Modal Component
const Modal = ({ notification, onClose }) => {
  if (!notification) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl font-bold mb-4">{notification.title}</h2>
        <p className="text-gray-600 mb-4">{notification.message}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-500">Date: {notification.date}</span>
          <span className="text-sm text-gray-500">From: {notification.name}</span>
        </div>
        <button
          onClick={onClose}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const NotificationsPage = () => {
  const notificationRefs = useRef([]);
  const [selectedNotification, setSelectedNotification] = useState(null);

  // GSAP ScrollTrigger animation for cards
  useEffect(() => {
    notificationRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 }, // Initial state (invisible, below position)
        {
          opacity: 1,
          y: 0, // Final state (visible, normal position)
          ease: "power3.out",
          duration: 1,
          scrollTrigger: {
            trigger: el, // Trigger the animation when this element enters the viewport
            start: "top 80%", // Animation starts when the top of the element hits 80% from the top of the viewport
            end: "bottom 20%", // Animation ends when the bottom of the element hits 20% of the viewport
            toggleActions: "play none none none", // Only play once
          },
        }
      );
    });
  }, []);

  // Function to open modal with the clicked notification
  const handleViewDetails = (notification) => {
    setSelectedNotification(notification);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setSelectedNotification(null);
  };

  return (
    <section className="container mx-auto py-12 px-6 ">
      <h1 className="text-5xl font-bold text-center text-gray-800 mb-10 pt-24">
        Notifications
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {notifications.map((notification, index) => (
          <div
            key={notification.id}
            ref={(el) => (notificationRefs.current[index] = el)}
            className={`relative bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2 ${
              notification.unread ? "border-l-4 border-indigo-500" : ""
            }`}
          >
            {/* Notification Badge for Unread Notifications */}
            {notification.unread && (
              <span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                New
              </span>
            )}

            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold text-gray-800">
                {notification.name}
              </h3>
              <span className="text-sm text-gray-500">{notification.date}</span>
            </div>

            <h4 className="text-lg font-semibold text-indigo-600 mb-2">
              {notification.title}
            </h4>

            <p className="text-gray-600 mb-6">{notification.message}</p>

            <div className="flex justify-between items-center">
              <button
                onClick={() => handleViewDetails(notification)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
              >
                View Details
              </button>
              <span className="text-sm text-gray-400">
                {notification.unread ? "Unread" : "Read"}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for notification details */}
      <Modal notification={selectedNotification} onClose={handleCloseModal} />
    </section>
  );
};

export default NotificationsPage;
