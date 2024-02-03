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

  return (
    <div className={`${modalController}`} id="close-by-outside">
      <div className={`${className}`}>
        <div className={`${yourCustomStyle}`}>{children}</div>
      </div>
    </div>
  );
};

export default GlobalModal;
