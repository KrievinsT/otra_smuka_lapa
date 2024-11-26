import React from "react";
import OfficeImage1 from "../Images/Offices1.webp"; // Replace with actual image paths
import OfficeImage2 from "../Images/Offices2.webp"; // Replace with actual image paths
import OfficeImage3 from "../Images/Offices3.webp"; // Replace with actual image paths

function AllOffices() {
  return (
    <div className="w-full py-16 bg-white font-urbanist">
      <div className="max-w-7.5xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <h2 className="text-7xl font-semibold text-center mb-12 text-primary">
          Our All Offices
        </h2>

        {/* Offices Listing */}
        <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {/* California Office */}
          <div className="w-full max-w-[400px] flex flex-col items-start text-center">
            <img
              src={OfficeImage1}
              alt="California Office"
              className="w-full h-[300px] object-cover rounded-lg mb-6"
            />
            <h3 className="text-2xl font-semibold text-primary mb-4">
              California
            </h3>
            <div className="flex w-full text-left gap-8">
              <div className="flex-1 text-base text-gray-600 space-y-2">
                <p>123 Main Street, Apt</p>
                <p>401 Los Angeles, CA</p>
                <p>90001 United States</p>
              </div>
              <div className="flex-1 text-base text-gray-600 space-y-2">
                <p>+44 (0)20 7608 7900</p>
                <p>info@wilkinsoncyre.com</p>
              </div>
            </div>
          </div>

          {/* New York Office */}
          <div className="w-full max-w-[400px] flex flex-col items-start text-center">
            <img
              src={OfficeImage2}
              alt="New York Office"
              className="w-full h-[300px] object-cover rounded-lg mb-6"
            />
            <h3 className="text-2xl font-semibold text-primary mb-4">
              New York
            </h3>
            <div className="flex w-full text-left gap-8">
              <div className="flex-1 text-base text-gray-600 space-y-2">
                <p>55 Broadway, Suite</p>
                <p>302 New York, NY</p>
                <p>10006 United States</p>
              </div>
              <div className="flex-1 text-base text-gray-600 space-y-2">
                <p>+44 (0)20 7608 7921</p>
                <p>info@wilkinsoncyre.com</p>
              </div>
            </div>
          </div>

          {/* Washington DC Office */}
          <div className="w-full max-w-[400px] flex flex-col items-start text-center">
            <img
              src={OfficeImage3}
              alt="Washington DC Office"
              className="w-full h-[300px] object-cover rounded-lg mb-6"
            />
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Washington DC
            </h3>
            <div className="flex w-full text-left gap-8">
              <div className="flex-1 text-base text-gray-600 space-y-2">
                <p>789 Elm Street, Unit</p>
                <p>201 Washington, DC</p>
                <p>20001 United States</p>
              </div>
              <div className="flex-1 text-base text-gray-600 space-y-2">
                <p>+44 (0)20 7608 7922</p>
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
