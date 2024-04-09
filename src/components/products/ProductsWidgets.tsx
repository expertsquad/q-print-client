"use client";
import { useGetProductsQuery } from "@/redux/features/products/productsApi";
import ProductCard from "../product/ProductCard";
import { IProduct } from "@/types/productsType";
import MostPopularSelectOption from "../UI/card/MostPopularSelectOption";
import { useState } from "react";
import { IconLoader } from "@tabler/icons-react";

const ProductsWidgets = () => {
  const [visibleProducts, setVisibleProducts] = useState(4);

  const handleShowMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 4);
  };

  const { data: allProducts } = useGetProductsQuery("");
  return (
    <div className="max-w-[1280px] mx-auto mb-20">
      <div className="flex justify-between mb-5">
        <div className="flex items-center gap-2">
          <span className="text-black font-bold">
            {allProducts?.data?.length}
          </span>
          <span>Products Found</span>
        </div>
        <div className="">
          <MostPopularSelectOption />
        </div>
      </div>

      <div className="w-full md:place-items-start place-items-center flex items-center justify-center md:justify-between flex-wrap gap-5">
        {allProducts?.data
          ?.slice(0, visibleProducts)
          .map((product: IProduct) => (
            <div key={product?._id}>
              <ProductCard product={product} />
            </div>
          ))}
      </div>

      {allProducts?.data?.length > visibleProducts && (
        <div className="flex items-center justify-center mt-5 md:mt-20">
          <button
            className="flex items-center gap-2 main-bg-color px-5 py-2.5 rounded-md text-white"
            onClick={handleShowMore}
          >
            <IconLoader stroke={2} />
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductsWidgets;
