"use client";
import {
  IconPackage,
  IconTruck,
  IconHeartHandshake,
} from "@tabler/icons-react";

const OrderedStep = () => {
  const status = ["Order Placed", "Packaging", "To Ship", "Order Received"];

  return (
    <div>
      <ol className="flex items-center w-full">
        <li className="flex w-full items-center text-[#C83B62] after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-[#d8b2bd]">
          <span className="flex items-center justify-center w-10 h-10  rounded-full lg:h-12 lg:w-12  shrink-0 border border-dashed">
            <IconPackage />
          </span>
        </li>

        <li className="flex w-full items-center text-[#C83B62] after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-[#d8b2bd]">
          <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 shrink-0">
            <IconPackage />
          </span>
        </li>
        <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
          <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
            <IconTruck />
          </span>
        </li>
        <li className="flex items-center w-full">
          <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
            <IconHeartHandshake />
          </span>
        </li>
      </ol>
    </div>
  );
};

export default OrderedStep;
