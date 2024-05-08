"use client";
import { setCategory } from "@/redux/features/brand/productsByCategorySlice";
import { useGetCategoryQuery } from "@/redux/features/category/categories";
import { setFilterOption } from "@/redux/features/category/categoryFilterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

const MostPopularSelectOption = () => {
  // <== Get category name for category wise product ==>
  const { data: allCategory } = useGetCategoryQuery("");
  const { category } = useAppSelector((state) => state.productByCategory);
  const dispatch = useAppDispatch();
  return (
    <div className="border  px-3 rounded-lg  shadow-lg md:shadow-none">
      <select
        title="Filter Options"
        className="py-2 rounded-md outline-none border-none w-full md:w-min bg-transparent text-gray-700 active:text-fuchsia-700"
        name="options"
        id=""
        value={category}
        onChange={(e) => dispatch(setCategory(e.target.value))}
      >
        {allCategory?.data?.map((category: any) => (
          <option key={category?._id} value={category?.categoryName}>
            {category?.categoryName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MostPopularSelectOption;
