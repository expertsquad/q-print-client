"use client";
import { IconAdjustmentsHorizontal } from "@tabler/icons-react";
import React, { useState } from "react";
import GlobalModal from "../modal/GlobalModal";

const Filter = () => {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <button onClick={() => setShowModal(true)}>
        <span className="text-black text-opacity-50">
          <IconAdjustmentsHorizontal width={24} height={24} />
        </span>
        {""}
      </button>
    </>
  );
};

export default Filter;
