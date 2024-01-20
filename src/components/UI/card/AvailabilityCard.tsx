import React from "react";

const AvailabilityCard = () => {
  return (
    <div className="px-5 py-8 rounded-xl shadow-custom3xl shadow-lg">
      <h1 className="text-[#00000066] font-semibold text-base">AVAILABILITY</h1>
      <hr className="my-5" />
      <div className="flex flex-col gap-5">
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            className="checkbox border checked:border-fuchsia-700 [--chkbg:purple] [--chkfg:white]"
            name="inStock"
            id="inStock"
          />
          <label
            htmlFor="inStock"
            className="text-[#475156] text-base cursor-pointer"
          >
            In Stock
          </label>
        </div>
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            className="checkbox border checked:border-fuchsia-700 [--chkbg:purple] [--chkfg:white]"
            name="preOrder"
            id="preOrder"
          />
          <label
            htmlFor="preOrder"
            className="text-[#475156] text-base cursor-pointer"
          >
            Pre Order
          </label>
        </div>
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            className="checkbox border checked:border-fuchsia-700 [--chkbg:purple] [--chkfg:white]"
            name="upcoming"
            id="upcoming"
          />
          <label
            htmlFor="upcoming"
            className="text-[#475156] text-base cursor-pointer"
          >
            Upcoming
          </label>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityCard;
