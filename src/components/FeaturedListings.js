import React, { useState } from "react";
import properties from "../data/PropertiesData"; // Import the properties data
import Button from "../components/Button";
import { ReactComponent as RightArrow } from "../Images/Rightarrow.svg"; // Import Right Arrow as a React component
import Arrow from "../Images/45Arrow-white.svg"; // Ensure this path is correct

function FeaturedListings() {
  const [hovered, setHovered] = useState(null); // Track which card is hovered

  return (
    <section className="max-w-7xl mx-auto py-20 px-6 md:px-12">
      <h2 className="font-urbanist text-7xl font-medium text-primary mb-12">
        Featured Listings
      </h2>
      <div className="flex flex-col space-y-16">
        {properties.slice(0, 3).map((property, index) => (
          <React.Fragment key={property.id}>
            {/* Listing Card */}
            <div
              className={`relative flex flex-col lg:flex-row items-start lg:items-stretch justify-between space-y-6 lg:space-y-0 lg:space-x-8 cursor-pointer`}
              onMouseEnter={() => setHovered(property.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Property Image Container */}
              <div className="w-full lg:w-1/2 overflow-hidden rounded-xl transition-transform duration-500">
                <img
                  src={property.image}
                  alt="House Image"
                  className={`w-full object-cover transform transition-transform duration-500 rounded-xl
                    ${hovered === property.id ? "scale-110" : "scale-100"}
                    h-52 sm:h-56 md:h-96 lg:h-64 xl:h-80 2xl:h-80
                  `}
                />
              </div>

              {/* Property Information */}
              <div className="flex flex-col lg:w-1/2 justify-between transition-all duration-500">
                {/* Top Section: Name, Arrow, and Description */}
                <div className="flex items-center justify-between mb-4 relative">
                  <h3
                    className={`font-urbanist text-5xl font-normal transition-colors duration-500 ${
                      hovered === property.id ? "text-[#FF7A00]" : "text-black"
                    }`}
                  >
                    {property.name}
                  </h3>

                  {/* Arrow Button on Same Line, Slides Up on Hover and Slides Back Down */}
                  <a
                    href={`/property/${property.id}`}
                    className={`flex items-center justify-center p-4 bg-primary rounded-full w-12 h-12 transition-all duration-500 transform absolute right-0 ${
                      hovered === property.id
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-3"
                    }`}
                  >
                    <img
                      src={Arrow}
                      alt="Arrow Icon"
                      className="w-5 h-5 fill-current transition-colors duration-500"
                    />
                  </a>
                </div>

                {/* Property Description */}
                <p className="text-lg font-normal mb-4 leading-relaxed text-grey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  aliquam pulvinar gravida. Vestibulum porttitor ex eu nulla
                  condimentum, fringilla aliquet arcu pharetra. Integer bibendum
                  mi.
                </p>

                {/* Bottom Section: Price */}
                <div className="mt-auto">
                  <p className="font-normal text-4xl text-black inline-block">
                    ${property.price}
                  </p>
                  <span className="text-lg font-light text-grey inline-block ml-1">
                    /Monthly
                  </span>
                </div>
              </div>
            </div>

            {/* Line Divider: Only render if not the last element */}
            {index !== properties.slice(0, 3).length - 1 && (
              <div className="w-full border-t border-black my-8"></div>
            )}
          </React.Fragment>
        ))}
        {/* Button to View All Listings */}
        <div className="flex justify-center items-center mt-16">
          <Button
            text="Explore All Properties"
            variant="outlineOrange"
            className="flex items-center w-60 group" // Added group class for hover effect
          >
            <RightArrow className="w-4 h-4 ml-2 transition-colors duration-500 group-hover:fill-white group-hover:text-white text-secondary" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedListings;
