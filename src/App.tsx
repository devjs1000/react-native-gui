import React, { useCallback, useEffect } from "react";
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
import ScreenBar from "./components/ScreenBar";
import View from "./components/View";

function App() {
  const { activeElement, ui, hasPreview } = useStore<AppState>("app");
  const id = activeElement || "";
  const dispatch = useDispatch();

  const handlefocus = useCallback(
    (id: string, name: string) => () => {
      dispatch(setActiveElement({ id, name }));
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.focus();
      }
    },
    []
  );

  const handleEdit = ({
    name,
    value,
    editType = "style",
    batch = false,
  }: HandleEditType) => {
    const cloneUI = JSON.parse(JSON.stringify(ui));
    if (batch && Array.isArray(name)) {
      const batchUI: UIType = name?.reduce?.((acc: any, curr: any) => {
        return updateUI(acc, id, curr, value, editType);
      }, cloneUI);
      const clonedBatchUI = JSON.parse(JSON.stringify(batchUI));
      dispatch(setUI(clonedBatchUI));
    } else if (typeof name === "string") {
      const tempUI: UIType = updateUI(cloneUI, id, name, value, editType);
      const clonedTempUI = JSON.parse(JSON.stringify(tempUI));
      dispatch(setUI(clonedTempUI));
    }
  };

  const findActiveUi = useCallback(createUIFinder(id), [id, ui]);

  const activeUi = findActiveUi(ui);
  const renderUI = useCallback(createRenderer(handlefocus), []);
  const renderedUI = renderUI(ui);
  useEffect(() => {
    dispatch(setActiveUI(activeUi));
  }, [activeUi]);

  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 overflow-clip transition-[2s] ">
      <NavBar screenCode={ui} />
      <main className="flex w-screen h-screen  bg-white">
        <ScreenBar />
        <section className="flex-grow-[3] overflow-auto bg-gray-100 rounded-xl mt-2 ">
          {renderedUI}
        </section>
         <View />
        <EditBar handleEdit={handleEdit} />
      </main>
    </div>
  );
}

export default App;

interface HandleEditType {
  name: string | string[];
  value: string;
  editType?: "style" | "attributes";
  batch?: boolean;
}
