import React from "react";
import Button from "../components/Button"; // Importing your reusable Button component
import AllOffices from "../components/AllOffices";

function ContactUs() {
  console.log("Home component has started rendering");
  return (
    <div className="w-full bg-white font-urbanist">
      <div className="bg-primary text-white w-full px-4 pt-16 md:pt-24 pb-12 sm:px-6 flex justify-center lg:pb-20 lg:pt-32">
        <div className="max-w-7xl w-full">
          <div className="text-sm mb-2">
            <span className="font-medium">Home / Contact Us</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-medium lg:mt-10">Contact Us</h1>
        </div>
      </div>

      <div className="flex justify-center items-start w-full py-8 bg-white lg:pt-12">
        <div className="max-w-7.5xl w-full flex flex-col md:flex-col lg:flex-col xl:flex-row gap-4 px-4 sm:px-6 lg:px-16">
          
          <div className="w-full lg:w-full xl:w-1/4">
            <h2 className="text-2xl font-medium text-grey mt-12 lg:mt-12">Contact</h2>
          </div>

          <div className="w-full lg:w-full xl:w-3/4">
            <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-8 leading-tight">
              Question not answered yet? We are here to help!
            </h2>

            <form className="space-y-8 lg:space-y-10">
              <div className="w-full">
                <label htmlFor="fullName" className="text-sm text-gray-600 mb-2 block">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  className="w-full border-b border-black text-lg py-2 outline-none focus:border-secondary"
                />
              </div>
              <div className="w-full">
                <label htmlFor="email" className="text-sm text-gray-600 mb-2 block">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full border-b border-black text-lg py-2 outline-none focus:border-secondary"
                />
              </div>
              <div className="w-full">
                <label htmlFor="message" className="text-sm text-gray-600 mb-2 block">Message</label>
                <textarea
                  name="message"
                  placeholder="Message"
                  className="w-full border-b border-black text-lg py-2 outline-none focus:border-secondary"
                  rows="4"
                ></textarea>
              </div>

              <Button
                text="Send Message"
                variant="outlineOrange"
                className="mt-6"
                onClick={() => {
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
