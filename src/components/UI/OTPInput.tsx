<<<<<<< HEAD
import React from "react";

interface OTPInputProps {
  length: number;
}

const OTPInput = ({ length }: OTPInputProps) => {
  const inputArray = Array.from({ length }, (_, index) => index + 1);
=======
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
>>>>>>> parent of b776493 (working on otp validation)

  return (
    <div
      id="otpNumberCounter"
      className="flex justify-center text-center px-2 mt-12"
    >
<<<<<<< HEAD
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
=======
      {otp.map((value, index) => (
        <input
          name="otp"
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
>>>>>>> parent of b776493 (working on otp validation)
        />
      ))}
    </div>
  );
};

export default OTPInput;
