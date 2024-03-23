"use client";
import { imageUrl } from "@/constants/imageUrl";
import { useGetOnlineOrderQuery } from "@/redux/features/online-order/online-orderApi";
import Image from "next/image";

const OrderHistoryShippingLayout = () => {
  // <== Get data from order history query ==>
  const { data } = useGetOnlineOrderQuery("orderStatus.status=Shipping");

  return (
    <div className="border p-4 md:p-[30px] rounded-lg">
      {data?.data?.map((shippingData: any) => (
        <div key={shippingData?._id}>
          {/* == Basic Information == */}
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="font-semibold text-sm md:text-lg">
                Order Id: {shippingData?.orderId}
              </span>
              <span className="text-black-opacity-60 text-sm">
                {shippingData?.createdAt}
              </span>
            </div>
            <span className="text-[#5A8BF2] bg-[#5A8BF2] bg-opacity-10 py-1 px-2 rounded-full text-xs md:text-base">
              {shippingData?.orderStatus?.status === "Shipping" && "Shipped"}
            </span>
          </div>
          {/* == Ordered Items == */}
          <div>
            {shippingData?.orderItems?.map((product: any) => (
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
                    className="w-full h-full top-0 left-0 object-cover p-1.5 border rounded-md"
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
              <span>{shippingData?.orderItems?.length} Items,</span>
              <span>Total: {shippingData?.totalPrice} QAR</span>
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

export default OrderHistoryShippingLayout;
