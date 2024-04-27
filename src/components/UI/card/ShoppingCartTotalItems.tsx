"use client";
import Link from "next/link";
import React from "react";
import { useAppSelector } from "@/redux/hook";
import Image from "next/image";
import { imageUrl } from "@/constants/imageUrl";
import { IconPlus } from "@tabler/icons-react";
import { IconMinus } from "@tabler/icons-react";
import { useDispatch } from "react-redux";


const ShoppingCartTotalItems = () => {
  const { products } = useAppSelector((state) => state.);
  const dispatch = useDispatch();

  // <== Calculate Subtotal, Total , and Shipping ==>
  const subTotal = products?.reduce((total: number, product: any) => {
    return total + product?.defaultVariant?.discountedPrice * product?.quantity;
  }, 0);

  // <== Calculate Discount ==>
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
  // <== Calculate Total ==>
  const calculateTotalWithDiscount = subTotal + shippingCharge - discountPrice;

  return (
    <div className=" border rounded-lg pb-5 mb-5">
      <h4 className="px-5 py-4 text-lg font-medium">Shopping Items</h4>
      <div className=" border-y ">
        {/* == total product in cart section == */}
        <div className="">
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
                  className="w-full h-full top-0 left-0 object-cover border-[1px] p-1.5 rounded-md"
                />
              </div>

              <div>
                <span className="line-clamp-1 text-base text-black text-opacity-90">
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
                      {product?.quantity}
                    </span>
                    <button
                      onClick={() => dispatch(addToCart(product))}
                      className="border p-0.5 rounded-full text-black text-opacity-70 "
                    >
                      {""}
                      <IconPlus stroke={1} width={13} height={13} />
                    </button>
                    <span className="text-[12px]">x</span>
                    <span>{product?.defaultVariant?.discountedPrice} QAR</span>
                  </div>
                  <div className="">
                    <b className="main-text-color flex items-end justify-end">
                      {product?.quantity *
                        product?.defaultVariant?.discountedPrice}{" "}
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
          -{discountPrice} QAR
        </p>
      </div>

      <div className="px-5 py-2">
        <div className="  border-b"></div>
      </div>

      {/* == Calculate Grand Total == */}
      <div className="flex justify-between items-center px-5 py-4">
        <small className="text-lg font-medium text-gray-900">Total</small>{" "}
        <p className=" text-[22px]  font-bold bg-gradient-to-r from-[#C83B62] to-[#7F35CD] text-transparent bg-clip-text">
          {calculateTotalWithDiscount} QAR
        </p>
      </div>

      <div className="flex justify-center items-center px-5 py-4   ">
        <Link
          href="/payment"
          className="bg-gradient-to-r from-[#C83B62] to-[#7F35CD] w-full rounded-lg py-3 text-white hover:scale-105 shadow-sm hover:duration-500 hover:shadow-lg text-center "
        >
          Place Order
        </Link>
      </div>
    </div>
  );
};

export default ShoppingCartTotalItems;
