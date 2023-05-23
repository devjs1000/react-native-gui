export const renderButton = ({
  children,
  attributes,
  variant = "Pressable",
  framework = "react-native",
}: ButtonProps) => {
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

interface ButtonProps {
  children?: any;

  attributes?: {
    style?: {
      [key: string]: string;
    };
    [key: string]: any;
  };
  variant?:
    | "Pressable"
    | "TouchableOpacity"
    | "TouchableHighlight"
    | "TouchableWithoutFeedback"
    | "TouchableNativeFeedback";
  framework?: "react-native" | "react";
}

const elementNameMapping: any = {
  "react-native": "Pressable",
  react: "button",
};
