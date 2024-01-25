import { IconChevronRight, IconMenu2 } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const MobileVersion = () => {
  return (
    <div className="drawer md:hidden">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer"
          className="btn  drawer-button bg-transparent border-none"
        >
          <IconMenu2 />
        </label>
      </div>
      <div className="drawer-side z-50">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu w-full h-screen bg-white p-5">
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
        </ul>
      </div>
    </div>
  );
};

export default MobileVersion;
