import {
  decrementQuantity,
  incrementQuantity,
} from "@/redux/features/printing-request/totalAmountSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { IconPlus } from "@tabler/icons-react";
import { IconMinus } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const PringtingRequestOrderCard = ({ href, buttonText }: any) => {
  const { quantity, totalAmount, file } = useAppSelector(
    (state) => state.printingReqTotalAmount
  );

  const dispatch = useAppDispatch();
  // <==  Hanlde incrementQuantity ==>
  const handleIncrement = () => {
    dispatch(incrementQuantity());
  };
  // <== Hanlde decreament quantity ==>
  const handleDecrement = () => {
    dispatch(decrementQuantity());
  };

  const deliveryCharge = 60;
  const printingPriceSubTotal = quantity * totalAmount;
  const grandTotal = printingPriceSubTotal + deliveryCharge;

  return (
    <div className=" border rounded-lg pb-5 mb-5">
      <h4 className="px-5 py-4 text-lg font-medium">Total Order</h4>
      <span>{file?.name}</span>
      <div className="border-y">
        <div className="flex justify-between items-center px-5 py-4   ">
          <small className="text-base text-gray-500">Item of print</small>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDecrement}
              className="border border-fuchsia-800 p-0.5 text-black text-opacity-70 "
            >
              {""}
              <IconMinus stroke={3} width={15} height={15} />
            </button>
            <span>{quantity}</span>
            <button
              onClick={handleIncrement}
              className="border border-fuchsia-800 p-0.5 text-black text-opacity-70 "
            >
              {""}
              <IconPlus stroke={3} width={15} height={15} />
            </button>
          </div>
        </div>
      </div>

      {/* Printing price */}
      <div className="flex justify-between items-center px-5 py-4   ">
        <small className="text-base text-gray-500">Printing Price</small>{" "}
        <p className="text-lg font-medium text-gray-800">
          {printingPriceSubTotal} QAR
        </p>
      </div>
      {/* delivery Charge */}
      <div className="flex justify-between items-center px-5 py-4   ">
        <small className="text-base text-gray-500">Delivery Charge</small>{" "}
        <p className="text-lg font-medium ">{deliveryCharge} QAR</p>
      </div>

      <div className="flex justify-between items-center px-5 py-4 border-t">
        <small className="text-lg font-medium text-gray-900">Total</small>{" "}
        <p className=" text-[22px]  font-bold bg-gradient-to-r from-[#C83B62] to-[#7F35CD] text-transparent bg-clip-text">
          {grandTotal} QAR
        </p>
      </div>

      <div className="flex justify-center items-center px-5 py-4   ">
        <Link
          href={`${href}`}
          className={`bg-gradient-to-r from-[#C83B62] to-[#7F35CD] w-full rounded-lg py-3 text-white  shadow-sm hover:duration-500 hover:shadow-lg text-center ${
            grandTotal ? "cursor-pointer" : "cursor-not-allowed btn-disabled"
          }`}
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default PringtingRequestOrderCard;
