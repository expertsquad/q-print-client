"use client";
import { formatDate } from "@/constants/formatDate";
import { useGetOnlineOrderByIdQuery } from "@/redux/features/online-order/online-orderApi";
import { IconTruckDelivery } from "@tabler/icons-react";

const OrderTrackTop = ({ id }: any) => {
  // <== Get Online Orders Query ==>
  const { data } = useGetOnlineOrderByIdQuery(id);
  console.log(data?.data, "From OrderTrackTop");

  return (
    <section>
      {/* ===Title and Description=== */}
      <div className="mb-12">
        <h2 className="text-black text-opacity-70 text-xl md:text-3xl font-semibold mb-5">
          Order ID: {data?.data?.orderId}
        </h2>
        <div className="flex md:flex-row flex-col md:items-center gap-x-1 flex-wrap mb-7">
          <div className="flex items-center whitespace-nowrap">
            <span>Order Date: </span>
            <span className="mx-1">{formatDate(data?.data?.createdAt)}</span>
          </div>
          <span className="hidden md:block">|</span>
          <div className="flex items-center whitespace-nowrap text-[#12B76A]">
            <IconTruckDelivery stroke={1} />

            <span> Estimated Delivery: </span>
            <span>Feb 20, 2024</span>
          </div>
        </div>
        <hr className="bg-black opacity-10 h-[2px] hidden md:block" />
      </div>
    </section>
  );
};

export default OrderTrackTop;
