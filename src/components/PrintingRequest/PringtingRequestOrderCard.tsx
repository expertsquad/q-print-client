import { setPrintingRequest } from "@/redux/features/printing-request/postPrintingRequestSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { IconPlus } from "@tabler/icons-react";
import { IconMinus } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const PringtingRequestOrderCard = ({ href, buttonText, handleSubmit }: any) => {
  const data = useAppSelector((state) => state.printingRequestOrder);

  const dispatch = useAppDispatch();

  const calculateHeightWidth = data?.paperSize?.height * data?.paperSize?.width;
  const heightWidthMultiplyByType = calculateHeightWidth * data?.paperTypePrice;

  const heightWidthMultiplyMode =
    calculateHeightWidth * data?.printingModePrice;
  const deliveryCharge = 60;
  const totalAmount = heightWidthMultiplyByType + heightWidthMultiplyMode;
  const totalAmountWithQuantity = totalAmount * data?.totalQuantity;

  return (
    <div className=" border rounded-lg pb-5 mb-5">
      <h4 className="px-5 py-4 text-lg font-medium">Total Order</h4>

      <div className="border-y">
        <div className="flex justify-between items-center px-5 py-4   ">
          <small className="text-base text-gray-500">Item of print</small>

          {totalAmountWithQuantity && (
            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  dispatch(
                    setPrintingRequest({
                      ...data,
                      totalQuantity: data?.totalQuantity - 1,
                    })
                  )
                }
                className="border border-fuchsia-800 p-0.5 text-black text-opacity-70"
              >
                {""}
                <IconMinus stroke={3} width={15} height={15} />
              </button>

              <span>{data?.totalQuantity}</span>
              <button
                onClick={() =>
                  dispatch(
                    setPrintingRequest({
                      ...data,
                      totalQuantity: data?.totalQuantity + 1,
                    })
                  )
                }
                className="border border-fuchsia-800 p-0.5 text-black text-opacity-70 "
              >
                {""}
                <IconPlus stroke={3} width={15} height={15} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Printing price */}
      <div className="flex justify-between items-center px-5 py-4   ">
        <small className="text-base text-gray-500">Printing Price</small>{" "}
        <p className="text-lg font-medium text-gray-800">
          {totalAmountWithQuantity || 0} QAR
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
          {totalAmountWithQuantity + deliveryCharge || 0} QAR
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center px-5 py-4   "
      >
        <Link
          href={`${href}`}
          className={`bg-gradient-to-r from-[#C83B62] to-[#7F35CD] w-full rounded-lg py-3 text-white  shadow-sm hover:duration-500 hover:shadow-lg text-center ${
            totalAmountWithQuantity
              ? "cursor-pointer"
              : "cursor-not-allowed btn-disabled"
          }`}
        >
          {buttonText}
        </Link>
      </form>
    </div>
  );
};

export default PringtingRequestOrderCard;
