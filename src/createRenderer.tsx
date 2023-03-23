import React from "react";
import { getCreator } from "./creator/creator.get";

export function createRenderer(
  handlefocus: (ref: React.RefObject<any>, name: string) => () => void) {
  const renderUI = (ui: any, depth = 0) => {
    return (
      ui.map((item: any, index: number) => {
        const Creator: any = getCreator(item.type);

        const attributes = item?.attributes || {};
        const children = attributes?.children || [];
        const attrs = JSON.parse(JSON.stringify(attributes));
        console.log({ children });
        const el = (
          <Creator
            key={`${index}`}
            id={`${index}-${depth}`}
            handlefocus={handlefocus}
            {...attrs}
            children={children.length
              ? renderUI(children, depth + 1)?.map(
                (Child: any, i: number) => {
                  console.log({ Child });
                  return Child;
                }
              )
              : "empty"} />
        );
        return el;
      }) || ""
    );
  };
  return renderUI;
}
