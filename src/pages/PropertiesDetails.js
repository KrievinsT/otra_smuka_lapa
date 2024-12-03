import React from "react";
import PropertyDetHeading from "../components/PropertyDetHeading";
import properties from "../data/PropertiesData";
import LuxuriousFeatures from "../components/LuxuriousFeatures";
import PropertyFloorPlan from "../components/PropertyFloorPlan";
import SimilarListings from "../components/SimilarListings";
import PropertyDetailsSection from "../components/PropertyDetailsSections";

function PropertyDetails() {
  const selectedProperty = properties.find((property) => property.id === 1); // Display first property for now

  return (
    <div>
      <section className="bg-white">
        <PropertyDetHeading property={selectedProperty} />
      </section>
      <LuxuriousFeatures />
      <section className="bg-white">
        <PropertyDetailsSection property={selectedProperty} />
      </section>
      <PropertyFloorPlan />
      <SimilarListings />
    </div>
  );
}

export default PropertyDetails;
