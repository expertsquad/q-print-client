import {
  IconBook2,
  IconHeartHandshake,
  IconPackage,
  IconTruckDelivery,
} from "@tabler/icons-react";
import React from "react";

const icons = [IconBook2, IconPackage, IconTruckDelivery, IconHeartHandshake];

export default function Stepper({
  currentStep,
  numberOfSteps,
  iconSize,
  iconStroke,
  customStepStyle,
}: any) {
  const activeColor = (index: any) =>
    currentStep >= index
      ? "main-bg-color text-white font-thin"
      : " border border-dashed font-thin";
  const isFinalStep = (index: any) => index === numberOfSteps - 1;

  return (
    <div className={`flex items-center font-thin ${customStepStyle}`}>
      {Array.from({ length: numberOfSteps }).map((_, index) => (
        <React.Fragment key={index}>
          <div
            className={`w-20 h- md:w-[135px] md:h-[55px] flex items-center justify-center p-1 md:p-3 rounded-full text-fuchsia-700 ${activeColor(
              index
            )}`}
          >
            {React.createElement(icons[index], {
              size: 25,
              stroke: iconStroke,
            })}
          </div>
          {isFinalStep(index) ? null : (
            <div
              className={`w-full h-1 bg-fuchsia-100 ${activeColor(index)}`}
            ></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
