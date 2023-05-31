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
      className="input-creator"
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
