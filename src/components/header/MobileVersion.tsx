import { IconChevronRight, IconMenu2 } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const MobileVersion = () => {
  return (
    <div className="drawer md:hidden ">
      <input
        id="wishlist-drawer-mobile-version"
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="wishlist-drawer-mobile-version"
          className="drawer-button"
        >
          <span className="text-black text-opacity-70 border-none bg-transparent">
            <IconMenu2 width={24} height={24} />
          </span>
        </label>
      </div>
      <div className="drawer-side z-50">
        <label
          htmlFor="wishlist-drawer-mobile-version"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu w-full h-screen bg-white p-5 relative">
          {/* Sidebar content here */}
          <label htmlFor="" className="text-black text-opacity-50 text-[16px]">
            Menus
          </label>

          <div className="flex items-center justify-between bg-fuchsia-100 p-4 rounded-lg mb-7 mt-4">
            <span>All Categories</span>
            <span className="text-fuchsia-400">
              <IconChevronRight />
            </span>
          </div>
          {[
            "Home",
            "Brands",
            "Find Cartridge",
            "Order a Design Printing",
            "About Us",
            "Privacy Policy",
          ].map((link, index) => (
            <Link
              className="text-black text-opacity-50 mb-10 text-[18px]"
              key={index}
              href={`/${link.toLowerCase().replace(" ", "-")}`}
            >
              {link}
            </Link>
          ))}

          <label
            htmlFor="wishlist-drawer-mobile-version"
            aria-label="close sidebar"
            className="absolute bottom-36 bg-white shadow-xl text-[25px] p-2 rounded-full right-[50%] cursor-pointer"
          >
            x
          </label>
        </ul>
      </div>
    </div>
  );
};

export default MobileVersion;
