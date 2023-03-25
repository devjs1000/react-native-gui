import React from "react";
import CopyAsCode from "./CopyAsCode";

const NavBar = ({ screenCode }: NavBarProps) => {
  return (
    <nav className=" w-full bg-white flex  flex-col justify-center ">
      <div className="flex justify-center text-gray-700 font-bold">
        REACT NATIVE GUI
      </div>
      <div className="flex flex-row justify-end  px-4 items-center border-t-[1px] border-b-[1px] py-2  bg-white  gap-4">
        <CopyAsCode screenCode={screenCode}  />
      </div>
    </nav>
  );
};

export default NavBar;

interface NavBarProps {
  screenCode: any;
}
