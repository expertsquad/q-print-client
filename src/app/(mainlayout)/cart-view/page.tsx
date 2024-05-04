"use client";
import GetDiscountRange from "@/components/ProductView/GetDiscountRange";
import ReviewRating from "@/components/shared/ReviewRating";
import { imageUrl } from "@/constants/imageUrl";
import { useAppSelector } from "@/redux/hook";
import { IconCheck, IconMinus, IconPlus, IconX } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import noproductFound from "@/assets/empty-card-photo.svg";
import {
  addToCart,
  removeFromCart,
  removeOneFromCart,
} from "@/redux/features/cart/productCartSlice";
import CartViewTotalCard from "@/components/cart-view/CartViewTotalCard";
import ContinueShopping from "@/components/cart-view/ContinueShopping";
import MultipleQuickOrder from "@/components/quick-order/MultipleQuickOrder";
import { useGetShippingQuery } from "@/redux/features/shipping/shippinApi";

const CartView = () => {
  const { products, subTotal, total } = useAppSelector(
    (state) => state.productCartSlice
  );
  const getShipping = useGetShippingQuery("");

  const dispatch = useDispatch();

  const freeShippingMinOrderAmount =
    getShipping?.data?.data?.freeShippingMinOrderAmount;
  const shippingInsideFee = getShipping?.data?.data?.inside;

  let shippingCharge;

  if (freeShippingMinOrderAmount && subTotal) {
    if (freeShippingMinOrderAmount <= subTotal) {
      shippingCharge = 0;
    } else {
      shippingCharge = shippingInsideFee;
    }
  }
  const discountPrice = total - subTotal;
  const calculateTotalWithDiscount = subTotal + shippingCharge;

  console.log(shippingCharge);

  return (
    <div className="max-w-[1280px] mx-auto">
      <h4 className="text-black text-opacity-80 text-xl md:text-3xl mb-7 md:mb-10">
        Your Cart
      </h4>
      {products?.length > 0 ? (
        <>
          {/* --Product data, Price range, cart total container-- */}
          <div className="flex flex-col md:flex-row md:justify-between md:gap-5">
            {/* --Product data & Cart total container-- */}
            <div className="w-full md:h-auto h-[350px] overflow-y-auto">
              {/* -Product data- */}
              <div className="border rounded-lg ">
                {products?.map((product: any) => (
                  <div
                    key={product._id}
                    className="flex items-center justify-between w-full md:view-cart-product-data border-b pt-5 md:py-5 transition duration-300 ease-in-out hover:bg-gray-100 px-2 md:px-3"
                  >
                    {/* ==Image, Text and Mobile V== */}
                    <div className="flex gap-5 w-full">
                      <div className="w-[55px] h-[55px] shrink-0 relative">
                        <Image
                          src={`${imageUrl}${product?.productPhotos?.[1]}`}
                          alt="Product Image"
                          fill
                          objectFit="cover"
                          className="w-full h-full top-0 left-0 object-cover border rounded-md p-1"
                        />
                      </div>
                      {/* -Title rating and mobile v-- */}
                      <div className="w-full">
                        <div className="flex items-center justify-between w-full">
                          <h3 className="line-clamp-1 md:line-clamp-2 text-[15px] font-medium">
                            {product?.productName}
                          </h3>
                          <button
                            onClick={() => dispatch(removeFromCart(product))}
                            className="flex justify-end md:hidden text-black text-opacity-70"
                          >
                            <IconX width={20} height={20} />
                            {""}
                          </button>
                        </div>

                        <ReviewRating rating={product?.averageRating} />
                        <div className="flex justify-between gap-3 md:hidden mt-2 w-full">
                          <div className="flex items-center gap-2 mb-4">
                            <button
                              onClick={() =>
                                dispatch(removeOneFromCart(product))
                              }
                              className="border p-1 rounded-full"
                            >
                              {""}
                              <IconMinus width={14} height={14} />
                            </button>
                            <span>{product?.orderQuantity}</span>
                            <button
                              onClick={() => dispatch(addToCart(product))}
                              className="border p-1 rounded-full"
                            >
                              {""}
                              <IconPlus width={14} height={14} />
                            </button>
                            <IconX stroke={2} width={14} height={14} />
                            <span>
                              {product?.price} <small>QAR</small>
                            </span>
                          </div>
                          <span className="font-bold main-text-color">
                            ${product?.price * product?.orderQuantity}
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* ==Price== */}
                    <div className="hidden md:block md:ml-3">
                      <span className="text-[15px]">Unite Price</span>
                      <span className="main-text-color flex items-center gap-1 text-[14px]">
                        {product?.price}
                        <small>QAR</small>
                      </span>
                    </div>
                    {/* ==Product increase decrease== */}
                    <div className="hidden md:block">
                      {/* ==Product add & minus== */}
                      <div className="flex gap-3 items-center justify-center">
                        <button className="border border-black border-opacity-20 rounded-full p-1">
                          <IconMinus
                            onClick={() => dispatch(removeOneFromCart(product))}
                            width={14}
                            height={14}
                          />
                          {""}
                        </button>
                        <span className="text-[15px]">
                          {product?.orderQuantity}
                        </span>
                        <button
                          onClick={() => dispatch(addToCart(product))}
                          className="border border-black border-opacity-20 rounded-full p-1"
                        >
                          <IconPlus width={14} height={14} />
                          {""}
                        </button>
                      </div>
                    </div>
                    {/* ==Subtotal== */}
                    <div className="hidden md:block">
                      <p className="text-[15px]">Subtotal Price</p>
                      <span className="main-text-color font-semibold text-[15px]">
                        {product?.price * product?.orderQuantity} QAR
                      </span>
                    </div>
                    {/* ==Delete Icon== */}
                    <div className="hidden md:block">
                      <button
                        onClick={() => dispatch(removeFromCart(product))}
                        className="flex justify-center text-black text-opacity-50"
                      >
                        <IconX width={22} height={22} />
                        {""}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              {/* -Price Range- */}
              <div className="mt-5">
                <div className="mb-5">
                  <GetDiscountRange
                    expectedAmount={
                      getShipping?.data?.data?.freeShippingMinOrderAmount
                    }
                    totalAmount={subTotal}
                  />
                </div>
                <div>
                  {calculateTotalWithDiscount <
                  getShipping?.data?.data?.freeShippingMinOrderAmount ? (
                    <p className="">
                      Spend{" "}
                      <b className="main-text-color">
                        {getShipping?.data?.data?.freeShippingMinOrderAmount}{" "}
                        QAR
                      </b>{" "}
                      more to reach{" "}
                      <b className="font-medium">FREE SHIPPING!</b>
                    </p>
                  ) : (
                    <p className="flex gap-1 items-center justify-start text-[16px]">
                      <span className="border rounded-full p-0.5 text-fuchsia-800 border-fuchsia-800">
                        <IconCheck width={15} height={15} />
                      </span>
                      Congratulations! You’ve got free shipping.
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="w-full md:max-w-[438px] h-[390px] border px-5 rounded-lg">
              {/* == Calculate Cart Total == */}
              <CartViewTotalCard
                subTotal={subTotal}
                shippingCharge={shippingCharge}
                discountPrice={discountPrice}
                calculateTotalWithDiscount={calculateTotalWithDiscount}
              />
              {/* == Quick Orders == */}
              <div className="w-full">
                <MultipleQuickOrder products={products} subTotal={subTotal} />
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-5 items-center justify-center">
          <Image
            src={noproductFound}
            width={130}
            height={130}
            alt="No Products Found"
          />
          <p className="">No product added</p>
        </div>
      )}
      {/* == Continue Shopping ==      */}
      <ContinueShopping products={products} />
    </div>
  );
};

export default CartView;
