const ProductSpecification = ({ productSpecification }: any) => {
  console.log(productSpecification, "productSpecification");
  return (
    <div className="">
      <div className="border rounded-lg w-full">
        {productSpecification?.map((specification: any) => (
          <div key={specification._id}>
            <h2 className="main-text-color [font-size:_clamp(16px,4vw,20px)] py-2 pl-4 border-b-[1px]">
              {specification.sectionName}
            </h2>
            <div className="">
              {specification?.blocks?.map((block: any) => (
                <div
                  key={block._id}
                  className="flex justify-between w-full items-center border-b"
                >
                  <p className="bg-[#F8F8F8] py-2 pl-4 [font-size:_clamp(12px,5vw,14px)] w-36 md:w-60 h-10 md:h-16 flex items-center justify-start">
                    {block?.title}
                  </p>{" "}
                  <p className="w-full [font-size:_clamp(13px,5vw,15px)] text-wrap pl-5">
                    {block?.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSpecification;
