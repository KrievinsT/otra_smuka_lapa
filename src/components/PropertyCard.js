import React from 'react';
import RightArrow from '../Images/45Arrow-white.svg'; // Ensure this path is correct

function PropertyCard({ image, name, price, address, totalLandArea }) {
  return (
    <div className="w-full max-w-[360px] flex flex-col items-start group relative font-urbanist">
      {/* Property Image with Arrow Icon Overlay */}
      <div className="w-full h-64 overflow-hidden rounded-lg mb-4 relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
        />
        {/* Arrow Icon Overlay - shows on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center">
            <img src={RightArrow} alt="View Property" className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Property Name and Price in Same Row with Hover Effect */}
      <div className="flex justify-between items-center w-full mb-2">
        <span className="text-primary text-xl sm:text-2xl font-extralight group-hover:text-secondary transition-colors duration-300">
          {name}
        </span>
        <span className="text-primary text-lg sm:text-xl font-thin group-hover:text-secondary transition-colors duration-300">
          ${price} USD
        </span>
      </div>

      {/* Address and Total Land Area in Same Row */}
      <div className="flex justify-between w-full text-gray-800 text-sm sm:text-base mb-1">
        <span>{address}</span>
        <span>{totalLandArea}</span>
      </div>
    </div>
  );
}

export default PropertyCard;
