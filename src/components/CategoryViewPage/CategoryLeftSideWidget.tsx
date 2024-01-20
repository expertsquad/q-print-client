import React from "react";
import CategoriesCard from "../UI/card/CategoriesCard";
import PriceRangeCard from "../UI/card/PriceRangeCard";
import AvailabilityCard from "../UI/card/AvailabilityCard";
import BrandsCard from "../UI/card/BrandsCard";

const CategoryLeftSideWidget = () => {
  return (
    <div>
      <CategoriesCard />
      <PriceRangeCard />
      <AvailabilityCard />
      <BrandsCard />
    </div>
  );
};

export default CategoryLeftSideWidget;
