import React, { useState } from "react";
import { getCreator } from "./creator/creator.get";
import EditBar from "./components/EditBar";
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
  const handlefocus = (ref: React.RefObject<any>, name: string) => () => {
    ref.current.name = name;
    setFocusElement(ref);
  };
  const handleEdit = ({ name, value }: { [key: string]: any }) => {
    // console.log('handle Edit')
    const id: string = focusElement?.current?.id;
    // console.log(focusElement?.current)
    const tempUI = ui.map((uiEl: any) => {
      const uiElId = uiEl?.id;
      // console.log({id, uiElId})
      if (uiElId == id) {
        if (!uiEl.attributes) uiEl.attributes = {};
        if (!uiEl.attributes.style) uiEl.attributes.style = {};
        uiEl.attributes.style[name] = value;
        return uiEl;
      }
      return uiEl;
    });

    setUi(tempUI);
  };

  const handleRemoveFocus=()=>{
    setFocusElement(null)
  }

  return (
    <main className="flex w-screen h-screen bg-white">
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

      <EditBar removeFocus={handleRemoveFocus} handleEdit={handleEdit} focusElementRef={focusElement} />
    </main>
  );
}

export default App;
