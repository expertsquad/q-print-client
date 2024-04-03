// "use client";
// import GradientUploadIcon from "@/assets/svgIcons/GradientUploadIcon";
// import PringtingRequestOrderCard from "@/components/PrintingRequest/PringtingRequestOrderCard";
// import { useGetPrintingRequestsQuery } from "@/redux/features/printing-request/printing-request";
// import { PrintingSetupTypes } from "@/types/printingRequestTypes";
// import { useState } from "react";

// const PrintingRequest = () => {
//   const { data: paperSize } = useGetPrintingRequestsQuery(
//     "printingSetupType=Paper Size"
//   );
//   const { data: paperType } = useGetPrintingRequestsQuery(
//     "printingSetupType=Paper Type"
//   );
//   const { data: colorMode } = useGetPrintingRequestsQuery(
//     "printingSetupType=Printing Color Mode"
//   );

//   // <== Paper choose fn ==>
//   const [printingPaperSize, setPrintingPaperSize] = useState<string | null>(
//     null
//   );
//   const [selectPaperType, setSelectPaperType] = useState<string | null>(null);
//   const [selectColorMode, setSelectColorMode] = useState<string | null>(null);

//   const [paperHeightWidth, setPaperHeightWidth] = useState<number | 0>(0);
//   const [paperTypePrice, setPaperTypePrice] = useState<number | 0>(0);
//   const [paperColorMode, setPaperColorMode] = useState<number | 0>(0);

//   const handleGetPaperSize = (itemId: string, height: any, width: any) => {
//     setPrintingPaperSize(itemId === printingPaperSize ? null : itemId);
//     setPaperHeightWidth(height * width);
//   };

//   const handleGetPaperType = (itemId: string, price: any) => {
//     setSelectPaperType(itemId === selectPaperType ? null : itemId);
//     setPaperTypePrice(price);
//   };
//   const handleGetColorMode = (itemId: string, price: any) => {
//     setSelectColorMode(itemId === selectColorMode ? null : itemId);
//     setPaperColorMode(price);
//   };

//   const calculatePaperSizeAndPaperType = paperTypePrice * paperHeightWidth;
//   const totalAmount = calculatePaperSizeAndPaperType + paperColorMode;

//   return (
//     <section className="lg:max-w-[1280px] w-full mx-auto">
//       <div className="mb-7">
//         <h3 className="[font-size:_clamp(1.2em,4vw,1.8em)] font-bold">
//           Request for a Printing
//         </h3>
//         <p className="text-base text-gray-500">
//           We will print your design and send it to your delivery address
//         </p>
//       </div>

