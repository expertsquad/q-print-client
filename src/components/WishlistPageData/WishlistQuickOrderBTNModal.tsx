"use client";
import {
  IconBolt,
  IconEye,
  IconMapPin,
  IconMinus,
  IconPhone,
  IconPlus,
  IconTrash,
  IconUser,
  IconX,
} from "@tabler/icons-react";
import React, { useState } from "react";
import GlobalModal from "../UI/modal/GlobalModal";
import CustomInput from "../shared/CustomInput";
import Image from "next/image";
import { cartProductsData } from "@/constants";

const WishlistQuickOrderBTNModal = () => {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <div>
        <button
          onClick={() => setShowModal(true)}
          className="uppercase flex items-center justify-center gap-2 main-bg-color text-white  py-2 rounded-lg w-full"
        >
          <IconBolt /> Quick Order
        </button>
      </div>
      <GlobalModal
        isVisible={showModal}
        onClose={handleCloseModal}
        modalController="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center backdrop-blur-sm z-50"
      >
        <div className="md:max-w-[900px] bg-white p-7 rounded-lg relative">
          {/* //Here is a demo of close modal by icon, that's bellow down */}

          <div className="absolute top-5 right-5 text-black text-opacity-70">
            <button
              onClick={handleCloseModal}
              className="text-black text-opacity-70"
            >
              <IconX width={20} height={20} />
              {""}
            </button>
          </div>
          {/* {/|* ==main container of modal data== *|/} */}
          <div className="flex items-center">
            {/* ==Quick product data== */}
            <div className="flex-1 pr-5 border-r">
              <div className="flex flex-col overflow-scroll no-scrollbar max-w-[450px] max-h-[400px]">
                {cartProductsData.map((data: any) => (
                  <div className="flex gap-5 border-b mb-5" key={data._id}>
                    <div className="flex items-center justify-center h-[55px] w-[70px] px-1 border">
                      <Image
                        src={data?.image}
                        alt="Product Image"
                        width={66}
                        height={66}
                        style={{ objectFit: "cover" }}
                        className="w-full"
                      />
                    </div>
                    <div>
                      {/* Title and Delete BTN */}
                      <div className="flex items-center gap-3">
                        <p className="text-black text-opacity-90 text-[16px] line-clamp-1">
                          {data?.title}
                        </p>
                        <span className="cursor-pointer text-black text-opacity-50">
                          <IconTrash width={20} height={20} />
                        </span>
                      </div>
                      {/* // */}
                      <div className="my-2">
                        <p className="text-black text-opacity-50 text-[12px]">
                          {data?.brandName}
                        </p>
                      </div>
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <div className="flex items-center gap-2">
                          <button className="border p-1 rounded-full">
                            {""}
                            <IconMinus width={14} height={14} />
                          </button>
                          <span>{data?.availableProduct}</span>
                          <button className="border p-1 rounded-full">
                            {""}
                            <IconPlus width={14} height={14} />
                          </button>
                          <span className="text-[12px]">x</span>
                          <span>{data?.price} QAR</span>
                        </div>
                        <b className="main-text-color">{data.price} QAR</b>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* ==shipping, subtotal, and total== */}
              <div>
                <div className="pt-3">
                  {/* --SubTotal */}
                  <div className="flex justify-between items-center mb-2.5">
                    <p className="text-black text-opacity-50 text-[14px]">
                      Subtotal
                    </p>
                    <p className="text-black text-opacity-50 text-[14px]">
                      <b>{"1300"}</b> QAR
                    </p>
                  </div>
                  {/* --Shipping */}
                  <div className="flex justify-between items-center mb-2.5 pb-2 border-b">
                    <p className="text-black text-opacity-50 text-[14px]">
                      Shipping
                    </p>
                    <p className="text-black text-opacity-50 text-[14px]">
                      Free
                    </p>
                  </div>
                  {/* --Total Amount */}
                  <div className="flex justify-between items-center">
                    <b className="text-black text-[14px]">Subtotal</b>
                    <b className="text-black text-[14px]">
                      <b>{"1300"}</b> QAR
                    </b>
                  </div>
                </div>
              </div>
            </div>
            {/* ==cash on delivery form== */}
            <div className="flex-1 pl-5">
              <h4 className="text-black text-[18px] font-semibold mb-2.5 uppercase ">
                Cash on delivery
              </h4>
              <p className="text-black text-opacity-50 text-[16px] mb-7 md:mb-9">
                Enter Your shipping address
              </p>
              <form action="">
                <label
                  className="text-black text-opacity-50"
                  htmlFor="user-name"
                >
                  Full Name
                </label>
                <CustomInput
                  placeholder="Type Name"
                  placeholderIcon={<IconUser />}
                  customClassName="mt-2 mb-3"
                />
                <label
                  className="text-black text-opacity-50"
                  htmlFor="user-name"
                >
                  Phone Number
                </label>
                <CustomInput
                  placeholder="+974
                  "
                  placeholderIcon={<IconPhone />}
                  customClassName="mt-2 mb-3"
                />
                <label
                  className="text-black text-opacity-50"
                  htmlFor="user-name"
                >
                  Address
                </label>
                <CustomInput
                  placeholder="Doha Qatar"
                  placeholderIcon={<IconMapPin />}
                  customClassName="mt-2"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center py-3 rounded-lg main-bg-color text-white w-full mt-9 md:mt-12"
                >
                  <span>
                    <IconBolt />
                  </span>
                  CONFIRM ORDER - {"1300.00"} QAR
                </button>
              </form>
            </div>
          </div>
        </div>
      </GlobalModal>
    </>
  );
};

export default WishlistQuickOrderBTNModal;
