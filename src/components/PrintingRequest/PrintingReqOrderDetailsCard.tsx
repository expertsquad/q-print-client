"use client";
import { usePrintingRequestByIdQuery } from "@/redux/features/printing-request/printing-request";
import PrintingReqThankYouPageContact from "./ThankYouPage/PrintingReqThankYouPageContact";
import PrintingReqThankYouPageOrderInfo from "./ThankYouPage/PrintingReqThankYouPageOrderInfo";

const PrintingReqOrderDetailsCard = ({ id }: { id: string }) => {
  // <== get printing request ordered items ==>
  const { data } = usePrintingRequestByIdQuery(`${id}`);

  const printingOrderInfo = data?.data;
  console.log(printingOrderInfo, "Hello page");

  return (
    <div className="flex flex-col gap-5">
      <h2 className="[font-size:_clamp(1em,4vw,1.3em)] text-center mt-5">
        Order Details
      </h2>

      <PrintingReqThankYouPageOrderInfo
        orderId={printingOrderInfo?.orderId}
        createdAt={printingOrderInfo?.createdAt}
        totalPayable={printingOrderInfo?.totalPayable}
        paymentGateway={printingOrderInfo?.payment?.paymentGateway}
        totalPrice={printingOrderInfo?.totalPrice}
        totalQuantity={printingOrderInfo?.totalQuantity}
        shippingCharge={printingOrderInfo?.shippingCharge}
        printingRequestFile={printingOrderInfo?.printingRequestFile}
      />

      <PrintingReqThankYouPageContact
        contact={printingOrderInfo?.buyer?.email}
        payment={printingOrderInfo?.payment?.paymentGateway}
        streetAddress={printingOrderInfo?.buyer?.shippingAddress?.streetAddress}
      />
    </div>
  );
};

export default PrintingReqOrderDetailsCard;
