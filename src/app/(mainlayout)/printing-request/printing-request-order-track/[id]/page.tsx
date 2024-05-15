"use client";
import PrintingRequestOrderItemsDetails from "@/components/PrintingRequest/PrintingRequestTrack/PrintingRequestOrderItemsDetails";
import PrintingRequestOrderTrackStep from "@/components/PrintingRequest/PrintingRequestTrack/PrintingRequestOrderTrackStep";
import PrintingRequestOrderTrackTop from "@/components/PrintingRequest/PrintingRequestTrack/PrintingRequestOrderTrackTop";
import Spinner from "@/components/shared/Spinner";
import { usePrintingRequestByIdQuery } from "@/redux/features/printing-request/printing-request";
import React from "react";

const PrintingRequestOrderTrack = ({ params }: { params: { id: string } }) => {
  const { data, isLoading } = usePrintingRequestByIdQuery(params?.id);
  const orderedData = data?.data;
  return (
    <div className="max-w-[1280px] mx-auto relative">
      {isLoading && (
        <span>
          <Spinner />
        </span>
      )}
      <div>
        <PrintingRequestOrderTrackTop
          orderId={orderedData?.orderId}
          id={params?.id}
          orderedData={orderedData}
          createdAt={orderedData?.createdAt}
        />
        <PrintingRequestOrderTrackStep orderedData={orderedData} />
        <PrintingRequestOrderItemsDetails orderedData={orderedData} />
      </div>
    </div>
  );
};

export default PrintingRequestOrderTrack;
