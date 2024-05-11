"use client";

import { setProductsFilterOption } from "@/redux/features/products/filterProducts";
import { useAppDispatch } from "@/redux/hook";

const ProductsFilter = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="border px-3 rounded-md">
      <select
        name=""
        id=""
        className="py-2 rounded-md outline-none border-none w-full md:w-min bg-transparent text-gray-700 active:text-fuchsia-700"
        onChange={(e) => dispatch(setProductsFilterOption(e.target.value))}
      >
        <option value="MostPopular">Most Popular</option>
        <option value="Recent">New Product</option>
        <option value="HighPrice">High Price</option>
        <option value="LowPrice">Low Price</option>
      </select>
    </div>
  );
};

export default ProductsFilter;
