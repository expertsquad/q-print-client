import Image from "next/image";
import logo from "@/assets/logo.svg";
import Link from "next/link";
import Facebook from "@/assets/FooterSVG/Facebook";
import { IconEye, IconEyeOff } from "@tabler/icons-react";

const Login = () => {
  return (
    <div className="h-screen flex items-center justify-center mx-3">
      <div className="md:max-w-[600px] bg-white shadow-modalShadow px-5 md:px-11 pb-7 rounded-2xl">
        {/* //Logo */}
        <div className="flex justify-center items-center mb-5 mt-12 md:mt-20">
          <Image src={logo} alt="Logo" />
        </div>
        <p className="[font-size:_clamp(16px,2vw,18px)] text-black opacity-50 text-center">
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
          <input
            placeholder="Email or Phone"
            className="border border-black border-opacity-10 py-4 w-full rounded-xl placeholder:pl-5 text-black opacity-50 outline-none"
          />
          <div>
            <input
              type="password"
              placeholder="Type your password"
              className="mt-7 border border-black border-opacity-10 py-4 w-full rounded-xl placeholder:pl-5 text-black opacity-50 outline-none"
            />
            <span>
              <IconEye />
              <IconEyeOff />
            </span>
            <div className="flex justify-end mt-1">
              <Link
                className="text-[16px] text-black text-opacity-50 "
                href="/forgetpassword"
              >
                Forget Password
              </Link>
              I I
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
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
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
