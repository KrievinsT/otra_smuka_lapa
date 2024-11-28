// components/FAQAccordion.js
import React, { useState } from 'react';

const FAQAccordion = ({ faqItems }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-7.5xl mx-auto mt-16 px-4 md:px-8 lg:px-12 pb-32">
      <h2 className="font-urbanist text-4xl font-semibold text-primary mb-8">
        Frequently Asked Questions
      </h2>
      <div>
        {faqItems.map((item, index) => (
          <div key={index}>
            <button
              className="w-full flex items-center justify-between py-4 px-6 text-left font-medium text-lg"
              onClick={() => handleToggle(index)}
            >
              {item.question}
              <span className={`transition-transform transform ${openIndex === index ? 'rotate-45 text-secondary' : 'rotate-0 text-secondary'}`}>
                {openIndex === index ? '-' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-base text-gray-600">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
