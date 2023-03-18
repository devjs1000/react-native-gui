import React from "react";
import LayoutEdit from "./LayoutEdit";
import ColorEdit from "./ColorEdit";
import { FaTimes } from "react-icons/fa";
import RadiusEdit from "./RadiusEdit";
const EditBar = ({
  focusElementRef = null,
  handleEdit,
  removeFocus,
}: EditBarProps) => {
  const hasFocus = focusElementRef;
  if (!hasFocus) return null;
  return (
    <aside className="flex-grow-[1] rounded-l-md shadow-xl h-screen bg-gray-900 max-w-[300px]">
      <FaTimes
        className={"text-red-700 bg-gray-100 m-1 rounded-md cursor-pointer "}
        onClick={removeFocus}
      />
      <p className="text-white rounded-tl-md bg-gray-800 py-2 text-center sticky top-0">
        {hasFocus ? focusElementRef.current?.name : "blur"}
      </p>
      <div className=" h-full overflow-auto">
        <LayoutEdit handleLayoutEdit={handleEdit} />
        <ColorEdit handleColorEdit={handleEdit} />
        <RadiusEdit handleRadiusEdit={handleEdit} />
      </div>
    </aside>
  );
};

export default EditBar;

interface EditBarProps {
  focusElementRef?: React.RefObject<any> | null;
  handleEdit: any;
  removeFocus: any;
}
