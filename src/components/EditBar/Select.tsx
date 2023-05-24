import React, { useId } from "react";
import { AppState, setActiveElement } from "../../state/app.slice";
import { useStore } from "../../state/useStore";
import { useDispatch } from "react-redux";

export const Select = ({
  label,
  placeholder,
  className,
  data,
  i,
  value,
  ...rest
}: SelectProps) => {
  const id = useId();
  const { activeElement } = useStore<AppState>("app");
  const dispatch = useDispatch();
  const selectActiveElement = () => {
    const id = `${activeElement}-${i}`;
    dispatch(
      setActiveElement({
        id,
        name: value,
      })
    );
  };

  return (
    <div
      className="flex gap-x-4  my-2 p-1 rounded-md overflow-clip border-[1px] justify-between items-center"
      onClick={selectActiveElement}
    >
      <label
        className="select-none text-xs  px-4 h-[32px]  flex items-center justify-start  whitespace-nowrap min-w-[130px]  bg-white text-gray-600 rounded-md"
        htmlFor={id}
      >
        {label?.toUpperCase()}
      </label>
      <select
        value={value}
        className={`px-2  w-full bg-gray-100 flex-grow-[1] text-xs  py-1 text-gray-500 rounded-md  ${className}`}
        id={id}
        placeholder={placeholder}
        {...rest}
      >
        {data.map((val: any, key: number) => {
          return (
            <option value={val?.value} key={key}>
              {val?.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};
interface SelectProps {
  data: { label: string; value: string }[];
  label: string;
  placeholder: string;
  [key: string]: any;
}
