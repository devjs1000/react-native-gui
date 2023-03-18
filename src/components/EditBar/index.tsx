import React from "react";
import LayoutEdit from "./LayoutEdit";

const EditBar = ({ focusElementRef = null }: EditBarProps) => {
  const hasFocus = focusElementRef;
  return (
    <aside className="flex-grow-[1] h-full bg-gray-900 max-w-[300px]">
      <p className="text-white bg-gray-800 py-2 text-center">
        {hasFocus ? focusElementRef.current?.name : "blur"}
      </p>
      <LayoutEdit />
    </aside>
  );
};

export default EditBar;

interface EditBarProps {
  focusElementRef?: React.RefObject<any> | null;
}
