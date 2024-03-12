"use client";
import GetDiscountRange from "@/components/ProductView/GetDiscountRange";
import ReviewRating from "@/components/shared/ReviewRating";
import { imageUrl } from "@/constants/imageUrl";
import {
  addToCart,
  removeFromCart,
  removeOneFromCart,
} from "@/redux/features/cart/cartSlice";
import { useAppSelector } from "@/redux/hook";
import {
  IconArrowLeft,
  IconArrowRight,
  IconCheck,
  IconMinus,
  IconPlus,
  IconX,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import noproductFound from "@/assets/empty-card-photo.svg";

const CartView = () => {
  const { products } = useAppSelector((state) => state.cart);
  const dispatch = useDispatch();

  // <== Calculate Subtotal, Total , and Shipping || Discount ==>
  const subTotal = products?.reduce((total: number, product: any) => {
    return total + product?.defaultVariant?.discountedPrice * product?.quantity;
  }, 0);
  const discountPrice = products?.reduce((total: number, product: any) => {
    return (
      total +
      product?.defaultVariant?.sellingPrice -
      product?.defaultVariant?.discountedPrice
    );
  }, 0);

  const shippingCharge = 80;
  // const discountPrice = 100;
  // const calculateTotal = subTotal + shippingCharge;
  const calculateTotalWithDiscount = subTotal + shippingCharge - discountPrice;

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
            <div>
              {/* -Product data- */}
              <div className=" border rounded-lg ">
                {products?.map((product: any) => (
                  <div
                    key={product._id}
                    className="flex md:view-cart-product-data border-b pt-5 md:py-5 transition duration-300 ease-in-out hover:bg-gray-100 px-2 md:px-3"
                  >
                    {/* ==Image, Text and Mobile V== */}
                    <div className="main-div flex gap-5">
                      <div className="flex items-center justify-center max-h-16 w-full max-w-16 p-2 border rounded-md">
                        <Image
                          src={`${imageUrl}${product?.productPhotos?.[1]}`}
                          alt="Product Image"
                          width={55}
                          height={55}
                          className="w-full h-full"
                        />
                      </div>
                      {/* -Title rating and mobile v-- */}
                      <div>
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

                        <ReviewRating rating={3} />
                        <div className="flex justify-between md:hidden mt-2">
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
                            <span>{product?.quantity}</span>
                            <button
                              onClick={() => dispatch(addToCart(product))}
                              className="border p-1 rounded-full"
                            >
                              {""}
                              <IconPlus width={14} height={14} />
                            </button>
                            <span className="text-[12px]">x</span>
                            <span>
                              {product?.defaultVariant?.discountedPrice} QAR
                            </span>
                          </div>
                          <span className="font-bold bg-slate-400">
                            {/* //Total Amount */}${subTotal}
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* ==Price== */}
                    <div className="hidden md:block md:ml-3">
                      <span className="text-[15px]">Unite Price</span>
                      <span className="main-text-color flex items-center gap-1 text-[14px]">
                        {product?.defaultVariant?.discountedPrice}{" "}
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
                        <span className="text-[15px]">{product?.quantity}</span>
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
                        {product?.defaultVariant?.discountedPrice *
                          product?.quantity}{" "}
                        QAR
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
                  <GetDiscountRange priceRange={subTotal} />
                </div>
                <div>
                  {calculateTotalWithDiscount < 3000 ? (
                    <p className="">
                      Spend <b className="main-text-color">3000 QAR</b> more to
                      reach <b className="font-medium">FREE SHIPPING!</b>
                    </p>
                  ) : (
                    <p className=" flex gap-1 items-center justify-start text-[16px]">
                      <span className="border rounded-full p-1 text-fuchsia-500 border-fuchsia-500">
                        <IconCheck width={15} height={15} />
                      </span>
                      Congratulations! You’ve got free shipping.
                    </p>
                  )}
                </div>
              </div>
            </div>
            {/* --Cart Total-- */}
            <div className="w-full h-full md:max-w-[438px] border rounded-lg">
              <h5 className="text-[16px] md:text-[18px] font-medium pl-6 py-5 border-b">
                Cart Total
              </h5>
              <ul className="px-5 md:px-7">
                {[
                  { label: "Sub Total", amount: subTotal },
                  { label: "Shipping", amount: shippingCharge },
                  {
                    label: "Discount",
                    amount: -discountPrice,
                    borderBottom: true,
                  },
                ].map(({ label, amount, borderBottom }, index, array) => (
                  <li
                    key={index}
                    className={`flex justify-between mt-5 text-[#5F6C72] ${
                      borderBottom ? "border-b" : ""
                    } ${
                      index === array?.length - 1 && amount === -15
                        ? "main-text-color"
                        : ""
                    }`}
                  >
                    {label}{" "}
                    <span>
                      {amount} <small>QAR</small>
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between px-5 md:px-7 mt-5 mb-2">
                <h6 className="font-medium">Total</h6>
                <span className="text-[18px] font-medium main-text-color">
                  {calculateTotalWithDiscount} <small>QAR</small>
                </span>
              </div>
              <div className="flex items-center justify-center px-5 mb-5">
                <Link
                  href="/your-information"
                  className="flex items-center justify-center main-bg-color w-full py-2 text-white rounded-lg"
                >
                  <span>Proceed To Checkout</span>
                  <span>
                    <IconArrowRight />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center">
          <Image
            src={noproductFound}
            width={130}
            height={130}
            alt="No Products Found"
          />
        </div>
      )}
      {/* --Continue Shopping Link-- */}
      <div className="hidden md:block my-12">
        <Link
          href="/"
          className="items-center p-2 border border-black border-opacity-15 rounded-lg inline-flex gap-1"
        >
          <span>
            <IconArrowLeft />
          </span>
          <span>Continue Shopping</span>
        </Link>
      </div>
    </div>
  );
};

export default CartView;
