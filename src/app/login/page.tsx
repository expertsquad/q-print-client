"use client";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useUserLoginMutation } from "@/redux/features/user/user";
import { storeUserInfo } from "@/services/auth.service";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  setLoginEmail,
  setLoginPassword,
} from "@/redux/features/user/loginSlice";
import CustomInput from "@/components/shared/CustomInput";
import PasswordInput from "@/components/shared/PasswordInput";

const Login = () => {
  const [userLogin] = useUserLoginMutation();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { email, password } = useAppSelector((state) => state.login);
  console.log(email, password);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    console.log("email", email);
    console.log("password", password);

    try {
      const res = await userLogin(formData).unwrap();
      // console.log(res);
      storeUserInfo({ accessToken: res?.data?.accessToken });
      // console.log(res?.data?.accessToken);
      if (res?.data?.accessToken) {
        router.push("/");
      }
    } catch (err: any) {
      console.error(err.message.length);
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
        <form onSubmit={onSubmit}>
          <div className="flex flex-col gap-5 mt-20">
            <CustomInput
              name="email"
              type="email"
              placeholder="Enter Your Email"
              customClassName="mt-2"
              onChange={(e) => dispatch(setLoginEmail(e.target.value))}
            />
            <div className="flex flex-col">
              <PasswordInput
                name="password"
                onChange={(e) => dispatch(setLoginPassword(e.target.value))}
                placeholder="Type Password"
              />
              <div className="flex items-center justify-end mt-1">
                <Link
                  href={"/forget-password"}
                  className="text-sm text-black-opacity-50 "
                >
                  Forget Password
                </Link>
              </div>
            </div>

            <button
              type="submit"
              className="main-bg-color text-white w-full py-3 rounded-lg"
            >
              Login
            </button>
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
        </form>
      </div>
    </div>
  );
};

export default Login;
