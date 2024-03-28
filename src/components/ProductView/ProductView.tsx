"use client";
import QServices from "./QServices";
import ProductViewImage from "./ProductViewImage";
import SpecificationDetails from "./SpecificationDetails";
import RelatedProduct from "./RelatedProduct";
import {
  useGetProductByIdQuery,
  useGetProductsQuery,
} from "@/redux/features/products/productsApi";

const ProductView = ({ id }: any) => {
  const { data } = useGetProductByIdQuery(id);
  const productdata = data?.data;
  const { data: relatedData } = useGetProductsQuery(
    `brand.brandName=${productdata?.brand?.brandName}`
  );

  const filteredRelatedProducts = relatedData?.data?.filter(
    (product: any) => product._id !== productdata?._id
  );

  return (
    <section className="px-2">
      <div className="">
        <ProductViewImage product={data?.data} />
      </div>
      <div>
        <QServices />
      </div>
      <div className="mb-16">
        <div className="flex justify-between items-center mb-5 md:mb-7">
          <h2 className="text-black text-[17px] md:text-2xl font-semibold">
            Related Products
          </h2>
          <button className="text-[#E73C17]">Show All</button>
        </div>
        <div
          className={`
            "w-full md:place-items-start place-items-center flex items-center justify-center md:justify-normal flex-wrap gap-5 "
              `}
        >
          {filteredRelatedProducts?.map((product: any, index: any) => (
            <RelatedProduct key={index} product={product} />
          ))}
        </div>
      </div>
      <div>
        <SpecificationDetails specification={relatedData?.data} />
      </div>
    </section>
  );
};

export default ProductView;
