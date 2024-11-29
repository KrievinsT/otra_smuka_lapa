import React, { useState } from "react";
import properties from "../data/PropertiesData";
import Button from "../components/Button";
import { ReactComponent as RightArrow } from "../Images/Rightarrow.svg";
import Arrow from "../Images/45Arrow-white.svg";

function FeaturedListings() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="w-full max-w-7xl mx-auto py-12 px-4 md:px-8 lg:px-12">
      {/* Responsive Heading */}
      <div className="overflow-hidden">
        <h2 className="font-urbanist text-4xl md:text-5xl lg:text-7xl font-medium text-primary mb-8 md:mb-12">
          Featured Listings
        </h2>
      </div>
      <div className="flex flex-col space-y-12">
        {properties.slice(0, 3).map((property, index) => (
          <React.Fragment key={property.id}>
            {/* Listing Card */}
            <div
              className="relative flex flex-col lg:flex-row items-start lg:items-stretch justify-between space-y-6 lg:space-y-0 lg:space-x-8 cursor-pointer"
              onMouseEnter={() => setHovered(property.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Property Image */}
              <div className="w-full lg:w-1/2 overflow-hidden rounded-xl transition-transform duration-500">
                <img
                  src={property.image}
                  alt="House"
                  className={`w-full object-cover transform transition-transform duration-500 rounded-xl ${
                    hovered === property.id ? "scale-110" : "scale-100"
                  } h-52 sm:h-56 md:h-96 lg:h-64 xl:h-80`}
                />
              </div>

              {/* Property Information */}
              <div className="flex flex-col lg:w-1/2 justify-between transition-all duration-500">
                <div className="flex items-center justify-between mb-4 relative">
                  <h3
                    className={`font-urbanist text-2xl md:text-3xl lg:text-5xl font-normal transition-colors duration-500 ${
                      hovered === property.id ? "text-[#FF7A00]" : "text-black"
                    }`}
                  >
                    {property.name}
                  </h3>
                  <a
                    href={`/property/${property.id}`}
                    className={`flex items-center justify-center p-3 md:p-4 bg-primary rounded-full w-10 h-10 md:w-12 md:h-12 transition-all duration-500 transform absolute right-0 ${
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

                <p className="text-sm md:text-base lg:text-lg font-normal mb-4 leading-relaxed text-grey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  aliquam pulvinar gravida.
                </p>

                <div className="mt-auto">
                  <p className="font-normal text-2xl md:text-3xl lg:text-4xl text-black inline-block">
                    ${property.price}
                  </p>
                  <span className="text-sm md:text-base lg:text-lg font-light text-grey inline-block ml-1">
                    /Monthly
                  </span>
                </div>
              </div>
            </div>

            {/* Divider */}
            {index !== properties.slice(0, 3).length - 1 && (
              <div className="w-full border-t border-black my-8"></div>
            )}
          </React.Fragment>
        ))}
        {/* Button */}
        <div className="flex justify-center items-center mt-12">
          <Button
            text="Explore All Properties"
            variant="outlineOrange"
            className="flex items-center w-48 md:w-60 group"
          >
            <RightArrow className="w-4 h-4 ml-2 transition-colors duration-500 group-hover:fill-white group-hover:text-white text-secondary" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedListings;
