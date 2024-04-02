import { IconEye, IconEyeOff } from "@tabler/icons-react";
import React, { useState } from "react";

interface PasswordInputProps {
  placeholder?: string;
  className?: string;
  inputStyle?: string;
  onChange?: (e: any) => void;
  value?: string | number;
  name?: string;
  type?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  onChange,
  placeholder,
  className,
  inputStyle,
  value,
  name,
  type,
}) => {
  const [showPassword, setShowPassword] = useState(true);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className={`relative ${className}`}>
      <input
        type={showPassword ? "password" : "text"}
        // type="password"
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        className={`border w-full py-3 pl-3 outline-none focus:border-fuchsia-500 rounded-md mt-3 placeholder:text-sm ${inputStyle}`}
      />
      <button
        type="button"
        onClick={handleTogglePassword}
        className="absolute top-7 right-0 flex items-center px-3 text-gray-500"
      >
        {showPassword ? (
          <IconEyeOff width={20} height={20} />
        ) : (
          <IconEye width={20} height={20} />
        )}
      </button>
    </div>
  );
};

export default PasswordInput;
