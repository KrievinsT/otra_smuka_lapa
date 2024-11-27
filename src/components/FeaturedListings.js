import React, { useState } from "react";
import properties from "../data/PropertiesData"; // Import the properties data
import RightArrowWhite from "../Images/45Arrow-white.svg"; // Import hover arrow

function FeaturedListings() {
  const [hovered, setHovered] = useState(null); // Track which card is hovered

  return (
    <section className="max-w-7xl mx-auto py-20 px-6 md:px-12">
      <h2 className="font-urbanist text-5xl font-semibold text-primary mb-12">
        Featured Listings
      </h2>
      <div className="flex flex-col space-y-16">
        {properties.slice(0, 3).map((property, index) => (
          <React.Fragment key={property.id}>
            {/* Listing Card */}
            <div
              className={`relative flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-6 lg:space-y-0 lg:space-x-8 cursor-pointer pb-6`}
              onMouseEnter={() => setHovered(property.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Property Image */}
              <div className="w-full lg:w-1/2 overflow-hidden">
                <img
                  src={property.image}
                  alt="House Image"
                  className="w-full h-full rounded-lg object-cover transform transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Property Information */}
              <div className="flex-grow lg:w-1/2 transition-all duration-500">
                <h3
                  className={`font-urbanist text-4xl font-semibold mb-4 ${
                    hovered === property.id ? "text-[#FF7A00]" : "text-black"
                  }`}
                >
                  {property.name}
                </h3>
                <p className="text-lg font-light mb-4 leading-relaxed text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  aliquam pulvinar gravida. Vestibulum porttitor ex eu nulla
                  condimentum, fringilla aliquet arcu pharetra. Integer bibendum
                  mi.
                </p>
                <p className="font-semibold text-3xl mb-6 text-black">
                  ${property.price} <span className="text-lg">/Monthly</span>
                </p>
              </div>

              {/* Explore Button Appears on Hover */}
              {hovered === property.id && (
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 transition-transform duration-500">
                  <a
                    href={`/property/${property.id}`}
                    className="flex items-center justify-center p-4 bg-primary rounded-full w-12 h-12 transition duration-300 transform hover:scale-110"
                  >
                    <img src={RightArrowWhite} alt="Arrow Icon" className="w-5 h-5" />
                  </a>
                </div>
              )}
            </div>

            {/* Line Divider: Only render if not the last element */}
            {index !== properties.slice(0, 3).length - 1 && (
              <div className="w-full border-t border-black my-8"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default FeaturedListings;
