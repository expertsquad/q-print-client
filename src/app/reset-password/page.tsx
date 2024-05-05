"use client";
import Image from "next/image";
import lockImageOne from "@/assets/lockImageOne.svg";
import PasswordInput from "@/components/shared/PasswordInput";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/hook";
import {
  confirmSetResetNewPassword,
  setResetNewPassword,
} from "@/redux/features/forgetPassword/forgetPasswordSlice";
import { useState } from "react";
import { useResetPasswordMutation } from "@/redux/features/forgetPassword/forgetPasswordApis";
import { useRouter } from "next/navigation";
import Spinner from "@/components/shared/Spinner";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const [resetPassword] = useResetPasswordMutation();
  const { newPassword, confirmPassword } = useAppSelector(
    (state) => state.forgetPassword
  );
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const resetPass = {
      newPassword: newPassword,
      confirmPassword: confirmPassword,
    };
    try {
      const res = await resetPassword(resetPass).unwrap();
      toast.success(res?.data?.message);
      if (res.success) {
        router.push("/login");
      }
    } catch (err: any) {
      toast.error(err?.data?.message);
      setError(err?.data?.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="h-screen flex items-center justify-center mx-3">
      {loading && <Spinner />}
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
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="password" className="text-black text-opacity-70">
            New Password
          </label>
          <PasswordInput
            name="newPassword"
            onChange={(e) => dispatch(setResetNewPassword(e.target.value))}
            placeholder="New Password"
            inputStyle="mb-5"
          />
          <label htmlFor="password" className="text-black text-opacity-70">
            Confirm Password
          </label>
          <PasswordInput
            name="confirmPassword"
            onChange={(e) =>
              dispatch(confirmSetResetNewPassword(e.target.value))
            }
            placeholder="Confirm Password"
          />
          <small className="text-xs text-red-500">{error}</small>
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
