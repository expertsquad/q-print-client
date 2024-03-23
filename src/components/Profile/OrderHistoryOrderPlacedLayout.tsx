"use client";
import { imageUrl } from "@/constants/imageUrl";
import { useGetOnlineOrderQuery } from "@/redux/features/online-order/online-orderApi";
import Image from "next/image";

const OrderHistoryOrderPlacedLayout = () => {
  // <== Get data from order history query ==>
  const { data } = useGetOnlineOrderQuery("orderStatus.status=Order placed");

  return (
    <div className="border p-4 md:p-[30px] rounded-lg">
      {data?.data?.map((packagingData: any) => (
        <div key={packagingData?._id}>
          {/* == Basic Information == */}
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="font-semibold text-sm md:text-lg">
                Order Id: {packagingData?.orderId}
              </span>
              <span className="text-black-opacity-60 text-sm">
                {packagingData?.createdAt}
              </span>
            </div>
            <span className="text-[#FA8232] bg-[#FA8232] bg-opacity-10 py-1 px-2 rounded-full text-xs md:text-base">
              {packagingData?.orderStatus?.status === "Order placed" &&
                "Order Placed"}
            </span>
          </div>
          {/* == Ordered Items == */}
          <div>
            {packagingData?.orderItems?.map((product: any) => (
              <div
                key={product?._id}
                className="flex items-center justify-between"
              >
                <div className="w-[60px] h-[60px] relative">
                  <Image
                    src={`${imageUrl}${product?.productPhotos[0]}`}
                    fill
                    objectFit="cover"
                    alt="Product Photo"
                    className="w-full h-full top-0 left-0 object-cover "
                  />
                </div>
                <div>
                  <span>{product?.productName}</span>
                  <span>{product?.brand?.brandName}</span>
                </div>
                <div>
                  <span>{product?.orderQuantity}</span>X
                  <span>{product?.variant?.sellingPrice}</span>
                  <small>QAR</small>
                </div>
                <div>
                  <span>
                    {product?.orderQuantity * product?.variant?.sellingPrice}
                  </span>
                  <small>QAR</small>
                </div>
              </div>
            ))}
          </div>
          {/* == Summary == */}
          <div className="flex items-center justify-between">
            <div>
              <span>{packagingData?.orderItems?.length} Items,</span>
              <span>Total: {packagingData?.totalPrice} QAR</span>
            </div>
            <button>
              <span>Track Order</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderHistoryOrderPlacedLayout;
