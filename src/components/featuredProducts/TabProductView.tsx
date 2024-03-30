"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useGetProductsQuery } from "@/redux/features/products/productsApi";
import ProductCard from "../product/ProductCard";
import { IProduct } from "@/types/productsType";

const TabProductView = () => {
  const [activeTab, setActiveTab] = useState("topSell");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  // <== Finding Top Selling Products ==>
  const { data: topSelling } = useGetProductsQuery(
    `sortBy=totalSoldQuantity&sortOrder=desc`
  );
  const slicedTopSellingProducts = topSelling?.data?.slice(0, 8);
  // <== Finding Popular Products ==>
  const { data: mostPopular } = useGetProductsQuery(
    `sortBy=averageRating&sortOrder=desc`
  );
  const slicedMostPopularProducts = mostPopular?.data?.slice(0, 8);

  // <== Finding New Products ==>
  const { data: newProduct } = useGetProductsQuery(
    `sortBy=createdAt&sortOrder=desc`
  );
  const slicedNewProductProducts = newProduct?.data?.slice(0, 8);

  return (
    <div className=" mx-auto mt-4 w-full ">
      <div className="flex justify-center items-center rounded-full gap-1 md:gap-2 lg:gap-2 text-sm md:text-base lg:text-base bg-[#F1F3F5] max-w-fit mx-auto ">
        <button
          className={`px-6 py-2 rounded-full ${
            activeTab === "topSell" ? "border-fuchsia-700 border bg-white" : ""
          }`}
          onClick={() => handleTabClick("topSell")}
        >
          TOP SELL
        </button>
        <button
          className={`px-6 py-2  rounded-full ${
            activeTab === "popular" ? "border-fuchsia-700 border bg-white " : ""
          }`}
          onClick={() => handleTabClick("popular")}
        >
          POPULAR
        </button>
        <button
          className={`px-6 py-2 rounded-full ${
            activeTab === "newest" ? "border-fuchsia-700 border bg-white" : ""
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
              href="#"
            >
              {" "}
              See all &rarr;
            </Link>

            <div className="w-full md:place-items-start place-items-center flex items-center justify-center md:justify-between flex-wrap gap-5 ">
              {slicedTopSellingProducts?.map((product: IProduct) => (
                <div key={product?._id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === "popular" && (
          <div>
            <Link
              className="flex items-center justify-end gap-2 main-text-color py-2 animate-bounce "
              href="#"
            >
              {" "}
              See all &rarr;
            </Link>
            <div className="w-full md:place-items-start place-items-center flex items-center justify-center md:justify-normal flex-wrap gap-5 ">
              {slicedMostPopularProducts?.map((product: IProduct) => (
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
              className="flex items-center justify-end gap-2 main-text-color py-2 animate-bounce "
              href="#"
            >
              {" "}
              See all &rarr;
            </Link>
            <div className="w-full md:place-items-start place-items-center flex items-center justify-center md:justify-normal flex-wrap gap-5 ">
              {slicedNewProductProducts?.map((product: IProduct) => (
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
