import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import HomeifyeLogo from "../Images/brand-logo.svg";
import HomeifyeLogoDark from "../Images/brand-logo-dark.svg";
import RealtifyeLogo from "../Images/logo-dark.svg";
import ArrowDark from "../Images/arrow_down_black.svg";
import Button from "../components/Button";
import DropDown from "../components/DropDown";
import CloseIcon from "../Images/x.svg";

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);

  // Close the menu whenever the route changes
  useEffect(() => {
    setIsMenuOpen(false);
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
        <img src={logoImage} alt="Logo" className="h-10 w-auto" />

        {/* Hamburger*/}
        <button className={`md:hidden flex items-center`} onClick={() => setIsMenuOpen(!isMenuOpen)}aria-label="Toggle navigation">
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

        <ul className={`hidden md:flex space-x-8 text-lg font-medium items-center`}>
          <li>
            <Link to="/" className={`font-urbanist text-xl font-thin hover:text-secondary transition ${linkTextColor}`}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/Properties" className={`font-urbanist text-xl font-thin hover:text-secondary transition ${linkTextColor}`}>
              Properties
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className={`font-urbanist text-xl font-thin hover:text-secondary transition ${linkTextColor}`}>
              Contact Us
            </Link>
          </li>
          <li>
            <DropDown isDark={!isPropertiesDetails} />
          </li>
        </ul>

        {/* Only visable on desktop*/}
        <div className="hidden md:block">
          <Button text="Get for Free" className={`font-thin text-xl px-8 py-4`} variant={isPropertiesDetails ? "darkdefault" : "default"}/>
        </div>

        {/* Slide */}
        <div className={`fixed top-0 right-0 h-full w-full bg-white transition-transform duration-500 ease-in-out transform ${ isMenuOpen ? "translate-x-0" : "translate-x-full"} z-50 md:hidden`}>
          <div className="flex items-center justify-between p-6">
            <img src={RealtifyeLogo} alt="Logo" className="h-10 w-auto" />
            <button className="text-black" onClick={() => setIsMenuOpen(false)}aria-label="Close navigation">
              <img src={CloseIcon} alt="Close menu" className="h-8 w-8" />
            </button>
          </div>

          <ul className="flex flex-col items-start space-y-4 py-4 px-6 text-black">
            <li>
              <Link to="/" className="font-urbanist text-2xl font-thin hover:text-secondary transition text-black" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/Properties" className="font-urbanist text-2xl font-thin hover:text-secondary transition text-black" onClick={() => setIsMenuOpen(false)}>
                Properties
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="font-urbanist text-2xl font-thin hover:text-secondary transition text-black" onClick={() => setIsMenuOpen(false)}>
                Contact Us
              </Link>
            </li>
            <li>
              {/* DropDown mobile*/}
              <button
                className="font-urbanist text-2xl font-thin flex items-center gap-2 hover:text-secondary transition text-black"
                onClick={() => setIsPagesOpen(!isPagesOpen)}
              >
                Pages
                <img src={ArrowDark} alt="Arrow" className={`w-8 h-8 transform transition-transform duration-300 ${isPagesOpen ? "rotate-180" : "rotate-0"}`}/>
              </button>
              {isPagesOpen && (
                <ul className="flex flex-col items-start space-y-3 pl-4 mt-2 text-black">
                  <li>
                    <Link to="/Properties" className="font-urbanist text-2xl font-thin text-black hover:text-secondary transition" onClick={() => setIsMenuOpen(false)}>
                      Properties
                    </Link>
                  </li>
                  <li>
                    <Link to="/PropertiesDetails" className="font-urbanist text-2xl font-thin text-black hover:text-secondary transition" onClick={() => setIsMenuOpen(false)}>
                      Properties Details
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact-us" className="font-urbanist text-2xl font-thin text-black hover:text-secondary transition" onClick={() => setIsMenuOpen(false)}>
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
