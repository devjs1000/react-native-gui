import { createId } from "./createId";
import { UIType } from "./types/ui.type";

export const updateUI = async (
  ui: any,
  id: string,
  name: string,
  value: any,
  editType = "style",
  depth = 0,
  prevKey = ``
): Promise<UIType> => {
  //TODO - make update ui work
  for (let i = 0; i < ui?.length; i++) {
    const item = ui[i];
    const newId = createId(prevKey, i, depth);
    if (newId === id) {
      if (editType === "style") {
        item.attributes.style[name] = value;
      } else if (editType === "attributes") {
        item.attributes[name] = value;
      }
    } else {
      const children = item?.attributes?.children || [];
      if (children.length) {
        return updateUI(children, id, name, value, editType, depth + 1, newId);
      }
    }
  }
  return ui;
};
