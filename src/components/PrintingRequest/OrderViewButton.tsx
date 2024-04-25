import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";

const OrderViewButton = () => {
  return (
    <Link
      href="/profile/printing-order-history"
      className=" min-w-fit  py-3 px-7 border rounded-lg  bg-gradient-to-r from-[#C83B62] to-[#7F35CD] hover:scale-105 hover:duration-500 border-fuchsia-700 flex items-center justify-center gap-2 text-sm font-bold text-white"
    >
      VIEW ORDER
      <IconArrowRight stroke={2} />
    </Link>
  );
};

export default OrderViewButton;
