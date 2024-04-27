import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";
import NextBreadcrumb from "@/components/shared/NextBreadcrumb";
import { IconChevronRight } from "@tabler/icons-react";
import { Poppins } from "next/font/google";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
});

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`${poppins.className} scroll-smooth no-scrollbar`}>
      <div className="px-3 md:px-3 lg:px-0">
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
          containerClasses="flex items-center flex-wrap pb-5"
          listClasses="mr-2 text-black text-opacity-50 text-[16px]"
          capitalizeLinks
        />
      </div>
      <div className="px-3 md:px-3 lg:px-0 md:mt-56 mt-40">{children}</div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
