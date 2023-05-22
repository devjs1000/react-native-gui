import { createId } from "./createId";
import { UIType } from "./types/ui.type";

export const updateUI = (
  ui: UIType,
  id: string,
  name: string,
  value: any,
  editType = "style",
  depth = 0,
  prevKey = ``
): UIType => {
  console.log("updateUI", ui, id, name, value, editType, depth, prevKey);
  return ui.map((item: any, index: number) => {
    const newId = createId(prevKey, index, depth);
    if (newId === id) {
      if (editType === "style") {
        if (value === "") {
          delete item.attributes.style[name];
        } else {
          item.attributes.style[name] = value;
        }
      } else if (editType === "attributes") {
        item.attributes[name] = value;
      }
    } else {
      if (item?.attributes?.children?.length) {
        item.attributes.children = updateUI(
          item.attributes.children,
          id,
          name,
          value,
          editType,
          depth + 1,
          newId
        );
      }
    }
    return item;
  });
};
