import { formatDate } from "@/constants/formatDate";
import React from "react";
import OrderTrackButton from "../Profile/OrderTrackButton";

interface IProps {
  id?: string;
  orderId?: string;
  createdAt?: string | any;
  orderStatus?: string;
  paperType?: string;
  printingMode?: string;
  attachment?: string;
  quantity?: number;
  totalPrice?: number;
}

const PringtingOrderHistoryTable = ({
  orderId,
  createdAt,
  orderStatus,
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
          <span className="font-semibold text-sm md:text-lg">
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
