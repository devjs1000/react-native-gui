import React from "react";
import CopyAsCode from "./CopyAsCode";

const NavBar = ({ screenCode }: NavBarProps) => {
  return (
    <nav className="h-[50px] w-full bg-gray-700 flex flex-col">
      <div className="flex justify-center text-white font-bold">
        REACT NATIVE GUI
      </div>
      <div className="flex flex-row justify-end  px-4 items-center bg-gray-100 h-[25px] gap-4">
        <CopyAsCode screenCode={screenCode}  />
      </div>
    </nav>
  );
};

export default NavBar;

interface NavBarProps {
  screenCode: any;
}
