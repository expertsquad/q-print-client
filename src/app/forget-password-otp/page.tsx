"use client";
import OTPInput from "@/components/shared/OTPInput";
import Image from "next/image";
import React, { useState } from "react";
import verifyEmailLogo from "@/assets/verifyEmailLogo.svg";
import Spinner from "@/components/shared/Spinner";
import { useForgetPasswordOtpMutation } from "@/redux/features/forgetPassword/forgetPasswordApis";
import { useAppSelector } from "@/redux/hook";
import { useRouter } from "next/navigation";

const ForgetPasswordOtp = () => {
  const [verifyOtp, setVerifyOtp] = useState(0);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [forgetPasswordOtp] = useForgetPasswordOtpMutation();
  const { email } = useAppSelector((state) => state.forgetPassword);
  console.log(email, "Forget password otp");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const otp = Number(verifyOtp);

    const otpAndEmail = {
      email: email,
      otp: otp,
    };

    try {
      const res = await forgetPasswordOtp(otpAndEmail).unwrap();
      console.log(res, "From password otp");
      if (res.success) {
        router.push("/reset-password");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center mx-3">
      {loading && <Spinner />}
      <div className="w-[500px] bg-white shadow-modalShadow px-5 md:px-11 pb-7 rounded-2xl shadow-2xl">
        <div className="flex items-center justify-center">
          <Image src={verifyEmailLogo} alt="verifyEmailLogo" className="" />
        </div>
        <h3 className="text-black text-center font-bold text-xl md:text-2xl my-4">
          Enter 4 Digits Code
        </h3>
        <p className="text-center text-black-opacity-50 text-sm">
          Set the password for your account so you can access all the features.
        </p>
        <OTPInput length={4} setVerifyOtp={setVerifyOtp} />
        <button
          onClick={handleSubmit}
          className=" items-center w-full main-text-color font-medium py-3 border rounded-lg
           border-main-border-color my-10
           "
        >
          Verify Email
        </button>
      </div>
    </div>
  );
};

export default ForgetPasswordOtp;
