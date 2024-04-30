"use client";
import {
  IconBolt,
  IconMinus,
  IconPlus,
  IconShoppingCart,
} from "@tabler/icons-react";
import React from "react";
import SingleQuickOrder from "../quick-order/SingleQuickOrder";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/cart/productCartSlice";

const SpecificationCard = ({ specificationCard }: any) => {
  console.log(specificationCard?._id, "asldkfalsdk");
  const dispatch = useDispatch();

  // <== Handle Add Product In Cart ==>
  const handleAddToCart = (event: React.MouseEvent, product: any) => {
    event.stopPropagation();
    dispatch(
      addToCart({
        ...product,
        ...product?.variants[0],
        price: product?.variants[0].discountedPrice
          ? product?.variants[0].discountedPrice
          : product?.variants[0].sellingPrice,
        orderQuantity: 1,
        productId: product?._id,
      })
    );
  };

  return (
    <div className="sticky top-0 md:max-w-[340px] md:max-h-[380px] hidden md:block shadow-2xl p-6 rounded-lg">
      <h2 className="md:text-[16px] text-wrap text-black opacity-80">
        {specificationCard?.productName}
      </h2>
      <hr className="bg-black opacity-10 h-[2px] my-4 mb-6" />
      <span className="[font-size:_clamp(14px,5vw,16px)] text-red-500 bg-gradient-to-r from-pink-50 to-purple-50 py-1 px-3 rounded-md">
        {specificationCard?.variants[0]?.discountPercentage}% OFF
      </span>
      <div className="flex items-baseline flex-wrap my-6 text-wrap">
        <h3 className="main-text-color [font-size:_clamp(17px,3vw,20px)] font-semibold mr-2">
          {specificationCard?.variants[0]?.discountedPrice}
          <small>QAR</small>
        </h3>
        <del className="text-[#B3B3B3] [font-size:_clamp(14px,3vw,15px)] mr-5">
          {specificationCard?.variants[0]?.sellingPrice} QAR
        </del>
      </div>
      <div className="flex items-center gap-5 mb-6">
        <div className="border border-gray-200 flex items-center gap-2 rounded-3xl p-2">
          <button className="p-2 bg-[#F2F2F2] rounded-full">
            {""}
            <IconMinus width={14} height={14} />
          </button>
          <span>{0}</span>
          <button className="p-2 bg-[#f2f2f2] rounded-full">
            {""}
            <IconPlus width={14} height={14} />
          </button>
        </div>
        <div>
          <SingleQuickOrder
            productId={specificationCard?._id}
            btnStyle="py-3"
          />
        </div>
      </div>
      <button
        onClick={(event: React.MouseEvent) =>
          handleAddToCart(event, specificationCard)
        }
        className="w-full flex gap-1 justify-center items-center main-bg-color py-2 rounded-lg text-white"
      >
        <IconShoppingCart width={20} stroke={2} height={20} className="" />
        Add To Cart
      </button>
    </div>
  );
};

export default SpecificationCard;
