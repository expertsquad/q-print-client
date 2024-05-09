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
        <option value="mostPopular">Most Popular</option>
        <option value="newProduct">New Produt</option>
        <option value="highPrice">High Price</option>
        <option value="lowPrice">Low Price</option>
      </select>
    </div>
  );
};

export default ProductsFilter;
