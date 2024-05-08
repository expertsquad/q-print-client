"use client";
import { IconSearch } from "@tabler/icons-react";
import Image from "next/image";
import qPrintLogo from "@/assets/logo.svg";
import Link from "next/link";
import Filter from "../UI/filter/Filter";
import MobileVersion from "./MobileVersion";
import Sidebar from "./Sidebar";
import { isLoggedIn, isUserSignedIn } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { useGetUserQuery } from "@/redux/features/user/user";
import CustomInput from "../shared/CustomInput";
import { useState } from "react";
import ProductSearchModal from "./ProductSearchModal";
import CartDrawer from "./CartDrawer";
import DrawerCartButton from "./DrawerCartButton";
import UserProfileButton from "./UserProfileButton";
import DrawerWishlistButton from "./DrawerWishlistButton";
import WishlistDrawer from "./WishlistDrawer";

const Header = () => {
  const router = useRouter();
  const userLoggedIn = isLoggedIn();
  const [searchValue, setSearchValue] = useState("");

  const [openCartDrawer, setOpenCartDrawer] = useState(false);
  const [openWishlistDrawer, setOpenWishlistDrawer] = useState(false);

  const handleSearchInputChange = (e: any) => {
    setSearchValue(e.target.value);
  };
  const { data } = useGetUserQuery(``);

  // <== Check if the user is logged in or not ==>
  const handleUserProfile = () => {
    if (userLoggedIn) {
      router.push("/profile");
    } else {
      router.push("/signup");
    }
  };

  return (
    <header className=" mx-auto   relative">
      <section className="header-section-css pt-6  fixed top-0 left-0 right-0 z-40 bg-white max-w-[1280px]  mx-auto px-5">
        {/* ==Logo== */}
        <div className="order-2 md:order-1 section-first-child ">
          <div onClick={() => router.push("/")} className="w-full h-auto cursor-pointer">
            <Image
              src={qPrintLogo}
              alt="Logo"
              width={250}
              height={250}
              priority={true}
              className="w-36"
            />
          </div>
        </div>
        {/* ==SearchBar & Filter== */}
        <div className="order-4 md:order-2 mb-5 md:mb-0 section-second-child flex items-center w-full gap-5 col-span-3 md:col-span-1 relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <span className="text-black text-opacity-50">
              <IconSearch width={24} height={24} />
            </span>
          </div>

          <CustomInput
            placeholder="Search For Products"
            inputStyle="w-full rounded-[200px]"
            value={searchValue}
            onChange={handleSearchInputChange}
          />
          {searchValue && (
            <ProductSearchModal
              data={searchValue}
              setSearchValue={setSearchValue}
            />
          )}
          <div className="border rounded-full px-3 py-3  items-center justify-center cursor-pointer hidden">
            <Filter />
          </div>
        </div>

        {/* ==Wishlist, Cart, and Profile== */}
        <div className="order-3 md:order-3 section-last-child flex items-center justify-end gap-5">
          {/* <div>
            <label className="cursor-pointer grid place-items-center">
              <input type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
              <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
              <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            </label>
          </div> */}
          <DrawerWishlistButton setOpenWishlistDrawer={setOpenWishlistDrawer} />
          <DrawerCartButton setOpenCartDrawer={setOpenCartDrawer} />
          <UserProfileButton
            handleUserProfile={handleUserProfile}
            profilePhoto={data?.data?.profilePhoto}
          />
        </div>

        {/* ==Menubar== */}
        <div className="order-1 md:rounded-md md:order-4 md:bg-gradient-to-r from-transparent  via-[#f8f0f0] via-100% to-transparent    py-2 flex gap-6 md:col-span-3 md:my-5">
          {/* ==Mobile Version== */}
          <MobileVersion />
          {/* ==Desktop Version== */}
          <Sidebar />
        </div>
      </section>
      {openCartDrawer && (
        <CartDrawer
          openCartDrawer={openCartDrawer}
          setOpenCartDrawer={setOpenCartDrawer}
        />
      )}
      {openWishlistDrawer && (
        <WishlistDrawer
          openWishlistDrawer={openWishlistDrawer}
          setOpenWishlistDrawer={setOpenWishlistDrawer}
        />
      )}
    </header>
  );
};

export default Header;
