import { IconX } from "@tabler/icons-react";

const ModalCloseBtn = ({ handleClose, icon }: any) => {
  return (
    <button
      onClick={handleClose}
      className={`${icon ? "" : "hover:rotate-90 transition-all print:hidden"}`}
    >
      {icon ? (
        <div className="-mb-6 -ml-2 bg-white p-1 rounded-full drop-shadow-sm">
          <span>{icon}</span>
        </div>
      ) : (
        <span>
          <IconX stroke={1} color="#000" />
        </span>
      )}
    </button>
  );
};

export default ModalCloseBtn;
