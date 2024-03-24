import Link from "next/link";
import React from "react";

const OrderTrackButton = () => {
  return (
    <Link
      href={`/order-track`}
      className="text-xs md:text-base shadow-md py-1 px-3 border rounded-lg bg-gradient-to-r from-[#C83B62] to-[#7F35CD] text-transparent bg-clip-text border-fuchsia-700 hover:scale-105 hover:duration-500 "
    >
      Order Track
    </Link>
  );
};

export default OrderTrackButton;
