import React from "react";
import PropertyCard from "../components/PropertyCard";

function SimilarListings() {
  // Sample data for similar properties
  const properties = [
    {
      id: 1,
      image: "/Images/property1.avif",
      name: "Pine Estates",
      price: "180000",
      address: "222 Spruce Street, Springfield",
      totalLandArea: "1000 Sq.Ft",
    },
    {
      id: 2,
      image: "/Images/property2.avif",
      name: "Maple Grove",
      price: "400000",
      address: "333 Cherry Lane, Springfield",
      totalLandArea: "2200 Sq.Ft",
    },
    {
      id: 3,
      image: "/Images/property3.avif",
      name: "Willow Heights",
      price: "290000",
      address: "444 Ash Boulevard, Springfield",
      totalLandArea: "1600 Sq.Ft",
    },
  ];

  return (
    <div className="bg-white py-16 px-6 lg:px-16 xl:px-28">
      {/* Section Title */}
      <h2 className="font-urbanist text-center text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-12">
        Similar Listings
      </h2>

      {/* Listings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            image={property.image}
            name={property.name}
            price={property.price}
            address={property.address}
            totalLandArea={property.totalLandArea}
          />
        ))}
      </div>
    </div>
  );
}

export default SimilarListings;
