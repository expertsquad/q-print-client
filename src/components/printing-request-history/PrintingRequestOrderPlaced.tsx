"use client";
import { usePrintingRequestOrderHistoryQuery } from "@/redux/features/printing-request/printing-request";
import React from "react";
import PringtingOrderHistoryTable from "./PringtingOrderHistoryTable";

const PrintingRequestOrderPlaced = () => {
  const { data } = usePrintingRequestOrderHistoryQuery(
    "orderStatus.status=Order placed"
  );
  console.log(data?.data, "From printig");
  return (
    <div>
      {data?.data?.map((element: any) => (
        <div key={element?._id}>
          <PringtingOrderHistoryTable
            totalPrice={element?.totalPrice}
            orderId={element?.orderId}
            createdAt={element?.createdAt}
            orderStatus={element?.orderStatus?.status}
            quantity={element?.totalQuantity}
            id={element?._id}
          />
        </div>
      ))}
    </div>
  );
};

export default PrintingRequestOrderPlaced;
