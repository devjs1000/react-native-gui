import { FrameworkType } from "../state/app.slice";
import to from 'to-case'
export const renderLayout = ({
  children,
  attributes,
  framework = "react-native",
  html = false,
}: LayoutProps) => {
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
              if (html && typeof val === "object") {
                const attrs = Object.keys(val);
                return `${key}=${attrs
                  .map((attr) => `${to.slug(attr)}:${val[attr]}`)
                  .join(";")}`;
              } else if (typeof val === "object") {
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

interface LayoutProps {
  children?: any;
  attributes?: {
    style?: {
      [key: string]: string;
    };
    [key: string]: any;
  };
  framework?: FrameworkType;
  html?: boolean;
}

const elementNameMapping: any = {
  "react-native": "View",
  react: "div",
};
