import React from "react";

const CookiesPolicy = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Cookies Policy
        </h1>

        {/* Introduction */}
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            What Are Cookies?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Cookies are small text files that are placed on your computer or mobile device
            when you visit a website. They are widely used to make websites work more efficiently,
            as well as to provide information to the owners of the site.
          </p>
        </div>

        {/* Why We Use Cookies */}
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why We Use Cookies
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We use cookies for the following purposes:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>To enhance your user experience</li>
            <li>To understand how our website is being used</li>
            <li>To deliver personalized content</li>
            <li>To track performance and improve our services</li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            By continuing to browse our website, you consent to the use of cookies as described in this policy.
          </p>
        </div>

        {/* Types of Cookies We Use */}
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Types of Cookies We Use
          </h2>
          <div className="space-y-4">
            {/* Essential Cookies */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Essential Cookies
              </h3>
              <p className="text-gray-600 leading-relaxed">
                These cookies are necessary for the website to function and cannot be switched off in our systems.
                They are usually set in response to actions you take, such as logging in or filling out forms.
              </p>
            </div>

            {/* Performance Cookies */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Performance Cookies
              </h3>
              <p className="text-gray-600 leading-relaxed">
                These cookies allow us to measure and improve the performance of our site.
                They help us understand which pages are the most popular and how visitors move around the site.
              </p>
            </div>

            {/* Functional Cookies */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Functional Cookies
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Functional cookies enable the website to provide enhanced functionality and personalization.
                They may be set by us or by third-party providers whose services we use.
              </p>
            </div>

            {/* Targeting/Advertising Cookies */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Targeting/Advertising Cookies
              </h3>
              <p className="text-gray-600 leading-relaxed">
                These cookies may be set through our site by our advertising partners. They may be used by these
                companies to build a profile of your interests and show you relevant ads on other sites.
              </p>
            </div>
          </div>
        </div>

        {/* Managing Cookies */}
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            How You Can Manage Cookies
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            You can control and manage cookies in various ways. Most web browsers automatically accept cookies,
            but you can change your browser settings to refuse or delete cookies.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Adjust your browser settings to control cookies</li>
            <li>Use browser extensions to block cookies</li>
            <li>Opt-out of advertising networks that track cookies</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="max-w-3xl mx-auto bg-indigo-600 text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-lg mb-4">
            If you have any questions about our Cookies Policy, please contact us:
          </p>
          <p>Email: <a href="mailto:webmasterlearning@gmail.com" className="underline">webmasterlearning@gmail.com</a></p>
        </div>
      </div>
    </section>
  );
};

export default CookiesPolicy;
