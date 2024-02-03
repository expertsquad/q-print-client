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
  useEffect(() => {
    if (typeof document !== "undefined") {
      if (isVisible) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    }
  }, [isVisible]);

  if (!isVisible) return null;

  const handleClickOutsideToClose = (e: any) => {
    if (e.target.id === "close-by-outside") onClose(true);
  };
  return (
    <div
      className={`${modalController}`}
      id="close-by-outside"
      onClick={handleClickOutsideToClose}
    >
      <div className={`${className}`}>
        <div className={`${yourCustomStyle}`}>{children}</div>
      </div>
    </div>
  );
};

export default GlobalModal;
