import React from "react";
import { ReactComponent as RightArrow } from "../Images/Rightarrow.svg";
import SectionImage from "../Images/section-cta-image.png";

function CTASection() {
  return (
    <section className="bg-primary text-white w-full pb-12 lg:pb-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-12">
        
        {/* Image Section */}
        <div className="flex-shrink-0 mb-8 lg:mb-0">
          <img
            src={SectionImage}
            alt="Real Estate Property"
            className="rounded-lg shadow-none object-cover w-full max-w-[450px]" // Adjusted max-width to match other sections
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-5/12 flex flex-col items-start space-y-8 lg:text-left">
          <h2 className="hidden lg:block font-urbanist text-6xl font-semibold">
            Are you looking to buy or rent a property?
          </h2>
          <h2 className="font-urbanist text-3xl font-semibold lg:hidden">
            Are you looking to buy or rent a property?
          </h2>
          <button
            className="font-urbanist text-lg px-6 py-3 rounded-full border border-white text-white hover:bg-white hover:text-primary transition-all duration-500 ease-in-out flex items-center">
            Get In Touch
            <RightArrow className="w-4 h-4 ml-2 transition-colors duration-0 ease-in-out" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
