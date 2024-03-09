"use client";
import { shopByCategories } from "@/constants";
import ShopCategoryCard from "./ShopCategoryCard";
import { useGetCategoryQuery } from "@/redux/features/category/categories";

const ShopByCategory = () => {
  // <== Get Category ==>
  const { data } = useGetCategoryQuery(undefined);

  // <== Slice 0-3 for show at home page ==>
  const slicedCategory = data?.data?.slice(0, 3);
  return (
    <section className=" lg:mt-20 md:mt-20 mt-8">
      <div>
        <div className="flex items-center justify-center flex-col mb-6">
          <p className="[font-size:_clamp(0.75em,5vw,1em)] text-gray-500">
            Shop by Category
          </p>
          <h3 className="[font-size:_clamp(1em,5vw,1.6em)] font-bold">
            Browser Our Hottest Categories
          </h3>
        </div>
        <div className="flex gap-4 justify-between overflow-scroll no-scrollbar ">
          {data?.data?.map((category: any, index: number) => (
            <ShopCategoryCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
