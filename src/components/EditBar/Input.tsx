import React, { useId } from "react";

export const Input = ({
  label,
  placeholder,
  className,
  ...rest
}: InputProps) => {
  const id = useId();
  return (
    <div className="flex flex-col relative my-2 rounded-md overflow-clip">
      <label
        className="select-none absolute right-0 px-4 h-[32px] flex items-center w-[150px] bg-gray-600"
        htmlFor={id}
      >
        {label?.toUpperCase()}
      </label>
      <input
        className={` bg-white px-4 w-full h-[32px] flex-grow-[1] text-gray-900 rounded-md ${className}`}
        id={id}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};
interface InputProps {
  label: string;
  placeholder: string;
  [key: string]: any;
}
