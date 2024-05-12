"use client";
import { useRouter } from "next/navigation";

const OrderTrackButton = ({ id }: any) => {
  const router = useRouter();
  // <== Handle Order Track ==>
  const handleOrderTracking = (e: any) => {
    e.stopPropagation();
    router.push(`/order-track/${id}`);
  };
  return (
    <button
      onClick={handleOrderTracking}
      className="text-xs md:text-base shadow-md py-1 px-3 border main-text-color rounded-md border-main-border-color"
    >
      Track Order
    </button>
  );
};

export default OrderTrackButton;
