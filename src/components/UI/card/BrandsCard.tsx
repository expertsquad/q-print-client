"use client";
import Image from "next/image";
import { useGetBrandsQuery } from "@/redux/features/brand/brandsApi";
import { imageUrl } from "@/constants/imageUrl";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/hook";
import { setBrandName } from "@/redux/features/brand/brandNameSlice";

const BrandsCard = () => {
  const { data } = useGetBrandsQuery("");
  const dispatch = useDispatch();
  const { brandName } = useAppSelector((state) => state.productByBrandName);

  //<== Take the first 10 items from data ==>
  // const firstTenData = data?.data?.slice(0, 6);

  return (
    <div className="px-5 py-8 rounded-xl shadow-md mt-5">
      <h1 className="text-[#00000066] font-semibold text-base">BRANDS</h1>
      <hr className="my-5" />
      <div className="flex flex-col gap-4">
        {data?.data?.map((brand: any, i: number) => (
          <span key={i} className="flex gap-4 justify-start items-center">
            <div className="w-[40px] h-[28px] shrink-0 relative ">
              <Image
                src={`${imageUrl}${brand?.brandPhoto}`}
                alt="Brand Photo"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill
                className="w-full h-full top-0 left-0 object-contain aspect-auto"
              />
            </div>
            <small
              onClick={() => dispatch(setBrandName(brand.brandName))}
              className="text-base hover:text-[#000] cursor-pointer text-[#00000099]"
            >
              {brand?.brandName}
            </small>
          </span>
        ))}
      </div>
    </div>
  );
};

export default BrandsCard;
