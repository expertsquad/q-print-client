"use client";
import { useGetCategoryQuery } from "@/redux/features/category/categories";
import FilterButton from "../UI/btn/FilterButton";
import ProductGridView from "../product/ProductGridView";

const BrandProductGridView = () => {
  const { data } = useGetCategoryQuery("");
  //   const category = data?.data?.map((category: any) => {
  //     return category;
  //   });

  return (
    <div className="w-full  mt-5 ">
      {/* category page grid view  header section */}
      <div className="flex justify-between">
        <div>
          <h2 className="text-2xl font-bold ">HP</h2>
          <p className="text-gray-500">
            <span className="text-black font-bold"> 867 </span>
            Results found.
          </p>
        </div>
        <div className="lg:block md:block hidden">
          <select
            title="Category Name"
            name=""
            id=""
            className="border outline-none"
          >
            {data?.data?.map((category: any) => (
              <option key={category?.categoryName} value="">
                {category?.categoryName}
              </option>
            ))}
          </select>
        </div>
        <div className="lg:hidden md:hidden block">
          {" "}
          <FilterButton />
        </div>
      </div>

      <div className="mt-6 ">
        <ProductGridView />
      </div>
    </div>
  );
};

export default BrandProductGridView;
