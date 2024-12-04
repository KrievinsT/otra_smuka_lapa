import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import PropertyCard from "../components/PropertyCard";
import properties from "../data/PropertiesData";
import Button from "../components/Button";

function Properties() {
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 6;

  // Calculate the number of pages
  const totalPages = Math.ceil(properties.length / propertiesPerPage);

  // Get current properties to display
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = properties.slice(indexOfFirstProperty, indexOfLastProperty);

  // Pagination handlers
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="w-full font-urbanist">
      {/* Top Section with Green Background */}
      <div className="bg-primary text-white w-full px-4 pt-16 pb-12 sm:px-8 relative flex justify-center">
        <div className="max-w-7xl w-full">
          {/* Breadcrumb Navigation */}
          <div className="text-sm mb-4">
            <span className="font-thin">Home / Properties</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium mb-12">Properties</h1>
        </div>
      </div>

      {/* Search Bar Section */}
      <div className="relative w-full bg-white py-8 bg-[linear-gradient(to_bottom,_#09261D_50%,_#ffffff_50%)]">
        <div className="max-w-7.5xl mx-auto px-4 sm:px-6">
          <div className="w-full flex items-center justify-center">
            <SearchBar />
          </div>
        </div>
      </div>

      {/* Bottom Section with White Background */}
      <div className="bg-white pt-12 sm:px-8 pb-16">
        <div className="max-w-7.5xl mx-auto sm:px-6">
          {/* Properties Listing */}
          <div className="grid gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center w-full mx-auto">
            {currentProperties.map((property) => (
              <PropertyCard
                key={property.id}
                id={property.id}
                image={property.image}
                name={property.name}
                price={property.price}
                address={property.address}
                totalLandArea={property.totalLandArea}
              />
            ))}
          </div>

          {/* Pagination Buttons */}
          <div className="flex justify-center items-center mt-12 gap-4">
            {currentPage > 1 && (
              <Button
                variant="outlineOrange"
                layout="pagination"
                onClick={handlePreviousPage}
                className="group flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 28 28"
                  width="24"
                  height="24"
                  className="w-5 h-5 text-secondary transition-colors duration-300 group-hover:text-white"
                >
                  <path
                    d="M15.5 4L6 13.5 15.5 23"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
                <span className="ml-2">Previous</span>
              </Button>
            )}
            {currentPage < totalPages && (
              <Button
                variant="outlineOrange"
                layout="pagination"
                onClick={handleNextPage}
                className="group flex items-center"
              >
                <span className="mr-2">Next</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 28 28"
                  width="24"
                  height="24"
                  className="w-5 h-5 text-secondary transition-colors duration-300 group-hover:text-white"
                >
                  <path
                    d="M12.5 4L22 13.5 12.5 23"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Properties;
