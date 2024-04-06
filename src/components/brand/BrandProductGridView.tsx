"use client";
import { useGetCategoryQuery } from "@/redux/features/category/categories";
import FilterButton from "../UI/btn/FilterButton";
import { useGetProductsQuery } from "@/redux/features/products/productsApi";
import ProductCard from "../product/ProductCard";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/hook";
import { setCategory } from "@/redux/features/brand/productsByCategorySlice";

const BrandProductGridView = () => {
  const dispatch = useDispatch();
  const { brandName } = useAppSelector((state) => state.productByBrandName);
  const { category } = useAppSelector((state) => state.productByCategory);
  // const { minPrice, maxPrice } = useAppSelector(
  //   (state) => state.priceRangeSlice
  // );

  const { minPrice, maxPrice } = useAppSelector(
    (state) => state.priceRangeSlice
  );

  console.log(minPrice, maxPrice, "from main page");

  // <== Get category name for category wise product ==>
  const { data: allCategory } = useGetCategoryQuery("");

  // <== Brand and Category filtered products ==>
  const { data: filteredProducts } = useGetProductsQuery(
    `category.categoryName=${category}&${
      brandName && `&brand.brandName=${brandName}`
    }&${
      minPrice &&
      maxPrice &&
      `variants.sellingPrice[gte]=${minPrice}&variants.sellingPrice[lte]=${maxPrice}`
    }`
  );

  // <== Get all products length ==>
  const { data: allProducts } = useGetProductsQuery("");

  return (
    <div className="w-full  mt-5 ">
      <div className="flex justify-between">
        <div>
          <span className="text-2xl font-bold">
            {brandName.length > 1 ? brandName : "Brands"}
          </span>
          <p className="text-gray-500">
            <span className="text-black font-bold">
              {" "}
              {allProducts?.data?.length}{" "}
            </span>
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

      <div className="mt-6 flex justify-between flex-wrap ">
        {filteredProducts?.data?.map((product: any) => (
          <ProductCard key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BrandProductGridView;
