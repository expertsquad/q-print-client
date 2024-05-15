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
        orderStatus={orderedData?.orderStatus}
      />
    </div>
  );
};

export default PrintingRequestOrderTrackStep;
