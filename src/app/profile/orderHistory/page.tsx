import ProfileOrderHistory from "@/components/Profile/ProfileOrderHistory";
import React from "react";

const OrderHistory = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="[font-size:_clamp(1em,4vw,1.5em)] font-bold">
          Order History
        </h3>
        <div>
          <select className="border px-4 py-3 rounded-md " name="" id="">
            <option value="Most Popular">Past 3 Month</option>
            <option value="Most Popular">Past 6 Month</option>
            <option value="Most Popular">Last 1 year</option>
          </select>
        </div>
      </div>
      <ProfileOrderHistory />
    </div>
  );
};

export default OrderHistory;
