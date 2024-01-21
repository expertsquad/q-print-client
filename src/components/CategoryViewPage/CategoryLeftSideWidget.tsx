import React from "react";
import CategoriesCard from "../UI/card/CategoriesCard";
import PriceRangeCard from "../UI/card/PriceRangeCard";
import AvailabilityCard from "../UI/card/AvailabilityCard";
import BrandsCard from "../UI/card/BrandsCard";
import DiscountWidgetCard from "../UI/card/DiscountWidgetCard";

const CategoryLeftSideWidget = () => {
  return (
    <aside>
      <CategoriesCard />
      <PriceRangeCard />
      <AvailabilityCard />
      <BrandsCard />
      <DiscountWidgetCard />
    </aside>
  );
};

export default CategoryLeftSideWidget;
