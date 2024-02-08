import { wishlistProduct } from "@/constants";
import {
  IconBolt,
  IconCheck,
  IconEye,
  IconShoppingBag,
  IconShoppingCart,
  IconTrashX,
} from "@tabler/icons-react";
import Image from "next/image";
import React from "react";
import WishlistQuickOrderBTNModal from "./WishlistQuickOrderBTNModal";
import ProductViewModal from "./ProductViewModal";
import ExtraDiscountModal from "./ExtraDiscountModal";
import ProductViewGlobalModal from "../UI/modal/ProductViewGlobalModal";

const WishlistPageData = () => {
  return (
    <div className="max-w-[1280px] mx-auto">
      <h2 className="text-black text-opacity-80 text-xl md:text-3xl md:mb-10 mb-3 md:px-0">
        My Wishlist
      </h2>
      <div className="bg-[#F8F8F8] py-3 pl-5 hidden justify-between  md:wishlist-data">
        <h6>Product Name</h6>
        <h6 className="flex items-center justify-center">Price</h6>
        <h6>Stock Status</h6>
        <h6 className="flex items-center justify-center">Action</h6>
      </div>
      <div className="">
        {wishlistProduct.map((data) => (
          <div
            key={data._id}
            className="flex md:wishlist-data items-center md:justify-between border-b py-5 transition duration-300 ease-in-out hover:bg-gray-100"
          >
            {/* ==Image, Text and Mobile V== */}
            <div className="main-div flex gap-5">
              <button className="hidden md:block text-black text-opacity-50">
                {""}
                <IconTrashX width={24} height={24} />
              </button>

              <div className="flex items-center justify-center max-h-16 w-full max-w-16 p-2 border rounded-md">
                <Image
                  src={data?.image}
                  alt="Product Image"
                  width={55}
                  height={55}
                  className="w-full h-full"
                />
              </div>

              <div>
                <div className="flex justify-between w-full">
                  <h3 className="line-clamp-1 md:line-clamp-2 text-[16px] font-medium">
                    {data.title}
                  </h3>
                  <button className="flex justify-end md:hidden text-black text-opacity-50">
                    <IconTrashX className=" text-rose-700" />
                    {""}
                  </button>
                </div>
                <p>{data.brandName}</p>
                <div className="flex justify-between md:hidden">
                  <div>
                    <span className="main-text-color pr-2">
                      {" "}
                      {data.price} <small>QAR</small>
                    </span>
                    |
                    <small className="text-[#03A609] pl-2">
                      {data?.availableProduct} In stock
                    </small>
                  </div>
                  <button className="flex items-center text-sm text-black text-opacity-70 py-2 px-[10px] border border-black border-opacity-10 rounded-md">
                    <span className="">
                      <IconShoppingCart width={16} height={16} />
                    </span>
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
            {/* ==Price== */}
            <div className="hidden md:flex items-center justify-center">
              <span className="main-text-color">
                {data.price} <small>QAR</small>
              </span>
            </div>
            {/* ==Stock Status== */}
            <div className="hidden md:block">
              {/* ==Product View and Add to Cart== */}
              <div className="flex items-center gap-10">
                <p
                  className={`${
                    data.availableProduct ? "text-[#03A609]" : "text-[#E73C17]"
                  }`}
                >
                  {data.availableProduct ? (
                    <span className={`flex `}>
                      <IconCheck /> In stock
                    </span>
                  ) : (
                    <span>Out of stock</span>
                  )}
                </p>

                <div className="flex items-center gap-3">
                  <ProductViewGlobalModal />
                  <button className="border border-[#F2F2F2] rounded-full p-2.5 text-black text-opacity-50">
                    {""} <IconShoppingBag width={20} height={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* ==Action== */}
            <div className="hidden md:flex items-center justify-center ">
              <WishlistQuickOrderBTNModal />
              {/* <ExtraDiscountModal /> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPageData;
