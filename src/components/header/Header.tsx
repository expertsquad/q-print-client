import CartIcon from "@/assets/svgIcons/CartIcon";
import FilterIcon from "@/assets/svgIcons/FilterIcon";
import HeartIcon from "@/assets/svgIcons/HeartIcon";
import UserIcon from "@/assets/svgIcons/UserIcon";
import React from "react";

const Header = () => {
  return (
    <header className="navbar flex justify-between">
      <div className="border ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
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
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
      {/* //Order Two */}
      <div className="border ">
        <div className="relative w-[735px]">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full py-3 px-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 "
            placeholder="Search for the product"
            required
          />
        </div>
        <FilterIcon />
      </div>
      {/* //Order Three */}
      <div className="border flex items-center gap-7">
        <button type="button" className="flex items-center gap-2 text-[14px]">
          <HeartIcon />
          Wishlist
        </button>
        <button className="flex items-center gap-2">
          <CartIcon />
          Cart
        </button>
        <button>
          <UserIcon />
          {""}
        </button>
      </div>
    </header>
  );
};

export default Header;
