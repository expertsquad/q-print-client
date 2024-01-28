import Image from "next/image";
import lockImageOne from "@/assets/lockImageOne.svg";
import lockImageTwo from "@/assets/lockImageTwo.svg";
import CustomInput from "@/components/shared/CustomInput";

const ForgetPassword = () => (
  <div className="h-screen flex items-center justify-center mx-3">
    <div className="md:max-w-[600px] bg-white shadow-modalShadow md:px-11 pb-7 rounded-2xl px-10 py-14">
      <div className="flex items-center justify-center">
        <Image
          src={lockImageOne}
          alt="verifyEmailLogo"
          className="hidden md:block"
        />
        <Image
          src={lockImageTwo}
          alt="verifyEmailLogo"
          className="block md:hidden"
        />
      </div>
      <h3 className="text-black text-center font-bold text-xl md:text-2xl my-4">
        Forgot Password
      </h3>
      <p className="text-center text-black text-opacity-50 text-[16px] mb-8">
        Set the password for your account so you can access all the features.
      </p>

      <form action="">
        <label htmlFor="email" className="text-black text-opacity-70">
          E-mail
        </label>

        <CustomInput placeholder="Enter Your Email" customClassName="mt-2" />

        <button
          type="submit"
          className="w-full main-bg-color text-white font-medium py-3 rounded-lg my-10"
        >
          Continue
        </button>
      </form>
    </div>
  </div>
);

export default ForgetPassword;
