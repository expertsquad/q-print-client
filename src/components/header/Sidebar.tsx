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
      <div className="flex gap-7">
        <div className="">
          <details
            className="group relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(true)}
          >
            <summary className="flex items-center gap-2 marker:content-none hover:cursor-pointer">
              <span className="main-text-color">All Categories</span>
              <span
                className={`transition group-open:rotate-90 main-text-color ${
                  isOpen ? "rotate-90" : ""
                }`}
              >
                <IconChevronRight className="" />
              </span>
            </summary>
            <article
              className={`absolute top-10 md:max-w-[300px] bg-white shadow-lg rounded-lg px-5 py-3 ${
                isOpen ? "" : "hidden"
              }`}
            >
              <ul className="flex flex-col gap-5">
                {categories.map((category, index) => (
                  <li
                    key={index}
                    className="flex justify-between relative group"
                  >
                    <div className="flex gap-3 items-center">
                      {category.icon && (
                        <span className="text-fuchsia-300">
                          {category.icon}
                        </span>
                      )}
                      <Link href="/">{category.label}</Link>
                    </div>
                    {category.subcategories && (
                      <article className="absolute right-[-147px] p-5 rounded-md flex flex-col gap-5 bg-white shadow-sm">
                        {category.subcategories.map((subcategory, subIndex) => (
                          <li key={subIndex} className="flex gap-3">
                            <Image src={demoBrandImg} alt="Demo Img" />
                            <Link href="/">{subcategory}</Link>
                          </li>
                        ))}
                      </article>
                    )}
                  </li>
                ))}
              </ul>
            </article>
          </details>
        </div>

        {[
          "Home",
          "Brands",
          "Find Cartridge",
          "Order a Design Printing",
          "About Us",
          "Privacy Policy",
        ].map((link, index) => (
          <Link key={index} href={`/${link.toLowerCase().replace(" ", "-")}`}>
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
