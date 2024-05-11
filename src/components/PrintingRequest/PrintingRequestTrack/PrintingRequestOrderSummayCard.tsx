import React from "react";

const PrintingRequestOrderSummayCard = ({ orderedItem }: any) => {
  return (
    <div className=" border rounded-lg">
      <h5 className="text-[16px] md:text-[18px] font-medium pl-6 py-5 border-b">
        Order Summary
      </h5>
      <ul className="px-5 md:px-7">
        {[
          { label: "Sub Total", amount: orderedItem?.totalPrice },
          { label: "Shipping", amount: orderedItem?.shippingCharge },
          {
            label: "Discount",
            amount: -orderedItem?.totalDiscount,
            borderBottom: true,
          },
        ].map(({ label, amount, borderBottom }, index, array) => (
          <li
            key={index}
            className={`flex justify-between mt-5 text-[#5F6C72] ${
              borderBottom ? "" : ""
            } ${
              index === array?.length - 1 && amount === -15
                ? "main-text-color"
                : ""
            }`}
          >
            {label}{" "}
            <span>
              {amount} <small>QAR</small>
            </span>
          </li>
        ))}
      </ul>
      <div className="flex justify-between px-5 md:px-7 mt-5 mb-2 border-t pt-4">
        <h6 className="font-medium">Total</h6>
        <span className="text-[18px] font-medium main-text-color">
          {orderedItem?.totalPrice +
            orderedItem?.shippingCharge -
            orderedItem?.totalDiscount}{" "}
          <small>QAR</small>
        </span>
      </div>
      <p className="px-5 md:px-7 text-[#5F6C72] mb-5 md:mb-7">
        {orderedItem?.totalQuantity} Item, {orderedItem?.orderItems?.length}{" "}
        Package
      </p>
    </div>
  );
};

export default PrintingRequestOrderSummayCard;
