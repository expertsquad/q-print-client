"use client";
import React from "react";
import Stepper from "./Stepper";
import { useGetOnlineOrderByIdQuery } from "@/redux/features/online-order/online-orderApi";
import { formatDate } from "@/constants/formatDate";

const OrderedStep = ({ id }: any) => {
  const { data } = useGetOnlineOrderByIdQuery(id);
  const orderStatus = parseFloat(data?.data?.orderStatus);

  const [currentStep, setCurrentStep] = React.useState(3);

  return (
    <div className="mb-10">
      <Stepper
        currentStep={0}
        numberOfSteps={4}
        iconSize={`${50} md:${40}`}
        iconStroke={1}
        customStepStyle={`relative`}
      />
      <div className="order-track-step-counter">
        {data?.data?.orderStatus?.map((status: any, index: number) => (
          <div key={status?._id} className="flex flex-col items-center">
            <span className="text-[11px] md:text-[16px] italic">
              {status?.status}
            </span>
            <span className="text-black text-opacity-50 text-[11px] md:text-sm italic">
              {formatDate(status?.time)}
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
