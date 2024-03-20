"use client";
import { IconUser, IconSearch } from "@tabler/icons-react";
import Image from "next/image";
import qPrintLogo from "@/assets/logotwo.svg";
import Link from "next/link";
import Filter from "../UI/filter/Filter";
import WishlistAndCart from "./Wishlist";
import Cart from "./Cart";
import MobileVersion from "./MobileVersion";
import Sidebar from "./Sidebar";
import { isLoggedIn, isUserSignedIn } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { useGetUserQuery } from "@/redux/features/user/user";
import { imageUrl } from "@/constants/imageUrl";

const Header = () => {
  const router = useRouter();
  const userLoggedIn = isLoggedIn();
  const userSignedIn = isUserSignedIn();

  const { data, isError, isLoading } = useGetUserQuery(undefined);

  // <== Check if the user is logged in or not ==>
  const handleUserProfile = () => {
    if (userLoggedIn) {
      router.push("/profile");
    } else {
      router.push("/login");
    }
  };

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
          <div className="border rounded-full px-3 py-3  items-center justify-center cursor-pointer hidden">
            <Filter />
          </div>
        </div>

        {/* ==Wishlist, Cart, and Profile== */}
        <div className="order-3 md:order-3 section-last-child flex items-center justify-end gap-5">
          <WishlistAndCart />
          <Cart />

          <div className="cursor-pointer" onClick={handleUserProfile}>
            {userLoggedIn ? (
              data?.data?.profilePhoto ? (
                <div className="w-[30px] h-[30px] shrink-0 relative">
                  <Image
                    src={`${imageUrl}${data?.data?.profilePhoto}`}
                    alt="profile"
                    objectFit="cover"
                    fill
                    className="w-full h-full top-0 left-0 object-cover rounded-full"
                  />
                </div>
              ) : (
                <div>
                  <IconUser width={24} height={24} />
                </div>
              )
            ) : (
              <div>
                <IconUser width={24} height={24} />
              </div>
            )}
          </div>
        </div>

        {/* ==Menubar== */}
        <div className="order-1 md:rounded-md md:order-4 md:bg-gradient-to-r from-transparent  via-[#f8f0f0] via-100% to-transparent    py-2 flex gap-6 md:col-span-3 md:my-5">
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
