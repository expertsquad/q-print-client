import OrderDetails from "@/components/OrderTrack/OrderDetails";
import OrderDetailsCard from "@/components/PrintingRequest/OrderDetailsCard";
import ThankYouOrderPlaces from "@/components/PrintingRequest/ThankYouOrderPlaces";
import NeedHelp from "@/components/UI/card/NeedHelp";
import React from "react";

const OrderPlaces = () => {
  return (
    <section className="lg:w-[1280px] w-full mx-auto  mb-7">
      <ThankYouOrderPlaces />
      <OrderDetailsCard />

      <NeedHelp />
    </section>
  );
};

export default OrderPlaces;
