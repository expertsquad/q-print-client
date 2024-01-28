import { orderTrackData } from "@/constants";
import { IconX } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

const OrderedItemData = () => {
  return (
    <div>
      {orderTrackData.map((data: any) => (
        <div
          className="flex justify-between items-center py-3 px-2 border-b md:gap-3"
          key={data._id}
        >
          <div className="border rounded-2xl p-1 h-[60px] w-[60px] md:w-1/1">
            <Image
              src={data.productPhoto}
              alt="Product photo"
              width={70}
              height={50}
              style={{ objectFit: "cover", borderRadius: "5px" }}
              className="w-full h-full"
            />
          </div>
          <div className="md:w-1/3">
            <div className="flex">
              <h5 className="text-[16px] text-black text-opacity-90 text-wrap line-clamp-2">
                {data.description}
              </h5>
              <span className="cursor-pointer block md:hidden">
                <IconX />
              </span>
            </div>
            <div className="flex justify-between items-center md:hidden">
              <p>
                {data.quantity} x {data.price}
              </p>
              <span>
                {data.quantity * data.price}{" "}
                <small className="uppercase">qar</small>
              </span>
            </div>
          </div>

          <p className="hidden md:block md:w-1/1">
            {data.quantity} x {data.price} <small>QAR</small>
          </p>
          <h6 className="hidden md:block md:w-1/1">
            {data.quantity * data.price} <small>QAR</small>
          </h6>
          <button className="btn bg-transparent hidden md:block md:w-1/1">
            Cancel{" "}
          </button>
        </div>
      ))}
    </div>
  );
};

export default OrderedItemData;
