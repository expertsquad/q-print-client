"use client";
import Facebook from "@/assets/FooterSVG/Facebook";
import CustomInput from "@/components/shared/CustomInput";
import PasswordInput from "@/components/shared/PasswordInput";
import {
  IconMail,
  IconPhone,
  IconUser,
  IconIdBadge2,
} from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="md:max-w-[600px] bg-white shadow-modalShadow px-5 md:px-11 pb-7 rounded-2xl">
        <h4 className="mt-7 md:mt-10 font-bold text-center [font-size:_clamp(20px,5vw,26px)] mb-7">
          Sign Up
        </h4>
        <form action="">
          <CustomInput
            type="text"
            placeholder="Full Name"
            placeholderIcon={<IconUser />}
            customClassName="mt-2"
          />
          <CustomInput
            type="text"
            placeholder="QID"
            placeholderIcon={<IconIdBadge2 />}
            customClassName="mt-2"
          />
          <CustomInput
            type="email"
            placeholder="Email"
            placeholderIcon={<IconMail />}
            customClassName="mt-2"
          />
          <CustomInput
            type="number"
            placeholder="Phone Number"
            placeholderIcon={<IconPhone />}
            customClassName="mt-2"
          />
          <PasswordInput
            onChange={(e) => console.log(e)}
            placeholder="Type Password"
          />
          <PasswordInput
            onChange={(e) => console.log(e)}
            placeholder="Retype Password"
            inputStyle="mb-6"
          />
          <button className="main-bg-color text-white w-full py-3 rounded-lg">
            Create New Account
          </button>
        </form>
        {/* ==Divider */}
        <div className="divider divider-[#548]">OR</div>
        {/* //Social Login */}
        <div className="flex justify-center gap-5 mb-7">
          <button className="border flex items-center gap-2 rounded w-full md:w-[160px] py-2 px-5">
            <Facebook />
            Google
          </button>
          <button className="border flex items-center gap-2 rounded w-full md:w-[160px] py-2 px-5">
            <Facebook />
            Facebook
          </button>
        </div>

        <p className="[font-size:_clamp(16px,4vw,18px)] text-black opacity-50 text-center">
          Have your account?{" "}
          <Link className="main-text-color" href="/login">
            Login Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default page;
