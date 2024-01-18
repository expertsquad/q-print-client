import React from "react";

const ColorPickUp = () => {
  return (
    <form className="flex gap-2">
      <input
        type="button"
        id="email"
        className="bg-[#AA0213] border border-gray-300 text-red-400 focus:ring-[#000] focus:border-[#000] w-6 h-6 rounded-full focus:border-5 cursor-pointer"
      />
      <input
        type="button"
        id="email"
        className="bg-[#264DD7] border border-gray-300 text-red-400 focus:ring-[#000] focus:border-[#000] w-6 h-6 rounded-full focus:border-5 cursor-pointer"
      />
      <input
        type="button"
        id="email"
        className="bg-[#3E3E3E] border border-gray-300 text-red-400 focus:ring-[#000] focus:border-[#000] w-6 h-6 rounded-full focus:border-5 cursor-pointer"
      />
      <input
        type="button"
        id="email"
        className="bg-[#4DE4C9] border border-gray-300 text-red-400 focus:ring-[#000] focus:border-[#000] w-6 h-6 rounded-full focus:border-5 cursor-pointer"
      />
    </form>
  );
};

export default ColorPickUp;
