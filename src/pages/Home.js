import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import { ReactComponent as RightArrow } from "../Images/Rightarrow.svg";
import SectionImage from "../Images/home-hero.avif"; // Import Section Image
import PlayButton from "../Images/play-button.svg"; // Import the play button icon
import VideoHero from "../Videos/video-hero-transcode.mp4"; // Import the video
import PropertyCard from "../components/PropertyCard"; // Import PropertyCard component
import properties from "../data/PropertiesData"; // Import properties data
import Button from "../components/Button"; // Import reusable Button component

function Home() {
  return (
    <>
      <section className="bg-primary text-white w-full pb-12 lg:pb-0">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 md:px-8 lg:px-12">
          <div className="w-full lg:w-7/12 flex flex-col items-start space-y-8 lg:text-left">
            <h2 className="hidden lg:block font-urbanist text-7xl font-medium">
              Find the right and best home for your family
            </h2>
            <h2 className="font-urbanist text-3xl font-normal lg:hidden">
              Find the right and best home for your family
            </h2>
            {/* Reusable Button Component for Start Exploring */}
            <Button
              text="Start Exploring"
              variant="outlineOrange"
              className="mt-4 flex items-center"
            >
              <RightArrow className="w-4 h-4 ml-2 transition-colors duration-0 ease-in-out" />
            </Button>
          </div>
          {/* Image Section with Video Overlay */}
          <div className="relative flex-shrink-0 mb-8 lg:mb-0 max-w-[500px]">
            <img
              src={SectionImage}
              alt="Real Estate Property"
              className="rounded-lg shadow-none object-cover w-full max-w-[500px]" // Adjusted max-width to match other sections
            />
            {/* Video overlay positioned on the bottom-left of the image */}
            <div className="absolute bottom-2 right-[26.5rem] w-[150px] h-[250px] overflow-hidden rounded-lg shadow-lg group">
              <video
                className="w-full h-full object-cover"
                src={VideoHero}
                autoPlay
                loop
                muted
              />
              {/* Play button with hover-up effect */}
              <div className="absolute inset-0 flex items-center justify-center transition-transform transition-opacity duration-500 ease-in-out transform translate-y-1/8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                <img src={PlayButton} alt="Play Button" className="w-12 h-12" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Search Bar Section */}
      <div className="relative w-full bg-white py-8 bg-[linear-gradient(to_bottom,_#09261D_50%,_#ffffff_50%)]">
        <div className="max-w-7.5xl mx-auto px-4 sm:px-6">
          <div className="w-full flex items-center justify-center">
            <SearchBar />
          </div>
        </div>
      </div>
      {/* New Listings Section */}
      <section className="max-w-7xl mx-auto mt-16 px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-urbanist text-4xl font-semibold text-primary">
            New Listings
          </h2>
          {/* Reusable Button Component for Explore All */}
          <Button
            text="Explore All"
            variant="outlineOrange"
            className="flex items-center"
          >
            <RightArrow className="w-4 h-4 ml-2" />
          </Button>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Using PropertyCard for each listing from the properties data */}
          {properties.slice(0, 6).map((property) => (
            <PropertyCard
              key={property.id}
              image={property.image}
              name={property.name}
              price={property.price}
              address={property.address}
              totalLandArea={property.totalLandArea}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
