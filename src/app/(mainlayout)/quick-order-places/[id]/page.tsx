"use client";
import QuickOrderPlacesTop from "@/components/quick-order/QuickOrderPlaces/QuickOrderPlacesTop";
import PurchagingOrderDetails from "@/components/thankYou/PurchagingOrderDetails";
import ThankYouPageContactInfo from "@/components/thankYou/ThankYouPageContactInfo";
import NeedHelp from "@/components/UI/card/NeedHelp";
import { useQuickOrderByIdQuery } from "@/redux/features/quick-order/quickOrderApi";
import React from "react";

const QuickOrderPlaces = ({ params }: { params: { id: string } }) => {
  const { data } = useQuickOrderByIdQuery(params?.id);
  const quickOrderPlaces = data?.data;
  console.log(quickOrderPlaces, "dkfjdkj");
  return (
    <div className="lg:max-w-[700px] w-full mx-auto mb-7">
      <QuickOrderPlacesTop />
      <div className="flex flex-col gap-5">
        <h2 className="[font-size:_clamp(1em,4vw,1.3em)] text-center mt-5">
          Order Details
        </h2>
        <div>
          <PurchagingOrderDetails
            orderId={quickOrderPlaces?.orderId}
            createdAt={quickOrderPlaces?.createdAt}
            totalPayable={quickOrderPlaces?.totalPayable}
            paymentGateway={quickOrderPlaces?.payment?.paymentMethod}
            shippingCharge={quickOrderPlaces?.shippingCharge}
            totalDiscount={quickOrderPlaces?.totalDiscount}
            products={quickOrderPlaces?.orderItems}
            totalPrice={quickOrderPlaces?.totalPrice}
          />
          <ThankYouPageContactInfo
            contact={quickOrderPlaces?.buyer?.phoneNumber}
            payment={quickOrderPlaces?.payment?.paymentMethod}
            streetAddress={quickOrderPlaces?.buyer?.address}
          />
        </div>
      </div>
      <NeedHelp />
    </div>
  );
};

export default QuickOrderPlaces;
