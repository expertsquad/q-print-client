"use client";
import { IconAdjustmentsHorizontal } from "@tabler/icons-react";
import React, { useState } from "react";

const Filter = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button onClick={() => setShowModal(true)} className="relative">
        <span className="text-black text-opacity-50">
          <IconAdjustmentsHorizontal width={24} height={24} />
        </span>
        {""}
      </button>

      {showModal && (
        <div className="p-7 md:max-w-sm w-full absolute top-12 bg-slate-200 rounded-lg">
          <h4 className="text-black text-opacity-80 text-xl">
            Find perfect Cartridges
          </h4>
          <p className="text-black text-opacity-50 text-sm">
            You can find the right Cartridges for your Printer
          </p>
          {/* ==Find perfect cartridges form== */}
          <form action="">
            <select
              className="w-full"
              title="Printer Brand"
              id="printerBrand"
              name="Printer Brand"
            >
              <option value="volvo">Volvo XC90</option>
              <option value="saab">Saab 95</option>
              <option value="mercedes">Mercedes SLK</option>
              <option value="audi">Audi TT</option>
            </select>
            <button
              type="submit"
              className="main-bg-color w-full py-2.5 rounded-md text-white"
            >
              Filter Cartridges
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Filter;
