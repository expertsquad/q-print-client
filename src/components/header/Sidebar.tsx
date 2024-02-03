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
          <div className="bg-fuchsia-100 py-3 px-4 rounded-3xl group flex items-center justify-between gap-2.5 group-open:bg-slate-900 ">
            <span className="menu-hover text-base font-medium main-text-color">
              All Categories
            </span>
            <span className="group-hover:rotate-90 main-text-color">
              <IconChevronRight height={24} width={24} />
            </span>
          </div>
          <div className="absolute z-50 w-72 bg-gray-100 px-4 py-1 text-gray-800 shadow-xl hidden group-hover:block">
            <a className="flex items-center justify-between my-2  border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
              Printer
              <span className="group-hover:rotate-90 ml-2">
                <IconChevronRight height={24} width={24} />
              </span>
            </a>

            <a className="flex items-center justify-between my-2  border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
              Cartridge{" "}
              <span className="group-hover:rotate-90 ml-2">
                <IconChevronRight height={24} width={24} />
              </span>
            </a>
            <a className="flex items-center justify-between my-2  border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
              Ink{" "}
              <span className="group-hover:rotate-90 ml-2">
                <IconChevronRight height={24} width={24} />
              </span>
            </a>
          </div>
        </div>

        <NavigateItem />
      </div>
    </div>
  );
};

export default Sidebar;
