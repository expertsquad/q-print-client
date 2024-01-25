import PrinterPaperSize from "@/components/PrintingRequest/PrinterPaperSize";
import React from "react";

const PrintingRequest = () => {
  return (
    <section className="w-[1280px] mx-auto">
      <div className="flex flex-col md:flex-row lg:flex-row gap-7">
        <div>
          <PrinterPaperSize />
        </div>
        <div>Total order coming</div>
      </div>
    </section>
  );
};

export default PrintingRequest;
