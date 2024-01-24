import Image from "next/image";
import React from "react";

const PersonalInformation = () => {
  return (
    <section className=" w-full">
      <div className="lg:border rounded-lg lg:p-7 flex flex-col gap-8">
        <h1 className="text-black text-xl font-medium">Personal Information</h1>
        <div className="flex lg:flex-row flex-col-reverse items-center lg:justify-between gap-12">
          <form className="grid grid-cols-1 lg:grid-cols-2 lg:gap-7 gap-5 lg:w-9/12 w-full">
            <div className="w-full flex flex-col gap-2.5">
              <label
                htmlFor="first_name"
                className="text-base text-[#1a1a1ab3]"
              >
                First name
              </label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                className="border outline-none block w-full py-3.5 rounded-md px-4"
                value="John"
                required
              />
            </div>
            <div className="w-full flex flex-col gap-2.5">
              <label htmlFor="last_name" className="text-base text-[#1a1a1ab3]">
                Last name
              </label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                className="border outline-none block w-full py-3.5 rounded-md px-4"
                value="Smith"
                required
              />
            </div>
            <div className="w-full flex flex-col gap-2.5">
              <label
                htmlFor="user_email"
                className="text-base text-[#1a1a1ab3]"
              >
                Email
              </label>
              <input
                type="email"
                name="user_email"
                id="user_email"
                className="border outline-none block w-full py-3.5 rounded-md px-4 text-gray-300"
                value="dianne.russell@gmail.com"
                readOnly
              />
            </div>
            <div className="w-full flex flex-col gap-2.5">
              <label
                htmlFor="user_phone"
                className="text-base text-[#1a1a1ab3]"
              >
                Phone Number
              </label>
              <input
                type="number"
                name="user_phone"
                id="user_phone"
                className="border outline-none block w-full py-3.5 rounded-md px-4"
                value="08801835550123"
                required
              />
            </div>
          </form>
          <div className="max-w-xs mx-auto">
            <div className="relative group">
              <input type="file" id="profileImage" className="hidden" />
              <label
                htmlFor="profileImage"
                className="block w-40 h-40 group-hover:bg-gray-200 rounded-full overflow-hidden shadow-md text-center cursor-pointer transition duration-300 ease-in-out"
              >
                <Image
                  id="previewImage"
                  src="https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  width={50}
                  height={50}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-[50%] left-[50%] flex flex-col items-center gap-3.5 z-50 invisible group-hover:visible">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      d="M8.5625 7.6875L12.5 3.75L16.4375 7.6875"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.5 14.25V3.75"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20.75 14.25V19.5C20.75 19.6989 20.671 19.8897 20.5303 20.0303C20.3897 20.171 20.1989 20.25 20 20.25H5C4.80109 20.25 4.61032 20.171 4.46967 20.0303C4.32902 19.8897 4.25 19.6989 4.25 19.5V14.25"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <small className="text-white text-sm font-medium">
                    Upload Image
                  </small>
                </span>
              </label>
            </div>
          </div>
        </div>

        <h1 className="text-black text-xl font-medium">Shipping Information</h1>
        <div>
          <form className="grid grid-cols-1 lg:grid-cols-2 lg:gap-7 gap-5">
            <div className="w-full flex flex-col gap-2.5">
              <label htmlFor="country" className="text-base text-[#1a1a1ab3]">
                Country
              </label>
              <input
                type="text"
                name="country"
                id="country"
                className="border outline-none block w-full py-3.5 rounded-md px-4"
                value="Bangladesh"
                required
              />
            </div>
            <div className="w-full flex flex-col gap-2.5">
              <label htmlFor="state" className="text-base text-[#1a1a1ab3]">
                State
              </label>
              <input
                type="text"
                name="state"
                id="state"
                className="border outline-none block w-full py-3.5 rounded-md px-4"
                value="Smith"
                required
              />
            </div>
            <div className="w-full flex flex-col gap-2.5">
              <label htmlFor="zip_code" className="text-base text-[#1a1a1ab3]">
                Zip Code
              </label>
              <input
                type="number"
                name="zip_code"
                id="zip_code"
                className="border outline-none block w-full py-3.5 rounded-md px-4"
                value="45896"
                required
              />
            </div>
            <div className="w-full flex flex-col gap-2.5">
              <label
                htmlFor="company_name"
                className="text-base text-[#1a1a1ab3]"
              >
                Company Name ( Optional )
              </label>
              <input
                type="text"
                name="company_name"
                id="company_name"
                className="border outline-none block w-full py-3.5 rounded-md px-4"
                value="Sopne"
                required
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PersonalInformation;
