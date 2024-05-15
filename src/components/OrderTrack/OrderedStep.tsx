"use client";
import React, { useEffect, useState } from "react";
import Stepper from "./Stepper";
import { useGetOnlineOrderByIdQuery } from "@/redux/features/online-order/online-orderApi";
import { formatDate } from "@/constants/formatDate";

interface OrderStatusType {
  status: string;
  time: string;
  _id: string;
  id: string;
}

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
        iconStroke={2}
        customStepStyle={`relative`}
        orderStatus={data?.data?.orderStatus}
      />
    </div>
  );
};

export default OrderedStep;
