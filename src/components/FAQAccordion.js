// components/FAQAccordion.js
import React, { useState } from 'react';

const FAQAccordion = ({ faqItems }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white py-16 px-4 md:px-8 lg:px-12">
      {/* Static Title - Will Not Move */}
      <div className="max-w-7.5xl mx-auto mb-16 w-3/4">
        <h2 className="font-urbanist text-5xl lg:text-7xl font-medium text-primary text-center">
          Frequently Asked Questions
        </h2>
      </div>

      {/* FAQ List Container */}
      <div className="max-w-7.5xl mx-auto">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b border-gray-300 py-6">
            {/* Question Button */}
            <button
              className="w-full flex items-center justify-between py-4 px-6 text-left font-urbanist font-medium text-3xl focus:outline-none"
              onClick={() => handleToggle(index)}
            >
              {item.question}

              {/* Plus/Minus Icon */}
              <div className="relative w-6 h-6 flex items-center justify-center">
                {/* Horizontal Line */}
                <div
                  className={`absolute w-4 h-[2px] bg-secondary transition-transform duration-300 ease-in-out ${
                    openIndex === index ? 'rotate-0' : 'rotate-0'
                  }`}
                ></div>
                {/* Vertical Line */}
                <div
                  className={`absolute w-[2px] h-4 bg-secondary transition-transform duration-300 ease-in-out ${
                    openIndex === index ? '-rotate-90' : 'rotate-0'
                  }`}
                ></div>
              </div>
            </button>

            {/* Answer Section with Smooth Slide Down and Back Up Animation */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
              }`}
              style={{
                transitionProperty: 'max-height, opacity',
                transitionTimingFunction: 'ease-in-out',
                transitionDuration: '500ms',
              }}
            >
              <div className="font-urbanist px-6 pb-8 text-medium text-lg text-black">
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
