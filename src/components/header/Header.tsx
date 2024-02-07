import { IconUser, IconSearch } from "@tabler/icons-react";
import Image from "next/image";
import qPrintLogo from "@/assets/logotwo.svg";
import Link from "next/link";
import Filter from "../UI/filter/Filter";
import WishlistAndCart from "./Wishlist";
import Cart from "./Cart";
import MobileVersion from "./MobileVersion";
import Sidebar from "./Sidebar";

const Header = () => {
  const user = false;
  return (
    <header className="max-w-[1280px] mx-auto">
      <section className="header-section-css pt-6 mx-auto">
        {/* ==Logo== */}
        <div className="order-2 md:order-1 section-first-child ">
          <Link href="/">
            <Image src={qPrintLogo} alt="Logo" />
          </Link>
        </div>
        {/* ==SearchBar & Filter== */}
        <div className="order-4 md:order-2 mb-5 md:mb-0 section-second-child flex items-center w-full gap-5 col-span-3 md:col-span-1 relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <span className="text-black text-opacity-50">
              <IconSearch width={24} height={24} />
            </span>
          </div>
          <input
            type="search"
            id="default-search"
            className="inline-block w-full rounded-full px-4 py-3 ps-10 text-sm text-black text-opacity-50 border bg-gray-50 outline-none"
            placeholder="Search For Product"
          />
          <div className="border rounded-full px-3 py-3 flex items-center justify-center cursor-pointer hidden">
            <Filter />
          </div>
        </div>

        {/* ==Wishlist, Cart, and Profile== */}
        <div className="order-3 md:order-3 section-last-child flex items-center justify-end gap-5">
          <WishlistAndCart />
          <Cart />
          <Link
            href={`${user ? "/profile" : "/login"}`}
            className="border rounded-full p-1 cursor-pointer text-black text-opacity-80"
          >
            <IconUser width={22} height={22} />
          </Link>
        </div>

        {/* ==Menubar== */}
        <div className="order-1 md:order-4 md:bg-[#FAFAFA] py-2 flex gap-6 md:col-span-3 md:my-5">
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
