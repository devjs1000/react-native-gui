import React from "react";
const LayoutCreator = (props: any) => {
  return (
    <div
      {...props}
      className="w-full h-[200px] bg-gray-400 flex justify-center items-center"
    >
      <button className="font-bold text-2xl" >+</button>
    </div>
  );
};

export default LayoutCreator;
