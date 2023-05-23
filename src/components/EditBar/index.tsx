import { useCallback } from "react";
import LayoutEdit from "./LayoutEdit";
import ColorEdit from "./ColorEdit";
import { FaTimes } from "react-icons/fa";
import TextEdit from "./TextEdit";
import BorderEdit from "./BorderEdit";
import AddChildren from "./AddChildren";
import { AppState, setActiveElement } from "../../state/app.slice";
import { useStore } from "../../state/useStore";
import { useDispatch } from "react-redux";
import DynamicEdit from "./DynamicEdit";

const EditBar = ({ handleEdit }: EditBarProps) => {
  const { activeElement, activeUI, hasFocus, activeElementType } =
    useStore<AppState>("app");
  const dispatch = useDispatch();
  const removeFocus = useCallback(() => {
    dispatch(setActiveElement(null));
  }, []);

  if (!hasFocus) return null;
  const attributes = activeUI?.attributes;

  const handleAttributeChange = (name: string) => (e: any) => {
    const { value } = e.target;
    handleEdit({
      name,
      value,
      editType: "attributes",
    });
  };


  return (
    <aside className="flex-grow-1 bg-white  h-full  max-w-[300px]">
      <div className=" flex items-center justify-between px-6 border-b-2 pb-2 border-gray-200">
        <p className="text-gray-400  bg-white py-1 rounded-md mx-1">
          {activeElementType}
        </p>
        <p className="text-gray-400  bg-white py-1 rounded-md mx-1">
          {activeElement}
        </p>
        {activeUI?.attributes?.children?.length > 0 && (
          <p className="text-white bg-blue-500 rounded-full  h-6 w-6 flex items-center justify-center">
            {activeUI?.attributes?.children?.length}
          </p>
        )}
        <FaTimes
          className={"text-gray-700 bg-gray-100 m-1 rounded-md cursor-pointer "}
          onClick={removeFocus}
        />
      </div>

      <div className=" h-full bg-gray-500 overflow-auto pb-[50px]">
        <DynamicEdit attributes={attributes}  handleDynamicEdit={handleAttributeChange} />
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
  handleEdit: (args: {
    name: string;
    value: any;
    editType?: "style" | "attributes";
    batch?: boolean;
  }) => void;
  // activeUi: ItemType | undefined;
}
