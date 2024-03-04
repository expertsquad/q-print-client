"use client";
import GetDiscountRange from "@/components/ProductView/GetDiscountRange";
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
import React, { useState } from "react";

const CartView = () => {
  const [cartProducts, setCartProducts] = useState(cartProductsData);

  // Function to handle item deletion
  const handleDeleteItem = (id: any) => {
    // Filter out the item with the specified ID
    const updatedCart = cartProducts.filter((item) => item._id !== id);
    // Update the state of the cart with the new array
    setCartProducts(updatedCart);
  };
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
          <div className=" border rounded-lg px-2 md:px-3">
            {cartProducts.map((data) => (
              <div
                key={data._id}
                className="flex md:view-cart-product-data border-b pt-5 md:py-5 transition duration-300 ease-in-out hover:bg-gray-100"
              >
                {/* ==Image, Text and Mobile V== */}
                <div className="main-div flex gap-5">
                  <div className="flex items-center justify-center max-h-16 w-full max-w-16 p-2 border rounded-md">
                    <Image
                      src={data?.image}
                      alt="Product Image"
                      width={55}
                      height={55}
                      className="w-full h-full"
                    />
                  </div>
                  {/* -Title rating and mobile v-- */}
                  <div>
                    <div className="flex items-center justify-between w-full">
                      <h3 className="line-clamp-1 md:line-clamp-2 text-[15px] font-medium">
                        {data.title}
                      </h3>
                      <button className="flex justify-end md:hidden text-black text-opacity-70">
                        <IconX width={20} height={20} />
                        {""}
                      </button>
                    </div>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, starIndex) => (
                        <span
                          key={starIndex}
                          className={`
                          ${
                            starIndex < data.rating
                              ? "text-[#E73C17]"
                              : "text-[#ccc] bg-transparent"
                          }
                        `}
                        >
                          <IconStar
                            fill={
                              starIndex < data?.rating
                                ? "#E73C17"
                                : "currentColor"
                            }
                            width={14}
                            height={14}
                          />
                        </span>
                      ))}
                      <span className="text-[15px] ml-1.5">
                        ({data?.rating}.0)
                      </span>
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
                <div className="hidden md:block md:ml-3">
                  <span className="text-[15px]">Unite Price</span>
                  <span className="main-text-color flex items-center gap-1 text-[14px]">
                    {data.price} <small>QAR</small>
                  </span>
                </div>
                {/* ==Product increase decrease== */}
                <div className="hidden md:block">
                  {/* ==Product add & minus== */}
                  <div className="flex gap-3 items-center justify-center">
                    <button className="border border-black border-opacity-20 rounded-full p-1">
                      <IconMinus width={14} height={14} />
                      {""}
                    </button>
                    <span className="text-[15px]">{data.availableProduct}</span>
                    <button className="border border-black border-opacity-20 rounded-full p-1">
                      <IconPlus width={14} height={14} />
                      {""}
                    </button>
                  </div>
                </div>
                {/* ==Subtotal== */}
                <div className="hidden md:block">
                  <p className="text-[15px]">Subtotal Price</p>
                  <span className="main-text-color font-semibold text-[15px]">
                    1330 QAR
                  </span>
                </div>
                {/* ==Delete Icon== */}
                <div className="hidden md:block">
                  <button className="flex justify-center text-black text-opacity-50">
                    <IconX
                      width={22}
                      height={22}
                      onClick={() => handleDeleteItem(data._id)}
                    />
                    {""}
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* -Price Range- */}
          <div className="mt-5">
            <div className="mb-5">
              <GetDiscountRange />
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
