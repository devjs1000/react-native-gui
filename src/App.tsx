import React, { useCallback, useMemo, useState } from "react";
import { getCreator } from "./creator/creator.get";
import EditBar from "./components/EditBar";
import NavBar from "./components/NavBar";
function App() {
  const [ui, setUi] = React.useState<any>([
    {
      type: "LayoutCreator",
      id: "0",
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

  const handleEdit = useCallback(
    ({ name, value, editType = "style" }: { [key: string]: any }) => {
      const id: string = focusElement?.current?.id;
      const tempUI = ui.map((uiEl: any) => {
        const uiElId = uiEl?.id;
        const toReturn: any = JSON.parse(JSON.stringify(uiEl));
        if (uiElId == id) {
          if (!toReturn.attributes) toReturn.attributes = {};
          if (editType == "style") {
            if (!toReturn.attributes.style) toReturn.attributes.style = {};
            toReturn.attributes.style[name] = value;
          } else if (editType == "property") {
            toReturn[name] = value;
          } else {
            console.log("else");
            if (!toReturn.attributes) toReturn.attributes = {};
            toReturn.attributes[name] = value;
          }
        }
        return toReturn;
      });

      setUi(tempUI);
    },
    [ui, focusElement]
  );

  const handleRemoveFocus = useCallback(() => {
    setFocusElement(null);
  }, []);

  const activeUi = useMemo(() => {
    return ui.find((el: any) => el.id == focusElement?.current?.id) || null;
  }, [focusElement, ui]);
  console.log(activeUi);
  const renderUI = (ui: any) => {
    return (
      ui.map((item: any, index: number) => {
        const Creator: any = getCreator(item.type);

        const attributes = item?.attributes || {};
        const children = attributes?.children || [];
        const attrs = JSON.parse(JSON.stringify(attributes));
        console.log({ children });
        const el = (
          <Creator
            key={`${index}`}
            id={`${index}`}
            handlefocus={handlefocus}
            {...attrs}
            children={
              children.length
                ? renderUI(children)?.map((Child: any, i: number) => {
                    console.log({ Child });
                    return Child;
                  })
                : "empty"
            }
          />
        );
        return el;
      }) || ""
    );
  };
  return (
    <div>
      <NavBar screenCode={ui} />
      <main className="flex w-screen h-screen overflow-hidden bg-gray-100">
        <section className="flex-grow-[3]">{renderUI(ui)}</section>

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
