import React, { useRef } from "react";
const LayoutCreator = ({ handlefocus, id, children, ...rest }: LayoutProps) => {
  const ref = useRef(null);
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const { target, currentTarget } = e;
    e.bubbles = false;
    if (target == currentTarget) {
      const el: any = ref.current;
      const callback = handlefocus(el.id, "Layout Creator");
      callback();
    }
  };

  return (
    <div
      ref={ref}
      id={id}
      onClick={handleClick}
      className="layout-creator"
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
