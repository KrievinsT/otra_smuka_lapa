import React from "react"; 
import OfficeImage1 from "../Images/Offices1.webp"; // Replace with actual image paths
import OfficeImage2 from "../Images/Offices2.webp"; // Replace with actual image paths
import OfficeImage3 from "../Images/Offices3.webp"; // Replace with actual image paths

function AllOffices() {
  return (
    <div className="w-full py-16 bg-white font-urbanist">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-7xl font-semibold text-primary mb-16 text-left md:text-left lg:text-center w-full">
          Our All Offices
        </h2>

        {/* Offices Listing */}
        <div className="grid gap-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 justify-items-center">
          
          {/* California Office */}
          <div className="w-full max-w-[350px] flex flex-col items-start text-left">
            <img
              src={OfficeImage1}
              alt="California Office"
              className="w-full h-auto object-cover rounded-lg mb-6"
            />
            <h3 className="text-2xl font-semibold text-primary mb-4">
              California
            </h3>
            {/* Layout adjusted for single column at lg, two columns at xl */}
            <div className="w-full flex flex-col text-gray-600 text-sm lg:space-y-1 xl:flex-row xl:items-start xl:gap-6">
              {/* Address Section */}
              <div className="w-full xl:w-1/2">
                <p className="whitespace-normal">
                  123 Main Street, Apt 401 Los Angeles, CA 90001 United States
                </p>
              </div>
              {/* Contact Section */}
              <div className="w-full xl:w-1/2 xl:pl-4 space-y-2">
                <p className="lg:font-semibold xl:font-normal">+44 (0)20 7608 7900</p>
                <p>info@wilkinsoncyre.com</p>
              </div>
            </div>
          </div>

          {/* New York Office */}
          <div className="w-full max-w-[350px] flex flex-col items-start text-left">
            <img
              src={OfficeImage2}
              alt="New York Office"
              className="w-full h-auto object-cover rounded-lg mb-6"
            />
            <h3 className="text-2xl font-semibold text-primary mb-4">
              New York
            </h3>
            {/* Layout adjusted for single column at lg, two columns at xl */}
            <div className="w-full flex flex-col text-gray-600 text-sm lg:space-y-1 xl:flex-row xl:items-start xl:gap-6">
              {/* Address Section */}
              <div className="w-full xl:w-1/2">
                <p className="whitespace-normal">
                  55 Broadway, Suite 302 New York, NY 10006 United States
                </p>
              </div>
              {/* Contact Section */}
              <div className="w-full xl:w-1/2 xl:pl-4 space-y-2">
                <p className="lg:font-semibold xl:font-normal">+44 (0)20 7608 7921</p>
                <p>info@wilkinsoncyre.com</p>
              </div>
            </div>
          </div>

          {/* Washington DC Office */}
          <div className="w-full max-w-[350px] flex flex-col items-start text-left">
            <img
              src={OfficeImage3}
              alt="Washington DC Office"
              className="w-full h-auto object-cover rounded-lg mb-6"
            />
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Washington DC
            </h3>
            {/* Layout adjusted for single column at lg, two columns at xl */}
            <div className="w-full flex flex-col text-gray-600 text-sm lg:space-y-1 xl:flex-row xl:items-start xl:gap-6">
              {/* Address Section */}
              <div className="w-full xl:w-1/2">
                <p className="whitespace-normal">
                  789 Elm Street, Unit 201 Washington, DC 20001 United States
                </p>
              </div>
              {/* Contact Section */}
              <div className="w-full xl:w-1/2 xl:pl-4 space-y-2">
                <p className="lg:font-semibold xl:font-normal">+44 (0)20 7608 7922</p>
                <p>info@wilkinsoncyre.com</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AllOffices;
