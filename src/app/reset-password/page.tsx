"use client";
import Image from "next/image";
import lockImageOne from "@/assets/lockImageOne.svg";

import PasswordInput from "@/components/shared/PasswordInput";

const ResetPassword = () => {
  return (
    <div className="h-screen flex items-center justify-center mx-3">
      <div className="md:max-w-[500px] bg-white shadow-modalShadow md:px-11 rounded-2xl px-5 py-14 shadow-2xl">
        <div className="flex items-center justify-center">
          <Image src={lockImageOne} alt="verifyEmailLogo" className="" />
        </div>
        <h3 className="text-black text-center font-bold text-xl md:text-2xl my-4">
          Reset Password
        </h3>
        <p className="text-center text-black-opacity-50 text-base mb-8">
          Set the password for your account so you can access all the features.
        </p>
        <form action="">
          <label htmlFor="password" className="text-black text-opacity-70">
            New Password
          </label>
          <PasswordInput
            onChange={(e) => console.log(e)}
            placeholder="New Password"
            inputStyle="mb-5"
          />
          <label htmlFor="password" className="text-black text-opacity-70">
            Confirm Password
          </label>
          <PasswordInput
            onChange={(e) => console.log(e)}
            placeholder="Confirm Password"
          />
          <button
            type="submit"
            className="w-full main-bg-color text-white font-medium py-3 rounded-lg mt-10"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
