"use client";
import Facebook from "@/assets/FooterSVG/Facebook";
import Form from "@/components/form/Form";
import GlobalInput from "@/components/form/GlobalInput";
import ButtonPrimary from "@/components/shared/ButtonPrimary";
import CustomInput from "@/components/shared/CustomInput";
import PasswordInput from "@/components/shared/PasswordInput";
import { useUserLoginMutation } from "@/redux/features/user/user";
import { storeUserInfo } from "@/services/auth.service";
import {
  IconMail,
  IconPhone,
  IconUser,
  IconIdBadge2,
} from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";

type FormValue = {
  fullName: string;
  qid?: number;
  email?: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
};

const SignUp = () => {
  const [userSignUp] = useUserLoginMutation();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValue> = async (data: any) => {
    console.log(data);
    try {
      const res = await userSignUp({ ...data }).unwrap();
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
      <div className="md:max-w-[600px] bg-white shadow-modalShadow px-5 md:px-11 pb-7 rounded-2xl">
        <h4 className="mt-7 md:mt-10 font-bold text-center [font-size:_clamp(20px,5vw,26px)] mb-7">
          Sign Up
        </h4>
        {/* <form action="">
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
        </form> */}

        {/* ==Test== */}
        <Form submitHandler={onSubmit}>
          <div className="flex flex-col gap-5 mt-20">
            <GlobalInput
              name="fullName"
              placeholder="Full Name"
              type="text"
              className={`w-full md:w-[500px]`}
            />
            <GlobalInput
              name="qid"
              placeholder="QID"
              type="text"
              className="w-full md:w-[500px]"
            />
            <GlobalInput
              name="email"
              placeholder="Email"
              type="email"
              className={`w-full md:w-[500px]`}
            />
            <GlobalInput
              name="phoneNumber"
              placeholder="Phone Number"
              type="number"
              className={`w-full md:w-[500px]`}
            />
            <GlobalInput
              name="password"
              placeholder="Password"
              type="password"
              className={`w-full md:w-[500px]`}
            />
            <GlobalInput
              name="confirmPassword"
              placeholder="Confirm Password"
              type="password"
              className={`w-full md:w-[500px]`}
            />

            <ButtonPrimary
              buttonText="Sign Up"
              type="submit"
              className="w-full"
            />
          </div>
        </Form>
        {/* ==Test== */}

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

export default SignUp;
