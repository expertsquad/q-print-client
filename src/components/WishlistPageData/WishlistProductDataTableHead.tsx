import React from "react";

const WishlistProductDataTableHead = () => {
  return (
    <div className="bg-[#F8F8F8] py-3 pl-5 hidden justify-between  md:wishlist-data">
      <h6>Product Name</h6>
      <h6 className="flex items-center justify-center">Price</h6>
      <h6>Stock Status</h6>
      <h6 className="flex items-center justify-center">Action</h6>
    </div>
  );
};

export default WishlistProductDataTableHead;
