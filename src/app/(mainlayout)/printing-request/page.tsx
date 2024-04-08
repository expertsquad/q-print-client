"use client";
import GradientUploadIcon from "@/assets/svgIcons/GradientUploadIcon";
import PringtingRequestOrderCard from "@/components/PrintingRequest/PringtingRequestOrderCard";
import { useGetPrintingRequestsQuery } from "@/redux/features/printing-request/printing-request";
import {
  setFile,
  setPrintingTotalAmount,
} from "@/redux/features/printing-request/totalAmountSlice";
import { isLoggedIn } from "@/services/auth.service";
import { PrintingSetupTypes } from "@/types/printingRequestTypes";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const PrintingRequest = () => {
  const isUserLoggedIn = isLoggedIn();

  const [printingPaperSize, setPrintingPaperSize] =
    useState<PrintingSetupTypes | null>(null);
  const [selectPaperType, setSelectPaperType] =
    useState<PrintingSetupTypes | null>(null);
  const [selectColorMode, setSelectColorMode] =
    useState<PrintingSetupTypes | null>(null);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPrintingTotalAmount(totalAmount));
  }, [totalAmount]);

  // <== Get Paper Size fn ==>
  const handleGetPaperSize = (
    itemId: string,
    height: number,
    width: number
  ) => {
    setPrintingPaperSize(
      paperSize?.data.find((item: any) => item._id === itemId) || null
    );
    setTotalAmount(
      (selectPaperType?.price || 0) * height * width +
        (selectColorMode?.price || 0)
    );
  };
  // <== Get Paper Type fn ==>
  const handleGetPaperType = (itemId: string, price: number) => {
    setSelectPaperType(
      paperType?.data.find((item: any) => item._id === itemId) || null
    );
    setTotalAmount(
      (printingPaperSize?.height || 0) *
        (printingPaperSize?.width || 0) *
        price +
        (selectColorMode?.price || 0)
    );
  };
  // <== Get Color Mode fn ==>
  const handleGetColorMode = (itemId: string, price: number) => {
    setSelectColorMode(
      colorMode?.data.find((item: any) => item._id === itemId) || null
    );
    setTotalAmount(
      (printingPaperSize?.height || 0) *
        (printingPaperSize?.width || 0) *
        (selectPaperType?.price || 0) +
        price
    );
  };
  // <== get uploaded file fn ==>
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    dispatch(setFile(file));
  };

  // <== paperSize, paperType,colorMode API's ===>
  const { data: paperSize } = useGetPrintingRequestsQuery(
    "printingSetupType=Paper Size"
  );
  const { data: paperType } = useGetPrintingRequestsQuery(
    "printingSetupType=Paper Type"
  );
  const { data: colorMode } = useGetPrintingRequestsQuery(
    "printingSetupType=Printing Color Mode"
  );

  return (
    <section className="lg:max-w-[1280px] w-full mx-auto">
      <div className="mb-7">
        <h3 className="[font-size:_clamp(1.2em,4vw,1.8em)] font-bold">
          Request for a Printing
        </h3>
        <p className="text-base text-gray-500">
          We will print your design and send it to your delivery address
        </p>
      </div>

      <div className="flex flex-col md:flex-row lg:flex-row gap-7 justify-between">
        <div className="w-full md:w-8/12 lg:w-8/12">
          <div className="border rounded-lg p-7 ">
            <h4 className="text-lg mb-3">Printing Paper size ( Feet )</h4>
            <div className="mb-7 flex flex-wrap gap-6 ">
              {paperSize?.data?.map((item: any) => (
                <div
                  key={item._id}
                  className={`${
                    item._id === printingPaperSize?._id
                      ? "shadow-[0px_4px_24px_0px_rgba(127,_53,_205,_0.15)] border border-fuchsia-700"
                      : ""
                  } flex items-center justify-center rounded-lg cursor-pointer w-[100px] h-[150px] border hover:border-fuchsia-700`}
                  onClick={() =>
                    handleGetPaperSize(item._id, item.height, item.width)
                  }
                >
                  {item.width} x {item.height}
                </div>
              ))}
            </div>
          </div>

          <div className="border rounded-lg p-7 my-5 ">
            <div className="border-b pb-7">
              <h4 className="text-lg mb-5">What type of paper do you need?</h4>
              <div className="flex flex-wrap gap-5 ">
                {paperType?.data?.map((item: any) => (
                  <span
                    key={item._id}
                    className={`list-none py-3 px-5 border whitespace-nowrap rounded-lg text-gray-500 cursor-pointer ${
                      item._id === selectPaperType?._id
                        ? "bg-gradient-to-r from-[#C83B62] to-[#7F35CD] text-white border-fuchsia-700"
                        : ""
                    }`}
                    onClick={() => handleGetPaperType(item._id, item.price)}
                  >
                    {item.paperType}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-b pb-7 mt-7 ">
              <h4 className="text-lg mb-5">Printing Mode</h4>
              <div className="flex flex-wrap gap-5 ">
                {colorMode?.data?.map((item: any) => (
                  <span
                    key={item._id}
                    className={`list-none py-3 px-5 border whitespace-nowrap rounded-lg text-gray-500 cursor-pointer ${
                      item._id === selectColorMode?._id
                        ? "bg-gradient-to-r from-[#C83B62] to-[#7F35CD] text-white border-fuchsia-700"
                        : ""
                    }`}
                    onClick={() => handleGetColorMode(item._id, item.price)}
                  >
                    {item.printingColorMode}
                  </span>
                ))}
              </div>
            </div>

            <div className="pb-7 mt-7 ">
              <h4 className="text-lg mb-5">Attachment</h4>
              <label
                htmlFor="profileFileInput"
                className="border py-3 px-10 flex items-center justify-center gap-4 rounded-lg bg-gradient-to-r from-[#C83B62] to-[#7F35CD] text-transparent bg-clip-text  hover:border-fuchsia-700 hover:duration-500  cursor-pointer hover:shadow-[0px_4px_24px_0px_rgba(127,_53,_205,_0.15)]  "
              >
                <input
                  id="profileFileInput"
                  onChange={handleFileUpload}
                  className="hidden"
                  type="file"
                />{" "}
                <GradientUploadIcon />
                file upload
              </label>
            </div>
          </div>
        </div>

        <div className="w-full md:w-4/12 lg:w-4/12">
          <PringtingRequestOrderCard
            buttonText={"Proceed To Checkout"}
            href={
              isUserLoggedIn ? "printing-request/your-information" : "/login"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default PrintingRequest;
