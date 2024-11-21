import React from "react";
import Button from "../components/Button";
function PropertiesDetails() {
  return (
    <section className="container mx-auto text-center py-20 px-4">
      <h2 className="text-4xl font-bold text-gray-800">Welcome to My Website</h2>
      <p className="text-gray-600 mt-4">
        This is the PropertiesDetails page. Navigate to different pages using the menu.
      </p>
      <Button text="Contact us" variant="contact" />
    </section>
  );
}

export default PropertiesDetails;
