"use client";
import { imageUrl } from "@/constants/imageUrl";
import Image from "next/image";
import OrderTrackButton from "./OrderTrackButton";
import { IconX } from "@tabler/icons-react";
import { formatDate } from "@/constants/formatDate";
import { OrderHistoryProduct } from "@/types/orderTrackPage";
import ProductReviewModal from "./ProductReviewModal";
import OrderHistorySkeleton from "../shared/Skeleton/OrderHistorySkeleton";

const OrderHistoryDetails = ({ data, isLoading, loadingMore }: any) => {
  return (
    <div className="w-full">
      {isLoading
        ? [...Array(2)].map((_: any, index: number) => {
            return <OrderHistorySkeleton key={index} />;
          })
        : data?.data?.map((data: any) => (
            <div
              key={data?._id}
              className={`mb-5 border rounded-custom-10px p-4 md:p-[30px]`}
            >
              {/* == Basic Information == */}
              <div className="flex items-baseline justify-between pb-3.5 md:pb-7 border-b mb-3.5 md:mb-7">
                <div className="flex flex-col">
                  <span className="font-semibold text-sm md:text-lg">
                    Order Id: {data?.orderId}
                  </span>
                  <span className="text-black-opacity-60 text-sm">
                    {formatDate(data?.createdAt)}
                  </span>
                </div>
                <span
                  className={`cursor-default whitespace-nowrap text-center rounded-full px-2 py-0.5 shrink-0 [font-size:clamp(10px,3vw,16px)] ${
                    data
                      ? data?.orderStatus?.status === "Order placed"
                        ? "text-[#3B82F6] bg-[#3b82f61a]"
                        : data?.orderStatus?.status === "Packaging"
                        ? "text-[#000000b3] bg-[#8787871a]"
                        : data?.orderStatus?.status === "Shipping"
                        ? "text-[#E79D00] bg-[#e73c171a]"
                        : data?.orderStatus?.status === "Delivered"
                        ? "text-[#03A609] bg-[#03a6091a]"
                        : data?.orderStatus?.status === "Rejected"
                        ? "text-[#E73C17] bg-[#e73c171a]"
                        : data?.orderStatus?.status === "Returned"
                        ? "text-[#3C4F4A] bg-[#233fa314]"
                        : data?.orderStatus?.status === "Cancelled" &&
                          "text-[#E73C17] bg-[#e73c171a]"
                      : ""
                  }`}
                >
                  {data?.orderStatus?.status}
                </span>
              </div>
              {/* == Ordered Items == */}
              <div>
                {data?.orderItems?.map((product: OrderHistoryProduct) => (
                  <div
                    key={product?._id}
                    className={`flex  mb-3.5 md:mb-7 ${
                      data?.orderStatus?.status === "Delivered"
                        ? "md:order-packaging-shipped-order-placed-delivered-card-style"
                        : "md:order-packaging-shipped-order-placed-card-style"
                    }`}
                  >
                    <div className="">
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
                    <div className="flex flex-col w-full md:w-auto">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-sm md:text-base line-clamp-1 md:line-clamp-2">
                          {product?.productName}
                        </span>
                        <span className="block md:hidden font-bold ">
                          {product?.orderQuantity *
                            product?.variant?.sellingPrice}
                          <small className="ml-0.5">QAR</small>
                        </span>
                      </div>
                      <span className="text-black-opacity-70 text-xs md:text-sm">
                        {product?.brand?.brandName}
                      </span>
                      <div className="flex justify-between items-center md:hidden w-full">
                        <div className="flex items-center gap-1">
                          <span className="font-medium text-sm md:text-lg text-black-opacity-80">
                            {product?.orderQuantity}
                          </span>
                          <IconX width={15} height={15} stroke={2} />
                          <span className="font-medium text-sm md:text-lgtext-black-opacity-80">
                            {product?.variant?.sellingPrice}
                          </span>
                          <small className="text-xs">QAR</small>
                        </div>
                        {data?.orderStatus?.status === "Delivered" && (
                          <div className="block md:hidden items-center justify-end">
                            <ProductReviewModal
                              isReviewed={product?.isReviewed}
                              orderId={data?._id}
                              productId={product?._id}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="hidden md:flex items-center gap-0.5">
                      <span>{product?.orderQuantity}</span>
                      <IconX stroke={2} height={15} width={15} />
                      <span>{product?.variant?.sellingPrice}</span>
                      <small>QAR</small>
                    </div>
                    <div className="hidden md:flex items-center gap-1 justify-end font-semibold">
                      <span>
                        {product?.orderQuantity *
                          product?.variant?.sellingPrice}
                      </span>
                      <small>QAR</small>
                    </div>
                    {data?.orderStatus?.status === "Delivered" && (
                      <div className="hidden md:flex items-center justify-end ">
                        <ProductReviewModal
                          isReviewed={product?.isReviewed}
                          orderId={data?._id}
                          productId={product?._id}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {/* == Summary == */}
              <div className="flex items-center justify-between border-t border-dashed pt-3.5 md:pt-6">
                <div>
                  <span>{data?.orderItems?.length} Items,</span>
                  <span>Total: {data?.totalPrice} QAR</span>
                </div>
                {data.orderStatus.status !== "Cancelled" &&
                data.orderStatus.status !== "Returned" &&
                data.orderStatus.status !== "Rejected" ? (
                  <OrderTrackButton id={data._id} />
                ) : null}
              </div>
            </div>
          ))}
      {loadingMore && (
        <div className="flex items-center justify-center  w-full">
          <span className="loading loading-dots loading-lg bg-main-bg-color "></span>
        </div>
      )}
    </div>
  );
};

export default OrderHistoryDetails;
