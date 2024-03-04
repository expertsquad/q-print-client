import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";
import NextBreadcrumb from "@/components/shared/NextBreadcrumb";
import { IconChevronRight } from "@tabler/icons-react";
import { Poppins } from "next/font/google";
import React from "react";

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
});

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`${poppins.className} scroll-smooth  px-3 md:px-2 lg:px-0`}>
      <Header />
      <NextBreadcrumb
        homeElement={"Home"}
        separator={
          <span className="text-black text-opacity-50">
            {" "}
            <IconChevronRight width={20} height={20} />{" "}
          </span>
        }
        activeClasses="main-text-color"
        containerClasses="flex items-center pb-5"
        listClasses="mr-2 text-black text-opacity-50 text-[16px]"
        capitalizeLinks
      />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
