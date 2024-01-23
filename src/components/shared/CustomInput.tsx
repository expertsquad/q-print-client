// components/CustomInput.tsx

import React, { InputHTMLAttributes, ReactNode } from "react";
// import { IconType } from 'react-icons/lib';

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  placeholderIcon?: ReactNode;
  customClassName?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  placeholderIcon,
  customClassName = "",
  ...rest
}) => {
  return (
    <div className={`w-full relative my-5 ${customClassName}`}>
      {placeholderIcon && (
        <div className="absolute inset-y-0 left-0 pl-2 pr-3 flex items-center pointer-events-none text-black text-opacity-40">
          {placeholderIcon}
        </div>
      )}
      <input
        className={`w-full md:w-[450px] border border-black border-opacity-10 rounded-md py-3  pr-4 focus:outline-none focus:border-fuchsia-500 text-black text-opacity-50 ${
          placeholderIcon ? "pl-9" : "pl-3"
        } ${customClassName}`}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};

export default CustomInput;
