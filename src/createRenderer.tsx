import React from "react";
import { getCreator } from "./creator/creator.get";
import { createId } from "./createId";

export function createRenderer(
  handlefocus: (ref: React.RefObject<any>, name: string) => () => void
) {
  const renderUI = (ui: any, depth = 0, prevKey = ``) => {
    return (
      ui?.map((item: any, index: number) => {
        const Creator: any = getCreator(item?.type);
        const attributes = item?.attributes || {};
        const children = attributes?.children || [];
        const attrs = JSON.parse(JSON.stringify(attributes));
        const id = createId(prevKey, index, depth);
        const el = (
          <Creator
            key={`${index}`}
            id={id}
            handlefocus={handlefocus}
            {...attrs}
            children={
              children.length
                ? renderUI(children, depth + 1, id)?.map(
                    (Child: any, i: number) => {
                      console.log({ Child });
                      return Child;
                    }
                  )
                : "empty"
            }
          />
        );
        return el;
      }) || ""
    );
  };
  return renderUI;
}


