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

const Header = () => {
  return (
    <header>
      <section className="flex items-center justify-between">
        <div className="section-first-child">
          <Image src={qPrintLogo} alt="Logo" />
        </div>
        {/* //SearchBar */}
        <div className="section-second-child flex items-center">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <IconSearch />
            </div>
            <input
              type="search"
              id="default-search"
              className="inline-block w-full rounded-full px-4 py-3 ps-10 text-sm text-gray-900 border border-gray-300 bg-gray-50 outline-none"
              placeholder="Search For Product"
            />
          </div>
          <div className="border border-black border-opacity-20 rounded-full px-3 py-2 flex items-center justify-center">
            {""}
            <IconButton icon={<IconAdjustmentsHorizontal />} label="" />
          </div>
        </div>
        {/* //Heart, Cart and Profile */}
        <div className="section-last-child flex items-center gap-5">
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
      </section>
          <section>
              Another Header
      </section>
    </header>
  );
};

export default Header;
