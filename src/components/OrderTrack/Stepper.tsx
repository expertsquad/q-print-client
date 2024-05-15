import { formatDate } from "@/constants/formatDate";
import {
  IconBook2,
  IconHeartHandshake,
  IconPackage,
  IconTruckDelivery,
} from "@tabler/icons-react";
import React from "react";

const icons = [IconBook2, IconPackage, IconTruckDelivery, IconHeartHandshake];

interface OrderStatusType {
  status: string;
  time: string;
  _id: string;
  id: string;
}

export default function Stepper({
  currentStep,
  numberOfSteps,
  iconSize,
  iconStroke,
  customStepStyle,
  orderStatus,
}: any) {
  const activeColor = (index: any) =>
    currentStep >= index
      ? "main-bg-color text-white font-thin"
      : " border border-dashed font-thin";
  const isFinalStep = (index: any) => index === numberOfSteps - 1;

  return (
    <section>
      <div className={`flex items-center font-thin ${customStepStyle}`}>
        {Array.from({ length: numberOfSteps }).map((_, index) => (
          <React.Fragment key={index}>
            <div
              className={`w-20  md:w-[135px] md:h-[55px] flex items-center justify-center p-1 md:p-3 rounded-full text-fuchsia-700 ${activeColor(
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
      <div
        className={` ${
          orderStatus?.length === 4
            ? "flex items-center justify-between"
            : `${
                orderStatus?.length === 3
                  ? "grid grid-cols-4 place-content-center"
                  : `${
                      orderStatus?.length === 2
                        ? "grid grid-cols-2"
                        : "grid grid-cols-1"
                    }`
              }`
        }`}
      >
        {orderStatus?.map((status: OrderStatusType) => (
          <div key={status?._id} className={`flex flex-col items-start w-4/4`}>
            <span
              data-content={"?"}
              className="text-[11px] md:text-[16px] italic"
            >
              {status?.status}
            </span>
            <span className="text-black text-opacity-50 text-[11px] md:text-sm italic">
              {formatDate(status?.time)}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
