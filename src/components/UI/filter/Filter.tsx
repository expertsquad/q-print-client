"use client";
import { IconAdjustmentsHorizontal } from "@tabler/icons-react";
import React, { useState } from "react";
import GlobalModal from "../modal/GlobalModal";

const Filter = () => {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <button onClick={() => setShowModal(true)}>
        <span className="text-black text-opacity-70">
          <IconAdjustmentsHorizontal width={24} height={24} />
        </span>
        {""}
      </button>
      <GlobalModal
        isVisible={showModal}
        onClose={handleCloseModal}
        modalController="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center backdrop-blur-sm z-50"
      >
        <div className="w-full h-screen md:h-auto md:max-w-[460px] md:max-h-w-[450px] bg-white p-7 rounded-lg relative">
          {/* ==Main content== */}
          <div className="relative">
            <h1 className="text-center md:text-left text-black text-opacity-80 text-[18px] md:text-[24px] font-semibold mb-7">
              My Reviews
            </h1>
          </div>
        </div>
      </GlobalModal>
    </>
  );
};

export default Filter;
