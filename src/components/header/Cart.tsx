import { cartProductsData } from "@/constants";
import {
  IconArrowLeft,
  IconBolt,
  IconCheck,
  IconChevronRight,
  IconMinus,
  IconPlus,
  IconShoppingBag,
  IconShoppingCart,
  IconShoppingCartCog,
  IconX,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import GetDiscountRange from "../ProductView/GetDiscountRange";

const Cart = () => {
  return (
    <div>
      <div className="drawer drawer-end no-scrollbar">
        <input id="my-drawer-cart" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content no-scrollbar">
          {/* //Drawer Cancel BTN// */}
          <div className="flex items-start  gap-1">
            <label htmlFor="my-drawer-cart" className="cursor-pointer">
              <span className="text-black text-opacity-50">
                <IconShoppingBag width={24} height={24} />
              </span>
            </label>
            <label
              htmlFor="my-drawer-cart"
              className="drawer-button hidden md:block cursor-pointer text-black text-opacity-60 "
            >
              Cart
            </label>
          </div>
        </div>
        {/* ==Main Div */}
        <div className="drawer-side z-50 no-scrollbar">
          <label
            htmlFor="my-drawer-cart"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu-vertical p-4 w-full md:max-w-[430px] h-screen  text-base-content bg-white relative">
            {/* Sidebar content here */}
            <label
              htmlFor="my-drawer-cart"
              aria-label="close sidebar"
              className="-mb-6 -ml-5 bg-white p-1 rounded-full w-7 h-7 flex justify-center items-center"
            >
              <span className="hidden md:block">
                <IconChevronRight />
              </span>
              <span className="block md:hidden">
                <IconArrowLeft />
              </span>
            </label>
            <h3 className="text-center text-black text-[20px] font-medium border-b pb-4 mb-5">
              My Cart
            </h3>
            {/* --data container-- */}
            <div className="flex flex-col overflow-scroll no-scrollbar">
              {cartProductsData.map((data: any) => (
                <div
                  className="flex gap-5 border-b mb-5 transition duration-300 ease-in-out hover:bg-gray-100"
                  key={data._id}
                >
                  <div className="flex items-center justify-center max-h-16 w-full max-w-16 p-2 border rounded-md">
                    <Image
                      src={data?.image}
                      alt="Product Image"
                      width={55}
                      height={55}
                      // style={{ objectFit: "contain" }}
                      loading="lazy"
                      className="w-full h-full"
                    />
                  </div>
                  <div>
                    {/* Title and Delete BTN */}
                    <div className="flex items-center gap-3">
                      <p className="text-black text-opacity-90 text-[16px] line-clamp-1">
                        {data?.title}
                      </p>
                      <span className="cursor-pointer text-black text-opacity-70">
                        <IconX width={20} height={20} />
                      </span>
                    </div>
                    {/* // */}
                    <div className="my-2">
                      <p className="text-black text-opacity-50 text-[12px]">
                        {data?.brandName}
                      </p>
                    </div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <button className="border p-1 rounded-full text-black text-opacity-70 text-[16px]">
                          {""}
                          <IconMinus width={14} height={14} />
                        </button>
                        <span>{data?.availableProduct}</span>
                        <button className="border p-1 rounded-full text-black text-opacity-70 text-[16px]">
                          {""}
                          <IconPlus width={14} height={14} />
                        </button>
                        <span className="text-[12px]">x</span>
                        <span>{data?.price} QAR</span>
                      </div>
                      <b className="main-text-color">{data.price} QAR</b>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* --fixed data container-- */}
            <div className="border-t border-t-black border-opacity-10">
              {/* --Subtotal & Price-- */}
              <div className="flex items-center justify-between my-5">
                <p className="">Subtotal</p>
                <span>
                  1500.00<small className="uppercase">qar</small>
                </span>
              </div>
              {/* --Shipping & Price-- */}
              <div className="flex items-center justify-between border-b border-b-black border-opacity-10">
                <p className="mb-5">Shipping</p>
                <span>
                  19.30<small className="uppercase">qar</small>
                </span>
              </div>
              {/* --Total & Price-- */}
              <div className="flex items-center justify-between my-5">
                <p className="font-bold text-[16px]">Total</p>
                <span className="font-bold text-[16px]">
                  1500.00<small className="uppercase">qar</small>
                </span>
              </div>
              {/* --Price range and Free shipping-- */}
              <div className="mb-5">
                <div className="mb-5">
                  {/* <input
                    title="Price Range"
                    id="default-range"
                    type="range"
                    value="50"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                  /> */}
                  <GetDiscountRange />
                </div>
                <div>
                  {[3000].length < 0 ? (
                    <p className="text-center">
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
              {/* --Checkout & Quick Order btn-- */}
              <div className="flex justify-between items-center gap-5">
                <Link
                  href="/cartView"
                  className="border w-full py-2 flex gap-1.5 items-center justify-center rounded-lg text-black bg-black bg-opacity-15 hover:main-bg-color hover:text-white"
                >
                  <IconShoppingCartCog />
                  CHECK OUT
                </Link>
                <button className="border w-full py-2 flex gap-1.5 items-center justify-center main-bg-color text-white rounded-lg">
                  <IconBolt />
                  ORDER NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
