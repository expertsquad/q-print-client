import Stepper from "@/components/OrderTrack/Stepper";
import { formatDate } from "@/constants/formatDate";
import React, { useEffect, useState } from "react";

interface OrderStatusType {
  status: string;
  time: string;
  _id: string;
  id: string;
}

const PrintingRequestOrderTrackStep = ({ orderedData }: any) => {
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (orderedData?.orderStatus) {
      setStep(orderedData?.orderStatus?.length - 1);
    }
  }, [orderedData]);
  return (
    <div className="mb-10">
      <Stepper
        currentStep={step}
        numberOfSteps={4}
        iconStroke={2}
        customStepStyle={`relative`}
      />
      <div className="grid grid-cols-4">
        {orderedData?.orderStatus?.map((status: OrderStatusType) => (
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

export default PrintingRequestOrderTrackStep;
