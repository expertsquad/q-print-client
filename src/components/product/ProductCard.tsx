import React from "react";
import ProductImageSlide from "./ProductImageSlide";
import AddToCartButton from "../UI/btn/AddToCartButton";

interface IProductImageSlideProps {
  product: IProduct;
}

interface IProduct {
  images: string[];
  name: string;
  brandName: string;
  price: number;
  discount: number;
  rating: number;
}

const ProductCard: React.FC<IProductImageSlideProps> = ({ product }) => {
  return (
    <div className=" border-[1px] hover:border-fuchsia-700 rounded-lg p-5 group shrink-0 ">
      <div>
        <ProductImageSlide product={product} />
      </div>
      <div className="mt-4 pt-4 border-t ">
        <h3 className="[font-size:_clamp(0.7em,4vw,1em)]  line-clamp-1 mb-2">
          {product?.name}
        </h3>
        <p className=" text-gray-500 text-sm mb-1"> {product?.brandName}</p>
        <div className="text-sm mb-2">review</div>

        <div className="flex items-center justify-start gap-2 mb-2">
          <h4 className="[font-size:_clamp(0.7em,4vw,1.2em)] main-text-color font-bold">
            <strong> {product?.price}</strong> QAR
          </h4>
          <del className="text-md text text-gray-500 ">
            {product?.discount} QAR
          </del>
        </div>
        <AddToCartButton />
      </div>
    </div>
  );
};

export default ProductCard;
