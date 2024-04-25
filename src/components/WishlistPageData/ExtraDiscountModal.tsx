"use client";
import React, { useState } from "react";
import GlobalModal from "../UI/modal/GlobalModal";
import { IconX } from "@tabler/icons-react";
import Image from "next/image";
import getExtraBanner from "@/assets/offerBannerTenD.svg";
import { useRouter } from "next/navigation";

const ExtraDiscountModal = () => {
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <div>
        <button onClick={() => setShowModal(true)}>
          <IconX />
          {""}
        </button>
      </div>
      <GlobalModal
        isVisible={showModal}
        onClose={handleCloseModal}
        modalController="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center backdrop-blur-sm z-50"
      >
        <div className="max-w-[500px] text-center py-7 bg-white rounded-lg px-10">
          <h5 className="text-black text-opacity-70 font-medium mb-2.5 text-[18px]">
            Wait!
          </h5>
          <p className="text-center text-[16px] text-black text-opacity-70">
            We have an offer for you!
          </p>
          <h2 className="text-center font-semibold text-[20px] ">
            Get an extra discount on your product
          </h2>
          <div className="flex items-center justify-center my-6">
            <Image src={getExtraBanner} alt="Discount Banner" />
          </div>
          <p>Do you want to complete your order?</p>
          <button className="flex items-center justify-center main-bg-color text-white uppercase py-3 my-5 w-full rounded-lg">
            complete order with 10% off
          </button>
          <button
            onClick={() => router.back()}
            className="text-black text-opacity-70 border-b"
          >
            No Thank You
          </button>
        </div>
      </GlobalModal>
    </>
  );
};

export default ExtraDiscountModal;
