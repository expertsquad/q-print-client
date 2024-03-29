"use client";
import { orderTrackData } from "@/constants";
import { IconX } from "@tabler/icons-react";
import Image from "next/image";
import React, { useState } from "react";
import GlobalModal from "../UI/modal/GlobalModal";

const OrderedItemData = () => {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
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
            <button
              onClick={() => setShowModal(true)}
              className="btn bg-transparent hidden md:block md:w-1/1"
            >
              Cancel{" "}
            </button>
          </div>
        ))}
      </div>
      {/* //Modal */}
      <GlobalModal
        isVisible={showModal}
        onClose={handleCloseModal}
        modalController="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center backdrop-blur-sm z-50"
      >
        <div className="md:max-w-[650px] bg-white p-7 rounded-lg">
          {/* //Here is a demo of close modal by icon, that's bellow down */}

          {/* <div className="flex justify-end ">
            <button onClick={handleCloseModal}>
              <IconX />
              {""}
            </button>
          </div> */}
          <h4 className="text-black text-opacity-80 text-[18px] font-semibold mb-7 md:mb-11 text-center">
            Cancellation Request
          </h4>
          <form action="">
            <label
              htmlFor="cancelation reason"
              className="text-black text-opacity-70"
            >
              Cancellation Reason
            </label>
            <select
              className={`group w-full border mt-3 py-3 pl-3 rounded-lg outline-none main-text-color mb-7 appearance-none focus:border-fuchsia-500 ${""}`}
              name="cancelation reason"
              id="cancelation reason"
            >
              {[
                "Select Reason",
                "Change of Mind",
                "Duplicate Order",
                "Change my location",
                "Change / Combine Order",
                "Delivery time is too long",
                "Shipping fees",
                "Change Payment method",
              ].map((opt, index) => (
                <option
                  key={opt}
                  value={opt}
                  selected={index === 0}
                  hidden={index === 0}
                  className="main-text-color dropdown-content:hover:bg-fuchsia-500 hover:text-white"
                >
                  {opt}
                </option>
              ))}
            </select>
            <p>
              {" "}
              <label htmlFor="comments" className="text-black text-opacity-70">
                Comments
              </label>
            </p>
            <textarea
              className="border w-full pl-3 pt-3.5 rounded-lg resize-none outline-none focus:border-fuchsia-500 text-black text-opacity-70 mt-3"
              name="comments"
              id=""
              cols={30}
              rows={5}
              placeholder="(Comments)"
            ></textarea>
            <button className="main-bg-color text-white w-full py-2.5 rounded-3xl mt-7 md:mt-11">
              Submit
            </button>
          </form>
        </div>
      </GlobalModal>
    </>
  );
};

export default OrderedItemData;
