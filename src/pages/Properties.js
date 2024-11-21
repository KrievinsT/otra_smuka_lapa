import React from "react";
import Button from "../components/Button";
function Properties() {
  return (
    <>
      <section className="container mx-auto text-center py-20 px-4">
        <h2 className="text-4xl font-bold text-gray-800">Welcome to My Website</h2>
        <p className="text-gray-600 mt-4"></p>
      </section>

      <div className="bg-primary min-h-screen flex flex-col items-center justify-center gap-4 p-8">
        {/* Transparent Button with Hover */}
        <Button text="Start exploring" variant="default" />

        {/* Orange Outline Button */}
        <Button text="Explore All" variant="outlineOrange" />

        {/* Solid Orange Button */}
        <Button text="Explore All" variant="solidOrange" />

        {/* Dark Button for Contact Us */}
        <Button text="Contact us" variant="contact" />
    </div>
  </>
  );
}

export default Properties;
