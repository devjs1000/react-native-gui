import React from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
export const Container = ({ title, children }: ContainerProps) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const toggle = () => setOpen(!open);
  return (
    <div className="bg-gray-200 py-[2px] rounded-md my-1 select-none ">
      <h1
        className="text-md my-2 text-center text-gray-700  cursor-pointer flex justify-between px-4"
        onClick={toggle}
      >
        {title} {open ? <FaChevronDown /> : <FaChevronRight />}
      </h1>
      {open && (
        <div className="px-2">
          {children}
        </div>
      )}
    </div>
  );
};
interface ContainerProps {
  children: React.ReactNode;
  title: string;
}
