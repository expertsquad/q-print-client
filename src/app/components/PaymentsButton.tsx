import { ReactElement } from "react";
import Lock from "../assets/FooterSVG/Lock";

interface PaymentButtonProps {
  paymentMethodComponents?: ReactElement;
  isSecure?: boolean;
  secureButtonContent?: React.ReactNode | string;
}
const PaymentsButton = ({
  paymentMethodComponents,
  isSecure,
  secureButtonContent,
}: PaymentButtonProps) => {
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
      {""}
      {paymentMethodComponents}
    </button>
  );
};

export default PaymentsButton;
