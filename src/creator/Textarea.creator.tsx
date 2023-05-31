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
      className="textarea-creator"
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
