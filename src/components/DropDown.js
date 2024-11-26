import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import ArrowLight from "../Images/arrow_down.svg";
import ArrowDark from "../Images/arrow_down_black.svg";

function DropDown({ isDark }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  const closeDropdown = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Global click listener using useCallback
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    // Check if the dropdown is open before adding the event listener
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    // Cleanup function to remove listener
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, closeDropdown]); // Dependencies on isOpen and closeDropdown

  // Close dropdown on route change
  useEffect(() => {
    closeDropdown();
  }, [location, closeDropdown]);

  return (
    <div className="relative" ref={dropdownRef}>
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

      {isOpen && (
        <div className={`absolute right-0 mt-2 w-48 bg-gradient rounded-lg shadow-lg z-50`}>
          <ul className="py-2">
            <li><Link to="/Properties" onClick={closeDropdown}>Properties</Link></li>
            <li><Link to="/PropertiesDetails" onClick={closeDropdown}>Properties Details</Link></li>
            <li><Link to="/contact-us" onClick={closeDropdown}>Contact Us</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropDown;
