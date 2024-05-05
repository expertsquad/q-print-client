import { useEffect, useState } from "react";
import {
  IconHeart,
  IconMinus,
  IconPlus,
  IconShoppingBag,
  IconShoppingCart,
  IconStar,
} from "@tabler/icons-react";
import Image from "next/image";
import adidasBrand from "@/assets/adidas brand.svg";
import ColorPickUp from "./ColorPickUp";
import GetDiscountRange from "./GetDiscountRange";
import { imageUrl } from "@/constants/imageUrl";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeOneFromCart,
} from "@/redux/features/cart/productCartSlice";
import SingleQuickOrder from "../quick-order/SingleQuickOrder";
import { addToFavourite } from "@/redux/features/wishlist/favouriteCartSlice";
import { useAppSelector } from "@/redux/hook";

const ProductViewDescEtc = ({ productDesc }: any) => {
  const dispatch = useDispatch();
  const [selectedVariant, setSelectedVariant] = useState<any>(null);
  const [orderQuantity, setOrderQuantity] = useState(1);
  const data = useAppSelector((state) => state.productCartSlice);

  console.log(data);

  function getQuantityFromCart({ data, productId, variantName }: any) {
    const quantity = data?.products?.find(
      (item: any) =>
        item.productId === productId && item.variantName === variantName
    );
    return quantity?.orderQuantity || 0;
  }

  const quantity = getQuantityFromCart({
    data,
    productId: productDesc?._id,
    variantName: selectedVariant?.variantName,
  });

  // set default variant in local storage

  useEffect(() => {
    const storedSelectedVariant = localStorage.getItem("selectedVariant");
    if (storedSelectedVariant) {
      setSelectedVariant(JSON.parse(storedSelectedVariant));
    } else {
      setSelectedVariant(productDesc?.variants[0]);
    }
  }, [productDesc]);

  const handleSelectVariant = (variant: any) => {
    setSelectedVariant(variant);
    localStorage.setItem("selectedVariant", JSON.stringify(variant));
  };

  // add to cart

  const handleAddToCart = (event: React.MouseEvent, product: any) => {
    event.stopPropagation();
    dispatch(
      addToCart({
        ...product,
        ...product?.variants[0],
        price: selectedVariant?.discountedPrice
          ? selectedVariant?.discountedPrice
          : selectedVariant?.sellingPrice,
        orderQuantity: orderQuantity,
        variantName: selectedVariant?.variantName,
        productId: product?._id,
      })
    );
  };

  // add to favorite

  const handleAddToFavourite = (event: React.MouseEvent, product: any) => {
    event.stopPropagation();
    dispatch(
      addToFavourite({
        ...product,
        ...product?.variants[0],
        price: selectedVariant?.discountedPrice
          ? selectedVariant?.discountedPrice
          : selectedVariant?.sellingPrice,
        orderQuantity: 1,
        variantName: selectedVariant?.variantName,
        inStock: product?.variants[0].inStock,
      })
    );
  };

  return (
    <section className="product-description">
      <h2 className="[font-size:_clamp(16px,5vw,20px)] text-wrap line-clamp-2">
        {productDesc?.productName}
      </h2>
      <div className="flex items-center my-3">
        <div className="w-[50px] h-[50px] relative shrink-0">
          <Image
            src={`${imageUrl}${productDesc?.brand?.brandPhoto}`}
            alt="Brand Image"
            fill
            objectFit="cover"
            className="top-0 left-0 w-full h-full object-cover"
          />
        </div>
        <h6 className="text-[16px] text-black-opacity-60 mr-5 ml-1">
          {productDesc?.brand?.brandName}
        </h6>
        <IconStar
          fill="currentColor"
          width={20}
          height={20}
          className="text-[#FF8A00] mr-1"
        />
        <p className="text-black-opacity-50 text-[16px]">
          {productDesc?.averageRating ? productDesc?.averageRating : 0}{" "}
          <span>
            ({productDesc?.totalReview ? productDesc?.totalReview : 0} people)
          </span>
        </p>
      </div>
      <div className="flex items-center">
        <p className="[font-size:_clamp(13px,5vw,14px)] mr-3 whitespace-nowrap">
          Category:{" "}
          <span className="text-black-opacity-60 whitespace-nowrap">
            {productDesc?.category?.categoryName}
          </span>
        </p>{" "}
        |
        <button
          onClick={(event: React.MouseEvent) =>
            handleAddToFavourite(event, productDesc)
          }
          className="flex items-center gap-2 ml-3 text-black-opacity-60 [font-size:_clamp(13px,5vw,14px)] whitespace-nowrap"
        >
          <IconHeart className="text-[#E73C17]" />
          Add To Wishlist
        </button>
      </div>
      <div className="my-3 flex">
        <ColorPickUp
          variants={productDesc?.variants}
          onSelectVariant={handleSelectVariant}
        />
      </div>
      <div className="">
        <div className="flex items-center flex-wrap">
          <h3 className="main-text-color [font-size:_clamp(20px,5vw,26px)] font-semibold mr-2">
            {selectedVariant?.discountedPrice}
            <small> QAR</small>
          </h3>
          <del className="text-[#B3B3B3] [font-size:_clamp(14px,5vw,18px)] mr-5">
            {selectedVariant?.sellingPrice} QAR
          </del>
          <span className="[font-size:_clamp(14px,5vw,16px)] text-red-500 bg-gradient-to-r from-pink-50 to-purple-50 py-1 px-3 rounded-md">
            {selectedVariant?.discountPercentage}% OFF
          </span>
        </div>

        {productDesc?.bulk && (
          <GetDiscountRange
            expectedAmount={
              productDesc?.bulk?.minOrder ? productDesc?.bulk?.minOrder : 0
            }
            totalAmount={quantity}
          />
        )}
        {productDesc?.bulk && (
          <div className="my-3 whitespace-nowrap text-black-opacity-60">
            <p>
              Buy{" "}
              <span className="font-semibold main-text-color">
                {productDesc?.bulk?.minOrder}
              </span>{" "}
              item to get more{" "}
              <span className="font-semibold text-black">
                {productDesc?.bulk?.discount} extra!
              </span>
            </p>
          </div>
        )}

        <div className="flex items-center gap-5 mb-5">
          <div className="border border-gray-200 flex items-center gap-2 rounded-3xl p-2">
            <button
              disabled={orderQuantity === 1 ? true : false}
              onClick={() => setOrderQuantity(orderQuantity - 1)}
              className={`p-2 bg-[#F2F2F2] rounded-full ${
                orderQuantity === 1 ? "opacity-50" : ""
              }`}
            >
              {""}
              <IconMinus width={14} height={14} />
            </button>
            <span>{orderQuantity}</span>
            <button
              onClick={() => setOrderQuantity(orderQuantity + 1)}
              className={`p-2 bg-[#F2F2F2] rounded-full`}
            >
              {""}
              <IconPlus width={14} height={14} />
            </button>
          </div>
          <div>
            <button
              onClick={(event: React.MouseEvent) =>
                handleAddToCart(event, productDesc)
              }
              className="w-56 md:w-64 lg:w-80 flex justify-center items-center gap-3 bg-slate-400 main-text-color border border-fuchsia-700 py-2 rounded-lg text-fuchsia-700"
            >
              <IconShoppingCart
                className="main-text-color"
                width={20}
                height={20}
              />
              Add To Cart
            </button>
          </div>
        </div>
        <div className="mt-5 flex items-center justify-between gap-5">
          <div className="w-full">
            <SingleQuickOrder
              productId={productDesc?._id}
              variantName={selectedVariant?.variantName}
              variantPrice={
                selectedVariant?.discountedPrice
                  ? selectedVariant?.discountedPrice
                  : selectedVariant?.sellingPrice
              }
              btnStyle="py-2.5"
            />
          </div>
          <button className="flex items-center justify-center gap-2 text-white main-bg-color py-2.5 rounded-lg w-full text-sm">
            {""}
            <IconShoppingBag stroke={2} width={18} height={18} />
            BUY NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductViewDescEtc;
