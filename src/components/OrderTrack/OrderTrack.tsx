import React from "react";
import OrderTrackTop from "./OrderTrackTop";
import OrderDetails from "./OrderDetails";
import OrderedStep from "./OrderedStep";

const OrderTrack = () => {
  return (
    <div className="">
      <OrderTrackTop />
      <OrderedStep />
      <OrderDetails />
    </div>
  );
};

export default OrderTrack;
