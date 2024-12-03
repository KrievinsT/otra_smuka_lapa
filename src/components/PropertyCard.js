import React from 'react';
import RightArrow from '../Images/45Arrow-white.svg'; // Ensure this path is correct

function PropertyCard({ image, name, price, address, totalLandArea }) {
  // Split the address into two parts for two-line rendering
  const addressParts = address.includes(',') ? address.split(',') : [address, ''];

  return (
    <div className="w-full lg:max-w-auto flex flex-col items-start group relative font-urbanist px-4 sm:px-6 md:px-0">
      {/* Property Image with Arrow Icon Overlay */}
      <div className="w-full h-auto overflow-hidden rounded-lg mb-4 relative">
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
        {/* Address formatting */}
        <div className="md:text-left w-full">
          {/* Single-line address for all screen sizes except md and lg */}
          <span className="block md:hidden lg:hidden xl:block">{address}</span>

          {/* Two-line address for md and lg screen sizes only */}
          <div className="hidden md:flex lg:flex flex-col xl:hidden">
            <span>{addressParts[0].trim()},</span>
            {addressParts[1] && <span>{addressParts[1].trim()}</span>}
          </div>
        </div>
        {/* Total Land Area on a single line */}
        <span className="whitespace-nowrap">{totalLandArea}</span>
      </div>
    </div>
  );
}

export default PropertyCard;
