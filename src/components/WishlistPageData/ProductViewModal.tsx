"use client";
import { IconEye, IconX } from "@tabler/icons-react";
import GlobalModal from "../UI/modal/GlobalModal";
import { useState } from "react";

const ProductViewModal = () => {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div>
        <button
          onClick={() => setShowModal(true)}
          className="border border-[#F2F2F2] rounded-full p-2.5 text-black text-opacity-50"
        >
          <IconEye width={17} height={17} />
          {""}
        </button>
      </div>
      <GlobalModal
        isVisible={showModal}
        onClose={handleCloseModal}
        modalController="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center backdrop-blur-sm z-50"
      >
        <div className="md:max-w-[900px] bg-white p-7 rounded-lg relative">
          {/* //Here is a demo of close modal by icon, that's bellow down */}

          {/* {/|* ==main container of modal data== *|/} */}
          <div>Kemon achen</div>
        </div>
      </GlobalModal>
    </>
  );
};

export default ProductViewModal;
