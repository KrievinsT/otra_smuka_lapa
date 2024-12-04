import React, { useState } from "react";
import Button from "./Button";
// Import testimonial images
import testimonyImage1 from "../Images/testimony-image1.avif";
import testimonyImage2 from "../Images/testimony-image2.avif";
import testimonyImage3 from "../Images/testimony-image3.avif";

const testimonialsData = [
  {
    text: "Homeifye made my home buying experience incredibly smooth and stress-free. From browsing listings to closing the deal, the platform was easy to navigate and filled with useful information. The personalized recommendations were spot on, helping me find the perfect home much faster than I expected.",
    author: "John Smith",
    role: "CEO, Tech Innovations Inc.",
    image: testimonyImage1,
  },
  {
    text: "As a first-time homebuyer, I had no idea where to start, but Homeifye simplified the entire process. The platform's search tools made it easy to find homes that fit my criteria, and their virtual tours were a game-changer for narrowing down my choices. Their team was always available to answer questions, and I felt confident and informed every step of the way. Thanks to Homeifye, I found my dream home without the stress!",
    author: "Walter Starnes",
    role: "CEO, Tech Innovations Inc.",
    image: testimonyImage3,
  },
  {
    text: "Homeifye is hands down the best real estate platform I've used. The attention to detail and the level of service are unmatched. Their agents were always available, and the website provided everything I needed to list my property confidently. The comprehensive market analysis helped me set the perfect price, and my home sold faster than I expected. I couldn't be happier with the entire experience!",
    author: "James Raulston",
    role: "CEO, Life Innovations Inc.",
    image: testimonyImage2,
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next testimonial
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous testimonial
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const { text, author, role, image } = testimonialsData[currentIndex];

  return (
    <section className="bg-secondary text-white py-12 flex flex-col items-center md:justify-left overflow-hidden w-full">
      <h2 className="font-urbanist text-4xl md:text-5xl lg:text-6xl font-medium mb-8 md:mb-12 sm: w-full max-w-7xl mx-auto text-center md:text-left">
        Testimonials
      </h2>
      <div className="max-w-7.5xl w-full flex flex-col md:flex-col lg:flex-row lg:items-start justify-between space-y-8 md:space-y-12 lg:space-y-0 lg:space-x-8">
        {/* Testimonial Text Section */}
        <div className="w-full md:w-4/5 lg:w-1/2 text-left space-y-4 md:space-y-6">
          <p className="font-urbanist font-normal text-lg md:text-2xl lg:text-3xl leading-relaxed md:leading-tight">
            {text}
          </p>
          <div>
            <p className="font-urbanist font-semibold text-lg md:text-2xl">
              {author}
            </p>
            <p className="font-urbanist font-light text-sm md:text-base lg:text-lg">
              {role}
            </p>
          </div>
        </div>

        {/* Testimonial Image and Navigation Section */}
        <div className="w-full md:w-3/4 lg:w-1/6 flex flex-col lg:items-center xl:items-end lg:items-end">
          {/* Testimonial Image */}
          <div className="sm:w-[200px] md:w-[300px] lg:w-[500px]">
            <img
              src={image}
              alt={author}
              className="object-cover w-full h-auto"
            />
          </div>
{/* Navigation Buttons */}
<div className="lg:mt-[2rem] xl:mt-[-4rem] xl:mr-[38rem] lg:mr-[18rem] md:mt-[2rem] md:mr-[20rem] mt-[4rem] flex lg:justify-end space-x-6">
  {/* Previous Button (Left Arrow) */}
  <Button
  variant="default"
  onClick={prevTestimonial}
  className="p-3 md:p-4 w-12 h-12 rounded-full group transition-transform duration-300 transform hover:text-secondary flex items-center justify-center"
>
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="transition-colors duration-300 text-white group-hover:text-secondary"
  >
    <path
      d="M12 5L2 10L12 15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      x1="2"
      y1="10"
      x2="17"
      y2="10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
</Button>

  {/* Next Button (Right Arrow) */}
  <Button
    variant="default"
    onClick={nextTestimonial}
    className="p-4 md:p-4 w-12 h-12 rounded-full group transition-transform duration-300 transform hover:text-secondary flex items-center justify-center"
  >
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-colors duration-300 text-white group-hover:text-secondary"
    >
      <path
        d="M7 5L17 10L7 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="2"
        y1="10"
        x2="17"
        y2="10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  </Button>
</div>

        </div>
      </div>
    </section>
  );
}

export default Testimonials;
