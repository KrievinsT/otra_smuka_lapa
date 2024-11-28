import React, { useState } from 'react';
import Button from './Button';
// Import testimonial images
import testimonyImage1 from '../Images/testimony-image1.avif';
import testimonyImage2 from '../Images/testimony-image2.avif';
import testimonyImage3 from '../Images/testimony-image3.avif';

const testimonialsData = [
  {
    text: "Homeifye made my home buying experience incredibly smooth and stress-free. From browsing listings to closing the deal, the platform was easy to navigate and filled with useful information. The personalized recommendations were spot on, helping me find the perfect home much faster than I expected.",
    author: 'John Smith',
    role: 'CEO, Tech Innovations Inc.',
    image: testimonyImage1,
  },
  {
    text: "As a first-time homebuyer, I had no idea where to start, but Homeifye simplified the entire process. The platform's search tools made it easy to find homes that fit my criteria, and their virtual tours were a game-changer for narrowing down my choices. Their team was always available to answer questions, and I felt confident and informed every step of the way. Thanks to Homeifye, I found my dream home without the stress!",
    author: 'Walter Starnes',
    role: 'CEO, Tech Innovations Inc.',
    image: testimonyImage3,
  },
  {
    text: "Homeifye is hands down the best real estate platform I've used. The attention to detail and the level of service are unmatched. Their agents were always available, and the website provided everything I needed to list my property confidently. The comprehensive market analysis helped me set the perfect price, and my home sold faster than I expected. I couldn't be happier with the entire experience!",
    author: 'James Raulston',
    role: 'CEO, Life Innovations Inc.',
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
    <section className="bg-secondary text-white px-8 md:px-16 lg:px-20 flex flex-col items-center">
      <h2 className="font-urbanist text-7xl font-medium mb-12 w-full max-w-7xl mx-auto text-left">
        Testimonials
      </h2>
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-start justify-between space-y-10 md:space-y-0">
        
        {/* Testimonial Text Section */}
        <div className="md:w-8/12 lg:w-3/5 space-y-6 text-left order-1 md:order-2">
          <p className="font-urbanist font-normal text-3xl leading-tight">{text}</p>
          <div>
            <p className="font-urbanist font-normal text-2xl">{author}</p>
            <p className="font-urbanist font-light">{role}</p>
          </div>
        </div>

        {/* Testimonial Image and Navigation Section */}
        <div className="relative md:w-2/3 lg:w-2/6 flex-shrink-0 order-3 flex items-center justify-center">
          {/* Testimonial Image Section */}
          <div className="relative w-auto h-auto overflow-visible">
            <img
              src={image}
              alt={author}
              className="object-cover w-full h-full rounded-lg"
            />

            {/* Navigation Buttons Positioned Beside the Image */}
            <div className="absolute top-80 left-[-7rem] md:left-[-12rem] transform translate-y-1/2 flex items-center space-x-6 z-10">
              {/* Previous Testimonial Button */}
              <Button
                variant="default"
                onClick={prevTestimonial}
                className="p-4 w-12 h-12 rounded-full transition-transform duration-300 transform hover:text-secondary group flex items-center justify-center"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-colors duration-300 group-hover:text-secondary"
                >
                  {/* Left Arrow SVG */}
                  <path
                    d="M15 12H6"
                    stroke="currentColor"
                    strokeLinecap="round"
                  />
                  <path
                    d="M11 7L6 12L11 17"
                    stroke="currentColor"
                    strokeLinecap="round"
                  />
                </svg>
              </Button>

              <Button
                variant="default"
                onClick={nextTestimonial}
                className="p-4 w-12 h-12 rounded-full transition-transform duration-300 transform hover:text-secondary group flex items-center justify-center"
              >
                <svg
                  width="60"
                  height="80"
                  viewBox="0 0 34 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-colors duration-300 group-hover:text-secondary"
                  style={{ display: 'block', margin: 'auto' }} // Align the SVG to center
                >
                  {/* Right Arrow SVG */}
                  <path
                    d="M9 12H18"
                    stroke="currentColor"
                    strokeLinecap="round"
                  />
                  <path
                    d="M13 7L18 12L13 17"
                    stroke="currentColor"
                    strokeLinecap="round"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
