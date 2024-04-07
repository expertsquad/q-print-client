"use client";

import { useFormContext, Controller, SubmitHandler } from "react-hook-form";

interface GlobalInputProps {
  label?: string;
  type?: "text" | "number" | "email" | "textarea" | "password";
  placeholder?: string;
  className?: string;
  containerStyle?: string;
  textareaLength?: number;
  disabled?: boolean;
  name: string;
  value?: string;
  onChange?: (e: any) => void;
}

const GlobalInput = ({
  label,
  type,
  placeholder,
  className,
  containerStyle,
  textareaLength,
  disabled,
  name,
  value,
  onChange,
}: GlobalInputProps) => {
  const { control } = useFormContext();

  return (
    <div className={`flex flex-col gap-2.5 w-full ${containerStyle}`}>
      {/* <== Custom Input Label ==> */}
      <label htmlFor={name} className="text-black-opacity-60">
        {label}
      </label>
      {/* <== Custom Input Textarea or Input ==> */}
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          if (type === "textarea") {
            return (
              <textarea
                {...field}
                placeholder={placeholder}
                rows={4}
                value={value ? value : field?.value}
                maxLength={textareaLength}
                className={`${className} resize-none border py-2.5 pl-5 bg-transparent outline-none rounded-custom-5px active:border-fuchsia-800 focus:border-fuchsia-800`}
                disabled={disabled}
              />
            );
          } else {
            return (
              <input
                {...field}
                type={type}
                placeholder={placeholder}
                className={`${className} border py-3 px-3.5 bg-transparent outline-none rounded-custom-5px active:border-fuchsia-800 focus:border-fuchsia-800 `}
                disabled={disabled}
                value={value ? value : field?.value}
                onChange={onChange}
              />
            );
          }
        }}
      />
    </div>
  );
};

export default GlobalInput;
