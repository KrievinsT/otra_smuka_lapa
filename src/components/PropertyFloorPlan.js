import React from "react";
import { ReactComponent as RightArrow } from "../Images/Rightarrow.svg";

function PropertyFloorPlan() {
  return (
    <div className="bg-primary text-white py-16 px-6 lg:px-16 xl:px-28">
      {/* Title and Description Section */}
      <div className="text-left md:text-center max-w-4xl mx-auto mb-12">
        <h2 className="font-urbanist text-3xl md:text-5xl lg:text-6xl font-bold leading-snug ">
          Property Floor Plan
        </h2>
        <p className="font-urbanist text-base md:text-lg lg:text-xl text-gray-300 mt-4 leading-relaxed pt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
          ut sem vitae risus tristique posuere.
        </p>
        <div className="mt-6 flex md:justify-center py-5 ">
          <button className="flex items-center justify-center px-6 py-3 font-urbanist text-lg font-medium text-secondary border border-secondary rounded-full hover:bg-secondary hover:text-white transition duration-300">
            Download Plan
            <RightArrow className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>

      {/* Blueprint Image Section */}
      <div className="flex justify-center mt-12">
        <div className="relative w-full max-w-6xl border border-gray-600 rounded-lg overflow-hidden">
          <img
            src="/Images/maps.avif"
            alt="Property Floor Plan"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default PropertyFloorPlan;
