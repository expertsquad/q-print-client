import React from "react";
import OrderTrackTop from "./OrderTrackTop";
import OrderDetails from "./OrderDetails";
import OrderedStep from "./OrderedStep";

const OrderTrack = ({ params }: any) => {
  return (
    <div className="">
      <OrderTrackTop id={params?.id} />
      <OrderedStep />
      <OrderDetails id={params?.id} />
    </div>
  );
};

export default OrderTrack;
