"use client";
import WishlistPageData from "@/components/WishlistPageData/WishlistPageData";
import { useAppSelector } from "@/redux/hook";

const Wishlist = () => {
  const { products } = useAppSelector((state) => state.favourite);

  return (
    <div>
      <WishlistPageData products={products} />
    </div>
  );
};

export default Wishlist;
