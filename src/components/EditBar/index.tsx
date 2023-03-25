import React from "react";
import LayoutEdit from "./LayoutEdit";
import ColorEdit from "./ColorEdit";
import { FaTimes } from "react-icons/fa";
import TextEdit from "./TextEdit";
import BorderEdit from "./BorderEdit";
import AddChildren from "./AddChildren";
import { ItemType } from "../../types/ui.type";
const EditBar = ({
  focusElementRef = null,
  handleEdit,
  removeFocus,
  activeUi,
}: EditBarProps) => {
  const hasFocus = focusElementRef && activeUi;
  if (!hasFocus || !activeUi) return null;
  const attributes = activeUi?.attributes;
  return (
    <aside className="flex-grow-[1] p-2 shadow-xl h-[100vh] bg-white max-w-[300px]">
      <p className="text-white flex justify-between px-4  bg-gray-800 py-2 text-center sticky top-0">
        {focusElementRef?.current?.name} // {focusElementRef?.current?.id}
        <FaTimes
          className={"text-gray-700 bg-gray-100 m-1 rounded-md cursor-pointer "}
          onClick={removeFocus}
        />
      </p>
      <div className=" h-full overflow-auto">
        <LayoutEdit styles={attributes?.style} handleLayoutEdit={handleEdit} />
        <ColorEdit styles={attributes?.style} handleColorEdit={handleEdit} />
        <TextEdit styles={attributes?.style} handleTextEdit={handleEdit} />
        <BorderEdit styles={attributes?.style} handleBorderEdit={handleEdit} />
        <AddChildren
          childrens={attributes?.children}
          handleAddChildren={handleEdit}
        />
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
  activeUi: ItemType | undefined;
}
