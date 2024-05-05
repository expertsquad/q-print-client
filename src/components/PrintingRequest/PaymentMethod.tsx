"use client";
import React, { useState } from "react";
import GradientCardIcon from "@/assets/svgIcons/GradientCardIcon";
import GradientPaypalIcon from "@/assets/svgIcons/GradientPaypalIcon";
import CodPaymentIcon from "../UI/CodPaymentIcon";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { setPrintingRequest } from "@/redux/features/printing-request/postPrintingRequestSlice";

const PaymentMethod = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const data = useAppSelector((state) => state.printingRequestOrder);
  console.log(data);

  const dispatch = useAppDispatch();

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
    if (event.target.value === "cod") {
      dispatch(
        setPrintingRequest({
          ...data,
          payment: {
            ...data.payment,
            paymentStatus: "Unpaid",
            paymentMethod: "COD",
          },
        })
      );
    } else {
      dispatch(
        setPrintingRequest({
          ...data,
          payment: {
            ...data.payment,
            paymentStatus: "Paid",
            paymentMethod: "Card",
          },
        })
      );
    }
  };

  return (
    <div className="flex justify-start md:justify-between lg:justify-between  gap-5 my-5 flex-col md:flex-row lg:flex-row md:border lg:border   rounded-lg md:px-10 lg:px-10 py-5 p-0">
      {/* credit and debid card */}
      <label className="inline-flex items-center gap-2  ">
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
      </label>

      {/* by COD */}
      <div className="md:border-r md:h-12 h-0 border-r-0 "></div>

      <label className="inline-flex items-center gap-2 ">
        <CodPaymentIcon />
        <span className="">Cash on Delivery</span>
        <div
          className={`w-5 h-5 rounded-full bg-white  flex items-center justify-center border-fuchsia-700 border-2 ${
            selectedOption === "cod" ? "border-fuchsia-700 border-2" : ""
          }`}
        >
          {selectedOption === "cod" && (
            <div className="h-3 w-3 bg-gradient-to-r from-[#C83B62] to-[#7F35CD]   rounded-full"></div>
          )}
        </div>
        <input
          type="radio"
          value="cod"
          checked={selectedOption === "cod"}
          onChange={handleOptionChange}
          className="hidden"
        />
      </label>
    </div>
  );
};

export default PaymentMethod;
