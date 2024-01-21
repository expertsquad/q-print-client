import { orderTrackData } from "@/constants";
import Image from "next/image";
import React from "react";

const OrderedItemData = () => {
  return (
    <div>
      {orderTrackData.map((data: any) => (
        <div className=" order-item-data" key={data._id}>
          <div className="border rounded-2xl p-1">
            <Image
              sizes="100vw"
              src={data.productPhoto}
              alt="Product photo"
              width={50}
              height={50}
              style={{ objectFit: "cover", borderRadius: "5px" }}
            />
          </div>
          <h5 className="text-[16px] text-black text-opacity-90 text-wrap">
            {data.description}
          </h5>
          <p>
            {data.quantity} x {data.price} <small>QAR</small>
          </p>
          <h6>
            {data.quantity * data.price} <small>QAR</small>
          </h6>
          <button className="btn bg-transparent">Cancel </button>
        </div>
      ))}
    </div>
  );
};

export default OrderedItemData;
