"use client";
import { useGetOnlineOrderQuery } from "@/redux/features/online-order/online-orderApi";
import React from "react";
import OrderTrackButton from "./OrderTrackButton";
import Image from "next/image";
import { imageUrl } from "@/constants/imageUrl";
import ProductReviewModal from "./ProductReviewModal";

const OrderHistoryDeliveredLayout = () => {
  // <== Get data from order history query ==>
  const { data } = useGetOnlineOrderQuery("orderStatus.status=Delivered");

  return (
    <div
      className={`${
        data?.data?.length > 1
          ? "border rounded-lg my-5 p-2 md:p-4"
          : "p-4 md:p-[30px] rounded-lg"
      }`}
    >
      {data?.data?.map((deliveredData: any) => (
        <div key={deliveredData?._id} className={`mb-5 border p-2`}>
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
              <div className="w-[60px] h-[60px] relative mr-2.5 md:mr-5 shrink-0">
                <Image
                  src={`${imageUrl}${product?.productPhotos[0]}`}
                  fill
                  objectFit="cover"
                  alt="Product Photo"
                  className="w-full h-full top-0 left-0 object-cover p-1.5 border rounded-md"
                />
              </div>
              <div className="flex flex-col w-full md:w-auto">
                <span className="font-semibold text-sm md:text-base line-clamp-1 md:line-clamp-2">
                  {product?.productName}
                </span>
                <span className="text-black-opacity-70 text-xs md:text-sm">
                  {product?.brand?.brandName}
                </span>
                <div className="flex gap-2 items-center md:hidden w-full">
                  <div className="">
                    <span className="font-medium text-sm md:text-lg text-black-opacity-80 mr-1">
                      {product?.orderQuantity}
                    </span>
                    x
                    <span className="font-medium text-sm md:text-lgtext-black-opacity-80 ml-1">
                      {product?.variant?.sellingPrice}
                    </span>
                    <small className="text-sm ml-0.5">QAR</small>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-semibold text-sm md:text-lgtext-black-opacity-80">
                      {product?.orderQuantity * product?.variant?.sellingPrice}
                    </span>
                    <small className="text-sm">QAR</small>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <span>{product?.orderQuantity}</span>X
                <span>{product?.variant?.sellingPrice}</span>
                <small>QAR</small>
              </div>
              <div className="hidden md:flex items-center gap-1 justify-end">
                <span>
                  {product?.orderQuantity * product?.variant?.sellingPrice}
                </span>
                <small>QAR</small>
              </div>
              <ProductReviewModal />
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
