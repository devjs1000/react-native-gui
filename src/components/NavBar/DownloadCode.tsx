import React from "react";
import { FaDownload } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { createFinalCode } from "./helpers/screenCodeToCode";
import { CodeFileType, downloadFiles } from "./helpers/downloadFiles";

const DownloadCode = () => {
  const screens = useSelector((state: RootState) => state.app.screens);
  const files: Array<CodeFileType> = [];
  const name=useSelector((state:RootState)=>state.app.name)
  for (let key in screens) {
    if (key == "untitled") continue;
    const screen = screens[key];
    const code = createFinalCode(screen);
    files.push({
      name: key,
      code,
    });
  }
  const handleDownload = () => {
    downloadFiles(files, name);
  };
  return (
    <button
      onClick={handleDownload}
      className="bg-white font-md hover:text-gray-800 text-gray-500  py-2 px-4 rounded-xl disabled:bg-gray-400  disabled:text-gray-100 flex items-center gap-2 "
    >
      <FaDownload />
      Download Files
    </button>
  );
};

export default DownloadCode;
