"use client";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import { SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useUserLoginMutation } from "@/redux/features/user/user";
import Form from "@/components/form/Form";
import GlobalInput from "@/components/form/GlobalInput";
import ButtonPrimary from "@/components/shared/ButtonPrimary";
import { storeUserInfo } from "@/services/auth.service";

type FormValue = {
  phoneNumber: string;
  password: string;
};

const Login = () => {
  const [userLogin] = useUserLoginMutation();

  const router = useRouter();

  const onSubmit: SubmitHandler<FormValue> = async (data: any) => {
    console.log(data);

    try {
      const res = await userLogin({ ...data }).unwrap();
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
    <div className="h-screen flex justify-center items-center shadow-product-card-shadow login-container-image bg-[url('/src/assets/login-background.png')] bg-slate-200">
      <div className="bg-white p-5 md:p-12 rounded-custom-5px text-center">
        <div className="flex items-center justify-center my-5">
          <Image
            src={logo}
            className="[width:clamp(140px,50vw,160px)]"
            alt="Logo"
          />
        </div>
        <p className="text-center text-lg text-black-opacity-50">
          Best online ecommerce website for you
        </p>
        <Form submitHandler={onSubmit}>
          <div className="flex flex-col gap-5 mt-20">
            <GlobalInput
              name="phoneNumber"
              placeholder="Email or Phone"
              type="text"
              className={`w-full md:w-[500px]`}
            />
            <GlobalInput
              name="password"
              placeholder="Password"
              type="password"
              className={`w-full md:w-[500px]`}
            />
            <div className="flex items-center justify-end">
              <Link
                href={"/forget-password"}
                className="text-base text-black-opacity-50 mt-3"
              >
                Forget Password
              </Link>
            </div>
            <div></div>
            <ButtonPrimary
              buttonText="Log In"
              type="submit"
              className="w-full"
            />
            <div className="flex items-center justify-start gap-2">
              <input
                type="checkbox"
                id="remember-me"
                name="remember-me"
                value="remember-me"
                className="checked:bg-fuchsia-400 border-main-border-color bg-red-700 checked:border-transparent rounded-lg"
              />
              <label htmlFor="remember-me" className="text-black-opacity-50">
                Remember Me for 30 days
              </label>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
