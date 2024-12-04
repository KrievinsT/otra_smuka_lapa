import React, { useState } from "react";

const FAQAccordion = ({ faqItems }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white py-16 px-4 md:px-6 lg:px-8 overflow-hidden">
      {/* Static Title */}
      <div className="max-w-7xl mx-auto mb-8 md:mb-12 px-4">
        <h2 className="font-urbanist sm:text-left text-2xl md:text-5xl lg:text-6xl font-medium text-primary md:text-center lg:max-w-2xl lg:mx-auto break-words">
          Frequently Asked Questions
        </h2>
      </div>

      {/* FAQ List Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b border-gray-300 py-4 md:py-6">
            {/* Question Button */}
            <button
              className="w-full flex items-center justify-between text-left py-4 text-lg md:text-2xl font-medium font-urbanist"
              onClick={() => handleToggle(index)}
            >
              <span className="w-full">{item.question}</span>

              {/* Plus/Minus Icon */}
              <div className="relative w-6 h-6 flex items-center justify-center">
                {/* Horizontal Line */}
                <div
                  className={`absolute w-4 h-[2px] bg-secondary transition-transform duration-300 ease-in-out ${
                    openIndex === index ? "rotate-0" : "rotate-0"
                  }`}
                ></div>
                {/* Vertical Line */}
                <div
                  className={`absolute w-[2px] h-4 bg-secondary transition-transform duration-300 ease-in-out ${
                    openIndex === index ? "-rotate-90" : "rotate-0"
                  }`}
                ></div>
              </div>
            </button>

            {/* Answer Section */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index
                  ? "max-h-[300px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
              style={{
                transitionProperty: "max-height, opacity",
                transitionTimingFunction: "ease-in-out",
                transitionDuration: "500ms",
              }}
            >
              <div className="font-urbanist px-4 md:px-6 pb-6 md:pb-8 text-sm md:text-lg text-gray-700 leading-relaxed">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
