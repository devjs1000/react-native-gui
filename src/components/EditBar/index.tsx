import React from "react";
import LayoutEdit from "./LayoutEdit";
import ColorEdit from "./ColorEdit";

const EditBar = ({ focusElementRef = null, handleEdit }: EditBarProps) => {
  const hasFocus = focusElementRef;
  if (!hasFocus) return null;
  return (
    <aside className="flex-grow-[1] rounded-md shadow-xl h-screen bg-gray-900 max-w-[300px]">
      <p className="text-white rounded-tl-md bg-gray-800 py-2 text-center sticky top-0">
        {hasFocus ? focusElementRef.current?.name : "blur"}
      </p>
      <div className=" h-full overflow-auto">
        <LayoutEdit handleLayoutEdit={handleEdit} />
        <ColorEdit handleColorEdit={handleEdit} />
      </div>
    </aside>
  );
};

export default EditBar;

interface EditBarProps {
  focusElementRef?: React.RefObject<any> | null;
  handleEdit: any;
}
