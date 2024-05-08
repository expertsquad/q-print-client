"use client";
import React, { useEffect, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { setPriceRange } from "@/redux/features/filterByPrice/FilterByPriceSlice";
import { useGetProductsQuery } from "@/redux/features/products/productsApi";
import { IProduct } from "@/types/productsType";

const PriceRangeCard = () => {
  const dispatch = useAppDispatch();
  const priceRange = useAppSelector((state) => state.priceRangeSlice);
  const { data } = useGetProductsQuery("limit=38");
  const products = data?.data;

  function findMinMaxPrices(products: any) {
    let minimumPrice = Infinity;
    let maximumPrice = -Infinity;

    products?.forEach((product: IProduct) => {
      product?.variants?.forEach((variant) => {
        if (variant?.sellingPrice < minimumPrice) {
          minimumPrice = variant?.sellingPrice;
        }
        if (variant?.sellingPrice > maximumPrice) {
          maximumPrice = variant?.sellingPrice;
        }
      });
    });

    return { minimumPrice, maximumPrice };
  }

  const { minimumPrice, maximumPrice } = findMinMaxPrices(products);

  const [range, setRange] = useState([
    priceRange.minPrice,
    priceRange.maxPrice,
  ]);

  const [minPrice, maxPrice] = range;

  const handleRangeChange = (newRange: any) => {
    setRange(newRange);
  };

  // <== Set debounce for stop unlimited  requests to server ==>
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      dispatch(setPriceRange({ minPrice: minPrice, maxPrice: maxPrice }));
    }, 1000);

    return () => clearTimeout(debounceTimer);
  }, [range, dispatch, minPrice, maxPrice]);

  const gradientBackground = {
    background:
      "-webkit-linear-gradient(90deg, #c83b62 0.32%, #7f35cd 102.21%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <div className=" p-6 mt-5 rounded-lg shadow-md">
      <h1 className="text-[#00000066] font-semibold text-base">PRICE RANGE</h1>
      <Slider
        range
        min={minimumPrice}
        max={maximumPrice}
        value={range}
        onChange={handleRangeChange}
        className="w-full mt-4"
        trackStyle={[{ background: gradientBackground.background }]}
        railStyle={{ background: "#d593" }}
        handleStyle={[
          {
            // background: "#fff",
            border: "4px solid #7F35CD",
          },
          {
            // background: "#fff",
            border: "4px solid #7F35CD",
          },
        ]}
      />
      <div className="flex justify-between items-center mt-4">
        <div className="rounded-lg">
          <input
            title="minumum range"
            type="text"
            name="priceRange"
            value={range[0]}
            className="w-[120px] p-2 rounded-lg border text-center focus:outline-none focus:border-fuchsia-700 focus:shadow-[0px_4px_24px_0px_rgba(127,_53,_205,_0.15)]"
          />
        </div>
        <div className="rounded-lg">
          <input
            title="maximum range"
            name="priceRange"
            type="text"
            value={range[1]}
            className="w-[120px] p-2 rounded-lg border text-center focus:outline-none focus:border-fuchsia-700 focus:shadow-[0px_4px_24px_0px_rgba(127,_53,_205,_0.15)]"
          />
        </div>
      </div>
    </div>
  );
};

export default PriceRangeCard;
