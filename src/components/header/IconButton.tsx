import React, { ReactNode } from "react";

interface IconButtonProps {
  icon: ReactNode;
  badgeCount?: number;
  label: string;
  // onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  customStyles?: string;
}

const IconButton = ({
  icon,
  badgeCount,
  label,
  customStyles,
}: IconButtonProps) => {
  return (
    <div className={customStyles}>
      <button
        className="relative"
        //   onClick={handleClick}
      >
        {icon}
        {badgeCount && (
          <span className="badge absolute top-[-2px] right-[-10px] bg-[#E73C17] text-white rounded-full h-5 w-5 text-[9px]">
            {badgeCount}
          </span>
        )}
      </button>
      <span className="hidden md:block">{label}</span>
    </div>
  );
};

export default IconButton;
