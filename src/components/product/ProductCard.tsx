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
        <h3 className="[font-size:_clamp(0.8em,4vw,1.2em)]  line-clamp-1">
          {product?.name}
        </h3>
        <p className=" text-gray-500"> {product?.brandName}</p>
        <div>review</div>

        <div className="flex items-center justify-start gap-2">
          <h4 className="[font-size:_clamp(0.8em,4vw,1.5em)] main-text-color font-md">
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
