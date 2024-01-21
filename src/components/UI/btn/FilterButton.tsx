"use client";

import { IconFilter } from "@tabler/icons-react";
import React, { useState } from "react";
import CategoriesCard from "../card/CategoriesCard";
import AvailabilityCard from "../card/AvailabilityCard";
import BrandsCard from "../card/BrandsCard";
import DiscountWidgetCard from "../card/DiscountWidgetCard";
import PriceRangeCard from "../card/PriceRangeCard";
import MostPopularSelectOption from "../card/MostPopularSelectOption";

const FilterButton = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleButtonClick = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <>
      <button
        className="border py-2 px-4 flex items-center justify-center gap-1 rounded-lg"
        onClick={handleButtonClick}
      >
        <IconFilter /> <span>Filter</span>
      </button>

      {isModalVisible && (
        <div className="drawer z-50">
          <input
            id="my-drawer"
            type="checkbox"
            className="drawer-toggle"
            checked={isModalVisible}
            onChange={handleButtonClick}
          />
          <div className="drawer-content ">{/* Page content here */}</div>
          <div className="drawer-side ">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}

              <MostPopularSelectOption />
              <CategoriesCard />
              <PriceRangeCard />
              <AvailabilityCard />
              <BrandsCard />
              <DiscountWidgetCard />
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default FilterButton;
