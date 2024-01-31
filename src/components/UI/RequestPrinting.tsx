"use client";
import React, { useState } from "react";
import GlobalModal from "./modal/GlobalModal";
import {
  IconBolt,
  IconMapPin,
  IconPhone,
  IconUser,
  IconX,
} from "@tabler/icons-react";
import CustomInput from "../shared/CustomInput";

const RequestPrinting = () => {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <button
        className="main-bg-color text-white flex items-center justify-center"
        onClick={() => setShowModal(true)}
      >
        Place Order
      </button>
      <GlobalModal
        isVisible={showModal}
        onClose={handleCloseModal}
        modalController="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center backdrop-blur-sm z-50"
      >
        <div className="w-full h-screen md:h-auto md:max-w-[452px] md:max-h-w-[450px] bg-white p-7 rounded-lg relative">
          <div className="absolute top-5 right-5 text-black text-opacity-70">
            <button
              onClick={handleCloseModal}
              className="text-black text-opacity-70"
            >
              <IconX width={20} height={20} />
              {""}
            </button>
          </div>
          {/* ==Main content== */}
          <div className="relative">
            <h1 className="text-center md:text-left text-black text-opacity-80 text-[18px] md:text-[24px] font-semibold mb-7">
              Request for a printing
            </h1>
            <p>Enter Your shipping address</p>
            <form action="">
              <label className="text-black text-opacity-50" htmlFor="user-name">
                Full Name
              </label>
              <CustomInput
                placeholder="Type Name"
                placeholderIcon={<IconUser />}
                customClassName="mt-2 mb-3"
              />
              <label className="text-black text-opacity-50" htmlFor="user-name">
                Phone Number
              </label>
              <CustomInput
                placeholder="+974
                  "
                placeholderIcon={<IconPhone />}
                customClassName="mt-2 mb-3 w-[390px]"
              />
              <label className="text-black text-opacity-50" htmlFor="user-name">
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
      </GlobalModal>
    </>
  );
};

export default RequestPrinting;
