import { IconX } from "@tabler/icons-react";

const ModalCloseBtn = ({ handleClose, icon }: any) => {
  return (
    <button
      onClick={() => {
        handleClose();
      }}
      className={`${
        icon ? "" : "hover:rotate-90 transition-all print:hidden "
      }`}
    >
      {icon ? (
        <div className="-mb-6 -ml-3 bg-white p-1 rounded-full md:drop-shadow-sm border">
          <span>{icon}</span>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <IconX stroke={1} className="text-black-opacity-70" />
        </div>
      )}
    </button>
  );
};

export default ModalCloseBtn;
