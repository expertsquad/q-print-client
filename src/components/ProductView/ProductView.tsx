"use client";
import QServices from "./QServices";
import ProductViewImage from "./ProductViewImage";
import SpecificationDetails from "./SpecificationDetails";
import ProductCard from "../product/ProductCard";
import {
  useGetProductByIdQuery,
  useGetProductsQuery,
} from "@/redux/features/products/productsApi";
import { IProduct } from "@/types/productsType";
import Link from "next/link";

const ProductView = ({ id }: { id: string }) => {
  const { data } = useGetProductByIdQuery(id);
  const productdata = data?.data;

  const { data: relatedData } = useGetProductsQuery(
    `brand.brandName=${productdata?.brand?.brandName}`
  );

  const filteredRelatedProducts = relatedData?.data?.filter(
    (product: IProduct) => product._id !== productdata?._id
  );

  return (
    <section className="px-2">
      {/* == Product view image & descripton == */}
      <div className="">
        <ProductViewImage product={data?.data} />
      </div>
      {/* == Company Services == */}
      <div>
        <QServices />
      </div>
      {/* == Related Products == */}
      <div className="mb-16">
        <div className="flex justify-between items-center mb-5 md:mb-7">
          <h2 className="text-black text-[17px] md:text-2xl font-semibold">
            Related Products
          </h2>
          <Link href={"/products"} className="text-[#E73C17]">
            Show All
          </Link>
        </div>
        <div
          className="grid grid-cols-product-grid md:gap-10 gap-5 ">
          {

            filteredRelatedProducts?.map((product: IProduct, index: number) => (
              <ProductCard key={index} product={product} />
            ))}
        </div>
      </div>
      {/* == Product specification == */}
      <div>
        <SpecificationDetails specification={productdata} />
      </div>
    </section>
  );
};

export default ProductView;
