"use client";
import { useGetProductsQuery } from "@/redux/features/products/productsApi";
import ProductCard from "../product/ProductCard";
import { IProduct } from "@/types/productsType";
import { useState } from "react";
import { IconLoader } from "@tabler/icons-react";

const ExploreNew = () => {
  const { data, isLoading } = useGetProductsQuery("");

  const [visibleProducts, setVisibleProducts] = useState(4);

  const handleShowMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 4);
  };
  return (
    <section className="lg:my-20 md:my-20 my-8">
      <div className="flex items-center justify-center flex-col py-7">
        <small className="[font-size:_clamp(0.9em,4vw,1.1em)] main-text-color ">
          Explore Now
        </small>
        <h3 className="[font-size:_clamp(1em,5vw,1.6em)] font-bold">
          All Products
        </h3>
      </div>

      {isLoading ? (
        <span className="flex items-center justify-center">loading...</span>
      ) : (
        <div className="w-full md:place-items-start place-items-center flex items-center justify-center md:justify-normal flex-wrap gap-5 ">
          {data?.data?.slice(0, visibleProducts).map((product: IProduct) => (
            <div key={product?._id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}

      {data?.data?.length > visibleProducts && (
        <div className="flex items-center justify-center mt-5">
          <button
            className="flex items-center gap-2 main-bg-color px-3 py-2 rounded-md text-white"
            onClick={handleShowMore}
          >
            <IconLoader stroke={2} />
            Show More
          </button>
        </div>
      )}
    </section>
  );
};

export default ExploreNew;
