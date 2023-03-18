import React, { useRef } from "react";
const LayoutCreator = ({ handlefocus }: LayoutProps) => {
  const ref = useRef(null);
  
  return (
    <div
      ref={ref}
      onClick={handlefocus(ref, 'Layout Creator')}
      className="w-full h-[200px] bg-gray-100 flex justify-center items-center"
    ></div>
  );
};

export default LayoutCreator;

interface LayoutProps {
  handlefocus: any;
}
