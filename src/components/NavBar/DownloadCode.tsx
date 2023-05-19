import React from "react";
import { FaDownload } from "react-icons/fa";

const DownloadCode = () => {
  const handleDownload = () => {};
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
