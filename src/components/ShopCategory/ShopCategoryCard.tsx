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
    <div className="relative bg-[#F2F4F5] rounded-xl  shrink-0 overflow-scroll no-scrollbar p-10 w-52 md:w-64 lg:w-96 group/item transition-all duration-500 cursor-pointer">
      <div className="grid place-content-center">
        <Image
          src={`${imageUrl}${category?.categoryPhoto}`}
          width={280}
          height={280}
          alt={category?.categoryName}
          className="object-contain"
        />
      </div>
      <h3 className="absolute font-medium text-xl bottom-5 left-11 md:invisible md:group-hover/item:visible md:group-hover/item:duration-500 transition-all">
        {category?.categoryName}
      </h3>
    </div>
  );
};

export default ShopCategoryCard;
