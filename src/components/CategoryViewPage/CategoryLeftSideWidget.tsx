import BrandsCard from "../UI/card/BrandsCard";
import CategoriesCard from "../UI/card/CategoriesCard";
import PriceRangeCard from "../UI/card/PriceRangeCard";


const CategoryLeftSideWidget = () => {
  return (
    <aside>
      <CategoriesCard />
      <PriceRangeCard />
      <BrandsCard />
      {/* <DiscountWidgetCard /> */}
    </aside>
  );
};

export default CategoryLeftSideWidget;
