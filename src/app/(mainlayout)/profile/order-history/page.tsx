import OrderHistoryOrderPlacedLayout from "@/components/Profile/OrderHistoryOrderPlacedLayout";
import OrderHistoryPackagingLayout from "@/components/Profile/OrderHistoryPackagingLayout";
import OrderHistoryShippingLayout from "@/components/Profile/OrderHistoryShippingLayout";
import ProfileOrderHistory from "@/components/Profile/ProfileOrderHistory";

import React from "react";

const OrderHistory = () => {
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
      <OrderHistoryOrderPlacedLayout />
      <OrderHistoryPackagingLayout />
      <OrderHistoryShippingLayout />
    </div>
  );
};

export default OrderHistory;
