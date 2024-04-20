import { IconX } from "@tabler/icons-react";

const ModalCloseBtn = ({ handleClose }: any) => {
  return (
    <button
      onClick={handleClose}
      className="hover:rotate-90 transition-all print:hidden"
    >
      <IconX stroke={1} color="#000" />
    </button>
  );
};

export default ModalCloseBtn;
