import React from "react";
import CopyAsCode from "./CopyAsCode";
import SaveChanges from "./SaveChanges";
import DownloadCode from "./DownloadCode";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { updateName } from "../../state/app.slice";

const NavBar = ({ screenCode }: NavBarProps) => {
  const name = useSelector((state: RootState) => state.app.name);
  const dispatch = useDispatch();
  const handleProjectName = (e: any) => {
    dispatch(updateName(e.target.value));
  };
  return (
    <nav className=" w-full bg-white px-2 flex  flex-col justify-center  ">
      <div className="flex justify-center text-gray-700 font-bold py-2">
        REACT NATIVE GUI{" "}
        <input
          className="ml-2 font-light inline-block"
          type="text"
          value={name}
          onChange={handleProjectName}
        />
      </div>
      <div className="flex flex-row justify-end mb-[10px]    px-2 items-center py-2  bg-gray-100  gap-4 rounded-xl">
        <DownloadCode />
        <SaveChanges />
        <CopyAsCode screenCode={JSON.parse(JSON.stringify(screenCode))} />
      </div>
    </nav>
  );
};

export default NavBar;

interface NavBarProps {
  screenCode: any;
}
