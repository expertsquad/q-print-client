import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/Providers";

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
    <html lang="en" className="scroll-smooth">
      <body >
        <Providers>
          <div className={`${poppins.className}`}>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
