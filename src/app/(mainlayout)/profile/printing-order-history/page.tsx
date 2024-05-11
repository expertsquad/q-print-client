"use client";
import PrintingRequestOrderPlaced from "@/components/printing-request-history/PrintingRequestOrderPlaced";
import { usePrintingRequestOrderHistoryQuery } from "@/redux/features/printing-request/printing-request";
import { useGetUserQuery } from "@/redux/features/user/user";
import React from "react";

const PrintingOrderHistory = () => {
  const { data: userData } = useGetUserQuery("");

  const { data, isLoading } = usePrintingRequestOrderHistoryQuery(
    `buyer.userId=${userData?.data?._id}`
  );

  return (
    <div className="w-full mb-7">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg md:text-xl font-bold">Printing Order History</h3>
        <div className="border py-2 px-3 rounded-lg  ">
          <select
            title="Month Filter"
            className="rounded-md outline-none border-none bg-transparent text-gray-700 "
            name=""
            id=""
          >
            <option value="MostPopular" className=" text-gray-800">
              Past 3 Month
            </option>
            <option value="Recent" className=" text-gray-800">
              Past 6 Month
            </option>
            <option value="HighPrice" className=" text-gray-800">
              Last 1 year
            </option>
          </select>
        </div>
      </div>
      <div className="w-full">
        <PrintingRequestOrderPlaced
          printingReqData={data?.data}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default PrintingOrderHistory;
