"use client";
import { useSearchParams } from "next/navigation";
import { useRef, useEffect } from "react";

interface GlobalModalProps {
  title?: string;
  children?: React.ReactNode;
  onClose?: () => void;
  className?: string;
  onSubmit?: () => void;
  openModal?: () => void;
}

const GlobalModal = ({
  title,
  children,
  onClose,
  className,
  onSubmit,
  openModal,
}: GlobalModalProps) => {
  const searchParams = useSearchParams();
  const modalRef = useRef<null | HTMLDialogElement>(null);
  const showModal = searchParams.get("showDialog");

  useEffect(() => {
    if (showModal === "y") {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [showModal]);

  // == Onclose btn functionality for modal
  const closeModal = () => {
    modalRef.current?.close();
    if (onClose) {
      onClose();
    }
  };

  const openModals = () => {
    if (openModal) {
      openModal();
    }
  };

  const modal: JSX.Element | null =
    showModal === "y" ? (
      <dialog ref={modalRef}>
        <div>
          <h1>{title}</h1>
          <button onClick={closeModal}>x</button>
        </div>
        <div>{children}</div>
      </dialog>
    ) : null;

  return modal;
};

export default GlobalModal;
