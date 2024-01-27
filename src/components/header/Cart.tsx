import { cartProductsData } from "@/constants";
import {
  IconArrowLeft,
  IconBolt,
  IconChevronRight,
  IconMinus,
  IconPlus,
  IconShoppingBag,
  IconShoppingCart,
  IconShoppingCartCog,
  IconX,
} from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

const Cart = () => {
  return (
    <div>
      <div className="drawer drawer-end no-scrollbar">
        <input id="my-drawer-cart" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content no-scrollbar">
          {/* //Drawer Cancel BTN// */}
          <div className="flex">
            <label htmlFor="my-drawer-cart" className="cursor-pointer">
              <IconShoppingBag />
            </label>
            <label
              htmlFor="my-drawer-cart"
              className="drawer-button hidden md:block"
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
              className="-mb-6 -ml-6 bg-white p-1 rounded-full w-7 h-7 flex justify-center items-center"
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
                <div className="flex gap-5 border-b mb-5" key={data._id}>
                  <div className="flex items-center justify-center h-[55px] w-[70px] px-1 border">
                    <Image
                      src={data?.image}
                      alt="Product Image"
                      width={66}
                      height={66}
                      style={{ objectFit: "cover" }}
                      loading="lazy"
                      className="w-full"
                    />
                  </div>
                  <div>
                    {/* Title and Delete BTN */}
                    <div className="flex items-center gap-3">
                      <h4 className="text-black text-opacity-90 text-[16px] line-clamp-2">
                        {data?.title}
                      </h4>
                      <span className="cursor-pointer">
                        <IconX />
                      </span>
                    </div>
                    {/* // */}
                    <div className="flex justify-between items-center">
                      <p className="text-black text-opacity-50 text-[12px]">
                        {data?.brandName}
                      </p>
                      <b className="main-text-color">{data.price} QAR</b>
                    </div>
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
              {/* --Checkout & Quick Order btn-- */}
              <div className="flex justify-between items-center">
                <button className="border px-5 py-2 flex items-center justify-center rounded-lg text-black bg-black bg-opacity-15">
                  <IconShoppingCartCog />
                  CHECK OUT
                </button>
                <button className="border px-5 py-2 flex items-center justify-center main-bg-color text-white rounded-lg">
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
