import { wishlistProduct } from "@/constants";
import {
  IconChevronRight,
  IconHeart,
  IconShoppingCart,
  IconX,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WishlistAndCart = () => {
  return (
    <div>
      <div className="drawer drawer-end">
        <input
          id="my-drawer-4-wishlist"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          {/* //Drawer Cancel BTN// */}
          <div className="flex">
            <label htmlFor="my-drawer-4-wishlist" className="cursor-pointer">
              <IconHeart />
            </label>
            <label
              htmlFor="my-drawer-4-wishlist"
              className="drawer-button hidden md:block"
            >
              Wishlist
            </label>
          </div>
        </div>
        {/* ==Main Div */}
        <div className="drawer-side z-50 no-scrollbar">
          <label
            htmlFor="my-drawer-4-wishlist"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu p-4 w-full md:max-w-[430px] h-screen  text-base-content bg-slate-400 md:bg-white relative">
            {/* Sidebar content here */}
            <label
              htmlFor="my-drawer-4-wishlist"
              aria-label="close sidebar"
              className="-mb-6 -ml-6 bg-white  p-1 rounded-full w-7 h-7 flex justify-center items-center"
            >
              <IconChevronRight />
            </label>
            <h3 className="text-center text-black text-[20px] font-medium border-b pb-4 mb-7">
              Wishlist
            </h3>
            {wishlistProduct.map((data: any) => (
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
                  <p className="text-black text-opacity-50 text-[12px]">
                    {data?.brandName}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <p>
                      <b className="main-text-color">{data.price} QAR</b> |{" "}
                      <small className="text-green-500">
                        {data?.availableProduct}
                      </small>
                    </p>
                    <button className="flex items-center border py-2 px-3 rounded-lg">
                      <span>
                        <IconShoppingCart />
                      </span>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <Link
              href="/wishlist"
              className="w-full main-bg-color text-white text-center py-3 rounded-md"
            >
              View Wishlist
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistAndCart;
