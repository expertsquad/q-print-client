import NewFooter from "@/components/Footer/NewFooter";
import Header from "@/components/header/Header";
import NextBreadcrumb from "@/components/shared/NextBreadcrumb";
import { IconChevronRight } from "@tabler/icons-react";
import { Poppins } from "next/font/google";
import React from "react";
import { ToastContainer } from "react-toastify";
import ScrollToTopButton from "@/components/shared/ScrollToTopButton";
import "react-toastify/dist/ReactToastify.css";
import QuickMessagePopup from "@/components/shared/QuickMessagePopup";

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
});

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`${poppins.className} no-scrollbar`}>
      <Header />
      <div className="mt-[200px]">
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
      <ScrollToTopButton />
      <QuickMessagePopup />
      <div className="max-w-[1280px]  mx-auto px-5 ">{children}</div>
      {/* <Footer /> */}
      <NewFooter />
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
