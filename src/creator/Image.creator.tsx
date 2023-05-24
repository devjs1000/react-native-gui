import React, { useRef } from "react";
const ImageCreator = ({ handlefocus, id, children, ...rest }: ImageProps) => {
  const ref = useRef(null);
  const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const { target, currentTarget } = e;
    e.bubbles = false;
    if (target == currentTarget) {
      const el: any = ref.current;
      const callback = handlefocus(el.id, "Image Creator");
      callback();
    }
  };

  return (
    <img
      ref={ref}
      id={id}
      onClick={handleClick}
      className="p-[40px] rounded-[10px] bg-[#f5f5f5] border-[1px] border-[#e0e0e0]  text-[#757575] font-bold"
      {...rest}
    />
  );
};

export default ImageCreator;

interface ImageProps {
  handlefocus: any;
  id: string;
  [key: string]: any;
}
