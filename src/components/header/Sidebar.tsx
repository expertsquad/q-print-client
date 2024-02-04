"use client";
import { useState } from "react";
import {
  IconChevronRight,
  IconPrinter,
  IconFence,
  IconMilk,
} from "@tabler/icons-react";
import demoBrandImg from "@/assets/menu-demo-image.svg";
import Image from "next/image";
import Link from "next/link";
import NavigateItem from "./NavigateItem";
import { allCategoriesMenu } from "@/constants";
import MenuArrowIcon from "@/assets/svgIcons/MenuArrowIcon";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    {
      icon: <IconPrinter />,
      label: "Printer",
      subcategories: ["Printer", "Printer", "Printer", "Printer", "Printer"],
    },
    {
      icon: <IconFence />,
      label: "Cartridge",
      subcategories: ["Printer", "Printer", "Printer", "Printer", "Printer"],
    },
    {
      icon: (
        <span className="text-fuchsia-300">
          <IconMilk />
        </span>
      ),
      label: "Ink",
      subcategories: ["Printer", "Printer", "Printer", "Printer", "Printer"],
    },
  ];

  return (
    <div className="hidden md:flex">
      <div className="flex items-center gap-7">
        <div className="group relative cursor-pointer">
          <div className="bg-gradient-to-l from-[#c83b621a] to-[#7f35cd1a] py-3 px-4 rounded-3xl group flex items-center justify-between gap-2.5 group-open:bg-slate-900 ">
            <span className="menu-hover text-base font-medium main-text-color ">
              All Categories
            </span>
            <span className="group-hover:rotate-[-90deg] main-text-color">
              <MenuArrowIcon />
            </span>
          </div>

          <div className="absolute z-50 w-64 bg-white  rounded-lg shadow-xl hidden group-hover:block">
            {allCategoriesMenu.map((item) => (
              <div
                key={item.categoryName}
                className="group/item relative cursor-pointer"
              >
                <div className="group flex items-center justify-between my-2 py-1 md:mx-2 hover:bg-gray-200 px-4 ">
                  <div>
                    <span className="menu-hover text-black text-opacity-70 text-sm hover:font-medium">
                      {item.categoryName}
                    </span>
                  </div>
                  <span className="group-hover/item:rotate-90 text-black text-opacity-70 hover:font-medium">
                    <IconChevronRight height={20} width={20} />
                  </span>
                </div>
                <div
                  className={`absolute bg-white shadow-md rounded-md right-[-148px] top-0 invisible group-hover/item:visible p-2`}
                >
                  {item.subcategory.map((subItem) => (
                    <div
                      key={subItem.name}
                      className="cursor-pointer hover:bg-gray-200"
                    >
                      <div className=" items-center justify-between my-2 py-1  md:mx-2">
                        <span className="menu-hover text-black text-opacity-70 text-sm">
                          {subItem.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <NavigateItem />
      </div>
    </div>
  );
};

export default Sidebar;
