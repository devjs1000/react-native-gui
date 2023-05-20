import toRender from "../../../renderer/renderer.get";

export const screenCodeToCode = (myScreenCode: any) => {
  return myScreenCode?.map((cd: any) => {
    const renderer = toRender[cd?.type];
    const children = cd.attributes.children;
    const attr = cd.attributes;
    delete attr.children;
    return renderer({
      children: children ? screenCodeToCode(children) : [],
      attributes: attr || {},
    });
  });
};

export const createFinalCode = (screenCode: any) => {
  const code = screenCodeToCode(screenCode);
  const finalCode = `<>${code.join("")}</>`;
  return finalCode;
};
