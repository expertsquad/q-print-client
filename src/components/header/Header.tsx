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

const Header = () => {
  return (
    <header className="max-w-[1280px] mx-auto">
      <section className="header-section-css pt-6 pb-6 mx-auto">
        {/* ==Logo== */}
        <div className="order-2 md:order-1 section-first-child ">
          <Image src={qPrintLogo} alt="Logo" />
        </div>
        {/* ==SearchBar & Filter== */}
        <div className="order-4 md:order-2 section-second-child flex items-center w-full gap-5 col-span-3 md:col-span-1">
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
              <IconSearch />
            </div>
            <input
              type="search"
              id="default-search"
              className="inline-block w-full rounded-full px-4 py-3 ps-10 text-sm text-black text-opacity-50 border border-gray-300 bg-gray-50 outline-none"
              placeholder="Search For Product"
            />
          </div>
          <div className="border border-black border-opacity-20 rounded-full px-3 py-2 flex items-center justify-center">
            {""}
            <IconButton icon={<IconAdjustmentsHorizontal />} label="" />
          </div>
        </div>
        {/* ==Wishlist, Cart, and Profile== */}
        <div className="order-3 md:order-3 section-last-child flex items-center gap-5 justify-end">
          <IconButton
            icon={<IconHeart />}
            badgeCount={99}
            label="Wishlist"
            customStyles="flex gap-3"
          />
          <IconButton
            icon={<IconShoppingCart />}
            badgeCount={99}
            label="Cart"
            customStyles="flex gap-3"
          />

          <IconButton icon={<IconUser />} label="" />
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
