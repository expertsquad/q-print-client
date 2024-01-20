import React from "react";
import CategoriesCard from "../UI/card/CategoriesCard";
import PriceRangeCard from "../UI/card/PriceRangeCard";
import AvailabilityCard from "../UI/card/AvailabilityCard";
import BrandsCard from "../UI/card/BrandsCard";

const CategoryLeftSideWidget = () => {
  return (
    <aside>
      <CategoriesCard />
      <PriceRangeCard />
      <AvailabilityCard />
      <BrandsCard />
    </aside>
  );
};

export default CategoryLeftSideWidget;
