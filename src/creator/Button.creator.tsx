import React, { useRef } from "react";
const ButtonCreator = ({ handlefocus, id, children, ...rest }: ButtonProps) => {
  const ref = useRef(null);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { target, currentTarget } = e;
    e.bubbles = false;
    if (target == currentTarget) {
      const el: any = ref.current;
      const callback = handlefocus(el.id, "Button Creator");
      callback();
    }
  };

  return (
    <button
      ref={ref}
      id={id}
      onClick={handleClick}
      className="p-[40px] rounded-[10px] bg-[#f5f5f5] border-[1px] border-[#e0e0e0]  text-[#757575] font-bold"
      {...rest}
    >
      {children}
    </button>
  );
};

export default ButtonCreator;

interface ButtonProps {
  handlefocus: any;
  id: string;
  children: any;
  [key: string]: any;
}
