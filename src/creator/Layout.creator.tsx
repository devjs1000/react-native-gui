import React, { useRef } from "react";
const LayoutCreator = ({ handlefocus, id, children, ...rest }: LayoutProps) => {
  const ref = useRef(null);
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const { target, currentTarget } = e;
    e.bubbles = false;
    if (target == currentTarget) {
      const callback = handlefocus(ref, "Layout Creator");
      callback();
    }
  };
  return (
    <div
      ref={ref}
      id={id}
      onClick={handleClick}
      className=" m-2   border-gray-400  text-gray-400  border-dashed border-[2px] bg-gray-200 flex justify-center items-center p-[40px] rounded-[10px]"
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
