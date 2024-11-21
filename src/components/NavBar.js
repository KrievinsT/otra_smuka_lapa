import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import HomeifyeLogo from "../Images/brand-logo.svg"; // Homeifye logo for dark background
import HomeifyeLogoDark from "../Images/brand-logo-dark.svg"; // Homeifye logo for light background
import RealtifyeLogo from "../Images/logo-dark.svg"; // Realtifye logo for open state
import ArrowDark from "../Images/arrow_down_black.svg"; // Arrow icon in black
import Button from "../components/Button";
import DropDown from "../components/DropDown";
import CloseIcon from "../Images/x.svg"; // Close icon

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu
  const [isPagesOpen, setIsPagesOpen] = useState(false); // State to toggle dropdown for "Pages" in mobile menu

  // Close the menu whenever the route changes
  useEffect(() => {
    setIsMenuOpen(false); // Close the menu on navigation
  }, [location.pathname]);

  // Determine if navbar is in dark or light mode
  const isPropertiesDetails = location.pathname === "/PropertiesDetails";
  const logoImage = isMenuOpen ? RealtifyeLogo : (isPropertiesDetails ? HomeifyeLogoDark : HomeifyeLogo);
  const navbarColor = isPropertiesDetails ? "bg-white text-black" : "bg-primary text-white";
  const linkTextColor = isPropertiesDetails ? "text-black" : "text-white";
  const hamburgerColor = isPropertiesDetails ? "bg-black" : "bg-white";

  return (
    <header className={`${navbarColor} h-20 w-full flex items-center`}>
      <nav className="w-full flex items-center justify-between px-6 md:px-[50px]">
        {/* Logo */}
        <img src={logoImage} alt="Logo" className="h-10 w-auto" />

        {/* Hamburger Menu for Mobile */}
        <button
          className={`md:hidden flex items-center`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? (
            <img src={CloseIcon} alt="Close menu" className="h-8 w-8" />
          ) : (
            // Hamburger icon made with divs
            <div className="flex flex-col justify-between w-8 h-6">
              <div className={`h-0.5 w-full rounded ${hamburgerColor}`} />
              <div className={`h-0.5 w-full rounded ${hamburgerColor}`} />
              <div className={`h-0.5 w-full rounded ${hamburgerColor}`} />
            </div>
          )}
        </button>

        {/* Navigation Links for Desktop */}
        <ul className={`hidden md:flex space-x-8 text-lg font-medium items-center`}>
          <li>
            <Link
              to="/"
              className={`font-urbanist text-xl font-thin hover:text-secondary transition ${linkTextColor}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/Properties"
              className={`font-urbanist text-xl font-thin hover:text-secondary transition ${linkTextColor}`}
            >
              Properties
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              className={`font-urbanist text-xl font-thin hover:text-secondary transition ${linkTextColor}`}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <DropDown isDark={!isPropertiesDetails} />
          </li>
        </ul>

        {/* Call-to-Action Button for Desktop */}
        <div className="hidden md:block">
          <Button
            text="Get for Free"
            className={`font-thin text-xl px-8 py-4`}
            variant={isPropertiesDetails ? "darkdefault" : "default"}
          />
        </div>

        {/* Sliding Mobile Menu - Fullscreen */}
        <div
          className={`fixed top-0 right-0 h-full w-full bg-white transition-transform duration-500 ease-in-out transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } z-50 md:hidden`}
        >
          <div className="flex items-center justify-between p-6">
            {/* Logo inside mobile menu */}
            <img src={RealtifyeLogo} alt="Logo" className="h-10 w-auto" />

            {/* Close Button */}
            <button
              className="text-black"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close navigation"
            >
              <img src={CloseIcon} alt="Close menu" className="h-8 w-8" />
            </button>
          </div>

          <ul className="flex flex-col items-start space-y-4 py-4 px-6 text-black">
            <li>
              <Link
                to="/"
                className="font-urbanist text-xl font-thin hover:text-secondary transition text-black"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Properties"
                className="font-urbanist text-xl font-thin hover:text-secondary transition text-black"
                onClick={() => setIsMenuOpen(false)}
              >
                Properties
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="font-urbanist text-xl font-thin hover:text-secondary transition text-black"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
            <li>
              {/* Pages Dropdown for Mobile Menu */}
              <button
                className="font-urbanist text-xl font-thin flex items-center gap-2 hover:text-secondary transition text-black"
                onClick={() => setIsPagesOpen(!isPagesOpen)}
              >
                Pages
                <img
                  src={ArrowDark} // Always use ArrowDark (black arrow) for visibility
                  alt="Arrow"
                  className={`w-4 h-4 transform transition-transform duration-300 ${
                    isPagesOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {isPagesOpen && (
                <ul className="flex flex-col items-start space-y-3 pl-4 mt-2 text-black">
                  <li>
                    <Link
                      to="/Properties"
                      className="font-urbanist text-lg font-thin text-black hover:text-secondary transition"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Properties
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/PropertiesDetails"
                      className="font-urbanist text-lg font-thin text-black hover:text-secondary transition"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Properties Details
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact-us"
                      className="font-urbanist text-lg font-thin text-black hover:text-secondary transition"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/style-guides"
                      className="font-urbanist text-lg font-thin text-black hover:text-secondary transition"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Style Guides
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/licenses"
                      className="font-urbanist text-lg font-thin text-black hover:text-secondary transition"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Licenses
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/changelog"
                      className="font-urbanist text-lg font-thin text-black hover:text-secondary transition"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Changelog
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
