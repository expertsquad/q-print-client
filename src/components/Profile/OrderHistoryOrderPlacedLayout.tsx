"use client";
import { imageUrl } from "@/constants/imageUrl";
import { useGetOnlineOrderQuery } from "@/redux/features/online-order/online-orderApi";
import Image from "next/image";
import OrderTrackButton from "./OrderTrackButton";
import { IconX } from "@tabler/icons-react";
import { formatDate } from "@/constants/formatDate";
import { OrderHistoryProduct } from "@/types/orderTrackPage";
import OrderHistorySkeleton from "@/components/shared/Skeleton/OrderHistorySkeleton";


const OrderHistoryOrderPlacedLayout = ({ id }: string | any) => {
  // <== Get data from order history query ==>
  const { data, isLoading } = useGetOnlineOrderQuery(
    `buyer.userId=${id}&orderStatus.status=Order placed`
  );



  return (
    <div>
      {
        isLoading ? (

          [...Array(2)].map((_: any, index: number) => {
            return (
              <OrderHistorySkeleton key={index} />
            )
          })

        ) : (
          data?.data?.map((orderPlaced: any) => (
            <div
              key={orderPlaced?._id}
              className={`mb-5 border rounded-custom-10px p-4 md:p-[30px]`}
            >
              {/* == Basic Information == */}
              <div className="flex items-baseline justify-between pb-3.5 md:pb-7 border-b mb-3.5 md:mb-7">
                <div className="flex flex-col">
                  <span className="font-semibold text-sm md:text-lg">
                    Order Id: {orderPlaced?.orderId}
                  </span>
                  <span className="text-black-opacity-60 text-sm">
                    {formatDate(orderPlaced?.createdAt)}
                  </span>
                </div>
                <span className="text-[#000] bg-[#000] bg-opacity-10 py-1 px-2 rounded-full text-xs md:text-base">
                  {orderPlaced?.orderStatus?.status === "Order placed" &&
                    "Order Placed"}
                </span>
              </div>
              {/* == Ordered Items == */}
              <div>
                {orderPlaced?.orderItems?.map((product: OrderHistoryProduct) => (
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
                  <span>{orderPlaced?.orderItems?.length} Items,</span>
                  <span>Total: {orderPlaced?.totalPrice} QAR</span>
                </div>
                <OrderTrackButton id={orderPlaced?._id} />
              </div>
            </div>
          ))
        )}
    </div>
  );
};

export default OrderHistoryOrderPlacedLayout;
