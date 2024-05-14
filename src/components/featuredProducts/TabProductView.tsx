"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useGetProductsQuery } from "@/redux/features/products/productsApi";
import ProductCard from "../product/ProductCard";
import { IProduct } from "@/types/productsType";
import ProductCardSkeleton from "../shared/Skeleton/ProductCardSkeleton";

const TabProductView = () => {
  const [activeTab, setActiveTab] = useState("topSell");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  // <== Finding Top Selling Products ==>
  const { data: topSelling, isLoading: loadingTopSelling } = useGetProductsQuery(
    `sortBy=totalSoldQuantity&sortOrder=desc`
  );



  const slicedTopSellingProducts = topSelling?.data?.slice(0, 8);
  // <== Finding Popular Products ==>
  const { data: mostPopular, isLoading: loadingMostPopular } = useGetProductsQuery(
    `sortBy=averageRating&sortOrder=desc`
  );
  const slicedMostPopularProducts = mostPopular?.data?.slice(0, 8);

  // <== Finding New Products ==>
  const { data: newProduct, isLoading: loadingNewProduct } = useGetProductsQuery(
    `sortBy=createdAt&sortOrder=desc`
  );
  const slicedNewProductProducts = newProduct?.data?.slice(0, 8);

  return (
    <div className=" mx-auto mt-4 w-full ">
      <div className="flex justify-center items-center rounded-full gap-1 md:gap-2 lg:gap-2 text-sm md:text-base lg:text-base bg-[#F1F3F5] max-w-fit mx-auto whitespace-nowrap ">
        <button
          className={`md:px-6 py-2.5 px-3.5 rounded-full ${activeTab === "topSell" ? "border-fuchsia-700 border bg-white" : ""
            }`}
          onClick={() => handleTabClick("topSell")}
        >
          TOP SELL
        </button>
        <button
          className={`md:px-6 py-2.5 px-3.5  rounded-full ${activeTab === "popular" ? "border-fuchsia-700 border bg-white " : ""
            }`}
          onClick={() => handleTabClick("popular")}
        >
          POPULAR
        </button>
        <button
          className={`md:px-6 py-2.5 px-3.5 rounded-full ${activeTab === "newest" ? "border-fuchsia-700 border bg-white" : ""
            }`}
          onClick={() => handleTabClick("newest")}
        >
          NEWEST
        </button>
      </div>

      <div className="mt-4">
        {activeTab === "topSell" && (
          <div>
            <Link
              className="flex items-center justify-end gap-2 main-text-color py-2 animate-bounce "
              href="/products"
            >
              {" "}
              See all &rarr;
            </Link>

            <div className="grid grid-cols-product-grid md:gap-10 gap-5 ">
              {
                loadingTopSelling ? (
                  [...Array(8)].map((_, index) => {
                    return (
                      <ProductCardSkeleton key={index} />
                    )
                  })
                ) :


                  slicedTopSellingProducts?.map((product: IProduct) => (
                    <div key={product?._id}>
                      <ProductCard loading={loadingTopSelling} product={product} />
                    </div>
                  ))}
            </div>
          </div>
        )}
        {activeTab === "popular" && (
          <div>
            <Link
              className="flex items-center justify-end gap-2 main-text-color py-2  "
              href="#"
            >
              {" "}
              See all &rarr;
            </Link>
            <div className="grid grid-cols-product-grid md:gap-10 gap-5 ">
              {
                loadingMostPopular
                  ? (
                    [...Array(8)].map((_, index) => {
                      return (
                        <ProductCardSkeleton key={index} />
                      )
                    })
                  ) :

                  slicedMostPopularProducts?.map((product: IProduct) => (
                    <div key={product?._id}>
                      <ProductCard product={product} />
                    </div>
                  ))}
            </div>
          </div>
        )}
        {activeTab === "newest" && (
          <div>
            <Link
              className="flex items-center justify-end gap-2 main-text-color py-2  "
              href="#"
            >
              {" "}
              See all &rarr;
            </Link>
            <div className="grid grid-cols-product-grid md:gap-10 gap-5  ">
              {
                loadingNewProduct ? (
                  [...Array(8)].map((_, index) => {
                    return (
                      <ProductCardSkeleton key={index} />
                    )
                  })
                ) :
                  slicedNewProductProducts?.map((product: IProduct) => (
                    <div key={product?._id}>
                      <ProductCard product={product} />
                    </div>
                  ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabProductView;
