import BrandsCard from "../UI/card/BrandsCard";
import PriceRangeCard from "../UI/card/PriceRangeCard";
import DiscountWidgetCard from "../UI/card/DiscountWidgetCard";
import AvailabilityCard from "../UI/card/AvailabilityCard";

const BrandLeftSideWidget = () => {
  return (
    <aside>
      <BrandsCard />
      <PriceRangeCard />
      {/* <AvailabilityCard /> */}
      <DiscountWidgetCard />
    </aside>
  );
};

export default BrandLeftSideWidget;
