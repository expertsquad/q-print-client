import CartIcon from "@/assets/svgIcons/CartIcon";
import FilterIcon from "@/assets/svgIcons/FilterIcon";
import HeartIcon from "@/assets/svgIcons/HeartIcon";
import UserIcon from "@/assets/svgIcons/UserIcon";
import Image from "next/image";
import colorLogo from "@/assets/logotwo.svg";

const Header = () => {
  return (
    <header className="navbar ">
      <div className="max-w-[1280px] mx-auto grid grid-cols-3 justify-between">
        <div className="order-1">
          <Image src={colorLogo} alt="main logo" />
        </div>
        {/* //Order Two */}
        <div className="order-2 border w-full gap-7  flex items-center searchBar-controller">
          <div className="relative w-full">
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
              className=" w-full py-3 px-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 "
              placeholder="Search for product"
              required
            />
          </div>
          <FilterIcon />
        </div>
        {/* //Order Three */}
        <div className="order-3 flex items-center gap-7 ">
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
        {/* //Order Four */}
        <div className="order-4 navbar z-40">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3 sdfd</a>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <details>
                  <summary>Parent</summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>Item 3</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
