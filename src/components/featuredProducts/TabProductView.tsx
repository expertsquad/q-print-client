"use client";

import React, { useState } from "react";
import ProductCard from "../UI/card/ProductCard";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";

const TabProductView = () => {
  const [activeTab, setActiveTab] = useState("bestSeller");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className=" mx-auto mt-4 ">
      <div className="flex justify-center items-center rounded-full bg-red-500 ">
        <button
          className={`px-6 py-2 rounded-full ${
            activeTab === "bestSeller"
              ? "bg-blue-500 text-white"
              : "bg-gray-300"
          }`}
          onClick={() => handleTabClick("bestSeller")}
        >
          Best Seller
        </button>
        <button
          className={`px-6 py-2  rounded-full ${
            activeTab === "sales" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => handleTabClick("sales")}
        >
          Sales
        </button>
        <button
          className={`px-6 py-2 rounded-full ${
            activeTab === "hotOffer" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => handleTabClick("hotOffer")}
        >
          Hot Offer
        </button>
      </div>

      <div className="mt-4">
        {activeTab === "bestSeller" && (
          <div>
            <Link
              className="flex items-center justify-end gap-2 main-text-color py-2 "
              href="#"
            >
              {" "}
              See all &rarr;
            </Link>
            <ProductCard />
          </div>
        )}
        {activeTab === "sales" && (
          <div>
            <Link
              className="flex items-center justify-end gap-2 main-text-color py-2 "
              href="#"
            >
              {" "}
              See all &rarr;
            </Link>
            <ProductCard />
          </div>
        )}
        {activeTab === "hotOffer" && (
          <div>
            <Link
              className="flex items-center justify-end gap-2 main-text-color py-2 "
              href="#"
            >
              {" "}
              See all &rarr;
            </Link>
            <ProductCard />
          </div>
        )}
      </div>
    </div>
  );
};

export default TabProductView;
