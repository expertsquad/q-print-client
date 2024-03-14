"use client";
import QServices from "./QServices";
import ProductViewImage from "./ProductViewImage";
import SpecificationDetails from "./SpecificationDetails";
import RelatedProduct from "./RelatedProduct";
import { useGetProductByIdQuery } from "@/redux/features/products/productsApi";

const ProductView = ({ id }: any) => {
  const { data, isLoading, isError } = useGetProductByIdQuery(id);

  return (
    <section className="px-2">
      <div className="">
        <ProductViewImage product={data?.data} />
      </div>
      <div>
        <QServices />
      </div>
      <div>
        <RelatedProduct />
      </div>
      <div>
        <SpecificationDetails />
      </div>
    </section>
  );
};

export default ProductView;
