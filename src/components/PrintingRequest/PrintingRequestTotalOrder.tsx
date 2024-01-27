import Link from "next/link";
import React from "react";

const PrintingRequestTotalOrder = () => {
  return (
    <div className=" border rounded-lg pb-5 mb-5">
      <h4 className="px-5 py-4 text-lg font-medium">Total Order</h4>
      <div className=" border-y ">
        <div className="flex justify-between items-center px-5 py-4   ">
          <small className="text-base text-gray-500">Item of print</small>{" "}
          <p className="text-base text-gray-700">Coming</p>
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
          className="bg-gradient-to-r from-[#C83B62] to-[#7F35CD] w-full rounded-lg py-3 text-white hover:scale-105 shadow-sm hover:duration-500 hover:shadow-lg text-center "
        >
          Place Order
        </Link>
      </div>
    </div>
  );
};

export default PrintingRequestTotalOrder;
