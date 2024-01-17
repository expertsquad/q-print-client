"use client";

import React, { useState } from "react";
import ProductCard from "../UI/card/ProductCard";

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
            We are in Best seller tab
            <ProductCard />
          </div>
        )}
        {activeTab === "sales" && (
          <div>
            Sales tab
            <ProductCard />
          </div>
        )}
        {activeTab === "hotOffer" && (
          <div>
            Here is our hot offer
            <ProductCard />
          </div>
        )}
      </div>
    </div>
  );
};

export default TabProductView;
