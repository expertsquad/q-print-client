import {
  IconHeart,
  IconShoppingCart,
  IconUser,
  IconSearch,
  IconAdjustmentsHorizontal,
} from "@tabler/icons-react";
import IconButton from "./IconButton";
import Image from "next/image";
import qPrintLogo from "@/assets/logotwo.svg";
import Sidebar from "./Sidebar";
import MobileVersion from "./MobileVersion";
import WishlistAndCart from "./Wishlist";
import Cart from "./Cart";
import Link from "next/link";
import Filter from "../UI/filter/Filter";

const Header = () => {
  return (
    <header className="max-w-[1280px] mx-auto">
      <section className="header-section-css pt-6 pb-6 mx-auto">
        {/* ==Logo== */}
        <div className="order-2 md:order-1 section-first-child ">
          <Link href="/">
            <Image src={qPrintLogo} alt="Logo" />
          </Link>
        </div>
        {/* ==SearchBar & Filter== */}
        <div className="order-4 md:order-2 section-second-child flex items-center w-full gap-5 col-span-3 md:col-span-1 relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <span className="text-black text-opacity-70">
              <IconSearch width={24} height={24} />
            </span>
          </div>
          <input
            type="search"
            id="default-search"
            className="inline-block w-full rounded-full px-4 py-3 ps-10 text-sm text-black text-opacity-50 border border-gray-300 bg-gray-50 outline-none"
            placeholder="Search For Product"
          />
          <div className="border border-black border-opacity-20 rounded-full px-3 py-3 flex items-center justify-center cursor-pointer">
            <Filter />
          </div>
        </div>

        {/* ==Wishlist, Cart, and Profile== */}
        <div className="order-3 md:order-3 section-last-child flex items-center justify-end gap-5">
          <WishlistAndCart />
          <Cart />
          <span className="border rounded-full p-1 cursor-pointer text-black text-opacity-80">
            <IconUser width={22} height={22} />
          </span>
        </div>

        {/* ==Menubar== */}
        <div className="order-1 md:order-4 md:bg-[#FAFAFA] py-4 flex gap-6 md:col-span-3">
          {/* ==Mobile Version== */}
          <MobileVersion />
          {/* ==Desktop Version== */}
          <Sidebar />
        </div>
      </section>
    </header>
  );
};

export default Header;
