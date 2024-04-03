import { IconPlus } from "@tabler/icons-react";
import { IconMinus } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const PringtingRequestOrderCard = ({ href, totalAmount }: any) => {
  return (
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
        <p className="text-lg font-medium text-gray-800">{totalAmount} QAR</p>
      </div>
      {/* delivery Charge */}
      <div className="flex justify-between items-center px-5 py-4   ">
        <small className="text-base text-gray-500">Delivery Charge</small>{" "}
        <p className="text-lg font-medium ">50 QAR</p>
      </div>

      <div className="flex justify-between items-center px-5 py-4 border-t">
        <small className="text-lg font-medium text-gray-900">Total</small>{" "}
        <p className=" text-[22px]  font-bold bg-gradient-to-r from-[#C83B62] to-[#7F35CD] text-transparent bg-clip-text">
          1350 QAR
        </p>
      </div>

      <div className="flex justify-center items-center px-5 py-4   ">
        <Link
          href={`${href}`}
          className="bg-gradient-to-r from-[#C83B62] to-[#7F35CD] w-full rounded-lg py-3 text-white  shadow-sm hover:duration-500 hover:shadow-lg text-center"
        >
          Place Order
        </Link>
      </div>
    </div>
  );
};

export default PringtingRequestOrderCard;
