"use client";
import {
  IconHeart,
  IconMinus,
  IconPlus,
  IconShoppingBag,
  IconShoppingCart,
  IconStar,
} from "@tabler/icons-react";
import Image from "next/image";
import { imageUrl } from "@/constants/imageUrl";
import { useDispatch } from "react-redux";

import { useAppSelector } from "@/redux/hook";
import ColorPickUp from "../ProductView/ColorPickUp";
import GetDiscountRange from "../ProductView/GetDiscountRange";
import {
  addToCart,
  removeOneFromCart,
} from "@/redux/features/cart/productCartSlice";
import { useState } from "react";
import SingleQuickOrder from "../quick-order/SingleQuickOrder";
import { addToFavourite } from "@/redux/features/wishlist/favouriteCartSlice";

const QuickViewDescription = ({ product }: any) => {
  console.log(product?._id, "Quick view modal");
  const dispatch = useDispatch();
  const { products } = useAppSelector((state) => state.productCartSlice);
  const [orderQuantity, setOrderQuantity] = useState(1);

  const productQuantity = products?.map((product: any) => {
    return product?.quantity;
  });

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0]);
  const handleSelectVariant = (variant: any) => {
    setSelectedVariant(variant);
  };

  // <== Handle Add Product In Cart ==>
  const handleAddToCart = (event: React.MouseEvent, product: any) => {
    event.stopPropagation();
    dispatch(
      addToCart({
        ...product,
        ...product?.variants[0],
        price: selectedVariant?.discountedPrice
          ? selectedVariant?.discountedPrice
          : selectedVariant?.sellingPrice,
        orderQuantity: orderQuantity,
        variantName: selectedVariant?.variantName,
        productId: product?._id,
      })
    );
  };

  // <== Handle Add Product In Favourite ==>
  const handleAddToFavourite = (event: React.MouseEvent, product: any) => {
    event.stopPropagation();
    dispatch(
      addToFavourite({
        ...product,
        ...product?.variants[0],
        price: selectedVariant?.discountedPrice
          ? selectedVariant?.discountedPrice
          : selectedVariant?.sellingPrice,
        variantName: selectedVariant?.variantName,
        inStock: product?.variants[0].inStock,
      })
    );
  };

  return (
    <section className="product-description">
      <h2 className="[font-size:_clamp(16px,5vw,20px)] text-wrap mb-5 line-clamp-2">
        {product?.productName}
      </h2>
      <div className="flex items-center mb-5">
        {product?.data?.brandPhoto ? (
          <div className="w-10 h-10 shrink-0 relative">
            <Image
              src={`${imageUrl}${product?.brand?.brandPhoto}`}
              fill
              sizes="(max-width: 80px) 10vw, (max-width: 100px) 10vw, 15vw"
              alt="Brand Photo"
              className="w-full h-full top-0 left-0 object-contain"
            />
          </div>
        ) : (
          <div className="skeleton w-10 h-6"></div>
        )}
        <h6 className="text-[16px] text-black opacity-60 mr-5 ml-1">
          {product?.brand?.brandName}
        </h6>
        <IconStar
          fill="currentColor"
          width={18}
          height={18}
          className="text-[#FF8A00] mr-1"
        />
        <p className="text-black-opacity-50 text-[16px]">
          {product?.averageRating} <span>({product?.totalReview} people)</span>
        </p>
      </div>
      <div className="flex items-center mb-5">
        <p className="[font-size:_clamp(13px,5vw,14px)] mr-3 whitespace-nowrap">
          Category:{" "}
          <span className="text-black-opacity-60 whitespace-nowrap">
            {product?.category?.categoryName}
          </span>
        </p>{" "}
        |
        <button
          onClick={(event: React.MouseEvent) =>
            handleAddToFavourite(event, product)
          }
          className="flex items-center gap-2 ml-3 text-black-opacity-60 [font-size:_clamp(13px,5vw,14px)] whitespace-nowrap"
        >
          <IconHeart className="text-[#E73C17]" />
          Add To Wishlist
        </button>
      </div>
      <div className="mb-5 flex">
        <ColorPickUp
          variants={product?.variants}
          onSelectVariant={handleSelectVariant}
        />
      </div>
      <div className="">
        <div className="flex items-center flex-wrap">
          <h3 className="main-text-color [font-size:_clamp(20px,5vw,26px)] font-semibold mr-2">
            {selectedVariant?.discountedPrice}{" "}
            <small className="uppercase">qar</small>
          </h3>
          <del className="text-[#B3B3B3] [font-size:_clamp(14px,5vw,18px)] mr-5">
            {selectedVariant?.sellingPrice} QAR
          </del>
          <span className="[font-size:_clamp(14px,5vw,16px)] text-red-500 bg-gradient-to-r from-pink-50 to-purple-50 py-1 px-3 rounded-md">
            {selectedVariant?.discountPercentage}% OFF
          </span>
        </div>

        <GetDiscountRange />

        {/* == Bulk Order == */}
        <div className="my-3 whitespace-nowrap text-black-opacity-60">
          <p>
            Buy{" "}
            <span className="font-semibold main-text-color">
              {product?.bulk?.minOrder}
            </span>{" "}
            item to get more{" "}
            <span className="font-semibold text-black">
              {product?.bulk?.discount} extra!
            </span>
          </p>
        </div>
        {/* == Item increase & decrease fn == */}
        <div className="flex items-center gap-5 mb-5">
          <div className="border border-gray-200 flex items-center gap-2 rounded-3xl p-2">
            <button
              disabled={orderQuantity === 1 ? true : false}
              onClick={() => setOrderQuantity(orderQuantity - 1)}
              className={`p-2 bg-[#F2F2F2] rounded-full ${
                orderQuantity === 1 ? "opacity-50" : ""
              }`}
            >
              {""}
              <IconMinus width={14} height={14} />
            </button>
            <span>{orderQuantity}</span>
            <button
              onClick={() => setOrderQuantity(orderQuantity + 1)}
              className={`p-2 bg-[#F2F2F2] rounded-full`}
            >
              {""}
              <IconPlus width={14} height={14} />
            </button>
          </div>
          <div className="w-full">
            <button
              onClick={(event: React.MouseEvent) =>
                handleAddToCart(event, product)
              }
              className="w-full flex justify-center items-center gap-2 bg-slate-400 main-text-color border border-fuchsia-700 py-2 rounded-lg text-fuchsia-700 font-bold"
            >
              <IconShoppingCart
                className="main-text-color"
                width={20}
                height={20}
                stroke={2}
              />
              Add To Cart
            </button>
          </div>
        </div>
        {/* == Quick order | Buy now button == */}
        <div className="mt-5 flex items-center justify-between gap-5">
          <div className="w-full">
            {/* <WishlistQuickOrderBTNModal /> */}
            <SingleQuickOrder
              product={product}
              productId={product?._id}
              variantPrice={
                selectedVariant?.discountedPrice
                  ? selectedVariant?.discountedPrice
                  : selectedVariant?.sellingPrice
              }
              variantName={selectedVariant?.variantName}
            />
          </div>
          <button className="flex items-center justify-center gap-2 text-white main-bg-color  py-2.5 rounded-lg w-full text-sm">
            {""}
            <IconShoppingBag width={18} stroke={2} height={18} />
            BUY NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default QuickViewDescription;
