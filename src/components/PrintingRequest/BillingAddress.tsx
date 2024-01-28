"use client";
import React, { useState } from "react";

const BillingAddress = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex justify-start md:justify-between lg:justify-between gap-5 my-5 flex-col md:flex-row lg:flex-row">
      <label className="inline-flex items-center  ">
        <div
          className={`w-5 h-5 rounded-full bg-white  flex items-center justify-center border-fuchsia-700 border-2 ${
            selectedOption === "option1" ? "border-fuchsia-700 border-2" : ""
          }`}
        >
          {selectedOption === "option1" && (
            <div className="h-3 w-3 bg-gradient-to-r from-[#C83B62] to-[#7F35CD] rounded-full"></div>
          )}
        </div>
        <span className="ml-2">Same as shipping address</span>
        <input
          type="radio"
          value="option1"
          checked={selectedOption === "option1"}
          onChange={handleOptionChange}
          className="hidden"
        />
      </label>

      <label className="inline-flex items-center ">
        <div
          className={`w-5 h-5 rounded-full bg-white  flex items-center justify-center border-fuchsia-700 border-2 ${
            selectedOption === "option2" ? "border-fuchsia-700 border-2" : ""
          }`}
        >
          {selectedOption === "option2" && (
            <div className="h-3 w-3 bg-gradient-to-r from-[#C83B62] to-[#7F35CD]   rounded-full"></div>
          )}
        </div>
        <span className="ml-2">Use a different billing address</span>
        <input
          type="radio"
          value="option2"
          checked={selectedOption === "option2"}
          onChange={handleOptionChange}
          className="hidden"
        />
      </label>
    </div>
  );
};

export default BillingAddress;
