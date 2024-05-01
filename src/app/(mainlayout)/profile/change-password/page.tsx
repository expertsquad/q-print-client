"use client";
import Image from "next/image";
import resetPasswordImg from "@/assets/images/resetPasswordImg.png";
import PasswordInput from "@/components/shared/PasswordInput";
import { useChangePasswordMutation } from "@/redux/features/user/user";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  clearInput,
  setConfirmPassword,
  setNewPassword,
  setOldPassword,
} from "@/redux/features/user/changePassword";
import { useState } from "react";
import { toast } from "react-toastify";
import Spinner from "@/components/shared/Spinner";




const ChangePassword = () => {
  const [changePassword] = useChangePasswordMutation();
  const dispatch = useAppDispatch();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { oldPassword, newPassword, confirmPassword } = useAppSelector(
    (state) => state.changePasswordSlice
  );

  const handleResetField = () => {
    dispatch(setOldPassword(""));
    dispatch(setNewPassword(""));
    dispatch(setConfirmPassword(""));
  };

  const handlePasswordChange = async (event: any) => {
    event.preventDefault();
    setLoading(true);

    try {
      const res = await changePassword({
        oldPassword,
        newPassword,
        confirmPassword,
      }).unwrap();
      toast.success(res?.message);
      clearInput();

    } catch (err: any) {
      setError(err.message);
      toast.error(err?.message)
    } finally {
      setLoading(false);
    }
  };


  return (
    <div>
      <section className="w-full mb-7 relative">
        {
          loading &&
            <Spinner />
        }
        <div className="lg:border rounded-lg lg:p-7 flex justify-between items-center gap-28">
          <div className="lg:w-6/12 w-full">
            <h1 className="text-black text-[22px] font-semibold">
              Reset Your Password
            </h1>
            <form
              onSubmit={handlePasswordChange}
              action=""
              className="form-control lg:gap-5 gap-4 lg:mt-12 mt-7"
            >
              <div className="flex flex-col ">
                <label
                  htmlFor="old-password"
                  className="text-base text-small-gray-text-color"
                >
                  Current Password
                </label>
                <PasswordInput
                  name="oldPassword"
                  placeholder=""
                  onChange={(e) => dispatch(setOldPassword(e.target.value))}
                />
                {error && <span className="text-red-500 text-xs">{error}</span>}
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="new-password"
                  className="text-base text-small-gray-text-color"
                >
                  New Password
                </label>
                <PasswordInput
                  name="newPassword"
                  placeholder=""
                  onChange={(e) => dispatch(setNewPassword(e.target.value))}
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="re-enter-new-password"
                  className="text-base text-small-gray-text-color"
                >
                  Re-enter new password
                </label>
                <PasswordInput
                  name="confirmPassword"
                  placeholder=""
                  onChange={(e) => dispatch(setConfirmPassword(e.target.value))}
                />
              </div>
              <div className="flex lg:gap-12 gap-10 items-center">
                <button
                  type="submit"
                  className="text-white uppercase bg-gradient-to-r from-[#C83B62] to-[#7F35CD]  
 px-5 py-3.5  lg:w-48 w-full  rounded-3xl"
                >
                  Update Password
                </button>
                <button
                  type="submit"
                  onClick={handleResetField}
                  className="lg:text-lg text-base font-normal lg:font-medium text-text-Gray-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
          <div className="w-6/12 lg:block hidden">
            <Image src={resetPasswordImg} alt="resetPasswordImg" />
          </div>
        </div>
      </section >
    </div >
  );
};

export default ChangePassword;
