"use client";

import { statementSideNavItem } from "@/constants/statementSideNav";
import { IStatementSideNav } from "@/type";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ProfileNav = () => {
  const pathName = usePathname();

  return (
    <aside className="flex items-center justify-center flex-col  ">
      {statementSideNavItem.map((sideNav: IStatementSideNav) => (
        <Link
          href={sideNav?.href}
          className={`${
            pathName === sideNav?.href
              ? "bg-customColor-100 text-textColor border-l-2 border-primary   px-5 py-2 font-semibold w-full "
              : "list-none font-semibold  w-full   px-5 py-2"
          } `}
          key={sideNav?.key}
        >
          {sideNav?.label}
        </Link>
      ))}
    </aside>
  );
};

export default ProfileNav;
