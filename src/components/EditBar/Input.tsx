import React, { useId } from "react";

export const Input = ({  label, placeholder, className, ...rest }: InputProps) => {
  const id = useId();
  return (
    <div className="flex flex-col w-">
      <label
        className="bg-gray-700 select-none rounded-md mb-1 px-2 font-bold text-center"
        htmlFor={id}
      >
        {label?.toUpperCase()}
      </label>
      <input
        className={`p-2 w-[100px] flex-grow-[1] text-gray-900 rounded-md ${className}`}
        id={id}
        placeholder={placeholder}
        {...rest} />
    </div>
  );
};
interface InputProps {
  label: string;
  placeholder: string;
  [key: string]: any;
}
