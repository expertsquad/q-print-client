"use client";
import React, { useState } from "react";
import { IconCreditCardPay, IconCurrencyDollar } from "@tabler/icons-react";
import GradientCardIcon from "@/assets/svgIcons/GradientCardIcon";
import GradientPaypalIcon from "@/assets/svgIcons/GradientPaypalIcon";

const PaymentMethod = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex justify-start md:justify-between lg:justify-between  gap-5 my-5 flex-col md:flex-row lg:flex-row md:border lg:border   rounded-lg md:px-10 lg:px-10 py-5 p-0">
      {/* credit and debid card */}
      <div className="inline-flex items-center gap-2  ">
        <GradientCardIcon />
        <span className="">Debid/Credit Card</span>
        <div
          className={`w-5 h-5 rounded-full bg-white  flex items-center justify-center border-fuchsia-700 border-2 ${
            selectedOption === "byCard" ? "border-fuchsia-700 border-2" : ""
          }`}
        >
          {selectedOption === "byCard" && (
            <div className="h-3 w-3 bg-gradient-to-r from-[#C83B62] to-[#7F35CD] rounded-full"></div>
          )}
        </div>
        <input
          type="radio"
          value="byCard"
          checked={selectedOption === "byCard"}
          onChange={handleOptionChange}
          className="hidden"
        />
      </div>

      <div className="md:border-r md:h-12 h-0 border-r-0 "></div>

      {/* paypal  */}
      <div className="inline-flex items-center gap-2 ">
        <GradientPaypalIcon />
        <span className="">Paypal</span>
        <div
          className={`w-5 h-5 rounded-full bg-white  flex items-center justify-center border-fuchsia-700 border-2 ${
            selectedOption === "byPypal" ? "border-fuchsia-700 border-2" : ""
          }`}
        >
          {selectedOption === "byPypal" && (
            <div className="h-3 w-3 bg-gradient-to-r from-[#C83B62] to-[#7F35CD]   rounded-full"></div>
          )}
        </div>
        <input
          type="radio"
          value="byPypal"
          checked={selectedOption === "byPypal"}
          onChange={handleOptionChange}
          className="hidden"
        />
      </div>
      <div className="md:border-r md:h-12 h-0 border-r-0 "></div>

      {/* == Cash On Delivery == */}
      <div className="flex items-center gap-2">
        <span>
          <IconCurrencyDollar />{" "}
        </span>
        <span>Cash on Delivery</span>
        <input type="radio" />
      </div>
    </div>
  );
};

export default PaymentMethod;
