import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import ArrowLight from "../Images/arrow_down.svg";
import ArrowDark from "../Images/arrow_down_black.svg";

function DropDown({ isDark }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Toggle dropdown state
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Close the dropdown
  const closeDropdown = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Handle clicking outside of dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, closeDropdown]);

  // Close dropdown on route change
  useEffect(() => {
    closeDropdown();
  }, [location, closeDropdown]);

  return (
    <div className="relative z-50" ref={dropdownRef}>
      {/* Button to toggle the dropdown */}
      <button
        className={`font-urbanist text-2xl font-thin flex items-center gap-2 ${
          isDark ? "text-white" : "text-black"
        }`}
        onClick={toggleDropdown}
        aria-expanded={isOpen}
      >
        Pages
        <img
          src={isDark ? ArrowLight : ArrowDark}
          alt="Arrow"
          className={`w-8 h-8 transform transition-transform duration-450 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          className="absolute top-full mt-2 left-0 w-48 bg-white rounded-lg shadow-lg z-50"
        >
          <ul className="py-2">
            <li>
              <Link
                to="/Properties"
                className="block px-4 py-2 text-black hover:bg-gray-100 transition"
                onClick={closeDropdown}
              >
                Properties
              </Link>
            </li>
            <li>
              <Link
                to="/PropertiesDetails"
                className="block px-4 py-2 text-black hover:bg-gray-100 transition"
                onClick={closeDropdown}
              >
                Properties Details
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="block px-4 py-2 text-black hover:bg-gray-100 transition"
                onClick={closeDropdown}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropDown;
