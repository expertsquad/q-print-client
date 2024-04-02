"use client";
import React, { useEffect } from "react";
import Stepper from "./Stepper";
import { shippingStatus } from "@/constants";

const OrderedStep = () => {
  //Status Data
  const orderStepData = [
    "Order Placed",
    "Packaging",
    "To Ship",
    "Order Received",
  ];

  const shippingStatusData = shippingStatus[0]?.status;

  const [currentStep, setCurrentStep] = React.useState(0);
  // if (shippingStatusData?.find((data: any) => console.log(data))) {

  //step increase decrease by status--

  // if (currentStep === 0 && shippingStatusData?.includes("Packaging")) {
  //   setCurrentStep(1);
  // } else if (currentStep === 1 && shippingStatusData?.includes("Shipped")) {
  //   setCurrentStep(2);
  // } else if (currentStep === 2 && shippingStatusData?.includes("Delivered")) {
  //   setCurrentStep(3);
  // } else {
  //   setCurrentStep(0);
  // }
  const numberOfSteps = shippingStatusData?.length;

  return (
    <div className="mb-10">
      <Stepper
        currentStep={currentStep}
        numberOfSteps={numberOfSteps}
        iconSize={`${30} md:${40}`}
        iconStroke={1}
      />
      <div className="flex items-center justify-between">
        {orderStepData.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <span className="text-[12px] md:text-[16px] italic">{step}</span>
            <span className="text-black text-opacity-50 text-[11px] md:text-sm italic">
              {new Date().toLocaleDateString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderedStep;

// == Step Move Data
// useEffect(() => {
//   const interval = setInterval(() => {
//     if (currentStep < NUMBER_OF_STEPS - 1) {
//       setCurrentStep((prev) => prev + 1);
//     } else {
//       setCurrentStep(0);
//     }
//   }, 3000); // Change the interval duration as needed

//   return () => clearInterval(interval);
// }, [currentStep, NUMBER_OF_STEPS]);
