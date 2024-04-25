"use client";
import { usePrintingRequestByIdQuery } from "@/redux/features/printing-request/printing-request";
import ThankYouPageContact from "./ThankYouPage/ThankYouPageContact";
import ThankYouPageOrderInfo from "./ThankYouPage/ThankYouPageOrderInfo";

const OrderDetailsCard = () => {
  // <== get printing request ordered items ==>
  const { data } = usePrintingRequestByIdQuery("");

  const printingOrderInfo = data?.data;

  return (
    <div className="flex flex-col gap-5">
      <h2 className="[font-size:_clamp(1em,4vw,1.3em)] text-center mt-5">
        Order Details
      </h2>

      <ThankYouPageOrderInfo
        orderId={printingOrderInfo?.orderId}
        createdAt={printingOrderInfo?.createdAt}
        totalPayable={printingOrderInfo?.totalPayable}
        paymentGateway={printingOrderInfo?.payment?.paymentGateway}
        totalPrice={printingOrderInfo?.totalPrice}
        totalQuantity={printingOrderInfo?.totalQuantity}
        shippingCharge={printingOrderInfo?.shippingCharge}
        printingRequestFile={printingOrderInfo?.printingRequestFile}
      />

      <ThankYouPageContact
        contact={printingOrderInfo?.buyer?.email}
        payment={printingOrderInfo?.payment?.paymentGateway}
        streetAddress={printingOrderInfo?.buyer?.shippingAddress?.streetAddress}
      />
    </div>
  );
};

export default OrderDetailsCard;
