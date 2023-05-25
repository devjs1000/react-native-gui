export const renderText = ({
  children,
  attributes,
  variant,
  framework = "react-native",
}: TextProps) => {
  const finalVariant = elementNameMapping[framework] || "div";
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

interface TextProps {
  children?: any;
  attributes?: {
    style: {
      [key: string]: string;
    };
    [key: string]: any;
  };
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  framework?: "react-native" | "react";
}

const elementNameMapping: any = {
  "react-native": "Text",
  react: "p",
};
