import PrintingRequestTotalOrder from "@/components/PrintingRequest/PrintingRequestTotalOrder";
import React from "react";

const Payment = () => {
  return (
    <section className="lg:w-[1280px] w-full mx-auto  ">
      <div className="mb-7">
        <h3 className="[font-size:_clamp(1.2em,4vw,1.8em)] font-bold">
          Request for a Printing
        </h3>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row gap-7 justify-between">
        <div className="w-full md:w-8/12 lg:w-8/12 border rounded-l-lg px-10">
          here is payment
        </div>
        <div className="w-full md:w-4/12 lg:w-4/12">
          <PrintingRequestTotalOrder />
        </div>
      </div>
    </section>
  );
};

export default Payment;
