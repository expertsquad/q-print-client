import React from "react";
import GlobalModal from "../UI/modal/GlobalModal";
import { IconAlertTriangle } from "@tabler/icons-react";

const DeleteGlobalModal = ({ handleModal }: any) => {
  return (
    <div>
      <GlobalModal
        isVisible={handleModal}
        onClose={handleModal}
        mainClassName="md:w-[450px]"
      >
        <div className="px-7 py-8 flex flex-col items-center gap-5">
          <div className="w-12 h-12 rounded-full bg-red-opacity-10 flex items-center justify-center">
            <IconAlertTriangle className="text-red-color" stroke={2} />
          </div>
          <span className="font-bold text-lg">Are you sure?</span>
          <p>
            This action cannot be undone. <br />
            Your all data will be lost!
          </p>
          <div className="flex items-center justify-center gap-5">
            <button
              className="border rounded-md px-10 py-3.5"
              onClick={() => handleModal()}
            >
              No
            </button>
            <button className="bg-main-bg-color-opacity-32 px-10 py-3.5 rounded-md">
              Yes
            </button>
          </div>
        </div>
      </GlobalModal>
    </div>
  );
};

export default DeleteGlobalModal;
