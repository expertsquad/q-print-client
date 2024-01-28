import { cartProductsData } from "@/constants";
import {
  IconArrowLeft,
  IconArrowRight,
  IconCheck,
  IconMinus,
  IconPlus,
  IconStar,
  IconX,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartView = () => {
  return (
    <div className="max-w-[1280px] mx-auto">
      <h4 className="text-black text-opacity-80 text-xl md:text-3xl mb-7 md:mb-10">
        Your Cart
      </h4>
      {/* --Product data, Price range, cart total container-- */}
      <div className="flex flex-col md:flex-row md:justify-between md:gap-5">
        {/* --Product data & Cart total container-- */}
        <div>
          {/* -Product data- */}
          <div className=" border rounded-lg px-3 md:px-7">
            {cartProductsData.map((data) => (
              <div
                key={data._id}
                className="flex md:view-cart-product-data border-b py-5  "
              >
                {/* ==Image, Text and Mobile V== */}
                <div className="main-div flex gap-5">
                  <div className="border border-black border-opacity-15 rounded-md p-3 w-[70px] h-[70px]">
                    <Image
                      src={data?.image}
                      alt="Product Photo"
                      width={60}
                      height={60}
                      className="w-full"
                    />
                  </div>
                  {/* -Title rating and mobile v-- */}
                  <div>
                    <div className="flex justify-between w-full">
                      <h3 className="line-clamp-1 md:line-clamp-2 text-[16px] font-medium">
                        {data.title}
                      </h3>
                      <button className="flex justify-end md:hidden">
                        <IconX />
                        {""}
                      </button>
                    </div>
                    <div className="flex items-center mt-1">
                      {[...Array(data.rating)].map((_, starIndex) => (
                        <div key={starIndex}>
                          <IconStar
                            width={14}
                            height={14}
                            fill="currentColor"
                            className="text-[#E73C17]"
                          />
                        </div>
                      ))}
                      <span>({data?.rating}.0)</span>
                    </div>
                    <div className="flex justify-between md:hidden mt-2">
                      <div className="flex items-center gap-2 mb-4">
                        <button className="border p-1 rounded-full">
                          {""}
                          <IconMinus width={14} height={14} />
                        </button>
                        <span>{data?.availableProduct}</span>
                        <button className="border p-1 rounded-full">
                          {""}
                          <IconPlus width={14} height={14} />
                        </button>
                        <span className="text-[12px]">x</span>
                        <span>{data?.price} QAR</span>
                      </div>
                      <span className="font-bold">
                        {/* //Total Amount */}
                        $300
                      </span>
                    </div>
                  </div>
                </div>
                {/* ==Price== */}
                <div className="hidden md:block">
                  <span>Unite Price</span>
                  <span className="main-text-color flex">
                    {data.price} <small>QAR</small>
                  </span>
                </div>
                {/* ==Product increase decrease== */}
                <div className="hidden md:block">
                  {/* ==Product add & minus== */}
                  <div className="flex gap-3 items-center">
                    <button className="border border-black border-opacity-20 rounded-full p-2">
                      <IconMinus width={14} height={14} />
                      {""}
                    </button>
                    <span>{data.availableProduct}</span>
                    <button className="border border-black border-opacity-20 rounded-full p-2">
                      <IconPlus width={14} height={14} />
                      {""}
                    </button>
                  </div>
                </div>
                {/* ==Subtotal== */}
                <div className="hidden md:block">
                  <p>Subtotal Price</p>
                  <span className="main-text-color font-semibold">
                    1330 QAR
                  </span>
                </div>
                {/* ==Delete Icon== */}
                <div className="hidden md:block">
                  <button className="flex justify-end">
                    <IconX />
                    {""}
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* -Price Range- */}
          <div className="mt-5">
            <div className="mb-5">
              <input
                title="Price Range"
                id="default-range"
                type="range"
                value="50"
                className="w-full h-2  rounded-lg appearance-none cursor-pointer main-bg-color"
              />
            </div>
            <div>
              {[3000].length > 0 ? (
                <p className="">
                  Spend <b className="main-text-color">3000 QAR</b> more to
                  reach <b className="font-medium">FREE SHIPPING!</b>
                </p>
              ) : (
                <p className="text-center flex gap-1 items-center justify-center text-[16px]">
                  <span className="border rounded-full p-1 text-fuchsia-500 border-fuchsia-500">
                    <IconCheck width={15} height={15} />
                  </span>
                  Congratulations! You’ve got free shipping.
                </p>
              )}
            </div>
          </div>
        </div>
        {/* --Cart Total-- */}
        <div className="w-full h-full md:max-w-[438px] border rounded-lg">
          <h5 className="text-[16px] md:text-[18px] font-medium pl-6 py-5 border-b">
            Cart Total
          </h5>
          <ul className="px-5 md:px-7">
            {[
              { label: "Sub Total", amount: 1500 },
              { label: "Shipping", amount: 15 },
              { label: "Discount", amount: -15, borderBottom: true },
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
              1500.00 <small>QAR</small>
            </span>
          </div>
          <div className="flex items-center justify-center px-5 mb-5">
            <Link
              href="/information"
              className="flex items-center justify-center main-bg-color w-full py-2 text-white rounded-lg"
            >
              <span>Proceed To Checkout</span>
              <span>
                <IconArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </div>
      {/* --Continue Shopping Link- */}
      <div className="hidden md:block mt-12">
        <Link
          href="/"
          className="items-center p-2 border border-black border-opacity-15 rounded-lg inline-flex gap-1"
        >
          <span>
            <IconArrowLeft />
          </span>
          <span>Continue Shopping</span>
        </Link>
      </div>
    </div>
  );
};

export default CartView;
