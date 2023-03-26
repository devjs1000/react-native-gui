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
  //TODO - make update ui work
  // for (let i = 0; i < ui?.length; i++) {
  //   const item = ui[i];
  //   const newId = createId(prevKey, i, depth);
  //   console.log(`newId`, newId, `id`, id, `name`, name, `value`, value);
  //   if (newId === id) {
  //     if (editType === "style") {
  //       item.attributes.style[name] = value;
  //     } else if (editType === "attributes") {
  //       item.attributes[name] = value;
  //     }
  //   }
  // }

  // console.log("ui", ui);
  // return ui;

  return ui.map((item: any, index: number) => {
    const newId = createId(prevKey, index, depth);
    if (newId === id) {
      if (editType === "style") {
        item.attributes.style[name] = value;
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