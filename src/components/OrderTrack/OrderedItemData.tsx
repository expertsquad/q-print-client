"use client";
import { IconX } from "@tabler/icons-react";
import Image from "next/image";
import React, { useState } from "react";
import { OrderedItemsTypes } from "@/types/orderTrackPage";
import { imageUrl } from "@/constants/imageUrl";

const OrderedItemData = ({
  orderedItems,
  totalQuantity,
  totalPrice,
  shippingStatus,
  orderId,
}: any) => {
  return (
    <section>
      <div>
        {orderedItems?.map((data: OrderedItemsTypes) => (
          <div
            className="flex items-center md:order-item-data  py-3 px-2 border-b transition duration-300 ease-in-out hover:bg-gray-100"
            key={data._id}
          >
            {/* == Product Image == */}
            <div className="w-[55px] h-[55px] relative shrink-0 mr-2 md:mr-0 md:w-1/1">
              <Image
                src={`${imageUrl}${data?.productPhotos[0]}`}
                alt="Product"
                fill
                objectFit="cover"
                className="w-full h-full top-0 left-0 object-cover border rounded-md p-1"
              />
            </div>
            {/* == Product Description == */}
            <div className="w-full">
              <div className="flex items-center justify-between w-full gap-3 md:gap-0">
                <span className="text-[16px] text-black text-opacity-90 line-clamp-1 md:line-clamp-2">
                  {data.productName}
                </span>
              </div>
              <div className="flex justify-between items-center md:hidden">
                <p className="flex items-center">
                  {data?.orderQuantity}{" "}
                  <IconX stroke={1} height={20} width={20} /> $
                  {data?.variant?.sellingPrice}
                </p>
                <span className="main-text-color font-bold">
                  {data?.orderQuantity * data?.variant?.sellingPrice}
                  <small className="uppercase ml-0.5">qar</small>
                </span>
              </div>
            </div>
            {/* //Quantity & Price */}
            <p className="hidden md:block md:w-1/1">
              {data?.orderQuantity} x {data?.variant?.sellingPrice}{" "}
              <small className="">QAR</small>
            </p>
            {/* //Total Amount */}
            <h6 className="hidden md:block md:w-1/1 main-text-color font-semibold">
              {data?.orderQuantity * data?.variant?.sellingPrice}
              <small className="font-medium ml-0.5">QAR</small>
            </h6>
          </div>
        ))}
        <div className="my-2.5 px-2 flex items-center gap-x-1.5">
          <span>{totalQuantity} Items,</span>
          <span>
            Total: <b className="main-text-color">{totalPrice}</b>
          </span>
          <small className="main-text-color">QAR</small>
        </div>
      </div>
    </section>
  );
};

export default OrderedItemData;
