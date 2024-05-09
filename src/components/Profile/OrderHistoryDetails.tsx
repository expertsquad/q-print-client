"use client";
import { imageUrl } from "@/constants/imageUrl";
import { useGetOnlineOrderQuery } from "@/redux/features/online-order/online-orderApi";
import Image from "next/image";
import OrderTrackButton from "./OrderTrackButton";
import { IconX } from "@tabler/icons-react";
import { formatDate } from "@/constants/formatDate";
import { OrderHistoryProduct } from "@/types/orderTrackPage";

const OrderHistoryDetails = ({ data, isLoading }: any) => {
  // <== Get data from order history query ==>
  // const { data, isLoading } = useGetOnlineOrderQuery(`buyer.userId=${id}`);

  return (
    <div>
      {isLoading ? (
        <div className="mb-5 border rounded-custom-10px p-4 md:p-[30px] animate-pulse">
          <div className="flex items-center justify-between gap-2.5">
            <div className="flex flex-col gap-2">
              <div className="bg-gray-200 h-4 w-40 rounded-full"></div>
              <div className="bg-gray-200 h-3 w-32 rounded-full"></div>
            </div>

            <div className="bg-gray-200 px-3.5 py-1.5 rounded-full h-[30px] w-[120px]"></div>
          </div>
          <div className="border-b md:my-5 my-3.5"></div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3.5">
              <div className="w-[60px] h-[60px] bg-gray-200 rounded-custom-10px"></div>
              <div className="flex flex-col gap-2">
                <div className="bg-gray-200 h-2 w-52 rounded-full"></div>
                <div className="bg-gray-200 h-2 w-40 rounded-full"></div>
                <div className="bg-gray-200 h-2 w-32 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        data?.data?.map((data: any) => (
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
                className={`cursor-default whitespace-nowrap text-center rounded-full pl-2 py-2 px-[13px] shrink-0 [font-size:clamp(10px,3vw,16px)] ${
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
                  className="flex md:order-packaging-shipped-order-placed-card-style mb-3.5 md:mb-7"
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
                    <span className="font-medium text-sm md:text-base line-clamp-1 md:line-clamp-2">
                      {product?.productName}
                    </span>
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
                      <div className="flex items-center gap-1">
                        <span className="font-semibold text-sm md:text-lgtext-black-opacity-80">
                          {product?.orderQuantity *
                            product?.variant?.sellingPrice}
                        </span>
                        <small className="text-sm">QAR</small>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center gap-0.5">
                    <span>{product?.orderQuantity}</span>
                    <IconX stroke={2} height={15} width={15} />
                    <span>{product?.variant?.sellingPrice}</span>
                    <small>QAR</small>
                  </div>
                  <div className="hidden md:flex items-center gap-1 justify-end">
                    <span>
                      {product?.orderQuantity * product?.variant?.sellingPrice}
                    </span>
                    <small>QAR</small>
                  </div>
                </div>
              ))}
            </div>
            {/* == Summary == */}
            <div className="flex items-center justify-between border-t border-dashed pt-3.5 md:pt-6">
              <div>
                <span>{data?.orderItems?.length} Items,</span>
                <span>Total: {data?.totalPrice} QAR</span>
              </div>
              <OrderTrackButton id={data?._id} />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderHistoryDetails;
