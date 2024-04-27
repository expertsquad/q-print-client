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
    <div className="relative bg-[#F2F4F5] rounded-xl shrink-0 overflow-scroll no-scrollbar p-10 w-52 md:w-64 lg:w-96 group/item transition-all duration-500 cursor-pointer">
      <div className="relative w-[120px] h-[120px] md:w-[250px] md:h-[250px] mx-auto">
        <Image
          src={`${imageUrl}${category?.categoryPhoto}`}
          layout="fill"
          alt={category?.categoryName}
          sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain w-full h-full top-0 left-0"
        />
      </div>
      <h3 className="absolute font-medium text-sm md:text-xl bottom-2 left-6 md:left-11  md:group-hover/item:duration-500 transition-all whitespace-nowrap">
        {category?.categoryName}
      </h3>
    </div>
  );
};

export default ShopCategoryCard;
