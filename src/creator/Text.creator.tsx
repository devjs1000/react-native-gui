import React, { useRef } from "react";
const TextCreator = ({ handlefocus, id, children, ...rest }: TextProps) => {
  const ref = useRef(null);
  const handleClick = (e: any) => {
    const { target, currentTarget } = e;
    e.bubbles = false;
    if (target == currentTarget) {
      const el: any = ref.current;
      const callback = handlefocus(el.id, "Text Creator");
      callback();
    }
  };

  return (
    <p
      ref={ref}
      id={id}
      onClick={handleClick}
      className=" m-2 overflow-auto border-gray-400  text-gray-400  border-dashed border-[2px] bg-white flex justify-center items-center p-[10px] rounded-[10px] select-none cursor-pointer "
      {...rest}
    >
      {children}
    </p>
  );
};

export default TextCreator;

interface TextProps {
  handlefocus: any;
  id: string;
  children: any;
  [key: string]: any;
}
