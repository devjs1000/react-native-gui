import React, { useRef } from "react";
const LayoutCreator = ({ handlefocus, id, children, ...rest }: LayoutProps) => {
  const ref = useRef(null);

  return (
    <div
      ref={ref}
      id={id}
      onClick={handlefocus(ref, "Layout Creator")}
      className="w-full h-[200px] bg-black flex justify-center items-center p-[10px]"
      {...rest}
    >
      {children}
    </div>
  );
};

export default LayoutCreator;

interface LayoutProps {
  handlefocus: any;
  id: string;
  children: any;
  [key: string]: any;
}
