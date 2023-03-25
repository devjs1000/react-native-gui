import React, { useCallback, useState } from "react";
import EditBar from "./components/EditBar";
import NavBar from "./components/NavBar";
import { createRenderer } from "./createRenderer";
import { updateUI } from "./updateUI";
import { createUIFinder } from "./createUIFinder";
import { UIType } from "./types/ui.type";
function App() {
  const [ui, setUi] = useState<UIType>([
    {
      type: "LayoutCreator",
      id: "0",
      attributes: {
        style: {},
      },
    },
    {
      type: "LayoutCreator",
      id: "1",
      attributes: {
        style: {},
      },
    },
  ]);

  type focusElementType = React.RefObject<any> | null;
  const [focusElement, setFocusElement] = useState<focusElementType>(null);
  const handlefocus = useCallback(
    (ref: React.RefObject<any>, name: string) => () => {
      ref.current.name = name;
      setFocusElement(ref);
    },
    []
  );

  const handleEdit = async ({
    name,
    value,
    editType = "style",
  }: {
    [key: string]: any;
  }) => {
    const id: string = focusElement?.current?.id;

    const tempUI: UIType = await updateUI(ui, id, name, value, editType);
    console.log(name, value, editType);
    setUi(JSON.parse(JSON.stringify(tempUI)));
  };

  const handleRemoveFocus = useCallback(() => {
    setFocusElement(null);
  }, []);

  const findActiveUi = useCallback(createUIFinder(focusElement?.current?.id), [
    focusElement?.current?.id,
  ]);
  const activeUi = findActiveUi(ui);
  const renderUI = useCallback(createRenderer(handlefocus), []);
  const renderedUI = renderUI(ui);
  // console.log("ui", ui);
  // console.log("focus Element", focusElement);
  // console.log("active ui", activeUi);
  return (
    <div>
      <NavBar screenCode={ui} />
      <main className="flex w-screen h-screen overflow-hidden bg-gray-100">
        <section className="flex-grow-[3]">{renderedUI}</section>

        <EditBar
          activeUi={activeUi}
          removeFocus={handleRemoveFocus}
          handleEdit={handleEdit}
          focusElementRef={focusElement}
        />
      </main>
    </div>
  );
}

export default App;
