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
    <div className="mb-7 grid grid-cols-1">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-x-2">
          <h3 className="text-lg md:text-xl font-bold">
            Printing Order History
          </h3>
          <span
            className={`text-[#03A609] bg-[#03a6091a] px-2 py-0.5 rounded-full ${
              isLoading && "animate-ping"
            }`}
          >
            10
          </span>
        </div>
        <div className="border py-2 px-3 rounded-lg  ">
          <select
            title="Month Filter"
            className=" rounded-md outline-none border-none w-min bg-transparent text-gray-700 "
            name="timePeriod"
          >
            <option value="All Order" className=" text-gray-800">
              All Order
            </option>
            <option value="week" className=" text-gray-800">
              7 days
            </option>
            <option value="2 week" className=" text-gray-800">
              14 days
            </option>
            <option value="1 month" className=" text-gray-800">
              1 month
            </option>
            <option value="Past 3 Month" className=" text-gray-800">
              Past 3 Month
            </option>
            <option value="Past 6 month" className=" text-gray-800">
              Past 6 Month
            </option>
            <option value="1 years" className=" text-gray-800">
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
