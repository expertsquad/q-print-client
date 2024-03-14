"use client";
import OrderHistoryLayout from "@/components/Profile/OrderHistoryLayout";
import ProfileOrderHistory from "@/components/Profile/ProfileOrderHistory";
import { useGetOnlineOrderQuery } from "@/redux/features/online-order/online-orderApi";
import React from "react";

const OrderHistory = () => {
  // <== Get data from order history query ==>
  const { data, isError } = useGetOnlineOrderQuery(undefined);
  // console.log(data?.data, "dkfdkkd");

  return (
    <div className="w-full mb-7">
      <div className="flex justify-between items-center mb-4">
        <h3 className="[font-size:_clamp(1em,4vw,1.5em)] font-bold">
          Order History
        </h3>
        <div>
          <span className="border md:py-3 py-2 px-3 rounded-lg  w-fit ">
            <select
              title="Month Filter"
              className="py-2 rounded-md outline-none border-none w-min bg-transparent text-gray-700 "
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
          </span>
        </div>
      </div>
      <ProfileOrderHistory />
      <OrderHistoryLayout orderedItem={data?.data} />
    </div>
  );
};

export default OrderHistory;
