import React from "react";

const Wishlist = () => {
  return (
    <div className="max-w-[1280px] mx-auto">
      <h2 className="text-black text-opacity-80 text-xl md:text-3xl mb-10">
        My Wishlist
      </h2>
      <div className="bg-[#F8F8F8] hidden md:block ">
        <h6>Product Name</h6>
        <h6>Price</h6>
        <h6>Stock Status</h6>
        <h6>Action</h6>
      </div>
    </div>
  );
};

export default Wishlist;
