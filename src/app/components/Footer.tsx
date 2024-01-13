import ApplePay from "../assets/FooterSVG/ApplePay";
import Discover from "../assets/FooterSVG/Discover";
import Logo from "../assets/svgIcons/Logo";
import Mastercard from "../assets/FooterSVG/Mastercard";
import Visa from "../assets/FooterSVG/Visa";
import Lock from "../assets/FooterSVG/Lock";
import Music from "../assets/FooterSVG/Music";
import Link from "next/link";
import Facebook from "../assets/FooterSVG/Facebook";
import Reddit from "../assets/FooterSVG/Reddit";
import Youtube from "../assets/FooterSVG/Youtube";
import WhatsApp from "../assets/FooterSVG/WhatsApp";
import Pinterest from "../assets/FooterSVG/Pinterest";

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] p-6">
      <div className="space-y-5 md:grid md:grid-cols-5 items-center justify-center md:items-start mx-auto relative text-center py-5">
        <div className="space-y-5">
          <div className="flex items-center justify-center">
            <Logo />
          </div>
          <p className="text-sm text-[#999] lg:text-justify">
            Lorem ipsum dolor sit amet consectetur. Imperdiet aliquet faucibus
            malesuada vitae. Amet imperdiet pulvinar blandit pulvinar. Quam
            consectetur aliquam sit libero eu ultrices sed
          </p>
        </div>
        <div className="space-y-3 md:py-7">
          <h3 className="text-[#fff] font-semibold pb-2">My Account</h3>
          <p className="text-[#999]">My Account</p>
          <p className="text-[#999]">Order History</p>
          <p className="text-[#fff]">Shopping Cart</p>
          <p className="text-[#999]">Wishlist</p>
        </div>
        <div className="space-y-3 border-t border-t-gray-400 py-7 md:border-t-0">
          <h3 className="text-[#fff] font-semibold pb-2">Helps</h3>
          <p className="text-[#999]">Contact</p>
          <p className="text-[#999]">Faqs</p>
          <p className="text-[#999]">Terms & Condition</p>
          <p className="text-[#999]">Wishlist</p>
        </div>
        <div className="space-y-3 border-t border-t-gray-400 py-7 md:border-t-0">
          <h3 className="text-white font-semibold pb-2">Categories</h3>
          <p className="text-[#999]">Printer</p>
          <p className="text-[#999]">Cartridge</p>
          <p className="text-[#999]">Ink</p>
        </div>
        <div className="flex items-center justify-center gap-5 md:absolute md:bottom-10 md:right-12 flex-wrap">
          {/* <!-- payment method btn ApplePay --> */}
          <button className="border border-gray-600 w-16 h-12 flex items-center justify-center rounded-lg shrink-0">
            {""}
            <ApplePay />
          </button>
          {/* <!-- payment method btn Visa --> */}
          <button className="border border-gray-600 w-16 h-12 flex items-center justify-center rounded-lg shrink-0">
            {""}
            <Visa />
          </button>
          {/* <!-- payment method btn DISCOVER --> */}
          <button className="border border-gray-600 w-16 h-12 flex items-center justify-center rounded-lg shrink-0">
            {""}
            <Discover />
          </button>
          {/* <!-- payment method btn master Card --> */}
          <button className="flex items-center justify-center border border-gray-600 w-16 h-12 rounded-lg shrink-0">
            {""}
            <Mastercard />
          </button>
          {/* <!-- payment method btn Secure Payment --> */}
          <button className="w-24 h-12 border border-gray-600 rounded-lg font-bold text-white">
            <span className="text-[#999] flex items-center gap-1 pl-3 font-semibold text-xs">
              <Lock />
              Secure
            </span>
            Payment
          </button>
        </div>
        <div>
          <div className="flex gap-y-5 gap-x-5 py-10 md:flex-col items-center justify-center">
            {/* <!-- google play store --> */}
            <div className="flex items-center justify-between flex-1 rounded-lg bg-full-black text-white-color text-left py-4 md:py-3 px-3 md:w-40">
              Image
              <div>
                <p className="text-xs text-[#999]">GET IT ON</p>
                <h2 className="font-bold text-white">Google Play</h2>
              </div>
            </div>
            {/* <!-- Apple PlayStore --> */}
            <div className="flex items-center justify-between flex-1 rounded-lg bg-full-black text-white-color text-left py-4 md:py-3 px-3 md:w-40">
              {/* <img
                  className="w-auto md:w-7"
                  src="../../images/app-store.png"
                  alt=""
                />
                <Image /> */}
              Image
              <div>
                <p className="text-xs text-[#999]">Download on the</p>
                <h2 className="font-bold text-white">App Store</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-3 md:flex md:flex-col md:items-start">
          <div className="flex items-center justify-between md:flex-col md:items-start">
            <div className="flex gap-3 text-white-color">
              <Music />
              <p className="border-b border-b-green-500 text-sm text-white ">
                (219) 555-0114
              </p>
            </div>
            <div className="flex gap-3 md:gap-4 md:pt-14">
              <Link href="https://www.reddit.com/">
                <Reddit />
              </Link>
              <Link href="https://www.youtube.com">
                <Youtube />
              </Link>
              <Link href="https://www.whatsapp.com">
                <WhatsApp />
              </Link>
              <Link href="https://www.pinterest.com">
                <Pinterest />
              </Link>
              <Link href="https://www.facebook.com">
                <Facebook />
              </Link>
            </div>
          </div>
          <p className="text-[#999] text-center md:text-start">
            Q-Print eCommerce © 2022. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
