import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const CartViewTotalCard = ({
  subTotal,
  shippingCharge,
  discountPrice,
  calculateTotalWithDiscount,
  btnDisabled,
}: number | any) => {
  return (
    <div className="w-full">
      <h5 className="text-[16px] md:text-[18px] font-medium pl-6 py-5 border-b">
        Cart Total
      </h5>
      <ul className="px-5 md:px-7">
        {[
          { label: "Sub Total", amount: subTotal },
          { label: "Shipping", amount: shippingCharge },
          {
            label: "Discount",
            amount: -discountPrice,
            borderBottom: true,
          },
        ].map(({ label, amount, borderBottom }, index, array) => (
          <li
            key={index}
            className={`flex justify-between mt-5 text-[#5F6C72] ${
              borderBottom ? "border-b" : ""
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
      <div className="flex justify-between px-5 md:px-7 mt-5 mb-2">
        <h6 className="font-medium">Total</h6>
        <span className="text-[18px] font-medium main-text-color">
          {calculateTotalWithDiscount} <small>QAR</small>
        </span>
      </div>
      <button
        className={`${btnDisabled} "flex items-center justify-center px-5 mb-5 w-full  "`}
      >
        <Link
          href="/your-information"
          className="flex items-center gap-2 justify-center main-bg-color w-full py-2 text-white rounded-lg"
        >
          <span>Proceed To Checkout</span>
          <span>
            <IconArrowRight stroke={2} height={20} width={20} />
          </span>
        </Link>
      </button>
    </div>
  );
};

export default CartViewTotalCard;
