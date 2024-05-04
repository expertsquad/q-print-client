"use client";
import { useGetProductsQuery } from "@/redux/features/products/productsApi";
import ProductCard from "../product/ProductCard";
import { IProduct } from "@/types/productsType";
import MostPopularSelectOption from "../UI/card/MostPopularSelectOption";
import { useState } from "react";
import { IconLoader } from "@tabler/icons-react";
import { useAppSelector } from "@/redux/hook";
import ProductCardSkeleton from "../shared/Skeleton/ProductCardSkeleton";

type SortOption = "MostPopular" | "Recent" | "HighPrice" | "LowPrice";

const ProductsWidgets = () => {
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [loadingMore, setLoadingMore] = useState(false);
  const [limit, setLimit] = useState(12);

  const { options } = useAppSelector((state) => state.categoryOption);

  // <== This fn is used to get products sorted by sortBy and sortOrder ==>
  const useSortedProducts = (sortBy: string, sortOrder: string) => {
    const { data } = useGetProductsQuery(
      `sortBy=${sortBy}&sortOrder=${sortOrder}&limit=${limit}`
    );
    return data;
  };
  const { data, isLoading } = useGetProductsQuery("");

  const mostPopular = useSortedProducts("averageRating", "desc");
  const newProduct = useSortedProducts("createdAt", "desc");
  const highPrice = useSortedProducts("variants.sellingPrice", "desc");
  const lowPrice = useSortedProducts("variants.sellingPrice", "asc");

  const sortOptions = {
    MostPopular: mostPopular,
    Recent: newProduct,
    HighPrice: highPrice,
    LowPrice: lowPrice,
  };

  const productsData = sortOptions[options as SortOption] || newProduct;

  // <== Handle show more products fn ==>
  const handleShowMore = () => {
    setLimit((preValue) => (preValue += 10));
    setLoadingMore(true);
    setTimeout(() => {
      setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 8);
      setLoadingMore(false);
    }, 2000);
  };

  return (
    <div className="max-w-[1280px] mx-auto mb-20">
      <div className="flex justify-between mb-10">
        <div className="flex items-center gap-1.5">
          <span className="text-black font-bold">
            {productsData?.data?.length}
          </span>
          <span className="text-sm">
            {productsData?.data?.length && "Products Found"}
          </span>
        </div>
        <div className="">
          <MostPopularSelectOption />
        </div>
      </div>

      <div className="w-full md:place-items-start place-items-center flex items-center justify-center md:justify-between flex-wrap gap-5">
        {isLoading
          ? [...Array(10)].map((_, index) => {
              return <ProductCardSkeleton key={index} />;
            })
          : productsData?.data
              ?.slice(0, visibleProducts)
              .map((product: IProduct) => (
                <div key={product?._id}>
                  <ProductCard product={product} />
                </div>
              ))}
      </div>

      {productsData?.data?.length > visibleProducts && (
        <div className="flex items-center justify-center mt-20">
          {loadingMore ? (
            <span className="loading loading-dots loading-lg bg-main-bg-color"></span>
          ) : (
            <button
              className="flex items-center gap-2 main-bg-color px-5 py-2.5 rounded-md text-white"
              onClick={handleShowMore}
              disabled={loadingMore}
            >
              <IconLoader stroke={2} />
              Show More
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductsWidgets;
