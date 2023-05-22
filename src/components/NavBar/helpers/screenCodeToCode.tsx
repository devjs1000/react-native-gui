import toRender from "../../../renderer/renderer.get";

export const screenCodeToCode = (myScreenCode: any): any => {
  return [...myScreenCode]?.map((cd: any) => {
    const renderer = toRender[cd?.type];
    const children = cd.attributes.children;
    const attr = JSON.parse(JSON.stringify(cd.attributes));
    if (attr?.children) delete attr.children;
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
