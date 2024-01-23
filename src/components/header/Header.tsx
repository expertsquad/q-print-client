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
    <header className="max-w-[1280px] mx-auto">
      <section className="header-section-css pt-6 pb-6 mx-auto">
        {/* ==Logo== */}
        <div className="order-2 md:order-1 section-first-child ">
          <Image src={qPrintLogo} alt="Logo" />
        </div>
        {/* ==SearchBar & Filter== */}
        <div className="order-4 md:order-2 section-second-child flex items-center w-full gap-5">
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
        {/* ==Wishlist, Cart, and Profile== */}
        <div className="order-3 md:order-3 section-last-child flex items-center gap-5">
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
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link href="/home">Home</Link>
              <Link href="/home">Brands</Link>
              <Link href="/home">FInd Cartridge</Link>
              <Link href="/home">Order a Design Printing </Link>
              <Link href="/home">About Us</Link>
              <Link href="/home">Privacy Policy</Link>
            </ul>
          </div>

          <div className="hidden lg:flex">
            <ul className="menu menu-sm menu-horizontal px-1 flex gap-6">
              <Link href="/home">Home</Link>
              <Link href="/home">Brands</Link>
              <Link href="/home">FInd Cartridge</Link>
              <Link href="/home">Order a Design Printing </Link>
              <Link href="/home">About Us</Link>
              <Link href="/home">Privacy Policy</Link>
            </ul>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
