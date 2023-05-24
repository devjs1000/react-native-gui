import React, { useRef } from "react";
const SelectCreator = ({ handlefocus, id, children, ...rest }: SelectProps) => {
  const ref = useRef(null);
  const handleClick = (e: React.MouseEvent<HTMLSelectElement>) => {
    const { target, currentTarget } = e;
    e.bubbles = false;
    if (target == currentTarget) {
      const el: any = ref.current;
      const callback = handlefocus(el.id, "Select Creator");
      callback();
    }
  };

  return (
    <select
      ref={ref}
      id={id}
      onClick={handleClick}
      className="p-[40px] rounded-[10px] bg-[#f5f5f5] border-[1px] border-[#e0e0e0]  text-[#757575] font-bold"
      {...rest}
    >
      {children}
    </select>
  );
};

export default SelectCreator;

interface SelectProps {
  handlefocus: any;
  id: string;
  children: any;
  [key: string]: any;
}
