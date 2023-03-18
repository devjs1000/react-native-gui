import React from "react";
import LayoutEdit from "./LayoutEdit";
import ColorEdit from "./ColorEdit";
import { FaTimes } from "react-icons/fa";
import TextEdit from "./TextEdit";
import BorderEdit from "./BorderEdit";
const EditBar = ({
  focusElementRef = null,
  handleEdit,
  removeFocus,
}: EditBarProps) => {
  const hasFocus = focusElementRef;
  if (!hasFocus) return null;
  return (
    <aside className="flex-grow-[1] p-2 shadow-xl h-[100vh] bg-white max-w-[300px]">
      <p className="text-white flex justify-between px-4  bg-gray-800 py-2 text-center sticky top-0">
        {focusElementRef?.current?.name}
        <FaTimes
          className={"text-gray-700 bg-gray-100 m-1 rounded-md cursor-pointer "}
          onClick={removeFocus}
        />
      </p>
      <div className=" h-full overflow-auto">
        <LayoutEdit handleLayoutEdit={handleEdit} />
        <ColorEdit handleColorEdit={handleEdit} />
        <TextEdit handleTextEdit={handleEdit} />
        <BorderEdit handleBorderEdit={handleEdit} />
        <div className="h-[100px] w-full bg-white" />
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
