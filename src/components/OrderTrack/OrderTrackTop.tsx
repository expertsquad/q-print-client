"use client";
import { useGetOnlineOrderByIdQuery } from "@/redux/features/online-order/online-orderApi";
import { IconTruckDelivery } from "@tabler/icons-react";

const OrderTrackTop = ({ id }: any) => {
  // <== Get Online Orders Query ==>
  const { data } = useGetOnlineOrderByIdQuery(id);

  console.log(data?.data, "data logged logged");
  return (
    <section>
      {/* ===Title and Description=== */}
      <div className="mb-12">
        <h2 className="text-black text-opacity-70 text-xl md:text-3xl font-semibold mb-5">
          Order ID: {data?.data?.buyer?.userId}
        </h2>
        <div className="flex text-wrap flex-wrap mb-7">
          <p className="text-[16px] flex flex-wrap mr-1">
            Order Date: <strong className="mx-1">{"Feb 16, 2024"}</strong> |{" "}
            <span className="flex items-center mx-1 text-[#12B76A]">
              <IconTruckDelivery />
              Estimated Delivery:{" "}
              <time dateTime="2024-02-20">Feb 20, 2024</time>
            </span>
          </p>
        </div>
        <hr className="bg-black opacity-10 h-[2px] hidden md:block" />
      </div>
    </section>
  );
};

export default OrderTrackTop;
