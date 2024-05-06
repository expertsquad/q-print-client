"use client";
import React, { useEffect, useState } from "react";
import Stepper from "./Stepper";
import { useGetOnlineOrderByIdQuery } from "@/redux/features/online-order/online-orderApi";
import { formatDate } from "@/constants/formatDate";

const OrderedStep = ({ id }: { id: string }) => {
  const { data } = useGetOnlineOrderByIdQuery(id);
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (data?.data?.orderStatus) {
      setStep(data?.data?.orderStatus?.length - 1);
    }
  }, [data]);

  return (
    <div className="mb-10">
      <Stepper
        currentStep={step}
        numberOfSteps={4}
        iconSize={`${50} md:${40}`}
        iconStroke={2}
        customStepStyle={`relative`}
      />
      <div className="">
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
