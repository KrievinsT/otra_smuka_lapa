import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ArrowLight from "../Images/arrow_down.svg"; // Light arrow icon
import ArrowDark from "../Images/arrow_down_black.svg"; // Dark arrow icon

function DropDown({ isDark }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const baseButtonStyles = `font-urbanist text-2xl font-thin flex items-center gap-2 ${
    isDark ? "text-white" : "text-black"
  }`;

  const baseDropdownStyles = `block px-4 py-2 hover:text-secondary transition-all duration-500 ease-in-out text-black`; // Always black text

  const dropdownBackground = "bg-gradient"; // Preset gradient background

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className={`${baseButtonStyles}`}
        onClick={toggleDropdown}
      >
        Pages
        <img
          src={isDark ? ArrowLight : ArrowDark} // Dynamically select the icon
          alt="Arrow"
          className={`w-8 h-8 transform transition-transform duration-450 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      {isOpen && (
        <div
          className={`absolute right-0 mt-2 w-48 ${dropdownBackground} rounded-lg shadow-lg z-50`}
        >
          <ul className="py-2">
            <li>
              <Link to="/Properties" className={`${baseDropdownStyles}`}>
                Properties
              </Link>
            </li>
            <li>
              <Link to="/PropertiesDetails" className={`${baseDropdownStyles}`}>
                Properties Details
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className={`${baseDropdownStyles}`}>
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
