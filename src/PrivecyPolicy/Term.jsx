import React from "react";

const TermsAndPrivacy = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Terms of Service and Privacy Policy
        </h1>

        {/* Terms of Service Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Terms of Service
          </h2>

          {/* Acceptance of Terms */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Acceptance of Terms
            </h3>
            <p className="text-gray-600 leading-relaxed">
              By accessing and using this website, you agree to comply with and
              be bound by the following terms and conditions. If you do not
              agree to these terms, please do not use this site.
            </p>
          </div>

          {/* Changes to Terms */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Changes to Terms
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to modify these terms at any time. We will
              post updates to these terms on this page, and your continued use
              of the site constitutes your acceptance of those changes.
            </p>
          </div>

          {/* User Responsibilities */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              User Responsibilities
            </h3>
            <p className="text-gray-600 leading-relaxed">
              As a user of this site, you agree to provide accurate and
              up-to-date information, to refrain from unlawful behavior, and to
              respect the rights of others.
            </p>
          </div>

          {/* Termination of Use */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Termination of Use
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to suspend or terminate your access to our
              site at any time, without notice, for conduct that we believe
              violates these terms.
            </p>
          </div>

          {/* Governing Law */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Governing Law
            </h3>
            <p className="text-gray-600 leading-relaxed">
              These terms are governed by the laws of [Your Country], without
              regard to its conflict of law provisions.
            </p>
          </div>
        </div>

        {/* Privacy Policy Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Privacy Policy
          </h2>

          {/* Introduction */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Introduction
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We are committed to protecting your personal information and your
              right to privacy. This Privacy Policy explains what information we
              collect and how we use it.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Information We Collect
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We collect personal information you provide to us such as name,
              email address, and phone number, as well as data on how you use
              our site.
            </p>
          </div>

          {/* How We Use Your Information */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              How We Use Your Information
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We use your information to operate and maintain our website, to
              communicate with you, and to improve our services.
            </p>
          </div>

          {/* Sharing of Information */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Sharing of Information
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We do not share your personal information with third parties,
              except as required by law or as necessary to operate our website.
            </p>
          </div>

          {/* Your Rights */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Your Rights
            </h3>
            <p className="text-gray-600 leading-relaxed">
              You have the right to access, update, or delete your personal
              information. You may also opt-out of certain communications at any
              time.
            </p>
          </div>

          {/* Security */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Security
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We take reasonable steps to protect your information, but no
              system is completely secure.
            </p>
          </div>

          {/* Contact Us */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Contact Us
            </h3>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions or concerns about these terms or the
              privacy policy, please contact us at:
              <br />
              <a
                href="mailto:webmasterlearning@gmail.com"
                className="text-indigo-600 underline"
              >
                webmasterlearning@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsAndPrivacy;
