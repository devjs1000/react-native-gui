import { createId } from "./createId";
import { ItemType } from "./types/ui.type";

export const createUIFinder = (focusElementId: string) => {
  // console.log("focusElementId", focusElementId);
  const findActiveUi = (
    ui: any,
    depth = 0,
    prevKey = ``
  ): ItemType | undefined => {
    for (let i = 0; i < ui?.length; i++) {
      console.log(`renderUI -> ui[${i}] ${depth} ${prevKey} - ${ui.length}`);
      const item = ui[i];
      const newId = createId(prevKey, i, depth);
      // console.log({
      //   newId,
      //   focusElementId,
      // });
      if (newId == focusElementId) {
        // console.log("found");
        return item;
      } else {
        const children = item?.attributes?.children || [];
        // console.log("findActiveUi -> children", children);
        if (children.length) {
          const res = findActiveUi(children, depth + 1, newId);
          if (res) {
            return res;
          }
        } else {
          console.log(`not found in  ${depth} ${prevKey} - ${ui.length}`);
        }
      }
    }
  };

  return findActiveUi;
};
