import React, { useRef } from "react";
const LayoutCreator = ({ handlefocus, id, children, ...rest }: LayoutProps) => {
  const ref = useRef(null);
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {  
    const {target, currentTarget} = e;
    e.bubbles = false;
    if(target == currentTarget) {
      // console.log(target, currentTarget);
      const callback=handlefocus(ref, "Layout Creator");
      callback();
      console.log('setting new focus')
      // console.log(ref.current)
    }
  };
  return (
    <div
      ref={ref}
      id={id}
      onClick={handleClick}
      className="w-full h-[200px] bg-black flex justify-center items-center p-[40px]"
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
