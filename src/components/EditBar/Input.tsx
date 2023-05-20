import React, { useId } from "react";

export const Input = ({
  label,
  placeholder,
  className,
  type = "text",
  ...rest
}: InputProps) => {
  const id = useId();
  return (
    <div className="flex gap-x-4  my-2 p-1 rounded-md overflow-clip border-[1px] justify-between items-center">
      {type == "color" ? (
        <>
          <input className={`hidden`} id={id} type={type} {...rest} />
          <label
          htmlFor={id}
            className="w-[32px] h-[32px] rounded-md border-[1px] border-gray-200"
            style={{
              backgroundColor: rest.value,
            }}
          />
        </>
      ) : (
        <input
          className={` bg-gray-100 m-1  focus:outline-none  px-4 w-full h-[32px] flex-grow-[1] text-gray-900 rounded-md ${className}`}
          id={id}
          placeholder={placeholder}
          type={type}
          {...rest}
        />
      )}
      <label
        className="select-none text-xs  px-4 h-[32px]  flex items-center justify-start  whitespace-nowrap min-w-[130px]  bg-white text-gray-600 rounded-md"
        htmlFor={id}
      >
        {label?.toUpperCase()}
      </label>
    </div>
  );
};
interface InputProps {
  label: string;
  placeholder: string;
  [key: string]: any;
}
