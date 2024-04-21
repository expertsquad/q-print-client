import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const ContinueShopping = ({ products }: any) => {
  return (
    <div>
      <div
        className={`hidden md:flex my-12 ${
          !products.length ? "flex items-center justify-center mx-auto" : ""
        }`}
      >
        <Link
          href="/products"
          className="items-center p-2 border border-black border-opacity-15 rounded-lg inline-flex gap-1"
        >
          <span>
            <IconArrowLeft />
          </span>
          <span>Continue Shopping</span>
        </Link>
      </div>
    </div>
  );
};

export default ContinueShopping;
