import BrandsCard from "../UI/card/BrandsCard";
import PriceRangeCard from "../UI/card/PriceRangeCard";
import NewProductDisountCard from "../UI/card/NewProductDisountCard";

const BrandLeftSideWidget = () => {
  return (
    <aside>
      <BrandsCard />
      <PriceRangeCard />
      <div className="mt-5">
        <NewProductDisountCard />
      </div>
    </aside>
  );
};

export default BrandLeftSideWidget;
