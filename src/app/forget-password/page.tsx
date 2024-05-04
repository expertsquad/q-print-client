"use client";
import Image from "next/image";
import lockImageOne from "@/assets/lockImageOne.svg";
import CustomInput from "@/components/shared/CustomInput";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Spinner from "@/components/shared/Spinner";
import { useForgetPasswordMutation } from "@/redux/features/forgetPassword/forgetPasswordApis";
import { useDispatch } from "react-redux";
import { setForgettedEmail } from "@/redux/features/forgetPassword/forgetPasswordSlice";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const router = useRouter();
  const [forgetPassword] = useForgetPasswordMutation();
  const dispatch = useDispatch();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isEmail = { email: email };

    try {
      const res = await forgetPassword(isEmail).unwrap();
      dispatch(setForgettedEmail(email));
      if (res.success) {
        router.push("/forget-password-otp");
      }
      setEmail("");
    } catch (err: any) {
      setErr(err?.data?.message);
      console.log(err?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center mx-3">
      {loading && <Spinner />}
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
          <div>
            <CustomInput
              name="email"
              label="E-mail"
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <span className="text-red-500 text-xs">{err}</span>
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
