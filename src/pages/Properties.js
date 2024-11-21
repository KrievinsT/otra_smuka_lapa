import React from "react";
import Button from "../components/Button";
function Properties() {
  return (
    <>
      <div className="bg-primary min-h-screen flex flex-col items-center justify-center gap-4 p-8">
        {/* Transparent Button with Hover */}
        <Button text="Start exploring" variant="default" />

        {/* Orange Outline Button */}
        <Button text="Explore All" variant="outlineOrange" />

        {/* Solid Orange Button */}
        <Button text="Explore All" variant="solidOrange" />
    </div>
  </>
  );
}

export default Properties;
