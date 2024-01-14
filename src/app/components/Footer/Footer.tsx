import ApplePay from "../../assets/FooterSVG/ApplePay";
import Discover from "../../assets/FooterSVG/Discover";
import Logo from "../../assets/svgIcons/Logo";
import Mastercard from "../../assets/FooterSVG/Mastercard";
import Visa from "../../assets/FooterSVG/Visa";
import Music from "../../assets/FooterSVG/Music";
import Facebook from "../../assets/FooterSVG/Facebook";
import Reddit from "../../assets/FooterSVG/Reddit";
import Youtube from "../../assets/FooterSVG/Youtube";
import WhatsApp from "../../assets/FooterSVG/WhatsApp";
import Pinterest from "../../assets/FooterSVG/Pinterest";
import FooterLinks from "./FooterLinks";
import appleStore from "@/app/assets/applestore.svg";
import playStore from "@/app/assets/playstore.svg";
import CombinedComponent from "./CombineComponent";

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] p-6">
      <div className="space-y-5 md:grid md:grid-cols-3 items-center justify-center md:items-start mx-auto relative text-center py-5">
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
            Q-Print eCommerce © 2022. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
