import React, { useRef } from "react";
const LinkCreator = ({ handlefocus, id, children, ...rest }: LinkProps) => {
  const ref = useRef(null);
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { target, currentTarget } = e;
    e.bubbles = false;
    if (target == currentTarget) {
      const el: any = ref.current;
      const callback = handlefocus(el.id, "Link Creator");
      callback();
    }  
  };

  return (
    <a
      ref={ref}
      id={id}
      onClick={handleClick}
      className="p-[40px] rounded-[10px] bg-[#f5f5f5] border-[1px] border-[#e0e0e0]  text-[#757575] font-bold"
      {...rest}
    >
      {children}
    </a>
  );
};

export default LinkCreator;

interface LinkProps {
  handlefocus: any;
  id: string;
  children: any;
  [key: string]: any;
}
