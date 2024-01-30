// import GradientUploadIcon from "@/assets/svgIcons/gradientUploadIcon";

import GradientUploadIcon from "@/assets/svgIcons/gradientUploadIcon";

const PrintingTypeAndMode = () => {
  const paper = {
    typeOfPaper: [
      "Inkjet printer paper",
      "Laser Printer paper",
      "Matte paper",
      "Glossy paper",
      "Card stock paper",
      "Bond & Label paper",
    ],
  };

  return (
    <div className=" border rounded-lg p-7 my-5 ">
      {/* type of paper */}
      <div
        className="border-b pb-7    *:
      
      "
      >
        <h4 className="text-lg mb-5">What type of paper do you need?</h4>
        <div className="flex flex-wrap gap-5 ">
          {paper?.typeOfPaper?.map((typeOfPaper, i) => (
            <li
              key={i}
              className="list-none py-3 px-5 border whitespace-nowrap rounded-lg text-gray-500 cursor-pointer hover:bg-gradient-to-r from-[#C83B62] to-[#7F35CD] hover:text-white hover:border-fuchsia-700 "
            >
              {typeOfPaper}
            </li>
          ))}
        </div>
      </div>

      {/* printing mode */}
      <div className="border-b pb-7 mt-7 ">
        <h4 className="text-lg mb-5">Printing Mode</h4>
        <div className="flex flex-wrap gap-5 ">
          {paper?.typeOfPaper?.map((typeOfPaper, i) => (
            <li
              key={i}
              className="list-none py-3 px-5 border whitespace-nowrap rounded-lg text-gray-500 cursor-pointer hover:bg-gradient-to-r from-[#C83B62] to-[#7F35CD] hover:text-white hover:border-fuchsia-700 "
            >
              {typeOfPaper}
            </li>
          ))}
        </div>
      </div>

      {/* Attachment */}

      <div className="pb-7 mt-7 ">
        <h4 className="text-lg mb-5">Attachment</h4>

        <label
          htmlFor="profileFileInput"
          className="border py-3 px-10 flex items-center justify-center gap-4 rounded-lg bg-gradient-to-r from-[#C83B62] to-[#7F35CD] text-transparent bg-clip-text  hover:border-fuchsia-700 hover:scale-105 hover:duration-500 cursor-pointer  "
        >
          <input id="profileFileInput" className="hidden" type="file" />{" "}
          <GradientUploadIcon />
          file upload
        </label>
      </div>
    </div>
  );
};

export default PrintingTypeAndMode;
