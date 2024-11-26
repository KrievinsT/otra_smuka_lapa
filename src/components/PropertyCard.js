// PropertyCard.js
import React from "react";
import RightArrow from "../Images/45Arrow-white.svg"; // Import the modified arrow icon

function PropertyCard({ image, name, price }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 w-full max-w-sm transition-transform transform hover:scale-105 relative group">
      {/* Property Image */}
      <div className="relative overflow-hidden rounded-lg">
        <img src={image} alt={name} className="w-full h-48 object-cover mb-4" />

        {/* Arrow Icon Overlay - shows on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center">
            <img
              src={RightArrow}
              alt="View Property"
              className="w-5 h-5"
            />
          </div>
        </div>
      </div>

      {/* Property Information */}
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-lg font-light text-gray-600 mb-2">${price} USD</p>
      </div>
    </div>
  );
}

export default PropertyCard;
