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
import ColorPickUp from "./ColorPickUp";
import WishlistQuickOrderBTNModal from "../WishlistPageData/WishlistQuickOrderBTNModal";
import GetDiscountRange from "./GetDiscountRange";
import { imageUrl } from "@/constants/imageUrl";
import { useDispatch } from "react-redux";
// import { addToCart, removeOneFromCart } from "@/redux/features/cart/cartSlice";
import { useAppSelector } from "@/redux/hook";
import {
  addToCart,
  removeOneFromCart,
} from "@/redux/features/cart/productCartSlice";

const ProductViewDescEtc = ({ productDesc }: any) => {
  const dispatch = useDispatch();
  const { products } = useAppSelector((state) => state.productCartSlice);

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
      })
    );
  };

  return (
    <section className="product-description">
      <h2 className="[font-size:_clamp(16px,5vw,20px)] text-wrap mb-5 line-clamp-2">
        {productDesc?.productName}
      </h2>
      <div className="flex items-center mb-5">
        <Image
          src={`${imageUrl}${productDesc?.brand?.brandPhoto}`}
          width={50}
          height={50}
          alt="Adidas Brand"
        />
        <h6 className="text-[16px] text-black opacity-60 mr-5 ml-1">
          {productDesc?.brand?.brandName}
        </h6>
        <IconStar
          fill="currentColor"
          width={18}
          height={18}
          className="text-[#FF8A00] mr-1"
        />
        <p className="text-black opacity-50 text-[16px]">
          4.8 <span>(14 people)</span>
        </p>
      </div>
      <div className="flex items-center mb-5">
        <p className="[font-size:_clamp(13px,5vw,14px)] mr-3 whitespace-nowrap">
          Category:{" "}
          <span className="text-black-opacity-60 whitespace-nowrap">
            {productDesc?.category?.categoryName}
          </span>
        </p>{" "}
        |
        <button className="flex items-center gap-2 ml-3 text-black-opacity-60 [font-size:_clamp(13px,5vw,14px)] whitespace-nowrap">
          <IconHeart className="text-[#E73C17]" />
          Add To Wishlist
        </button>
      </div>
      <div className="mb-5 flex">
        <ColorPickUp variants={productDesc?.variants} />
      </div>
      <div className="">
        <div className="flex items-center flex-wrap">
          <h3 className="main-text-color [font-size:_clamp(20px,5vw,26px)] font-semibold mr-2">
            {productDesc?.defaultVariant?.discountedPrice}{" "}
            <small className="uppercase">qar</small>
          </h3>
          <del className="text-[#B3B3B3] [font-size:_clamp(14px,5vw,18px)] mr-5">
            {productDesc?.defaultVariant?.sellingPrice} QAR
          </del>
          <span className="[font-size:_clamp(14px,5vw,16px)] text-red-500 bg-gradient-to-r from-pink-50 to-purple-50 py-1 px-3 rounded-md">
            {productDesc?.defaultVariant?.discountPercentage}% OFF
          </span>
        </div>

        <GetDiscountRange />

        <p className="my-5 text-black text-opacity-60">
          Buy{" "}
          <span className="main-text-color">
            {productDesc?.bulk?.minOrder}{" "}
          </span>
          item more to get off
          <b className="text-black"> {productDesc?.bulk?.discount} % Extra!</b>
        </p>
        {/* == Increase & Decrease fn == */}
        <div className="flex items-center gap-5 mb-5">
          <div className="border border-gray-200 flex items-center gap-2 rounded-3xl p-2">
            <button
              onClick={() => dispatch(removeOneFromCart(productDesc))}
              className="p-2 bg-[#F2F2F2] rounded-full"
            >
              {""}
              <IconMinus width={14} height={14} />
            </button>
            <span>{0}</span>
            <button
              onClick={() => dispatch(addToCart(productDesc))}
              className="p-2 bg-[#F2F2F2] rounded-full"
            >
              {""}
              <IconPlus width={14} height={14} />
            </button>
          </div>
          <div>
            <button
              onClick={(event: React.MouseEvent) =>
                handleAddToCart(event, productDesc)
              }
              className="w-56 md:w-64 lg:w-80 flex justify-center items-center gap-3 bg-slate-400 main-text-color border border-fuchsia-700 py-2 rounded-lg text-fuchsia-700"
            >
              <IconShoppingCart
                className="main-text-color"
                width={20}
                height={20}
              />
              Add To Cart
            </button>
          </div>
        </div>
        {/* //Quick order & Buy now button*/}
        <div className="mt-5 flex items-center justify-between gap-5">
          <div className="w-full">
            <WishlistQuickOrderBTNModal id={productDesc?._id} />
          </div>
          <button className="flex items-center justify-center gap-2 text-white main-bg-color  py-2 rounded-lg w-full">
            {""}
            <IconShoppingBag />
            BUY NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductViewDescEtc;
