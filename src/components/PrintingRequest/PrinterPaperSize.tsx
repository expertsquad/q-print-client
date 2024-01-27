const PrinterPaperSize = () => {
  return (
    <div className=" border rounded-lg p-7 ">
      {/* Printing Paper size (Feet) */}
      <div>
        <h4 className="text-lg mb-3">Printing Paper size (Feet)</h4>
        <div className="mb-7 flex flex-wrap gap-6 ">
          <div className=" hover:shadow-[0px_4px_24px_0px_rgba(127,_53,_205,_0.15)] h-24 w-24 border hover:border-fuchsia-700 flex items-center justify-center rounded-lg cursor-pointer ">
            14 X 14
          </div>
          <div className=" hover:shadow-[0px_4px_24px_0px_rgba(127,_53,_205,_0.15)] printerCardShadow h-24 w-24 border hover:border-fuchsia-700 flex items-center justify-center rounded-lg cursor-pointer ">
            8 X 14
          </div>
          <div className="hover:shadow-[0px_4px_24px_0px_rgba(127,_53,_205,_0.15)] h-24 w-24 border hover:border-fuchsia-700 flex items-center justify-center rounded-lg cursor-pointer ">
            24 X 14
          </div>
        </div>
      </div>
      {/* Custom Order */}
      <div>
        <h4 className="text-lg mb-3">Custom Order</h4>
        <div>custom w and h coming</div>
      </div>
    </div>
  );
};

export default PrinterPaperSize;
