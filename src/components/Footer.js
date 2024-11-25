import React from "react";
import HomeifyeLogo from "../Images/brand-logo-dark.svg";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"; // Importing social media icons

function Footer() {
  return (
    <footer className="bg-white text-primary py-16 w-full border-t border-gray-200">
      <div className="max-w-[100%] mx-auto px-4 md:px-24 lg:px-32"> {/* Increased max-width and padding */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 lg:gap-32 items-start mb-16">
          {/* Logo and Company Description */}
          <div className="space-y-4">
            <img src={HomeifyeLogo} alt="Homeifye Logo" className="h-10 w-auto" /> {/* Increased logo size */}
            <p className="text-lg leading-relaxed text-black font-thin">
              © Homeifye dedicated to revolutionizing the real estate experience. Through innovation and excellence.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-8 text-black">
              <a href="https://instagram.com" aria-label="Instagram" className="hover:text-secondary">
                <FaInstagram className="w-6 h-6" /> {/* Increased icon size */}
              </a>
              <a href="https://facebook.com" aria-label="Facebook" className="hover:text-secondary">
                <FaFacebook className="w-6 h-6" /> {/* Increased icon size */}
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="hover:text-secondary">
                <FaTwitter className="w-6 h-6" /> {/* Increased icon size */}
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-secondary">
                <FaLinkedin className="w-6 h-6" /> {/* Increased icon size */}
              </a>
            </div>
          </div>

          {/* Pages Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-black">Pages</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-secondary font-urbanist text-lg text-grey">
                  Home
                </a>
              </li>
              <li>
                <a href="/Properties" className="hover:text-secondary font-urbanist text-lg text-grey">
                  Properties
                </a>
              </li>
              <li>
                <a href="/contact-us" className="hover:text-secondary font-urbanist text-lg text-grey">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-black">Contact</h4>
            <ul className="space-y-2 text-lg text-grey">
              <li>Tel: (62) 1829017</li>
              <li>Email: hello@realtifye.com</li>
              <li>2912 Meadowbrook Road, Los Angeles, CA 90017</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between text-lg mt-12 border-t border-gray-200 pt-8 text-grey">
          <p className="mb-2 md:mb-0">© All rights reserved. Flowfye.</p>
          <p>Powered by Webflow.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
