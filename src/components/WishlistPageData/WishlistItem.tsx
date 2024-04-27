import Image from "next/image";
import { imageUrl } from "@/constants/imageUrl";
import { removeFromFavourite } from "@/redux/features/wishlist/favouriteCartSlice";
import { IconShoppingCart, IconX } from "@tabler/icons-react";
import { useAppDispatch } from "@/redux/hook";
import { addToCart } from "@/redux/features/cart/productCartSlice";


const WishlistItem = ({ product }: any) => {
    const dispatch = useAppDispatch();


    const handleAddToCart = (event: React.MouseEvent, product: any) => {
        event.stopPropagation();
        dispatch(
            addToCart({
                ...product,
                ...product?.variants[0],
                price: product?.variants[0].discountedPrice
                    ? product?.variants[0].discountedPrice
                    : product?.variants[0].sellingPrice,
                orderQuantity: 1,
                productId: product?._id,
            })
        );
    };
    return (
        <div
            className="flex gap-5 w-full border-b transition duration-300 ease-in-out hover:bg-gray-100 p-4"

        >
            {/* == Image container == */}
            <div className="relative shrink-0 h-14 w-14">
                <Image
                    src={`${imageUrl}${product?.productPhotos?.[1]}`}
                    alt="Product Image"
                    fill
                    objectFit="cover"
                    className="w-full h-full top-0 left-0 object-cover p-2 rounded-md border"
                />
            </div>
            <div className="w-full">
                {/* == Product title and Delete btn == */}
                <div className="flex items-center justify-between gap-3 w-full">
                    <span className="text-black text-opacity-90 text-[16px] line-clamp-1">
                        {product?.productName}
                    </span>
                    <button
                        onClick={() =>
                            dispatch(removeFromFavourite(product))
                        }
                        className="cursor-pointer text-black text-opacity-60"
                    >
                        <IconX width={20} height={20} />
                        {""}
                    </button>
                </div>

                {/* --BrandName-- */}
                <div className="my-1 flex items-center gap-2">
                    <p className="text-black-opacity-80 text-xs">
                        {product?.brand?.brandName}
                    </p>
                    <span
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: product?.variantName }}
                    ></span>
                    <span className="text-xs">
                        {product?.variantName && product?.variantName}
                    </span>
                </div>
                {/* == Stock summary & Add to cart button == */}
                <div className="flex items-center justify-between">
                    <div className="w-full whitespace-nowrap">
                        <b className="main-text-color">
                            {product?.price}
                            <small> QAR</small>
                        </b>{" "}
                        |{" "}
                        <small
                            className={` ${product?.inStock > 0
                                ? "text-green-500"
                                : "text-red-500"
                                }`}
                        >
                            {product?.inStock} In Stock
                        </small>
                    </div>
                    <button
                        onClick={(event: React.MouseEvent) =>
                            handleAddToCart(event, product)
                        }
                        className="flex gap-[5px] items-center whitespace-nowrap border p-2.5 rounded-[5px] text-xs hover:bg-main-bg-color hover:text-white group"
                    >
                        <span className="group-hover:text-white">
                            <IconShoppingCart
                                width={16}
                                stroke={1}
                                height={16}
                                className="group-hover:text-white"
                            />
                        </span>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WishlistItem;