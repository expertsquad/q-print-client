import GradientEditIcon from "@/assets/svgIcons/GradientEditIcon";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const EditButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className=" w-full  py-3 px-7  rounded-lg  bg-gradient-to-r from-[#C83B62] to-[#7F35CD] text-transparent bg-clip-text hover:scale-105 hover:duration-500 flex items-center justify-center gap-2"
    >
      <GradientEditIcon /> Edit
    </button>
  );
};

export default EditButton;
