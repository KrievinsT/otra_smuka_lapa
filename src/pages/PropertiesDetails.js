import React from "react";
import { useParams } from "react-router-dom";
import properties from "../data/PropertiesData";
import PropertyDetHeading from "../components/PropertyDetHeading";
import LuxuriousFeatures from "../components/LuxuriousFeatures";
import PropertyFloorPlan from "../components/PropertyFloorPlan";
import SimilarListings from "../components/SimilarListings";
import PropertyDetailsSection from "../components/PropertyDetailsSections";

function PropertiesDetails() {
  const { id } = useParams(); // Get the property ID from the URL
  const selectedProperty = properties.find(
    (property) => property.id === parseInt(id, 10)
  );

  if (!selectedProperty) {
    return <div>Property not found</div>;
  }

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

export default PropertiesDetails;
