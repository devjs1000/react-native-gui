export const renderLayout = ({
  children,
  attributes,
  isWeb = false,
}: LayoutProps) => {
  const finalVariant = isWeb ? "div" : "View";
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
    ${ Array.isArray(children) ? multiLevelJoin(children).join("") : children || ""}
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
  isWeb?: boolean;
}
