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
    ({ name, value }: { [key: string]: any }) => {
      const id: string = focusElement?.current?.id;
      const tempUI = ui.map((uiEl: any) => {
        const uiElId = uiEl?.id;
        if (uiElId == id) {
          if (!uiEl.attributes) uiEl.attributes = {};
          if (!uiEl.attributes.style) uiEl.attributes.style = {};
          uiEl.attributes.style[name] = value;
          return uiEl;
        }
        return uiEl;
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

  console.log({ activeUi });
  return (
    <div>
      <NavBar screenCode={ui} />
      <main className="flex w-screen h-screen overflow-hidden bg-gray-100">
        <section className="flex-grow-[3]">
          {ui.map((item: any, index: number) => {
            const Creator: any = getCreator(item.type);
            console.log(item?.attributes);
            const attributes = item?.attributes || null;
            console.log({ attributes });
            const astyle = attributes?.style;
            const style = typeof astyle == "object" ? astyle : {};

            const el = (
              <Creator
                key={`${index}`}
                id={`${index}`}
                handlefocus={handlefocus}
                style={JSON.parse(JSON.stringify(style))}
              />
            );
            console.log(el.props, index);
            return el;
          })}
        </section>

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
