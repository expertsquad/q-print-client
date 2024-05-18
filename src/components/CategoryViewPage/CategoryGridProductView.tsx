"use client";
import { useAppSelector } from "@/redux/hook";
import FilterButton from "../UI/btn/FilterButton";
import { useGetProductsQuery } from "@/redux/features/products/productsApi";
import ProductCard from "../product/ProductCard";
import { IProduct } from "@/types/productsType";
import ProductCardSkeleton from "../shared/Skeleton/ProductCardSkeleton";
import ProductsFilter from "../products/ProductsFilter";
import { IconX } from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import { resetBrandName } from "@/redux/features/brand/brandNameSlice";
import Image from "next/image";
import emptydata from "@/assets/empty-data.png";

type SortOption = "MostPopular" | "Recent" | "HighPrice" | "LowPrice";
const CategoryGridProductView = () => {
  const { options } = useAppSelector((state) => state.productsFilterOptions);
  const { brandName } = useAppSelector((state) => state.productByBrandName);
  const { selectedSubcategoryName } = useAppSelector(
    (state) => state.productsBySubcategory
  );
  const dispatch = useDispatch();

  const { maxPrice, minPrice } = useAppSelector(
    (state) => state.priceRangeSlice
  );

  function useGetProductsSortedQuery(
    sortBy: string,
    sortOrder: string,
    minPrice?: number,
    maxPrice?: number,
    selectedSubcategoryName?: string
  ) {
    const queryString = `sortBy=${sortBy}&sortOrder=${sortOrder}${
      selectedSubcategoryName
        ? `category.subcategory.subcategoryName=${selectedSubcategoryName}`
        : ""
    }&${
      minPrice &&
      maxPrice &&
      `variants.sellingPrice[gte]=${minPrice}&variants.sellingPrice[lte]=${maxPrice}&`
    }`;

    return useGetProductsQuery(queryString);
  }

  // <== Most Popular ==>
  const { data: mostPopular, isLoading } = useGetProductsSortedQuery(
    "averageRating",
    "desc",
    minPrice,
    maxPrice,
    selectedSubcategoryName
  );

  // <== Recent | New Products ==>
  const { data: newProduct } = useGetProductsSortedQuery(
    "createdAt",
    "desc",
    minPrice,
    maxPrice,
    selectedSubcategoryName
  );

  // <== High Price ==>
  const { data: highPrice } = useGetProductsSortedQuery(
    "variants.sellingPrice",
    "desc",
    minPrice,
    maxPrice,
    selectedSubcategoryName
  );

  // <== Low Price ==>
  const { data: lowPrice } = useGetProductsSortedQuery(
    "variants.sellingPrice",
    "asc",
    minPrice,
    maxPrice,
    selectedSubcategoryName
  );

  const sortOptions = {
    MostPopular: mostPopular,
    Recent: newProduct,
    HighPrice: highPrice,
    LowPrice: lowPrice,
  };

  const productsData = sortOptions[options as SortOption] || newProduct;

  const deleteBrandName = () => {
    dispatch(resetBrandName());
  };

  return (
    <div className="w-full mt-5 ">
      {/* category page grid view  header section */}
      <div className="flex justify-between">
        <div className="flex items-center gap-x-20">
          <div>
            <h2 className="text-2xl font-bold ">{selectedSubcategoryName}</h2>
            <p className="text-gray-500">
              <span className="text-black font-bold">
                {" "}
                {productsData?.meta?.total}{" "}
              </span>
              Results found.
            </p>
          </div>
          {brandName && (
            <div
              onClick={deleteBrandName}
              className="hidden md:flex items-center gap-x-3 cursor-pointer border py-1 px-2 rounded-full"
            >
              <span>{brandName}</span>
              <IconX stroke={2} width={16} height={16} />
            </div>
          )}
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
        {isLoading ? (
          [...Array(12)].map((_, index) => {
            return <ProductCardSkeleton key={index} />;
          })
        ) : productsData?.data?.length > 1 ? (
          productsData?.data?.map((product: IProduct) => (
            <ProductCard key={product?._id} product={product} />
          ))
        ) : (
          <div className="flex items-center justify-center col-span-3">
            <div className="flex flex-col items-center justify-center">
              <Image
                src={emptydata}
                alt="Empty data"
                width={200}
                height={200}
                priority={true}
              />
              <span>No Products Found!!</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryGridProductView;
