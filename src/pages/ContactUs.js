import React from "react";
import Button from "../components/Button"; // Importing your reusable Button component

function ContactUs() {
  return (
    <div className="w-full bg-white font-urbanist">
      {/* Top Section with Green Background */}
      <div className="bg-primary text-white w-full px-4 pt-8 pb-6 sm:px-6 flex justify-center">
        <div className="max-w-7xl w-full">
          {/* Breadcrumb Navigation */}
          <div className="text-sm mb-2">
            <span className="font-semibold">Home / Contact Us</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Contact Us</h1>
        </div>
      </div>

      {/* Contact Section */}
      <div className="flex justify-center items-start w-full py-8 bg-white">
        <div className="max-w-7.5xl w-full flex flex-col md:flex-row gap-8 px-4 sm:px-6 lg:px-8">
          
          {/* Left Column: Contact Title */}
          <div className="w-full md:w-1/4">
            <h2 className="text-base font-medium text-primary mb-2">Contact</h2>
          </div>

          {/* Right Column: Contact Form */}
          <div className="w-full md:w-3/4">
            {/* Contact Message */}
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 leading-tight">
              Question not answered yet? We are here to help!
            </h2>

            {/* Contact Form */}
            <form className="space-y-4">
              <div className="w-full">
                <label htmlFor="fullName" className="text-sm text-gray-600 mb-1 block">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  className="w-full border-b border-black text-base py-1 outline-none focus:border-secondary"
                />
              </div>
              <div className="w-full">
                <label htmlFor="email" className="text-sm text-gray-600 mb-1 block">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full border-b border-black text-base py-1 outline-none focus:border-secondary"
                />
              </div>
              <div className="w-full">
                <label htmlFor="message" className="text-sm text-gray-600 mb-1 block">Message</label>
                <textarea
                  name="message"
                  placeholder="Message"
                  className="w-full border-b border-black text-base py-1 outline-none focus:border-secondary"
                  rows="4"
                ></textarea>
              </div>

              {/* Reusable Button Component */}
              <Button
                text="Send Message"
                variant="outlineOrange"
                className="mt-4"
                onClick={() => {
                  // Add onClick handler here, for example to handle form submission
                }}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
