"use client";
import { IconX } from "@tabler/icons-react";
import Image from "next/image";
import React, { useState } from "react";
import GlobalModal from "../UI/modal/GlobalModal";
import { OrderedItemsTypes } from "@/types/orderTrackPage";
import { imageUrl } from "@/constants/imageUrl";

const OrderedItemData = ({
  orderedItems,
  totalQuantity,
  totalPrice,
  shippingStatus,
}: any) => {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <section>
      <div>
        {orderedItems?.map((data: OrderedItemsTypes) => (
          <div
            className="flex items-center md:order-item-data  py-3 px-2 border-b transition duration-300 ease-in-out hover:bg-gray-100"
            key={data._id}
          >
            {/* //Product Image */}
            <div className="w-[55px] h-[55px] relative shrink-0 mr-2 md:mr-0 md:w-1/1">
              <Image
                src={`${imageUrl}${data?.productPhotos[0]}`}
                alt="Product"
                fill
                objectFit="cover"
                className="w-full h-full top-0 left-0 object-cover border rounded-md p-1"
              />
            </div>
            {/* == Product Description == */}
            <div className="w-full">
              <div className="flex items-center justify-between w-full gap-3 md:gap-0">
                <span className="text-[16px] text-black text-opacity-90 line-clamp-1 md:line-clamp-2">
                  {data.productName}
                </span>
                <span className="cursor-pointer block md:hidden text-black text-opacity-70 active:text-fuchsia-600">
                  <IconX width={20} height={20} />
                </span>
              </div>
              <div className="flex justify-between items-center md:hidden">
                <p className="flex items-center">
                  {data?.orderQuantity}{" "}
                  <IconX stroke={1} height={20} width={20} /> $
                  {data?.variant?.sellingPrice}
                </p>
                <span className="main-text-color">
                  {data?.orderQuantity * data?.variant?.sellingPrice}
                  <small className="uppercase ml-0.5">qar</small>
                </span>
              </div>
            </div>
            {/* //Quantity & Price */}
            <p className="hidden md:block md:w-1/1">
              {data?.orderQuantity} x {data?.variant?.sellingPrice}{" "}
              <small className="">QAR</small>
            </p>
            {/* //Total Amount */}
            <h6 className="hidden md:block md:w-1/1 main-text-color font-semibold">
              {data?.orderQuantity * data?.variant?.sellingPrice}
              <small className="font-medium ml-0.5">QAR</small>
            </h6>
            {/* == Cancel product button == */}
            {shippingStatus?.length < 3 && (
              <button
                onClick={() => setShowModal(true)}
                className="py-1.5 border hover:border-fuchsia-500 px-3 rounded-md bg-transparent hidden md:block md:w-1/1"
              >
                <span className="block md:hidden">
                  <IconX />
                </span>
                <span className="hidden md:block">Cancel</span>
              </button>
            )}
          </div>
        ))}
        <div className="my-2.5 px-2">
          <span>{totalQuantity} Items,</span>
          <span>
            Total: <b className="main-text-color">{totalPrice}</b>
          </span>
          <small className="main-text-color ml-0.5">QAR</small>
        </div>
      </div>
      {/* === Product Cancel Modal === */}
      <GlobalModal
        isVisible={showModal}
        onClose={handleCloseModal}
        modalController={`fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center backdrop-blur-sm z-50`}
      >
        <div className="md:max-w-[650px] bg-white p-7 rounded-lg">
          {/* //Here is a demo of close modal by icon, that's bellow down */}

          <div className="flex justify-end ">
            <button onClick={handleCloseModal}>
              <IconX />
              {""}
            </button>
          </div>
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
    </section>
  );
};

export default OrderedItemData;
