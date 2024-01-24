import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/Providers";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

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
        <body className={`${poppins.className} scroll-smooth`}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </Providers>
  );
};

export default RootLayout;
