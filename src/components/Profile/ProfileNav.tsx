"use client";
import { profileNav } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconLock } from "@tabler/icons-react";
import { IconBell } from "@tabler/icons-react";
import { IconSettings } from "@tabler/icons-react";
import { IconHistory } from "@tabler/icons-react";
import { IconUser } from "@tabler/icons-react";

interface IProfileNav {
  label: string;
  key: string;
  href: string;
}

interface IProfileNav {
  label: string;
  key: string;
  href: string;
}

const ProfileNav = () => {
  const pathName = usePathname();

  return (
    <div className="flex items-center justify-center flex-col border rounded-lg gap-2  overflow-hidden md:w-[300px] w-full">
      {profileNav?.map((profileNav: IProfileNav) => (
        <Link
          href={profileNav?.href}
          className={`${
            pathName === profileNav?.href
              ? "text-textColor w-full px-5 py-3 bg-gradient-to-r from-pink-50 to-purple-50 group "
              : "list-none  w-full px-5 py-3  "
          }`}
          key={profileNav?.key}
        >
          <div
            className={`${
              pathName === profileNav?.href
                ? "text-fuchsia-700 flex gap-2 "
                : "flex gap-2 text-gray-400 "
            }`}
          >
            {" "}
            <span className="  ">
              {profileNav?.key === "myProfile" && <IconUser />}
              {profileNav?.key === "orderHistory" && <IconHistory />}
              {profileNav?.key === "profileSettings" && <IconSettings />}
              {profileNav?.key === "notifications" && <IconBell />}
              {profileNav?.key === "changePassword" && <IconLock />}
            </span>
            <p>{profileNav?.label}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProfileNav;
