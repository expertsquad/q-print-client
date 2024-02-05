import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/Providers";
import Footer from "@/components/Footer/Footer";

import NextBreadcrumb from "@/components/shared/NextBreadcrumb";
import { IconChevronRight } from "@tabler/icons-react";
import Header from "@/components/header/Header";

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Q Print",
  description: "Q Print | get all kind of pring online order it from here",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Providers>
      <html lang="en">
        <body className={`${poppins.className} scroll-smooth  px-3 md:px-0`}>
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
            listClasses="mx-2 text-black text-opacity-50 text-[16px]"
            capitalizeLinks
          />
          {children}
          <Footer />
        </body>
      </html>
    </Providers>
  );
};

export default RootLayout;