//       <div className="flex flex-col md:flex-row lg:flex-row gap-7 justify-between">
//         <div className="w-full md:w-8/12 lg:w-8/12">
//           {/* == Printing Paper size (Feet) == */}
//           <div className=" border rounded-lg p-7 ">
//             <h4 className="text-lg mb-3">Printing Paper size ( Feet )</h4>
//             <div className="mb-7 flex flex-wrap gap-6 ">
//               {paperSize?.data?.map((item: PrintingSetupTypes) => (
//                 <div
//                   key={item?._id}
//                   className={`${
//                     item?._id === printingPaperSize
//                       ? "shadow-[0px_4px_24px_0px_rgba(127,_53,_205,_0.15)] border border-fuchsia-700"
//                       : ""
//                   }   flex items-center justify-center rounded-lg cursor-pointer w-[100px] h-[150px] border hover:border-fuchsia-700`}
//                   onClick={() =>
//                     handleGetPaperSize(item?._id, item?.height, item?.width)
//                   }
//                 >
//                   {item?.width} x {item?.height}
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className=" border rounded-lg p-7 my-5 ">
//             {/* == type of paper == */}
//             <div className="border-b pb-7">
//               <h4 className="text-lg mb-5">What type of paper do you need?</h4>
//               <div className="flex flex-wrap gap-5 ">
//                 {paperType?.data?.map((item: PrintingSetupTypes) => (
//                   <span
//                     key={item?._id}
//                     className={`list-none py-3 px-5 border whitespace-nowrap rounded-lg text-gray-500 cursor-pointer ${
//                       item?._id === selectPaperType
//                         ? "bg-gradient-to-r from-[#C83B62] to-[#7F35CD] text-white border-fuchsia-700"
//                         : ""
//                     }`}
//                     onClick={() => handleGetPaperType(item?._id, item?.price)}
//                   >
//                     {item?.paperType}
//                   </span>
//                 ))}
//               </div>
//             </div>
//             {/* ==  printing mode == */}
//             <div className="border-b pb-7 mt-7 ">
//               <h4 className="text-lg mb-5">Printing Mode</h4>
//               <div className="flex flex-wrap gap-5 ">
//                 {colorMode?.data?.map((item: PrintingSetupTypes) => (
//                   <span
//                     key={item?._id}
//                     className={`list-none py-3 px-5 border whitespace-nowrap rounded-lg text-gray-500 cursor-pointer ${
//                       item?._id === selectColorMode
//                         ? "bg-gradient-to-r from-[#C83B62] to-[#7F35CD] text-white border-fuchsia-700"
//                         : ""
//                     }`}
//                     onClick={() => handleGetColorMode(item?._id, item?.price)}
//                   >
//                     {item?.printingColorMode}
//                   </span>
//                 ))}
//               </div>
//             </div>
//             {/* == file Attachment == */}
//             <div className="pb-7 mt-7 ">
//               <h4 className="text-lg mb-5">Attachment</h4>
//               <label
//                 htmlFor="profileFileInput"
//                 className="border py-3 px-10 flex items-center justify-center gap-4 rounded-lg bg-gradient-to-r from-[#C83B62] to-[#7F35CD] text-transparent bg-clip-text  hover:border-fuchsia-700 hover:duration-500  cursor-pointer hover:shadow-[0px_4px_24px_0px_rgba(127,_53,_205,_0.15)]  "
//               >
//                 <input id="profileFileInput" className="hidden" type="file" />{" "}
//                 <GradientUploadIcon />
//                 file upload
//               </label>
//             </div>
//           </div>
//         </div>

//         <div className="w-full md:w-4/12 lg:w-4/12">
//           <PringtingRequestOrderCard
//             totalAmount={totalAmount}
//             href={"printing-request/your-information"}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PrintingRequest;

"use client";
import GradientUploadIcon from "@/assets/svgIcons/GradientUploadIcon";
import PringtingRequestOrderCard from "@/components/PrintingRequest/PringtingRequestOrderCard";
import { useGetPrintingRequestsQuery } from "@/redux/features/printing-request/printing-request";
import { PrintingSetupTypes } from "@/types/printingRequestTypes";
import { useState } from "react";

const PrintingRequest = () => {
  const [printingPaperSize, setPrintingPaperSize] =
    useState<PrintingSetupTypes | null>(null);
  const [selectPaperType, setSelectPaperType] =
    useState<PrintingSetupTypes | null>(null);
  const [selectColorMode, setSelectColorMode] =
    useState<PrintingSetupTypes | null>(null);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  const handleStateUpdate = (
    itemId: string | null,
    setter: React.Dispatch<React.SetStateAction<string | null>>,
    currentValue: PrintingSetupTypes | null
  ) => {
    setter(itemId === (currentValue ? currentValue._id : null) ? null : itemId);
  };

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
                <input id="profileFileInput" className="hidden" type="file" />{" "}
                <GradientUploadIcon />
                file upload
              </label>
            </div>
          </div>
        </div>

        <div className="w-full md:w-4/12 lg:w-4/12">
          <PringtingRequestOrderCard
            totalAmount={totalAmount}
            href={"printing-request/your-information"}
          />
        </div>
      </div>
    </section>
  );
};

export default PrintingRequest;
