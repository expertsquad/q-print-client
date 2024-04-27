import { useAppSelector } from "@/redux/hook";
import { IconShoppingBag } from "@tabler/icons-react";
import React from "react";

const DrawerCartButton = ({ setOpenCartDrawer }: any) => {
  const { products, subTotal } = useAppSelector(
    (state) => state.productCartSlice
  );
  return (
    <div
      onClick={() => setOpenCartDrawer(true)}
      className="flex items-start gap-2.5 cursor-pointer"
    >
      <div className="cursor-pointer relative">
        <span className="text-black text-opacity-50">
          <IconShoppingBag width={24} stroke={2} height={24} />
        </span>
        <span className="absolute top-0 -right-2 bg-[#E73C17] rounded-full h-4 w-[17px] text-[10px] flex items-center justify-center text-white">
          {products?.length || 0}
        </span>
      </div>
      <span className="drawer-button hidden md:block cursor-pointer text-black text-opacity-60 ">
        Cart
      </span>
    </div>
  );
};

export default DrawerCartButton;
