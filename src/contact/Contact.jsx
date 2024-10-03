import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
 

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 lg:flex lg:space-x-8 mt-20 mb-6">
        {/* Left Side: Contact Information */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            We would love to hear from you. Whether you have a question, feedback, or just want to say hi,
            feel free to reach out!
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <i className="fas fa-phone-alt text-indigo-600 text-xl mr-4"></i>
              <span className="text-gray-600">+91 6372770485 </span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-envelope text-indigo-600 text-xl mr-4"></i>
              <span className="text-gray-600">webmasterlearning@gmail.com</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-map-marker-alt text-indigo-600 text-xl mr-4"></i>
              <span className="text-gray-600">Cuttack, Odisha</span>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg">
          <form  action="https://formspree.io/f/xleqnzrj"
  method="POST" >
            {/* Name Input */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                placeholder="Your Name"
                required
              />
            </div>

            {/* Email Input */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                placeholder="Your Email"
                required
              />
            </div>

            {/* Phone Input */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                placeholder="Your Phone Number"
              />
            </div>

            {/* Subject Input */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                placeholder="Subject"
                required
              />
            </div>

            {/* Message Input */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 ease-in-out font-semibold"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
