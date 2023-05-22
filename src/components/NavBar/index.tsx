import React from "react";
import CopyAsCode from "./CopyAsCode";
import SaveChanges from "./SaveChanges";
import DownloadCode from "./DownloadCode";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { updateName } from "../../state/app.slice";
import { frameworkIcons } from "../../constants/fileIcon";

const NavBar = ({ screenCode }: NavBarProps) => {
  const { name, framework } = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();
  const handleProjectName = (e: any) => {
    dispatch(updateName(e.target.value));
  };
  const iconObj = frameworkIcons[framework] || frameworkIcons["default"];
  const icon = (
    <iconObj.component
      style={{
        color: iconObj.color,
        fontSize: "2rem",
      }}
    />
  );
  return (
    <nav className=" w-full bg-white px-2 flex  flex-col justify-center  ">
      <div className="flex justify-between items-center gap-4 text-gray-700 font-bold py-2">
        <div className="flex items-center gap-2">
          {icon}
          <input
            className="ml-2 font-light inline-block bg-gray-200 px-2 py-1 rounded-md"
            type="text"
            value={name}
            onChange={handleProjectName}
          />
        </div>
        REACT NATIVE GUI
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
