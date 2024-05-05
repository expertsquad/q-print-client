"use client";
import { usePrintingRequestOrderHistoryQuery } from "@/redux/features/printing-request/printing-request";
import React from "react";
import PringtingOrderHistoryTable from "./PringtingOrderHistoryTable";
import OrderHistorySkeleton from "@/components/shared/Skeleton/OrderHistorySkeleton";


const PrintingRequestOrderPlaced = () => {
  const { data, isLoading } = usePrintingRequestOrderHistoryQuery(
    "orderStatus.status=Order placed"
  );

  return (
    <div>
      {
        isLoading ? (

          [...Array(2)].map((_: any, index: number) => {
            return (
              <OrderHistorySkeleton key={index} />
            )
          })

        ) :
          data?.data?.map((element: any) => (
            <div key={element?._id}>
              <PringtingOrderHistoryTable
                totalPrice={element?.totalPayable}
                orderId={element?.orderId}
                createdAt={element?.createdAt}
                orderStatus={element?.orderStatus?.status}
                quantity={element?.totalQuantity}
                paperSize={element?.paperSize}
                paperType={element?.paperType}
                printingMode={element?.printingColorMode}
                attachment={element?.printingRequestFile}
                unit={element?.unit}
                id={element?._id}
              />
            </div>
          ))}
    </div>
  );
};

export default PrintingRequestOrderPlaced;
