"use client";
import OrderHistoryDeliveredLayout from "@/components/Profile/OrderHistoryDeliveredLayout";
import OrderHistoryOrderPlacedLayout from "@/components/Profile/OrderHistoryOrderPlacedLayout";
import OrderHistoryPackagingLayout from "@/components/Profile/OrderHistoryPackagingLayout";
import OrderHistoryShippingLayout from "@/components/Profile/OrderHistoryShippingLayout";
import OrderHistorySkeleton from "@/components/shared/Skeleton/OrderHistorySkeleton";
import { useGetUserQuery } from "@/redux/features/user/user";

const OrderHistory = () => {
  const { data, isLoading } = useGetUserQuery("");
  return (
    <div className="w-full mb-7">
      <div className="flex justify-between items-center mb-4">
        <h3 className="[font-size:_clamp(1em,4vw,1.5em)] font-bold">
          Order History
        </h3>
        <div>
          <span className="border md:py-3 py-2 px-3 rounded-lg  w-fit ">
            <select
              title="Month Filter"
              className="py-2 rounded-md outline-none border-none w-min bg-transparent text-gray-700 "
              name=""
              id=""
            >
              <option value="MostPopular" className=" text-gray-800">
                Past 3 Month
              </option>
              <option value="Recent" className=" text-gray-800">
                Past 6 Month
              </option>
              <option value="HighPrice" className=" text-gray-800">
                Last 1 year
              </option>
            </select>
          </span>
        </div>
      </div>
      {/* <ProfileOrderHistory /> */}
      

          <>
            <OrderHistoryOrderPlacedLayout id={data?.data?._id} />
            <OrderHistoryPackagingLayout id={data?.data?._id} />
            <OrderHistoryShippingLayout id={data?.data?._id} />
            <OrderHistoryDeliveredLayout id={data?.data?._id} />
          </>
      
    </div >
  );
};

export default OrderHistory;
