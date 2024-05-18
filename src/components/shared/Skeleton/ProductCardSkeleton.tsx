const ProductCardSkeleton = () => {
  return (
    <div className="animate-pulse rounded-custom-10px bg-gray-200 p-4 group w-[calc(300px, 32vw, 184px)] min-h-[400px] cursor-pointer relative ">
      <div className=" mx-auto relative overflow-hidden rounded-md">
        {/* <div className="flex flex-col gap-2 absolute left-2 top-5">
                    <div className="bg-gray-300 rounded-full md:w-10 md:h-10 w-5 h-5"></div>
                    <div className="bg-gray-300 rounded-full md:w-10 md:h-10 w-5 h-5"></div>
                </div> */}
        <div className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="150"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-photo text-gray-300"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 8h.01" />
            <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z" />
            <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />
            <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" />
          </svg>
        </div>
      </div>

      <div className="flex flex-col gap-2.5 mt-10">
        <div className="bg-gray-300 skeleton  h-2 w-full rounded-full"></div>
        <div className="bg-gray-300 skeleton  h-2 w-full rounded-full"></div>
        <div className="bg-gray-300 skeleton  h-2 w-3/4 rounded-full"></div>
        <div className="bg-gray-300 skeleton  h-2 w-1/2 rounded-full"></div>
        <div className="bg-gray-300 skeleton  h-2 w-1/2 rounded-full"></div>
        <div className="bg-gray-300 skeleton  h-2 w-1/2 rounded-full"></div>
      </div>

      <div className="bg-gray-300 h-10 w-[90%] rounded-md absolute bottom-5 skeleton"></div>
    </div>
  );
};

export default ProductCardSkeleton;
