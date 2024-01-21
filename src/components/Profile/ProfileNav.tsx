"use client";
import { profileNav } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface IProfileNav {
  label: string;
  key: string;
  href: string;
}

const ProfileNav = () => {
  const pathName = usePathname();

  return (
    <div className="flex items-center justify-center flex-col border rounded-lg">
      {profileNav?.map((profileNav: IProfileNav) => (
        <Link
          href={profileNav?.href}
          className={`${
            pathName === profileNav?.href
              ? "text-textColor font-semibold w-full px-5 py-2 bg-gradient-to-r from-pink-100 to-purple-100"
              : "list-none font-semibold w-full px-5 py-2"
          }`}
          key={profileNav?.key}
        >
          {profileNav?.label}
        </Link>
      ))}
    </div>
  );
};

export default ProfileNav;
