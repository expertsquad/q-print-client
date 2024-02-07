import { IconTruckDelivery } from "@tabler/icons-react";
import React from "react";

export default function Stepper({ currentStep, numberOfSteps }: any) {
  const activeColor = (index: any) =>
    currentStep >= index
      ? "main-bg-color"
      : "bg-fuchsia-50 border border-dashed";
  const isFinalStep = (index: any) => index === numberOfSteps - 1;

  return (
    <div className="flex items-center ">
      {Array.from({ length: numberOfSteps }).map((_, index) => (
        <React.Fragment key={index}>
          <div
            className={`w-[135px] h-[40px] flex items-center justify-center rounded-full ${activeColor(
              index
            )}`}
          >
            <IconTruckDelivery />
          </div>
          {isFinalStep(index) ? null : (
            <div className={`w-full h-1.5 ${activeColor(index)}`}></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
