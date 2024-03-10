"use client";
import React from "react";
import ProductCard from "./ProductCard";
import { useGetProductsQuery } from "@/redux/features/products/productsApi";

const ProductGridView = () => {
  // <== Products Query ==>
  const { data } = useGetProductsQuery(undefined);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3  gap-4 w-full">
      {data?.data?.map((product: any, index: any) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductGridView;
