import { formatDate } from "@/constants/formatDate";
import React from "react";

interface OrderInfoProps {
  orderId: string;
  createdAt: string;
  totalPayable: number;
  paymentGateway: string;
  totalQuantity: number;
  totalPrice: number;
  shippingCharge: number;
  printingRequestFile: any;
}

const ThankYouPageOrderInfo = ({
  createdAt,
  orderId,
  paymentGateway,
  totalPayable,
  totalPrice,
  totalQuantity,
  shippingCharge,
  printingRequestFile,
}: OrderInfoProps) => {
  const divStyle = "text-base flex items-center justify-between";
  return (
    <div>
      <div className="border p-5 md:p-10 lg:p-10 rounded-lg flex flex-col gap-5">
        <div className={`${divStyle}`}>
          <p className="text-gray-500">Order code:</p>{" "}
          <p className="text-gray-800">{orderId}</p>
        </div>
        <div className={`${divStyle}`}>
          <p className="text-gray-500">Date:</p>{" "}
          <p className="text-gray-800">{formatDate(createdAt)}</p>
        </div>
        <div className={`${divStyle}`}>
          <p className="text-gray-500">Total:</p>{" "}
          <p className="text-gray-800">{totalPayable} QAR</p>
        </div>
        <div className={`${divStyle}`}>
          <p className="text-gray-500">Payment method:</p>{" "}
          <p className="text-gray-800">{paymentGateway}</p>
        </div>
      </div>

      <div className="flex flex-col border p-5 md:p-10 lg:p-10 rounded-lg mt-5">
        {/* == Product short info == */}
        <div className="flex justify-between items-stretch pb-3 border-b">
          <div>
            <p className="text-base text-wrap">{printingRequestFile}</p>
            <p className="text-base">
              {totalQuantity} X {totalPrice / totalQuantity} QAR
            </p>
          </div>
          <div className="main-text-color font-bold text-xl">
            {totalPayable} QAR
          </div>
        </div>

        {/* == Sub total and order quantity == */}
        <div className="mt-7">
          <div className="text-base flex items-center justify-between pb-5">
            <p className="text-gray-500">Sub Total</p>{" "}
            <p className="text-gray-800">{totalPrice} QAR</p>
          </div>
          <div className="text-base flex items-center justify-between  pb-5 border-b">
            <p className="text-gray-500">Shipping</p>{" "}
            <p className="text-gray-800">{shippingCharge} QAR</p>
          </div>
        </div>

        {/* == Grand Total == */}
        <div className="mt-5 flex justify-between items-center">
          <p>Total</p>
          <div className=" font-bold text-xl">{totalPayable} QAR</div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPageOrderInfo;
