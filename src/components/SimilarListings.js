import React from "react";
import { useNavigate } from "react-router-dom";
import RightArrow from "../Images/45Arrow-white.svg";
import properties from "../data/PropertiesData";

function SimilarListings() {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/PropertiesDetails/${id}`); // Navigate to the property details page
  };

  return (
    <div className="bg-white py-16 px-6 lg:px-16 xl:px-28">
      {/* Section Title */}
      <h2 className="font-urbanist text-center text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-12">
        Similar Listings
      </h2>

      {/* Listings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.slice(0, 3).map((property) => (
          <div
            key={property.id}
            className="w-full lg:max-w-auto flex flex-col items-start group relative font-urbanist px-4 sm:px-6 md:px-0 cursor-pointer"
            onClick={() => handleCardClick(property.id)}
          >
            {/* Property Image with Arrow Icon Overlay */}
            <div className="w-full h-auto overflow-hidden rounded-lg mb-4 relative">
              <img
                src={property.image}
                alt={property.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
              />
              {/* Arrow Icon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center">
                  <img src={RightArrow} alt="View Property" className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Property Name and Price */}
            <div className="flex justify-between items-center w-full mb-2">
              <span className="text-primary text-xl sm:text-2xl font-extralight group-hover:text-secondary transition-colors duration-300">
                {property.name}
              </span>
              <span className="text-primary text-lg sm:text-xl font-thin group-hover:text-secondary transition-colors duration-300">
                ${property.price} USD
              </span>
            </div>

            {/* Address and Total Land Area */}
            <div className="flex justify-between w-full text-gray-800 text-sm sm:text-base mb-1">
              <span>{property.address}</span>
              <span>{property.totalLandArea}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SimilarListings;
