import React from "react";
import GlobalModal from "../UI/modal/GlobalModal";
import { IconX } from "@tabler/icons-react";

const QuickProductViewModal = ({ handleCloseModal, showModal }: any) => {
  return (
    <div>
      <GlobalModal
        isVisible={showModal}
        onClose={handleCloseModal}
        modalController={`fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center backdrop-blur-sm z-50`}
      >
        <div className="md:max-w-[650px] bg-white p-7 rounded-lg">
          <div className="flex justify-end ">
            <button onClick={handleCloseModal}>
              <IconX />
              {""}
            </button>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit natus
            quis rerum perferendis aliquam sint architecto vel eos voluptatum
            exercitationem?
          </div>
        </div>
      </GlobalModal>
    </div>
  );
};

export default QuickProductViewModal;
