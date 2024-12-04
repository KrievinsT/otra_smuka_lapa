import React, { useState } from "react";
import Button from "../components/Button";
import { ReactComponent as RightArrow } from "../Images/Rightarrow.svg";

function PropertyDetHeading({ property }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Fallback for missing property or images
  if (!property || !property.image || property.image.length === 0) {
    return (
      <div className="text-center text-gray-500">
        No property data available.
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === property.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? property.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-6 xl:px-16 py-16 space-y-12">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-center">
        {/* Left Section: Name, Price, Info */}
        <div className="space-y-6 text-left">
          <h1 className="font-urbanist text-5xl md:text-8xl font-base text-black">
            {property.name || "Property Name"}
          </h1>
          <h2 className="font-urbanist text-2xl md:text-3xl font-medium text-black">
            ${property.price || "0"} USD
          </h2>
          <p className="flex flex-wrap font-urbanist text-sm md:text-base xl:text-lg font-light text-black gap-x-6">
            <span>{property.bedrooms} Bedroom</span>
            <span>{property.bathrooms} Bathrooms</span>
            <span>{property.kitchens} Kitchen</span>
            <span>{property.totalLandArea || "N/A"}</span>
          </p>
        </div>

        {/* Right Section: Description and Button */}
        <div className="space-y-6 text-left xl:text-right">
          <p className="font-urbanist text-grey text-left text-sm md:text-base leading-relaxed">
            {property.detailedDescription ||
              "Description not available for this property."}
          </p>
          <div className="flex xl:justify-end">
            <Button
              variant="outlineOrange"
              layout="pagination"
              className="group flex items-center justify-center xl:justify-end px-6 py-3 font-urbanist"
            >
              Contact Us
              <RightArrow className="w-4 h-4 ml-2 text-secondary" />
            </Button>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative w-full aspect-[16/9]">
        <img
          src={property.images[currentImageIndex]}
          alt={`${property.name || "Property"} Image ${
            currentImageIndex + 1
          }`}
          className="w-full h-full object-cover rounded-lg"
        />

        {/* Navigation Arrows */}
        {/* Left Arrow */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md"
          onClick={prevImage}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-secondary"
            fill="none"
            viewBox="0 0 20 20"
            stroke="currentColor"
          >
            {/* Left arrow path with horizontal line */}
            <path
              d="M13 15L5 10L13 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="17"
              y1="10"
              x2="5"
              y2="10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md"
          onClick={nextImage}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-secondary"
            fill="none"
            viewBox="0 0 20 20"
            stroke="currentColor"
          >
            {/* Right arrow path with horizontal line */}
            <path
              d="M7 5L15 10L7 15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="2"
              y1="10"
              x2="14"
              y2="10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default PropertyDetHeading;
