import UploadIcon from "@/assets/svgIcons/UploadIcon";
import { imageUrl } from "@/constants/imageUrl";
import Image from "next/image";
import CustomInput from "../shared/CustomInput";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  setFullName,
  setPhoneNumber,
  setProfileLocalPhoto,
  setProfilePhoto,
} from "@/redux/features/user/profileEditSlice";

const PersonalInformation = ({ personalInformation }: any) => {
  const dispatch = useAppDispatch();
  const { fullName, profilePhoto, phoneNumber, profileLocalPhoto } =
    useAppSelector((state) => state.profileEdit);

  // Update component state when Redux state changes
  useEffect(() => {
    dispatch(setFullName(personalInformation?.fullName));
    dispatch(setPhoneNumber(personalInformation?.phoneNumber));
    dispatch(setProfilePhoto(personalInformation?.profilePhoto));
  }, [personalInformation, dispatch]);

  // <== Image upload fn ==>
  const handleImageUpload = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      dispatch(setProfilePhoto(file));

      const reader = URL.createObjectURL(file);
      dispatch(setProfileLocalPhoto(reader));
    }
  };

  return (
    <section className=" w-full">
      <h1 className="text-black text-xl mb-5 md:mb-8 lg:mb-8  ">
        Personal Information
      </h1>
      <div className="flex lg:flex-row flex-col-reverse items-center lg:justify-between gap-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-7 gap-5 lg:w-9/12 w-full">
          <CustomInput
            label="Full Name"
            type="text"
            name="fullName"
            value={fullName}
            placeholder=""
            onChange={(e) => dispatch(setFullName(e.target.value))}
          />

          <CustomInput
            type="email"
            label="Email"
            value={personalInformation?.email}
            name="email"
            placeholder=""
            readonly
          />

          <CustomInput
            label="Phone Number"
            type="number"
            name="phoneNumber"
            placeholder=""
            value={phoneNumber}
            inputStyle="text-black"
            onChange={(e) => dispatch(setPhoneNumber(e.target.value))}
          />
        </div>
        <div className="max-w-xs mx-auto ">
          <div className="group relative ">
            <input
              type="file"
              id="profileImage"
              className="hidden"
              onChange={handleImageUpload}
            />
            <label
              htmlFor="profileImage"
              className="block w-40 h-40 group-hover:bg-gray-200 rounded-full overflow-hidden text-center cursor-pointer transition duration-300 ease-in-out relative shadow-[0px_4px_24px_0px_rgba(127,_53,_205,_0.15)]"
            >
              <div className="">
                <Image
                  src={`${
                    profileLocalPhoto
                      ? profileLocalPhoto
                      : imageUrl + profilePhoto
                  }  `}
                  alt=""
                  width={50}
                  height={50}
                  className="w-full h-full object-cover relative"
                />
              </div>

              <span
                className={`absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-3.5 z-50 bg-black bg-opacity-20 ${
                  profilePhoto ? "hidden" : "block"
                }`}
              >
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
