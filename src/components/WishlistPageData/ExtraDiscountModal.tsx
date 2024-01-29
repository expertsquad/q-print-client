import React, { useState } from "react";
import GlobalModal from "../UI/modal/GlobalModal";
import { IconX } from "@tabler/icons-react";

const ExtraDiscountModal = () => {
  const [showModal, setShowModal] = useState(false);
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
      <GlobalModal isVisible={showModal} onClose={handleCloseModal}>
        Get extra discount
      </GlobalModal>
    </>
  );
};

export default ExtraDiscountModal;
