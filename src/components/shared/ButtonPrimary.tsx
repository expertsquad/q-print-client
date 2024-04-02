interface ShopSetupCommonSubmitBTNProps {
  className?: string;
  onClick?: () => void;
  buttonText?: string;
  type: "submit" | "reset";
}
const ButtonPrimary = ({
  className,
  type,
  onClick,
  buttonText,
}: ShopSetupCommonSubmitBTNProps) => {
  return (
    <button
      className={`${className} rounded-lg text-white main-bg-color hover:opacity-90 transition-all duration-500 py-3  flex items-center justify-center px-10 `}
      type={type}
    >
      {buttonText}
    </button>
  );
};

export default ButtonPrimary;
