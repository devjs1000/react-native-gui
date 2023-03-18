import React from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { Input } from "./Input";
export const Container = ({
  title,
  children,
  all,
  handleAllChange,
  elType = "input",
  data,
}: ContainerProps) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const toggle = () => setOpen(!open);
  return (
    <div className="bg-gray-200 py-[2px] rounded-md my-1 select-none ">
      <h1
        className="text-md my-2 text-center text-gray-700  cursor-pointer flex justify-between items-center px-4"
      >
        {title}
        {all && (
          <>
            {elType == "input" && (
              <input
                className="px-2 max-w-[80px] rounded-md text-gray-400"
                onKeyPress={handleAllChange}
              />
            )}
            {elType == "select" && (
              <select
                className="px-2 max-w-[80px] rounded-md text-gray-400"
                onChange={handleAllChange}
              >
                {data?.map((el, i) => {
                  return (
                    <option key={i} value={el.value}>
                      {el.label}
                    </option>
                  );
                })}
              </select>
            )}
            {elType == "color" && (
              <input onChange={handleAllChange} type="color" />
            )}
          </>
        )}
        {open ? <FaChevronDown onClick={toggle} /> : <FaChevronRight onClick={toggle} />}
      </h1>
      {open && <div className="px-2">{children}</div>}
    </div>
  );
};
interface ContainerProps {
  children: React.ReactNode;
  title: string;
  all?: boolean;
  handleAllChange?: any;
  elType?: "input" | "select" | "color";
  data?: any[];
}
