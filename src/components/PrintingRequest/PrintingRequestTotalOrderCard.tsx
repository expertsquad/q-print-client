import { useGetShippingQuery } from "@/redux/features/api/shipping/shippingApi";
import { setPrintingRequest } from "@/redux/features/printing-request/postPrintingRequestSlice";
import { useAddPrintingMutation } from "@/redux/features/printing-request/printingRequestApi";
import { useAddShippingAddressMutation } from "@/redux/features/user/user";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { IconPlus } from "@tabler/icons-react";
import { IconMinus } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const PrintingRequestTotalOrderCard = ({ buttonText, btnDisable }: any) => {
  const data = useAppSelector((state) => state.printingRequestOrder);
  const getShipping = useGetShippingQuery("");
  const [addPrinting] = useAddPrintingMutation();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const calculateHeightWidth = data?.paperSize?.height * data?.paperSize?.width;
  const heightWidthMultiplyByType = calculateHeightWidth * data?.paperTypePrice;
  // shipping address mutation
  const [addShippingInfo] = useAddShippingAddressMutation();

  const heightWidthMultiplyMode =
    calculateHeightWidth * data?.printingModePrice;
  const deliveryCharge = getShipping?.data?.data?.inside;
  const totalAmount = heightWidthMultiplyByType + heightWidthMultiplyMode;

  const totalAmountWithQuantity = totalAmount * data?.totalQuantity;

  // zip code string to number
  const shippingAddress = {
    ...data?.shippingAddress,
    zipCode: parseInt(data?.shippingAddress?.zipCode),
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();

    formData.append("payment", JSON.stringify(data?.payment || {}));
    formData.append(
      "shippingAddress",
      JSON.stringify(data?.shippingAddress || {})
    );
    formData.append("paperSize", JSON.stringify(data?.paperSize || {}));
    formData.append("printingColorModeId", data?.printingColorModeId || "");
    formData.append("paperTypeId", data?.paperTypeId || "");
    formData.append("totalQuantity", (data?.totalQuantity || 0).toString());

    if (data?.printingRequestFile) {
      formData.append("printingRequestFile", data?.printingRequestFile);
    }

    try {
      // updating shipping address
      if (data?.shippingAddress?.isDefault === true) {
        const res = await addShippingInfo({ data: shippingAddress });
        console.log(res);
      }

      // printing request mutation
      const res = await addPrinting(formData);

      // @ts-ignore
      if (res?.data) {
        // @ts-ignore
        router.push(res?.data?.data?.resultObj?.payUrl);
      }
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  return (
    <div
      className={`" border rounded-lg pb-5 mb-5" ${isLoading && "opacity-50"}`}
    >
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
          {totalAmountWithQuantity} QAR
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
          {totalAmountWithQuantity + deliveryCharge} QAR
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className={`"flex justify-center items-center px-5 py-4   " ${btnDisable} `}
      >
        <button
          className={`bg-gradient-to-r from-[#C83B62] to-[#7F35CD] w-full rounded-lg py-3 text-white  shadow-sm hover:duration-500 hover:shadow-lg text-center ${
            totalAmountWithQuantity
              ? "cursor-pointer"
              : "cursor-not-allowed btn-disabled"
          }`}
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default PrintingRequestTotalOrderCard;
