"use client";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  firstName: string;
  lastName: string;
  age: number;
}

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="md:max-w-[600px] bg-white shadow-modalShadow px-11 pb-7 rounded-2xl">
        {/* //Logo */}
        <div className="flex justify-center items-center mb-5 mt-12 md:mt-20">
          <Image src={logo} alt="Logo" />
        </div>
        <p className="[font-size:_clamp(16px,2vw,18px)] text-black opacity-50 text-center">
          Best online e-commerce website for you
        </p>
        <div className="divider divider-[#548]">OR</div>
        {/* //Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor=""></label>
          <input
            placeholder="Email or Phone"
            className="border border-black border-opacity-10 py-4 w-full rounded-xl placeholder:pl-5 text-black opacity-50 outline-none"
            {...register("mail", {
              required: "Email Address or Phone Number is required",
            })}
            aria-invalid={errors.mail ? "true" : "false"}
          />
          <input
            type="password"
            placeholder="Type your password"
            className="mt-7 border border-black border-opacity-10 py-4 w-full rounded-xl placeholder:pl-5 text-black opacity-50 outline-none"
            {...register("password", {
              required: true,
              minLength: 6,
            })}
          />
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
