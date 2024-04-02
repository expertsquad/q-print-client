"use client";

import React, { useState } from "react";
import Link from "next/link";
import ProductGridView from "../product/ProductGridView";

const TabProductView = () => {
  const [activeTab, setActiveTab] = useState("topSell");

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };

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
          POPULAE
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
              className="flex items-center justify-end gap-2 main-text-color py-2  "
              href="#"
            >
              {" "}
              See all &rarr;
            </Link>
            <ProductGridView />
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
            <ProductGridView />
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
            <ProductGridView />
          </div>
        )}
      </div>
    </div>
  );
};

export default TabProductView;
