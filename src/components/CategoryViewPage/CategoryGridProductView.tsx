import React from "react";
import ProductGridView from "../product/ProductGridView";
import FilterButton from "../UI/btn/FilterButton";
import MostPopularSelectOption from "../UI/card/MostPopularSelectOption";

const CategoryGridProductView = () => {
  return (
    <div className="w-full  mt-5 ">
      {/* category page grid view  header section */}
      <div className="flex justify-between">
        <div>
          <h2 className="text-2xl font-bold ">Printer</h2>
          <p className="text-gray-500">
            <span className="text-black font-bold"> 867 </span>
            Results found.
          </p>
        </div>
        <div className="lg:block md:block hidden">
          <MostPopularSelectOption />
        </div>
        <div className="lg:hidden md:hidden block">
          {" "}
          <FilterButton />
        </div>
      </div>

      <div className="mt-6 ">
        <ProductGridView />
      </div>
    </div>
  );
};

export default CategoryGridProductView;
