import toRender from "../../../renderer/renderer.get";
import { FrameworkType } from "../../../state/app.slice";

export const screenCodeToCode = (
  myScreenCode: any,
  framework: FrameworkType
): any => {
  return [...myScreenCode]?.map((cd: any) => {
    const renderer = toRender[cd?.type];
    const children = cd.attributes.children;

    const attr = JSON.parse(JSON.stringify(cd.attributes));
    if (attr?.children) delete attr.children;
    if (typeof children === "string")
      return renderer({
        children,
        attributes: attr,
        framework,
      });
    return renderer({
      children: children ? screenCodeToCode(children, framework) : [],
      attributes: attr || {},
      framework,
    });
  });
};

export const createFinalCode = (screenCode: any, framework: FrameworkType) => {
  const code = screenCodeToCode(screenCode, framework);
  const finalCode = `<>${code.join("")}</>`;
  return finalCode;
};
