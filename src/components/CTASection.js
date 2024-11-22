import React from "react";
import { ReactComponent as RightArrow } from "../Images/Rightarrow.svg";
import Button from "../components/Button";
import SectionImage from "../Images/section-cta-image.png";

function CTASection() {
  return (
    <section className="bg-primary text-white w-full bg-primary text-white w-full pb-12 lg:pb-0">
      <div className="max-w-[80%] mx-auto flex flex-col lg:flex-row items-center justify-between">
        
        {/* Image Section */}
        <div>
        <img
            src={SectionImage}
            alt="Real Estate Property"
            className="rounded-lg shadow-none object-cover w-full max-w-[550px]"
        />

        </div>

        {/* Content Section */}
        <div className="w-full lg:w-5/12 flex flex-col items-start space-y-12 lg:text-left">
          <h2 className="hidden lg:block font-urbanist text-7xl font-semibold">
            Are you looking to buy or rent a property?
          </h2>
          <h2 className="font-urbanist text-3xl font-semibold lg:hidden">
            Are you looking to buy or rent a property?
          </h2>
          <button
            className="font-urbanist text-lg px-6 py-3 mt-4 rounded-full border border-white text-white hover:bg-white hover:text-primary transition-all duration-500 ease-in-out flex items-center">
            Get In Touch
            <RightArrow className="w-4 h-4 ml-2 transition-colors duration-0 ease-in-out" />
           </button>

        </div>
      </div>
    </section>
  );
}

export default CTASection;
