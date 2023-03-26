import React, { useCallback, useEffect, useState } from "react";
import EditBar from "./components/EditBar";
import NavBar from "./components/NavBar";
import { createRenderer } from "./createRenderer";
import { updateUI } from "./updateUI";
import { createUIFinder } from "./createUIFinder";
import { UIType } from "./types/ui.type";
import { useStore } from "./state/useStore";
import {
  AppState,
  setActiveElement,
  setActiveUI,
  setUI,
} from "./state/app.slice";
import { useDispatch } from "react-redux";
import _ from "lodash";

function App() {
  const { activeElement, ui } = useStore<AppState>("app");
  const dispatch = useDispatch();

  const handlefocus = useCallback(
    (ref: React.RefObject<any>, name: string) => () => {
      ref.current.name = name;
      dispatch(setActiveElement(ref));
    },
    []
  );

  const handleEdit = ({
    name,
    value,
    editType = "style",
  }: {
    [key: string]: any;
  }) => {
    const id: string = activeElement?.current?.id;
    const cloneUI=JSON.parse(JSON.stringify(ui));
    const tempUI: UIType = updateUI(cloneUI, id, name, value, editType);
    const clonedTempUI = JSON.parse(JSON.stringify(tempUI));
    dispatch(setUI(clonedTempUI));
  };

  const findActiveUi = useCallback(createUIFinder(activeElement?.current?.id), [
    activeElement?.current?.id,
    ui,
  ]);
  const activeUi = findActiveUi(ui);
  const renderUI = useCallback(createRenderer(handlefocus), []);
  const renderedUI = renderUI(ui);
  useEffect(() => {
    dispatch(setActiveUI(activeUi));
  }, [activeUi]);


  return (
    <div>
      <NavBar screenCode={ui} />
      <main className="flex w-screen h-screen  bg-white">
        <section className="flex-grow-[3] overflow-auto bg-gray-100 ">
          {renderedUI}
        </section>
        <EditBar handleEdit={handleEdit} />
      </main>
    </div>
  );
}

export default App;
