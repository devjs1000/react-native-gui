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

const EditBar = ({ handleEdit }: EditBarProps) => {
  const { activeElement, activeUI, hasFocus } = useStore<AppState>("app");
  const dispatch = useDispatch();
  const removeFocus = useCallback(() => {
    dispatch(setActiveElement(null));
  }, []);

  if (!hasFocus) return null;
  const attributes = activeUI?.attributes;

  return (
    <aside className="flex-grow-[1] p-2  h-[100vh] bg-white max-w-[300px]">
      <p className="text-white flex justify-between px-4  bg-gray-800 py-2 text-center sticky top-0 rounded-md select-none">
        <div className="whitespace-nowrap p-2  overflow-x-auto">
          <span className="text-gray-400 px-6 bg-white py-1 rounded-md mx-1">
            {activeElement?.current?.name}
          </span>
          <span className="text-gray-400 px-6 bg-white py-1 rounded-md mx-1">
            {activeElement?.current?.id}
          </span>
          {activeUI?.attributes?.children?.length > 0 && (
            <span className="text-white bg-blue-500 rounded-full inline-block h-6 w-6">
              {activeUI?.attributes?.children?.length}
            </span>
          )}
        </div>
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
  handleEdit: (args: {
    name: string;
    value: any;
    editType?: "style" | "attribute";
    batch?: boolean;
  }) => void;
  // activeUi: ItemType | undefined;
}
