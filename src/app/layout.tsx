import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer/Footer";

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
    <html lang="en">
      <body className={poppins.className}>
        <div
          className="w-full items-center py-10 text-3xl text-center border-b-2 border-red-200
         "
        >
          Heder section comming soon ...
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
