"use client";
import React from "react";
import ProductCard from "./ProductCard";
import { useGetProductsQuery } from "@/redux/features/products/productsApi";

const ProductGridView = () => {
  // <== Products Query ==>
  const { data } = useGetProductsQuery("isDefault=true");

  return (
    <div className="w-full md:place-items-start place-items-center flex items-center justify-center md:justify-between flex-wrap gap-5 ">
      {data?.data?.map((product: any, index: any) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductGridView;
