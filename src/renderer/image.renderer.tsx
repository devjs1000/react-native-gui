export const renderImage = ({
  attributes,
  framework = "react-native",
}: ImageProps) => {
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
    />`;
};

interface ImageProps {
  attributes?: {
    style?: {
      [key: string]: string;
    };
    source?: {
      uri: string;
    };
    src?: string;
    [key: string]: any;
  };
  framework?: "react-native" | "react";
}

const elementNameMapping: any = {
  "react-native": "Image",
  react: "img",
};
