"use client";
import { useRouter } from "next/navigation";

const OrderTrackButton = ({ id }: any) => {
  // console.log(id, "from Order Track Button");
  const router = useRouter();
  // <== Handle Order Track ==>
  const handleOrderTracking = (e: any) => {
    e.stopPropagation();
    router.push(`/order-track/${id}`);
  };
  return (
    <button
      onClick={handleOrderTracking}
      className="text-xs md:text-base shadow-md py-1 px-3 border rounded-lg bg-gradient-to-r from-[#C83B62] to-[#7F35CD] text-transparent bg-clip-text border-fuchsia-700 hover:scale-105 hover:duration-500 "
    >
      Order Track
    </button>
  );
};

export default OrderTrackButton;
