import { IconX } from "@tabler/icons-react";
import React, { useEffect } from "react";

interface GlobalModalProps {
  children?: React.ReactNode;
  yourCustomStyle?: string;
  className?: string;
  isVisible?: boolean;
  onClose: (value: boolean) => void;
  modalController?: string;
}

const GlobalModal = ({
  children,
  className,
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
      className={`${modalController} `}
      id="close-by-outside"
      onClick={handleClose}
    >
      <div className={`${className}`} onClick={(e) => e.stopPropagation()}>
        <div className={`${yourCustomStyle}`}>{children}</div>
      </div>
    </div>
  );
};

export default GlobalModal;
