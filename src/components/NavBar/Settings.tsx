import React from "react";
import { IoSettings } from "react-icons/io5";

const Settings = () => {
    
  return (
    <div>
      <button className="bg-white font-md hover:text-gray-800 text-gray-500  py-2 px-4 rounded-xl disabled:bg-gray-400  disabled:text-gray-100 flex items-center gap-2 ">
        <IoSettings />
        Settings
      </button>
    </div>
  );
};

export default Settings;
