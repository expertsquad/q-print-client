import { wishlistProduct } from "@/constants";
import {
  IconArrowLeft,
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
      <div className="drawer drawer-end overscroll-none ">
        <input
          id="my-drawer-4-wishlist"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          {/* //Drawer Cancel BTN// */}
          <div className="flex items-start gap-1">
            <label htmlFor="my-drawer-4-wishlist" className="cursor-pointer">
              <span className="text-black text-opacity-50">
                <IconHeart width={24} height={24} />
              </span>
            </label>
            <label
              htmlFor="my-drawer-4-wishlist"
              className="drawer-button hidden md:block cursor-pointer text-black text-opacity-60
              "
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
          <div className="menu-vertical p-4 w-full md:max-w-[430px] h-screen  text-base-content bg-white relative no-scrollbar">
            {/* Sidebar content here */}
            <label
              htmlFor="my-drawer-4-wishlist"
              aria-label="close sidebar"
              className="-mb-6 -ml-5 bg-white p-1 rounded-full w-7 h-7 flex justify-center items-center"
            >
              <span className="hidden md:block text-black text-opacity-70">
                <IconChevronRight width={24} height={24} />
              </span>
              <span className="block md:hidden">
                <IconArrowLeft />
              </span>
            </label>
            <h3 className="text-center text-black text-[20px] font-medium border-b pb-4 mb-7">
              Wishlist
            </h3>
            <div className="flex flex-col overflow-scroll no-scrollbar">
              {wishlistProduct.map((data: any) => (
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
                      loading="lazy"
                      className="w-full h-full"
                    />
                  </div>
                  <div>
                    {/* Title and Delete BTN */}
                    <div className="flex items-center gap-3">
                      <h4 className="text-black text-opacity-90 text-[16px] line-clamp-1">
                        {data?.title}
                      </h4>
                      <span className="cursor-pointer text-black text-opacity-60">
                        <IconX width={20} height={20} />
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
                          {data?.availableProduct} In Stock
                        </small>
                      </p>
                      <button className="flex items-center border py-2 px-3 rounded-lg text-[12px]">
                        <span className="text-black text-opacity-70 mr-1.5">
                          <IconShoppingCart width={16} height={16} />
                        </span>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
