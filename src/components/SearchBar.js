import React from "react";
import Button from "./Button"; // Import your Button component.
import HomeIcon from "../Images/home-icon.svg"; // Replace with the correct path.
import LocationIcon from "../Images/location-icon.svg";
import TypesIcon from "../Images/types-icon.svg";
import ArrowIcon from "../Images/arrow_down_grey.svg"; // Importing arrow_down_grey.svg
import SearchIcon from "../Images/search-icon-lite.svg"; // Importing search-icon-lite.svg

function SearchBar() {
  return (
    <div className="w-[95vw] mx-auto px-2 py-2">
      <div className="bg-white rounded-2xl shadow-md flex flex-wrap lg:flex-nowrap items-center justify-center w-full p-4 lg:p-8 space-y-4 lg:space-y-0 lg:space-x-4 h-auto lg:h-40">

        {/* Search Input */}
        <div className="flex items-center w-full lg:flex-grow bg-white rounded-full px-4 py-4 border border-gray-200 h-16 lg:h-20 relative mb-4 lg:mb-0">
          <img src={SearchIcon} alt="Search Icon" className="w-6 h-6 mr-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search for properties"
            className="bg-transparent outline-none text-lg flex-grow"
          />
          <Button
            text="Search"
            variant="solidOrange"
            className="hidden lg:block ml-4 px-8 py-2 h-14"
          />
        </div>

        {/* Search Button for Mobile */}
        <div className="block lg:hidden w-full">
          <Button
            text="Search"
            variant="solidOrange"
            className="w-full py-2"
          />
        </div>

        {/* Properties Dropdown */}
        <div className="flex items-center w-full lg:w-auto bg-white rounded-full px-4 lg:px-6 py-4 border border-gray-200 space-x-2 h-16 lg:h-20 relative mb-4 lg:mb-0">
          <img src={HomeIcon} alt="Properties Icon" className="w-6 h-6" />
          <select className="bg-transparent outline-none text-lg appearance-none pr-8 w-full lg:w-auto">
            <option value="">Properties</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
          </select>
          <img
            src={ArrowIcon}
            alt="Dropdown Arrow"
            className="absolute right-4 w-6 h-6 pointer-events-none"
          />
        </div>

        {/* Location Dropdown */}
        <div className="flex items-center w-full lg:w-auto bg-white rounded-full px-4 lg:px-6 py-4 border border-gray-200 space-x-2 h-16 lg:h-20 relative mb-4 lg:mb-0">
          <img src={LocationIcon} alt="Location Icon" className="w-6 h-6" />
          <select className="bg-transparent outline-none text-lg appearance-none pr-8 w-full lg:w-auto">
            <option value="">Location</option>
            <option value="new-york">New York</option>
            <option value="los-angeles">Los Angeles</option>
            <option value="chicago">Chicago</option>
          </select>
          <img
            src={ArrowIcon}
            alt="Dropdown Arrow"
            className="absolute right-4 w-6 h-6 pointer-events-none"
          />
        </div>

        {/* Type Dropdown */}
        <div className="flex items-center w-full lg:w-auto bg-white rounded-full px-4 lg:px-6 py-4 border border-gray-200 space-x-2 h-16 lg:h-20 relative">
          <img src={TypesIcon} alt="Types Icon" className="w-6 h-6" />
          <select className="bg-transparent outline-none text-lg appearance-none pr-8 w-full lg:w-auto">
            <option value="">Types</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
            <option value="lease">Lease</option>
          </select>
          <img
            src={ArrowIcon}
            alt="Dropdown Arrow"
            className="absolute right-4 w-6 h-6 pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
