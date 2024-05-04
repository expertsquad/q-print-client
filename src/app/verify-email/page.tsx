"use client";
import Image from "next/image";
import verifyEmailLogo from "@/assets/verifyEmailLogo.svg";
import OTPInput from "@/components/shared/OTPInput";
import { useState } from "react";
import { useVerifyUserByOtpMutation } from "@/redux/features/user/user";
import Spinner from "@/components/shared/Spinner";

const VerifyEmail = () => {
  const [verifyOtp, setVerifyOtp] = useState(0);
  const [loading, setLoading] = useState(false);

  const [verifyEmail] = useVerifyUserByOtpMutation();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const otp = Number(verifyOtp);
    try {
      const verifiedOtp = { otp: otp };
      console.log(verifiedOtp, "Hek");

      const res = await verifyEmail(verifiedOtp).unwrap();
      console.log(res, "Helllo");
    } catch (err: any) {
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
          Verify your email address
        </h3>
        <p className="text-center text-black-opacity-50 text-sm">
          We emailed a six-digit to artu@gmail.com Enter the code below to
          confirm your email address
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
        <div className="text-center gap-1 flex items-center justify-center">
          <span>Code didn’t get?</span>
          <button className="font-bold ">Resend</button>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
