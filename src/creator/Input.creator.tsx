import React, { useRef } from "react";
const InputCreator = ({ handlefocus, id, children, ...rest }: InputProps) => {
  const ref = useRef(null);
  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    const { target, currentTarget } = e;
    e.bubbles = false;
    if (target == currentTarget) {
      const el: any = ref.current;
      const callback = handlefocus(el.id, "Input Creator");
      callback();
    }
  };

  return (
    <input
      ref={ref}
      id={id}
      onClick={handleClick}
      className="p-[10px] rounded-[10px] bg-[#f5f5f5] border-[1px] border-[#e0e0e0]  text-[#757575] font-bold"
      {...rest}
    />
  );
};

export default InputCreator;

interface InputProps {
  handlefocus: any;
  id: string;
  [key: string]: any;
}
