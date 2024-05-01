"use client";
import { useGetProductsQuery } from "@/redux/features/products/productsApi";
import NewProductDisountCard from "../UI/card/NewProductDisountCard";
import Link from "next/link";
import ProductCard from "../product/ProductCard";
import { IProduct } from "@/types/productsType";
import ProductCardSkeleton from "../shared/Skeleton/ProductCardSkeleton";

const NewProduct = () => {
  // <== Finding New Products ==>
  const { data, isLoading } = useGetProductsQuery(`sortBy=createdAt&sortOrder=desc`);
  const firstThreeProducts = data?.data?.slice(0, 3);
  return (
    <section className="flex justify-between gap-4 lg:mt-20 md:mt-20 mt-8 md:flex-row flex-col-reverse">
      <div className="">
        <NewProductDisountCard />
      </div>
      <div className="w-full">
        <div className="flex justify-between items-center w-full mb-5">
          <h3 className="  [font-size:_clamp(1em,5vw,1.6em)] font-bold">
            New Product
          </h3>
          <div className="flex items-center gap-2 animate-bounce">
            <Link
              className="flex  justify-end gap-2 main-text-color py-2 animate-bounce"
              href="/products"
            >
              {" "}
              More Products
            </Link>
          </div>
        </div>
        <div className="w-full md:place-items-start place-items-center flex items-center gap-y-5 justify-center md:justify-between flex-wrap">
          {
            isLoading ? (
              [...Array(3)].map((_, index) => {
                return (
                  <ProductCardSkeleton key={index} />
                )
              })
            ) :

              firstThreeProducts?.map((product: IProduct) => (
                <div key={product?._id}>
                  <ProductCard product={product} />
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default NewProduct;
