"use client";
import { useGetOnlineOrderQuery } from "@/redux/features/online-order/online-orderApi";
import React from "react";
import OrderTrackButton from "./OrderTrackButton";
import Image from "next/image";
import { imageUrl } from "@/constants/imageUrl";

const OrderHistoryDeliveredLayout = () => {
  // <== Get data from order history query ==>
  const { data } = useGetOnlineOrderQuery("orderStatus.status=Delivered");
  return (
    <div className="border p-4 md:p-[30px] rounded-lg my-5">
      {data?.data?.map((deliveredData: any) => (
        <div key={deliveredData?._id}>
          {/* == Basic Information == */}
          <div className="flex items-baseline justify-between pb-3.5 md:pb-7 border-b mb-3.5 md:mb-7">
            <div className="flex flex-col">
              <span className="font-semibold text-xs md:text-base">
                Order Id: {deliveredData?.orderId}
              </span>
              <span className="text-black-opacity-60 text-sm">
                {deliveredData?.createdAt}
              </span>
            </div>
            <span className="text-[#0D9755] bg-[#0D9755] bg-opacity-10 py-1 px-2 rounded-full text-xs md:text-base">
              {deliveredData?.orderStatus?.status === "Delivered" &&
                "Order Received"}
            </span>
          </div>
          {/* == Delivered Items == */}
          {deliveredData?.orderItems?.map((product: any) => (
            <div
              key={product?._id}
              className="flex items-center md:justify-between mb-3.5 md:mb-7"
            >
              <div className="w-[60px] h-[60px] relative mr-2.5 md:mr-5">
                <Image
                  src={`${imageUrl}${product?.productPhotos[0]}`}
                  fill
                  objectFit="cover"
                  alt="Product Photo"
                  className="w-full h-full top-0 left-0 object-cover p-1.5 border rounded-md"
                />
              </div>
            </div>
          ))}
          {/* == Summary == */}
          <div className="flex items-center justify-between border-t border-dashed pt-3.5 md:pt-6">
            <div>
              <span className="md:text-base text-sm">
                {deliveredData?.orderItems?.length} Items,
              </span>
              <span className="text-sm md:text-base">
                Total: <b className="font-bold">{deliveredData?.totalPrice}</b>
                QAR
              </span>
            </div>
            <OrderTrackButton />
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderHistoryDeliveredLayout;
