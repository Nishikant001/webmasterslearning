import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 mt-20 mb-6">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Privacy Policy
        </h1>

        {/* Introduction */}
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Introduction
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We are committed to protecting your privacy and ensuring that your personal information is handled securely. This Privacy Policy outlines the data we collect, how we use it, and your rights regarding your personal information.
          </p>
        </div>

        {/* Information We Collect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <i className="fas fa-user text-indigo-600 text-3xl mr-4"></i>
              <h3 className="text-xl font-bold text-gray-800">Personal Information</h3>
            </div>
            <p className="text-gray-600">
              We collect personal identification information such as your name, email address, and phone number when you submit forms on our site.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <i className="fas fa-chart-line text-indigo-600 text-3xl mr-4"></i>
              <h3 className="text-xl font-bold text-gray-800">Usage Data</h3>
            </div>
            <p className="text-gray-600">
              We collect data about how you interact with our site, including pages viewed, time spent, and actions taken.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <i className="fas fa-cookie-bite text-indigo-600 text-3xl mr-4"></i>
              <h3 className="text-xl font-bold text-gray-800">Cookies</h3>
            </div>
            <p className="text-gray-600">
              We use cookies to track user behavior and enhance your experience on our site. You can opt-out of cookies through your browser settings.
            </p>
          </div>
        </div>

        {/* How We Use Your Information */}
        <div className="bg-white p-8 mt-12 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            How We Use Your Information
          </h2>
          <div className="space-y-4 text-gray-600">
            <div className="flex items-center">
              <i className="fas fa-cog text-indigo-600 text-xl mr-4"></i>
              <span>To operate and maintain our website</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-envelope-open-text text-indigo-600 text-xl mr-4"></i>
              <span>To send updates and communicate with you</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-chart-pie text-indigo-600 text-xl mr-4"></i>
              <span>To analyze usage and improve our services</span>
            </div>
          </div>
        </div>

        {/* Your Privacy Rights */}
        <div className="bg-white p-8 mt-12 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Your Privacy Rights
          </h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Access your personal information</li>
            <li>Request that we delete your personal information</li>
            <li>Opt-out of marketing communications</li>
            <li>Request correction of inaccurate information</li>
          </ul>
        </div>

        {/* Security Measures */}
        <div className="bg-white p-8 mt-12 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Security Measures
          </h2>
          <p className="text-gray-600">
            We take the security of your data seriously and implement appropriate measures to protect your information. However, no method of data transmission over the Internet can be guaranteed to be 100% secure.
          </p>
        </div>

        {/* Contact Us */}
        <div className="bg-indigo-600 text-white p-8 mt-12 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-lg mb-4">
            If you have any questions about our Privacy Policy, please feel free to contact us:
          </p>
          <p>Email: <a href="mailto:webmasterlearning@gmail.com" className="underline">webmasterlearning@gmail.com</a></p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
