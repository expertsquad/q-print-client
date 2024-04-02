"use client";
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
import { imageUrl } from "@/constants/imageUrl";
import { useDispatch } from "react-redux";
import { removeFromFavourite } from "@/redux/features/wishlist/favouriteSlice";
import noproductFound from "@/assets/empty-card-photo.svg";

const WishlistPageData = ({ products }: any) => {
  const dispatch = useDispatch();
  return (
    <div className="max-w-[1280px] mx-auto">
      <h2 className="text-black text-opacity-80 text-xl md:text-3xl md:mb-10 mb-3 md:px-0">
        My Wishlist
      </h2>
      {products?.length ? (
        <>
          <div className="bg-[#F8F8F8] py-3 pl-5 hidden justify-between  md:wishlist-data">
            <h6>Product Name</h6>
            <h6 className="flex items-center justify-center">Price</h6>
            <h6>Stock Status</h6>
            <h6 className="flex items-center justify-center">Action</h6>
          </div>
          <div className="">
            {products?.map((product: any) => (
              <div
                key={product._id}
                className="flex md:wishlist-data items-center md:justify-between border-b py-5 transition duration-300 ease-in-out hover:bg-gray-100"
              >
                {/* ==Image, Text and Mobile V== */}
                <div className="main-div flex gap-5">
                  <button
                    onClick={() => dispatch(removeFromFavourite(product))}
                    className="hidden md:block text-black text-opacity-50"
                  >
                    {""}
                    <IconTrashX width={24} height={24} />
                  </button>

                  <div className="flex items-center justify-center max-h-16 w-full max-w-16 p-2 border rounded-md">
                    <Image
                      src={`${imageUrl}${product?.productPhotos?.[1]}`}
                      alt="Product Image"
                      width={55}
                      height={55}
                      className="w-full h-full"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between w-full">
                      <h3 className="line-clamp-1 md:line-clamp-2 text-[16px] font-medium">
                        {product?.productName}
                      </h3>
                      <button className="flex justify-end md:hidden text-black text-opacity-50">
                        <IconTrashX />
                        {""}
                      </button>
                    </div>
                    <p>{product?.brand?.brandName}</p>
                    <div className="flex justify-between md:hidden">
                      <div>
                        <span className="main-text-color pr-2">
                          {" "}
                          {product?.defaultVariant?.discountedPrice}{" "}
                          <small>QAR</small>
                        </span>
                        |
                        <small className="text-[#03A609] pl-2">
                          {product?.defaultVariant?.inStock} In stock
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
                    {product?.defaultVariant?.discountedPrice}{" "}
                    <small>QAR</small>
                  </span>
                </div>
                {/* ==Stock Status== */}
                <div className="hidden md:block">
                  {/* ==Product View and Add to Cart== */}
                  <div className="flex items-center gap-10">
                    <p
                      className={`${
                        product?.defaultVariant?.inStock
                          ? "text-[#03A609]"
                          : "text-[#E73C17]"
                      }`}
                    >
                      {product?.defaultVariant?.inStock ? (
                        <span className={`flex `}>
                          <IconCheck /> In stock
                        </span>
                      ) : (
                        <span>Out of stock</span>
                      )}
                    </p>

                    <div className="flex items-center gap-3">
                      <ProductViewGlobalModal product={product} />
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
        </>
      ) : (
        <div className="flex flex-col gap-5 items-center justify-center min-h-[420px]">
          <Image
            src={noproductFound}
            width={130}
            height={130}
            alt="No Products Found"
          />
          <p className="">No product added</p>
        </div>
      )}
    </div>
  );
};

export default WishlistPageData;
