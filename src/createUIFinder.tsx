import { createId } from "./createId";
import { ItemType } from "./types/ui.type";

export const createUIFinder = (focusElementId: string) => {
  const findActiveUi = (
    ui: any,
    depth = 0,
    prevKey = ``
  ): ItemType | undefined => {
    for (let i = 0; i < ui?.length; i++) {
      const item = ui[i];
      const newId = createId(prevKey, i, depth);
      
      if (newId == focusElementId) {
        return item;
      } else {
        const children = item?.attributes?.children || [];
        if (children.length) {
          const res = findActiveUi(children, depth + 1, newId);
          if (res) {
            return res;
          }
        } else {
        }
      }
    }
  };

  return findActiveUi;
};
