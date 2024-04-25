import Image from "next/image";
import { imageUrl } from "@/constants/imageUrl";
import { addToCart, removeFromCart, removeOneFromCart } from "@/redux/features/cart/productCartSlice";
import { useDispatch } from "react-redux";
import { IconMinus, IconPlus, IconX } from "@tabler/icons-react";

const CartItem = ({ product }: any) => {
    const dispatch = useDispatch();
    return (
        <div
            className="flex gap-5 border-b transition duration-300 ease-in-out hover:bg-gray-100 p-3"

        >
            {/* --Image-- */}
            <div className="w-16 h-16 relative shrink-0">
                <Image
                    src={`${imageUrl}${product?.productPhotos?.[1]}`}
                    alt="Product Image"
                    fill
                    objectFit="cover"
                    className="w-full h-full top-0 left-0 object-cover p-1 border"
                />
            </div>
            <div className="w-full">
                {/* --Title and Delete BTN-- */}
                <div className="flex items-center justify-between w-full ">
                    <p className="text-black text-opacity-90 text-[16px] line-clamp-1">
                        {product?.productName}
                    </p>
                    <button
                        onClick={() => dispatch(removeFromCart(product))}
                        className="justify-items-end"
                    >
                        <span className="cursor-pointer text-black text-opacity-70">
                            <IconX width={20} height={20} />
                        </span>
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
                {/* --Increase and Decrease BTN etc-- */}
                <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => dispatch(removeOneFromCart(product))}
                            className="border border-main-border-color p-1 rounded-full text-black-opacity-70 "
                        >
                            {""}
                            <IconMinus stroke={2} width={13} height={13} />
                        </button>
                        <span>{product?.orderQuantity}</span>
                        <button
                            onClick={() => dispatch(addToCart(product))}
                            className="border border-main-border-color p-1 rounded-full text-black-opacity-70 "
                        >
                            {""}
                            <IconPlus stroke={2} width={13} height={13} />
                        </button>
                        <span className="text-[12px]">
                            <IconX stroke={1} width={12} height={12} />
                        </span>
                        <span>{product?.price} QAR</span>
                    </div>
                    <b className="main-text-color">
                        {product?.orderQuantity * product?.price}
                        QAR
                    </b>
                </div>
            </div>
        </div>
    );
};

export default CartItem;