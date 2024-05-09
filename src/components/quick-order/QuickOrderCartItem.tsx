import Image from "next/image";
import { imageUrl } from "@/constants/imageUrl";
import { IconMinus, IconPlus, IconTrashX, IconX } from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  removeOneFromCart,
} from "@/redux/features/cart/productCartSlice";

const QuickOrderCartItem = ({ product }: any) => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-5">
      <div className="h-[70px] w-[70px] relative shrink-0">
        <Image
          src={`${imageUrl}${product?.productPhotos[0]}`}
          alt="Product Image"
          fill
          objectFit="cover"
          className="w-full h-full top-0 left-0 object-cover border p-1.5 rounded-md"
        />
      </div>
      <div className="w-full">
        <div className="flex items-center justify-between w-full gap-1">
          <span className="text-black text-opacity-90 text-[16px] line-clamp-1">
            {product?.productName}
          </span>
          <span onClick={() => dispatch(removeFromCart(product))}>
            <IconTrashX
              stroke={1}
              width={18}
              height={18}
              className="hover:text-red-500 transition-all"
            />
          </span>
        </div>

        <div className="my-1">
          <p className="text-black-opacity-70 text-[12px]">
            {product?.brand?.brandName}
          </p>
        </div>
        <div className="flex items-center justify-between gap-2 mb-4 whitespace-nowrap">
          <div className="flex items-center gap-2">
            <button
              onClick={() => dispatch(removeOneFromCart(product))}
              className="border p-1 rounded-full"
            >
              {""}
              <IconMinus width={14} stroke={2} height={14} />
            </button>
            <span className="text-sm">{product?.orderQuantity}</span>
            <button
              onClick={() => dispatch(addToCart(product))}
              className="border p-1 rounded-full"
            >
              {""}
              <IconPlus width={14} stroke={2} height={14} />
            </button>
            <span className="text-[12px]">
              <IconX stroke={1} width={14} height={14} />
            </span>
            <span className="text-xs">
              {product?.price} <small>QAR</small>
            </span>
          </div>
          <b className="main-text-color ">
            {product?.price * product?.orderQuantity} <small>QAR</small>
          </b>
        </div>
      </div>
    </div>
  );
};

export default QuickOrderCartItem;
