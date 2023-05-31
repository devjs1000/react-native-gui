import React, { useRef } from "react";
import noImage from "../assets/images/no-image.png";
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
      src={noImage}
      className="image-creator"
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
