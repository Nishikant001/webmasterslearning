import React from "react";
import { FaCircle } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-custom-blue text-white py-4 ">
      <div className="container  px-4 xl:ml-44 flex justify-start  items-center " style={{width:"60%"}}>
        <div className="flex flex-col items-start lg:flex-row md:justify-between lg:space-x-8">
          <p className="text-sm mb-2 md:mb-0 lg:order-first order-last">
            © 2023 WebMasters Learning. All rights reserved.
          </p>
          <div className="flex lg:flex-row flex-col lg:space-x-8">
            <a
              href="/privacy"
              className="text-sm hover:underline flex items-center"
            >
              <FaCircle className="text-xxs mr-0.5" />
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-sm hover:underline flex items-center"
            >
              <FaCircle className="text-xxs mr-0.5" />
              Terms and Conditions
            </a>
            <a
              href="/cookies"
              className="text-sm hover:underline flex items-center"
            >
              <FaCircle className="text-xxs mr-0.5" />
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
