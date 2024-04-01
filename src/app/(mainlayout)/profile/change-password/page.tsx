"use client";
import Image from "next/image";
import resetPasswordImg from "@/assets/images/resetPasswordImg.png";
import PasswordInput from "@/components/shared/PasswordInput";
const ChangePassword = () => {
  return (
    <div>
      <section className="w-full mb-7">
        <div className="lg:border rounded-lg lg:p-7 flex justify-between items-center gap-28">
          <div className="lg:w-6/12 w-full">
            <h1 className="text-black text-[22px] font-semibold">
              Reset Your Password
            </h1>
            <form
              action=""
              className="form-control lg:gap-5 gap-4 lg:mt-12 mt-7"
            >
              <div className="flex flex-col ">
                <label
                  htmlFor="old-password"
                  className="text-lg text-small-gray-text-color"
                >
                  Current Password
                </label>
                <PasswordInput name="password" placeholder="" />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="new-password"
                  className="text-lg text-small-gray-text-color"
                >
                  New Password
                </label>
                <PasswordInput name="password" placeholder="" />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="re-enter-new-password"
                  className="text-lg text-small-gray-text-color"
                >
                  Re-enter new password
                </label>
                <PasswordInput name="password" placeholder="" />
              </div>
              <div className="flex lg:gap-12 gap-10 items-center">
                <button
                  type="submit"
                  className="text-white uppercase bg-gradient-to-r from-[#C83B62] to-[#7F35CD]  
 px-5 py-3.5  lg:w-48 w-full  rounded-3xl"
                >
                  Update Password
                </button>
                <button className="lg:text-lg text-base font-normal lg:font-medium text-text-Gray-colors">
                  Cancel
                </button>
              </div>
            </form>
          </div>
          <div className="w-6/12 lg:block hidden">
            <Image src={resetPasswordImg} alt="resetPasswordImg" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChangePassword;
