import { IconX } from "@tabler/icons-react";
import React, { useEffect } from "react";

interface GlobalModalProps {
  children?: React.ReactNode;
  yourCustomStyle?: string;
  mainClassName?: string;
  isVisible?: boolean;
  onClose: (value: boolean) => void;
  modalController?: string;
}

const GlobalModal = ({
  children,
  mainClassName,
  yourCustomStyle,
  isVisible,
  onClose,
  modalController,
}: GlobalModalProps) => {
  const handleClose = () => {
    onClose(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`${modalController} cursor-pointer w-dvw h-dvh fixed inset-0 bg-black z-50 bg-opacity-40 flex items-center justify-center`}
      id="close-by-outside"
      onClick={handleClose}
    >
      <div
        className={`${mainClassName} rounded-lg bg-white`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`${yourCustomStyle}`}>{children}</div>
      </div>
    </div>
  );
};

export default GlobalModal;
