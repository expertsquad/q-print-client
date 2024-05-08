"use client";
import OrderedItemData from "./OrderedItemData";
import { useGetOnlineOrderByIdQuery } from "@/redux/features/online-order/online-orderApi";
import OrderSummaryCard from "./OrderSummaryCard";
import OrderedUserDetails from "./OrderedUserDetails";

const OrderDetails = ({ id }: any) => {
  // <== Get Online Orders Query ==>
  const { data } = useGetOnlineOrderByIdQuery(id);

  return (
    <div className="rounded-xl mb-7">
      {/* ==order-details order-summary order-items== */}
      <div className="flex md:flex-row flex-col justify-between gap-5">
        <div className="flex flex-col w-full">
          {/* ==Ordered user data== */}
          <div className="border rounded-lg">
            <h5 className="border-b pl-6 py-5 font-medium text-[16px] md:text-[18px]">
              Order Details
            </h5>
            <OrderedUserDetails details={data?.data?.buyer} />
          </div>
          {/* ==order item data == */}
          <div className="border mt-7 rounded-lg">
            <h5 className="text-[16px] md:text-[18px] font-medium pl-6 py-5 border-b">
              Items
            </h5>
            <div>
              <OrderedItemData
                orderId={id}
                orderedItems={data?.data?.orderItems}
                totalQuantity={data?.data?.totalQuantity}
                totalPrice={data?.data?.totalPrice}
                shippingStatus={data?.data?.orderStatus}
              />
            </div>
          </div>
        </div>
        {/* ==order summary== */}
        <OrderSummaryCard productInfo={data?.data} />
      </div>
    </div>
  );
};

export default OrderDetails;
