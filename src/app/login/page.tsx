"use client";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import Link from "next/link";
import Facebook from "@/assets/FooterSVG/Facebook";
import CustomInput from "@/components/shared/CustomInput";
import PasswordInput from "@/components/shared/PasswordInput";

const Login = () => {
  return (
    <div className="h-screen flex items-center justify-center mx-3">
      <div className="md:max-w-[600px] bg-white shadow-modalShadow px-5 md:px-11 pb-7 rounded-2xl">
        {/* //Logo */}
        <div className="flex justify-center items-center mb-5 mt-12 md:mt-20">
          <Image src={logo} alt="Logo" />
        </div>
        <p className="[font-size:_clamp(15px,2vw,16px)] text-black opacity-50 text-center">
          Best online e-commerce website for you
        </p>
        {/* //Social Login */}
        <div className="flex justify-center gap-5 mt-14">
          <button className="border flex items-center gap-2 rounded w-full md:w-[160px] py-2 px-5">
            <Facebook />
            Google
          </button>
          <button className="border flex items-center gap-2 rounded w-full md:w-[160px] py-2 px-5">
            <Facebook />
            Facebook
          </button>
        </div>
        <div className="divider divider-[#548]">OR</div>
        {/* //Form */}
        <form>
          <label htmlFor=""></label>
          <CustomInput
            type={"email" || "number"}
            placeholder="Email or Phone"
            customClassName="my-custom-style"
          />
          <div className="">
            <PasswordInput
              onChange={(e) => console.log(e)}
              placeholder="Type Your Password"
            />

            <div className="flex justify-end">
              <Link
                className="text-[16px] text-black text-opacity-50 "
                href="/forgetPassword"
              >
                Forget Password
              </Link>
            </div>
          </div>
          {/* //Submit Button */}
          <button
            type="submit"
            className="main-bg-color w-full my-7 rounded-lg text-white py-3"
          >
            Login
          </button>

          {/* //Remember Me */}
          <div className="flex items-center justify-center mb-5">
            <div className="flex items-center mr-4">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border rounded bg-gray-50 border-black border-opacity-20"
                required
              />
            </div>
            <label
              htmlFor="remember"
              className="[font-size:_clamp(16px,4vw,18px)] text-black opacity-50"
            >
              Remember me for 30 days
            </label>
          </div>
        </form>

        <p className="[font-size:_clamp(16px,4vw,18px)] text-black opacity-50 text-center">
          Don’t have your account?{" "}
          <Link className="main-text-color" href="/signup">
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
