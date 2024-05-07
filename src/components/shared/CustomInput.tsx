import React, { ReactNode } from "react";

interface CustomInputProps {
  placeholder: string;
  placeholderIcon?: ReactNode;
  customClassName?: string;
  inputStyle?: string;
  type?: "text" | "email" | "number";
  onChange?: (e: any) => void;
  value?: string | number | unknown | any;
  name?: string;
  readonly?: boolean;
  label?: string;
  disabled?: string;
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
  label,
  disabled,
}) => {
  return (
    <div
      className={`w-full flex items-center justify-center relative ${customClassName}`}
    >
      {placeholderIcon && (
        <div className="absolute top-6 left-0 pl-2 pr-3  pointer-events-none text-black text-opacity-40">
          {placeholderIcon}
        </div>
      )}
      <div className="flex flex-col gap-2.5 w-full">
        <label
          htmlFor={label?.toLowerCase()}
          className=" text-black-opacity-60 text-base"
        >
          {label}
        </label>
        <input

          disabled={disabled}
          readOnly={readonly}
          type={type}
          onChange={onChange}
          value={value}
          name={name}
          className={`${inputStyle} w-full border border-black border-opacity-10  py-3  pr-4 focus:outline-none focus:border-fuchsia-800 rounded-md ${readonly ? "text-black-opacity-60" : "text-black"
            } placeholder:text-sm ${placeholderIcon ? "pl-9" : "pl-5"
            } ${customClassName}`}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default CustomInput;
