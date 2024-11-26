// SearchBar.js
import React, { useState, useRef, useEffect } from "react";
import Button from "./Button"; // Import your Button component.
import HomeIcon from "../Images/home-icon.svg";
import LocationIcon from "../Images/location-icon.svg";
import TypesIcon from "../Images/types-icon.svg";
import ArrowIcon from "../Images/arrow_down_grey.svg";
import SearchIcon from "../Images/search-icon-lite.svg";

function SearchBar() {
  const [showPopup, setShowPopup] = useState(null);
  const popupRef = useRef(null);

  const togglePopup = (popup) => {
    setShowPopup((prev) => (prev === popup ? null : popup));
  };

  // Handle outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-[95vw] mx-auto px-2 py-2">
      <div className="bg-white rounded-2xl font-extralight shadow-md flex flex-wrap lg:flex-wrap xl:flex-nowrap items-center justify-center w-full p-4 lg:p-8 space-y-4 lg:space-y-4 xl:space-y-0 xl:space-x-12 h-auto lg:h-auto xl:h-40">

        {/* Search Input */}
        <div className="flex items-center w-full bg-white rounded-full px-4 py-4 border border-gray-200 h-14 md:h-16 lg:h-16 xl:h-20 relative">
          <img src={SearchIcon} alt="Search Icon" className="w-5 h-5 mr-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search for properties"
            className="bg-transparent outline-none text-lg flex-grow"
          />
          <Button
            text="Search"
            variant="solidOrange"
            className="font-bold hidden md:block h-10 md:h-12 xl:h-14 absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center px-4 leading-none"
          />
        </div>

        {/* Search Button for Mobile */}
        <div className="block md:hidden w-full">
          <Button
            text="Search"
            variant="solidOrange"
            className="w-full py-2"
          />
        </div>

        {/* Popup Menus */}
        <div ref={popupRef} className="flex flex-wrap items-center justify-between w-full space-y-4 lg:space-y-0 lg:space-x-4 mt-4 xl:mt-0">

          {/* Properties Popup */}
          <div className="relative w-full md:w-[32%] lg:w-[32%] xl:w-[31%]">
            <div
              className="flex items-center bg-white rounded-full px-4 py-4 border border-gray-200 space-x-2 h-14 md:h-16 lg:h-16 xl:h-20 cursor-pointer"
              onClick={() => togglePopup("properties")}
            >
              <img src={HomeIcon} alt="Properties Icon" className="w-6 h-6" />
              <span className="flex-grow text-black">Properties</span>
              <img src={ArrowIcon} alt="Dropdown Arrow" className="w-6 h-6" />
            </div>
            {showPopup === "properties" && (
              <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                {["Cabin", "Townhouse", "Mansion", "Vacation Home", "Commercial Property", "Farmhouse", "Apartment"].map((item) => (
                  <div
                    key={item}
                    className="relative py-2 px-4 cursor-pointer transition group text-black"
                  >
                    <span className="relative z-10 group-hover:text-white">{item}</span>
                    <div className="absolute inset-0.5 rounded-lg bg-secondary scale-95 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"></div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Location Popup */}
          <div className="relative w-full md:w-[32%] lg:w-[32%] xl:w-[31%]">
            <div
              className="flex items-center bg-white rounded-full px-4 py-4 border border-gray-200 space-x-2 h-14 md:h-16 lg:h-16 xl:h-20 cursor-pointer"
              onClick={() => togglePopup("location")}
            >
              <img src={LocationIcon} alt="Location Icon" className="w-6 h-6" />
              <span className="flex-grow text-black">Location</span>
              <img src={ArrowIcon} alt="Dropdown Arrow" className="w-6 h-6" />
            </div>
            {showPopup === "location" && (
              <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                {["New York", "Los Angeles", "Chicago"].map((item) => (
                  <div
                    key={item}
                    className="relative py-2 px-4 cursor-pointer transition group text-black"
                  >
                    <span className="relative z-10 group-hover:text-white">{item}</span>
                    <div className="absolute inset-0.5 rounded-lg bg-secondary scale-95 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"></div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Types Popup */}
          <div className="relative w-full md:w-[32%] lg:w-[32%] xl:w-[31%]">
            <div
              className="flex items-center bg-white rounded-full px-4 py-4 border border-gray-200 space-x-2 h-14 md:h-16 lg:h-16 xl:h-20 cursor-pointer"
              onClick={() => togglePopup("types")}
            >
              <img src={TypesIcon} alt="Types Icon" className="w-6 h-6" />
              <span className="flex-grow text-black">Types</span>
              <img src={ArrowIcon} alt="Dropdown Arrow" className="w-6 h-6" />
            </div>
            {showPopup === "types" && (
              <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                {["Buy", "Rent", "Lease"].map((item) => (
                  <div
                    key={item}
                    className="relative py-2 px-4 cursor-pointer transition group text-black"
                  >
                    <span className="relative z-10 group-hover:text-white">{item}</span>
                    <div className="absolute inset-0.5 rounded-lg bg-secondary scale-95 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"></div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default SearchBar;
