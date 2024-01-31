import React from "react";

interface OTPInputProps {
  length: number;
}

const OTPInput = ({ length }: OTPInputProps) => {
  const inputArray = Array.from({ length }, (_, index) => index + 1);

  return (
    <div
      id="otpNumberCounter"
      className="flex justify-center text-center px-2 mt-12"
    >
      {inputArray.map((i, index) => (
        <input
          title="OTP Input"
          key={i}
          className={`main-text-color text-[34px] md:text-[45px] font-semibold m-2 border h-[70px] md:max-h-[100px] w-[60px] md:max-w-[90px] text-center form-control rounded outline-none ${
            i === i.valueOf()
              ? "focus:border-fuchsia-500"
              : "focus:ring-blue-500 focus:border-fuchsia-500"
          }`}
          type={"number" || "number"}
          maxLength={index}
          inputMode="none"
          autoFocus={index === 0}
          id={`otp_${i}`}
        />
      ))}
    </div>
  );
};

export default OTPInput;
