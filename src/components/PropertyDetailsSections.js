import React, { useState, useRef } from "react";

function PropertyDetailsSection({ property }) {
  const [openSection, setOpenSection] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlaceholder, setShowPlaceholder] = useState(true); // Track if placeholder image should be shown
  const videoRef = useRef(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleVideoStart = () => {
    setIsPlaying(true);
    setShowPlaceholder(false); // Hide placeholder when video starts playing
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  const sections = [
    {
      title: "Interior Details",
      content: (
        <div className="flex flex-col space-y-4 font-urbanist text-gray-700 pb-4">
          <h3 className="font-medium mb-2">Rooms Details</h3>
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
        <div className="flex flex-col space-y-4 font-urbanist text-gray-700 pb-4">
          <div>
            <h3 className="font-medium mb-2">Property Area</h3>
            <span>— Living Area: {property.livingArea}</span>
          </div>
          <div>
            <h3 className="font-medium mb-2">Structures</h3>
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
        <div className="flex flex-col space-y-4 font-urbanist text-gray-700 pb-4">
          <h3 className="font-medium mb-2">Dimensions & Layout</h3>
          <span>— Total Land Area: {property.totalLandArea}</span>
        </div>
      ),
    },
    {
      title: "Year Built",
      content: (
        <div className="flex flex-col space-y-4 font-urbanist text-gray-700 pb-4">
          <h3 className="font-medium mb-2">Since</h3>
          <span>— Established Since: {property.yearBuilt}</span>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-white py-16 px-6 md:px-8 lg:px-16 xl:px-28">
      {/* Title */}
      <h1 className="font-urbanist text-4xl md:text-5xl font-bold text-primary mb-16">
        Property Details
      </h1>

      {/* Layout Wrapper */}
      <div className="flex flex-col md:flex-row md:space-x-12">
        {/* Left Section: Property Details */}
        <div className="flex-1 order-2 md:order-1">
          {sections.map((section, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                onClick={() => toggleSection(index)}
                className="w-full flex items-center justify-between text-left font-urbanist text-xl md:text-3xl font-medium text-primary py-4"
              >
                {section.title}
                <img
                  src={require("../Images/arrow_down_secondary.svg").default}
                  alt="Toggle"
                  className={`w-12 h-12 transform transition-transform ${
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

        {/* Right Section: Video */}
        <div className="flex-1 mb-8 md:mb-0 relative order-1 md:order-2">
          <div
            className="sticky top-16"
            style={{ height: "fit-content", maxHeight: "calc(100vh - 32px)" }}
          >
            <div className="relative w-full h-auto">
              {/* Show placeholder image only once */}
              {showPlaceholder && (
                <div className="absolute inset-0 z-10">
                  <img
                    src={require("../Images/VideoBackground.jpeg")}
                    alt="Video Background"
                    className="w-full h-full object-cover rounded-lg"
                    onClick={handleVideoStart}
                  />
                </div>
              )}

              {/* Sticker is shown initially or when paused */}
              {!isPlaying && (
                <img
                  src={require("../Images/Sticker1.svg").default}
                  alt="Sticker"
                  className={`absolute z-20 top-4 left-4 w-16 h-16`}
                />
              )}

              {/* Video Component */}
              <video
                ref={videoRef}
                className="w-full h-auto rounded-lg shadow-lg relative z-0"
                controls
                onPlay={handleVideoStart}
                onPause={handleVideoPause}
              >
                <source
                  src={require("../Videos/the_color_of_california.mp4")}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetailsSection;
