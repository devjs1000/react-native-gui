import React from "react";
import { getCreator } from "./creator/creator.get";
import LayoutCreator from "./creator/layout.creator";
function App() {
  const [ui, setUi] = React.useState<any>([
    {
      type: "LayoutCreator",
      attributes: {},
    },
  ]);

  return (
    <div className=" w-screen h-screen bg-white">
      {/* {ui.map((item: any, index: number) => {
        const Creator:any = getCreator(item.type);
        return <Creator key={index} {...item?.attributes}  />;
      })} */}
      <LayoutCreator />
    </div>
  );
}

export default App;
