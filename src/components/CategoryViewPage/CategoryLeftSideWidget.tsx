import CategoriesCard from "../UI/card/CategoriesCard";
import BrandsCard from "../UI/card/BrandsCard";
import DiscountWidgetCard from "../UI/card/DiscountWidgetCard";
import PriceRangeCard from "../UI/card/PriceRangeCard";

const CategoryLeftSideWidget = () => {
  return (
    <aside>
      <CategoriesCard />
      <PriceRangeCard />
      <BrandsCard />
      <DiscountWidgetCard />
    </aside>
  );
};

export default CategoryLeftSideWidget;
