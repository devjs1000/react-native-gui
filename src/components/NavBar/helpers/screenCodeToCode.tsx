import toRender from "../../../renderer/renderer.get";
import { FrameworkType } from "../../../state/app.slice";

export const screenCodeToCode = (
  myScreenCode: any,
  framework: FrameworkType,
  html = false
): any => {
  return [...myScreenCode]?.map((cd: any) => {
    const renderer = toRender[cd?.type];
    const children = cd.attributes.children;

    const attr = JSON.parse(JSON.stringify(cd.attributes));
    if (attr?.children) delete attr.children;
    if (typeof children === "string")
      return renderer?.({
        children,
        attributes: attr,
        framework,
        html: html,
      });
    return renderer?.({
      children: children ? screenCodeToCode(children, framework) : [],
      attributes: attr || {},
      framework,
      html: html,
    });
  });
};

export const createFinalCode = (
  screenCode: any,
  framework: FrameworkType,
  html = false
) => {
  const code = screenCodeToCode(screenCode, framework, html);
  const frameworkMap: any = {
    react: "body",
    "react-native": "",
  };
  if (framework == "react") {
    return `<${frameworkMap[framework]} style="margin:0;padding:0;" >${code.join("")}</${
      frameworkMap[framework]
    }>`;
  } else {
    return `<${frameworkMap[framework]}>${code.join("")}</${
      frameworkMap[framework]
    }>`;
  }
};
