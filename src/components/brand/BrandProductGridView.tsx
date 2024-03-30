"use client";
import { useGetCategoryQuery } from "@/redux/features/category/categories";
import FilterButton from "../UI/btn/FilterButton";
import ProductGridView from "../product/ProductGridView";
import { useGetProductsQuery } from "@/redux/features/products/productsApi";
import ProductCard from "../product/ProductCard";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/hook";
import { setCategory } from "@/redux/features/brand/productsByCategorySlice";

const BrandProductGridView = () => {
  const dispatch = useDispatch();
  const { category } = useAppSelector((state) => state.productByCategory);

  const { data: allCategory } = useGetCategoryQuery("");

  const { data: categoryWiseProducts } = useGetProductsQuery(
    `category.categoryName=${category}`
  );

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
            name={"category"}
            id=""
            className="border outline-none"
            value={category}
            onChange={(e) => dispatch(setCategory(e.target.value))}
          >
            {allCategory?.data?.map((category: any) => (
              <option key={category?.categoryId} value={category?.categoryName}>
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

      <div className="mt-6 flex flex-wrap gap-5">
        {categoryWiseProducts?.data?.map((product: any) => (
          <ProductCard key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BrandProductGridView;
