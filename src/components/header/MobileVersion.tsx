import {
  IconArrowLeft,
  IconChevronRight,
  IconMenu2,
} from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const MobileVersion = () => {
  const menuItems = ["Home", "Brands", "Request a Printing", "Products"];
  const hrefValues = ["/", "/brand", "/printing-request", "/products"];

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
          <div className="flex items-center justify-between">
            <label
              htmlFor="wishlist-drawer-mobile-version"
              aria-label="close sidebar"
              className="cursor-pointer"
            >
              <span className="text-black text-opacity-50">
                <IconArrowLeft width={20} height={20} />
              </span>
            </label>
            <label
              htmlFor=""
              className="text-black text-opacity-50 text-[16px]"
            >
              Menus
            </label>
          </div>

          <div className="flex items-center justify-between bg-fuchsia-100 p-4 rounded-lg mb-7 mt-4">
            <span>All Categories</span>
            <span className="text-fuchsia-400">
              <IconChevronRight />
            </span>
          </div>
          {menuItems.map((link, index) => (
            <React.Fragment key={index}>
              <Link
                className="text-black text-opacity-50 mb-10 text-[18px]"
                key={index}
                href={hrefValues[index]}
              >
                {link}
              </Link>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileVersion;
