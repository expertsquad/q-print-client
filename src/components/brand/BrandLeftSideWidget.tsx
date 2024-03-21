import React from "react";
import BrandsCard from "../UI/card/BrandsCard";
import PriceRangeCard from "../UI/card/PriceRangeCard";
import AvailabilityCard from "../UI/card/AvailabilityCard";
import DiscountWidgetCard from "../UI/card/DiscountWidgetCard";

const BrandLeftSideWidget = () => {
  return (
    <aside>
      <BrandsCard />
      <PriceRangeCard />
      <AvailabilityCard />
      <DiscountWidgetCard />
    </aside>
  );
};

export default BrandLeftSideWidget;
