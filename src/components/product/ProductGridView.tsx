"use client";
import React from "react";
import ProductCard from "./ProductCard";
import { useGetProductsQuery } from "@/redux/features/products/productsApi";
import { IProduct } from "@/types/productsType";

const ProductGridView = () => {
  // <== Products Query ==>
  const { data } = useGetProductsQuery("");

  return (
    <div className="w-full md:place-items-start place-items-center flex items-center justify-center md:justify-between flex-wrap gap-5 ">
      {data?.data?.map((product: IProduct) => (
        <ProductCard key={product?._id} product={product} />
      ))}
    </div>
  );
};

export default ProductGridView;
