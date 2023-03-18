import React, { useRef } from "react";
const LayoutCreator = ({ handlefocus, id, ...rest }: LayoutProps) => {
  const ref = useRef(null);

  return (
    <div
      ref={ref}
      id={id}
      onClick={handlefocus(ref, "Layout Creator")}
      className="w-full h-[200px] bg-gray-100 flex justify-center items-center"
      {...rest}
    ></div>
  );
};

export default LayoutCreator;

interface LayoutProps {
  handlefocus: any;
  id: string;
  [key: string]: any;
}
