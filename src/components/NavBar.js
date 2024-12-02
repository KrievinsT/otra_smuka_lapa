import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import HomeifyeLogo from "../Images/brand-logo.svg"; // Logo for dark navbar
import HomeifyeLogoDark from "../Images/brand-logo-dark.svg"; // Logo for light navbar
import RealtifyeLogo from "../Images/logo-dark.svg"; // Logo for mobile burger open
import ArrowDark from "../Images/arrow_down_black.svg"; // Arrow for light navbar
import ArrowLight from "../Images/arrow_down.svg"; // Arrow for dark navbar
import Button from "../components/Button";
import CloseIcon from "../Images/x.svg"; // Close icon

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu
  const [isPagesOpen, setIsPagesOpen] = useState(false); // State to toggle dropdown for "Pages" in mobile menu
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false); // State for dropdown in desktop menu

  // Determine if navbar is in dark or light mode
  const isPropertiesDetails = location.pathname === "/PropertiesDetails";
  const logoImage =
    isMenuOpen && window.innerWidth < 1024
      ? RealtifyeLogo // When burger menu is open on mobile, use Realtifye logo
      : isPropertiesDetails
      ? HomeifyeLogoDark // When in light mode (e.g., PropertiesDetails), use dark logo
      : HomeifyeLogo; // Default logo for dark navbar or mobile closed state

  const navbarColor = isPropertiesDetails ? "bg-white text-black" : "bg-primary text-white";
  const linkTextColor = isPropertiesDetails ? "text-black" : "text-white";
  const hamburgerColor = isPropertiesDetails ? "bg-black" : "bg-white";
  const arrowImage = isPropertiesDetails ? ArrowDark : ArrowLight; // Use appropriate arrow based on theme

  return (
    <header className={`${navbarColor} h-28 w-full flex items-center relative z-50`}>
      <nav className="max-w-7xl w-full mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <img src={logoImage} alt="Logo" className="h-10 w-auto" />

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-8 text-lg font-medium items-center">
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
          <li className="relative">
            {/* Pages Dropdown */}
            <button
              className={`font-urbanist text-xl font-thin hover:text-secondary transition ${linkTextColor} flex items-center gap-2`}
              onClick={(e) => {
                e.preventDefault();
                setIsPagesDropdownOpen(!isPagesDropdownOpen);
              }}
            >
              Pages
              <img
                src={arrowImage}
                alt="Arrow"
                className={`w-6 h-6 transform transition-transform duration-300 ${
                  isPagesDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {isPagesDropdownOpen && (
              <ul className="absolute mt-2 left-0 w-48 rounded-lg shadow-lg py-2 z-50 bg-gradient">
                <li>
                  <Link
                    to="/Properties"
                    className="font-urbanist text-lg font-thin px-4 py-2 block transition text-black hover:text-secondary"
                    onClick={() => setIsPagesDropdownOpen(false)}
                  >
                    Properties
                  </Link>
                </li>
                <li>
                  <Link
                    to="/PropertiesDetails"
                    className="font-urbanist text-lg font-thin px-4 py-2 block transition text-black hover:text-secondary"
                    onClick={() => setIsPagesDropdownOpen(false)}
                  >
                    Properties Details
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact-us"
                    className="font-urbanist text-lg font-thin px-4 py-2 block transition text-black hover:text-secondary"
                    onClick={() => setIsPagesDropdownOpen(false)}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>

        {/* Get for Free Button */}
        <div className="hidden lg:block">
          <Button
            text="Get for Free"
            className="font-thin text-xl px-6 py-2 border-2 border-white rounded-full hover:bg-white hover:text-primary transition"
            variant={isPropertiesDetails ? "darkdefault" : "default"}
          />
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          className={`lg:hidden flex items-center`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? (
            <img src={CloseIcon} alt="Close menu" className="h-8 w-8" />
          ) : (
            <div className="flex flex-col justify-between w-8 h-6">
              <div className={`h-0.5 w-full rounded ${hamburgerColor}`} />
              <div className={`h-0.5 w-full rounded ${hamburgerColor}`} />
              <div className={`h-0.5 w-full rounded ${hamburgerColor}`} />
            </div>
          )}
        </button>

        {/* Mobile Sliding Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-full bg-white transition-transform duration-500 ease-in-out transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } z-50 lg:hidden`}
        >
          <div className="flex items-center justify-between p-6">
            <img src={RealtifyeLogo} alt="Logo" className="h-10 w-auto" />
            <button
              className="text-black"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close navigation"
            >
              <img src={CloseIcon} alt="Close menu" className="h-8 w-8" />
            </button>
          </div>

          {/* Mobile Menu Items */}
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
              {/* Mobile Dropdown for Pages */}
              <button
                className="font-urbanist text-xl font-thin hover:text-secondary transition text-black flex items-center gap-2"
                onClick={() => setIsPagesOpen(!isPagesOpen)}
              >
                Pages
                <img
                  src={ArrowDark}
                  alt="Arrow"
                  className={`w-6 h-6 transform transition-transform duration-300 ${
                    isPagesOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {isPagesOpen && (
                <ul className="flex flex-col items-start space-y-3 pl-4 mt-2 text-black">
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
                      to="/PropertiesDetails"
                      className="font-urbanist text-xl font-thin hover:text-secondary transition text-black"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Properties Details
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
