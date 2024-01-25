import { IconChevronRight, IconShoppingBag } from "@tabler/icons-react";
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
          <div className="menu p-4 w-full md:max-w-[430px] h-screen  text-base-content bg-white relative">
            {/* Sidebar content here */}
            <label
              htmlFor="my-drawer-cart"
              aria-label="close sidebar"
              className="-mb-6 -ml-6 bg-white shadow-lg p-1 rounded-full w-7 h-7 flex justify-center items-center"
            >
              <IconChevronRight />
            </label>
            <h3 className="text-center text-black text-[20px] font-medium border-b pb-4">
              Wishlist
            </h3>
            <div className="bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
