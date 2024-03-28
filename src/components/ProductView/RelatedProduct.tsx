import ProductCard from "../product/ProductCard";

const RelatedProduct = ({ product }: any) => {
  return (
    <div className="">
      <ProductCard product={product} />
    </div>
  );
};

export default RelatedProduct;
