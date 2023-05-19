import React from "react";
import { FaSave } from "react-icons/fa";

const SaveChanges = () => {
  const hasChanges = false;
  return (
    <button
      disabled={hasChanges}
      className="bg-white font-md hover:text-gray-800 text-gray-500  py-2 px-4 rounded-xl disabled:bg-gray-400  disabled:text-gray-100 flex items-center gap-2 "
    >
      <FaSave />
      Save changes
    </button>
  );
};

export default SaveChanges;
