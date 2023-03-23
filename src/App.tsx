import React, { useCallback, useMemo, useState } from "react";
import EditBar from "./components/EditBar";
import NavBar from "./components/NavBar";
import { createRenderer } from "./createRenderer";
function App() {
  const [ui, setUi] = React.useState<any>([
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

  // const handleEdit = ({
  //   name,
  //   value,
  //   editType = "style",
  // }: {
  //   [key: string]: any;
  // }) => {
  //   const id: string = focusElement?.current?.id;
  //   const tempUI = ui.map((uiEl: any) => {
  //     const uiElId = uiEl?.id;
  //     const toReturn: any = JSON.parse(JSON.stringify(uiEl));
  //     if (uiElId == id) {
  //       if (!toReturn.attributes) toReturn.attributes = {};
  //       if (editType == "style") {
  //         if (!toReturn.attributes.style) toReturn.attributes.style = {};
  //         toReturn.attributes.style[name] = value;
  //       } else if (editType == "property") {
  //         toReturn[name] = value;
  //       } else {
  //         console.log("else");
  //         if (!toReturn.attributes) toReturn.attributes = {};
  //         toReturn.attributes[name] = value;
  //       }
  //     }
  //     return toReturn;
  //   });

  //   setUi(tempUI);
  // };

  const updateUI = (
    ui: any,
    id: string,
    name: string,
    value: any,
    editType = "style",
    depth = 0
  ) => {
    const tempUI = ui.map((uiEl: any) => {
      const uiElId = `${uiEl?.id}-${depth}`;
      const elDepth = +id.split("-")[1];
      if (elDepth > depth) {
        const children = uiEl?.attributes?.children || [];
        if (children.length) {
          return {
            ...uiEl,

            attributes: {
              ...uiEl.attributes,
              children: updateUI(
                children,
                id,
                name,
                value,
                editType,
                depth + 1
              ),
            },
          };
        }
      } else {
        // if(depth)
        const toReturn: any = JSON.parse(JSON.stringify(uiEl));
        if (uiElId == id) {
          if (editType == "style") {
            if (!toReturn.attributes) toReturn.attributes = {};
            if (!toReturn.attributes.style) toReturn.attributes.style = {};
            toReturn.attributes.style[name] = value;
          } else if (editType == "property") {
            toReturn[name] = value;
          } else {
            if (!toReturn.attributes) toReturn.attributes = {};
            toReturn.attributes[name] = value;
          }
        }
        return toReturn;
      }
    });

    return tempUI;
  };

  const handleEdit = ({
    name,
    value,
    editType = "style",
  }: {
    [key: string]: any;
  }) => {
    const id: string = focusElement?.current?.id;
    const tempUI = updateUI(ui, id, name, value, editType);
    setUi(tempUI);
  };

  const handleRemoveFocus = useCallback(() => {
    setFocusElement(null);
  }, []);

  const findActiveUi = (ui: any, depth = 0): any => {
    const id: string = focusElement?.current?.id;
    const ids = id?.split("-");
    const elId = ids?.[0];
    const elDepth = ids?.[1];

    if (!id) return null;
    const activeUi =
      ui.find((el: any) => {
        return `${el.id}-${depth}` == `${id}`;
      }) || null;

    if (activeUi) return activeUi;
    else {
      const parent=ui.find((el: any) => {
        console.log({elId, depth});
        return `${el.id}-${depth}` == `${elId}`;
      }) || null;
      console.log({parent});
      // const children = ui.map((el: any) => el?.attributes?.children || []);
      // if (children.length) {
      //   return findActiveUi(children, depth + 1);
      // } else {
      //   return null;
      // }
    }
  };

  const activeUi = findActiveUi(ui);
  const renderUI = useCallback(createRenderer(handlefocus), [ui]);

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
