"use client";
import Facebook from "@/assets/FooterSVG/Facebook";
import CustomInput from "@/components/shared/CustomInput";
import PasswordInput from "@/components/shared/PasswordInput";
import {
  setConfirmPassword,
  setEmail,
  setFullName,
  setPassword,
  setPhoneNumber,
  setQid,
} from "@/redux/features/user/signUpSlice";
import { useUserSignUpMutation } from "@/redux/features/user/user";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { storeUserInfo } from "@/services/auth.service";
import {
  IconMail,
  IconPhone,
  IconUser,
  IconIdBadge2,
} from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [userSignUp] = useUserSignUpMutation();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { fullName, email, password, confirmPassword, qid, phoneNumber } =
    useAppSelector((state) => state.signUp);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("fullName", fullName);
    formData.append("password", password);
    formData.append("confirmPassword", confirmPassword);
    formData.append("phoneNumber", phoneNumber);
    formData.append("qid", qid);

    try {
      const res = await userSignUp(formData).unwrap();
      console.log(res);
      storeUserInfo({ accessToken: res?.data?.accessToken });
      console.log(res?.data?.accessToken);
      if (res?.data?.accessToken) {
        router.push("/");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-[500px] bg-white px-5 md:px-10 py-3 rounded-2xl shadow-lg border">
        <h4 className="font-bold text-center [font-size:_clamp(20px,5vw,26px)] mb-7">
          Sign Up
        </h4>
        <form onSubmit={onSubmit} action="" className="flex flex-col gap-y-3">
          <CustomInput
            name="fullName"
            type="text"
            placeholder="Full Name"
            placeholderIcon={<IconUser stroke={2} width={20} height={20} />}
            onChange={(e) => dispatch(setFullName(e.target.value))}
          />
          <CustomInput
            name="qid"
            type="text"
            placeholder="QID"
            placeholderIcon={<IconIdBadge2 stroke={2} width={20} height={20} />}
            onChange={(e) => dispatch(setQid(e.target.value))}
          />
          <CustomInput
            name="email"
            type="email"
            placeholder="Email"
            placeholderIcon={<IconMail stroke={2} width={20} height={20} />}
            onChange={(e) => dispatch(setEmail(e.target.value))}
          />
          <CustomInput
            name="phoneNumber"
            type="number"
            placeholder="Phone Number"
            placeholderIcon={<IconPhone stroke={2} width={20} height={20} />}
            onChange={(e) => dispatch(setPhoneNumber(e.target.value))}
          />
          <PasswordInput
            name="password"
            onChange={(e) => dispatch(setPassword(e.target.value))}
            placeholder="Type Password"
          />
          <PasswordInput
            name="confirmPassword"
            placeholder="Retype Password"
            onChange={(e) => dispatch(setConfirmPassword(e.target.value))}
          />
          <button className="main-bg-color text-white w-full py-3 rounded-lg mt-5">
            Create New Account
          </button>
        </form>

        <p className="[font-size:_clamp(16px,4vw,18px)] text-black-opacity-80 text-center mt-5">
          Have your account?{" "}
          <Link className="main-text-color" href="/login">
            Login Now
          </Link>
        </p>

        <Link
          className="flex items-center justify-center mt-5 font-bold"
          href={"/"}
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
