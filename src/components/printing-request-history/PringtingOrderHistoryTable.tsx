import { formatDate } from "@/constants/formatDate";
import React from "react";
import OrderTrackButton from "../Profile/OrderTrackButton";
import { IconX } from "@tabler/icons-react";

// type IPaperSize = {
//   height: number;
//   width: number;
// };
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
        <span className="text-[#000] bg-[#000] bg-opacity-10 py-1 px-2 rounded-full text-xs md:text-base">
          {orderStatus}
        </span>
      </div>

      {/* == printing information == */}
      <div className="mb-5">
        <div className="flex gap-1 md:gap-0 md:flex-col ">
          <span className="text-black-opacity-60 text-sm">Paper Size:</span>
          <div className="flex gap-0.5 md:font-semibold text-base">
            <span className="text-sm md:text-base">{paperSize?.height}</span>
            <span>
              <IconX width={20} height={20} />
            </span>
            <span className="text-sm md:text-base">{paperSize?.width}</span>
            <span className="text-sm md:text-base">{unit}</span>
          </div>
        </div>
        <div className=" flex gap-1 md:gap-0 md:flex-col">
          <span className="text-sm md:text-base text-black-opacity-60">
            Paper Type:
          </span>
          <span className="text-sm md:text-base md:font-semibold">
            {paperType}
          </span>
        </div>
        <div className=" flex md:flex-col gap-1 md:gap-0">
          <span className="text-sm md:text-base text-black-opacity-60">
            Printing Mode:
          </span>
          <span className="text-sm md:text-base md:font-semibold">
            {printingMode}
          </span>
        </div>
        <div className="">
          <span className="text-sm md:text-base text-black-opacity-60">
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
          <span>Total: {totalPrice} QAR</span>
        </div>
        <OrderTrackButton id={id} />
      </div>
    </div>
  );
};

export default PringtingOrderHistoryTable;
