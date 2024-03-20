import { IconEye, IconEyeOff } from "@tabler/icons-react";
import React, { useState } from "react";

interface PasswordInputProps {
  placeholder?: string;
  className?: string;
  inputStyle?: string;
  onChange?: (e: any) => void;
  value?: string | number;
  name?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  onChange,
  placeholder,
  className,
  inputStyle,
  value,
  name,
}) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className={`relative ${className}`}>
      <input
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        className={`border w-full py-3 pl-3 outline-none focus:border-fuchsia-500 rounded-md mt-3 ${inputStyle}`}
      />
      <button
        type="button"
        onClick={handleTogglePassword}
        className="absolute top-6 right-0 flex items-center px-3 text-gray-500"
      >
        {showPassword ? (
          <IconEye width={24} height={24} /> // Replace with your eye icon component
        ) : (
          <IconEyeOff width={24} height={24} /> // Replace with your eye-off icon component
        )}
      </button>
    </div>
  );
};

export default PasswordInput;
