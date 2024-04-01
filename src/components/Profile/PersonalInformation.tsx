import UploadIcon from "@/assets/svgIcons/UploadIcon";
import { imageUrl } from "@/constants/imageUrl";
import Image from "next/image";
import CustomInput from "../shared/CustomInput";

interface PersonalInformationProps {
  _id: string;
  uid: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  role: string;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}

const PersonalInformation = ({ personalInformation }: any) => {
  let firstName = "";
  let lastName = "";

  if (personalInformation && personalInformation.fullName) {
    const nameParts = personalInformation.fullName.split(" ");
    firstName = nameParts[0];
    lastName = nameParts.slice(1).join(" ");
  }
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

            <CustomInput
              type="text"
              name="firstName"
              value={firstName}
              placeholder=""
            />
          </div>
          <div className="w-full flex flex-col gap-2.5">
            <label htmlFor="last_name" className="text-base text-[#1a1a1ab3]">
              Last name
            </label>

            <CustomInput
              type="text"
              name="lastName"
              value={lastName}
              placeholder=""
            />
          </div>
          <div className="w-full flex flex-col gap-2.5">
            <label htmlFor="user_email" className="text-base text-[#1a1a1ab3]">
              Email
            </label>
            <CustomInput
              type="email"
              value={personalInformation?.email}
              name="email"
              placeholder=""
              readonly
            />
          </div>
          <div className="w-full flex flex-col gap-2.5">
            <label htmlFor="user_phone" className="text-base text-[#1a1a1ab3]">
              Phone Number
            </label>
            <CustomInput
              type="number"
              name="phoneNumber"
              placeholder=""
              value={personalInformation?.phoneNumber}
              inputStyle="text-black"
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
                src={`${imageUrl}${personalInformation?.profilePhoto}`}
                alt="User Profile"
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
