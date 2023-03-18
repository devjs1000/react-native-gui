import React from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
export const Container = ({ title, children }: ContainerProps) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const toggle = () => setOpen(!open);
  return (
    <div className="bg-gray-800 py-[2px] rounded-md my-1 select-none">
      <h1
        className="text-xl my-2 text-center bg-gray-800 cursor-pointer flex justify-between px-4"
        onClick={toggle}
      >
        {title} {open ? <FaChevronDown /> : <FaChevronRight />}
      </h1>
      {open && (
        <div className="flex py-2 flex-wrap justify-around gap-4">
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
