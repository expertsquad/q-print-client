"use client";
import Link from "next/link";
import React from "react";
import { useAppSelector } from "@/redux/hook";
import Image from "next/image";
import { imageUrl } from "@/constants/imageUrl";
import { IconPlus } from "@tabler/icons-react";
import { IconMinus } from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeOneFromCart,
} from "@/redux/features/cart/productCartSlice";
import { useGetShippingQuery } from "@/redux/features/api/shipping/shippingApi";

interface ShoppingCartProps {
  handleSubmit?: any;
  btnText?: string;
  btnLink?: string;
  btnDisable?: string;
}

const ShoppingCartTotalItems = ({
  handleSubmit,
  btnText,
  btnLink,
  btnDisable,
}: ShoppingCartProps) => {
  const { products, subTotal, total } = useAppSelector(
    (state) => state.productCartSlice
  );
  const dispatch = useDispatch();

  const getShipping = useGetShippingQuery("");

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
  const calculateTotal = subTotal + shippingCharge;

  return (
    <div className=" border rounded-lg pb-5 mb-5">
      <h4 className="px-5 py-3 text-base font-medium">Shopping Items</h4>
      <div className=" border-y ">
        {/* == total product in cart section == */}
        <div className="h-[300px] overflow-y-scroll no-scrollbar">
          {products?.map((product: any) => (
            <div
              className="flex items-center gap-4 py-2 px-3 hover:bg-slate-50"
              key={product._id}
            >
              <div className="w-[48px] h-[48px] shrink-0 relative">
                <Image
                  src={`${imageUrl}${product?.productPhotos[0]}`}
                  alt="profile"
                  objectFit="cover"
                  fill
                  className="w-full h-full top-0 left-0 object-cover border-[1px] p-1 rounded-md"
                />
              </div>

              <div className="w-full">
                <span className="line-clamp-1 text-base text-black-opacity-80">
                  {product?.productName}
                </span>

                <div className="flex justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <button className="border p-0.5 rounded-full text-black text-opacity-70 ">
                      {""}
                      <IconMinus
                        onClick={() => dispatch(removeOneFromCart(product))}
                        stroke={1}
                        width={13}
                        height={13}
                      />
                    </button>
                    <span className="text-black text-opacity-70 text-base">
                      {product?.orderQuantity}
                    </span>
                    <button
                      onClick={() => dispatch(addToCart(product))}
                      className="border p-0.5 rounded-full text-black text-opacity-70 "
                    >
                      {""}
                      <IconPlus stroke={1} width={13} height={13} />
                    </button>
                    <span className="text-[12px]">x</span>
                    <span>{product?.price} QAR</span>
                  </div>
                  <div className="">
                    <b className="main-text-color flex items-end justify-end">
                      {product?.orderQuantity * product?.price}
                      QAR
                    </b>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* == Printing Price == */}
      <div className="flex justify-between items-center px-5 py-2  ">
        <small className="text-base text-gray-500">Sub Total</small>{" "}
        <p className="text-lg font-medium text-gray-800">{subTotal} QAR</p>
      </div>
      {/* == Delivery Charge == */}
      <div className="flex justify-between items-center px-5 py-2  ">
        <small className="text-base text-gray-500">Shipping </small>{" "}
        <p className="text-lg font-medium ">{shippingCharge} QAR</p>
      </div>
      {/* == Discount == */}
      <div className="flex justify-between items-center px-5 py-2   ">
        <small className="text-base text-gray-500">Discount </small>{" "}
        <p className="text-lg font-medium text-red-500 ">
          {(total - subTotal).toFixed(2)} QAR
        </p>
      </div>

      <div className="px-5 py-2">
        <div className="  border-b"></div>
      </div>

      {/* == Calculate Grand Total == */}
      <div className="flex justify-between items-center px-5 py-4">
        <small className="text-lg font-medium text-gray-900">Total</small>{" "}
        <p className=" text-[22px]  font-bold bg-gradient-to-r from-[#C83B62] to-[#7F35CD] text-transparent bg-clip-text">
          {subTotal + shippingCharge} QAR
        </p>
      </div>

      <div className="flex justify-center items-center px-5 py-4   ">
        {btnText ? (
          <Link
            href={`/${btnLink}`}
            className={`${btnDisable} " bg-gradient-to-r from-[#C83B62] to-[#7F35CD] w-full rounded-lg py-3 text-white hover:scale-105 shadow-sm hover:duration-500 hover:shadow-lg text-center "`}
          >
            {btnText}
          </Link>
        ) : (
          <button
            className="bg-gradient-to-r from-[#C83B62] to-[#7F35CD] w-full rounded-lg py-3 text-white hover:scale-105 shadow-sm hover:duration-500 hover:shadow-lg text-center "
            onClick={handleSubmit}
          >
            Place Order
          </button>
        )}
      </div>
    </div>
  );
};

export default ShoppingCartTotalItems;
