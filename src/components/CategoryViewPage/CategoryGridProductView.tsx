"use client";
import { useAppSelector } from "@/redux/hook";
import FilterButton from "../UI/btn/FilterButton";
import MostPopularSelectOption from "../UI/card/MostPopularSelectOption";
import { useGetProductsQuery } from "@/redux/features/products/productsApi";
import ProductCard from "../product/ProductCard";
import { IProduct } from "@/types/productsType";
import ProductCardSkeleton from "../shared/Skeleton/ProductCardSkeleton";
import ProductsFilter from "../products/ProductsFilter";
import { useState } from "react";
type SortOption = "MostPopular" | "Recent" | "HighPrice" | "LowPrice";
const CategoryGridProductView = () => {
  // const { options } = useAppSelector((state) => state.categoryOption);

  const { options } = useAppSelector((state) => state.productsFilterOptions);
  console.log(options);

  const { maxPrice, minPrice } = useAppSelector(
    (state) => state.priceRangeSlice
  );

  function useGetProductsSortedQuery(
    sortBy: string,
    sortOrder: string,
    minPrice: number,
    maxPrice: number
  ) {
    const queryString = `sortBy=${sortBy}&sortOrder=${sortOrder}&${
      minPrice &&
      maxPrice &&
      `variants.sellingPrice[gte]=${minPrice}&variants.sellingPrice[lte]=${maxPrice}`
    }`;

    return useGetProductsQuery(queryString);
  }

  // <== Most Popular ==>
  const { data: mostPopular, isLoading } = useGetProductsSortedQuery(
    "averageRating",
    "desc",
    minPrice,
    maxPrice
  );

  // <== Recent | New Products ==>
  const { data: newProduct } = useGetProductsSortedQuery(
    "createdAt",
    "desc",
    minPrice,
    maxPrice
  );

  // <== High Price ==>
  const { data: highPrice } = useGetProductsSortedQuery(
    "variants.sellingPrice",
    "desc",
    minPrice,
    maxPrice
  );

  // <== Low Price ==>
  const { data: lowPrice } = useGetProductsSortedQuery(
    "variants.sellingPrice",
    "asc",
    minPrice,
    maxPrice
  );

  const sortOptions = {
    MostPopular: mostPopular,
    Recent: newProduct,
    HighPrice: highPrice,
    LowPrice: lowPrice,
  };

  const productsData = sortOptions[options as SortOption] || newProduct;

  return (
    <div className="w-full mt-5 ">
      {/* category page grid view  header section */}
      <div className="flex justify-between">
        <div>
          <h2 className="text-2xl font-bold ">Printer</h2>
          <p className="text-gray-500">
            <span className="text-black font-bold">
              {" "}
              {productsData?.meta?.total}{" "}
            </span>
            Results found.
          </p>
        </div>
        <div className="lg:block md:block hidden">
          <ProductsFilter />
        </div>
        <div className="lg:hidden md:hidden block">
          {" "}
          <FilterButton />
        </div>
      </div>

      <div className="my-6 grid grid-cols-product-grid md:gap-10 gap-5 ">
        {isLoading
          ? [...Array(12)].map((_, index) => {
              return <ProductCardSkeleton key={index} />;
            })
          : productsData?.data?.map((product: IProduct) => (
              <ProductCard key={product?._id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default CategoryGridProductView;
