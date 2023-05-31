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
      className="link-creator"
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
