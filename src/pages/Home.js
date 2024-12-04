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
    {/* Text Section */}
    <div className="w-full lg:w-7/12 flex flex-col items-start space-y-8 lg:text-left">
      <h2 className="hidden lg:block font-urbanist lg:text-6xl xl:text-7xl font-medium">
        Find the right and best home for your family
      </h2>
      <h2 className="font-urbanist text-4xl md:text-6xl font-normal lg:hidden">
        Find the right and best home for your family
      </h2>
      <Button
        text="Start Exploring"
        variant="default"
        className="mt-4 flex items-center"
      >
        <RightArrow className="w-4 h-4 ml-2 transition-colors duration-0 ease-in-out" />
      </Button>
    </div>

    {/* Image Section with Video Overlay */}
    <div className="relative flex-shrink-0 mt-8 mb-8 lg:mb-0 max-w-[500px]">
      <div className="rounded-lg overflow-hidden relative aspect-w-4 aspect-h-3">
        <img
          src={SectionImage}
          alt="Real Estate Property"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Video Overlay Positioned Over the Border */}
      <div className="absolute bottom-[25px] sm:bottom-[50px] lg:bottom-[50px] left-[-20px] sm:left-[-45px] lg:left-[-65px] w-[100px] h-[140px] sm:w-[160px] sm:h-[220px] lg:w-[180px] lg:h-[210px] overflow-visible group">
        <video
          className="w-full h-full object-cover rounded-lg"
          src={VideoHero}
          autoPlay
          loop
          muted
        />
        {/* Play button with hover-up and hover-back-down effect */}
        <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
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
    {/* Hide Button for Mobile */}
    <Button
      text="Explore All"
      variant="outlineOrange"
      className="hidden md:flex items-center"
    >
      <RightArrow className="w-4 h-4 ml-2" />
    </Button>
  </div>

  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    {/* Using PropertyCard for each listing from the properties data */}
    {properties.slice(0, 3).map((property) => (
      <PropertyCard
        key={property.id}
        id={property.id}
        image={property.image}
        name={property.name}
        price={property.price}
        address={property.address}
        totalLandArea={property.totalLandArea}
      />
    ))}
  </div>

  {/* Show Button for Mobile */}
  <div className="flex justify-center mt-8 md:hidden">
    <Button
      text="Explore All"
      variant="outlineOrange"
      className="flex items-center"
    >
      <RightArrow className="w-4 h-4 ml-2" />
    </Button>
  </div>
</section>

<section className="w-full bg-primary text-white pt-20 pb-40 px-8 md:px-12 lg:px-16">
  <div className="max-w-7.5xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0">
    {/* Image Section */}
    <div className="w-full lg:w-1/2 flex justify-center relative order-2 lg:order-1 pt-8">
      <div className="relative w-[350px] max-w-full lg:w-[400px]">
        <img
          src={AboutImageMain}
          alt="Team"
          className="w-full h-auto object-cover rounded-lg"
        />
        <div className="absolute bottom-[-20px] right-[-20px] w-[120px] h-[120px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px] rounded-full overflow-hidden">
          <img
            src={AboutImageHouse}
            alt="House"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>

    {/* Text Section */}
    <div className="w-full lg:w-1/2 flex flex-col space-y-6 text-left order-1 lg:order-2">
      <h3 className="font-urbanist text-lg md:text-xl text-white uppercase tracking-wide">
        About Us
      </h3>
      <h2 className="font-urbanist text-2xl md:text-5xl lg:text-6xl font-bold">
        About our <br className="lg:hidden" /> Real Estate Firm
      </h2>
      <p className="font-urbanist text-base md:text-lg lg:text-xl leading-tight">
        Our mission is simple: to provide unparalleled expertise, guidance, and
        support to our clients across their real estate journey.
      </p>
      <div className="grid grid-cols-1 gap-6">
        {/* Affordable Price */}
        <div className="flex items-start space-x-4">
          <img
            src={Dollar}
            alt="Affordable Price"
            className="w-8 h-8 md:w-10 md:h-10 object-contain"
          />
          <div>
            <h4 className="font-bold text-lg">Affordable Price</h4>
            <p className="text-sm text-gray-300">
              Offering competitive rates that make quality accessible to all.
            </p>
          </div>
        </div>
        {/* Clear Legality */}
        <div className="flex items-start space-x-4">
          <img
            src={Like}
            alt="Clear Legality"
            className="w-8 h-8 md:w-10 md:h-10 object-contain"
          />
          <div>
            <h4 className="font-bold text-lg">Clear Legality</h4>
            <p className="text-sm text-gray-300">
              Ensuring transparent and compliant legal processes.
            </p>
          </div>
        </div>
        {/* Experienced Agents */}
        <div className="flex items-start space-x-4">
          <img
            src={People}
            alt="Experienced Agents"
            className="w-8 h-8 md:w-10 md:h-10 object-contain"
          />
          <div>
            <h4 className="font-bold text-lg">Experienced Agents</h4>
            <p className="text-sm text-gray-300">
              Guided by professionals with expertise in the industry.
            </p>
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
