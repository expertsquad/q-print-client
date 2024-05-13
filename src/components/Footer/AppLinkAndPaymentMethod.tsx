import CombinedComponent from "./CombineComponent";
import ApplePay from "@/assets/FooterSVG/ApplePay";
import playStore from "@/assets/playstore.svg";
import appleStore from "@/assets/applestore.svg";
import Visa from "@/assets/FooterSVG/Visa";
import Discover from "@/assets/FooterSVG/Discover";
import Mastercard from "@/assets/FooterSVG/Mastercard";

const AppLinkAndPaymentMethod = () => {
  return (
    <div className="relative flex flex-col-reverse md:flex-col gap-10">
      <div className="flex md:flex-col  items-center md:items-end justify-center md:justify-end gap-5 ">
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

      <div className="flex items-center justify-center gap-5 flex-wrap md:hidden">
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
    </div>
  );
};

export default AppLinkAndPaymentMethod;