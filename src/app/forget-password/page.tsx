"use client";
import Image from "next/image";
import lockImageOne from "@/assets/lockImageOne.svg";
import CustomInput from "@/components/shared/CustomInput";
import { useState } from "react";
import { useRouter } from "next/navigation";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted email:", email);
    router.push("/verify-email");
  };

  return (
    <div className="h-screen flex items-center justify-center mx-3">
      <div className="md:max-w-[500px] bg-white shadow-modalShadow md:px-11 pb-7 rounded-2xl px-5 py-14 shadow-2xl">
        <div className="flex items-center justify-center">
          <Image src={lockImageOne} alt="verifyEmailLogo" className="" />
        </div>
        <h3 className="text-black text-center font-bold text-xl md:text-2xl my-4">
          Forgot Password
        </h3>
        <p className="text-center text-black-opacity-50 text-base mb-8">
          Set the password for your account so you can access all the features.
        </p>

        <form onSubmit={handleSubmit}>
          <CustomInput
            label="E-mail"
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="w-full main-bg-color text-white font-medium py-3 rounded-lg my-10 flex items-center justify-center"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
