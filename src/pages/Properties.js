// Properties.js
import React from "react";
import SearchBar from "../components/SearchBar";
import PropertyCard from "../components/PropertyCard";

// Sample property data (in a real use-case, you might fetch this from an API)
const properties = [
  {
    id: 1,
    image: "https://via.placeholder.com/400", // Replace with actual image URLs
    name: "Pine Estates",
    price: "180000",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/400",
    name: "Maple Grove",
    price: "400000",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/400",
    name: "Willow Heights",
    price: "290000",
  },
];

function Properties() {
  return (
    <div className="w-full min-h-screen">
      {/* Top Section with Green Background */}
      <div className="bg-primary text-white w-full px-8 pt-16 pb-40 relative">
        {/* Breadcrumb Navigation */}
        <div className="text-sm mb-4">
          <span className="opacity-70">Home</span> / <span className="font-semibold">Properties</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold mb-16">Properties</h1>

        {/* Search Bar Section - positioned half on green, half on white */}
        <div className="absolute left-[2%] bottom-[-80px] w-[90%] max-w-4xl">
          <SearchBar />
        </div>
      </div>

      {/* Bottom Section with White Background */}
      <div className="bg-white pt-48 px-8 pb-16">
        <div className="container mx-auto">
          {/* Properties Listing */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {properties.map((property) => (
              <PropertyCard
                key={property.id}
                image={property.image}
                name={property.name}
                price={property.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Properties;
