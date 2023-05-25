import { FrameworkType } from "../state/app.slice";

export const renderLink = ({
  children,
  attributes,
  framework = "react-native",
}: LinkProps) => {
  const finalVariant = elementNameMapping[framework] || "div";

  const multiLevelJoin = (arr: any) => {
    return arr.map((item: any) => {
      if (Array.isArray(item)) {
        return multiLevelJoin(item);
      }
      return item;
    });
  };

  return `<${finalVariant}
    ${
      attributes
        ? Object.keys(attributes)
            .map((key) => {
              const val = attributes[key];
              if (typeof val === "object") {
                return `${key}={${JSON.stringify(val)}}`;
              }
              return `${key}="${attributes[key]}"`;
            })
            .join(" ")
        : ""
    }
  >
    ${
      Array.isArray(children)
        ? multiLevelJoin(children).join("")
        : children || ""
    }
    </${finalVariant}>`;
};

interface LinkProps {
  children?: any;
  attributes?: {
    style?: {
      [key: string]: string;
    };
    [key: string]: any;
  };
  framework?: FrameworkType;
}

const elementNameMapping: any = {
  "react-native": "Link",
  react: "a",
};
