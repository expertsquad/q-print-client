import React from "react";
import OrderTrackTop from "./OrderTrackTop";
import OrderDetails from "./OrderDetails";

const OrderTrack = () => {
  return (
    <div className="px-2">
      <OrderTrackTop />
      <OrderDetails />
    </div>
  );
};

export default OrderTrack;
