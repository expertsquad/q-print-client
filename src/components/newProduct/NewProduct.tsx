import React from "react";
import NewProductDisountCard from "../UI/card/NewProductDisountCard";
import Link from "next/link";

const NewProduct = () => {
  return (
    <section className="flex justify-between  gap-4 my-5 md:flex-row flex-col-reverse    ">
      <div className="  w-6/2 ">
        <NewProductDisountCard />
      </div>
      <div className="w-full">
        <div className="flex justify-between items-center  w-full">
          <h3 className="  [font-size:_clamp(1em,5vw,1.6em)] font-bold">
            New Product
          </h3>
          <div>
            <Link
              className="flex  justify-end gap-2 main-text-color py-2 "
              href="#"
            >
              {" "}
              See all &rarr;
            </Link>
          </div>
        </div>
        <div>Product is comming soon</div>
      </div>
    </section>
  );
};

export default NewProduct;
