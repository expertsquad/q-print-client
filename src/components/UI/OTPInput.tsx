"use client";
import { useState } from "react";

interface OTPInputProps {
  length: number;
  title?: string;
  subTitle?: string;
  setVerifyOtp?: any;
}

const OTPInput = ({ length, title, subTitle, setVerifyOtp }: OTPInputProps) => {
  const [otp, setOTP] = useState<number[]>(Array(length).fill(NaN));
  setVerifyOtp(otp.join(""));

  const handleChange = (index: number, value: string) => {
    if (/^\d$/.test(value)) {
      const newOTP = [...otp];
      newOTP[index] = parseInt(value);
      setOTP(newOTP);

      if (index < length - 1) {
        const nextInput = document.getElementById(`otp_${index + 2}`);
        if (nextInput) nextInput.focus();
      }
    } else if (value === "") {
      const newOTP = [...otp];
      newOTP[index] = NaN;
      setOTP(newOTP);

      if (index > 0) {
        const prevInput = document.getElementById(`otp_${index}`);
        if (prevInput) prevInput.focus();
      }
    }
  };

  return (
    <div
      id="otpNumberCounter"
      className="flex justify-center text-center px-2 mt-12"
    >
      {otp.map((value, index) => (
        <input
          title="OTP Input"
          key={index}
          className={`main-text-color text-[34px] md:text-[45px] font-bold m-2 border h-[70px] md:max-h-[100px] w-[60px] md:max-w-[90px] text-center form-control rounded outline-none ${
            !isNaN(value) ? "focus:border-main-border-color" : ""
          }`}
          type="tel"
          maxLength={1}
          value={!isNaN(value) ? value.toString() : ""}
          onChange={(e) => handleChange(index, e.target.value)}
          autoFocus={index === 0}
          id={`otp_${index + 1}`}
        />
      ))}
    </div>
  );
};

export default OTPInput;
