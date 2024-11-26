import React from "react";
import Button from "../components/Button"; // Importing your reusable Button component
import AllOffices from "../components/AllOffices"; // Importing the AllOffices component

function ContactUs() {
  return (
    <div className="w-full bg-white font-urbanist">
      {/* Top Section with Green Background */}
      <div className="bg-primary text-white w-full px-4 pt-40 pb-12 sm:px-8 relative flex justify-center h-96">
        <div className="max-w-7xl w-full">
          {/* Breadcrumb Navigation */}
          <div className="text-sm mb-4">
            <span className="font-thin">Home / Contact Us</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium mb-12">Contact Us</h1>
        </div>
      </div>

      {/* Contact Section */}
      <div className="flex justify-center items-start w-full py-16 pt-32 bg-white">
        <div className="max-w-7.5xl w-full flex flex-col md:flex-row gap-16 px-4 sm:px-8 lg:px-12">
          {/* Left Column: Contact Title */}
          <div className="w-full md:w-1/4">
            <h2 className="text-2xl font-semibold text-grey">Contact</h2>
          </div>

          {/* Right Column: Contact Form */}
          <div className="w-full md:w-2/3">
            {/* Contact Message */}
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Question not answered yet? We are here to help!
            </h2>

            {/* Contact Form */}
            <form className="space-y-6">
              {/* Full Name Input Field */}
              <div className="w-full">
                <label
                  htmlFor="fullName"
                  className="block text-lg text-grey mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  className="block w-full text-lg border-b border-black py-2 outline-none focus:border-secondary transition-colors duration-300"
                />
              </div>

              {/* Email Input Field */}
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block text-lg text-grey mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full text-lg border-b border-black py-2 outline-none focus:border-secondary transition-colors duration-300"
                />
              </div>

              {/* Message Input Field */}
              <div className="w-full">
                <label
                  htmlFor="message"
                  className="block text-lg text-grey mb-1"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="block w-full text-lg border-b border-black py-2 outline-none focus:border-secondary transition-colors duration-300"
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
      <AllOffices />
    </div>
  );
}

export default ContactUs;
