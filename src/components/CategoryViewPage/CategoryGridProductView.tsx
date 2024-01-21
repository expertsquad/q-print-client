import React from "react";
import ProductGridView from "../product/ProductGridView";
import { IconFilter } from "@tabler/icons-react";
import FilterButton from "../UI/btn/FilterButton";

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
          <select className="border px-4 py-3 rounded-md " name="" id="">
            <option value="Most Popular">Most Popular</option>
            <option value="Most Popular">Recent</option>
            <option value="Most Popular">High Price</option>
            <option value="Most Popular">Low Price</option>
          </select>
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
