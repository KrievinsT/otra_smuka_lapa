import React, { useState } from "react";

function PropertyDetailsSection({ property }) {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sections = [
    {
      title: "Rooms Details",
      content: (
        <div className="flex flex-col space-y-4 font-urbanist text-gray-700">
          <h3 className="font-medium text-primary mb-2">Rooms Details</h3>
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            <span>— Bedrooms: {property.bedrooms}</span>
            <span>— Bathrooms: {property.bathrooms}</span>
            <span>— Kitchens: {property.kitchens}</span>
          </div>
        </div>
      ),
    },
    {
      title: "Property Size",
      content: (
        <div className="flex flex-col space-y-4 font-urbanist text-gray-700">
          <div>
            <h3 className="font-medium text-primary mb-2">Property Area</h3>
            <span>— Living Area: {property.livingArea}</span>
          </div>
          <div>
            <h3 className="font-medium text-primary mb-2">Structures</h3>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              <span>— Number of Floors: {property.numberOfFloors}</span>
              <span>— Number of Rooms: {property.numberOfRooms}</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Land Area",
      content: (
        <div className="flex flex-col space-y-4 font-urbanist text-gray-700">
          <h3 className="font-medium text-primary mb-2">Dimensions & Layout</h3>
          <span>— Total Land Area: {property.totalLandArea}</span>
        </div>
      ),
    },
    {
      title: "Year Built",
      content: (
        <div className="flex flex-col space-y-4 font-urbanist text-gray-700">
          <h3 className="font-medium text-primary mb-2">Since</h3>
          <span>— Established Since: {property.yearBuilt}</span>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-white py-16 px-6 lg:px-16 xl:px-28 space-y-8">
      {/* Title at the top */}
      <h1 className="font-urbanist text-4xl md:text-5xl font-bold text-primary mb-8">
        Property Details
      </h1>
      {sections.map((section, index) => (
        <div key={index} className="border-b border-gray-300 pb-4">
          <button
            onClick={() => toggleSection(index)}
            className="w-full flex items-center justify-between text-left font-urbanist text-xl md:text-2xl font-medium text-primary py-4"
          >
            {section.title}
            <img
              src={require("../Images/arrow_down_secondary.svg").default}
              alt="Toggle"
              className={`w-6 h-6 transform transition-transform ${
                openSection === index ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openSection === index
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="pt-4">{section.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PropertyDetailsSection;
