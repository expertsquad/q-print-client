"use client";
import React from "react";
import ProductImageSlide from "./ProductImageSlide";
import AddToCartButton from "../UI/btn/AddToCartButton";

import ReviewRating from "../shared/ReviewRating";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { useRouter } from "next/navigation";

interface IProductImageSlideProps {
  product: IProduct;
}

interface IProduct {
  images: string[];
  name: string;
  brandName: string;
  price: number;
  discount: number;
  rating: number;
}

const ProductCard = ({ product }: any) => {
  // console.log(product, "product");
  const dispatch = useDispatch();
  const router = useRouter();

  // <== Handle Add Product On Cart ==>
  const handleAddToCart = (event: React.MouseEvent, product: any) => {
    event.stopPropagation();
    dispatch(addToCart(product));
  };

  // <== Product View Function ==>
  const handleViewProduct = (e: any) => {
    e.stopPropagation();
    router.push(`/product/${product?._id}`);
  };

  return (
    <div
      onClick={handleViewProduct}
      className=" border-[1px] hover:border-fuchsia-700 rounded-lg p-5 group shrink-0 "
    >
      <div>
        <ProductImageSlide product={product} />
      </div>

      <div className="mt-4 pt-4 border-t ">
        <h3 className="[font-size:_clamp(0.7em,4vw,1em)] line-clamp-2 mb-2">
          {product?.productName}
        </h3>
        <p className=" text-gray-500 [font-size:_clamp(0.5em,4vw,0.8em)] mb-1">
          {" "}
          {product?.brand?.brandName}
        </p>

        <ReviewRating rating={3} />

        <div className="flex items-center justify-start gap-2 mb-2 whitespace-nowrap">
          <h4 className="[font-size:_clamp(0.6em,4vw,1.1em)] main-text-color font-bold">
            <strong> {product?.defaultVariant?.discountedPrice}</strong> QAR
          </h4>
          <del className="text-md text text-gray-500 [font-size:_clamp(0.5em,4vw,0.8em)] ">
            {product?.defaultVariant?.sellingPrice} QAR
          </del>
        </div>

        <AddToCartButton
          onClick={(event: React.MouseEvent) => handleAddToCart(event, product)}
        />
      </div>
    </div>
  );
};

export default ProductCard;
