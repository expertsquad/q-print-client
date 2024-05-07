"use client";
import { useGetProductsQuery } from "@/redux/features/products/productsApi";
import ProductCard from "../product/ProductCard";
import { IProduct } from "@/types/productsType";
import { useState } from "react";
import { IconLoader } from "@tabler/icons-react";
import ProductCardSkeleton from "../shared/Skeleton/ProductCardSkeleton";

const ExploreNew = () => {
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [limit, setLimit] = useState(10);
  const [loadingMore, setLoadingMore] = useState(false);

  const { data, isLoading } = useGetProductsQuery(`limit=${limit}`);

  const handleShowMore = () => {
    setLimit((preValue) => (preValue += 10));
    setLoadingMore(true);
    setTimeout(() => {
      setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 8);
      setLoadingMore(false);
    }, 2000);
  };
  return (
    <section className="md:my-20 my-8">
      <div className="flex items-center justify-center flex-col py-7">
        <small className="[font-size:_clamp(0.9em,4vw,1.1em)] main-text-color">
          Explore Now
        </small>
        <h3 className="[font-size:_clamp(1em,5vw,1.6em)] font-bold">
          All Products
        </h3>
      </div>

      {isLoading ? (
        <div className="main-product-card-container">
          {[...Array(10)].map((_, index) => {
            return <ProductCardSkeleton key={index} />;
          })}
        </div>
      ) : (
        <div className="main-product-card-container">
          {data?.data?.slice(0, visibleProducts)?.map((product: IProduct) => (
            <div key={product?._id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}

      {data?.data?.length > visibleProducts && (
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
    </section>
  );
};

export default ExploreNew;
