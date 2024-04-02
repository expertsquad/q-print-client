import BrandsCard from "../UI/card/BrandsCard";
import PriceRangeCard from "../UI/card/PriceRangeCard";
import DiscountWidgetCard from "../UI/card/DiscountWidgetCard";

const BrandLeftSideWidget = () => {
  return (
    <aside>
      <BrandsCard />
      <PriceRangeCard />
      <DiscountWidgetCard />
    </aside>
  );
};

export default BrandLeftSideWidget;
