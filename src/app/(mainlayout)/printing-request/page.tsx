"use client";
import GradientUploadIcon from "@/assets/svgIcons/GradientUploadIcon";
import PringtingRequestOrderCard from "@/components/PrintingRequest/PringtingRequestOrderCard";
import { setPrintingRequest } from "@/redux/features/printing-request/postPrintingRequestSlice";
import { useGetPrintingRequestsQuery } from "@/redux/features/printing-request/printing-request";
import { useAppSelector } from "@/redux/hook";
import { isLoggedIn } from "@/services/auth.service";

import { useDispatch } from "react-redux";

const PrintingRequest = () => {
  const isUserLoggedIn = isLoggedIn();
  const dispatch = useDispatch();
  const data = useAppSelector((state) => state.printingRequestOrder);
  console.log(data);
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

  // <== get uploaded file fn ==>
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (file) {
      const { name } = file;
      dispatch(
        setPrintingRequest({
          printingRequestFile: {
            name,
          },
        })
      );
    }
  };

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
                  onClick={() =>
                    dispatch(
                      setPrintingRequest({
                        paperSize: item,
                        totalQuantity: 1,
                      })
                    )
                  }
                  // @ts-ignore
                  className={`${item._id === data?.paperSize?._id
                      ? "shadow-[0px_4px_24px_0px_rgba(127,_53,_205,_0.15)] border border-fuchsia-700"
                      : ""
                    } flex items-center justify-center rounded-lg cursor-pointer w-[100px] h-[150px] border hover:border-fuchsia-700`}
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
                    onClick={() =>
                      dispatch(
                        setPrintingRequest({
                          paperTypeId: item?._id,
                          paperTypePrice: item?.price,
                        })
                      )
                    }
                    className={`list-none py-3 px-5 border whitespace-nowrap rounded-lg text-gray-500 cursor-pointer ${item._id === data?.paperTypeId
                      ? "bg-gradient-to-r from-[#C83B62] to-[#7F35CD] text-white border-fuchsia-700"
                      : ""
                      }`}
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
                    onClick={() =>
                      dispatch(
                        setPrintingRequest({
                          printingColorModeId: item?._id,
                          printingModePrice: item?.price,
                        })
                      )
                    }
                    className={`list-none py-3 px-5 border whitespace-nowrap rounded-lg text-gray-500 cursor-pointer ${item._id === data?.printingColorModeId
                      ? "bg-gradient-to-r from-[#C83B62] to-[#7F35CD] text-white border-fuchsia-700"
                      : ""
                      }`}
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
            data={data}
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
