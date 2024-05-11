import { imageUrl } from "@/constants/imageUrl";
import Image from "next/image";

interface ShopCategoryProps {
  _id: number;
  picture: string;
  title: string;
}

interface ShopCategoryCardProps {
  category: ShopCategoryProps;
}


const ShopCategoryCard = ({ category }: any) => {

  return (
    <div className="relative bg-[#F2F4F5] rounded-xl shrink-0  md:px-10 px-5 py-2.5 w-52 md:w-96   cursor-pointer flex flex-col  items-center gap-2.5">
      <div className="md:w-[250px] md:h-[250px] w-[120px] h-[135px] flex items-center justify-center">
        <Image
          sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
          src={`${imageUrl}${category?.categoryPhoto}`}
          alt="category image"
          width={500}
          height={500}
        />
      </div>
      <h3 className=" absolute bottom-4 left-5 font-medium text-sm md:text-xl  ">
        {category?.categoryName}
      </h3>
    </div>
  );
};

export default ShopCategoryCard;
