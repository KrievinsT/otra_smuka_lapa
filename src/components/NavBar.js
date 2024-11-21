import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navbarColor =
    location.pathname === "/PropertiesDetails"
      ? "bg-white text-black"
      : "bg-primary text-white";

  return (
    <header className={`${navbarColor} p-4`}>
      <nav className="container mx-auto flex justify-between items-center">
        {/* Website Logo */}
        <h1 className="text-xl font-bold">My Website</h1>

        {/* Navigation Links */}
        <ul className="flex space-x-8">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/Properties" className="hover:underline">
              Properties
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className="hover:underline">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/PropertiesDetails" className="hover:underline">
              PropertiesDetails
            </Link>
          </li>
        </ul>

        {/* Call-to-Action or Tagline */}
        <h1 className="text-xl font-bold">Get For Free</h1>
      </nav>
    </header>
  );
}

export default Navbar;
