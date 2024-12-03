import React from "react";
import { ReactComponent as LuxuriousVilla } from "../Images/property-features-1.svg";
import { ReactComponent as TopSecurity } from "../Images/Innovation.svg";
import { ReactComponent as FireAlarm } from "../Images/like-tag.svg";
import { ReactComponent as WindVentilation } from "../Images/wind.svg";
import { ReactComponent as ParkingFacility } from "../Images/car.svg";
import { ReactComponent as BackyardSpace } from "../Images/messages.svg";

function LuxuriousFeatures() {
  const features = [
    {
      icon: <LuxuriousVilla className="w-18 h-18 text-secondary" />,
      title: "Luxurious Villa",
      description:
        "Exquisite villa with top-tier amenities and breathtaking views.",
    },
    {
      icon: <TopSecurity className="w-18 h-18 text-secondary" />,
      title: "Top Security",
      description: "Ample parking space for residents and visitors alike.",
    },
    {
      icon: <FireAlarm className="w-18 h-18 text-secondary" />,
      title: "Fire Alarm",
      description: "State-of-the-art fire alarm system for enhanced safety.",
    },
    {
      icon: <WindVentilation className="w-18 h-18 text-secondary" />,
      title: "Wind Ventilation",
      description:
        "Natural wind ventilation for a fresh living environment.",
    },
    {
      icon: <ParkingFacility className="w-18 h-18 text-secondary" />,
      title: "Parking Facility",
      description: "Secure, ample parking for residents and guests.",
    },
    {
      icon: <BackyardSpace className="w-18 h-18 text-secondary" />,
      title: "Backyard Space",
      description:
        "Spacious backyard for leisure and outdoor activities.",
    },
  ];

  return (
    <div className="bg-primary text-white py-24 px-4 sm:px-2 md:px-4 lg:px-12 xl:px-40">
      {/* Title Section */}
      <h2 className="font-urbanist text-left md:text-center text-3xl md:text-5xl lg:text-6xl font-bold leading-snug mb-16">
        Luxurious Features <br className="hidden md:block" /> & Amenities
      </h2>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start text-left space-x-6"
          >
            {/* Icon */}
            <div className="flex-shrink-0">{feature.icon}</div>

            {/* Text */}
            <div>
              <h3 className="font-urbanist text-2xl font-semibold mb-2 text-white">
                {feature.title}
              </h3>
              <p className="font-urbanist text-base text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LuxuriousFeatures;
