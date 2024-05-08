import Lock from "@/assets/FooterSVG/Lock";
import { IconLock } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";

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
        <button className="w-24  border border-gray-600 rounded-md py-0.5 font-bold text-white flex flex-col items-center">
          <span className=" flex items-center gap-1  font-semibold text-xs">
            {/* <Lock /> */}
            <IconLock stroke={1} className="text-white" width={17} height={17} />
            Secure
          </span>
          {secureButtonContent}
        </button>
      );
    }
    return (
      <button className="border border-gray-600 w-16 h-12 flex items-center justify-center rounded-md shrink-0">
        {paymentMethodComponents}
      </button>
    );
  }

  if (type === "social") {
    return <Link className="hover:scale-105 transition-all" href={socialLinkHref || "#"}>{socialIcon}</Link>;
  }

  if (type === "store") {
    return (
      <div className="flex items-center max-w-[165px] justify-between flex-1 rounded-lg bg-[#000] text-white-color text-left py-4 md:py-3 px-3 md:w-40">
        <div className="mx-h-8">
          {storeImageSrc && (
            <Image
              src={storeImageSrc}
              alt={storeType || "Store Image"}
              priority={true}
            />
          )}
        </div>
        <div>
          <p className="text-xs text-[#999] whitespace-nowrap">{additionalText}</p>
          <h2 className="font-bold text-white">{storeType}</h2>
        </div>
      </div>
    );
  }

  return null;
};

export default CombinedComponent;
