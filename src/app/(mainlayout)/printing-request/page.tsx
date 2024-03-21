"use client";
import GradientUploadIcon from "@/assets/svgIcons/GradientUploadIcon";
import { useGetPrintingRequestsQuery } from "@/redux/features/printing-request/printing-requestSlice";
import { IconPlus } from "@tabler/icons-react";
import { IconMinus } from "@tabler/icons-react";
import Link from "next/link";

const PrintingRequest = () => {
  const { data, isError } = useGetPrintingRequestsQuery(undefined);

  // <== Set printing data in a variable ==>
  const printingRequest = data?.data?.map((data: any) => {
    return data;
  });

  // <== Get Paper Size Type ==>
  // const getTypeOfPaper = printingRequest?.map((data: any) => {
  //   return data;
  // });

  return (
    <section className="lg:max-w-[1280px] w-full mx-auto">
      {/* top section start */}
      <div className="mb-7">
        <h3 className="[font-size:_clamp(1.2em,4vw,1.8em)] font-bold">
          Request for a Printing
        </h3>
        <p className="text-base text-gray-500">
          We will print your design and send it to your delivery address
        </p>
      </div>
      {/* top section ended */}
      <div className="flex flex-col md:flex-row lg:flex-row gap-7 justify-between">
        {/* left side main div start */}
        <div className="w-full md:w-8/12 lg:w-8/12">
          {/* printin sizes and custom size start  */}

          <div className=" border rounded-lg p-7 ">
            {/* Printing Paper size (Feet) */}
            <div>
              <h4 className="text-lg mb-3">Printing Paper size ( Feet )</h4>
              <div className="mb-7 flex flex-wrap gap-6 ">
                {printingRequest?.map((item: any, index: number) => (
                  <div
                    key={index}
                    className={`hover:shadow-[0px_4px_24px_0px_rgba(127,_53,_205,_0.15)] border hover:border-fuchsia-700 flex items-center justify-center rounded-lg cursor-pointer w-[100px] h-[150px]`}
                  >
                    {item?.paperSize?.width} x {item?.paperSize?.height}
                  </div>
                ))}
              </div>
            </div>
            {/* Custom paper size Order */}
            <div>
              <h4 className="text-lg mb-3">Custom Order (Feet)</h4>

              {/* custom Width and Height */}

              <div className=" flex md:items-center items-start justify-start md:flex-row flex-col gap-5  ">
                <div>
                  {" "}
                  <label
                    htmlFor="Width"
                    className="flex items-center justify-start gap-4"
                  >
                    Width
                    <input
                      className="border outline-none text-center py-2 rounded-lg focus:border-fuchsia-700 focus:shadow-[0px_4px_24px_0px_rgba(127,_53,_205,_0.15)] md:w-28 w-full"
                      type="number"
                    />{" "}
                  </label>
                </div>
                <div className="">
                  {" "}
                  <label
                    htmlFor="Height"
                    className="flex items-center justify-start gap-4"
                  >
                    Height
                    <input
                      className="border outline-none text-center py-2 rounded-lg focus:border-fuchsia-700 focus:shadow-[0px_4px_24px_0px_rgba(127,_53,_205,_0.15)]   md:w-28 w-full"
                      type="number"
                    />{" "}
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* printin sizes and custom size end  */}

          {/* Printing type and mode start */}

          <div className=" border rounded-lg p-7 my-5 ">
            {/* type of paper */}
            <div className="border-b pb-7">
              <h4 className="text-lg mb-5">What type of paper do you need?</h4>
              <div className="flex flex-wrap gap-5 ">
                {printingRequest?.map((item: any, index: number) => (
                  <li
                    key={index}
                    className="list-none py-3 px-5 border whitespace-nowrap rounded-lg text-gray-500 cursor-pointer hover:bg-gradient-to-r from-[#C83B62] to-[#7F35CD] hover:text-white hover:border-fuchsia-700 "
                  >
                    {item?.paperType}
                  </li>
                ))}
              </div>
            </div>

            {/* printing mode */}
            <div className="border-b pb-7 mt-7 ">
              <h4 className="text-lg mb-5">Printing Mode</h4>
              <div className="flex flex-wrap gap-5 ">
                {printingRequest?.map((item: any, index: number) => (
                  <li
                    key={index}
                    className="list-none py-3 px-5 border whitespace-nowrap rounded-lg text-gray-500 cursor-pointer hover:bg-gradient-to-r from-[#C83B62] to-[#7F35CD] hover:text-white hover:border-fuchsia-700 "
                  >
                    {item?.printingColorMode}
                  </li>
                ))}
              </div>
            </div>

            {/* Attachment */}

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

          {/* Printing type and mode end */}
        </div>

        {/* left side main div  end*/}

        {/* right side main div start */}

        {/* order place card start */}

        <div className="w-full md:w-4/12 lg:w-4/12">
          <div className=" border rounded-lg pb-5 mb-5">
            <h4 className="px-5 py-4 text-lg font-medium">Total Order</h4>
            <div className=" border-y ">
              <div className="flex justify-between items-center px-5 py-4   ">
                <small className="text-base text-gray-500">Item of print</small>{" "}
                {/* <p className="text-base text-gray-700">Coming</p> */}
                <div className="flex items-center gap-2">
                  <button className="border border-fuchsia-800 p-1 rounded-full text-black text-opacity-70 ">
                    {""}
                    <IconMinus stroke={3} width={13} height={13} />
                  </button>
                  <span>0</span>
                  <button className="border border-fuchsia-800 p-1 rounded-full text-black text-opacity-70 ">
                    {""}
                    <IconPlus stroke={3} width={13} height={13} />
                  </button>
                </div>
              </div>
            </div>

            {/* Printing price */}
            <div className="flex justify-between items-center px-5 py-4   ">
              <small className="text-base text-gray-500">Printing Price</small>{" "}
              <p className="text-lg font-medium text-gray-800">1300 QAR</p>
            </div>
            {/* delivery Charge */}
            <div className="flex justify-between items-center px-5 py-4   ">
              <small className="text-base text-gray-500">Delivery Charge</small>{" "}
              <p className="text-lg font-medium ">50 QAR</p>
            </div>

            <div className="px-5 py-2">
              <div className="  border-b"></div>
            </div>

            {/* grand total */}

            <div className="flex justify-between items-center px-5 py-4   ">
              <small className="text-lg font-medium text-gray-900">Total</small>{" "}
              <p className=" text-[22px]  font-bold bg-gradient-to-r from-[#C83B62] to-[#7F35CD] text-transparent bg-clip-text">
                1350 QAR
              </p>
            </div>

            <div className="flex justify-center items-center px-5 py-4   ">
              <Link
                href="/printing-request/your-information"
                className="bg-gradient-to-r from-[#C83B62] to-[#7F35CD] w-full rounded-lg py-3 text-white  shadow-sm hover:duration-500 hover:shadow-lg text-center"
              >
                Place Order
              </Link>
            </div>
          </div>
        </div>
        {/* order place card end */}

        {/* custom order place card start */}

        {/* 
        <div className="w-full md:w-4/12 lg:w-4/12">
          <div className=" border rounded-lg pb-5 mb-5">
            <p className="py-10 px-6">
              You are placing a custom order, So After placing an order, our one
              of agent will contact you soon.
            </p>

            <div className="flex justify-center items-center px-5 py-4   ">
              <Link
                href="/printing-request/your-information"
                className="bg-gradient-to-r from-[#C83B62] to-[#7F35CD] w-full rounded-lg py-3 text-white  shadow-sm hover:duration-500 hover:shadow-lg text-center  "
              >
                Place Order
              </Link>
            </div>
          </div>
        </div> */}

        {/* custom order place card end */}

        {/* right side main div end */}
      </div>
    </section>
  );
};

export default PrintingRequest;
