import UploadIcon from "@/assets/svgIcons/UploadIcon";
import Image from "next/image";

const PersonalInformation = () => {
  return (
    <section className=" w-full">
      <h1 className="text-black text-xl mb-5 md:mb-8 lg:mb-8  ">
        Personal Information
      </h1>
      <div className="flex lg:flex-row flex-col-reverse items-center lg:justify-between gap-12">
        <form className="grid grid-cols-1 lg:grid-cols-2 lg:gap-7 gap-5 lg:w-9/12 w-full">
          <div className="w-full flex flex-col gap-2.5">
            <label htmlFor="first_name" className="text-base text-[#1a1a1ab3]">
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
            <label htmlFor="user_email" className="text-base text-[#1a1a1ab3]">
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
            <label htmlFor="user_phone" className="text-base text-[#1a1a1ab3]">
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
          <div className="group relative">
            <input type="file" id="profileImage" className="hidden" />
            <label
              htmlFor="profileImage"
              className="block w-40 h-40 group-hover:bg-gray-200 rounded-full overflow-hidden shadow-md text-center cursor-pointer transition duration-300 ease-in-out relative"
            >
              <Image
                src="https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                width={50}
                height={50}
                className="w-full h-full object-cover relative"
              />

              <span className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-3.5 z-50 bg-black bg-opacity-20">
                <UploadIcon />
                <small className="text-white text-sm font-medium">
                  Upload Image
                </small>
              </span>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalInformation;
