import { IconTruckDelivery } from "@tabler/icons-react";

const OrderTrackTop = () => {
  return (
    <section>
      {/* ===Title and Description=== */}
      <div className="mb-12">
        <h2 className="text-black text-opacity-70 text-xl md:text-3xl font-semibold mb-5">
          Order ID: {"3354654654526"}
        </h2>
        <div className="flex text-wrap flex-wrap mb-7">
          <p className="text-[16px] flex flex-wrap mr-1">
            Order Date: <strong className="mr-1">{"Feb 16, 2024"}</strong> |{" "}
            <span className="flex items-center ml-1 text-[#12B76A]">
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
