import { formatDate } from "@/constants/formatDate";
import { OnlineOrderThankYouPageType } from "@/types/onlineOrderThankPageTypes";
import React from "react";
import PurchagingProducts from "./PurchagingProducts";

interface OrderInfoProps {
  orderId?: string;
  createdAt?: any;
  totalPayable?: number;
  paymentGateway?: string;
  totalPrice?: number;
  shippingCharge?: number;
  totalDiscount?: number;
  products: OnlineOrderThankYouPageType;
}

const PurchagingOrderDetails = ({
  createdAt,
  orderId,
  paymentGateway,
  totalPayable,
  totalPrice,
  shippingCharge,
  totalDiscount,
  products,
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

      <div className="flex flex-col border rounded-lg mt-5">
        {/* == Product short info == */}
        <div className="w-full flex justify-between items-stretch p-5 md:p-10 border-b">
          <div className="w-full">
            <PurchagingProducts products={products} />
          </div>
        </div>

        <div className="bg-slate-50">
          {/* == Sub total and order quantity == */}
          <div className="mt-7  p-5 md:p-10">
            <div className="text-base flex items-center justify-between pb-5">
              <span className="text-black-opacity-60">Sub Total</span>{" "}
              <span className="main-text-color font-bold">
                {totalPrice} QAR
              </span>
            </div>
            <div className="text-base flex items-center justify-between  pb-5">
              <span className="text-black-opacity-60">Shipping</span>{" "}
              <span className="main-text-color font-bold">
                {shippingCharge} QAR
              </span>
            </div>
            <div className="text-base flex items-center justify-between  pb-5">
              <span className="text-black-opacity-60">Discount</span>{" "}
              <span className="main-text-color font-bold">
                {totalDiscount?.toFixed(2)} QAR
              </span>
            </div>
            <div className="text-base flex items-center justify-between  pb-5 border-b">
              <span className="text-black-opacity-60">Tax</span>{" "}
              <span className="main-text-color font-bold">{0} QAR</span>
            </div>
          </div>

          {/* == Grand Total == */}
          <div className="flex justify-between items-center pb-5 md:px-10 px-5 md:pb-10">
            <p>Total</p>
            <div className="font-bold text-xl">{totalPayable} QAR</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchagingOrderDetails;
