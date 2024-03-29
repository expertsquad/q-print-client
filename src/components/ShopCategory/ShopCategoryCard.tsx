import Image from "next/image";

interface ShopCategoryProps {
  _id: number;
  picture: string;
  title: string;
}

interface ShopCategoryCardProps {
  category: ShopCategoryProps;
}

const ShopCategoryCard = ({ category }: ShopCategoryCardProps) => {
  const { _id, picture, title } = category;
  return (
    <div className="relative bg-[#F2F4F5] rounded-xl  shrink-0 overflow-scroll no-scrollbar p-10 w-60 md:w-64 lg:w-96">
      <div className="grid place-content-end">
        <Image src={picture} width={280} height={280} alt={title} />
      </div>
      <h3 className="absolute font-medium text-xl bottom-7 left-11">{title}</h3>
    </div>
  );
};

export default ShopCategoryCard;
