"use client";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useUserLoginMutation } from "@/redux/features/user/user";
import Form from "@/components/form/Form";
import GlobalInput from "@/components/form/GlobalInput";
import ButtonPrimary from "@/components/shared/ButtonPrimary";
import { storeUserInfo } from "@/services/auth.service";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { setPassword, setPhoneNumber } from "@/redux/features/user/loginSlice";
import { IconPhone } from "@tabler/icons-react";
import CustomInput from "@/components/shared/CustomInput";
import PasswordInput from "@/components/shared/PasswordInput";

const Login = () => {
  const [userLogin] = useUserLoginMutation();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { phoneNumber, password } = useAppSelector((state) => state.login);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("phoneNumber", phoneNumber);
    formData.append("password", password);

    try {
      const res = await userLogin(formData).unwrap();
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
        <form onSubmit={onSubmit}>
          <div className="flex flex-col gap-5 mt-20">
            <CustomInput
              name="phoneNumber"
              type="number"
              placeholder="Phone Number"
              placeholderIcon={<IconPhone />}
              customClassName="mt-2"
              onChange={(e) => dispatch(setPhoneNumber(e.target.value))}
            />
            <PasswordInput
              name="password"
              onChange={(e) => dispatch(setPassword(e.target.value))}
              placeholder="Type Password"
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
        </form>
      </div>
    </div>
  );
};

export default Login;
