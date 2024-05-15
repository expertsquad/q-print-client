import { formatDate } from "@/constants/formatDate";
import React from "react";
import OrderTrackButton from "../Profile/OrderTrackButton";
import { IconX } from "@tabler/icons-react";
import Link from "next/link";

interface IProps {
  id?: string;
  unit?: string;
  orderId?: string;
  createdAt?: string | any;
  orderStatus?: string;
  paperSize: {
    height: number;
    width: number;
  };
  paperType?: string;
  printingMode?: string;
  attachment?: string;
  quantity?: number;
  totalPrice?: number;
}

const PringtingOrderHistoryTable = ({
  orderId,
  unit,
  createdAt,
  orderStatus,
  paperSize,
  paperType,
  printingMode,
  attachment,
  id,
  quantity,
  totalPrice,
}: IProps) => {
  return (
    <div className={`mb-5 border rounded-md p-4 md:p-[30px]`}>
      {/* == Basic Information == */}
      <div className="flex items-baseline justify-between pb-3.5 md:pb-7 border-b mb-3.5 md:mb-7">
        <div className="flex flex-col">
          <span className="md:font-semibold text-sm md:text-lg">
            Order Id: {orderId}
          </span>
          <span className="text-black-opacity-60 text-sm">
            {" "}
            {formatDate(createdAt)}
          </span>
        </div>
        <span
          className={`cursor-default whitespace-nowrap text-center rounded-full px-2 py-0.5 shrink-0 [font-size:clamp(10px,3vw,16px)] ${
            orderStatus && orderStatus === "Order placed"
              ? "text-[#3B82F6] bg-[#3b82f61a]"
              : orderStatus === "Printing"
              ? "text-[#000000b3] bg-[#8787871a]"
              : orderStatus === "Shipping"
              ? "text-[#E79D00] bg-[#e73c171a]"
              : orderStatus === "Delivered"
              ? "text-[#03A609] bg-[#03a6091a]"
              : orderStatus === "Rejected"
              ? "text-[#E73C17] bg-[#e73c171a]"
              : orderStatus === "Returned"
              ? "text-[#3C4F4A] bg-[#233fa314]"
              : orderStatus === "Cancelled" && "text-[#E73C17] bg-[#e73c171a]"
          }`}
        >
          {orderStatus}
        </span>
      </div>

      {/* == printing information == */}
      <div className="mb-5">
        <div className="flex items-center gap-1">
          <span className="text-black-opacity-80 text-sm">Paper Size:</span>
          <div className="flex items-center gap-0.5 md:font-semibold text-base">
            <span className="text-sm md:text-base">{paperSize?.height}</span>
            <span>
              <IconX width={20} height={20} />
            </span>
            <span className="text-sm md:text-base">{paperSize?.width}</span>
            <span className="text-sm md:text-base">{unit}</span>
          </div>
        </div>
        <div className=" flex items-center gap-1">
          <span className="text-sm md:text-base text-black-opacity-80">
            Paper Type:
          </span>
          <span className="text-sm md:text-base md:font-semibold">
            {paperType}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-sm md:text-base text-black-opacity-80">
            Printing Mode:
          </span>
          <span className="text-sm md:text-base md:font-semibold">
            {printingMode}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-sm md:text-base text-black-opacity-80">
            Attachment:
          </span>
          <span className="text-sm md:text-base line-clamp-1 md:font-semibold">
            {attachment}
          </span>
        </div>
      </div>

      {/* == Summary == */}
      <div className="flex items-center justify-between border-t border-dashed pt-3.5 md:pt-6">
        <div>
          <span>{quantity} Items,</span>
          <span className="font-semibold">Total: {totalPrice} QAR</span>
        </div>

        <div>
          {orderStatus !== "Cancelled" &&
          orderStatus !== "Returned" &&
          orderStatus !== "Rejected" ? (
            <Link
              className="text-xs md:text-base shadow-md py-1 px-3 border border-main-border-color main-text-color rounded-lg"
              href={`/printing-request/printing-request-order-track/${id}`}
            >
              Order Track
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default PringtingOrderHistoryTable;
