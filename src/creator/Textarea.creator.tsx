import React, { useRef } from "react";
const TextareaCreator = ({
  handlefocus,
  id,
  children,
  ...rest
}: TextareaProps) => {
  const ref = useRef(null);
  const handleClick = (e: React.MouseEvent<HTMLTextAreaElement>) => {
    const { target, currentTarget } = e;
    e.bubbles = false;
    if (target == currentTarget) {
      const el: any = ref.current;
      const callback = handlefocus(el.id, "Textarea Creator");
      callback();
    }
  };

  return (
    <textarea
      ref={ref}
      id={id}
      onClick={handleClick}
      className="p-[40px] rounded-[10px] bg-[#f5f5f5] border-[1px] border-[#e0e0e0]  text-[#757575] font-bold"
      {...rest}
    >
      {children}
    </textarea>
  );
};

export default TextareaCreator;

interface TextareaProps {
  handlefocus: any;
  id: string;
  children: any;
  [key: string]: any;
}
