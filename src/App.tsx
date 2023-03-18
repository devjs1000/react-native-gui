import React, { useState } from "react";
import { getCreator } from "./creator/creator.get";
import LayoutCreator from "./creator/Layout.creator";
import EditBar from "./components/EditBar";
function App() {
  const [ui, setUi] = React.useState<any>([
    {
      type: "LayoutCreator",
      attributes: {},
    },
  ]);

  type focusElementType= React.RefObject<any> | null
  const [focusElement, setFocusElement] = useState<focusElementType>(null);
  const handlefocus=(ref:React.RefObject<any>, name:string)=>()=>{
    ref.current.name=name
    setFocusElement(ref)
  }
  return (
    <main className="flex w-screen h-screen bg-white">
      <section className="flex-grow-[3]">
        {/* {ui.map((item: any, index: number) => {
          const Creator: any = getCreator(item.type);
          return <Creator key={index} {...item?.attributes} />;
        })} */}

        <LayoutCreator handlefocus={handlefocus}  />
      </section>

      <EditBar focusElementRef={focusElement} />
    </main>
  );
}

export default App;
