import React from "react";
import Button from "./Button"; // Import your Button component.
import HomeIcon from "../Images/home-icon.svg"; // Replace with the correct path.
import LocationIcon from "../Images/location-icon.svg";
import TypesIcon from "../Images/types-icon.svg";
import SearchIcon from "../Images/search-icon-lite.svg";
import { Dropdown } from 'primereact/dropdown';
import "../App.css";

function SearchBar() {
  const propertyOptions = [
    { label: "Cabin", value: "cabin" },
    { label: "Townhouse", value: "townhouse" },
    { label: "Mansion", value: "mansion" },
    { label: "Vacation Home", value: "vacation" },
    { label: "Commercial Property", value: "commercial" },
    { label: "Farmhouse", value: "farmhouse" },
    { label: "Apartment", value: "apartment" },
  ];

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

        {/* Dropdown Container */}
        <div className="flex flex-wrap items-center justify-between w-full space-y-4 lg:space-y-0 lg:space-x-4 mt-4 xl:mt-0">
          
          {/* Properties Dropdown */}
          <div className="flex items-center w-full md:w-[32%] lg:w-[32%] xl:w-[31%] bg-white rounded-full px-4 py-4 border border-gray-200 space-x-2 h-14 md:h-16 lg:h-16 xl:h-20 relative custom-dropdown-panel">
            <img src={HomeIcon} alt="Properties Icon" className="w-6 h-6" />
            <Dropdown
              className="w-full lg:w-full xl:w-full"
              value={propertyOptions[0].value}
              options={propertyOptions}
              placeholder="Select a Property"
              panelClassName="custom-dropdown-panel"
            />
          </div>

          {/* Location Dropdown */}
          <div className="flex items-center w-full md:w-[32%] lg:w-[32%] xl:w-[31%] bg-white rounded-full px-4 py-4 border border-gray-200 space-x-2 h-14 md:h-16 lg:h-16 xl:h-20 relative custom-dropdown-panel">
            <img src={LocationIcon} alt="Location Icon" className="w-6 h-6" />
            <Dropdown
              className="w-full lg:w-full xl:w-full"
              value={propertyOptions[0].value} // replace with location options
              options={propertyOptions} // replace with location options
              placeholder="Select Location"
              panelClassName="custom-dropdown-panel"
            />
          </div>

          {/* Type Dropdown */}
          <div className="flex items-center w-full md:w-[32%] lg:w-[32%] xl:w-[31%] bg-white rounded-full px-4 py-4 border border-gray-200 space-x-2 h-14 md:h-16 lg:h-16 xl:h-20 relative custom-dropdown-panel">
            <img src={TypesIcon} alt="Types Icon" className="w-5 h-5" />
            <Dropdown
              className="w-full lg:w-full xl:w-full"
              value={propertyOptions[0].value} // replace with type options
              options={propertyOptions} // replace with type options
              placeholder="Select Type"
              panelClassName="custom-dropdown-panel"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default SearchBar;
