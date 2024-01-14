import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";
import Lock from "../../assets/FooterSVG/Lock";

interface CombinedComponentProps {
  type: "payment" | "social" | "store";
  paymentMethodComponents?: ReactElement;
  isSecure?: boolean;
  secureButtonContent?: React.ReactNode | string;
  socialIcon?: ReactElement;
  socialLinkHref?: string;
  storeImageSrc?: string;
  storeType?: string;
  additionalText?: string | ReactElement;
}

const CombinedComponent: React.FC<CombinedComponentProps> = ({
  type,
  paymentMethodComponents,
  isSecure,
  secureButtonContent,
  socialIcon,
  socialLinkHref,
  storeImageSrc,
  storeType,
  additionalText,
}) => {
  if (type === "payment") {
    if (isSecure) {
      return (
        <button className="w-24 h-12 border border-gray-600 rounded-lg font-bold text-white">
          <span className="text-[#999] flex items-center gap-1 pl-3 font-semibold text-xs">
            <Lock />
            Secure
          </span>
          {secureButtonContent}
        </button>
      );
    }
    return (
      <button className="border border-gray-600 w-16 h-12 flex items-center justify-center rounded-lg shrink-0">
        {paymentMethodComponents}
      </button>
    );
  }

  if (type === "social") {
    return <Link href={socialLinkHref || "#"}>{socialIcon}</Link>;
  }

  if (type === "store") {
    return (
      <div className="flex items-center justify-between flex-1 rounded-lg bg-[#000] text-white-color text-left py-4 md:py-3 px-3 md:w-40">
        <div>
          {storeImageSrc && (
            <Image
              src={storeImageSrc}
              alt={storeType || "Store Image"}
              className="max-h-8"
            />
          )}
        </div>
        <div>
          <p className="text-xs text-[#999]">{additionalText}</p>
          <h2 className="font-bold text-white">{storeType}</h2>
        </div>
      </div>
    );
  }

  return null;
};

export default CombinedComponent;
