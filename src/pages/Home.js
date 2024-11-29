import React from "react";
import SearchBar from "../components/SearchBar";
import { ReactComponent as RightArrow } from "../Images/Rightarrow.svg";
import SectionImage from "../Images/home-hero.avif";
import PlayButton from "../Images/play-button.svg"; 
import VideoHero from "../Videos/video-hero-transcode.mp4";
import PropertyCard from "../components/PropertyCard";
import properties from "../data/PropertiesData"; 
import Button from "../components/Button";
import AboutImageHouse from "../Images/home-about-image-float.png";
import AboutImageMain from "../Images/home-about-image.avif";
import Dollar from "../Images/dollar-icon.svg";
import Like from "../Images/like-icon.svg";
import People from "../Images/people-icon.svg";
import FeaturedListings from "../components/FeaturedListings";
import Testimonials from "../components/Testimonials";
import FAQAccordion from "../components/FAQAccordion";
import faqData from "../data/FAQdata";

function Home() {
  console.log("Home component has started rendering");
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white w-full pb-12 lg:pb-0">
        <div className="max-w-7.5xl mx-auto flex flex-col lg:flex-row items-center justify-between px-8 md:px-16 lg:px-20">
          <div className="w-full lg:w-7/12 flex flex-col items-start space-y-8 lg:text-left">
            <h2 className="hidden lg:block font-urbanist lg:text-6xl xl:text-7xl font-medium">
              Find the right and best home for your family
            </h2>
            <h2 className="font-urbanist text-4xl md:text-6xl font-normal lg:hidden">
              Find the right and best home for your family
            </h2>
            {/* Reusable Button Component for Start Exploring */}
            <Button
              text="Start Exploring"
              variant="default"
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
      <div className="relative w-full py-8 bg-[linear-gradient(to_bottom,_#09261D_50%,_#ffffff_50%)]">
        <div className="max-w-7.5xl mx-auto px-8 sm:px-16 lg:px-20">
          <div className="w-full flex items-center justify-center">
            <SearchBar />
          </div>
        </div>
      </div>

      {/* New Listings Section */}
      <section className="max-w-full bg-white mx-auto px-4 md:px-8 lg:px-12 pb-32 pt-16">
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
          {properties.slice(0, 3).map((property) => (
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

      {/* About Us Section */}
      <section className="w-full bg-primary text-white pt-32 pb-40 px-8 md:px-16 lg:px-20">
        <div className="max-w-7.5xl mx-auto flex flex-col md:flex-row items-center justify-between relative">
          <div className="relative flex w-full md:w-1/2 justify-start items-start">
            <div className="w-[520px] h-auto">
              <img
                src={AboutImageMain}
                alt="Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-20 right-8 w-[300px] h-[300px] rounded-full overflow-hidden">
              <img
                src={AboutImageHouse}
                alt="House"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-16 md:mt-0 flex flex-col space-y-4 z-10 px-4">
            <h3 className="font-urbanist text-2xl font-normal mb-4">About Us</h3>
            <h4 className="font-urbanist text-7xl font-medium">About our</h4>
            <h4 className="font-urbanist text-7xl font-medium">Real Estate Firm</h4>
            <div className="pb-6">
              <p className="font-normal text-lg mt-4">
                Our mission is simple: to provide unparalleled expertise, guidance,
                and support to our clients across their real estate journey.
              </p>
            </div>
            <div className="mt-8 space-y-6">
              <div className="pb-4">
                <div className="flex items-center space-x-4">
                  <span className="text-green-400 text-2xl w-">
                    <img
                      src={Dollar}
                      alt="House"
                      className="w-[40px] h-[40px] object-cover"
                    />
                  </span>
                  <div>
                    <h4 className="font-normal text-3xl">Affordable Price</h4>
                    <p className="font-base">
                      Offering competitive rates that make quality accessible to all.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pb-4">
                <div className="flex items-center space-x-4">
                  <span className="text-yellow-400 text-2xl">
                    <img
                      src={Like}
                      alt="House"
                      className="w-[40px] h-[40px] object-cover"
                    />
                  </span>
                  <div>
                    <h4 className="font-normal text-3xl">Clear Legality</h4>
                    <p className="font-normal">
                      Ensuring transparent and compliant legal processes.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pb-4">
                <div className="flex items-center space-x-4">
                  <span className="text-blue-400 text-2xl">
                    <img
                      src={People}
                      alt="House"
                      className="w-[40px] h-[40px] object-cover"
                    />
                  </span>
                  <div>
                    <h4 className="font-normal text-3xl">Experienced Agents</h4>
                    <p className="font-normal">
                      Guided by professionals with expertise in the industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-white py-52">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20">
          <FeaturedListings />
        </div>
      </section>
      <section className="bg-secondary w-full overflow-hidden flex w-full py-52">
        <div className="max-w-7.5xl mx-auto px-8 md:px-16 lg:px-20">
          <Testimonials />
        </div>
      </section>
      <section className="bg-white w-full py-52">
        <div className="max-w-7.5xl mx-auto px-8 md:px-16 lg:px-20">
          <FAQAccordion faqItems={faqData} />
        </div>
      </section>
    </>
  );
}

export default Home;
