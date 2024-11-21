import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import BlackLogo from "../Images/brand-logo-dark.svg";
import WhiteLogo from "../Images/brand-logo.svg";
import Button from "../components/Button";
import DropDown from "../components/DropDown";

function Navbar() {
  const location = useLocation();

  // Determine if the navbar is in "dark" or "light" mode based on the page
  const isPropertiesDetails = location.pathname === "/PropertiesDetails";

  // Choose the appropriate logo
  const logoImage = isPropertiesDetails ? BlackLogo : WhiteLogo;

  // Navbar and link colors based on the theme
  const navbarColor = isPropertiesDetails
    ? "bg-white text-black" // Light navbar
    : "bg-primary text-white"; // Dark navbar

  const linkTextColor = isPropertiesDetails ? "text-black" : "text-white";

  return (
    <header className={`${navbarColor} h-28 w-full flex items-center`}>
      <nav className="w-full flex items-center justify-between px-[50px]">
        {/* Logo */}
        <img src={logoImage} alt="Logo" className="h-12 w-auto" />

        {/* Navigation Links */}
        <ul className="flex space-x-14 text-lg font-medium">
          <li>
            <Link
              to="/"
              className={`font-urbanist text-2xl font-thin hover:text-secondary transition ${linkTextColor}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/Properties"
              className={`font-urbanist font-thin text-2xl hover:text-secondary transition ${linkTextColor}`}
            >
              Properties
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              className={`font-urbanist font-thin text-2xl hover:text-secondary transition ${linkTextColor}`}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <DropDown isDark={!isPropertiesDetails} />
          </li>
        </ul>

        {/* Call-to-Action Button */}
        <Button
          text="Get for Free"
          className={`font-thin text-2xl px-8 py-4`}
          variant={isPropertiesDetails ? "darkdefault" : "default"} // Dynamically choose variant
        />
      </nav>
    </header>
  );
}

export default Navbar;
