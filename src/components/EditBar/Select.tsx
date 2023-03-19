import React, { useId } from "react";

export const Select = ({
  label, placeholder, className, data, ...rest
}: SelectProps) => {
  const id = useId();
  return (
    <div className="flex flex-col mb-2 bg-red-600 relative overflow-clip rounded-md">
      <label
        className="select-none py-2 absolute right-0 px-4 h-[38px] flex items-center w-[150px] bg-gray-600"
        htmlFor={id}
      >
        {label?.toUpperCase()}
      </label>
      <select
        className={`p-2 w-full flex-grow-[1] text-gray-900 rounded-md ${className}`}
        id={id}
        placeholder={placeholder}
        {...rest}
      >
        {data.map((val: any, key:number) => {
          return <option value={val?.value} key={key} >{val?.label}</option>;
        })}
      </select>
    </div>
  );
};
interface SelectProps {
  data: { label: string; value: string; }[];
  label: string;
  placeholder: string;
  [key: string]: any;
}
