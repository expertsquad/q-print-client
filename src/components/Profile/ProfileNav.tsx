"use client";
import { profileNav } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconLock, IconPrinter } from "@tabler/icons-react";
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

const ProfileNav = ({handleModal}:any) => {
  const pathName = usePathname();

  return (
    <div className="flex items-center justify-center flex-col md:border md:rounded-lg gap-2 md:sticky md:top-52  overflow-hidden md:w-[300px] w-full">
      {profileNav?.map((profileNav: IProfileNav) => (
        <Link
          onClick={() => handleModal()}
          href={profileNav?.href}
          className={`${pathName === profileNav?.href
            ? "text-textColor w-full px-5 py-3 bg-gradient-to-r from-pink-50 to-purple-50 group "
            : "list-none  w-full px-5 py-3  "
            }`}
          key={profileNav?.key}
        >
          <div
            className={`${pathName === profileNav?.href
              ? "text-fuchsia-700 flex gap-2 "
              : "flex gap-2 text-gray-400 "
              }`}
          >
            {" "}
            <span className="  ">
              {profileNav?.key === "myProfile" && <IconUser stroke={1} />}
              {profileNav?.key === "orderHistory" && <IconHistory stroke={1} />}
              {profileNav?.key === "printingOrder" && (
                <IconPrinter stroke={1} />
              )}
              {profileNav?.key === "profileSettings" && (
                <IconSettings stroke={1} />
              )}
              {profileNav?.key === "notifications" && <IconBell stroke={1} />}
              {profileNav?.key === "changePassword" && <IconLock stroke={1} />}
            </span>
            <p>{profileNav?.label}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProfileNav;
