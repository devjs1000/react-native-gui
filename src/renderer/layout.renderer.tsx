export const renderLayout = ({
  children,
  attributes,
  isWeb = false,
}: LayoutProps) => {
  const finalVariant = isWeb ? "div" : "View";
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
    ${children || ""} 
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
