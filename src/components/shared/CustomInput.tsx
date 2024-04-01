import React, { ReactNode } from "react";

interface CustomInputProps {
  placeholder: string;
  placeholderIcon?: ReactNode;
  customClassName?: string;
  inputStyle?: string;
  type?: "text" | "email" | "number";
  onChange?: (e: any) => void;
  value?: string | number;
  name?: string;
  readonly?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  placeholderIcon,
  customClassName = "",
  inputStyle,
  type,
  onChange,
  value,
  name,
  readonly,
}) => {
  return (
    <div
      className={`w-full flex items-center justify-center relative ${customClassName}`}
    >
      {placeholderIcon && (
        <div className="absolute top-5 left-0 pl-2 pr-3  pointer-events-none text-black text-opacity-40">
          {placeholderIcon}
        </div>
      )}
      <input
        type={type}
        onChange={onChange}
        value={value}
        name={name}
        className={`${inputStyle} w-full border border-black border-opacity-10 rounded-md py-3  pr-4 focus:outline-none focus:border-fuchsia-500 ${
          readonly && "text-black text-opacity-50"
        } placeholder:text-sm ${
          placeholderIcon ? "pl-9" : "pl-3"
        } ${customClassName}`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomInput;
