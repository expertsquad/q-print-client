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
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <section className="flex items-center justify-between pt-6 pb-6 px-[100px]">
        <div className="section-first-child w-1/4">
          <Image src={qPrintLogo} alt="Logo" />
        </div>
        {/* //SearchBar */}
        <div className="section-second-child flex items-center w-2/4 gap-5">
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
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
        <div className="section-last-child flex items-center gap-5 w-1/4 navbar-end">
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
      <section className="bg-[#FAFAFA] py-4 flex gap-6">
        <Link href="/home">Home</Link>
        <Link href="/home">Brands</Link>
        <Link href="/home">FInd Cartridge</Link>
        <Link href="/home">Order a Design Printing </Link>
        <Link href="/home">About Us</Link>
        <Link href="/home">Privacy Policy</Link>
      </section>
    </header>
  );
};

export default Header;
