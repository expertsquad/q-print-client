import React from "react";

const loading = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-row space-x-4">
        <div
          className="w-12 h-12 rounded-full animate-spin
         border-8 border-dashed border-fuchsia-500 border-t-transparent"
        ></div>
      </div>
    </div>
  );
};

export default loading;
