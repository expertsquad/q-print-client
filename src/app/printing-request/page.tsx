import PrinterPaperSize from "@/components/PrintingRequest/PrinterPaperSize";
import PrintingRequestTotalOrder from "@/components/PrintingRequest/PrintingRequestTotalOrder";
import PrintingTypeAndMode from "@/components/PrintingRequest/PrintingTypeAndMode";
import React from "react";

const PrintingRequest = () => {
  return (
    <section className="w-[1280px] mx-auto ">
      <div className="mb-7">
        <h3 className="[font-size:_clamp(1.2em,4vw,1.8em)] font-bold">
          Request for a Printing
        </h3>
        <p className="text-base text-gray-500">
          We will print your design and send it to your delivery address
        </p>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row gap-7 justify-between">
        <div className="w-full md:w-8/12 lg:w-8/12">
          <PrinterPaperSize />
          <PrintingTypeAndMode />
        </div>
        <div className="w-full md:w-4/12 lg:w-4/12">
          <PrintingRequestTotalOrder />
        </div>
      </div>
    </section>
  );
};

export default PrintingRequest;
