import React from "react";
import Button from "../components/Button";
import { ReactComponent as RightArrow } from "../Images/Rightarrow.svg";
function PropertiesDetails() {
  return (
    <section className="container mx-auto text-center py-20 px-4">
      <div className="">
        <div className="">
          <h1 className="text-3xl font-bold text-primary">
            Properties Details
          </h1>
          <h2 className="">

          </h2>
          <h3 className="">

          </h3>
        </div>
        <div className="">
          <p className="">

          </p>
          <Button
            variant="outlineOrange"
            layout="pagination"
            className="group flex items-center"
          >Contact Us
            <RightArrow className="w-4 h-4 ml-2 transition-colors duration-0 ease-in-out" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default PropertiesDetails;
