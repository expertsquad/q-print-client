import FooterLinks from "./FooterLinks";
import CombinedComponent from "./CombineComponent";
import Music from "@/assets/FooterSVG/Music";
import Logo from "@/assets/svgIcons/Logo";
import Visa from "@/assets/FooterSVG/Visa";
import Discover from "@/assets/FooterSVG/Discover";
import Mastercard from "@/assets/FooterSVG/Mastercard";
import Reddit from "@/assets/FooterSVG/Reddit";
import Youtube from "@/assets/FooterSVG/Youtube";
import WhatsApp from "@/assets/FooterSVG/WhatsApp";
import Pinterest from "@/assets/FooterSVG/Pinterest";
import Facebook from "@/assets/FooterSVG/Facebook";
import ApplePay from "@/assets/FooterSVG/ApplePay";
import playStore from "@/assets/playstore.svg";
import appleStore from "@/assets/applestore.svg";

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] p-6 ">
      <div className="space-y-5 md:grid md:grid-cols-3 items-center justify-center md:items-start relative text-center py-5 gap-5 md:max-w-[1280px] mx-auto">
        <div className="space-y-5">
          <div className="flex md:justify-start justify-center ">
            <Logo />
          </div>
          <p className="text-sm text-[#999] lg:text-justify">
            Welcome to Q Print, your one-stop destination for all your printing needs! From business cards to banners, weve got you covered with high-quality printing solutions. Browse our wide selection of products and services, including custom designs and fast turnaround times. At Q Print, were committed to excellence in both print quality and customer service. Let us help bring your ideas to life. Explore our website today and experience the ease and convenience of printing with Q Print.
          </p>
        </div>
        {/* //Footer Links */}
        <FooterLinks />
        {/* //Payment Methods */}
        <div className="flex items-center justify-center gap-5 md:absolute md:bottom-10 md:right-12 flex-wrap">
          <CombinedComponent
            type="payment"
            paymentMethodComponents={<ApplePay />}
          />
          <CombinedComponent
            type="payment"
            paymentMethodComponents={<Visa />}
          />
          <CombinedComponent
            type="payment"
            paymentMethodComponents={<Discover />}
          />
          <CombinedComponent
            type="payment"
            paymentMethodComponents={<Mastercard />}
          />

          <CombinedComponent
            type="payment"
            isSecure={true}
            secureButtonContent="Payment"
          />
        </div>
        <div>
          <div className="flex gap-y-5 gap-x-5 py-10 md:flex-col items-center justify-center">
            <CombinedComponent
              type="store"
              storeImageSrc={playStore}
              storeType="Google Play"
              additionalText="GET IT ON"
            />
            <CombinedComponent
              type="store"
              storeImageSrc={appleStore}
              storeType="App Store"
              additionalText="Download on the"
            />
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
            {/* //Social Links */}
            <div className="flex gap-3 md:gap-4 md:pt-14">
              <CombinedComponent
                type="social"
                socialIcon={<Reddit />}
                socialLinkHref="https://www.reddit.com"
              />
              <CombinedComponent
                type="social"
                socialIcon={<Youtube />}
                socialLinkHref="https://www.Youtube.com"
              />
              <CombinedComponent
                type="social"
                socialIcon={<WhatsApp />}
                socialLinkHref="https://www.whatsappp.com"
              />
              <CombinedComponent
                type="social"
                socialIcon={<Pinterest />}
                socialLinkHref="https://www.pinterest.com"
              />
              <CombinedComponent
                type="social"
                socialIcon={<Facebook />}
                socialLinkHref="https://www.facebook.com"
              />
            </div>
          </div>
          <p className="text-[#999] text-center md:text-start">
            Q-Print eCommerce © {`${currentYear}`}. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
