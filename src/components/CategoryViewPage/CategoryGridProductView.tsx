"use client";
import { useAppSelector } from "@/redux/hook";
import ProductGridView from "../product/ProductGridView";
import FilterButton from "../UI/btn/FilterButton";
import MostPopularSelectOption from "../UI/card/MostPopularSelectOption";
import { useGetProductsQuery } from "@/redux/features/products/productsApi";
import ProductCard from "../product/ProductCard";
import { IProduct } from "@/types/productsType";

const CategoryGridProductView = () => {
  const { options } = useAppSelector((state) => state.categoryOption);

  // <== Most Popular ==>
  const { data: mostPopular } = useGetProductsQuery(
    `sortBy=averageRating&sortOrder=desc`
  );

  // <== Recent | New Products ==>
  const { data: newProduct } = useGetProductsQuery(
    `sortBy=createdAt&sortOrder=desc`
  );
  // <== High Price ==>
  const { data: highPrice } = useGetProductsQuery(
    `sortBy=variants.sellingPrice&sortOrder=desc`
  );
  // <== Low Price ==>
  const { data: lowPrice } = useGetProductsQuery(
    `sortBy=variants.sellingPrice&sortOrder=asc`
  );

  let productsData;
  if (options === "MostPopular") {
    productsData = mostPopular;
  } else if (options === "Recent") {
    productsData = newProduct;
  } else if (options === "HighPrice") {
    productsData = highPrice;
  } else if (options === "LowPrice") {
    productsData = lowPrice;
  } else {
    productsData = newProduct;
  }
  return (
    <div className="w-full  mt-5 ">
      {/* category page grid view  header section */}
      <div className="flex justify-between">
        <div>
          <h2 className="text-2xl font-bold ">Printer</h2>
          <p className="text-gray-500">
            <span className="text-black font-bold"> 867 </span>
            Results found.
          </p>
        </div>
        <div className="lg:block md:block hidden">
          <MostPopularSelectOption />
        </div>
        <div className="lg:hidden md:hidden block">
          {" "}
          <FilterButton />
        </div>
      </div>

      <div className="mt-6 w-full md:place-items-start place-items-center flex items-center justify-center md:justify-between flex-wrap gap-5">
        {productsData?.data?.map((product: IProduct) => (
          <ProductCard key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryGridProductView;
