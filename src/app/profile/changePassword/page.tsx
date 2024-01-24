import Image from "next/image";
import resetPasswordImg from "@/assets/images/resetPasswordImg.png";
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
              <div className="flex flex-col gap-2.5">
                <label
                  htmlFor="old-password"
                  className="text-lg text-small-gray-text-color"
                >
                  Current Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="old-password"
                    name="old-password"
                    className="w-full border outline-none px-5 py-3 rounded-md"
                  />
                  <span
                    id="togglePassword"
                    className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                  >
                    <i id="eyeOff1" className="ti ti-eye-off"></i>
                    <i id="eyeOn1" className="ti ti-eye hidden"></i>
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2.5">
                <label
                  htmlFor="new-password"
                  className="text-lg text-small-gray-text-color"
                >
                  New Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="new-password"
                    name="new-passwords"
                    className="w-full border outline-none px-5 py-3 rounded-md"
                  />
                  <span
                    id="newTogglePassword"
                    className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                  >
                    <i id="eyeOff2" className="ti ti-eye-off"></i>
                    <i id="eyeOn2" className="ti ti-eye hidden"></i>
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2.5">
                <label
                  htmlFor="re-enter-new-password"
                  className="text-lg text-small-gray-text-color"
                >
                  Re-enter new password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="re-enter-new-password"
                    name="re-enter-new-password"
                    className="w-full border outline-none px-5 py-3 rounded-md"
                  />
                  <span
                    id="renewTogglePassword"
                    className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                  >
                    <i id="eyeOff3" className="ti ti-eye-off"></i>
                    <i id="eyeOn3" className="ti ti-eye hidden"></i>
                  </span>
                </div>
              </div>
              <div className="flex lg:gap-12 gap-10 items-center">
                <button
                  className="   text-white uppercase bg-gradient-to-r from-[#C83B62] to-[#7F35CD]  
 px-5 py-3.5  lg:w-48 w-full hover:scale-105 hover:duration-500 rounded-3xl"
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
