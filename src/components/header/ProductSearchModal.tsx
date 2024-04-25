"use client";
import { useProductsBySearchQuery } from "@/redux/features/products/productsApi";
import Image from "next/image";
import { imageUrl } from "@/constants/imageUrl";
import { IProduct } from "@/types/productsType";
import { useRouter } from "next/navigation";
import emptydata from "@/assets/empty-data.png";
import ModalCloseBtn from "../shared/ModalCloseBtn";

const ProductSearchModal = ({ data, setSearchValue }: any) => {
  const router = useRouter();

  const { data: products, isLoading } = useProductsBySearchQuery(`${data}`);

  // const defaultVariants = products?.data.map((product: any) =>
  //   product.variants.find((variant: any) => variant?.isDefault)
  // );

  const handleCloseModal = () => {
    setSearchValue("");
  };
  // <== Product View Function ==>
  const handleViewProduct = (e: any) => {
    router.push(`/product/${e?._id}`);
    handleCloseModal();
  };

  return (
    <div className="absolute top-[60px] md:top-[70px] bg-white md:w-[600px] lg:w-[680px] w-full h-[250px] md:h-[400px] z-50 backdrop-blur-lg shadow-xl rounded-lg p-3 md:p-5 overflow-y-scroll no-scrollbar drop-shadow-lg">
      <span className="absolute top-2 right-2 cursor-pointer">
        <ModalCloseBtn handleClose={handleCloseModal} />
      </span>
      {isLoading ? (
        <div className="flex items-center justify-center h-full">
          <span className="loading loading-dots loading-lg text-secondary"></span>
        </div>
      ) : products?.data?.length > 0 ? (
        products?.data?.map((product: IProduct) => (
          <div
            key={product?._id}
            onClick={() => handleViewProduct(product)}
            className="flex items-center mb-5 cursor-pointer"
          >
            <div className="w-[60px] h-[60px] relative mr-2.5 md:mr-5 shrink-0">
              <Image
                src={`${imageUrl}${product?.productPhotos[0]}`}
                fill
                objectFit="cover"
                alt="Product Photo"
                className="w-full h-full top-0 left-0 object-cover p-1.5 border rounded-md"
              />
            </div>
            <div className="flex items-center justify-between w-full">
              <div>
                <span className="line-clamp-1">{product?.productName}</span>
                <div className="flex items-center gap-3">
                  <span>{product?.brand?.brandName}</span>
                  <span className="block md:hidden main-text-color">
                    {product?.variants[0]?.sellingPrice}
                    <small className="ml-1">QAR</small>
                  </span>
                </div>
              </div>
              <div className="hidden md:block">
                {product?.variants[0]?.sellingPrice && (
                  <span className="font-bold main-text-color">
                    {product?.variants[0]?.sellingPrice} <small>QAR</small>
                  </span>
                )}
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <Image src={emptydata} alt="Empty data" width={200} height={200} />
          <span>No Products Found!!</span>
        </div>
      )}
    </div>
  );
};

export default ProductSearchModal;
